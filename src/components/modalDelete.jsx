import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const DeleteModal = ({ onDelete, itemId, onClose }) => {
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  const handleDelete = () => {
    handleClose();
    onClose();
    console.log(itemId);
    onDelete(itemId);
  };
  return (
    <>
      <Button variant="btn btn-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title className="mt-2">Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer className=" border-0 mt-2 ">
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
