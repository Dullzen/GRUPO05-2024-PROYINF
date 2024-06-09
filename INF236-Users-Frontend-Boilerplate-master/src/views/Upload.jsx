import React from 'react';

export default function upload() {
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Buzón para Subir Archivos</h1>
            <div style={{margin: '20px auto', padding: '20px', border: '2px dashed #ccc', borderRadius: '5px', width: '300px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input type="file" style={{display: 'none'}} />
                <label htmlFor="fileInput" style={{cursor: 'pointer', fontSize: '16px'}}>Haga clic aquí o arrastre y suelte archivos para subirlos</label>
            </div>
            <button style={{margin: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px'}}>
                Subir
            </button>
        </div>
    );
}
