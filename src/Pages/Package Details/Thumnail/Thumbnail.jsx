import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// importing images
import th2 from "../../../assets/Thumbnail/th2.webp"
import th3 from "../../../assets/Thumbnail/th3.webp"
import th4 from "../../../assets/Thumbnail/th4.webp"
import th5 from "../../../assets/Thumbnail/th5.webp"
import th6 from "../../../assets/Thumbnail/th6.webp"
import th7 from "../../../assets/Thumbnail/th7.webp"
import th8 from "../../../assets/Thumbnail/th8.webp"
import th9 from "../../../assets/Thumbnail/th9.webp"

const images = [
    { src: th2, alt: 'Image 2' },
    { src: th3, alt: 'Image 3' },
    { src: th4, alt: 'Image 4' },
    { src: th5, alt: 'Image 5' },
    { src: th6, alt: 'Image 6' },
    { src: th7, alt: 'Image 7' },
    { src: th8, alt: 'Image 8' },
    { src: th9, alt: 'Image 9' },
    { src: th6, alt: 'Image 6' },
    { src: img1, alt: 'Image 4' },
  ];

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import img1 from "../../../assets/Banner/banner2.jpg"

export const Thumbnail = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <div className='container bg-gray-200 mx-auto'>
        <LightGallery
         onInit={onInit}
         speed={500}
         plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-2  lg:grid-cols-5 lg:grid-rows-2 "
        >
            {images.map((image, index) => (
      <a key={index} href={image.src} data-src={image.src} className="col-span-1">
        <img
        loading='lazy'
          src={image.src}
          alt={image.alt}
          className="h-48 md:h-80 w-full object-cover"
        />
      </a>
    ))}

        </LightGallery>
    </div>
  )
}
