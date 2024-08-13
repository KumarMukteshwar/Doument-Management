// src/components/PrivacyToggle.js

import React from 'react';

const PrivacyToggle = ({ isPrivate, onToggle }) => {
  return (
    <div className="privacy-toggle">
      <label>
        <input type="checkbox" checked={isPrivate} onChange={onToggle} />
        {isPrivate ? 'Private' : 'Public'}
      </label>
    </div>
  );
};

export default PrivacyToggle;
