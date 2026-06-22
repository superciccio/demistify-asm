/* Lightweight progress tracking — no backend, no accounts.
   Marks the current lesson as visited in localStorage and reflects ✓ on any
   lesson links/cards that carry a data-progress-id. Degrades silently if
   storage is unavailable (private mode, etc.). */

(function () {
  const KEY = "dasm:visited";

  function load() {
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); }
    catch (e) { return new Set(); }
  }
  function save(set) {
    try { localStorage.setItem(KEY, JSON.stringify([...set])); } catch (e) {}
  }

  const visited = load();

  // Mark the lesson we're currently on (the lesson-grid carries its id).
  const grid = document.querySelector("[data-lesson-id]");
  if (grid) { visited.add(grid.dataset.lessonId); save(visited); }

  // Reflect ✓ everywhere a progress id appears (TOC + landing cards).
  document.querySelectorAll("[data-progress-id]").forEach((el) => {
    if (visited.has(el.dataset.progressId)) el.classList.add("is-visited");
  });

  // Toggle the TOC on mobile.
  const toc = document.querySelector(".toc");
  const tocToggle = toc && toc.querySelector(".toc-toggle");
  if (tocToggle) {
    tocToggle.addEventListener("click", () => {
      const open = toc.classList.toggle("open");
      tocToggle.setAttribute("aria-expanded", String(open));
    });
  }
})();
