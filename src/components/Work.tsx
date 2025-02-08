"use client";

import Card from "../components/Card";
import { useTranslation } from "react-i18next";


export default function Work() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center p-6 bg-transparent mt-60 pt-32" id="work">
      <h1 className="text-[#FF3E3E] text-3xl font-bold mb-16 dark:text-white">
        {t('projects.title')}
      </h1>
      <Card />
    </div>
  );
}
