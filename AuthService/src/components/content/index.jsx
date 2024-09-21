/* eslint-disable react/prop-types */

import "./index.css";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
function Content(props) {
  const { setShowModal, users, setEditUserId, setUsers } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    console.log(userId);
    if (confirmDelete) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      console.log(updatedUsers);
      setUsers(updatedUsers);
    }
  };
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <>
      <div className="User">
        <div className="User-header">
          <h2>Users</h2>
          <button onClick={() => setShowModal("create")}>Create</button>
        </div>
        <table className="User-table">
          <thead>
            <tr className="User-table-tr">
              <th>User ID</th>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>City</th>
              <th>Phone number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.city}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.address}</td>
                  <td>
                    <button
                      onClick={() => {
                        setShowModal("edit");
                        setEditUserId(user.id);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
export default Content;
