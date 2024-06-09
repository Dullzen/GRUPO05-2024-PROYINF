// Search.js
import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div>
      <h1>Buscador de Archivos</h1>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Ingrese su búsqueda..."
          style={{
            margin: "0 10px",
            padding: "10px",
            width: "300px",
            fontSize: "16px",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Buscar
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {numbers.map((number) => (
          <Link key={number} to={`/archivoDicom/${number}`}>
            <div
              style={{
                margin: "10px",
                width: "150px",
                height: "150px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Archivo DICOM {number}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
