import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// importing images


const images = [
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/v1746707042/bandarban2_p1x9bv.webp", 
      alt: 'Image 2' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/t_800_800/v1742756915/samples/landscapes/nature-mountains.jpg", alt: 'Image 3' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/t_800_800/v1742756915/samples/landscapes/beach-boat.jpg",
       alt: 'Image 4' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/t_800_800/v1742756914/samples/landscapes/girl-urban-view.jpg", alt: 'Image 5' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/v1746707334/jwhtbtcfnt1zwkqelfks.jpg", alt: 'Image 6' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/t_800_800/v1746707029/bandarban1_gpjn8c.webp", alt: 'Image 7' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/t_800_800/v1746705947/cox_ay1pgg.jpg", alt: 'Image 8' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/t_800_800/v1746706456/sundarban_knmjo8.webp", alt: 'Image 9' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/t_800_800/v1746706443/srimangal_dncjsm.webp", alt: 'Image 6' },
    { src: "https://res.cloudinary.com/dto6ulc5n/image/upload/v1746707334/jwhtbtcfnt1zwkqelfks.jpg", alt: 'Image 4' },
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
