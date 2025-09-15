// import multer from "multer";
// import path from "path";
// import fs from "fs";

// const uploadPath = path.join(process.cwd(), "uploads");

// // ensure uploads folder exists
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath);
// }

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// export default upload;
import multer from "multer";

const storage = multer.memoryStorage(); // store file in memory (buffer)

const upload = multer({ storage });

export default upload;
