import React from "react";
import { useCart } from "react-use-cart";
import ModalUpdate from "./ItemUpdateModal";

const Cards = ({ item , onEdit , onDelete}) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-1">
        <div className="card h-100 shadow rounded">
          <ModalUpdate onEdit={onEdit} item={item} onDelete={onDelete} />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 key={item.id} className="card-title">
                {item.name}
              </h5>
              <span className="fw-bolder ">${item.price}</span>
            </div>
            <div className="">
              <p className="card-text">{item.weight}g</p>
            </div>
            <div className="d-grid justify-content-end mt-2">
              <button
                className="btn btn-outline-success"
                onClick={() => addItem(item)}
              >
                Add to order list
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
