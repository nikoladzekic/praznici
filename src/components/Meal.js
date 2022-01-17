import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import mealStyle from "./Meal.module.scss";
import {
  faPlusSquare,
  faCheck,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import { toast } from "react-toastify";

const Meal = ({ meal, activeMeal, activeMealHandler, handleUpdateMeals, handleIgnoreItem }) => {
  const [items, setItems] = useState(meal.items);
  const [editing, setEditing] = useState(false);
  const [itemName, setItemName] = useState(null);
  const [itemAmount, setItemAmount] = useState(null);
  const [itemMeasure, setItemMeasure] = useState(null);

  const handleAmountChange = (itemName, currentValue, newValue = null) => {
    const newItems = [...items];
    if (newValue) {
      let exists = false;
      newItems.map((item) =>
        item.name === newValue.name ? (exists = true) : ""
      );
      if (exists) {
        toast.error("Proizvod je već u listi");
        return;
      }
      newItems.push(newValue);
    } else {
      newItems.map((item) =>
        item.name === itemName ? (item.amount = Number(currentValue)) : ""
      );
    }
    setItems(newItems);
    handleUpdateMeals(newItems, meal.name, newValue);
  };

  const handleAddNewItem = () => {
    if (!itemName || !itemAmount || !itemMeasure) {
      setEditing(false);
      return;
    }

    const newItem = {
      name: itemName,
      amount: Number(itemAmount),
      measurement: itemMeasure,
    };

    handleAmountChange(null, null, newItem);
    setEditing(false);
    setItemName(null);
    setItemAmount(null);
    setItemMeasure(null);
  };

  return (
    <div className={mealStyle.wrapper}>
      <div
        className={`${mealStyle.headerWrapper} ${
          meal.name === activeMeal ? mealStyle.active : ""
        }`}
        onClick={() => activeMealHandler(meal.name)}
      >
        {meal.name === activeMeal ? (
          <FontAwesomeIcon icon={faMinusSquare} />
        ) : (
          <FontAwesomeIcon icon={faPlusSquare} />
        )}

        <h2>{meal.name}</h2>
      </div>
      <ul className={meal.name === activeMeal ? mealStyle.active : ""}>
        {meal.items.map((item) => (
          <Item
            item={item}
            key={item._id}
            handleAmountChange={handleAmountChange}
            handleIgnoreItem={handleIgnoreItem}
          />
        ))}
        <hr />
        {!editing ? (
          <li className={mealStyle.addProduct} onClick={() => setEditing(true)}>
            Dodaj proizvod
          </li>
        ) : (
          <li className={mealStyle.editingProduct}>
            <h5>Unesi proizvod</h5>
            <div className={mealStyle.inputSection}>
              <input
                type="text"
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Ime proizvoda"
                className={mealStyle.regularInput}
              />
              <input
                type="number"
                onChange={(e) => setItemAmount(e.target.value)}
                placeholder="Količina proizvoda"
                className={mealStyle.regularInput}
              />
              <input
                type="text"
                onChange={(e) => setItemMeasure(e.target.value)}
                placeholder="Jedinica mere"
                className={mealStyle.smallInput}
              />
              <FontAwesomeIcon icon={faCheck} onClick={handleAddNewItem} />
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Meal;
