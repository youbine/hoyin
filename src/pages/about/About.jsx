import React from "react";
import "./about.scss";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const mobile = useMediaQuery({ query: "(max-width: 820px)" });
  return (
    <>
      <div className="page_about_head global_page_head global_border">
        <div>1</div>
        <div className="page_about_head-title">ABOUT</div>
        <div className="global_line"></div>
        <div className="pc">&nbsp;</div>
        <div className="page_about_head_title">our MISSION</div>
        <div className="page_about_head_subtitle">인간이 되다</div>
      </div>
      <div className="about_contents">
        <div className="about_content about_intro">
          <div className="about_intro_head global_border">
            <div>our MISSION</div>
          </div>
          <div className="global_content about_intro-text">인간이 되다</div>
          <div className="about_intro-content global_content">
            <p>
              효심은 인간답게 살아가고자 할 때 가장 먼저 실천하는 도리이며, 모든
              행동의 근본입니다. 현대 사회의 물질 만능주의 및 개인주의 만연으로
              인한 인간 소외 현상, 가족 공동체 해체, 자살 및 흉악범죄 현상은
              우리 사회가 인간다움을 잃고 있음을 증명하며, 효는 가정에서는
              부모의 공경에서 부터, 사회적으로는 우애 및 경로사상으로,
              인류적으로는 인애정신으로 확대 됩니다. 효에 대한 인식을 몸으로
              체험하고 실천하는 이들을 통해 아름다운 의식과 사회가 형성 될 수
              있도록 효인상 사업을 시행하고 있습니다.
            </p>
          </div>
          <div className="about_intro-content-social global_content">
            <p>친구 추가</p>
            <a href="/">카카오 HYOIN</a>
          </div>
          <div className="about_intro-img full_img global_content">
            <img src={require("../../assets/blueberry.png")} alt="img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_content_item">
            <div className="about_content_item-head global_border-no-inset">
              Inspiration
            </div>
            <div className="about_content_item-content">
              <div className="about_content_item-content_img">
                <img src={require("../../assets/blueberry.png")} alt="img" />
              </div>
            </div>
          </div>
          <div className="about_content_item">
            {!mobile && (
              <div className="about_content_item-head global_border-no-inset">
                &nbsp;
              </div>
            )}
            <div className="about_content_item-content">
              <p>
                우리에게 한국 전토문화라고도 불리는 "효" 는 문화적 보편성과
                가치를 가진 의식입니다. 효는 바로 우리가 서로간의 믿음과 기쁨을
                누릴 자격이 있다고 말하는 방식입니다. 그것은 우리가 우리 내면을
                기르고 실천하면서도 남을 있는 그대로를 인정하고 배려하는 것을
                말하는 방식입니다. 이것이 바로 효의 보편적 가치로서 말하는
                방식입니다.
              </p>
              <p>
                효는 우리가 다른 사람들에게 돌봄을 실천하는 곳이며, 공동의
                돌봄과 자기 돌봄이 동일 해지는 마음 가짐입니다. 이는 우리
                자신뿐만 아니라 공동체로 이뤄진 우리를 축하하는 방법입니다.
              </p>
              <p>
                마찬가지로 우리는 고아들을 위한 경제적 지원, 독거노인을 위한
                봉사활동, 노인 복지관 및 요양원 지원, 가족도 없고, 건강도 좋지
                않아 거동이 불편하신 이웃들의 삶의 질 향상을 위한 봉사활동을
                기획하여 효인 봉사단을 운영합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="about_content">
          <div className="about_content_item">
            <div className="about_content_item-head global_border-no-inset">
              TRADITION
            </div>
            <div className="about_content_item-content">
              <p>
                전통문화유산이자 미래 자산인 효(孝) 문화를 머리로 배우고,
                마음으로 느끼며, 몸으로 실천함으로써 남녀노소 계층 간 공감대가
                자연스레 형성될 수 있도록 다양한 효 관련 사업을 추진합니다.
              </p>
              <p>
                지역사회를 위한 효 인성 교육, 효의 근본정신인 사랑과 공경을 통해
                많은 이들이 더불어 사는 행복한 세상을 만들어 갈 수 있도록 가정과
                학교, 지역사회에서 효 문화가 뿌리내릴 수 있는 다양한 교육들을
                제공합니다.
              </p>
            </div>
          </div>
          <div className="about_content_item">
            {!mobile && (
              <div className="about_content_item-head global_border-no-inset">
                &nbsp;
              </div>
            )}
          </div>
        </div>
        <div className="about_content">
          <div className="about_content_item">
            <div className="about_content_item-head global_border-no-inset">
              form
            </div>
            <div className="about_content_item-content">
              <p>우울한 이들에게 꿈과 희망을 찾아주는, 우정 지원사업</p>
              <p>
                현재 한국은 15년 연속 자살률 1위 국가이자 우울증 진단받은 주변의
                이웃들은 서양 체제를 그대로 따라 항우울제 약을 장기간 투여하고
                치료가 된다는 잘못 된 인식이 있으며, 이들은 연간 평균 1천만원
                가량 비용이 발생합니다. 하지만 이는 근본적인 해결책이 아닐
                뿐더러 저소득 가정의 이들은 적절한 시기에 효과적인 치료를 받기가
                매우 어려운 실정입니다.
              </p>
              <p>
                꿈과 희망을 찾아줄 길이 있는 것을 알면서도 경제적인 어려움
                때문에 갈 곳 없이 방황하는 이들의 마음을 생각하며 효인재단은
                밝고 명량한 친구들을 통해 우정 및 경제적 활동을 통해 회복이
                되는. 과정을 지원하고 있습니다. 효인재단은 효 정신 확산을 위한
                효인 우정사단을 조직하여 우정활동을 지원합니다.
              </p>
              <div className="about_content_item-content_img">
                <img src={require("../../assets/blueberry.png")} alt="img" />
              </div>
            </div>
          </div>
          <div className="about_content_item">
            <div className="about_content_item-head global_border-no-inset">
              MAKE A RECOMMENDATION
            </div>
            <div className="about_content_item-content about_content_item-content-info">
              <div>
                <strong>온라인 사연접수</strong>
                <p>아래 버튼 클릭을 통해 사연 신청접수</p>
              </div>
              <div>
                <strong>첨부서류</strong> (6개월 이내 발급한 서류)
                <ul>
                  <li>
                    ① 경제상황 증명서류 (택1)
                    <ul>
                      <li>- 수급자 증명서</li>
                      <li>- 차상위 관련 증명서</li>
                      <li>
                        - 중위소득 80%이하 건강보험료 납부확인서 (세대 내
                        소득발생 가구원 모두 제출)
                      </li>
                    </ul>
                  </li>
                  <li>② 사연</li>
                  <li>③ 주민등록등본</li>
                </ul>
              </div>
              <div>
                <strong>지원내용</strong>
                <p>
                  대외 활동비, 치료비, 수술비, 재활, 치아, 보장구 구입 등 의료에
                  관해 병명 제한없음
                </p>
              </div>
              <div>
                <strong>지원금액</strong>
                <p>후원자 모금을 통해 최대보장지원금 200만원 지원</p>
              </div>
              <div>
                <strong>선정발표</strong>
                <p>매월 마지막 주 중 재단 홈페이지 공지사항 확인</p>
              </div>
              <div>
                <strong>지원금</strong>
                <p>전달 예정일 모금 완료 후 2주 이내</p>
              </div>
              <div>
                <strong>문의</strong>
                <p>02-792-7176 / QnA바로가기></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
