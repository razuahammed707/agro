import React, { useState } from "react";

import "./user.css";

import userData from "../../data/user.json";
import Modal from "../global/Modal";
import AddUser from "./AddUser";
import Paginate from "../global/Paginate";

function User() {
  const total = 18;
  const [user, setUser] = useState(userData.slice(0, total));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 6;
  const pageVisited = userPerPage * pageNumber;
  const displayUserList = user
    .slice(pageVisited, pageVisited + userPerPage)
    .map((userDetails, index) => {
      return (
        <div key={index}>
          <div className="userdetails">
            <p>{userDetails.Name}</p>
            <p>{userDetails.Email}</p>
            <p>{userDetails.Password}</p>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(user.length / userPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const [isopen, setIsopen] = useState(false);

  return (
    <div>
      <div>
        <div className="user-header">
          <p>Users</p>
        </div>
        <div>
          <div className="user-add">
            <button
              onClick={() => {
                setIsopen(true);
              }}
            >
              Add User
            </button>
          </div>

          <div>
            <Modal trigger={isopen} setTrigger={setIsopen}>
              <AddUser trigger={isopen} setTrigger={setIsopen} />
            </Modal>
          </div>
        </div>
        <div className="user-title">
          <p>Name</p>
          <p>Email</p>
          <p>Password</p>
        </div>
        {displayUserList}
        <div className="pagination">
          <div className="show-result">
            <p>
              Showing Result {pageVisited + 1} to {userPerPage + pageVisited} of{" "}
              {total}
            </p>
          </div>
          <div className="pageNumber">
            <Paginate pageChange={pageChange} pageCount={pageCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
