/* ===========================================================
   Sunrise Path — Rehabilitation Dashboard
   All data below is fictional sample/demo data.
   =========================================================== */

const STAGES = [
  "Initial Assessment",
  "Counseling Phase",
  "Medical Recovery",
  "Educational Reintegration",
  "Family Reintegration",
  "Follow-Up Monitoring",
  "Successfully Reintegrated"
];

const STAGE_ICONS = {
  "Initial Assessment": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  "Counseling Phase": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  "Medical Recovery": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>`,
  "Educational Reintegration": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  "Family Reintegration": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>`,
  "Follow-Up Monitoring": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  "Successfully Reintegrated": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 9.1 8.6 2 9.3l5.5 4.7L5.8 21 12 17.3 18.2 21l-1.7-7 5.5-4.7-7.1-.7z"/></svg>`
};

const AVATAR_COLORS = [
  "linear-gradient(135deg,#1F5D8C,#0A2647)",
  "linear-gradient(135deg,#D4AF37,#A8842A)",
  "linear-gradient(135deg,#4CAF50,#2E7D32)",
  "linear-gradient(135deg,#9C7BD9,#5E4B8B)",
  "linear-gradient(135deg,#E89A6C,#C06B3F)",
  "linear-gradient(135deg,#5DA9E9,#144272)"
];

const CHILDREN = [
  {
    id: "CH-1042", name: "Asha", age: 11, gender: "Female",
    rescueDate: "14 Mar 2026", worker: "Riya Menon", stage: "Counseling Phase",
    risk: "Medium", counselor: "Dr. Anjali Pillai", lastUpdate: "2 days ago",
    wellbeing: 7, readiness: 0, avatar: 0
  },
  {
    id: "CH-1078", name: "Kiran", age: 9, gender: "Male",
    rescueDate: "02 Apr 2026", worker: "Riya Menon", stage: "Medical Recovery",
    risk: "High", counselor: "Dr. Sameer Rao", lastUpdate: "Today",
    wellbeing: 5, readiness: 0, avatar: 1
  },
  {
    id: "CH-1103", name: "Meera", age: 14, gender: "Female",
    rescueDate: "19 Jan 2026", worker: "Riya Menon", stage: "Educational Reintegration",
    risk: "Low", counselor: "Dr. Anjali Pillai", lastUpdate: "5 days ago",
    wellbeing: 8, readiness: 0, avatar: 2
  },
  {
    id: "CH-1129", name: "Devan", age: 12, gender: "Male",
    rescueDate: "30 Nov 2025", worker: "Riya Menon", stage: "Family Reintegration",
    risk: "Low", counselor: "Dr. Sameer Rao", lastUpdate: "1 day ago",
    wellbeing: 8, readiness: 78, avatar: 3
  },
  {
    id: "CH-0987", name: "Lakshmi", age: 13, gender: "Female",
    rescueDate: "10 Sep 2025", worker: "Riya Menon", stage: "Follow-Up Monitoring",
    risk: "Low", counselor: "Dr. Anjali Pillai", lastUpdate: "3 days ago",
    wellbeing: 9, readiness: 92, avatar: 4
  },
  {
    id: "CH-1156", name: "Sahil", age: 10, gender: "Male",
    rescueDate: "28 May 2026", worker: "Riya Menon", stage: "Initial Assessment",
    risk: "High", counselor: "Dr. Sameer Rao", lastUpdate: "Today",
    wellbeing: 4, readiness: 0, avatar: 5
  },
  {
    id: "CH-1201", name: "Priya", age: 8, gender: "Female",
    rescueDate: "08 Jun 2026", worker: "Riya Menon", stage: "Initial Assessment",
    risk: "High", counselor: "Dr. Anjali Pillai", lastUpdate: "Today",
    wellbeing: 3, readiness: 0, avatar: 0
  },
  {
    id: "CH-0892", name: "Rahul", age: 15, gender: "Male",
    rescueDate: "15 Aug 2025", worker: "Riya Menon", stage: "Follow-Up Monitoring",
    risk: "Low", counselor: "Dr. Sameer Rao", lastUpdate: "1 week ago",
    wellbeing: 9, readiness: 95, avatar: 1
  },
  {
    id: "CH-1089", name: "Divya", age: 11, gender: "Female",
    rescueDate: "12 Apr 2026", worker: "Riya Menon", stage: "Medical Recovery",
    risk: "Medium", counselor: "Dr. Anjali Pillai", lastUpdate: "Yesterday",
    wellbeing: 6, readiness: 0, avatar: 2
  },
  {
    id: "CH-1145", name: "Arjun", age: 13, gender: "Male",
    rescueDate: "05 Feb 2026", worker: "Riya Menon", stage: "Educational Reintegration",
    risk: "Low", counselor: "Dr. Sameer Rao", lastUpdate: "4 days ago",
    wellbeing: 8, readiness: 0, avatar: 3
  },
  {
    id: "CH-0845", name: "Pooja", age: 10, gender: "Female",
    rescueDate: "20 Jul 2025", worker: "Riya Menon", stage: "Successfully Reintegrated",
    risk: "Low", counselor: "Dr. Anjali Pillai", lastUpdate: "2 weeks ago",
    wellbeing: 9, readiness: 100, avatar: 4
  },
  {
    id: "CH-1178", name: "Vikram", age: 14, gender: "Male",
    rescueDate: "25 May 2026", worker: "Riya Menon", stage: "Counseling Phase",
    risk: "Medium", counselor: "Dr. Sameer Rao", lastUpdate: "3 days ago",
    wellbeing: 6, readiness: 0, avatar: 5
  }
];

