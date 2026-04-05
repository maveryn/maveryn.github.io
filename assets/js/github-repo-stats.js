function formatCount(value) {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  return response.json();
}

async function fetchAllOwnedRepos(username) {
  const repos = [];
  let page = 1;

  while (true) {
    const batch = await fetchJson(`https://api.github.com/users/${username}/repos?per_page=100&type=owner&page=${page}`);
    repos.push(...batch);
    if (batch.length < 100) {
      return repos;
    }
    page += 1;
  }
}

function updateRepoStars() {
  const repoCards = document.querySelectorAll("[data-github-repo]");
  repoCards.forEach(async (card) => {
    const repo = card.dataset.githubRepo;
    const target = card.querySelector(".js-github-repo-stars");
    if (!repo || !target) {
      return;
    }

    try {
      const data = await fetchJson(`https://api.github.com/repos/${repo}`);
      target.textContent = formatCount(data.stargazers_count || 0);
    } catch (error) {
      target.textContent = "N/A";
      console.warn("Could not fetch repo stats for", repo, error);
    }
  });
}

function updateProfileStats() {
  const profileCard = document.querySelector("[data-github-username]");
  if (!profileCard) {
    return;
  }

  const username = profileCard.dataset.githubUsername;
  const starsTarget = profileCard.querySelector(".js-github-profile-stars");
  const followersTarget = profileCard.querySelector(".js-github-profile-followers");
  const reposTarget = profileCard.querySelector(".js-github-profile-repos");

  if (!username || !starsTarget || !followersTarget || !reposTarget) {
    return;
  }

  (async () => {
    try {
      const [user, repos] = await Promise.all([
        fetchJson(`https://api.github.com/users/${username}`),
        fetchAllOwnedRepos(username),
      ]);

      const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
      starsTarget.textContent = formatCount(totalStars);
      followersTarget.textContent = formatCount(user.followers || 0);
      reposTarget.textContent = formatCount(user.public_repos || repos.length);
    } catch (error) {
      starsTarget.textContent = "N/A";
      followersTarget.textContent = "N/A";
      reposTarget.textContent = "N/A";
      console.warn("Could not fetch GitHub profile stats for", username, error);
    }
  })();
}

document.addEventListener("DOMContentLoaded", () => {
  updateRepoStars();
  updateProfileStats();
});
