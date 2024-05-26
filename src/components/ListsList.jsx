import React from "react";
import { Link } from "react-router-dom";
import { editList } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ListsList = ({ items, listsCount, deleteSpecialAr }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total lists : {listsCount}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>options</th>
            </tr>
          </thead>
          <tbody>
            {items.map((li, i) => {
              const { _id, Description, updatedAt, createdAt } = li;
              return (
                <tr key={i}>
                  <td>
                    <Link to={`${_id}`}>{Description}</Link>
                  </td>
                  <td>{createdAt}</td>
                  <td>{updatedAt}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => deleteSpecialAr(li._id)}
                      className="btn btn-accent btn-sm me-2"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => dispatch(editList(li))}
                      className="btn btn-accent btn-sm me-2"
                    >
                      edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListsList;