const NOTIFICATIONS = [
  {
    type: "session", title: "Counseling session in 2 hours",
    desc: "Asha (CH-1042) has a session with Dr. Anjali Pillai at 11:00 AM, Room 2B.",
    time: "Today · 9:00 AM",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    bg: "linear-gradient(135deg,var(--royal-soft),var(--royal))"
  },
  {
    type: "medical", title: "Medical review pending",
    desc: "Kiran (CH-1078) requires a follow-up check-up sign-off before Friday.",
    time: "Today · 8:15 AM",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>`,
    bg: "linear-gradient(135deg,#E89A6C,#C06B3F)"
  },
  {
    type: "newcase", title: "New case assigned",
    desc: "Priya (CH-1201) added for initial assessment. High priority intake.",
    time: "Today · 7:30 AM",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21C12 21 4 16.5 4 10.5C4 7.5 6.2 5.5 8.7 5.5C10.3 5.5 11.5 6.3 12 7.3C12.5 6.3 13.7 5.5 15.3 5.5C17.8 5.5 20 7.5 20 10.5C20 16.5 12 21 12 21Z"/></svg>`,
    bg: "linear-gradient(135deg,var(--gold-soft),var(--gold))"
  },
  {
    type: "followup", title: "Follow-up reminder",
    desc: "Lakshmi (CH-0987) is due for a quarterly wellbeing visit next week.",
    time: "Yesterday",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>`,
    bg: "linear-gradient(135deg,var(--success),#2E7D32)"
  }
];

const TIMELINE_STAGES = [
  { title: "Rescue", date: "14 Mar 2026", desc: "Child safely rescued and transported to a secure intake facility.", status: "done" },
  { title: "Shelter Placement", date: "15 Mar 2026", desc: "Placed in a safe, supervised shelter with dedicated caregivers.", status: "done" },
  { title: "Initial Assessment", date: "18 Mar 2026", desc: "Comprehensive physical and psychological assessment completed.", status: "done" },
  { title: "Counseling Started", date: "25 Mar 2026", desc: "Weekly trauma-informed counseling sessions began with Dr. Anjali Pillai.", status: "current" },
  { title: "Medical Examination", date: "Scheduled", desc: "Full medical examination and vaccination review to be scheduled.", status: "upcoming" },
  { title: "Education Enrollment", date: "Pending", desc: "Enrollment in age-appropriate schooling once stability is confirmed.", status: "upcoming" },
  { title: "Family Verification", date: "Pending", desc: "Home assessment and guardian background verification.", status: "upcoming" },
  { title: "Reintegration", date: "Pending", desc: "Gradual, supported return to family or community setting.", status: "upcoming" }
];

const SESSIONS = [
  { date: "08 Jun", month: "Jun", title: "Individual Session #6", wellbeing: 7, tag: "wb-high", notes: "Asha shared more openly about daily routines. Sleep has improved; appetite remains slightly low. Encouraged journaling exercise.", next: "Next: 18 Jun, 11:00 AM" },
  { date: "01 Jun", month: "Jun", title: "Individual Session #5", wellbeing: 6, tag: "wb-mid", notes: "Continued building trust. Engaged well in art-based therapy activity." },
  { date: "25 May", month: "May", title: "Group Session — Peer Circle", wellbeing: 6, tag: "wb-mid", notes: "Participated in group activity with two peers. Positive sign of social comfort." },
  { date: "18 May", month: "May", title: "Individual Session #4", wellbeing: 5, tag: "wb-mid", notes: "Some anxiety noted around evening hours. Introduced grounding breathing techniques." }
];

const TREATMENTS = [
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>`, name: "General Health Check-up", date: "02 Jun 2026", freq: "Completed" },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 20.5 3 13a4.95 4.95 0 1 1 7-7l.5.5.5-.5a4.95 4.95 0 1 1 7 7l-7.5 7.5Z"/></svg>`, name: "Vaccination — MMR Booster", date: "20 May 2026", freq: "Completed" },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`, name: "Dental Screening", date: "12 May 2026", freq: "Completed" }
];

