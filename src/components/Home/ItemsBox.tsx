import React from "react";
import ItemCard from "./ItemCard";
import storeItems from "../../data/items.json";

const ItemsBox = () => {
  const boxes = storeItems.map((item) => (
    <div key={item.id}>
      <ItemCard {...item}/>
    </div>
  ));
  return <div className="flex justify-evenly flex-wrap">{boxes}</div>;
};

export default ItemsBox;
