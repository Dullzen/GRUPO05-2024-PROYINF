import fs from 'fs';
import path from 'path';
import dicomParser from 'dicom-parser';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';

cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

export const uploadDicom = async (req, res) => {
  try {
    const dicomFile = req.file;
    const dicomPath = path.join(__dirname, '..', 'uploads', dicomFile.filename);
    
    const imageId = `wadouri:${dicomPath}`;
    const image = await cornerstone.loadImage(imageId);
    
    // Convert the image to a PNG buffer
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    const imageData = context.createImageData(image.width, image.height);
    cornerstone.getDefaultViewportForImage(canvas, image);
    cornerstone.renderToCanvas(canvas, image);
    
    const buffer = canvas.toBuffer('image/png');
    const outputPath = path.join(__dirname, '..', 'uploads', `${dicomFile.filename}.png`);
    fs.writeFileSync(outputPath, buffer);
    
    res.json({ dicomFilePath: dicomFile.filename, pngFilePath: `${dicomFile.filename}.png` });
  } catch (error) {
    console.error('Error processing DICOM file:', error);
    res.status(500).json({ error: 'Error processing DICOM file' });
  }
};
