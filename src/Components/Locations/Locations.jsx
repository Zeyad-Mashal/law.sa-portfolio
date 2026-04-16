import "./Locations.css";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";

const locations = [
  {
    city: "مكتب الرياض",
    title: "شركة واثقون للمحاماة",
    mapUrl: "https://maps.app.goo.gl/VHoLZcgcof9TrsbX8",
    embedUrl:
      "https://www.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D8%AB%D9%82%D9%88%D9%86%20%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9%20%D9%85%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6&output=embed",
  },
  {
    city: "مكتب مكة",
    title: "شركة واثقون للمحاماة",
    mapUrl: "https://maps.app.goo.gl/V2ykaZJYny518MaN7?g_st=aw",
    embedUrl:
      "https://www.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D8%AB%D9%82%D9%88%D9%86%20%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9%20%D9%85%D9%83%D8%AA%D8%A8%20%D9%85%D9%83%D8%A9&output=embed",
  },
  {
    city: "مكتب جدة",
    title: "شركة واثقون للمحاماة",
    mapUrl: "https://maps.app.goo.gl/QP1YxM1Ziq7Ljao4A?g_st=aw",
    embedUrl:
      "https://www.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D8%AB%D9%82%D9%88%D9%86%20%D9%85%D9%83%D8%AA%D8%A8%20%D8%AC%D8%AF%D8%A9&output=embed",
  },
];

const Locations = () => {
  return (
    <section className="locations-section" id="locations" dir="rtl">
      <div className="locations-shell">
        <div className="locations-header">
          <p className="locations-kicker">الفروع</p>
          <h2>أماكننا</h2>
          <p>
            يمكنكم زيارة أحد فروع شركة واثقون للمحاماة، مع عرض الخريطة الخاصة بكل
            فرع للوصول بشكل أسرع وأسهل.
          </p>
        </div>

        <div className="locations-grid">
          {locations.map((location) => (
            <article className="location-card" key={location.city}>
              <div className="location-card-header">
                <div className="location-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <p>{location.title}</p>
                  <h3>{location.city}</h3>
                </div>
              </div>

              <a
                className="location-map-btn"
                href={location.mapUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`فتح خريطة ${location.city}`}
              >
                <FaMapLocationDot />
                <span>فتح الخريطة</span>
              </a>

              <div className="location-map-frame">
                <iframe
                  src={location.embedUrl}
                  title={`خريطة ${location.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
