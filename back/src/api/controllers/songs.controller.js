import Song from "../models/song.js";

const GetAllSongs = async (req, res,next) => {
    try {
        const songs = await Song.find().sort({createdAt:-1});

        res.status(200).json(songs);
    } catch (error) {
        next(error)
    }

}

const GetRandomFeaturedSongs = async (req, res,next) => {    
    try {
        const songs = await Song.aggregate([
            {$sample:{size:6}},
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    duration: 1,
                    AudioUrl: 1,
                    imageurl: 1,
                },
            }
        ]);

        res.status(200).json(songs);
        
    } catch (error) {
        next(error)
    }
}

// const GetMadeForYouSongs = async (req, res,next) => {    
//     try {    
//         const songs = await Song.aggrete([
//             {$sample:{size:6}},
//             {
//                 $project: {
//                     _id: 1,
//                     title: 1,
//                     artist: 1,
//                     duration: 1,
//                     AudioUrl: 1,
//                     imageurl: 1,
//                 },
//             }
//         ]);

//         res.status(200).json(songs);
//     } catch (error) {
//         next(error)
//     }
// }

// const  getTrendingSongs = async (req, res,next) => {    
//     try {    
//         const songs = await Song.aggrete([
//             {$sample:{size:6}},
//             {
//                 $project: {
//                     _id: 1,
//                     title: 1,
//                     artist: 1,
//                     duration: 1,
//                     AudioUrl: 1,
//                     imageurl: 1,
//                 },
//             }
//         ]);

//         res.status(200).json(songs);
//     } catch (error) {
//         next(error)
//     }
// }





export { GetAllSongs,GetRandomFeaturedSongs}