const MEDICATIONS = [
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`, name: "Multivitamin Syrup", dose: "5ml, once daily after breakfast", freq: "Daily" },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 20.5 3 13a4.95 4.95 0 1 1 7-7l.5.5.5-.5a4.95 4.95 0 1 1 7 7l-7.5 7.5Z"/></svg>`, name: "Iron Supplement", dose: "1 tablet, after lunch", freq: "Daily" }
];

const MILESTONES = [
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 9.1 8.6 2 9.3l5.5 4.7L5.8 21 12 17.3 18.2 21l-1.7-7 5.5-4.7-7.1-.7z"/></svg>`, title: "Enrolled in Grade 6", desc: "Successfully enrolled at Green Valley Public School with full fee support.", date: "May 2026" },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`, title: "Completed Bridge Course", desc: "Finished a 6-week foundational literacy and numeracy bridge program.", date: "Apr 2026" },
  { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`, title: "Started Vocational Training", desc: "Enrolled in beginner-level tailoring & crafts program.", date: "Mar 2026" }
];

const FAMILY_STEPS = [
  { title: "Family Verification", status: "done", desc: "Identity and relationship of guardians confirmed.", meta: "Completed · 02 Apr 2026" },
  { title: "Home Assessment", status: "done", desc: "Home environment evaluated for safety and readiness.", meta: "Completed · 19 Apr 2026" },
  { title: "Guardian Interviews", status: "done", desc: "Structured interviews conducted with both guardians.", meta: "Completed · 03 May 2026" },
  { title: "Readiness Evaluation", status: "current", desc: "Joint evaluation on the child's emotional readiness.", meta: "In progress · expected 22 Jun 2026" },
  { title: "Reintegration Approval", status: "upcoming", desc: "Final approval from the case review board.", meta: "Pending" }
];

const ACTIVITY_FEED = [
  { date: "08 Jun 2026", title: "Home Visit Completed", desc: "Visited Lakshmi at her family home. She appeared happy and engaged.", tags: ["Home Visit", "Wellbeing: Positive"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>` },
  { date: "30 May 2026", title: "School Attendance Verified", desc: "Confirmed consistent attendance (18/20 school days) this month.", tags: ["School Attendance"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>` },
  { date: "22 May 2026", title: "Community Feedback", desc: "Local volunteer reports positive integration.", tags: ["Community Feedback"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` }
];

/* =========================================================
   HELPERS
   ========================================================= */
function initials(name){ return name.trim().slice(0,1).toUpperCase(); }

function riskClass(risk){
  if(risk === "Low") return "risk-low";
  if(risk === "Medium") return "risk-medium";
  return "risk-high";
}

function stageIndex(stage){ return STAGES.indexOf(stage); }

function showToast(text){
  const toast = document.getElementById("toast");
  document.getElementById("toast-text").textContent = text;
  toast.classList.add("show");
  setTimeout(()=> toast.classList.remove("show"), 2600);
}

/* =========================================================
   RENDER: STAT CARDS
   ========================================================= */
function renderStats(){
  const stats = [
    {
      label: "Children Under Rehabilitation", value: 24, suffix: "",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      iconBg: "linear-gradient(135deg, var(--royal), var(--navy))",
      trend: "+3 this month", trendType:"good", progress: 70
    },
    {
      label: "Counseling Sessions Completed", value: 186, suffix: "",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
      iconBg: "linear-gradient(135deg, #5DA9E9, var(--royal))",
      trend: "+12 this week", trendType:"good", progress: 85
    },
    {
      label: "Medical Cases Pending", value: 5, suffix: "",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>`,
      iconBg: "linear-gradient(135deg, #E89A6C, #C06B3F)",
      trend: "Review needed", trendType:"flat", progress: 35
    },
    {
      label: "Reintegration Success Rate", value: 91, suffix: "%",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 9.1 8.6 2 9.3l5.5 4.7L5.8 21 12 17.3 18.2 21l-1.7-7 5.5-4.7-7.1-.7z"/></svg>`,
      iconBg: "linear-gradient(135deg, var(--gold-soft), var(--gold))",
      trend: "+4% vs last year", trendType:"good", progress: 91
    },
    {
      label: "Follow-up Visits Scheduled", value: 14, suffix: "",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>`,
      iconBg: "linear-gradient(135deg, var(--success), #2E7D32)",
      trend: "This month", trendType:"flat", progress: 55
    }
  ];

  const grid = document.getElementById("stats-grid");
  grid.innerHTML = stats.map(s => `
    <div class="stat-card" style="--card-tint: ${s.trendType==='good' ? 'rgba(76,175,80,0.10)' : 'rgba(212,175,55,0.10)'};">
      <div class="stat-top">
        <div class="stat-icon" style="--icon-bg:${s.iconBg}; background:${s.iconBg};">${s.icon}</div>
        <div class="stat-trend ${s.trendType==='flat'?'flat':''}">
          ${s.trendType==='good' ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>`}
          ${s.trend}
        </div>
      </div>
      <div class="stat-value" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-progress-track"><div class="stat-progress-fill" data-progress="${s.progress}"></div></div>
    </div>
  `).join("");

  requestAnimationFrame(()=>{
    document.querySelectorAll(".stat-value").forEach(el => animateCount(el));
    document.querySelectorAll(".stat-progress-fill").forEach(el => {
      setTimeout(()=> el.style.width = el.dataset.progress + "%", 150);
    });
  });
}

function animateCount(el){
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1200;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(target * eased);
    el.textContent = val + suffix;
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* =========================================================
   RENDER: CHILD CARDS
   ========================================================= */
function buildChildCard(child){
  const idx = stageIndex(child.stage);
  const totalSteps = STAGES.length - 1;
  const stepsHtml = STAGES.slice(0, totalSteps).map((s, i) => {
    let cls = "";
    if(i < idx) cls = "done";
    else if(i === idx) cls = "current";
    return `<div class="journey-step ${cls}"></div>`;
  }).join("");

  return `
  <div class="child-card" data-stage="${child.stage}" data-id="${child.id}">
    <div class="child-card-top">
      <div class="child-avatar glass" style="background:${AVATAR_COLORS[child.avatar]};">${initials(child.name)}</div>
      <div class="child-meta">
        <div class="cname">${child.name}</div>
        <div class="cdetails">
          <span>${child.age} yrs</span><span class="dot-sep"></span><span>${child.gender}</span><span class="dot-sep"></span><span>${child.id}</span>
        </div>
      </div>
      <span class="risk-chip ${riskClass(child.risk)}">${child.risk} Risk</span>
    </div>
    <div class="child-card-body">
      <div class="stage-row">
        <span class="stage-label">${STAGE_ICONS[child.stage]}${child.stage}</span>
        <span class="last-update">Updated ${child.lastUpdate}</span>
      </div>
      <div class="journey-track">${stepsHtml}</div>
      <div class="journey-caption"><span>Rescue</span><span>Reintegrated</span></div>
      <div class="counselor-row">
        <div class="counselor-avatar">${child.counselor.split(" ").map(p=>p[0]).slice(-2).join("")}</div>
        <div class="counselor-info">
          <div class="clabel">Assigned Counselor</div>
          <div class="cname2">${child.counselor}</div>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" data-action="view" data-id="${child.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        View Case
      </button>
      <button class="btn btn-ghost" data-action="update" data-id="${child.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>
        Update
      </button>
      <button class="btn btn-gold" data-action="schedule" data-id="${child.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        Schedule
      </button>
    </div>
  </div>`;
}

function renderCases(){
  // Homepage: show priority cases (high/medium risk first, limited to 4)
  const grid = document.getElementById("cases-grid");
  const priorityCases = CHILDREN
    .filter(c => c.risk === "High" || c.risk === "Medium")
    .slice(0, 4);
  grid.innerHTML = priorityCases.map(buildChildCard).join("");
  attachCardActions(grid);

  // Cases page: show all 12 cards
  const grid2 = document.getElementById("cases-grid-2");
  grid2.innerHTML = CHILDREN.map(buildChildCard).join("");
  attachCardActions(grid2);
}

function attachCardActions(container){
  container.querySelectorAll('[data-action="view"]').forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      const id = e.currentTarget.dataset.id;
      openProfile(id);
    });
  });
  container.querySelectorAll('[data-action="update"]').forEach(btn=>{
    btn.addEventListener("click", (e)=> {
      e.stopPropagation();
      showToast("Progress update saved");
    });
  });
  container.querySelectorAll('[data-action="schedule"]').forEach(btn=>{
    btn.addEventListener("click", (e)=> {
      e.stopPropagation();
      showToast("Session scheduled successfully");
    });
  });
  container.querySelectorAll('.child-card').forEach(card=>{
    card.addEventListener("click", ()=>{
      openProfile(card.dataset.id);
    });
    card.style.cursor = "pointer";
  });
}

