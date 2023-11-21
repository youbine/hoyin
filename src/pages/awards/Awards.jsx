import React from "react";
import "./awards.scss";
import { Link, useNavigate } from "react-router-dom";

const Awards = () => {
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/awards?id=${id}`);
  };
  return (
    <div className="page_awards">
      <div className="page_awards_head global_page_head global_border">
        <div>효인 수상자들</div>
        <div className="global_line"></div>
        <div>&nbsp;</div>
      </div>
      <div className="awards_list">
        <div className="awards_list_item">
          <h2 className="awards_list_item-title">GIL DONG HONG</h2>
          <div className="awards_list_item-subtitle">홍길동</div>
          <div className="awards_list_item-description">
            <p>
              이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한 문신이자
              학자이다. 1501년(연산군 7)에 태어나
            </p>
          </div>
          <div className="awards_list_item-links">
            <Link className="awards_list_item-links_more" to="/awards/1">
              자세히 보기
            </Link>
            <a className="awards_list_item-links_mail" href="mailto:/">
              이메일 하기 <span className="ss13">→</span>
            </a>
          </div>
        </div>
        <div className="awards_list_item">
          <h2 className="awards_list_item-title">GIL DONG HONG</h2>
          <div className="awards_list_item-subtitle">홍길동</div>
          <div className="awards_list_item-description">
            <p>
              이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한 문신이자
              학자이다. 1501년(연산군 7)에 태어나
            </p>
          </div>
          <div className="awards_list_item-links">
            <Link className="awards_list_item-links_more" to="/awards/2">
              자세히 보기
            </Link>
            <a className="awards_list_item-links_mail" href="mailto:/">
              이메일 하기 <span className="ss13">→</span>
            </a>
          </div>
        </div>
        <div className="awards_list_item">
          <h2 className="awards_list_item-title">GIL DONG HONG</h2>
          <div className="awards_list_item-subtitle">홍길동</div>
          <div className="awards_list_item-description">
            <p>
              이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한 문신이자
              학자이다. 1501년(연산군 7)에 태어나
            </p>
          </div>
          <div className="awards_list_item-links">
            <a className="awards_list_item-links_more" href="/">
              자세히 보기
            </a>
            <a className="awards_list_item-links_mail" href="mailto:/">
              이메일 하기 <span className="ss13">→</span>
            </a>
          </div>
        </div>
        <div className="awards_list_item">
          <h2 className="awards_list_item-title">GIL DONG HONG</h2>
          <div className="awards_list_item-subtitle">홍길동</div>
          <div className="awards_list_item-description">
            <p>
              이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한 문신이자
              학자이다. 1501년(연산군 7)에 태어나
            </p>
          </div>
          <div className="awards_list_item-links">
            <a className="awards_list_item-links_more" href="/">
              자세히 보기
            </a>
            <a className="awards_list_item-links_mail" href="mailto:/">
              이메일 하기 <span className="ss13">→</span>
            </a>
          </div>
        </div>
        <div className="awards_list_item">
          <h2 className="awards_list_item-title">GIL DONG HONG</h2>
          <div className="awards_list_item-subtitle">홍길동</div>
          <div className="awards_list_item-description">
            <p>
              이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한 문신이자
              학자이다. 1501년(연산군 7)에 태어나
            </p>
          </div>
          <div className="awards_list_item-links">
            <a className="awards_list_item-links_more" href="/">
              자세히 보기
            </a>
            <a className="awards_list_item-links_mail" href="mailto:/">
              이메일 하기 <span className="ss13">→</span>
            </a>
          </div>
        </div>
        <div className="awards_list_item">
          <h2 className="awards_list_item-title">GIL DONG HONG</h2>
          <div className="awards_list_item-subtitle">홍길동</div>
          <div className="awards_list_item-description">
            <p>
              이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한 문신이자
              학자이다. 1501년(연산군 7)에 태어나
            </p>
          </div>
          <div className="awards_list_item-links">
            <a className="awards_list_item-links_more" href="/">
              자세히 보기
            </a>
            <a className="awards_list_item-links_mail" href="mailto:/">
              이메일 하기 <span className="ss13">→</span>
            </a>
          </div>
        </div>
        <div className="awards_list_item">
          <h2 className="awards_list_item-title">GIL DONG HONG</h2>
          <div className="awards_list_item-subtitle">홍길동</div>
          <div className="awards_list_item-description">
            <p>
              이황은 조선전기 성균관 대사성, 대제학, 지경연 등을 역임한 문신이자
              학자이다. 1501년(연산군 7)에 태어나
            </p>
          </div>
          <div className="awards_list_item-links">
            <a className="awards_list_item-links_more" href="/">
              자세히 보기
            </a>
            <a className="awards_list_item-links_mail" href="mailto:/">
              이메일 하기 <span className="ss13">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
