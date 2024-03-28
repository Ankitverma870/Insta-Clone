// // import React from 'react'
// 'use client';
// import { UploadButton, UploadDropzone } from "@/app/utils/uploadthing";
// import { useState } from "react";
// import Image from 'next/image';

// const ImageUpload = () => {
//   const [imageUrl, setImageUrl] = useState<string>('')
//   return (
//     <div>
//       < UploadDropzone endpoint='imageUploader'
//        onClientUploadComplete={(res) => {
//         console.log("Files: ", res);
//         setImageUrl(res[0].url);
//       }}
//       onUploadError={(error: Error) => {
//         alert(`ERROR! ${error.message}`);
//       }}
//     />
//     {imageUrl.length ? (
//       <div style={{ textAlign: 'center' }}>
//         <Image src = {imageUrl} alt='my image' width={500} height={200}/>

//       </div>
//       ) :null}
//     </div>
//   );
// };

// export default ImageUpload;
// import React from 'react'
'use client';
import { UploadButton, UploadDropzone } from "@/app/utils/uploadthing";
import { useState } from "react";
import Image from 'next/image';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      {imageUrl ? (
        <div style={{ textAlign: 'center' }}>
          <Image src={imageUrl} alt='my image' width={500} height={200} />
        </div>
      ) : (
        <div>
          <UploadDropzone
            endpoint='imageUploader'
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              setImageUrl(res[0].url);
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
           <label htmlFor="upload-button" style={{ cursor: 'pointer' }}>
            <input id="upload-button" type="file" style={{ display: 'none' }} />
            <span style={{ backgroundColor: '#405de6', color: '#ffffff', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold' }}>Upload Image</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
