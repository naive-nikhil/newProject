

import LocomotiveScroll from "locomotive-scroll";

let scrollInstance = null;

export function Locomotive() {
    const el = document.querySelector('[data-scroll-container]');
    if (!el) {
        return null;
    }

    // If an instance already exists, update it instead of creating a new one.
    if (scrollInstance) {
        scrollInstance.update();
        return scrollInstance;
    }

    // Initialize the new instance
    scrollInstance = new LocomotiveScroll({
        el,
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    });

    // Note: Event listeners for resize/images are managed in the Astro component's <script>.

    return scrollInstance;
}

export function destroyLocomotive() {
    if (!scrollInstance) return;
    try {
        scrollInstance.destroy();
    } catch (e) {
        // ignore
    }
    scrollInstance = null;
}