/* =========================================================
   RENDER: NOTIFICATIONS
   ========================================================= */
function renderNotifications(){
  const list = document.getElementById("notif-list");
  list.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item">
      <div class="notif-icon" style="background:${n.bg};">${n.icon}</div>
      <div class="notif-body">
        <div class="notif-title">${n.title}</div>
        <div class="notif-desc">${n.desc}</div>
        <div class="notif-time">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          ${n.time}
        </div>
      </div>
    </div>
  `).join("");
}

/* =========================================================
   RENDER: PROFILE
   ========================================================= */
function renderProfileHeader(child){
  const header = document.getElementById("profile-header");
  header.innerHTML = `
    <div class="profile-avatar-lg" style="background:${AVATAR_COLORS[child.avatar]};">${initials(child.name)}</div>
    <div class="profile-info">
      <h1>${child.name} <span class="profile-id-tag">${child.id}</span></h1>
      <div class="profile-meta-row">
        <div class="pmeta"><div class="pl">Age</div><div class="pv">${child.age} years</div></div>
        <div class="pmeta"><div class="pl">Gender</div><div class="pv">${child.gender}</div></div>
        <div class="pmeta"><div class="pl">Rescue Date</div><div class="pv">${child.rescueDate}</div></div>
        <div class="pmeta"><div class="pl">Assigned Worker</div><div class="pv">${child.worker}</div></div>
      </div>
    </div>
    <div class="profile-stage-badge">
      <div class="lbl">Current Stage</div>
      <div class="stage">${child.stage}</div>
    </div>
  `;
}

function renderTimeline(){
  const tl = document.getElementById("profile-timeline");
  tl.innerHTML = TIMELINE_STAGES.map(stage => {
    const tagClass = stage.status === "done" ? "tag-done" : stage.status === "current" ? "tag-current" : "tag-upcoming";
    const tagText = stage.status === "done" ? "Completed" : stage.status === "current" ? "In Progress" : "Upcoming";
    const icon = stage.status === "done"
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>`
      : stage.status === "current"
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"/></svg>`;
    return `
    <div class="tl-item ${stage.status}">
      <div class="tl-dot">${icon}</div>
      <div class="tl-card">
        <div class="tl-top-row">
          <div class="tl-title">${stage.title}</div>
          <div class="tl-date">${stage.date}</div>
        </div>
        <div class="tl-desc">${stage.desc}</div>
        <span class="tl-status-tag ${tagClass}">${tagText}</span>
      </div>
    </div>`;
  }).join("");
}

