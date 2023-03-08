import Link from "next/link";
import React, { FC } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
interface Props {}
const LocationFooter: FC<Props> = () => {
  return (
    <>
      <footer className="brown-block flex-container">
        <h4 className="lines">MODERN ART GALLERY</h4>
        <p>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <ul className="flex-container social-icons-list">
          <li>
            <Link href="https://www.facebook.com/">
              <FaFacebookSquare style={{ color: "black" }} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/">
              <FaInstagram style={{ color: "black" }} />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/">
              <FaTwitter style={{ color: "black" }} />
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default LocationFooter;
