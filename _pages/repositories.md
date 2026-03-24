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

{% if site.data.repositories.github_users %}
## GitHub Profile

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.github_repos %}
## Selected Public Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
