import "./OurServices.css";
import {
  FaBuilding,
  FaChartLine,
  FaCircleCheck,
  FaFileContract,
  FaGavel,
  FaHandshake,
  FaLandmark,
  FaRegLightbulb,
  FaScaleBalanced,
  FaShieldHalved,
  FaStar,
  FaUsers,
} from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { primaryWhatsapp } from "../../data/contact";

const identityCards = [
  {
    title: "الرؤية",
    text: "أن نكون الخيار القانوني الأول للأفراد والمنشآت في مجالات المحاماة والتوثيق والسجل العقاري، عبر حلول قانونية موثوقة ومرنة مبنية على فهم عميق للأنظمة السعودية.",
    icon: <FaRegLightbulb />,
  },
  {
    title: "الرسالة",
    text: "تقديم خدمات قانونية متكاملة بمعايير مهنية عالية تعتمد على الدقة والسرية والبحث القانوني المتعمق، مع التركيز على الحلول البديلة التي توفر الوقت والتكلفة وتحفظ الحقوق.",
    icon: <FaShieldHalved />,
  },
];

const values = [
  "النزاهة",
  "العدالة",
  "السرية",
  "الالتزام",
  "الاحترافية",
  "الموثوقية",
  "المسؤولية",
];

const services = [
  {
    title: "الاعتراض على المخالفات",
    description:
      "ترافع نظامي ودفاعات قانونية دقيقة لمعالجة المخالفات الإدارية والتنظيمية والوصول إلى أفضل نتيجة ممكنة لكل حالة.",
    icon: <FaScaleBalanced />,
  },
  {
    title: "الأراضي البيضاء",
    description:
      "إدارة ملفات رسوم الأراضي البيضاء وتحليل القرارات المرتبطة بها ومعالجة الإشكالات التنظيمية بطرح قانوني متخصص.",
    icon: <FaLandmark />,
  },
  {
    title: "القضايا العمالية",
    description:
      "إدارة النزاعات العمالية وتنظيم الشؤون ذات العلاقة بما يحقق الامتثال لنظام العمل ويحمي مصالح الأطراف.",
    icon: <FaUsers />,
  },
  {
    title: "القضايا التجارية",
    description:
      "معالجة النزاعات التجارية والمطالبات المالية وخلافات الشركاء وتنفيذ العقود بحلول نظامية تقلل المخاطر القانونية.",
    icon: <FaBuilding />,
  },
  {
    title: "القضايا العقارية",
    description:
      "منازعات الملكية واسترداد الحيازة والإخلاء وفسخ العقود والالتزامات الإيجارية مع خبرة عملية واسعة في هذا المسار.",
    icon: <FaGavel />,
  },
  {
    title: "أعمال التوثيق والاستشارات التوثيقية",
    description:
      "تقديم أعمال التوثيق النظامية والاستشارات المتخصصة بما يضمن وضوح الإجراءات وسلامة التصرفات القانونية.",
    icon: <FaFileContract />,
  },
  {
    title: "أعمال السجل العقاري",
    description:
      "متابعة إجراءات التسجيل والتحديث ومعالجة الإشكالات المرتبطة بالسجل العقاري بخدمة دقيقة وسريعة.",
    icon: <FaHandshake />,
  },
];

const achievements = [
  { value: "+30", label: "الاعتراض على المخالفات" },
  { value: "+60", label: "الأراضي البيضاء" },
  { value: "+70", label: "القضايا العمالية" },
  { value: "+30", label: "القضايا التجارية" },
  { value: "+30", label: "القضايا العقارية" },
  { value: "+14000", label: "أعمال التوثيق والاستشارات" },
  { value: "+110", label: "أعمال السجل العقاري" },
];

const differentiators = [
  "التركيز على الحلول البديلة قبل التصعيد القضائي.",
  "خبرة عملية متخصصة في القضايا العقارية والتنظيمية.",
  "الجمع بين المحاماة والتوثيق والسجل العقاري تحت مظلة واحدة.",
  "دقة الصياغة القانونية وقوة الطرح النظامي.",
  "الالتزام بالسرية والمهنية في جميع التعاملات.",
];

