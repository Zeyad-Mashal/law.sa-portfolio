import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { contactEmail, contactNumbers } from "../../data/contact";

const branches = ["الرياض", "مكة", "جدة"];

const Footer = () => {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="site-footer-shell">
        <div className="footer-brand-block">
          <img src={logo} alt="شعار شركة واثقون للمحاماة والتوثيق" className="footer-logo" />
          <h3>شركة واثقون للمحاماة والتوثيق</h3>
          <p>
            نقدم خدمات قانونية وتوثيقية باحترافية عالية، مع التزام كامل بالأنظمة
            السعودية ووضوح في التواصل وسرعة في الإنجاز.
          </p>
        </div>

        <div className="footer-links-block">
          <h4>بيانات التواصل</h4>
          <a href={`mailto:${contactEmail}`}>
            <FaEnvelope />
            <span>{contactEmail}</span>
          </a>
          {contactNumbers.map((item) => (
            <a key={item.tel} href={`tel:${item.tel}`}>
              <FaPhone />
              <span className="phone-ltr">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="footer-links-block">
          <h4>الفروع</h4>
          {branches.map((branch) => (
            <p key={branch}>
              <FaLocationDot />
              <span>{branch}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>جميع الحقوق محفوظة © شركة واثقون للمحاماة والتوثيق</p>
      </div>
    </footer>
  );
};

export default Footer;
