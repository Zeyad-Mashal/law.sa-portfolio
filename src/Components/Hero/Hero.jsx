import "./Hero.css";
import heroBg from "../../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
      dir="rtl"
    >
      <div className="hero-overlay" />
      <div className="hero-inner">
        <p className="hero-kicker">شركة واثقون</p>
        <h1>نحمي مصالحكم القانونية بخبرة واحترافية عالية</h1>
        <p className="hero-subtitle">
          نقدم حلولًا قانونية متكاملة للأفراد والشركات عبر فريق متخصص يجمع بين
          المعرفة العميقة وسرعة الإنجاز.
        </p>
        <a className="hero-cta" href="#contact">
          تواصل معنا الآن
        </a>
      </div>
    </section>
  );
};

export default Hero;
