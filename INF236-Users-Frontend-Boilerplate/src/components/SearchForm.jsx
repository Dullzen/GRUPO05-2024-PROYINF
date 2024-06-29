import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/dicom/search/${patientId}`);
      setPatientData(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching patient data:', err);
      setError('Patient not found');
      setPatientData(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Buscador de Archivos</h1>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Ingrese ID del paciente..."
          value={patientId}
          onChange={handleInputChange}
          style={{ margin: '0 10px', padding: '10px', width: '300px', fontSize: '16px' }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Buscar
        </button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {patientData && (
        <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
          <h2>Datos del Paciente</h2>
          <p><strong>Nombre:</strong> {patientData.patientId}</p>
          <p><strong>Fecha de Estudio:</strong> {patientData.studyDate}</p>
          <p><strong>Hora de Estudio:</strong> {patientData.studyTime}</p>
          <p><strong>Hora de Imagen:</strong> {patientData.imageTime}</p>
          <p><strong>Sexo del Paciente:</strong> {patientData.patientSex}</p>

         
          <p><strong>Filas:</strong> {patientData.rows}</p>
          <p><strong>Columnas:</strong> {patientData.columns}</p>
        </div>
      )}
    </div>
  );
}
