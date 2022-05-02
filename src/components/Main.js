const Main = ({ theme, texts, auth }) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}l</p>
    </main>
  );
};

export default Main;
