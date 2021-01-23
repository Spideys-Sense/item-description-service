import React from 'react';
import PropTypes from 'prop-types';

const GuaranteedAnalysis = () => {
  return (
    <div className="GuaranteedAnalysisDiv">
    <li className="GuaranteedAnalysisTable">
      <ul className="GATitle">
        <span className="title">Guaranteed Analysis </span>
      </ul>
      <ul>
        <span className="title">CRUDE PROTEIN: </span>
        <span className="value">33.5% min</span>
      </ul>
      <ul>
        <span className="title">CRUDE FAT: </span>
        <span className="value">16.5% min</span>
      </ul>
      <ul>
        <span className="title">CRUDE FIBER: </span>
        <span className="value">3.5% max</span>
      </ul>
      <ul>
        <span className="title">MOISTURE: </span>
        <span className="value">8.0% min</span>
      </ul>
      <ul>
        <span className="title">VITAMIN C: </span>
        <span className="value">85 mg/kg min</span>
      </ul>
      <ul>
        <span className="title">VITAMIN E: </span>
        <span className="value">525 IU/kg min</span>
      </ul>
      <ul>
        <span className="title">DHA: </span>
        <span className="value">0.1% min</span>
      </ul>
    </li>
  </div>
  )
}

GuaranteedAnalysis.propTypes = {
  guaranteedAnalysis: PropTypes.arrayOf.isRequired,
};

export default GuaranteedAnalysis;
