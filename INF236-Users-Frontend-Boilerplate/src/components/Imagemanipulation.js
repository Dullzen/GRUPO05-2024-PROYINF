import React, { useRef, useEffect, useState } from 'react';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';

// Configurar cornerstone con dicomParser
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

function Imagemanipulation({ imageUrl }) {
  const divRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(400);  // Contraste (Window Width)
  const [windowCenter, setWindowCenter] = useState(40); // Brillo (Window Center)
  const [invertColors, setInvertColors] = useState(false); // Invertir colores

  // Función para calcular los valores dinámicos de contraste y brillo
  const calculateDynamicWindowValues = (image) => {
    let minPixelValue = Infinity;
    let maxPixelValue = -Infinity;

    const pixelData = image.getPixelData();  // Obtener los datos de los píxeles
    for (let i = 0; i < pixelData.length; i++) {
      const pixelValue = pixelData[i];
      if (pixelValue < minPixelValue) {
        minPixelValue = pixelValue;
      }
      if (pixelValue > maxPixelValue) {
        maxPixelValue = pixelValue;
      }
    }

    const dynamicWindowWidth = maxPixelValue - minPixelValue;
    const dynamicWindowCenter = (maxPixelValue + minPixelValue) / 2;

    return { dynamicWindowWidth, dynamicWindowCenter };
  };

  useEffect(() => {
    const element = divRef.current;
    cornerstone.enable(element);

    const loadImage = async () => {
      try {
        const image = await cornerstone.loadImage(`wadouri:${imageUrl}`);
        const viewport = cornerstone.getDefaultViewportForImage(element, image);

        // Obtener los valores de la imagen o calcular dinámicamente si no están presentes
        let imageWindowWidth = image.windowWidth || 0;
        let imageWindowCenter = image.windowCenter || 0;

        // Si no existen valores recomendados, calcular dinámicamente
        if (!imageWindowWidth || !imageWindowCenter) {
          const { dynamicWindowWidth, dynamicWindowCenter } = calculateDynamicWindowValues(image);
          imageWindowWidth = dynamicWindowWidth;
          imageWindowCenter = dynamicWindowCenter;
        }

        // Configurar los valores iniciales en el viewport
        viewport.voi.windowWidth = imageWindowWidth;
        viewport.voi.windowCenter = imageWindowCenter;
        viewport.invert = invertColors;

        cornerstone.displayImage(element, image);
        cornerstone.setViewport(element, viewport);

        // Actualizar los controles con los valores obtenidos o calculados
        setWindowWidth(imageWindowWidth);
        setWindowCenter(imageWindowCenter);
      } catch (error) {
        console.error('Error cargando la imagen DICOM:', error);
      }
    };

    loadImage();

    return () => {
      cornerstone.disable(element);
    };
  }, [imageUrl, invertColors]);

  // Función para actualizar la visualización con los valores manuales
  const updateViewport = () => {
    const element = divRef.current;
    const viewport = cornerstone.getViewport(element);
    viewport.voi.windowWidth = windowWidth;
    viewport.voi.windowCenter = windowCenter;
    cornerstone.setViewport(element, viewport);
  };

  return (
    <div>
      <div ref={divRef} style={{ width: '512px', height: '512px', backgroundColor: 'black' }}></div>

      {/* Controles para ajustar el contraste y el brillo manualmente */}
      <div>
        <label htmlFor="contrast">Contraste (Window Width):</label>
        <input
          type="range"
          id="contrast"
          min="1"
          max="5000"
          value={windowWidth}
          onChange={(e) => setWindowWidth(e.target.value)}
          onMouseUp={updateViewport}
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
          onMouseUp={updateViewport}
        />
      </div>
      <div>
        <button onClick={() => setInvertColors(!invertColors)}>
          {invertColors ? 'Revertir a Colores Normales' : 'Invertir a Negativo'}
        </button>
      </div>
    </div>
  );
}

export default Imagemanipulation;





