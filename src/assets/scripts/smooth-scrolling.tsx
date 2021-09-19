// eslint-disable-next-line func-names
export default window.onload = function () {
  // eslint-disable-next-line func-names
  const easeInCubic: (t: number) => number = function (t: number) {
    return t * t * t;
  };

  // eslint-disable-next-line no-restricted-properties
  const scrollElems: NodeListOf<Element> = document.querySelectorAll(
    '[data-scroll="smooth"]'
  );

  const scrollToElement = (
    start: number,
    stamp: number,
    duration: number,
    scrollEndElementTop,
    startScrollOffset
  ) => {
    const runtime: number = stamp - start;
    let progress: number = runtime / duration;
    const ease: number = easeInCubic(progress);
    progress = Math.min(progress, 1);
    window.scroll(0, startScrollOffset + scrollEndElementTop * ease);
    if (runtime < duration) {
      requestAnimationFrame(() => {
        const newStamp: number = new Date().getTime();
        scrollToElement(
          start,
          newStamp,
          duration,
          scrollEndElementTop,
          startScrollOffset
        );
      });
    }
  };

  scrollElems.forEach((scrollElement) => {
    const element: Element = scrollElement;
    let scrollElementId: string;
    let scrollEndElement: HTMLElement | null;
    // eslint-disable-next-line func-names
    element.addEventListener("click", function (event: Event) {
      event.preventDefault();
      if (event.currentTarget) {
        [scrollElementId] = (
          event.currentTarget as HTMLAnchorElement
        ).href.split("#");
        // eslint-disable-next-line unicorn/prefer-query-selector
        scrollEndElement = document.getElementById(scrollElementId);
      }
      requestAnimationFrame(() => {
        const stamp: number = new Date().getTime();
        const duration: number = 1000;
        const start: number = stamp;
        const startScrollOffset: number = window.pageYOffset;
        const scrollEndElementTop: number =
          scrollEndElement!.getBoundingClientRect().top;
        scrollToElement(
          start,
          stamp,
          duration,
          scrollEndElementTop,
          startScrollOffset
        );
      });
    });
  });
};
