import ContextFooter from "../components/ContextFooter";
import ContextHeader from "../components/ContextHeader";
import ContextMain from "../components/ContextMain";
import { AuthProvider } from "../contexts/ContextAuth";
import { LanguageProvider } from "../contexts/ContextLanguage";
import { ThemeProvider } from "../contexts/ContextTheme";

const ContextMyPage = () => {
  //

  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <ContextHeader />
            <ContextMain />
            <ContextFooter />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default ContextMyPage;
