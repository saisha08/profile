---
layout: default
title: Academics/Research
permalink: /academics-research/
---

<section class="section">
  <h2>Research</h2>

  <div class="academic-cards-stack">
    <!-- Duplicate cards as needed; replace text -->
    <article class="academic-card">
      <div class="content">
        <h3>Datathon and Machine Learning Competition, Indiana University</h3>
        <div class="meta">July 2025 - August 2025</div>
        <p>At Indiana University, I researched offensive language detection with <strong>Dr. Daniel Miehling</strong>, <strong>Professor Gunther Jikeli Jr.</strong>, and <strong>Professor Damir Cavar</strong>. I built and annotated a large dataset of social media posts, fine-tuned a HuggingFace transformer model in PyTorch, and improved its accuracy in detecting hate speech. Beyond the technical work, I explored the ethical questions around NLP, including how AI shapes content moderation, fairness, and policy. As the only high school student participating in the program, our team placed 3rd, earning recognition from the university.</p>
        <p style="margin-top: 1rem;"><a href="https://github.com/saisha08/Team-2---IU-Datathon-2025" target="_blank">View our full report →</a></p>
      </div>
    </article>
    <article class="academic-card">
      <div class="content">
        <h3>New York Academy of Science (NYAS) Ethical AI Challenge, Top Team Award</h3>
        <div class="meta">August 2024 - December 2024</div>
        <p>I collaborated with international researchers under the mentorship of <strong>Professor Christos Liambas (Aristotle University of Thessaloniki, Greece)</strong>, a digital forensics and computer science expert, to investigate the ethical implications of AI in education. As part of this work, I researched, designed, and piloted an innovative AI-driven solution aimed at addressing ethical challenges and implementation barriers in the education sector, helping to pioneer advancements in responsible AI. To ground the project in real-world needs, I partnered with three school districts across the United States, India, and Australia, gathering feedback and running controlled test groups that directly informed the development of the solution.</p>
        <p style="margin-top: 1rem;">
          <a href="{{ '/assets/EduTech Innovators.pdf' | relative_url }}" target="_blank">View our presentation →</a><br>
          <a href="{{ '/assets/NYAS Ethical AI Challenge Full Report.pdf' | relative_url }}" target="_blank">View our full report →</a>
        </p>
      </div>
    </article>
    <article class="academic-card">
      <div class="content">
        <h3>RoundPier Medical Competition</h3>
        <div class="meta">June 2023 - August 2023</div>
        <p>Authored and presented a comprehensive literary review paper, "<em>Rheumatoid Arthritis: Analyzing the Hormonal, Genetic, and Physiological Differences in Males and Females in the Development and Treatment of RA</em>," to a panel of medical professionals</p>
        <p style="margin-top: 1rem;"><a href="{{ '/assets/Component Paper RA, Saisha Siram, Saanika Parikh.pdf' | relative_url }}" target="_blank">View paper →</a></p>
      </div>
    </article>
  </div>

  <h2 style="margin-top: 3rem;">Academic Programs</h2>

  <div class="leadership-cards-stack">
    <article class="leadership-card" style="display: flex; align-items: center;">
      <div class="carousel-container">
        <div class="carousel" id="washu-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/Washu/IMG_7153.jpg' | relative_url }}" alt="WashU BOLD@Olin" style="width: 100%; height: 250px; object-fit: cover; display: block;">
          <img src="{{ '/assets/img/Washu/IMG_7147.jpg' | relative_url }}" alt="WashU BOLD@Olin" style="width: 100%; height: 250px; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/Washu/IMG_7156_(1).jpg' | relative_url }}" alt="WashU BOLD@Olin" style="width: 100%; height: 250px; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/Washu/IMG_7160.jpg' | relative_url }}" alt="WashU BOLD@Olin" style="width: 100%; height: 250px; object-fit: cover; display: none;">
        </div>
        <button class="carousel-btn prev" onclick="changeSlide('washu-carousel', -1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">‹</button>
        <button class="carousel-btn next" onclick="changeSlide('washu-carousel', 1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">›</button>
        <div class="carousel-dots" style="text-align: center; margin-top: 10px;">
          <span class="dot active" onclick="currentSlide('washu-carousel', 0)" style="height: 10px; width: 10px; background-color: #3eb0d2; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('washu-carousel', 1)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('washu-carousel', 2)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('washu-carousel', 3)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
        </div>
      </div>
      <div class="content">
        <h3>BOLD@Olin (Washington University)</h3>
        <div class="meta">June 2024 - July 2024</div>
        <p>Selected as 1 of 40 students nationwide for a highly competitive business program at Washington University's Olin Business School, demonstrating exceptional leadership and academic distinction. Completed rigorous college-level coursework in economics, marketing, professional development, and game theory, building a strong foundation in analytical thinking and strategic decision-making. Developed an innovative marketing campaign for Rosati-Kain High School to address post-COVID enrollment decline; awarded the top team proposal for strategic effectiveness and creativity.</p>
      </div>
    </article>
  </div>
</section>

<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>