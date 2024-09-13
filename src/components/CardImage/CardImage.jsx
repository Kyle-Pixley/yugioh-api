import React, { useState } from 'react';
import './CardImage.css';

function CardImage({ data }) {

    const [ imageClicked, setImageClicked ] = useState(0);

    function cardImage() {
        if(data && data.card_images) {
            return data.card_images[imageClicked].image_url
        } else null
    }

    function handleImageClick() {
        console.log("image has been clicked", imageClicked)
        console.log(data.card_images.length)
        if(imageClicked < data.card_images.length - 1) {
            setImageClicked(imageClicked + 1)
        } else {
            setImageClicked(0)
        }
    }

  return (
    <div>
        <p>Image</p>
        <img id='card-image' src={cardImage()} onClick={handleImageClick}/>
    </div>
  )
}

export default CardImage