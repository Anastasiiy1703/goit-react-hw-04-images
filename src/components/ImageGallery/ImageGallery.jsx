import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ImageGalleryCss from './ImageGalleryCss.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={ImageGalleryCss.imageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;