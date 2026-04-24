import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { jsPDF } from 'jspdf';
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [quantity, setQuantity] = useState(9);

  
  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  
  const generatePDF = async () => {
    if (!image || !croppedAreaPixels) return;

    const img = new Image();
    img.src = image;
    await new Promise((resolve) => (img.onload = resolve));

    const canvas = document.createElement('canvas');
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      img,
      croppedAreaPixels.x, croppedAreaPixels.y,
      croppedAreaPixels.width, croppedAreaPixels.height,
      0, 0,
      croppedAreaPixels.width, croppedAreaPixels.height
    );

    const croppedImageBase64 = canvas.toDataURL('image/jpeg', 1.0);

    
    const doc = new jsPDF('p', 'mm', [105, 148]);
    
    const imgW = 30;    
    const imgH = 40;    
    const spacing = 2;  
    const marginX = (105 - 94) / 2; 
    const marginY = (148 - 124) / 2; 
    
    let x = marginX;
    let y = marginY;

    for (let i = 0; i < quantity; i++) {
      doc.addImage(croppedImageBase64, 'JPEG', x, y, imgW, imgH);
      
      
      if ((i + 1) % 3 === 0) {
        x = marginX;             
        y += imgH + spacing;     
      } else {
        x += imgW + spacing;     
      }

      
      if ((i + 1) % 9 === 0 && i < quantity - 1) {
        doc.addPage([105, 148], 'p');
        x = marginX;
        y = marginY;
      }
    }

    doc.save('fotos_3x4_organizadas.pdf');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Impressora 3x4 Profissional</h1>
        <p>Ajuste sua foto e gere o arquivo para papel 10x15cm</p>
      </header>

      <main className="controls-card">
        <div className="input-group">
          <label>1. Carregar Foto:</label>
          <input type="file" accept="image/*" onChange={onFileChange} className="input-field" />
        </div>

        <div className="input-group">
          <label>2. Quantidade:</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)} 
            className="input-field"
          />
        </div>

        <button onClick={generatePDF} disabled={!image} className="btn-print">
          Gerar PDF para Impressão
        </button>
      </main>

      {image && (
        <section className="editor-section">
          <div className="cropper-container">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={3 / 4}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="zoom-controls">
            <label>Ajustar Zoom:</label>
            <br />
            <input 
              type="range" 
              className="zoom-slider"
              min={1} max={3} step={0.1} 
              value={zoom} 
              onChange={(e) => setZoom(e.target.value)} 
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default App;