---
layout: default
title: Home
nav_order: 1
description: "IBDP Resources - Comprehensive IB resources for all subjects"
permalink: /
---

## Welcome to IBDP Resources

Your comprehensive resource for International Baccalaureate studies. Navigate through all subject groups to access notes, practice questions, past papers, and IA guidance.

### Subject Launcher

<style>
.subject-group { padding: 15px; margin-bottom: 15px; }
.subject-item { margin: 10px 0; }
.subject-name { font-weight: bold; cursor: pointer; }
.subject-name:hover { text-decoration: underline; }
.level-options { margin-left: 20px; margin-top: 5px; display: none; }
.level-options.show { display: block; }
.no-content { color: #999; }
</style>

<script>
function toggleLevels(subjectId) {
  var element = document.getElementById(subjectId);
  if (element.classList.contains('show')) {
    element.classList.remove('show');
  } else {
    element.classList.add('show');
  }
}
</script>

<div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 20px 0;">

  <div class="subject-group" style="border-left: 4px solid purple;">
    <h3>Group 1 – Studies in Language & Literature</h3>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('english-langlit-levels')">English Lang & Lit</span>
      <div id="english-langlit-levels" class="level-options">
        <p><a href="/subjects/group1/english-langlit/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group1/english-langlit/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('chinese-a-levels')">Chinese A</span>
      <div id="chinese-a-levels" class="level-options">
        <p><a href="/subjects/group1/chinese-a/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group1/chinese-a/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
  </div>

  <div class="subject-group" style="border-left: 4px solid teal;">
    <h3>Group 2 – Language Acquisition</h3>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('english-b-levels')">English B</span>
      <div id="english-b-levels" class="level-options">
        <p><a href="/subjects/group2/english-b/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group2/english-b/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('chinese-b-levels')">Chinese B</span>
      <div id="chinese-b-levels" class="level-options">
        <p><a href="/subjects/group2/chinese-b/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group2/chinese-b/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('spanish-ab-levels')">Spanish ab initio</span>
      <div id="spanish-ab-levels" class="level-options">
        <p><a href="/subjects/group2/spanish-ab/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
  </div>

  <div class="subject-group" style="border-left: 4px solid orange;">
    <h3>Group 3 – Individuals & Societies</h3>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('business-levels')">Business</span>
      <div id="business-levels" class="level-options">
        <p><a href="/subjects/group3/business/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group3/business/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('economics-levels')">Economics</span>
      <div id="economics-levels" class="level-options">
        <p><a href="/subjects/group3/economics/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group3/economics/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('psychology-levels')">Psychology</span>
      <div id="psychology-levels" class="level-options">
        <p><a href="/subjects/group3/psychology/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group3/psychology/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('evm-levels')">Environmental Systems & Societies</span>
      <div id="evm-levels" class="level-options">
        <p><a href="/subjects/group3/evm/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group3/evm/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
  </div>

  <div class="subject-group" style="border-left: 4px solid blue;">
    <h3>Group 4 – Sciences</h3>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('physics-levels')">Physics</span>
      <div id="physics-levels" class="level-options">
        <p><a href="/subjects/group4/physics/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group4/physics/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('chemistry-levels')">Chemistry</span>
      <div id="chemistry-levels" class="level-options">
        <p><a href="/subjects/group4/chemistry/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group4/chemistry/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('biology-levels')">Biology</span>
      <div id="biology-levels" class="level-options">
        <p><a href="/subjects/group4/biology/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group4/biology/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('computer-science-levels')">Computer Science</span>
      <div id="computer-science-levels" class="level-options">
        <p><a href="/subjects/group4/computer-science/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group4/computer-science/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
  </div>

  <div class="subject-group" style="border-left: 4px solid green;">
    <h3>Group 5 – Mathematics</h3>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('math-aa-levels')">Math AA</span>
      <div id="math-aa-levels" class="level-options">
        <p><a href="/subjects/group5/math-aa/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group5/math-aa/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
    
    <div class="subject-item">
      <span class="subject-name" onclick="toggleLevels('math-ai-levels')">Math AI</span>
      <div id="math-ai-levels" class="level-options">
        <p><a href="/subjects/group5/math-ai/hl/">→ HL (Higher Level)</a></p>
        <p><a href="/subjects/group5/math-ai/sl/">→ SL (Standard Level)</a></p>
      </div>
    </div>
  </div>

</div>

### Quick Links

- [About IBDP Resources](/about/)
- [Question Bank](/questionbank/) - Interactive past paper database with topic filters
- [Study Tools & Resources](/tools/)
- [Contribute](/contribute/)
- [Quick Upload Guide](/quick-upload.html) - Add content in 3 steps
- [Full Upload Guide](/UPLOAD_GUIDE.html) - Complete documentation
- [Announcements](/announcements/)

---

*This site is optimized for desktop viewing (minimum 1200px width)*
