import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DeleteModal from './modalDelete'
import "./itemUpdateModal.css";

const ModalUpdate = ({ onEdit, item ,onDelete }) => {
  let [show, setShow] = useState(false);

  let [name, setName] = useState(item.name);
  let [weight, setWeight] = useState(item.weight);
  let [price, setPrice] = useState(item.price);
  let [imageUrl, setImageUrl] = useState(item.imageUrl);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  let editedItem = {
    id: item.id,
    imageUrl: imageUrl,
    name: name,
    size: item.size,
    price: price,
    desc:"",
    weight: weight,
    comments: item.comments,
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onEdit(editedItem);
  };


  return (
    <>
      <img
        onClick={handleShow}
        src={item.imageUrl}
        alt="menuItem"
        className="card-img-top img-fluid img-card"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              className="mb-1"
              placeholder="Product Name"
              value={name}
              aria-label="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product weight</Form.Label>
            <Form.Control
              type="number"
              className="mb-1"
              placeholder="Product weight"
              value={weight}
              aria-label="number"
              onChange={(e) => setWeight(e.target.value)}
            />
            <Form.Label>Product price $</Form.Label>
            <Form.Control
              type="text"
              className="mb-1"
              placeholder="Product price $"
              value={price}
              aria-label="number"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Label>Item image URL adress</Form.Label>
            <Form.Control
              type="text"
              className="mb-1"
              placeholder="Item image URL Adress"
              value={imageUrl}
              aria-label="url"
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Modal.Footer className="p-0 border-0 mt-2 ">
              <DeleteModal
                onDelete={onDelete}
                itemId={item.id}
                onClose={handleClose}
              />
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="success"
                type="submit"
                onSubmit={handleOnSubmit}
                onClick={handleClose}
              >
                Edit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalUpdate;
