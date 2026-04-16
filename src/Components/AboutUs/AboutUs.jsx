import "./AboutUs.css";
import aboutImage from "../../assets/about-pic.jpg";
import logo from "../../assets/logo.png";

const highlights = [
  "محاماة وتوثيق وسجل عقاري تحت مظلة واحدة",
  "حلول قانونية مبتكرة تتجاوز المعالجات التقليدية",
  "سرعة في الإنجاز ودقة في التنفيذ وفق الأنظمة السعودية",
];

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about-us" dir="rtl">
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-brand">
            <img
              src={logo}
              alt="شركة واثقون للمحاماة"
              className="about-us-logo"
            />
          </div>

          <p className="about-us-kicker">من نحن</p>
          <h2 className="about-us-title">
            نبذة عن شركة واثقون للمحاماة والتوثيق
          </h2>
          <p className="about-us-description">
            شركة محاماة وتوثيق وسجل عقاري رائدة، تأسست على مبدأ الثقة المتبادلة
            والاحترافية والجودة العالية، وتسعى إلى تقديم حلول قانونية مبتكرة
            وبديلة تتجاوز الحلول التقليدية، بما يحقق أعلى درجات الحماية لمصالح
            عملائها ويضمن استدامة علاقاتهم القانونية.
          </p>
          <p className="about-us-description about-us-description-secondary">
            كما توفر الشركة حماية قانونية متكاملة من خلال الجمع بين خدمات
            المحاماة والتقاضي وخدمات التوثيق المعتمدة وأعمال السجل العقاري، بما
            يضمن سرعة الإنجاز ودقة التنفيذ وفق الأنظمة المعمول بها في المملكة.
          </p>

          <div className="about-us-highlights" aria-label="أبرز مزايا الشركة">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="about-us-media">
          <img
            src={aboutImage}
            alt="مطرقة القضاء في مكتب قانوني"
            className="about-us-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
