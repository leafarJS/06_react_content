import { createContext, useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
//
const Contextcrud = createContext();
const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  //
  let api = helpHttp();
  let url = "http://localhost:5000/santos";
  useEffect(() => {
    setLoader(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoader(false);
      });
  }, [url]);
  //
  function createData(data) {
    data.id = Date.now();
    //console.log(data);
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    setDb([...db, data]);
  }
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Are you sure you want to delete the data? ${id}`
    );
    let options = {
      headers: { "Content-Type": "application/json" },
    };
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setDb(res);
        }
      });
    } else {
      return;
    }
  };
  //
  const data = {
    db,
    dataToEdit,
    setDataToEdit,
    error,
    loader,
    createData,
    updateData,
    deleteData,
  };
  return <Contextcrud.Provider value={data}>{children}</Contextcrud.Provider>;
};
export { CrudProvider };
export default Contextcrud;
