import Song from "../models/song.js";
import Album from "../models/album.js";
import UploadCloudinary from "../../utils/UploadCloudinary.js";


const CreateSong  = async(req, res,next) => {
    try{
        if(!req.files || !req.files.audioFile){
            return res.status(400).json({success:false, message:"Files is required."})
        }

        const { title,artist,albumId,duration} = req.body
        
        const audioFile = req.files.audioFile
        const imageFile = req.files.imageFile

        const audiourl = await UploadCloudinary(audioFile)
        const imageurl = await UploadCloudinary(imageFile)

        const song = new Song({
            title,
            artist,
            albumId : albumId || null,            
            AudioUrl:audiourl,
            imageurl:imageurl,
            duration
        })

        await song.save()

        if(albumId){
            await Album.findByIdAndUpdate(albumId,{$push:{songs:song._id}})

        }

        res.status(201).json(song)

    }catch(error){
      next(error)
    }
}


const DeleteSong = async (req, res,next) => {
    try {
      const { id } = req.params;
    
        const song = await Song.findByIdAndDelete(id);
    
        if (!song) {
            return res.status(404).json({ success: false, message: 'Song not found' });
        }
    
        res.status(200).json({ success: true, message: 'Song deleted successfully' });
        
    } catch (error) {
        console.error(error);
       next(error)
    }
  };

  const CreateAlbum = async(req,res,next) =>{
    try{
        const { title,relaseYear,artistageurl} = req.body
        const imageFile = req.files
        const imageurl = await UploadCloudinary(imageFile)

        const album = new Album({
            title,
            relaseYear,
            artistageurl,
            Imageurl:imageurl   
        })

        await album.save()

        res.status(201).json(album)

    }catch(error){
        next(error)
    }


  }

  const DeleteAlbum = async (req, res,next) => {
    try {
      const { id } = req.params;
    
        const album = await Album.findByIdAndDelete(id);

        await Song.deleteMany({albumId:id})
    
        if (!album) {
            return res.status(404).json({ success: false, message: 'Album not found' });
        }
    
        res.status(200).json({ success: true, message: 'Album deleted successfully' });
        
    } catch (error) {
        console.error(error);
       next(error)
    }
  };


const CheckAdmin = async(req, res,next) =>{
    try{    

        


    }catch(error){
        next(error)
    }
}

export { CreateSong,DeleteSong,CreateAlbum,DeleteAlbum,CheckAdmin} 