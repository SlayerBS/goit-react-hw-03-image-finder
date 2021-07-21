import React, { Component } from "react";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import { getImagesByQuery } from "./api/api";
import LoaderSpiner from "./components/Loader/Loader";
import Modal from "./components/Modal";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    showModal: false,
    isLoading: false,
    largeImageURL: "",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.getImages();
    }
  }

  onSubmit = (searchQuery) =>
    this.setState({ images: [], searchQuery: searchQuery, page: 1 });

  getImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    getImagesByQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.scrollDown();
        this.setState({ isLoading: false });
      });
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  render() {
    const { images, isLoading, showModal, largeImageURL, error } = this.state;
    const isLastPage = images.length % 12; //работает только в случае если не кратно 12(
    return (
      <>
        {error && <p>{error.message}</p>}
        <SearchBar onSubmit={this.onSubmit} />

        {images && (
          <div>
            <ImageGallery images={images} />
          </div>
        )}
        {isLoading && <LoaderSpiner />}
        {!isLastPage && images.length && <Button onClick={this.getImages} />}
        {showModal && (
          <Modal>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
