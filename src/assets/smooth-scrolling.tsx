export default window.onload = function () {
  const easeInCubic: (t: number) => number = function (t: number) {
    return t * t * t;
  };

  const scrollElems: NodeListOf<Element> = document.querySelectorAll(
    '[data-scroll="smooth"]'
  );

  const scrollToElem = (
    start: number,
    stamp: number,
    duration: number,
    scrollEndElemTop,
    startScrollOffset
  ) => {
    const runtime: number = stamp - start;
    let progress: number = runtime / duration;
    const ease: number = easeInCubic(progress);
    progress = Math.min(progress, 1);
    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
    if (runtime < duration) {
      requestAnimationFrame(() => {
        const stamp: number = new Date().getTime();
        scrollToElem(
          start,
          stamp,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    }
  };

  for (let i = 0; i < scrollElems.length; i++) {
    const elem: Element = scrollElems[i];
    let scrollElemId: string;
    let scrollEndElem: HTMLElement | null;
    elem.addEventListener("click", function (e: Event) {
      e.preventDefault();
      if (e.currentTarget) {
        scrollElemId = (e.currentTarget as HTMLAnchorElement).href.split(
          "#"
        )[1];
        scrollEndElem = document.getElementById(scrollElemId);
      }
      requestAnimationFrame(() => {
        const stamp: number = new Date().getTime();
        const duration: number = 1000;
        const start: number = stamp;
        const startScrollOffset: number = window.pageYOffset;
        const scrollEndElemTop: number =
          scrollEndElem!.getBoundingClientRect().top;
        scrollToElem(
          start,
          stamp,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    });
  }
};
