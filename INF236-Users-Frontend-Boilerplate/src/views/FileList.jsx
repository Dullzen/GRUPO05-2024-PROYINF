import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Imagemanipulation from '../components/Imagemanipulation';

export default function FileList() {
  const [fileNames, setFileNames] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Cargar los nombres de los archivos DICOM desde el backend
  useEffect(() => {
    const fetchFileNames = async () => {
      try {
        const response = await axios.get('http://localhost:8080/dicom/headers');
        setFileNames(response.data);
      } catch (error) {
        console.error('Error al obtener los nombres de archivos DICOM:', error);
      }
    };

    fetchFileNames();
  }, []);

  const handleSelectFile = (file) => {
    console.log('Archivo seleccionado:', file); // Depuración
    setSelectedFile(file);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Imágenes DICOM</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {fileNames.map((file) => (
          <li
            key={file.id}
            style={{ padding: '10px 0', borderBottom: '1px solid #ccc', cursor: 'pointer' }}
            onClick={() => handleSelectFile(file)}
          >
            {file.dicomFileName || 'Nombre de archivo no disponible'} - Paciente: {file.patientName || 'N/A'} - Fecha: {file.studyDate || 'N/A'}
          </li>
        ))}
      </ul>

      {selectedFile && (
        <div>
          <h2>Visualizando: {selectedFile.dicomFileName}</h2>
          <Imagemanipulation imageUrl={`http://localhost:8080/uploads/${selectedFile.dicomFileName}`} />
        </div>
      )}
    </div>
  );
}
