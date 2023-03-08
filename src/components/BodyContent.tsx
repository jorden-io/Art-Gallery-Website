import React, { FC } from "react";
interface Props {}
const BodyContent: FC<Props> = () => {
  return (
    <>
      <main className="grid-holder">
        <article id="grid1-article">
          <h3>YOUR DAY AT THE GALLERY</h3>
          <p>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </article>

        <img
          id="grid1-img"
          srcSet="
          assets/mobile/image-grid-1@2x.jpg   375w,
          assets/tablet/image-grid-1@2x.jpg   765w,
          assets/desktop/image-grid-1@2x.jpg 1280w
        "
          sizes="(max-width: 375px) 375px,
               (max-width: 765px) 765px,
               (max-width: 1280px) 1280px"
          src="assets/desktop/image-grid-1@2x.jpg"
          alt="inside our art gallery"
        />

        <img
          id="grid2-img"
          srcSet="
          assets/mobile/image-grid-2@2x.jpg   375w,
          assets/tablet/image-grid-2@2x.jpg   765w,
          assets/desktop/image-grid-2@2x.jpg 1280w
        "
          sizes="(max-width: 375px) 375px,
               (max-width: 765px) 765px,
               (max-width: 1280px) 1280px"
          src="assets/desktop/image-grid-2@2x.jpg"
          alt="Minimalism by Josef Burno"
        />

        <img
          id="grid3-img"
          srcSet="
          assets/mobile/image-grid-3@2x.jpg   375w,
          assets/tablet/image-grid-3@2x.jpg   765w,
          assets/desktop/image-grid-3@2x.jpg 1280w
        "
          sizes="(max-width: 375px) 375px,
               (max-width: 765px) 765px,
               (max-width: 1280px) 1280px"
          src="assets/desktop/image-grid-3@2x.jpg"
          alt="our hallway exhibition"
        />

        <article id="final-grid-article" className="black-box-div">
          <h3>COME &amp; BE INSPIRED</h3>
          <p>
            We're excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </article>
      </main>
    </>
  );
};
export default BodyContent;
