import { useContext } from "react";
import ContextTheme from "../contexts/ContextTheme";
import ContextLanguage from "../contexts/ContextLanguage";
const ContextFooter = () => {
  const { texts } = useContext(ContextLanguage);
  const { theme } = useContext(ContextTheme);
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default ContextFooter;
