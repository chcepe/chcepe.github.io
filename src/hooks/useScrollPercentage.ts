import React from "react";

interface ScrollProgress {
  scrollPercent: number;
}

const useScrollProgress = (): ScrollProgress => {
  const [scrollPercent, setScrollPercent] = React.useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.clientHeight;
    const winHeight = window.innerHeight;
    const totalScroll = docHeight - winHeight;
    const scrollPercent = (scrollTop / totalScroll) * 100;
    setScrollPercent(scrollPercent);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPercent };
};

export default useScrollProgress;
