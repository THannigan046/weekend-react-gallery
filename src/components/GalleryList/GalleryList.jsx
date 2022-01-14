
function GalleryList({gallery}){
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ahhh</th>
                        <th>what's happening</th>
                        <th>eeeep</th>
                    </tr>
                </thead>
                <tbody>
                    {gallery.map(galleryItem => (
                        <tr key={galleryItem.id}>
                            <td>{galleryItem.path}</td>
                            <td>{galleryItem.description}</td>
                            <td>{galleryItem.likes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}

export default GalleryList