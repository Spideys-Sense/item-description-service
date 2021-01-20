import React from 'react';
import TransitionInstructions from './TransitionInstructions';

const FeedingInstructions = ({ feedingInstructions, transitionInstructions }) => {
  return (
    <div>
      <div className="FeedingInstructionsText">
        <p className="title">Feeding Instructions </p>
        <div className="value">
          <table>
            <thead>
              <tr>
                <th>Weight</th>
                <th>Less Than 4 Months Daily Feeding (cup)</th>
                <th>4 to 6 Months Daily Feeding (cup)</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <td className="weightCol">1 LBS</td>
              <td>1/4</td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="weightCol">2 LBS</td>
              <td>3/8</td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="weightCol">3 LBS</td>
              <td>1/2</td>
              <td>3/8</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="weightCol">4 LBS</td>
              <td>5/8</td>
              <td>1/2</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="weightCol">6 LBS</td>
              <td>7/8</td>
              <td>2/3</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="weightCol">7 LBS</td>
              <td></td>
              <td>7/8</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="weightCol">8 LBS</td>
              <td></td>
              <td>1</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
        <TransitionInstructions
          transitionInstructions={ transitionInstructions }
        />
    </div>
  );
};

export default FeedingInstructions;
