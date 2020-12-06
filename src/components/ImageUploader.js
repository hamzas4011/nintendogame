import axios from 'axios';
import { useState } from 'react';

const ImageUploader = () => {

  const [ imageFile, setImageFile ] = useState({});

  const handleChange = (e) => {
    setImageFile( e.target.files[0] );
  }

  const uploadImage = () => {
    let data = new FormData();
    data.append( "file", imageFile );

    alert( imageFile);

    axios({
      method: "post",
      url: "https://localhost:5001/ImageUpload/UploadImage",
      data: data,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    });
  }

  return (
    <div>
      <h3>Last opp bilde</h3>
      <label>Bilde</label>
      <input onChange={ handleChange } type="file"></input>
      <input onClick={ uploadImage } type="button" value="Last opp bilde"></input>
    </div>
  );
}

export default ImageUploader;
