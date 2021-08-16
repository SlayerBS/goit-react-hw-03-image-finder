import React, { Component } from "react";
import { connect } from "react-redux";
import { getGalleryItems } from "./redux/operations";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import { getImagesByQuery } from "./api/api";
import { galleryItems } from "./redux/selectors";
import LoaderSpiner from "./components/Loader";
import Modal from "./components/Modal";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.css";

class App extends Component {
  state = {
    // images: [],
    searchQuery: "",
    page: 1,
    showModal: false,
    isLoading: true,
    largeImageURL: "",
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      console.log(
        prevState.searchQuery,
        this.state.searchQuery,
        prevState.page,
        this.state.page
      );

      this.props.getGalleryItems(this.state.searchQuery, this.state.page);
      console.log(prevProps.images.length, this.props.images.length);
    }
  }

  onSubmit = (searchQuery) =>
    this.setState({
      images: [],
      searchQuery: searchQuery,
      page: 1,
      error: null,
      showButton: false,
    });

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  modalImage = (largeImageURL) => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };

  render() {
    const { isLoading, showModal, largeImageURL, error, showButton } =
      this.state;
    const { images } = this.props;
    return (
      <div className={styles.App}>
        <ToastContainer autoClose={3000} position="top-left" />
        <SearchBar onSubmit={this.onSubmit} />
        {error && <p className={styles.Error}>{error}</p>}
        {images && (
          <div>
            <ImageGallery images={images} modalImage={this.modalImage} />
          </div>
        )}
        {isLoading && <LoaderSpiner />}
        {showButton && !isLoading && <Button onClick={this.getImages} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    images: galleryItems(store),
  };
};
const mapDispatchToProps = { getGalleryItems };

export default connect(mapStateToProps, mapDispatchToProps)(App);
