import "./gallery.css";
import React, { useState } from "react";

//imports photos in forEach loop to images array
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
}

const images = importAll(require.context("./photos", false, /\.jpg/));

const Gallery = () => {

    let photos = [];
    for (let i = 1; i < 163; i++) {
        photos.push({id: i, src: images[`ola (${i}).jpg`]})
    }


    const [shouldShow, setShouldShow] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState("");

    const showPhoto = (photoSource) => {
        setChosenPhoto(photoSource);
        setShouldShow(true);
    };

    return (
        <div className="gallery-container">
            <div
                onClick={() => setShouldShow(false)}
                className={shouldShow ? "main-photo open" : "main-photo"}
            >
                <img
                    src={chosenPhoto}
                    alt="photography"
                    onClick={() => setShouldShow(false)}
                />
                <svg fill="#ffffff" viewBox="0 0 50 50" width="50px" height="50px">
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                </svg>
            </div>

            <div className="gallery-grid">
                {photos.map((photo, id) => {
                    return (
                        <div key={id} className="photo-item-container">
                            <div
                                className="photo-item"
                                key={id}
                                onClick={() => showPhoto(photo.src)}
                            >
                                <img
                                    src={photo.src}
                                    style={{ width: "100%" }}
                                    alt="photography"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