function renderCounseling(child){
  const sessionList = document.getElementById("session-list");
  sessionList.innerHTML = SESSIONS.map(s => `
    <div class="session-item">
      <div class="session-date-box"><span class="d">${s.date.split(" ")[0]}</span><span class="m">${s.month}</span></div>
      <div class="session-content">
        <div class="stitle">
          <span>${s.title}</span>
          <span class="wellbeing-tag ${s.tag}">Wellbeing ${s.wellbeing}/10</span>
        </div>
        <div class="snotes">${s.notes}</div>
        ${s.next ? `<div class="next-appt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>${s.next}</div>` : ""}
      </div>
    </div>
  `).join("");

  const ring = document.getElementById("wellbeing-ring");
  const num = document.getElementById("wellbeing-num");
  const circumference = 339;
  const score = child.wellbeing;
  const offset = circumference - (circumference * (score/10));
  setTimeout(()=> ring.style.strokeDashoffset = offset, 200);
  animateRingNumber(num, score, 0, false);
}

function animateRingNumber(el, target, decimals=0, isPercent=false){
  const duration = 1200;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now-start)/duration, 1);
    const eased = 1 - Math.pow(1-progress, 3);
    const val = target * eased;
    el.textContent = isPercent ? Math.round(val) + "%" : val.toFixed(decimals);
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function renderMedical(){
  document.getElementById("treatment-list").innerHTML = TREATMENTS.map(t => `
    <div class="med-item">
      <div class="med-info">
        <div class="med-icon">${t.icon}</div>
        <div>
          <div class="med-name">${t.name}</div>
          <div class="med-dose">${t.date}</div>
        </div>
      </div>
      <span class="med-freq">${t.freq}</span>
    </div>
  `).join("");

  document.getElementById("medication-list").innerHTML = MEDICATIONS.map(m => `
    <div class="med-item">
      <div class="med-info">
        <div class="med-icon">${m.icon}</div>
        <div>
          <div class="med-name">${m.name}</div>
          <div class="med-dose">${m.dose}</div>
        </div>
      </div>
      <span class="med-freq">${m.freq}</span>
    </div>
  `).join("");
}

function renderEducation(){
  document.getElementById("milestone-list").innerHTML = MILESTONES.map(m => `
    <div class="milestone-row">
      <div class="milestone-icon">${m.icon}</div>
      <div class="milestone-text">
        <div class="mtitle">${m.title}</div>
        <div class="mdesc">${m.desc}</div>
        <div class="mdate">${m.date}</div>
      </div>
    </div>
  `).join("");

  const grid = document.getElementById("attendance-grid");
  const pattern = ["P","P","P","P","P","A","W","P","P","P","A","P","P","W","P","P","P","P","P","A","W","P","P","P","P","P","P","W"];
  grid.innerHTML = pattern.map((p,i) => {
    let cls = "att-weekend", label = "—";
    if(p === "P"){ cls = "att-present"; label = (i+1); }
    else if(p === "A"){ cls = "att-absent"; label = (i+1); }
    else { label = (i+1); }
    return `<div class="att-cell ${cls}">${label}</div>`;
  }).join("");
}

function renderFamily(child){
  const stepIcons = {
    done: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>`,
    current: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    upcoming: null
  };
  document.getElementById("family-steps").innerHTML = FAMILY_STEPS.map((step, i) => `
    <div class="step-item ${step.status}">
      <div class="step-marker">
        <div class="step-circle">${stepIcons[step.status] || (i+1)}</div>
        <div class="step-line"></div>
      </div>
      <div class="step-content">
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
        <div class="step-meta">${step.meta}</div>
      </div>
    </div>
  `).join("");

  const ring = document.getElementById("readiness-ring");
  const num = document.getElementById("readiness-num");
  const circumference = 239;
  const val = child.readiness || 78;
  const offset = circumference - (circumference * (val/100));
  setTimeout(()=> ring.style.strokeDashoffset = offset, 200);
  animateRingNumber(num, val, 0, true);
}

