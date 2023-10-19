const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

async function uploadImage(image) {
    const result = await cloudinary.uploader.upload(image, {
        folder: "tasks",
    });
    return {imageUrl:result.url, public_id:result.public_id}
};

async function deleteImage(public_id) {
    const res = await cloudinary.uploader.destroy(public_id);
};

module.exports = { uploadImage, deleteImage };