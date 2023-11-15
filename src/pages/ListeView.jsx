import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";


const ListeView = ({openModal}) => {
  const state=useSelector((store) => store)
  return (
    <div className="p-4">
      <table className="table table-dark table-hover mt-5">
      <thead>
        <tr>
         <th>id</th>
         <th>Kuyruk Kodu</th>
         <th>Enlem</th>
         <th>Boylam</th>
         <th></th>
        </tr>
      </thead>
      <tbody>
        {state.flights.map((fly) => (
          <tr>
            <td>{fly.id} </td>
            <td>{fly.code} </td>
            <td>{fly.late} </td>
            <td>{fly.lng} </td>
            <td></td>
            <button onClick={() => openModal(fly.id)}>Detay</button>
          </tr>
        ))}
      </tbody>
      </table>
      <ReactPaginate 
      onPageChange={handleClick}
      className="pagination"
      pageCount={30}
      nextLabel="ileri >"
      previousLabel="< geri"/>
    </div>
  )
}

export default ListeView