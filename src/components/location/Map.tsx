import React, { FC } from "react";
import Link from "next/link";
interface Props {}
const Map: FC<Props> = () => {
  return (
    <>
      <Link id="home-button" className="button-block black-box-div" href="/">
        <p className="btn-txt">BACK TO HOME</p>

        <div className="button-arrows">
          <img className="btn-img" src="assets/icon-arrow-left.svg" alt="" />
        </div>
      </Link>
      <div id="map-wrapper">
        <img
          id="map"
          srcSet="
          assets/mobile/image-map.png   375w,
          assets/tablet/image-map.png   765w,
          assets/desktop/image-map.png 1280w
        "
          sizes="(max-width: 375px) 375px,
                 (max-width: 765px) 765px,
                 (max-width: 1280px) 1280px"
          src="assets/desktop/image-map.png"
          alt="map"
        />
      </div>
    </>
  );
};
export default Map;
