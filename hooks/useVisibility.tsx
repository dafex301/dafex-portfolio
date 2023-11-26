"use client";

import { useState, useEffect, useRef, MutableRefObject } from "react";

interface UseVisibilityOptions extends IntersectionObserverInit {}

const useVisibility = <T extends HTMLElement = HTMLDivElement>(
  options: UseVisibilityOptions = { threshold: 0.7 }
): [MutableRefObject<T | null>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]); // Removed ref from dependencies to prevent re-creation of observer on ref changes

  return [ref, isVisible];
};

export default useVisibility;
