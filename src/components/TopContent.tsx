import React, { FC } from "react";
import Link from "next/link";
interface Props {}
const TopContent: FC<Props> = () => {
  return (
    <>
      <header>
        <div className="black-box-div" id="right-header-block"></div>
        <img
          id="header-img"
          srcSet="
          assets/mobile/image-hero.jpg   375w,
          assets/tablet/image-hero.jpg   765w,
          assets/desktop/image-hero.jpg 1280w
        "
          sizes="(max-width: 375px) 375px,
                 (max-width: 765px) 765px,
                 (max-width: 1280px) 1280px"
          src="assets/image-hero.jpg"
          alt="painting"
        />

        <h1 className="lines">MODERN ART GALLERY</h1>
        <p id="header-p">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Link
          id="location-btn"
          className="button-block black-box-div"
          href="/location"
        >
          <p className="btn-txt">OUR LOCATION</p>
          <div className="button-arrows">
            <img className="btn-img" src="assets/icon-arrow-right.svg" />
          </div>
        </Link>
      </header>
    </>
  );
};
export default TopContent;
