import React, { useState } from "react";

import "./land.css";

import landData from "../../data/land.json";
import Modal from "../global/Modal";
import AddLand from "./AddLand";
import Paginate from "../global/Paginate";

function Land() {
  const total = 18;
  const [land, setLand] = useState(landData.slice(0, total));
  const [pageNumber, setPageNumber] = useState(0);

  const landPerPage = 6;
  const pageVisited = landPerPage * pageNumber;
  const displayLandList = land
    .slice(pageVisited, pageVisited + landPerPage)
    .map((landDetails, index) => {
      return (
        <div key={index}>
          <div className="landDetails">
            <p>{landDetails.name}</p>
            <p>{landDetails.quantity}</p>
            <p>{landDetails.amount}</p>
            <p>{landDetails.start}</p>
            <p>{landDetails.due}</p>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(land.length / landPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const [isopen, setIsopen] = useState(false);

  return (
    <div>
      <div>
        <div className="land-header">
          <p>Lands</p>
        </div>
        <div>
          <div className="land-add">
            <button
              onClick={() => {
                setIsopen(true);
              }}
            >
              Add Land
            </button>
          </div>

          <div>
            <Modal trigger={isopen} setTrigger={setIsopen}>
              <AddLand trigger={isopen} setTrigger={setIsopen} />
            </Modal>
          </div>
        </div>
        <div className="land-title">
          <p>Name</p>
          <p>Quantity</p>
          <p>Amount</p>
          <p>Start date</p>
          <p>Due Date</p>
        </div>
        {displayLandList}
        <div className="pagination">
          <div className="show-result">
            <p>
              Showing Result {pageVisited + 1} to {landPerPage + pageVisited} of{" "}
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

export default Land;
