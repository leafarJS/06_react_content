import { useContext } from "react";
import ContextTheme from "../contexts/ContextTheme";
import ContextLanguage from "../contexts/ContextLanguage";
import ContextAuth from "../contexts/ContextAuth";

const ContextHeader = () => {
  const { theme, handleTheme } = useContext(ContextTheme);
  const { texts, handleLanguage } = useContext(ContextLanguage);
  const { auth, handleAuth } = useContext(ContextAuth);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select className="languages" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light-context"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="htmlFor-context">{texts.headerDark}</label>
      <br /> <br /> <br />
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default ContextHeader;
