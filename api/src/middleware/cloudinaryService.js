const path = require('path');
 const cloudinary = require('cloudinary').v2;
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});
// subir un solo archivo
const handleUpload = async (fileBuffer) => {
  try {   
    return new Promise((resolve, reject) => {         
      cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {               
        if (error) {
          reject(new Error('Error al cargar la imagen a Cloudinary: ' + error.message));
        } else {
          resolve({
            public_id: result.public_id,
            url: result.secure_url 
          });
        }
      }).end(fileBuffer);
    });
  } catch (error) {
    throw new Error('Error al cargar la imagen a Cloudinary: ' + error.message);
  }
};

// const { url } = require('inspector');
// const path = require('path');
// // const cloudinary = require('cloudinary').v2;

// // const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

// // cloudinary.config({
// //   cloud_name: CLOUD_NAME,
// //   api_key: CLOUD_API_KEY,
// //   api_secret: CLOUD_API_SECRET,
// // });


// // subir un solo archivo
// const handleUpload = async (fileBuffer) => {
//   try {
//     console.log("cloudinary");
//     console.log("veo filebuffer", fileBuffer);
    
//     return new Promise((resolve, reject) => {
//       console.log("entro a la promesa")
//       cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
        
        
//         if (error) {
         
          
//           reject(new Error('Error al cargar la imagen a Cloudinary: ' + error.message));
//         } else {
         
//           resolve({
//             public_id: result.public_id,
//             url: result.secure_url 
//           });
//         }
//       }).end(fileBuffer);
            
//     });
//   } catch (error) {
//     throw new Error('Error al cargar la imagen a Cloudinary: ' + error.message);
//   }
// };


// const updateUpload = async (file) => {
//   await cloudinary.uploader.upload(file.path, {
//     public_id: image.public_id,
//     overwrite: true,
//   });
// };

const updateUpload = async (file, currentImageUrl) => {
    const publicId = currentImageUrl.split('/').pop().split('.')[0]; // Extrae el public_id de la URL actual

    const result = await cloudinary.uploader.upload(file.path, {
        public_id: publicId,
        overwrite: true,
    });

    return result;
};

const deleteImageFromCloudinary = async (id) => {
  try {
  
    const result = await cloudinary.uploader.destroy(id);

    if (result.result === 'ok') {
      
    } else {
     
    }
  } catch (error) {
    console.error('Error al eliminar la imagen de Cloudinary:', error.message);
  }
};

const getAllImagesFromCloudinary = async () => {
  try {
    const result = await cloudinary.search
      .expression('resource_type:image OR resource_type:raw')
      .execute();

    const resultAll = result.resources.map((resource) => {
      const isPdf = resource.format === 'pdf';
      return {
        asset_id: resource.asset_id,
        public_id: resource.public_id,
        url: resource.secure_url,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        created_at: resource.created_at,
        type: 'image'
      };
    });

    return resultAll;
  } catch (error) {
    console.error(
      'Error al obtener las imágenes de Cloudinary:',
      error.message
    );
    return [];
  }
};



module.exports = {
  getAllImagesFromCloudinary,
  deleteImageFromCloudinary,
  handleUpload,
  updateUpload,
  
};