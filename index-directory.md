---
title: "INDEX"
description: "A personal index of 25 things worth clicking."
permalink: /index/
body_class: "index-theme"
---

<div class="index-page">
  <header class="index-hero" aria-labelledby="index-heading">
    <div class="index-hero-top">
      <h1 id="index-heading">INDEX</h1>
      <p class="index-range">001—025</p>
    </div>
    <p class="index-kicker">A PERSONAL INDEX</p>
  </header>

  <ol class="index-list" aria-label="A personal index of 25 recommendations">
    {% for item in site.data.curated_index %}
    <li class="index-item">
      <a class="index-row" href="{{ item.url | escape }}" target="_blank" rel="noopener noreferrer">
        <span class="index-number" aria-hidden="true">{{ item.number }}</span>
        <span class="index-category">{{ item.category | escape }}</span>
        <span class="index-title">
          <span class="index-title-main">{{ item.title | escape }}</span>
          <span class="index-meta">{{ item.meta | escape }}</span>
        </span>
        <span class="index-descriptor">{{ item.descriptor | escape }}</span>
        <span class="index-arrow" aria-hidden="true">↗</span>
      </a>
    </li>
    {% endfor %}
  </ol>

  <footer class="index-page-footer">
    <span>025 ITEMS / UPDATED 2026</span>
    <span>MORE SOON.</span>
  </footer>
</div>
