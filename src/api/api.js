import axios from "axios";

const API_KEY = "4423902-dbd0f970c0cc60dbb84d66d4b";
axios.defaults.baseURL = "https://pixabay.com/api/";

const getImagesByQuery = (searchQuery, currentPage) => {
  const options = {
    method: "get",
    url: `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${API_KEY}`,
    API_KEY: "4423902-dbd0f970c0cc60dbb84d66d4b",
  };

  return axios(options).then(({ data }) => data.hits);
};
// .get(
//   `?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${API_KEY}`
// )

export { getImagesByQuery };
