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

  const updateViewport = () => {
    const element = divRef.current;

    if (!cornerstone.getEnabledElement(element)) {
      console.error('Elemento no habilitado por Cornerstone');
      return;
    }

    const viewport = cornerstone.getViewport(element);

    if (!viewport) {
      console.error('No se pudo obtener el viewport');
      return;
    }

    viewport.voi.windowWidth = parseInt(windowWidth, 10);
    viewport.voi.windowCenter = parseInt(windowCenter, 10);
    cornerstone.setViewport(element, viewport);
  };

  useEffect(() => {
    const element = divRef.current;
    cornerstone.enable(element);

    const loadImage = async () => {
      try {
        const image = await cornerstone.loadImage(`wadouri:${imageUrl}`);
        const viewport = cornerstone.getDefaultViewportForImage(element, image);

        viewport.voi.windowWidth = 1500; // Valores predeterminados
        viewport.voi.windowCenter = 50;
        viewport.invert = invertColors;

        cornerstone.displayImage(element, image);
        cornerstone.setViewport(element, viewport);
      } catch (error) {
        console.error('Error cargando la imagen DICOM:', error);
      }
    };

    loadImage();

    return () => {
      cornerstone.disable(element);
    };
  }, [imageUrl, invertColors]);

  return (
    <div>
      <h2>Visualizando: {imageUrl.split('/').pop()}</h2>
      <div ref={divRef} style={{ width: '512px', height: '512px', backgroundColor: 'black' }} />

      <div>
        <label htmlFor="contrast">Contraste (Window Width):</label>
        <input
          type="range"
          id="contrast"
          min="1"
          max="5000"
          value={windowWidth}
          onChange={(e) => setWindowWidth(e.target.value)}
          onMouseUp={() => {
            if (cornerstone.getEnabledElement(divRef.current)) {
              updateViewport();
            } else {
              console.error('La imagen no está completamente cargada.');
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="brightness">Brillo (Window Center):</label>
        <input
          type="range"
          id="brightness"
          min="-1000"
          max="1000"
          value={windowCenter}
          onChange={(e) => setWindowCenter(e.target.value)}
          onMouseUp={() => {
            if (cornerstone.getEnabledElement(divRef.current)) {
              updateViewport();
            } else {
              console.error('La imagen no está completamente cargada.');
            }
          }}
        />
      </div>
      <div>
        <button type="button" onClick={() => setInvertColors(!invertColors)}>
          {invertColors ? 'Revertir a Colores Normales' : 'Invertir a Negativo'}
        </button>
      </div>
    </div>
  );
}

Imagemanipulation.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  initialWindowCenter: PropTypes.number.isRequired,
  initialWindowWidth: PropTypes.number.isRequired,
};

export default Imagemanipulation;
