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

if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
        // small timeout to allow DOM to settle
        setTimeout(() => initLocomotive(), 30);
    })

    // Astro client-side navigation event — re-init/update on navigation
    window.addEventListener("astro:page-load", () => {
        setTimeout(() => initLocomotive(), 30);
    });
}