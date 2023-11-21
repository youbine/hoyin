import React from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MainHead = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: ".main_head_inner",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reset",
      toggleClass: { targets: ".header_logo", className: "main_head" },
    });
    return () => ScrollTrigger;
  }, []);
  return (
    <div className="main_head">
      <div className="main_head_inner">
        <div className="main_head_img load_img">
          <img src={require("../../assets/Layer 2.png")} alt="img" />
        </div>
        <div className="main_head_message">
          <span>인</span>
          <span>간</span>
          <span>이</span>
          <span>&nbsp;</span>
          <span>되</span>
          <span>다</span>
          <span>.</span>
        </div>
        <div className="main_head_logo">
          <p>HYOIN</p>
          <p className="main_head_logo-small">FOUNDATION 효인재단</p>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
