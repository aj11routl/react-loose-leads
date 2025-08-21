import logo from "../images/logo-short.JPG";
import { Link } from "react-router-dom";
import "./components.css";

function FooterComp() {
  return (
    <div className="footer">
      <div className="footer-directory">
        <div className="footer-directory-column">
          <ul className="footer-directory-category">
            <h3>Contact Us</h3>
            <li className="footer-list-item">Call us at 0191 942 7281</li>
            <li className="footer-list-item">
              Email us at help@looseleeads.co.uk
            </li>
            <li className="footer-list-item">
              <a href="https://www.instagram.com/looseleadsdogwalking/?hl=en">
                Instagram
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.facebook.com/people/Loose-Leads-Dog-Walking">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-directory-column">
          <ul className="footer-directory-category">
            <h3>Heading2</h3>
            <li className="footer-list-item">item link 1</li>
            <li className="footer-list-item">item link 1</li>
          </ul>
        </div>
        <div className="footer-directory-column">
          <ul className="footer-directory-category">
            <h3>Heading3</h3>
            <li className="footer-list-item">item link 1</li>
            <li className="footer-list-item">item link 2</li>
          </ul>
        </div>
        <div className="footer-directory-column">
          <ul className="footer-directory-category">
            <h3>Heading4</h3>
            <li className="footer-list-item">item link 1</li>
            <li className="footer-list-item">item link 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
  // Headings: sitemap (links to each page), contact us (phone, email, socials), social media (facebook, instagram, tiktok)
}

export default FooterComp;
