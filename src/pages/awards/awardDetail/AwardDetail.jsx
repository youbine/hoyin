import React from "react";
import "./awardDetail.scss";

const AwardDetail = () => {
  return (
    <>
      <div className="page_award_detail">
        <div className="award_detail">
          <div className="award_detail_head global_border">
            <div className="award_detail_head-top global_padding"></div>
            <div className="award_detail_head-title global_padding">
              효인 수상자
            </div>
            <div className="award_detail_head-name global_padding">
              HWANG LEE
            </div>
            <div className="global_line"></div>
            <div className="award_detail_head-namekr global_padding">이황</div>
            <div className="global_line"></div>
            <div className="award_detail_head-address global_padding">
              서울특별시 중구 동호로 100
            </div>
          </div>
          <div className="award_detail_content">
            <div className="award_detail_content-silde">
              <img src={require("../../../assets/Layer 2.png")} alt="img" />
            </div>
            <div className="award_detail_content-description">
              <div className="award_detail_content-description_detail">
                <p>
                  이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한
                  문신이자 학자이다. 1501년(연산군 7)에 태어나 1570년(선조 3)에
                  사망했다. 문과에 급제하여 관직에 진출했으나 1545년(명종 즉위)
                  을사사화 이후 고향 퇴계에 은거하여 학자의 삶을 살았다.
                  명유들과 토론하고 『주자대전』 등 주자학 관련서적을
                  주해·편찬하고 후진들을 양성하여 영남학파 및 친영남학파를
                  포괄한 거대한 주리파 철학을 형성했다. 68세에 무진육조소와
                  『성학십도』를 써서 선조에게 바쳤다. 사후 그를 기리는 서원을
                  지어 도산서원 사액을 받고 위패를 모셨다.
                </p>
              </div>
              <div className="award_detail_content-description_note global_content">
                <p>
                  효인재단은 우정 후원자들에 대한 의견을 받습니다. 모든 의견들을
                  신중하게 듣습니다.
                </p>
                <a href="mailto:/">
                  효진재단 의견주기<span className="ss13">↓</span>
                </a>
              </div>
            </div>
            <div className="award_detail_content-button global_border-no-inset">
              <button className="global_button">이메일 하기</button>
            </div>
            <div className="award_detail_content-note">
              <div className="award_detail_content-note_head">말씀</div>
              <div className="award_detail_content-note_note global_border-no-inset">
                <p>말씀 말씀 말씀 말씀 말씀 말씀</p>
              </div>
            </div>
          </div>
        </div>
        <div className="award_gallery">
          <div className="award_gallery_inner">
            <img src={require("../../../assets/Layer 2.png")} alt="img" />
            <img src={require("../../../assets/Layer 2.png")} alt="img" />
            <img src={require("../../../assets/Layer 2.png")} alt="img" />
            <img src={require("../../../assets/Layer 2.png")} alt="img" />
            <img src={require("../../../assets/Layer 2.png")} alt="img" />
            <img src={require("../../../assets/Layer 2.png")} alt="img" />
          </div>
        </div>
      </div>
      <div className="page_award_next">
        <div className="page_award_next_inner">
          <div className="page_award_next-head global_border">다음 수상자</div>
          <div className="page_award_next-contents">
            <div className="page_award_next-content">
              <div className="page_award_next-content_inner">
                <img
                  src={require("../../../assets/사각형 529.png")}
                  alt="img"
                />
              </div>
              <div className="page_award_next-content_text">
                <p>HONG GIL DONG</p>
              </div>
            </div>
            <div className="page_award_next-content">
              <div className="page_award_next-content_inner">
                <img
                  src={require("../../../assets/사각형 529.png")}
                  alt="img"
                />
              </div>
              <div className="page_award_next-content_text">
                <p>HONG GIL DONG</p>
              </div>
            </div>
            <div className="page_award_next-content">
              <div className="page_award_next-content_inner">
                <img
                  src={require("../../../assets/사각형 529.png")}
                  alt="img"
                />
              </div>
              <div className="page_award_next-content_text">
                <p>HONG GIL DONG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardDetail;
