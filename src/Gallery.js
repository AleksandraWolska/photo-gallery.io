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
    let photos = [
        { id: 1, src: images["AWolska (1).jpg"] },
        { id: 2, src: images["AWolska (2).jpg"] },
        { id: 3, src: images["AWolska (3).jpg"] },
        { id: 4, src: images["AWolska (4).jpg"] },
        { id: 5, src: images["AWolska (5).jpg"] },
        { id: 6, src: images["AWolska (6).jpg"] },
        { id: 7, src: images["AWolska (7).jpg"] },
        { id: 8, src: images["AWolska (8).jpg"] },
        { id: 9, src: images["AWolska (9).jpg"] },
        { id: 10, src: images["AWolska (10).jpg"] },
        { id: 11, src: images["AWolska (11).jpg"] },
        { id: 12, src: images["AWolska (12).jpg"] },
        { id: 13, src: images["AWolska (13).jpg"] },
        { id: 14, src: images["AWolska (14).jpg"] },
        { id: 15, src: images["AWolska (15).jpg"] },
        { id: 16, src: images["AWolska (16).jpg"] },
        { id: 17, src: images["AWolska (17).jpg"] },
        { id: 18, src: images["AWolska (18).jpg"] },
        { id: 19, src: images["AWolska (19).jpg"] },
        { id: 20, src: images["AWolska (20).jpg"] },
        { id: 21, src: images["AWolska (21).jpg"] },
        { id: 22, src: images["AWolska (22).jpg"] },
        { id: 23, src: images["AWolska (23).jpg"] },
        { id: 24, src: images["AWolska (24).jpg"] },
        { id: 25, src: images["AWolska (25).jpg"] },
        { id: 26, src: images["AWolska (26).jpg"] },
        { id: 27, src: images["AWolska (27).jpg"] },
        { id: 28, src: images["AWolska (28).jpg"] },
        { id: 29, src: images["AWolska (29).jpg"] },
        { id: 30, src: images["AWolska (30).jpg"] },
        { id: 31, src: images["AWolska (31).jpg"] },
        { id: 32, src: images["AWolska (32).jpg"] },
        { id: 33, src: images["AWolska (33).jpg"] },
        { id: 34, src: images["AWolska (34).jpg"] },
        { id: 35, src: images["AWolska (35).jpg"] },
        { id: 36, src: images["AWolska (36).jpg"] },
        { id: 37, src: images["AWolska (37).jpg"] },
        { id: 38, src: images["AWolska (38).jpg"] },
        { id: 39, src: images["AWolska (39).jpg"] },
        { id: 40, src: images["AWolska (40).jpg"] },
        { id: 41, src: images["AWolska (41).jpg"] },
        { id: 42, src: images["AWolska (42).jpg"] },
        { id: 43, src: images["AWolska (43).jpg"] },
        { id: 44, src: images["AWolska (44).jpg"] },
    ];

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
