import './gallery.css'
import React, { useState } from 'react'


//imports photos in forEach loop to images array
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images)
    return images
}

const images = importAll(require.context('./photos', false, /\.jpg/));


const Gallery = () => {

    //array with photos used
    let photos = [
        { id: 1, src: images['AWolska (1).jpg'] },
        { id: 2, src: images['AWolska (2).jpg'] },
        { id: 3, src: images['AWolska (3).jpg'] },
        { id: 4, src: images['AWolska (4).jpg'] },
        { id: 5, src: images['AWolska (5).jpg'] },
        { id: 6, src: images['AWolska (6).jpg'] },
        { id: 7, src: images['AWolska (7).jpg'] },
        { id: 8, src: images['AWolska (8).jpg'] },
        { id: 9, src: images['AWolska (9).jpg'] },
        { id: 10, src: images['AWolska (10).jpg'] },
        { id: 11, src: images['AWolska (11).jpg'] },
        { id: 12, src: images['AWolska (12).jpg'] },
        { id: 13, src: images['AWolska (13).jpg'] },
        { id: 14, src: images['AWolska (14).jpg'] },
        { id: 15, src: images['AWolska (15).jpg'] },
        { id: 16, src: images['AWolska (16).jpg'] },
        { id: 17, src: images['AWolska (17).jpg'] },
        { id: 18, src: images['AWolska (18).jpg'] },
        { id: 19, src: images['AWolska (19).jpg'] },
        { id: 20, src: images['AWolska (20).jpg'] },
        { id: 21, src: images['AWolska (21).jpg'] },
        { id: 22, src: images['AWolska (22).jpg'] },
        { id: 23, src: images['AWolska (23).jpg'] },
        { id: 24, src: images['AWolska (24).jpg'] },
        { id: 25, src: images['AWolska (25).jpg'] },
        { id: 26, src: images['AWolska (26).jpg'] },
        { id: 27, src: images['AWolska (27).jpg'] },
        { id: 28, src: images['AWolska (28).jpg'] },
        { id: 29, src: images['AWolska (29).jpg'] },
        { id: 30, src: images['AWolska (30).jpg'] },
        { id: 31, src: images['AWolska (31).jpg'] },
        { id: 32, src: images['AWolska (32).jpg'] },
        { id: 33, src: images['AWolska (33).jpg'] },
        { id: 34, src: images['AWolska (34).jpg'] },
        { id: 35, src: images['AWolska (35).jpg'] },
        { id: 36, src: images['AWolska (36).jpg'] },
        { id: 37, src: images['AWolska (37).jpg'] },
        { id: 38, src: images['AWolska (38).jpg'] },
        { id: 39, src: images['AWolska (39).jpg'] },
        { id: 40, src: images['AWolska (40).jpg'] },
        { id: 41, src: images['AWolska (41).jpg'] },
        { id: 42, src: images['AWolska (42).jpg'] },
        { id: 43, src: images['AWolska (43).jpg'] },
        { id: 44, src: images['AWolska (44).jpg'] }
        // { id: 45, src: images['AW (45).jpg']},
        // { id: 46, src: images['AW (46).jpg']},
        // { id: 47, src: images['AW (47).jpg']},
        // { id: 48, src: images['AW (48).jpg']},
        // { id: 49, src: images['AW (49).jpg']},  
        // { id: 50, src: images['AW (50).jpg']},
        // { id: 51, src: images['AW (51).jpg']},
        // { id: 52, src: images['AW (52).jpg']},
        // { id: 53, src: images['AW (53).jpg']},
        // { id: 54, src: images['AW (54).jpg']},
        // { id: 55, src: images['AW (55).jpg']},
        // { id: 56, src: images['AW (56).jpg']},
        // { id: 57, src: images['AW (57).jpg']},
        // { id: 58, src: images['AW (58).jpg']},
        // { id: 59, src: images['AW (59).jpg']},
        // { id: 60, src: images['AW (60).jpg']},
        // { id: 61, src: images['AW (61).jpg']},
        // { id: 62, src: images['AW (62).jpg']},
        // { id: 63, src: images['AW (63).jpg']},
        // { id: 64, src: images['AW (64).jpg']},
        // { id: 65, src: images['AW (65).jpg']},
        // { id: 66, src: images['AW (66).jpg']},
        // { id: 67, src: images['AW (67).jpg']},
        // { id: 68, src: images['AW (68).jpg']},
        // { id: 69, src: images['AW (69).jpg']},  
        // { id: 70, src: images['AW (70).jpg']},
        // { id: 71, src: images['AW (71).jpg']},
        // { id: 72, src: images['AW (72).jpg']},
        // { id: 73, src: images['AW (73).jpg']},
        // { id: 74, src: images['AW (74).jpg']},
        // { id: 75, src: images['AW (75).jpg']},
        // { id: 76, src: images['AW (76).jpg']},
        // { id: 77, src: images['AW (77).jpg']},
        // { id: 78, src: images['AW (78).jpg']},
        // { id: 79, src: images['AW (79).jpg']},
        // { id: 80, src: images['AW (80).jpg']},
        // { id: 81, src: images['AW (81).jpg']},
        // { id: 82, src: images['AW (82).jpg']}                
    ]

    const [shouldShow, setShouldShow] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState('')


    const showPhoto = (photoSource) => {
        setChosenPhoto(photoSource)
        setShouldShow(true)
    }

    return (
        <React.Fragment>

            <div onClick={() => setShouldShow(false)} className={shouldShow ? "main-photo open" : "main-photo"}>
                <img src={chosenPhoto} onClick={() => setShouldShow(false)} />
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg>
            </div>

            <div className="gallery-grid">
                {
                    photos.map((photo, id) => {
                        return (
                            <div className="photo-item-container">
                                <div className="photo-item" key={id} onClick={() => showPhoto(photo.src)}>
                                    <img src={photo.src} style={{ width: '100%' }} />
                                </div>
                            </div>



                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Gallery