import React, { useState } from 'react';
import FlipBookViewer from './components/FlipBookViewer';
import './index.css';

function App() {
  // Ścieżka bezpośrednia do pliku PDF umieszczonego w folderze public
  const pdfFile = './components/sample.pdf';

  return (
      <div className="app-container">
          <h1>PDF FlipBook</h1>
          <FlipBookViewer pdfFile={pdfFile} />
      </div>
  );
}

export default App;