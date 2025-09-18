---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <img src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="Profile photo of {{ site.title }}">
  <div class="intro">
    <h1>Hello! I'm {{ site.title }}.</h1>
    <p>I’m a high‑school senior with interests spanning <strong>computer science</strong>, <strong>research</strong>, <strong>arts</strong>, and <strong>leadership</strong>. This site highlights a concise selection of my work for college applications.</p>
    <p><a class="btn" href="{{ '/resume/' | relative_url }}">View my resume</a></p>
  </div>
</section>

<section class="section">
  <h2>Highlights</h2>
  <div class="card-grid">
    <article class="card">
      <img src="{{ '/assets/img/sample-academics.jpg' | relative_url }}" alt="Poster presentation">
      <div class="content">
        <h3>Poster Presentation Finalist</h3>
        <div class="meta">Regional Science Fair · 2025</div>
        <p>Summarize your project in one or two sentences. Add award or placement.</p>
      </div>
    </article>
    <article class="card">
      <img src="{{ '/assets/img/sample-work.jpg' | relative_url }}" alt="Internship photo">
      <div class="content">
        <h3>Summer Research Intern</h3>
        <div class="meta">Lab / Company · 2024</div>
        <p>One‑sentence impact: what you built, measured, or contributed.</p>
      </div>
    </article>
    <article class="card">
      <img src="{{ '/assets/img/sample-arts.jpg' | relative_url }}" alt="Artwork photo">
      <div class="content">
        <h3>National Scholastic Art Honorable Mention</h3>
        <div class="meta">Mixed Media · 2024</div>
        <p>Brief description of the piece or series.</p>
      </div>
    </article>
  </div>
</section>