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
        multiplier:
    })
}