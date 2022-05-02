import MyPage from "./pages/MyPage";
import ContextMyPage from "./pages/ContextMyPage";
import CrudApi from "./components/CrudAPI";
import { CrudProvider } from "./contexts/ContextCrud";
//
function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentación
      </a>
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <ContextMyPage />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
