import React from "react";
import ReportCard from "./components/ReportCard";
import { Translations } from "@/constants/translations";
import { t } from "i18next";
const cardsData = [
  {
    title: t(Translations.PAGE_REPORTS_CARD_BALANCES_REPORT),
    image: "/static/images/cards/contemplative-reptile.jpg",
    description: t(Translations.PAGE_REPORTS_CARD_BALANCES_DESCRIPTION),
  },
  {
    title: t(Translations.PAGE_REPORTS_CARD_DETAILED_REPORT),
    image: "/static/images/cards/chameleon.jpg",
    description: t(Translations.PAGE_REPORTS_CARD_DETAILED_DESCRIPTION),
  },
  {
    title: t(Translations.PAGE_REPORTS_CARD_TOTAL_REPORT),
    image: "/static/images/cards/gecko.jpg",
    description: t(Translations.PAGE_REPORTS_CARD_TOTAL_DESCRIPTION),
  },
  {
    title: t(Translations.PAGE_REPORTS_CARD_ACCRUALS_REPORT),
    image: "/static/images/cards/iguana.jpg",
    description: t(Translations.PAGE_REPORTS_CARD_ACCRUALS_DESCRIPTION),
  },
  {
    title: t(Translations.PAGE_REPORTS_CARD_CARRY_REPORT),
    image: "/static/images/cards/iguana.jpg",
    description: t(Translations.PAGE_REPORTS_CARD_CARRY_DESCRIPTION),
  },
];
const Reports = () => {
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
            title={card.title}
            description={card.description}
            image={card.image}
            showBadge={index >= cardsData.length - 2}
          />
        ))}
      </div>
    </>
  );
};

export default Reports;
