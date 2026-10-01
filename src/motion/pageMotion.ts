import { useEffect, type RefObject } from "react";

export const motion = {
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  revealThreshold: 0.12,
  parallaxLimit: 24,
} as const;

/** One observer for the small set of editorial elements marked for reveal. */
export function usePageMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: motion.revealThreshold, rootMargin: "0px 0px -30px 0px" },
    );

    // Content already in view stays visible while the hero performs its intro.
    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    }
    root.classList.add("motion-enabled");

    return () => {
      observer.disconnect();
      root.classList.remove("motion-enabled");
    };
  }, []);
}

/** A bounded transform on one hero layer, updated at most once per frame. */
export function useHeroParallax(imageRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 761px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (preference.matches || !desktop.matches) {
        element.style.setProperty("--hero-parallax", "0px");
        return;
      }
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const offset = Math.min(motion.parallaxLimit, Math.max(0, window.scrollY * 0.075));
      element.style.setProperty("--hero-parallax", `${offset}px`);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    preference.addEventListener("change", schedule);
    desktop.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      desktop.removeEventListener("change", schedule);
      element.style.removeProperty("--hero-parallax");
    };
  }, [imageRef]);
}
