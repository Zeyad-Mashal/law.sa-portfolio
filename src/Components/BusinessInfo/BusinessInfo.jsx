import "./BusinessInfo.css";
import {
  FaEnvelope,
  FaFileLines,
  FaPhoneVolume,
  FaCircleCheck,
} from "react-icons/fa6";
import { contactEmail, contactNumbers } from "../../data/contact";

const commercialRecords = [
  {
    title: "شركة واثقون للمحاماة",
    nationalNumber: "7031328169",
    issueDate: "2022/10/18",
    entityType: "شركة ذات مسؤولية محدودة",
    companyAttribute: "مهنية",
    status: "نشط",
  },
  {
    title: "شركة واثقون للمحاماة والتوثيق",
    nationalNumber: "7038789439",
    issueDate: "2024/04/06",
    entityType: "شركة ذات مسؤولية محدودة",
    companyAttribute: "مهنية",
    status: "نشط",
  },
];

const BusinessInfo = () => {
  return (
    <section className="business-info-section" id="business-info" dir="rtl">
      <div className="business-info-shell">
        <section className="business-records-card">
          <div className="business-section-header">
            <p className="business-kicker">السجل التجاري</p>
            <h2>البيانات النظامية للشركة</h2>
            <p>
              نوفر بيانات السجل التجاري بشكل واضح ومنظم لسهولة الاطلاع والتحقق من
              المعلومات الأساسية الخاصة بالشركة.
            </p>
          </div>

          <div className="business-records-grid">
            {commercialRecords.map((record) => (
              <article className="record-info-card" key={record.nationalNumber}>
                <div className="record-info-icon">
                  <FaFileLines />
                </div>
                <h3>{record.title}</h3>
                <ul>
                  <li>
                    <span>الرقم الوطني:</span>
                    <strong>{record.nationalNumber}</strong>
                  </li>
                  <li>
                    <span>تاريخ الإصدار:</span>
                    <strong>{record.issueDate}</strong>
                  </li>
                  <li>
                    <span>نوع الكيان:</span>
                    <strong>{record.entityType}</strong>
                  </li>
                  <li>
                    <span>صفة الشركة:</span>
                    <strong>{record.companyAttribute}</strong>
                  </li>
                  <li>
                    <span>الحالة:</span>
                    <strong className="record-status">
                      <FaCircleCheck />
                      {record.status}
                    </strong>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <aside className="business-contact-card">
          <div className="business-section-header">
            <p className="business-kicker">أرقام التواصل</p>
            <h2>تواصل معنا مباشرة</h2>
            <p>
              يمكنكم التواصل مع الشركة عبر الأرقام التالية أو من خلال البريد
              الإلكتروني الرسمي.
            </p>
          </div>

          <div className="business-contact-list">
            {contactNumbers.map((item) => (
              <a key={item.tel} href={`tel:${item.tel}`} className="business-contact-item">
                <FaPhoneVolume />
                <span className="phone-ltr">{item.label}</span>
              </a>
            ))}

            <a
              href={`mailto:${contactEmail}`}
              className="business-contact-item business-email-item"
            >
              <FaEnvelope />
              <span>{contactEmail}</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BusinessInfo;
