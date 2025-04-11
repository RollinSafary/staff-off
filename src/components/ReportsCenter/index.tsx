import ReportCard from "./components/ReportCard";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
const cardsData = [
  {
    title: Translations.PAGE_REPORTS_CARD_BALANCES_REPORT,
    image: "/static/images/cards/contemplative-reptile.jpg",
    description: Translations.PAGE_REPORTS_CARD_BALANCES_DESCRIPTION,
  },
  {
    title: Translations.PAGE_REPORTS_CARD_DETAILED_REPORT,
    image: "/static/images/cards/chameleon.jpg",
    description: Translations.PAGE_REPORTS_CARD_DETAILED_DESCRIPTION,
  },
  {
    title: Translations.PAGE_REPORTS_CARD_TOTAL_REPORT,
    image: "/static/images/cards/gecko.jpg",
    description: Translations.PAGE_REPORTS_CARD_TOTAL_DESCRIPTION,
  },
  {
    title: Translations.PAGE_REPORTS_CARD_ACCRUALS_REPORT,
    image: "/static/images/cards/iguana.jpg",
    description: Translations.PAGE_REPORTS_CARD_ACCRUALS_DESCRIPTION,
  },
  {
    title: Translations.PAGE_REPORTS_CARD_CARRY_REPORT,
    image: "/static/images/cards/iguana.jpg",
    description: Translations.PAGE_REPORTS_CARD_CARRY_DESCRIPTION,
  },
];

const Reports = () => {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <h1>{t(Translations.PAGE_REPORTS_TITLE)}</h1>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          alignItems: "stretch",
        }}
      >
        {cardsData.map((card, index) => (
          <ReportCard
            key={index}
            title={t(card.title)}
            description={t(card.description)}
            image={card.image}
            showBadge={index >= cardsData.length - 2}
          />
        ))}
      </div>
    </>
  );
};

export default Reports;
