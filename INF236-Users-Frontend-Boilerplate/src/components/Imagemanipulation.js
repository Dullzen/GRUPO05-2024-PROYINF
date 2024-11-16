import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';

cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

function Imagemanipulation({ imageUrl, initialWindowCenter, initialWindowWidth }) {
  const divRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(initialWindowWidth || 1000);
  const [windowCenter, setWindowCenter] = useState(initialWindowCenter || 50);
  const [invertColors, setInvertColors] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      console.error('La URL de la imagen no es válida');
      return;
    }

    const element = divRef.current;
    cornerstone.enable(element);

    const loadImage = async () => {
      try {
        const formattedImageUrl = `wadouri:${imageUrl}`;
        console.log('Cargando imagen desde:', formattedImageUrl);

        const image = await cornerstone.loadImage(formattedImageUrl);
        cornerstone.displayImage(element, image);
      } catch (error) {
        console.error('Error cargando la imagen DICOM:', error);
      }
    };

    loadImage();

    return () => {
      cornerstone.disable(element);
    };
  }, [imageUrl]);

  return (
    <div>
      <h2>Visualizando: {imageUrl ? imageUrl.split('/').pop() : 'No se ha cargado la imagen'}</h2>
      <div ref={divRef} style={{ width: '512px', height: '512px', backgroundColor: 'black' }} />
      <div>
        <label>Contraste:</label>
        <input
          type="range"
          min="1"
          max="5000"
          value={windowWidth}
          onChange={(e) => setWindowWidth(e.target.value)}
        />
      </div>
      <div>
        <label>Brillo:</label>
        <input
          type="range"
          min="-1000"
          max="1000"
          value={windowCenter}
          onChange={(e) => setWindowCenter(e.target.value)}
        />
      </div>
      <button onClick={() => setInvertColors(!invertColors)}>
        {invertColors ? 'Revertir' : 'Invertir'}
      </button>
    </div>
  );
}

Imagemanipulation.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  initialWindowCenter: PropTypes.number,
  initialWindowWidth: PropTypes.number,
};

export default Imagemanipulation;
