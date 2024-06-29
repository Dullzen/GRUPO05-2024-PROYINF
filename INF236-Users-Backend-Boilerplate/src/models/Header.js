import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Header extends Model {}

Header.init({
  patientName: DataTypes.STRING,
  patientId: DataTypes.STRING,
  patientBirthDate: DataTypes.STRING,
  patientSex: DataTypes.STRING,
  patientWeight: DataTypes.STRING,
  pregnancyStatus: DataTypes.STRING,
  studyDate: DataTypes.STRING,
  seriesDate: DataTypes.STRING,
  acquisitionDate: DataTypes.STRING,
  studyTime: DataTypes.STRING,
  seriesTime: DataTypes.STRING,
  accessionNumber: DataTypes.STRING,
  modality: DataTypes.STRING,
  studyDescription: DataTypes.STRING,
  seriesDescription: DataTypes.STRING,
  manufacturer: DataTypes.STRING,
  manufacturerModelName: DataTypes.STRING,
  stationName: DataTypes.STRING,
  deviceSerialNumber: DataTypes.STRING,
  softwareVersions: DataTypes.STRING,
  sliceThickness: DataTypes.STRING,
  repetitionTime: DataTypes.STRING,
  echoTime: DataTypes.STRING,
  magneticFieldStrength: DataTypes.STRING,
  pixelSpacing: DataTypes.STRING,
  windowCenter: DataTypes.STRING,
  windowWidth: DataTypes.STRING,
  imageType: DataTypes.STRING,
  imageOrientation: DataTypes.STRING,
  imagePosition: DataTypes.STRING,
  photometricInterpretation: DataTypes.STRING,
  dicomFilePath: DataTypes.STRING,
  dicomFileName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Header',
});

export default Header;