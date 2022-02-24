import React from "react";
import { useCart } from "react-use-cart";
import "./orderList.css";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h5 className="text-center">Your order list is empty.</h5>;
  return (
    <div className="container-fluid py-3 shadow">
      <div className="row justify-content-center">
        <h4 className="text-center py-3 text-decoration-underline">
          My orders
        </h4>
        <div className="col-sm-12 col-ma-12 col-lg-8 col-xl-8 col-xxl-8 ру-4">
          <div className="d-flex justify-content-center py-3">
            <p className="position-relative fw-bolder text-title">
              Order list
              <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-2">
                {totalUniqueItems}
              </span>
            </p>
            <p className="position-relative ms-4 fw-bolder text-title">
              Total Items
              <span className="position-absolute translate-middle rounded-pill badge bg-success mx-2">
                {totalItems}
              </span>
            </p>
          </div>
          <div>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index} className="align-middle">
                      <td>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cart"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>Quantity: {item.quantity}</td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-outline-dark ms-1"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-outline-dark ms-1"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-outline-danger ms-1"
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between py-3 px-2">
            <button
              onClick={() => emptyCart()}
              className="btn btn-outline-danger"
            >
              Clear list
            </button>
            <h3>Total Price:${cartTotal}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
