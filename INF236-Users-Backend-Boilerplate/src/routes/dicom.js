import { Router } from 'express';
import multer from 'multer';
import dicomParser from 'dicom-parser';
import fs from 'fs';
import Header from '../models/Header.js';
import { Op } from 'sequelize';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('dicomFile'), async (req, res) => {
  try {
    const file = req.file;
    const buffer = fs.readFileSync(file.path);
    const dataSet = dicomParser.parseDicom(buffer);

    const headerData = {
      studyDate: dataSet.string('x00080020'),
      studyTime: dataSet.string('x00080030'),
      imageTime: dataSet.string('x00080033'),
      patientId: dataSet.string('x00100020'),
      patientSex: dataSet.string('x00100040'),
      patientAge: dataSet.string('x00101010'),
      bodyPart: dataSet.string('x00180015'),
      tubeVoltage: dataSet.string('x00180060'),
      rows: dataSet.uint16('x00280010'),
      columns: dataSet.uint16('x00280011'),
    };

    await Header.create(headerData);
    res.send('File uploaded and header data saved!');
  } catch (error) {
    res.status(500).send('Error processing file');
  }
});

router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const headers = await Header.findAll({
      where: {
        [Op.or]: [
          { patientName: { [Op.iLike]: `%${query}%` } },
          { patientId: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.json(headers);
  } catch (error) {
    res.status(500).send('Error searching for files');
  }
});

export default router;
