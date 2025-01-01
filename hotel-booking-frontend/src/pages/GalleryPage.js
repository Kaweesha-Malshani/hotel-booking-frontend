import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery';

function GalleryPage() {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        axios.get('/api/galleryItems')
            .then(response => setGalleryItems(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Gallery</h1>
            <Gallery items={galleryItems} />
        </div>
    );
}

export default GalleryPage;
