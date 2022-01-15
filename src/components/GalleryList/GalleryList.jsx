import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ gallery, fetchGallery }) {
    return (
        <>
            <div>
                {gallery.map(galleryItem => (
                    <GalleryItem key={galleryItem.id}  galleryItem={galleryItem}
                    fetchGallery={fetchGallery}
                    />))}
            </div>

        </>



    )
}

export default GalleryList