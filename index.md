---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div class="intro">
    <h1>Hello! I'm {{ site.title }}.</h1>
    <p>I'm a high‑school senior with interests spanning <strong>computer science</strong>, <strong>research</strong>, <strong>arts</strong>, and <strong>leadership</strong>. This site highlights a concise selection of my work for college applications. <a href="{{ '/resume/' | relative_url }}">View my resume</a></p>
  </div>
</section>

<section class="section">
  <h2>Highlights</h2>
  <div class="card-grid">
    <article class="card">
      <img src="{{ '/assets/img/sample-academics.jpg' | relative_url }}" alt="NYAS Ethical AI Challenge">
      <div class="content">
        <h3>NYAS Ethical AI Challenge - Top Team Award</h3>
        <div class="meta">New York Academy of Science · 2024</div>
        <p>Collaborated with international researchers to investigate ethical implications of AI in education, designing innovative solutions with real-world school district partnerships.</p>
      </div>
    </article>
    <article class="card">
      <img src="{{ '/assets/img/sample-work.jpg' | relative_url }}" alt="Indiana University Research">
      <div class="content">
        <h3>Indiana University Datathon - 3rd Place</h3>
        <div class="meta">Machine Learning Competition · 2025</div>
        <p>Researched offensive language detection, built datasets, fine-tuned HuggingFace transformer models, and explored ethical questions around NLP and content moderation.</p>
      </div>
    </article>
    <article class="card">
      <img src="{{ '/assets/img/sample-arts.jpg' | relative_url }}" alt="Medical Research">
      <div class="content">
        <h3>RoundPier Medical Competition</h3>
        <div class="meta">Medical Research · 2023</div>
        <p>Authored comprehensive literary review on rheumatoid arthritis, analyzing hormonal, genetic, and physiological differences between males and females in RA development and treatment.</p>
      </div>
    </article>
  </div>
</section>