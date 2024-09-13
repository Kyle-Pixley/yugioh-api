import React from 'react';
import './CardImage.css';

function CardImage({ data }) {

    function cardImage() {
        if(data && data.card_images) {
            return data.card_images[0].image_url
        } else null

        // add clickable image that changes the image to next one in the array based on how long the array is 
    }



  return (
    <div>
        <p>Image</p>
        <img id='card-image' src={cardImage()} />
    </div>
  )
}

export default CardImage