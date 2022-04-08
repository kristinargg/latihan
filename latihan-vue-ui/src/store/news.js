import axios from "axios";

const state = () => ({
  listNews: [],
  infoError: "",
  loading: true,
});
const mutations = {
  setListNews(state, param) {
    state.listNews = param;
  },
  setInfoError(state, param) {
    state.infoError = param;
  },
};
const actions = {
  fetchNews(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        console.log("respone", response.data);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },
};
export default {
  state,
  mutations,
  actions,
};
