---
layout: page
permalink: /repos/
title: Repos
description: Research code, benchmarks, and lightweight project hubs.
nav: true
nav_order: 3
---

This page highlights active research code, benchmarks, and lightweight project pages. Major paper
websites can be linked out as separate standalone sites, while this page remains the central index.

## Featured Research Artifacts

<div class="projects">
  <div class="container px-0">
    <div class="row row-cols-1 row-cols-md-2">
      {% assign featured_projects = site.projects | sort: "importance" %}
      {% for project in featured_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
</div>

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
