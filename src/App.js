import React, {Component} from 'react';
import SearchBar from './components/Searchbar';
import axios from 'axios';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    showModal: false,
    isLoading: false,
    largeImageURL:''
  }

   componentDidUpdate(prevProps, prevState) {
     const prevQuery = prevState.searchQuery;
     const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.getImages();
    }
  }

  onSubmit=(searchQuery) =>this.setState({ images: [], searchQuery: searchQuery, page: 1 });
   
  getImages = () => {
  
  const { searchQuery, page } = this.state;
  this.setState({ isLoading: true });
  const API_KEY = '4423902-dbd0f970c0cc60dbb84d66d4b';
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  
    axios
      .get(`?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`)
      .then(res => res.data.hits)
      .then(images => this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }))).catch(error => this.setState({ error }))
      .finally(() => {
         this.scrollDown();
        this.setState({ isLoading: false });
      });
    
  
    
  };
  
  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    
  }
  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;
      return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
          {this.state.images && <div>
            <ImageGallery images={images }/>
          </div>}
          {images.length&&
          (<Button onClick={this.getImages}/>)}

   </>
    );
  }
  
}


