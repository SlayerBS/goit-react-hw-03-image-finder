import styles from "./Modal.module.css";
const Modal = ({ largeImageURL }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
export default Modal;
