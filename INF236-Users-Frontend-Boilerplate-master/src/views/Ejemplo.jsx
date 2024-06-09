// Ejemplo.js
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Ejemplo() {
    // Obteniendo el parámetro de la URL que contiene el número del archivo DICOM
    const { number } = useParams();

    return (
        <div>
            Archivo DICOM {number}
        </div>
    );
}
