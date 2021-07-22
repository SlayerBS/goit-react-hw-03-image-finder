import axios from "axios";

const API_KEY = "4423902-dbd0f970c0cc60dbb84d66d4b";

const getImagesByQuery = (searchQuery, currentPage) => {
  const options = {
    url: `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${API_KEY}`,
  };

  return axios(options).then(({ data }) => data.hits);
};

export { getImagesByQuery };