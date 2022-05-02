import Contextcrud from "../contexts/ContextCrud";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { useContext } from "react";
const CrudApi = () => {
  const { db, loader, error } = useContext(Contextcrud);
  return (
    <div>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loader && <Loader />}
        {error && (
          <Message
            msj={`Error: ${error.status} ${error.statusText}`}
            bgColor="#dc3445"
          />
        )}

        {db && <CrudTable />}
      </article>
    </div>
  );
};
export default CrudApi;
