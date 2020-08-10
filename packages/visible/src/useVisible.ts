import { useEffect, useState, RefObject } from "react";

interface Options {
  once: boolean;
}

export default function useVisible(
    ref: RefObject<HTMLElement>,
    options: Options
): boolean {
  const [isVisible, setVisibility] = useState<boolean>(false);

  const handleObserver = (entry: IntersectionObserverEntry) => {
    if (options.once && isVisible) {
      return null;
    }

    const rect: DOMRectReadOnly = entry.boundingClientRect;
    const element: Element | undefined = document
        .elementsFromPoint(rect.x, rect.y)
        .find((element: Element) => element.className === entry.target.className);

    alert(entry.isIntersecting);
    setVisibility(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
        handleObserver(entry)
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
}
