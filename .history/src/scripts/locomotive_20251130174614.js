import LocomotiveScroll from "locomotive-scroll";

let scrollInstance = null;

export function initLocomotive() {
    const el = document.querySelector('[data-scroll-container]')
    if (!el) {
        return null;
    }

    if (scrollInstance) {
        scrollInstance.update()
        return scrollInstance
    }

    scrollInstance = new LocomotiveScroll({
        el,
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    })

    window.addEventListener("resize", () => scrollInstance && scrollInstance.update())

    const image = el.querySelectorAll("img")
    image.forEach((img) => {
        if (!img.complete) {
            img.addEventListener("load", () => scrollInstance && scrollInstance.update())
            img.addEventListener("error", () => scrollInstance && scrollInstance.update())
        }
    })
    return scrollInstance
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
// ⚠️ REMOVE all code related to DOMContentLoaded, astro:page-load, or window checks below this line.