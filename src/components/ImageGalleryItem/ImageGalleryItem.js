import { v4 as uuidv4 } from "uuid";
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({key, imageSrc}) => {
    return (
        <li className={styles.ImageGalleryItem} key={key}>
            <img src={imageSrc} alt="" className={styles["ImageGalleryItem-image"]} />
</li>
    )
    
}
export default ImageGalleryItem;