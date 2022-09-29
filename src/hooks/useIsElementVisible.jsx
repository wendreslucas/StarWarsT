import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (elemento) => {
  const [isVisible, setIsVisible] = useState(false);
  const callbakc = ([entry]) => {
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const watch = new IntersectionObserver(callbakc);
    if (elemento) {
      watch.observe(elemento);
      return () => watch.unobserve(elemento);
    }
  }, [elemento]);

  return isVisible && !!elemento;
};
