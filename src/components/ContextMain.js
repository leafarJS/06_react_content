import { useContext } from "react";
import ContextTheme from "../contexts/ContextTheme";
import ContextLanguage from "../contexts/ContextLanguage";
import ContextAuth from "../contexts/ContextAuth";
const ContextMain = () => {
  const { texts } = useContext(ContextLanguage);
  const { theme } = useContext(ContextTheme);
  const { auth } = useContext(ContextAuth);
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}l</p>
    </main>
  );
};
export default ContextMain;
