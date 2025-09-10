export function scrollToId(id: string, offset = 0, duration = 1200) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + window.pageYOffset - offset;
  const change = end - start;
  let startTime: number | null = null;

  function animateScroll(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + change * easeInOutQuad(progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animateScroll);
}
