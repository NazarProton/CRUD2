import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import ModalPostAdd from "../components/ItemAddModal";

async function getAllItems() {
  const allItems = await fetch("https://apiproton.herokuapp.com/posts").then(
    (res) => res.json()
  );
  return allItems;
}

const Home = () => {
  let [items, setItems] = useState([]);
  useEffect(() => {
    getAllItems().then((data) => setItems(data));
  }, []);
  console.log(items);

  const onDelete = async (id) => {
    await fetch(`https://apiproton.herokuapp.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setItems(items.filter((item) => item.id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = async (editedPost) => {
    console.log(editedPost);
    await fetch(`https://apiproton.herokuapp.com/posts/${editedPost.id}`, {
      method: "PUT",
      body: JSON.stringify(editedPost),
      headers: {
        "Content-type": "aplications/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setItems(
            items.map((item) => (item.id === editedPost.id ? editedPost : item))
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (newItem) => {
    let url = "https://apiproton.herokuapp.com/posts/";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    let data = `
  {
    "id": ${newItem.id},
    "imageUrl": "${newItem.imageUrl}",
    "name": "${newItem.name}",
    "size": {
      "width": 293,
      "height": 180
    },
    "price": "${newItem.price}",
    "desc": "",
    "weight": "${newItem.weight}",
    "comments": [
      {
        "id": 1,
        "productId": 1,
        "description": "exellent",
        "date": "14:00 22.08.2021"
      },
      {
        "id": 2,
        "productId": 1,
        "description": "very good",
        "date": "14:00 22.08.2021"
      }
    ]
  }`;

    xhr.send(data);

    setItems((items) => [...items, newItem]);
  };

  return (
    <div className="Container-fluid">
      <div className="d-flex justify-content-center">
        <h3 className="mt-4 text-uppercase">Menu</h3>
        <ModalPostAdd onAdd={onAdd} items={items} />
      </div>
      <div className="container py-4">
        <div className="row">
          {items.map((item, index) => (
            <Cards
              key={index}
              item={item}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
