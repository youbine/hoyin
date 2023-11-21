import { Route, Routes, useLocation } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import About from "./pages/about/About";
import AwardDetail from "./pages/awards/awardDetail/AwardDetail";
import Awards from "./pages/awards/Awards";
import Contact from "./pages/contact/Contact";
import Main from "./pages/main/Main";
import MainHead from "./pages/main/MainHead";
import Press from "./pages/press/Press";
import Stockists from "./pages/stockists/Stockists";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const layoutClass = () => {
    if (pathname.includes("about")) {
      return "layout about";
    } else if (pathname === "/") {
      return "layout main";
    } else {
      return "layout";
    }
  };

  return (
    <div id="layout">
      <div className={layoutClass()}>
        <Header />
        {pathname === "/" && <MainHead />}
        <div className="layout_content">
          <div className="global_wrap">
            <div className="global_wrap_inner">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/press" element={<Press />} />
                <Route path="/donation" element={<Stockists />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/awards/:id" element={<AwardDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
        <Banner />
      </div>
    </div>
  );
}

export default App;
