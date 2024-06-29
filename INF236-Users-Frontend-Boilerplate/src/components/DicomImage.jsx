import React from 'react';
import PropTypes from 'prop-types';

const DicomImage = ({ filePath }) => {
  return (
    <div>
      <img src={filePath} alt="DICOM File" />
    </div>
  );
};

DicomImage.propTypes = {
  filePath: PropTypes.string.isRequired,
};

export default DicomImage;
