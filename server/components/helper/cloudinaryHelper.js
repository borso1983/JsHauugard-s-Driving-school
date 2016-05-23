//cloudinaryHelper.js
var cloudinary = require('cloudinary');
var config = require('../../config/environment');

cloudinary.config({
  cloud_name: "miztah87",
  api_key: "661836958154821",
  api_secret: "q11f7f6X-yJ7qKYvaO4M__pvM1w"
});

export function upload(imgPath, callback){
  cloudinary.uploader.upload(imgPath, function(result) {
    if(result){
      callback(null, result);
    }
    else {
      callback('Error uploading to cloudinary');
    }
  });
}
