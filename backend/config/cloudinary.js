// // import { v2 as cloudinary } from 'cloudinary';
// // import fs from "fs"

// // const uploadOnCloudinary = async (filepath) => {
// //     cloudinary.config({ 
// //         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
// //         api_key: process.env.CLOUDINARY_API_KEY, 
// //         api_secret: process.env.CLOUDINARY_API_SECRET
// //     });
// //     try {
// //         if(!filepath){
// //             return null}
// //         const uploadResult = await cloudinary.uploader
// //         .upload(filepath)
// //         fs.unlinkSync(filepath)
// //         return uploadResult.secure_url


        
// //     } catch (error) {
// //         fs.unlinkSync(filepath)
// //         console.log(error)
// //     }
// // }

// // export default uploadOnCloudinary
// // config/cloudinary.js
// // backend/config/cloudinary.js
// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// import dotenv from "dotenv";

// dotenv.config(); // loads .env variables

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (filePath) => {
//   try {
//     const result = await cloudinary.uploader.upload(filePath, {
//       resource_type: "auto",
//     });

//     // delete local file after upload
//     fs.unlink(filePath, (err) => {
//       if (err) console.error("Error deleting file:", err);
//     });

//     return result;
//   } catch (error) {
//     console.error("Cloudinary upload error:", error);
//     throw error;
//   }
// };

// export default uploadOnCloudinary;
 import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary env check:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "✅ Loaded" : "❌ Missing",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "✅ Loaded" : "❌ Missing",
});

// uploader function
const uploadOnCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const cldUploadStream = cloudinary.uploader.upload_stream(
      { folder: "airbnb" },
      (error, result) => {
        if (result) {
          resolve(result.secure_url);
        } else {
          reject(error);
        }
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(cldUploadStream);
  });
};

export default uploadOnCloudinary;
