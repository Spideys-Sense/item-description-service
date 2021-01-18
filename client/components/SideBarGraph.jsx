import React from 'react';

const SideBarGraph = ({ itemDataTable }) => {
  return (
    <div className="SideBarGraph">
      <li className="SideBarGraph">
        <ul>
          <span className="title">ITEM NUMBER: </span>
          <span className="value">{itemDataTable.itemNumber}</span>
        </ul>
        <ul>
          <span className="title">WEIGHT: </span>
          <span className="value">{itemDataTable.weight}</span>
        </ul>
        <ul>
          <span className="title">BRAND: </span>
          <span className="value">{itemDataTable.brand}</span>
        </ul>
        <ul>
          <span className="title">LIFESTAGE: </span>
          <span className="value">{itemDataTable.lifestage}</span>
        </ul>
        <ul>
          <span className="title">FOOD FORM: </span>
          <span className="value">{itemDataTable.foodForm}</span>
        </ul>
        <ul>
          <span className="title">SPECIAL DIET: </span>
          <span className="value">{itemDataTable.specialDiet}</span>
        </ul>
      </li>
    </div>
  );
};

export default SideBarGraph;
