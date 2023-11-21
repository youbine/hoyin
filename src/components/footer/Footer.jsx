import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer global_border">
      <div className="global_padding footer_copyright">HYOIN FOUNDATION ©</div>
      <div className="footer_apply global_padding">효인상 신청</div>
      <ul className="footer_menu footer_menu-top global_padding">
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/awards">AWARDS</Link>
        </li>
        <li>
          <Link to="/donation">donation</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <div className="global_line"></div>
      <div className="global_padding footer_copyright2">효인재단 ©</div>
      <form className="footer_apply_form global_padding">
        <div className="footer_apply_form-email">
          <input type="text" placeholder="이메일 주소" />
        </div>
        <div className="footer_apply_form-submit">
          <button>
            Submit &nbsp;&nbsp;<span className="ss13">→</span>
          </button>
        </div>
      </form>
      <ul className="footer_menu footer_menu-bottom global_padding">
        <li>
          <Link>terms</Link>
        </li>
        <li>
          <Link>privacy</Link>
        </li>
        <li>
          <Link>kakao</Link>
        </li>
        <li>
          <Link>instagram</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
