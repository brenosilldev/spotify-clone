import Cloudinary from "cloudinary";


const UploadCloudinary = async(file) =>{

    try{
        const result = await Cloudinary.uploader.upload(
            file.tempFilePath,{
                resource_type:'auto'
            }
        );

        return result.secure_url


    }catch(error){
        console.log(error)
        throw new Error('Error uploading file')
    }
}

export default UploadCloudinary