import React, { useContext } from "react";
import Contextcrud from "../contexts/ContextCrud";
//
const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(Contextcrud);
  let { id } = el;
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
