import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [sheetMusicPath, setSheetMusicPath] = useState(null);

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('mp4File', file);
    try {
      const res = await axios.post('/api/mp4/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSheetMusicPath(res.data.sheetMusicPath);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
      {sheetMusicPath && (
        <div>
          <h2>Sheet Music</h2>
          <img src={sheetMusicPath} alt="Sheet Music" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
