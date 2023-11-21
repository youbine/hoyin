import React from "react";
import "./press.scss";

const Press = () => {
  return (
    <>
      <div className="page_press_head global_page_head">
        <h1>press</h1>
      </div>
      <div className="page_press_list">
        <div className="page_press_list-head global_border">
          <div className="global_padding">date</div>
          <div className="global_padding">publication</div>
          <div className="global_padding">article</div>
        </div>
        <div className="page_press_list_item global_border">
          <div className="page_press_list_item-img full_img">
            <img src={require("../../assets/Layer 2.png")} alt="press" />
          </div>
          <div>november 2023</div>
          <div>hyoin</div>
          <div>test test item</div>
          <div className="arrow ss13">→</div>
        </div>
        <div className="page_press_list_item global_border">
          <div className="page_press_list_item-img full_img">
            <img src={require("../../assets/Layer 2.png")} alt="press" />
          </div>
          <div>november 2023</div>
          <div>hyoin</div>
          <div>test test item</div>
          <div className="arrow ss13">→</div>
        </div>
      </div>
    </>
  );
};

export default Press;
