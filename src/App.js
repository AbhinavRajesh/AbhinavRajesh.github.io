import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "./hooks/useWindowSize";
import "./App.css";

import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [hideHeader, setHideHeader] = useState(true);
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const setHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setHideHeader(false);
      setHeight();
    }, 5000);
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  const changeHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 5;

    scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px) skewY(${skew}deg)`;
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="App">
      {hideHeader ? null : <Header />}
      <div ref={scrollContainer} className="scroll">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Home />
            <About />
            <Work changeHeight={changeHeight} />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
