import React, { useState } from "react";
import "./main.scss";
import { useMediaQuery } from "react-responsive";

const donationList = [
  "DOSAN KIM - KIM & CHANG LAW",
  "YOUNG SHIN AHN - APPLE INC.",
  "HO YOUNG JOO – REPUBLIC OF KOREA CONGRESSMAN",
  "HYEJIN JEON – SAMIL PRICEWATERHOUSECOOPERS",
  "JIN BAE JEONG – YONSEI UNIVERSITY PROFESSOR",
];
const Main = () => {
  const [imgSrc, setImgSrc] = useState(require("../../assets/Layer 2.png"));
  const mobile = useMediaQuery({ query: "(max-width: 820px)" });

  const onHover = (e) => {
    let imgSrc = e.target.querySelector("img");
    setImgSrc(imgSrc?.currentSrc);
  };
  return (
    <>
      <div className="main_feature">
        <h2>활동소식</h2>
        <div className="main_feature_tags">
          <div className="full_img">
            <img src={require("../../assets/Layer 2.png")} alt="img" />
          </div>
          {!mobile && (
            <>
              <div className="main_feature_tag">
                <div className="main_feature_tag-indicator"></div>
                <div className="main_feature_tag-label">test</div>
              </div>
            </>
          )}
        </div>
        <h2>효인 수상자들</h2>
        <div className="main_products">
          <div className="main_product">
            <div className="main_product_inner">
              <div className="full_img">
                <img src={require("../../assets/사각형 529.png")} alt="img" />
              </div>
              <div className="main_product-price">₩30000</div>
            </div>
            <div className="main_product-label">test test test1</div>
          </div>
          <div className="main_product">
            <div className="main_product_inner">
              <div className="full_img">
                <img src={require("../../assets/사각형 529.png")} alt="img" />
              </div>
              <div className="main_product-price">₩30000</div>
            </div>
            <div className="main_product-label">test test test2</div>
          </div>
          <div className="main_product">
            <div className="main_product_inner">
              <div className="full_img">
                <img src={require("../../assets/사각형 529.png")} alt="img" />
              </div>
              <div className="main_product-price">₩30000</div>
            </div>
            <div className="main_product-label">test test test3</div>
          </div>
        </div>
      </div>
      <div className="main_collection">
        <div className="main_collection_items">
          <div className="main_collection_comment">
            <h1>“인간다운 사회를 만들기 위한 정서적 보탬, 효인상”</h1>
            <p>
              효인 복지재단은 어진 사회 구현사업의 일환으로 효인상을 운영하고
              있습니다. 가정과 우정을 위해 헌신하는 자는 물론, 효행과 남다른
              선행으로 사회정의 실현에 이바지한 선한 이들을 찾아내 포상합니다.
              효 문화를 현대 사회의 중심적 가치로 새롭게 해석하고, 사회의
              귀감으로 널리 알려 아름다운 사회의 기반을 확립하고자 202-년부터
              운영해오고 있습니다.
            </p>
          </div>
          <div className="main_collection_list">
            <h3>후원자들</h3>
            {donationList.map((donation, index) => (
              <div
                key={index}
                index={index}
                className="main_collection_item"
                onMouseEnter={onHover}>
                <div className="main_collection_item-count">{index + 1}</div>
                <div className="main_collection_item-img">
                  <img src={require("../../assets/Layer 2.png")} alt="img" />
                </div>
                <div className="main_collection_item-title">
                  {donation}
                  <div className="main_collection_item-subtitle">
                    subsubtitle
                  </div>
                </div>
                <div className="main_collection_item-view">VIEW →</div>
              </div>
            ))}
          </div>
        </div>
        <div className="main_collection_img full_img">
          <img src={imgSrc} alt="img" />
        </div>
      </div>
      <div className="main_awards">
        <div className="main_award">
          <div className="main_award-title">2023 HYOIN AWARD CEREMONY</div>
          <div className="main_award-subtitle">
            <span>효인상 시상식</span>
            <span>읽기</span>
          </div>
          <div className="main_award-img full_img">
            <img src={require("../../assets/blueberry.png")} alt="img" />
          </div>
        </div>
        <div className="main_award">
          <div className="main_award-title">FRIENDSHIP WORK</div>
          <div className="main_award-subtitle">
            <span>우정 활동</span>
            <span>읽기</span>
          </div>
          <div className="main_award-img full_img">
            <img src={require("../../assets/blueberry.png")} alt="img" />
          </div>
        </div>
        <div className="main_award">
          <div className="main_award-title">APPLE X HYOIN</div>
          <div className="main_award-subtitle">
            <span>애플과 함께 효인 캠페인</span>
            <span>읽기</span>
          </div>
          <div className="main_award-img full_img">
            <img src={require("../../assets/blueberry.png")} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