function renderFollowup(){
  document.getElementById("activity-feed").innerHTML = ACTIVITY_FEED.map(a => `
    <div class="activity-item">
      <div class="activity-dot">${a.icon}</div>
      <div class="activity-card">
        <div class="activity-top">
          <div class="activity-title">${a.title}</div>
          <div class="activity-date">${a.date}</div>
        </div>
        <div class="activity-desc">${a.desc}</div>
        <div class="activity-tags">${a.tags.map(t=>`<span class="activity-tag">${t}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");
}

function renderHomeRing(){
  const ring = document.getElementById("home-ring");
  const num = document.getElementById("home-ring-num");
  const circumference = 214;
  const val = 78;
  const offset = circumference - (circumference * (val/100));
  setTimeout(()=> ring.style.strokeDashoffset = offset, 300);
  animateRingNumber(num, val, 0, true);
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function switchView(viewName){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-" + viewName).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(n => {
    n.classList.toggle("active", n.dataset.view === viewName);
  });
  window.scrollTo({top:0, behavior:"smooth"});
}

function openProfile(id){
  const child = CHILDREN.find(c => c.id === id) || CHILDREN[0];
  renderProfileHeader(child);
  renderTimeline();
  renderCounseling(child);
  renderMedical();
  renderEducation();
  renderFamily(child);
  renderFollowup();
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === "timeline"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.dataset.tab === "timeline"));
  switchView("profile");
}

function initNav(){
  document.querySelectorAll(".nav-item[data-view]").forEach(item => {
    item.addEventListener("click", () => switchView(item.dataset.view));
  });
  document.querySelectorAll(".back-link[data-view]").forEach(item => {
    item.addEventListener("click", () => switchView(item.dataset.view));
  });
  document.querySelectorAll(".view-all[data-view]").forEach(item => {
    item.addEventListener("click", () => switchView(item.dataset.view));
  });
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`.tab-panel[data-tab="${tab.dataset.tab}"]`).classList.add("active");
    });
  });
}

function initFilters(){
  function setupPills(selector, gridSelector){
    const pillContainer = document.querySelector(selector);
    if (!pillContainer) return;

    pillContainer.querySelectorAll(".pill").forEach(pill => {
      pill.addEventListener("click", () => {
        pillContainer.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const filter = pill.dataset.filter;
        document.querySelectorAll(gridSelector + " .child-card").forEach(card => {
          card.style.display = (filter === "all" || card.dataset.stage === filter) ? "" : "none";
        });
      });
    });
  }
  setupPills("#filter-pills", "#cases-grid-2");
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderCases();
  renderNotifications();
  renderHomeRing();
  initNav();
  initFilters();
});
