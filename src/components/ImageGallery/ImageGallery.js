import ImageGalleryItem from '../ImageGalleryItem'

import styles from './ImageGallery.module.css'

const ImageGallery = ({images}) =>
{
           return (
            <ul className={styles.ImageGallery}>
  
                {images.map((image) => (<ImageGalleryItem key={image.id} imageSrc={image.webformatURL} />))
               
                }
            </ul>
        )
   
    }
export default ImageGallery;