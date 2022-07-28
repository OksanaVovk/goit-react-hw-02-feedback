import React from 'react';
const FeedbackOptions = ({ goodIncr, neutralIncr, badIncr }) => (
  <div className="feedback">
    <button type="button" onClick={goodIncr}>
      Good
    </button>
    <button type="button" onClick={neutralIncr}>
      Neutral
    </button>
    <button type="button" onClick={badIncr}>
      Bad
    </button>
  </div>
);
export default FeedbackOptions;
