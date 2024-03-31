'use client';
import { UploadButton, UploadDropzone } from "@/app/utils/uploadthing";
import { useState } from "react";
import Image from 'next/image';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>('')
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh',border:'solid black 5px'}}>
      <  UploadButton endpoint='imageUploader'
       onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        setImageUrl(res[0].url);
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
    {imageUrl.length ? (
      <div style={{ textAlign: 'center' }}>
        <Image src = {imageUrl} alt='my image' width={500} height={100}/>

      </div>
      ) :null}
    </div>
  );
};

export default ImageUpload;
import React from 'react'
