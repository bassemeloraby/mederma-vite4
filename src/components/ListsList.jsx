import React from "react";
import { Link } from "react-router-dom";

const ListsList = ({ items, listsCount, deleteSpecialAr }) => {
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
              const { Description, updatedAt, createdAt } = li;
              return (
                <tr key={i}>
                  <td>
                    <Link>{Description}</Link>
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
