import Songs from "../models/song.js";
import Album from "../models/album.js";
import User from "../models/user.model.js";



const GetStatistics = async (req, res) => {
    try {
    
        const [totalSongs, totalAlbums, totalUsers, totalArtists] = await Promise.all([
            Songs.countDocuments(),
            Album.countDocuments(),
            User.countDocuments(),

            Album.agregate([
                {
                    $unionWith: {
                        coll : 'albums',
                        pepiline: [
                            
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$artist',
                    }
                },
                {
                    $count: 'count'
                }
            ])
        ]);
        
        res.status(200).json({ totalSongs, totalAlbums, totalUsers, totalArtists : totalArtists.length || 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { GetStatistics}