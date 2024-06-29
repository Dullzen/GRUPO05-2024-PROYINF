import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PatientList() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    const fetchFileNames = async () => {
      try {
        const response = await axios.get('http://localhost:8080/dicom/headers');
        setFileNames(response.data);
      } catch (error) {
        console.error('Error fetching file names:', error);
      }
    };

    fetchFileNames();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Imágenes DICOM</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {fileNames.map((file) => (
          <li key={file.id} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            {file.dicomFileName || 'Nombre de archivo no disponible'} - Paciente: {file.patientName} - Fecha: {file.studyDate}
          </li>
        ))}
      </ul>
    </div>
  );
}