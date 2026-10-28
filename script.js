// Sample blog posts
const posts = [
  {
    id: 1,
    title: "Getting Started with Modern CSS",
    date: "2026-08-10",
    readTime: "5 min read",
    excerpt: "CSS has evolved dramatically. Learn about container queries, cascade layers, and the new color functions that make modern styling a joy.",
    link: "#"
  },
  {
    id: 2,
    title: "Building Accessible Components",
    date: "2026-07-28",
    readTime: "7 min read",
    excerpt: "Accessibility isn't a checklist—it's a mindset. Walk through building a fully accessible dropdown menu from scratch.",
    link: "#"
  },
  {
    id: 3,
    title: "The Art of Code Review",
    date: "2026-07-15",
    readTime: "6 min read",
    excerpt: "Code reviews are where teams learn. Here's a framework for reviews that catch bugs, share knowledge, and keep velocity high.",
    link: "#"
  },
  {
    id: 4,
    title: "TypeScript Patterns I Actually Use",
    date: "2026-06-30",
    readTime: "8 min read",
    excerpt: "Beyond the basics: discriminated unions, template literal types, and conditional types that solve real problems.",
    link: "#"
  },
  {
    id: 5,
    title: "Designing for Dark Mode",
    date: "2026-06-12",
    readTime: "4 min read",
    excerpt: "Dark mode isn't just inverting colors. A practical guide to color tokens, media queries, and avoiding the flash of wrong theme.",
    link: "#"
  },
  {
    id: 6,
    title: "Why I Switched to Vite",
    date: "2026-05-20",
    readTime: "5 min read",
    excerpt: "From Webpack to Vite: faster dev servers, simpler config, and a plugin ecosystem that just works.",
    link: "#"
  }
];

// Daily journal entries grouped by date
const routineDays = [
  {
    date: "2026-10-25",
    items: []
  },
  {
    date: "2026-10-24",
    items: [
      { time: "6:00 AM", title: "Early Start", desc: "Woke up at 6:00 AM and got ready for the day." },
      { time: "Morning", title: "Football Match", desc: "Played a great game, and we won in a penalty shootout." },
      { time: "10:00 AM", title: "Back Home", desc: "Returned home after the match." },
      { time: "11:30 AM", title: "Movie: 418", desc: "Watched the horror movie 418. The sound was excellent; I’d rate it 2.5 out of 5." },
      { time: "Dinner", title: "Curd Rice", desc: "Had curd rice for dinner." }
    ]
  }
];

// Experience & stories
const experiences = [
  {
    tag: "Lesson Learned",
    title: "When the Model Works in Sim but Fails on Hardware",
    desc: "Quantization, memory layout, and sensor noise — the gap between PyTorch and a Cortex-M7 is wider than you think. How we closed it with INT8 calibration and a custom memory allocator.",
    link: "#"
  },
  {
    tag: "Hard Problem",
    title: "Debugging a Phantom CAN Bus Error at 2 AM",
    desc: "A race condition between two ECUs that only appeared under thermal stress. The fix: a 3-line state machine change and a week of chamber testing.",
    link: "#"
  },
  {
    tag: "Shipping Story",
    title: "From Research Prototype to Production in 6 Months",
    desc: "The process: requirements → ISO 26262 ASIL-B decomposition → MISRA C++ compliance → HIL validation. What we automated vs. what needed human judgment.",
    link: "#"
  },
  {
    tag: "Mindset Shift",
    title: "Why I Started Writing Design Docs Before Code",
    desc: "In automotive, a 2-page RFC saves 2 weeks of rework. The template I use: problem, constraints, alternatives, decision, risks, rollback plan.",
    link: "#"
  },
  {
    tag: "Tooling Win",
    title: "Automating HIL Test Reports with Python + Jinja2",
    desc: "Replaced 4 hours of manual Excel work per sprint with a 30-second script. The ROI on internal tooling is real — if you treat it like product work.",
    link: "#"
  },
  {
    tag: "Career Reflection",
    title: "What 4 Years in Automotive Taught Me About Software Quality",
    desc: "Determinism > cleverness. Observability is a first-class requirement. And the best engineers are the ones who say 'I don't know, let me verify.'",
    link: "#"
  }
];

// Format date nicely
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Render posts to the grid
function renderPosts() {
  const grid = document.getElementById('post-grid');
  if (!grid) return;

  grid.innerHTML = posts.map(post => `
    <article class="post-card">
      <div class="post-meta">
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <span>${post.readTime}</span>
      </div>
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p class="post-excerpt">${post.excerpt}</p>
    </article>
  `).join('');
}

// Handle newsletter subscription
function initSubscribeForm() {
  const form = document.getElementById('subscribe-form');
  const message = document.getElementById('form-message');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;

    // Simulate API call
    message.textContent = 'Subscribing...';
    message.style.color = '#fbbf24';

    setTimeout(() => {
      message.textContent = `Thanks for subscribing, ${email}! 🎉`;
      message.style.color = '#a3e635';
      form.reset();
    }, 1000);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Render daily routine timeline
function renderRoutine() {
  const container = document.getElementById('routine-timeline');
  if (!container) return;

  container.innerHTML = routineDays.map(day => `
    <article class="routine-day" aria-labelledby="routine-date-${day.date}">
      <h3 class="routine-date" id="routine-date-${day.date}">
        <time datetime="${day.date}">${formatDate(day.date)}</time>
      </h3>
      ${day.items.length ? `<div class="timeline">
        ${day.items.map(item => `
          <div class="timeline-item">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-time">${item.time}</div>
            <div class="timeline-content">
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>` : '<p class="routine-empty">No entries yet. Add today’s activities whenever you’re ready.</p>'}
    </article>
  `).join('');
}

// Render experience cards
function renderExperiences() {
  const container = document.getElementById('experience-grid');
  if (!container) return;

  container.innerHTML = experiences.map(exp => `
    <article class="experience-card">
      <span class="exp-tag">${exp.tag}</span>
      <h3>${exp.title}</h3>
      <p>${exp.desc}</p>
      <a href="${exp.link}" class="exp-link">Read more →</a>
    </article>
  `).join('');
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
  renderRoutine();
  renderExperiences();
  initSubscribeForm();
  initSmoothScroll();
});