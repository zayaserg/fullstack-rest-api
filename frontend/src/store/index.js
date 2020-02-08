import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    card: {},
    cards: [
      {
        id: 1,
        title: "Can coffee make you a better developer?",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        img:
          "https://images.unsplash.com/photo-1579635480803-b990e007f508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        author: "Jonathan Reinink",
        date: "Aug 20"
      },
      {
        id: 2,
        title: "Can tea make you a better.",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi rerum in excepturi tenetur rem.",
        img:
          "https://images.unsplash.com/photo-1579636228207-0010071df94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        author: "Jonathan Reinink",
        date: "Aug 20"
      },
      {
        id: 3,
        title: "You are a better.",
        text: "Maiores et perferendis eaque, exercitationem praesentium nihil.",
        img:
          "https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        author: "Jonathan Reinink",
        date: "Aug 20"
      },
      {
        id: 4,
        title: "You are a better.",
        text: "Maiores et perferendis eaque, exercitationem praesentium nihil.",
        img:
          "https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        author: "Jonathan Reinink",
        date: "Aug 20"
      },
      {
        id: 5,
        title: "You are a better.",
        text: "Maiores et perferendis eaque, exercitationem praesentium nihil.",
        img:
          "https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        author: "Jonathan Reinink",
        date: "Aug 20"
      }
    ]
  },
  mutations: {
    SET_CARD: (state, card) => {
      state.card = card;
    }
  },
  actions: {
    fetchCard: ({ commit, state }, id) => {
      const card = state.cards.find(card => card.id === id);
      commit("SET_CARD", card);
    }
  },
  modules: {}
});
