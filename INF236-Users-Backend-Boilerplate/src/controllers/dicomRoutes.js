import { Router } from 'express';
import multer from 'multer';
import dicomParser from 'dicom-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Header from '../models/Header.js';

const router = Router();
const upload = multer({ dest: 'uploads/' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.post('/upload', upload.single('dicomFile'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      console.error('No file uploaded');
      return res.status(400).send('No file uploaded');
    }
    console.log(`File uploaded: ${file.originalname}`);

    const dicomPath = path.join(__dirname, '..', '..', 'uploads', file.filename);
    const buffer = fs.readFileSync(dicomPath);
    const dataSet = dicomParser.parseDicom(buffer);

    const headerData = {
      patientName: dataSet.string('x00100010'),
      patientId: dataSet.string('x00100020'),
      patientBirthDate: dataSet.string('x00100030'),
      patientSex: dataSet.string('x00100040'),
      patientWeight: dataSet.string('x00101030'),
      pregnancyStatus: dataSet.string('x001021C0'),
      studyDate: dataSet.string('x00080020'),
      seriesDate: dataSet.string('x00080021'),
      acquisitionDate: dataSet.string('x00080022'),
      studyTime: dataSet.string('x00080030'),
      seriesTime: dataSet.string('x00080031'),
      accessionNumber: dataSet.string('x00080050'),
      modality: dataSet.string('x00080060'),
      studyDescription: dataSet.string('x00081030'),
      seriesDescription: dataSet.string('x0008103E'),
      manufacturer: dataSet.string('x00080070'),
      manufacturerModelName: dataSet.string('x00081090'),
      stationName: dataSet.string('x00081010'),
      deviceSerialNumber: dataSet.string('x00181000'),
      softwareVersions: dataSet.string('x00181020'),
      sliceThickness: dataSet.string('x00180050'),
      repetitionTime: dataSet.string('x00180080'),
      echoTime: dataSet.string('x00180081'),
      magneticFieldStrength: dataSet.string('x00180087'),
      pixelSpacing: dataSet.string('x00280030'),
      windowCenter: dataSet.string('x00281050'),
      windowWidth: dataSet.string('x00281051'),
      imageType: dataSet.string('x00080008'),
      imageOrientation: dataSet.string('x00200037'),
      imagePosition: dataSet.string('x00200032'),
      photometricInterpretation: dataSet.string('x00280004'),
      dicomFilePath: file.filename,
      dicomFileName: file.originalname
    };

    const createdHeader = await Header.create(headerData);
    console.log('Header data saved:', createdHeader.toJSON());
    res.json({ dicomFilePath: headerData.dicomFilePath, dicomFileName: headerData.dicomFileName });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).send('Error processing file');
  }
});

router.get('/searchByFileName/:dicomFileName', async (req, res) => {
  const { dicomFileName } = req.params;
  try {
    const headers = await Header.findAll({ where: { dicomFileName } });
    if (!headers || headers.length === 0) {
      return res.status(404).send('File not found');
    }
    res.json(headers);
  } catch (error) {
    console.error('Error searching for file:', error);
    res.status(500).send('Error searching for file');
  }
});

router.get('/headers', async (req, res) => {
  try {
    const headers = await Header.findAll({
      attributes: ['id', 'dicomFileName', 'patientName', 'studyDate']
    });
    res.json(headers);
  } catch (error) {
    console.error('Error fetching headers:', error);
    res.status(500).send('Error fetching headers');
  }
});

export default router;