const introHighlights = [
  {
    title: "معايير مهنية عالية",
    description: "تنفيذ منظم وصياغة دقيقة تعكس جودة الخدمة القانونية.",
  },
  {
    title: "حلول بديلة فعالة",
    description: "معالجة ذكية تختصر الوقت وتقلل التعقيد قبل التصعيد.",
  },
  {
    title: "فهم عميق للأنظمة السعودية",
    description: "قراءة نظامية دقيقة تدعم القرار القانوني بثقة ووضوح.",
  },
];

const OurServices = () => {
  return (
    <section className="profile-sections" id="services" dir="rtl">
      <div className="profile-shell">
        <section className="profile-intro-card">
          <div>
            <p className="section-kicker">نبني الثقة بالخبرة</p>
            <h2 className="section-heading">
              حلول قانونية متكاملة بتصميم مهني واضح
            </h2>
            <p className="section-copy">
              تجمع شركة واثقون بين المحاماة والتوثيق والسجل العقاري في تجربة
              واحدة متناسقة، مع اعتماد أسلوب مهني يوازن بين الحماية القانونية
              وسرعة الإنجاز وجودة المخرجات.
            </p>
          </div>
          <div className="profile-intro-badges">
            {introHighlights.map((item) => (
              <article className="intro-highlight-card" key={item.title}>
                <div className="intro-highlight-icon">
                  <FaCircleCheck />
                </div>
                <div className="intro-highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="identity-grid">
          {identityCards.map((item) => (
            <article className="identity-card" key={item.title}>
              <div className="identity-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="values-section">
          <div className="section-header">
            <p className="section-kicker">القيم</p>
            <h2 className="section-heading">مرتكزات العمل التي تقود كل خدمة</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div className="value-chip" key={value}>
                <FaStar />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="services-section">
          <div className="section-header">
            <p className="section-kicker">الخدمات</p>
            <h2 className="section-heading">
              خدمات قانونية وتوثيقية تغطي أهم الاحتياجات
            </h2>
            <p className="section-copy">
              صُممت هذه الخدمات لتخدم الأفراد والمنشآت عبر معالجة قانونية دقيقة
              ومرنة، مع الحفاظ على وضوح الإجراءات وتقليل المخاطر بقدر الإمكان.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <a
            className="services-section-btn"
              href={`https://wa.me/${primaryWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="تواصل عبر واتساب"
          >
            تواصل واتساب
          </a>
        </section>

        <section className="achievements-section">
          <div className="section-header">
            <p className="section-kicker">الإنجازات</p>
            <h2 className="section-heading">أرقام تعكس الخبرة وحجم التنفيذ</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((item) => (
              <article className="achievement-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="differentiators-section">
          <div className="section-header">
            <p className="section-kicker">ما يميزنا</p>
            <h2 className="section-heading">
              مزايا تصنع تجربة قانونية أكثر كفاءة
            </h2>
          </div>
          <div className="differentiators-grid">
            {differentiators.map((item) => (
              <article className="differentiator-card" key={item}>
                <FaChartLine />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="commitment-section">
          <div className="commitment-icon">
            <FaShieldHalved />
          </div>
          <div>
            <p className="section-kicker">التزام الشركة</p>
            <h2 className="section-heading">
              احترافية عالية مع التزام كامل بالأنظمة
            </h2>
            <p className="section-copy">
              تتعهد شركة واثقون للمحاماة والتوثيق بتقديم خدماتها القانونية وفق
              أعلى مستوى من الاحترافية، وبالخبرة الكافية التي تمكّنها من التعامل
              مع مختلف القضايا والنزاعات، مع الالتزام التام بالأنظمة السعودية،
              والحفاظ على سرية المعلومات، والعمل لتحقيق أفضل النتائج الممكنة
              لعملائها.
            </p>

            <div className="services-brand-row">
              <div className="services-brand">
                <img
                  src={logo}
                  alt="شعار شركة واثقون للمحاماة والتوثيق"
                  className="services-brand-logo"
                />
                <div className="services-brand-text">
                  <span className="services-brand-name">واثقون</span>
                  <span className="services-brand-subtitle">
                    للمحاماة والتوثيق
                  </span>
                </div>
              </div>

              <a
                className="services-contact-btn"
                href={`https://wa.me/${primaryWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="تواصل عبر واتساب"
              >
                تواصل واتساب
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurServices;
