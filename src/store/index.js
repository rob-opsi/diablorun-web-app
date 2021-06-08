import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import leaderboard from './leaderboard';
import app from './app';
import characters from './characters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    leaderboard,
    app,
    characters
  }
});
