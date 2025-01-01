import React from 'react';

function Gallery({ items }) {
    return (
        <div>
            {items.map(item => (
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Gallery;