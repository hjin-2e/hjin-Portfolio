import React, { useState, useEffect, useRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from "@/components/header";
import Footer from "@/components/footer";

// sections
import Home from "@/sections/Home";
import AboutMe from "@/sections/About";
import Work from "@/sections/Work";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";

const Layout = () => {
  const [isHeaderOn, setIsHeaderOn] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // About Me 섹션이 화면 상단에 진입하거나 감지될 때 (rootMargin으로 타이밍 조절 가능)
        if (entry.isIntersecting) {
          setIsHeaderOn(true);
        } else {
          // Home 섹션 영역(About Me 위쪽)으로 다시 올라가면 on 클래스 제거
          if (entry.boundingClientRect.top > 0) {
            setIsHeaderOn(false);
          }
        }
      },
      { 
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0 
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div className="wrapper">
      {/* 1. Header에 상태값 전달 */}
      <Header isFixed={isHeaderOn} />
      <Home />
      {/* 2. 감지할 AboutMe 섹션을 div로 감싸거나 ref를 주입할 수 있도록 설정 */}
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Work />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;