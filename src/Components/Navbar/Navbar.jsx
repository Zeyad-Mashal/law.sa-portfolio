import { useState } from "react";
import {
  FaBars,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaXmark,
} from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const navLinks = [
  "الرئيسية",
  "من نحن",
  "الرؤية والرسالة",
  "خدماتنا",
  "فريق العمل",
  "شركاء النجاح",
  "الأخبار",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" dir="rtl">
      <div className="top-strip">
        <div className="navbar-container top-strip-inner">
          <div className="top-strip-social" aria-label="روابط التواصل الاجتماعي">
            <a href="#" aria-label="لينكد إن">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="إنستغرام">
              <FaInstagram />
            </a>
            <a href="#" aria-label="اكس">
              <span className="x-letter">X</span>
            </a>
          </div>

          <div className="top-strip-contact">
            <a href="mailto:info@alfaozan.com">
              <FaEnvelope />
              <span>info@alfaozan.com</span>
            </a>
            <a href="tel:0559606663">
              <FaPhone />
              <span>0559606663</span>
            </a>
            <a href="tel:920005635">
              <FaPhone />
              <span>920005635</span>
            </a>
            <span className="work-hours">
              <FaClock />
              <span>ساعات العمل: 17:00 - 09:00</span>
            </span>
          </div>
        </div>
      </div>

      <div className="navbar-floating-wrap">
        <nav className="main-navbar navbar-container" aria-label="التنقل الرئيسي">
          <div className="main-navbar-right">
            <img src={logo} alt="شعار شركة فيصل الفوزان وشركاه" className="navbar-logo" />
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((state) => !state)}
            aria-label="فتح وإغلاق القائمة"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>

          <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={item === "الرئيسية" ? "is-active" : ""}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="contact-btn" onClick={closeMenu}>
            تواصل معنا
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
