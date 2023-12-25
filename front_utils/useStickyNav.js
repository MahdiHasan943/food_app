// StickyNavUtils.js
import { useState, useEffect } from "react";

const useStickyNav = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let windowHeight = window.scrollY;
      setStickyClass(windowHeight > 150 ? "nav" : "");
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return stickyClass;
};

export default useStickyNav;