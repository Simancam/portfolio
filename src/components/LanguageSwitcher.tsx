"use client"

import { useTranslation } from "react-i18next"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es"
    i18n.changeLanguage(newLang)
  }

  const buttonText = i18n.language === "es" ? "EN" : "ES"

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-300 hover:text-white transition-colors duration-200 text-xs font-medium"
      aria-label={`Switch to ${i18n.language === "es" ? "English" : "Spanish"} language`}
    >
      {buttonText}
    </button>
  )
}

export default LanguageSwitcher