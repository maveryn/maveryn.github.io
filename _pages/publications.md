---
layout: page
permalink: /publications/
title: Publications
description: Selected publications and abstracts.
nav: true
nav_order: 2
---

A curated list of publications imported from the previous site and normalized into BibTeX for
easier maintenance. Selected publications stay pinned in the custom order below, while other
publications are grouped by year with newer work first.

{% include bib_search.liquid %}

## Selected Publications

<div class="publications">
  {% bibliography --group_by none --query @*[selected=true]* %}
</div>

## Other Publications

<div class="publications">
  {% bibliography --query @*[selected=false]* %}
</div>
