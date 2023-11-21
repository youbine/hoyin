import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef } from "react";

import "./stockists.scss";

const Stockists = () => {
  const ref = useRef([]);
  const navRef = useRef([]);
  //   gsap.registerPlugin(ScrollTrigger);

  //   useLayoutEffect(() => {
  //     ref?.current.forEach((block, index) => {
  //       ScrollTrigger.create({
  //         trigger: block,
  //         start: "top center",
  //         end: "bottom center",
  //         markers: true,
  //         onEnter: () => {
  //           navRef?.current.forEach((e) => {
  //             e.classList.remove("active");
  //           });
  //           navRef?.current[index].classList.add("active");
  //         },
  //         onEnterBack: () => {
  //           navRef?.current.forEach((e) => {
  //             e.classList.remove("active");
  //           });
  //           navRef?.current[index].classList.add("active");
  //         },
  //       });
  //     });
  //   });

  return (
    <>
      <div className="page_stockists_head global_border">
        <div className="page_stockists_head-bg"></div>
        <div className="page_stockists_head-title">donations</div>
        <div className="page_stockists_head-filters global_border">
          <button
            className="page_stockists_head-filter"
            ref={(el) => (navRef.current[0] = el)}>
            <div className="page_stockists_head-indicator"></div>
            USA
          </button>
          <button
            className="page_stockists_head-filter"
            ref={(el) => (navRef.current[1] = el)}>
            <div className="page_stockists_head-indicator"></div>
            canada
          </button>
          <button
            className="page_stockists_head-filter"
            ref={(el) => (navRef.current[2] = el)}>
            <div className="page_stockists_head-indicator"></div>
            uk
          </button>
          <button
            className="page_stockists_head-filter"
            ref={(el) => (navRef.current[3] = el)}>
            <div className="page_stockists_head-indicator"></div>
            aisa
          </button>
          <button
            className="page_stockists_head-filter"
            ref={(el) => (navRef.current[4] = el)}>
            <div className="page_stockists_head-indicator"></div>
            online
          </button>
        </div>
      </div>
      <div className="stockists">
        <div className="stockists_filter" ref={(el) => (ref.current[0] = el)}>
          <div className="stockists_filter-head global_border">
            <div className="stockists_filter-head__title">south korea</div>
            <div className="stockists_filter-head__subtitle">
              KRW 100,000,000
            </div>
          </div>
          <div className="stockist_items">
            <div className="stockist_item">
              <div className="stockist">
                <div>DOSAN KIM</div>
                <div>Kim & Chang</div>
                <div>dosan@chang.com</div>
              </div>
              <div className="stockist">
                <div>YOUNG SHIN AHN</div>
                <div>Apple Inc.</div>
                <div>ys@apple.com</div>
              </div>
              <div className="stockist">
                <div>DOSAN KIM</div>
                <div>Kim & Chang</div>
                <div>dosan@chang.com</div>
              </div>
              <div className="stockist">
                <div>YOUNG SHIN AHN</div>
                <div>Apple Inc.</div>
                <div>ys@apple.com</div>
              </div>
              <div className="stockist">
                <div>DOSAN KIM</div>
                <div>Kim & Chang</div>
                <div>dosan@chang.com</div>
              </div>
              <div className="stockist">
                <div>YOUNG SHIN AHN</div>
                <div>Apple Inc.</div>
                <div>ys@apple.com</div>
              </div>
            </div>
            <div className="stockist_item">
              <div className="stockist_item-head global_border">
                <div>KRW 50,000,000</div>
              </div>
              <div className="stockist">
                <div>DOSAN KIM</div>
                <div>Kim & Chang</div>
                <div>dosan@chang.com</div>
              </div>
              <div className="stockist">
                <div>YOUNG SHIN AHN</div>
                <div>Apple Inc.</div>
                <div>ys@apple.com</div>
              </div>
              <div className="stockist">
                <div>DOSAN KIM</div>
                <div>Kim & Chang</div>
                <div>dosan@chang.com</div>
              </div>
              <div className="stockist">
                <div>YOUNG SHIN AHN</div>
                <div>Apple Inc.</div>
                <div>ys@apple.com</div>
              </div>
              <div className="stockist">
                <div>DOSAN KIM</div>
                <div>Kim & Chang</div>
                <div>dosan@chang.com</div>
              </div>
              <div className="stockist">
                <div>YOUNG SHIN AHN</div>
                <div>Apple Inc.</div>
                <div>ys@apple.com</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="stockists_filter" ref={(el) => (ref.current[1] = el)}>
          <div className="stockists_filter-head global_border">
            <div className="stockists_filter-head__title">canada</div>
            <div className="stockists_filter-head__subtitle">subtitle</div>
          </div>
          <div className="stockist_items">
            <div className="stockist_item">
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
            <div className="stockist_item">
              <div className="stockist_item-head global_border">
                <div>test</div>
              </div>
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stockists_filter" ref={(el) => (ref.current[2] = el)}>
          <div className="stockists_filter-head global_border">
            <div className="stockists_filter-head__title">uk</div>
            <div className="stockists_filter-head__subtitle">subtitle</div>
          </div>
          <div className="stockist_items">
            <div className="stockist_item">
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
            <div className="stockist_item">
              <div className="stockist_item-head global_border">
                <div>test</div>
              </div>
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stockists_filter" ref={(el) => (ref.current[3] = el)}>
          <div className="stockists_filter-head global_border">
            <div className="stockists_filter-head__title">asia</div>
            <div className="stockists_filter-head__subtitle">subtitle</div>
          </div>
          <div className="stockist_items">
            <div className="stockist_item">
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
            <div className="stockist_item">
              <div className="stockist_item-head global_border">
                <div>test</div>
              </div>
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stockists_filter" ref={(el) => (ref.current[4] = el)}>
          <div className="stockists_filter-head global_border">
            <div className="stockists_filter-head__title">online</div>
            <div className="stockists_filter-head__subtitle">subtitle</div>
          </div>
          <div className="stockist_items">
            <div className="stockist_item">
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
            <div className="stockist_item">
              <div className="stockist_item-head global_border">
                <div>test</div>
              </div>
              <div className="stockist">
                <div>head1</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head2</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head3</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head4</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head5</div>
                <div>content</div>
              </div>
              <div className="stockist">
                <div>head6</div>
                <div>content</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Stockists;
