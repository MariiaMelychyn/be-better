import { useEffect, useRef, useState } from 'react';

const useObserver = () => {
  const [showElement, setShowElement] = useState(false);
  const [containerRef, setContainerRef] = useState(null);
  const observer = useRef();

  const getContainerRef = ref => {
    setContainerRef(ref);
  };

  const onElementIntersection = entries => {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowElement(true);
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onElementIntersection, {
      rootMargin: '50% 0px',
      threshold: 0.1,
    });
  }, []);

  useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
      if (containerRef && containerRef.current) {
        observer.current.observe(containerRef.current);
      }
    } else {
      setShowElement(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return [showElement, getContainerRef];
};

export default useObserver;
