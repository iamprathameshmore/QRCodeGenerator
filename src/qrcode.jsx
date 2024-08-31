// src/QRCodeGenerator.jsx
import React, { useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generateQRCode = async () => {
    if (!inputText) {
      setError('Please enter text to generate QR code.');
      return;
    }

    setError('');
    
    try {
      const url = await QRCode.toDataURL(inputText);
      setQrCodeUrl(url);
    } catch (err) {
      setError('Error generating QR code.');
    }
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className="flex flex-col items-center mt-10">
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {qrCodeUrl && (
        <div className="mt-4">
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
        className="border border-gray-300 rounded-md p-2 mb-4 w-80"
      />
      <button
        onClick={generateQRCode}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Generate QR Code
      </button>
      
    </div>
    </div>
  );
};

export default QRCodeGenerator;
