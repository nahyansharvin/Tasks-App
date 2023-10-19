const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dm4ofrie7',
    api_key: '642453816624566',
    api_secret: 'pOzy1ApdbCFG-3jT9y6MGDdAGyI'
});

async function uploadImage(image) {
    const result = await cloudinary.uploader.upload(image, {
        folder: "tasks",
    });
    return {imageUrl:result.url, public_id:result.public_id}
};

async function deleteImage(public_id) {
    const res = await cloudinary.uploader.destroy(public_id);
    console.log(res);
};

module.exports = { uploadImage, deleteImage };