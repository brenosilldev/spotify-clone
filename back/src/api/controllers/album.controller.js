import Album from "../models/album.js";

const GetAllAlbums = async (req, res,next) => {
    try {
        const albums = await Album.find();
        res.status(200).json(albums);
    } catch (error) {
        console.error(error);
        next(error)
    }
};  

const GetAlbumId = async (req, res,next) => {
    try {
        const { albumId } = req.params;
        const album = await Album.findById(albumId).populate("songs");
        if(!album) {
            return res.status(404).json({message:'Album not found'})
        }
        res.status(200).json(album);
    } catch (error) {
        console.error(error);
        next(error)
    }
};  


export { GetAllAlbums,GetAlbumId}