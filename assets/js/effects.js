/* CRT effects toggle. Persists the choice and respects prefers-reduced-motion
   (which the CSS already honors). Defaults to off when reduced motion is set. */

(function () {
  const KEY = "dasm:effects";
  const btn = document.getElementById("effects-toggle");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let stored;
  try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }
  let on = stored === null ? !reduce : stored === "on";

  function apply() {
    document.body.setAttribute("data-effects", on ? "on" : "off");
    if (btn) {
      btn.textContent = "CRT: " + (on ? "on" : "off");
      btn.setAttribute("aria-pressed", String(on));
    }
  }
  apply();

  if (btn) {
    btn.addEventListener("click", () => {
      on = !on;
      try { localStorage.setItem(KEY, on ? "on" : "off"); } catch (e) {}
      apply();
    });
  }
})();
