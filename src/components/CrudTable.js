import React, { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import Contextcrud from "../contexts/ContextCrud";
const CrudTable = () => {
  const { db: data } = useContext(Contextcrud);
  return (
    <div>
      <h3>Table of Data</h3>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Constellation:</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
