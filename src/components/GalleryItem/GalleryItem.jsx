import axios from 'axios'
import {useState} from 'react'
function GalleryItem({galleryItem, fetchGallery} ){
const [showDescription, setShowDescription] = useState(false)

const getDescription = () => {
setShowDescription(true)

}

const addLike = () => {
    axios.put('/gallery/like/' + galleryItem.id).then((response => {
        console.log('put success', response.data);
        fetchGallery();
    })).catch((err) => {
        console.log('put failed', err);
    })
}
return (
    <div>
        
            <div>
                {!showDescription && <img src={galleryItem.path} onClick={getDescription} />}
            {showDescription && <h2>{galleryItem.description}</h2>}
                
                <button onClick={addLike}>like</button>
                <h4>{galleryItem.likes}</h4>
            </div>
    </div>
)

}

export default GalleryItem;