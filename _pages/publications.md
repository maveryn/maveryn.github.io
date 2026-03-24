---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
_styles: |
  .post-header {
    display: none;
  }

  .bib-filter {
    max-width: 30rem;
    margin: 0 0 1.75rem;
    padding: 0.95rem 1rem 1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.9rem;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 10px 24px rgba(20, 50, 74, 0.05);
  }

  .bib-filter-label {
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--global-text-color-light);
  }

  .bib-filter .bibsearch-form-input {
    margin: 0;
    border-radius: 0.7rem;
  }
---

{% include bib_search.liquid %}

## Selected Publications

<div class="publications">
  {% bibliography --group_by none --query @*[selected=true]* %}
</div>

## Other Publications

<div class="publications">
  {% bibliography --query @*[selected=false]* %}
</div>
