import React, { useState } from 'react';
import PdfViewerComponent from './components/PdfViewerComponent';
import './App.css'
function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Read the selected file as an ArrayBuffer
      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedFile(event.target.result); // Store the ArrayBuffer in state
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="App">
      <div className="PDF-viewer">
        {selectedFile ? (
          <PdfViewerComponent document={selectedFile} />
        ) : (
          <div className='outer'>
            <div draggable={true} for="myfile" className="file-card"
              style={{ background: "blue" }} >
              <label htmlFor="browseFile" style={{ cursor: "pointer" }}>
                <div className="border-card">
                  <div className="file-icn-card">
                    <img src="https://www.files-editor.com/static/media/FileUplodeIcon.09f05167c1422271cde86697a3ac813e.svg" alt="" />
                  </div>
                  <p className="text-drag-drop">Drang and Drop file</p>
                  <span className="text-or">
                    ---------- OR ----------
                  </span>
                  <div className="upload-btn">
                    <input type="file" id="browseFile" name="browseFile" style={{ display: "none" }} onChange={(e) => handleFileChange(e)} />
                    <span>Upload your PDF</span>
                  </div>
                </div>
              </label>
            </div>   </div>
        )}
      </div>

    </div>
  );
}

export default App;
