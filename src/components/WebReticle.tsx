import { useEffect, useRef } from "react";

export function WebReticle() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    const enter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        el.style.width = "44px";
        el.style.height = "44px";
      } else {
        el.style.width = "28px";
        el.style.height = "28px";
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
    };
  }, []);

  return <div ref={ref} className="web-reticle" aria-hidden="true" />;
}
