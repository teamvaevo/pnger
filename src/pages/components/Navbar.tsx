import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="flex w-full items-center justify-end bg-base-300 px-4 py-6">
      <a href="/docs" className="link-hover link">
        {t("LABEL_NAVBAR_DOCS")}
      </a>
    </nav>
  );
}
