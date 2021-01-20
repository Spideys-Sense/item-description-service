import React from 'react';
import PropTypes from 'prop-types';

const GuaranteedAnalysis = ({ guaranteedAnalysis }) => (
  <div className="GuaranteedAnalysisDiv">
    <li className="GuaranteedAnalysisTable">
      <ul className="GATitle">
        <span className="title">Guaranteed Analysis </span>
      </ul>
      <ul>
        <span className="title">CRUDE PROTEIN: </span>
        <span className="value">{guaranteedAnalysis[0].itemNumber}</span>
      </ul>
      <ul>
        <span className="title">CRUDE FAT: </span>
        <span className="value">{guaranteedAnalysis[0].weight}</span>
      </ul>
      <ul>
        <span className="title">CRUDE FIBER: </span>
        <span className="value">{guaranteedAnalysis[0].brand}</span>
      </ul>
      <ul>
        <span className="title">MOISTURE: </span>
        <span className="value">{guaranteedAnalysis[0].lifestage}</span>
      </ul>
      <ul>
        <span className="title">VITAMIN C: </span>
        <span className="value">{guaranteedAnalysis[0].foodForm}</span>
      </ul>
      <ul>
        <span className="title">VITAMIN D: </span>
        <span className="value">{guaranteedAnalysis[0].specialDiet}</span>
      </ul>
      <ul>
        <span className="title">DHA: </span>
        <span className="value">{guaranteedAnalysis[0].specialDiet}</span>
      </ul>
    </li>
  </div>
);

GuaranteedAnalysis.propTypes = {
  guaranteedAnalysis: PropTypes.arrayOf.isRequired,
};

export default GuaranteedAnalysis;
