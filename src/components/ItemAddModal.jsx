import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalPostAdd = ({ onAdd , items }) => {
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: items[items.length-1].id + 1,
      imageUrl: e.target.imageUrl.value,
      name: e.target.name.value,
      size: items[0].size,
      price: e.target.price.value,
      desc: "",
      weight: e.target.weight.value,
      comments: items[0].comments,
    };
    console.log(newItem);
    onAdd(newItem);
    handleClose();
    e.target.name.value = "";
    e.target.price.value = "";
    e.target.weight.value = "";
    e.target.imageUrl.value = "";
  };

  return (
    <>
      <Button
        variant="btn btn-outline-success ms-4 mt-4 fw-bolder text-title"
        onClick={handleShow}
      >
        Create item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Control
              type="text"
              className="m-1"
              placeholder="Product name"
              aria-label="name"
              name="name"
            />
            <Form.Control
              type="number"
              className="m-1"
              placeholder="Product weight"
              aria-label="number"
              name="weight"
            />
            <Form.Control
              type="number"
              className="m-1"
              placeholder="Product price $"
              aria-label="number"
              name="price"
            />
            <Form.Control
              type="url"
              className="m-1"
              placeholder="Item image URL Adress"
              aria-label="url"
              name="imageUrl"
            />
            <Modal.Footer className="p-0 border-0 mt-2 ">
              <Button
                variant="secondary"
                className="mt-1 m-1"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="success"
                type="submit"
                onSubmit={handleOnSubmit}
              >
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPostAdd;
