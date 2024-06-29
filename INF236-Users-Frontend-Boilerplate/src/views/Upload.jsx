import React from 'react';
import UploadForm from '../components/UploadForm';

export default function Upload() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Buzón para Subir Archivos</h1>
      <div style={{
        margin: '20px auto',
        padding: '20px',
        border: '2px dashed #ccc',
        borderRadius: '5px',
        width: '300px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <UploadForm />
      </div>
    </div>
  );
}
