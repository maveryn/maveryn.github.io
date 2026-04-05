---
layout: page
permalink: /repos/
title: Repos
description: Research code, benchmarks, and lightweight project hubs.
nav: true
nav_order: 3
_styles: |
  .post-header {
    display: none;
  }
---

{% if site.data.repositories.github_profile %}
<div class="repositories repositories-grid repositories-grid--profile">
  {% include repository/repo_user.liquid profile=site.data.repositories.github_profile %}
</div>
{% endif %}

{% if site.data.repositories.github_repos %}
## Selected Public Repositories

<div class="repositories repositories-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

<script defer src="{{ '/assets/js/github-repo-stats.js' | relative_url | bust_file_cache }}"></script>
