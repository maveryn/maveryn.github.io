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
    max-width: 24rem;
    margin: 0 0 1.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid rgba(20, 50, 74, 0.12);
  }

  .bib-filter-label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--global-text-color-light);
  }

  .bib-filter .bibsearch-form-input {
    margin: 0;
    min-height: 2.4rem;
    padding: 0.35rem 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }

  .bib-filter .bibsearch-form-input:focus {
    border: 0;
    box-shadow: none;
    outline: none;
  }

  .publications .links .btn {
    text-transform: none !important;
    letter-spacing: normal;
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
