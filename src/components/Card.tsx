import { FocusCards } from "@/components/ui/focus-cards";
import { useTranslation } from "react-i18next";

export default function FocusCardsDemo() {
  const { t } = useTranslation();

  const cards = t("projects.cards", { returnObjects: true });

  return <FocusCards cards={cards} />;
}