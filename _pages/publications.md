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
