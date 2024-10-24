// src/views/FileList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Imagemanipulation from '../components/Imagemanipulation'; // Importar el componente de manipulación de imágenes

export default function FileList() {
  const [fileNames, setFileNames] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); // Estado para almacenar el archivo seleccionado

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
    setSelectedFile(file);  // Almacena el archivo seleccionado
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Imágenes DICOM</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {fileNames.map((file) => (
          <li
            key={file.id}
            style={{ padding: '10px 0', borderBottom: '1px solid #ccc', cursor: 'pointer' }}
            onClick={() => handleSelectFile(file)} // Selecciona un archivo al hacer clic
          >
            {file.dicomFileName || 'Nombre de archivo no disponible'} - Paciente: {file.patientName} - Fecha: {file.studyDate}
          </li>
        ))}
      </ul>

      {/* Mostrar el componente de manipulación de imágenes cuando se seleccione un archivo */}
      {selectedFile && (
        <div>
          <h2>Visualizando: {selectedFile.dicomFileName}</h2>
          {/* Pasar la URL de la imagen seleccionada a ImageManipulation */}
          <Imagemanipulation imageUrl={`http://localhost:8080/dicom/file/${selectedFile.dicomFileName}`} />
        </div>
      )}
    </div>
  );
}
