import React, { useState } from "react";
import itemStyle from "./Item.module.scss";
import { faMinus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ item, handleAmountChange, handleIgnoreItem }) => {
  const [enabled, setEnabled] = useState(true);

  const handleDisabled = (itemName = null, action = false) => {
    setEnabled(false);
    handleIgnoreItem(itemName, action);
  };

  return (
    <li className={`${itemStyle.listItem} ${!enabled && itemStyle.disabled}`}>
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => handleDisabled(item.name, true)}
        />
      <span>{item.name}:</span>
      <input
        type="number"
        onChange={(e) => handleAmountChange(item.name, e.target.value)}
        defaultValue={item.amount || 0}
      />
      {item.measurement}
    </li>
  );
};

export default Item;
