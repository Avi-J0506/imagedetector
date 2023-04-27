import React from "react";
import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <main>
      <form
        action=""
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ?
        <img src={image} width={150} height={150} alt={fileName} />
        :
        <>
          <MdCloudUpload color="#1475cf" size={60} />
          <h3>Browse Files to upload</h3>
        </>
      }
      </form>

      <section className="uploaded-row">
        <AiFillFileImage color='#1475cf'/>
        <span className="upload-content">
          {fileName}
          <MdDelete
          className="delete"
          onClick={()=>{
            setFileName("No file selected")
            setImage(null)
          }}
          />
        </span>
      </section>
    </main>
  );
};

export default ImageUpload;
