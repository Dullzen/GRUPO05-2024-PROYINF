'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Headers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientName: {
        type: Sequelize.STRING
      },
      patientId: {
        type: Sequelize.STRING
      },
      patientBirthDate: {
        type: Sequelize.STRING
      },
      patientSex: {
        type: Sequelize.STRING
      },
      patientWeight: {
        type: Sequelize.STRING
      },
      pregnancyStatus: {
        type: Sequelize.STRING
      },
      studyDate: {
        type: Sequelize.STRING
      },
      seriesDate: {
        type: Sequelize.STRING
      },
      acquisitionDate: {
        type: Sequelize.STRING
      },
      studyTime: {
        type: Sequelize.STRING
      },
      seriesTime: {
        type: Sequelize.STRING
      },
      accessionNumber: {
        type: Sequelize.STRING
      },
      modality: {
        type: Sequelize.STRING
      },
      studyDescription: {
        type: Sequelize.STRING
      },
      seriesDescription: {
        type: Sequelize.STRING
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      manufacturerModelName: {
        type: Sequelize.STRING
      },
      stationName: {
        type: Sequelize.STRING
      },
      deviceSerialNumber: {
        type: Sequelize.STRING
      },
      softwareVersions: {
        type: Sequelize.STRING
      },
      sliceThickness: {
        type: Sequelize.STRING
      },
      repetitionTime: {
        type: Sequelize.STRING
      },
      echoTime: {
        type: Sequelize.STRING
      },
      magneticFieldStrength: {
        type: Sequelize.STRING
      },
      pixelSpacing: {
        type: Sequelize.STRING
      },
      windowCenter: {
        type: Sequelize.STRING
      },
      windowWidth: {
        type: Sequelize.STRING
      },
      imageType: {
        type: Sequelize.STRING
      },
      imageOrientation: {
        type: Sequelize.STRING
      },
      imagePosition: {
        type: Sequelize.STRING
      },
      photometricInterpretation: {
        type: Sequelize.STRING
      },
      dicomFilePath: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dicomFileName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Headers');
  }
};
