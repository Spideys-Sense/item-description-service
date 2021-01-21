import React from 'react';
import PropTypes from 'prop-types';

const SideBarGraph = ({ itemDataTable }) => (
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

SideBarGraph.propTypes = {
  itemDataTable: PropTypes.shape({
    itemNumber: PropTypes.number,
    weight: PropTypes.number,
    brand: PropTypes.string,
    lifestage: PropTypes.string,
    foodForm: PropTypes.string,
    specialDiet: PropTypes.string,
  }).isRequired,
};

export default SideBarGraph;
