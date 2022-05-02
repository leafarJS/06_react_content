const Header = ({
  theme,
  handleTheme,
  handleLanguage,
  texts,
  auth,
  handleAuth,
}) => {
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
        id="light"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="htmlFor">{texts.headerDark}</label>
      <br /> <br /> <br />
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default Header;
