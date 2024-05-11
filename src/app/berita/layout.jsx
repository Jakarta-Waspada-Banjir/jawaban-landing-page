"use client";

import { useEffect, useRef, useState } from "react";

import { Header } from "@/components/Header";

const NewsLayout = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      scrollY > 50 ? setIsScrolling(false) : setIsScrolling(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header isTransparent={isScrolling} />
      <div ref={scrollRef} className="h-[2000px]">
        {children}
      </div>
    </>
  );
};

export default NewsLayout;
