"use client";

import Form from "../components/Form";
import { useTranslation } from "react-i18next";
import { Toaster } from "@/components/ui/toaster"; 

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center p-6 bg-transparent mt-60 pt-20" id="contact">
        <h1 className="text-[#FF3E3E] text-3xl font-bold mb-16 dark:text-white">
          {t("contact.title")}
        </h1>
        <Form />
      </div>
      <Toaster /> {/* Añade este componente */}
    </>
  );
}