import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // counter: 0,
    // todos: [
    //   { id: 1, text: 'A', done: true },
    //   { id: 2, text: 'B', done: false },
    //   { id: 3, text: 'C', done: true }
    // ]
    select: [],
      nun: [
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_vapor_14_elite_fg_-_bright_crimson_metallic_silver_cq7635-600__00.jpg?w=400",
          name: "NIKE MERCURIAL VAPOR 14 ELITE FG - BRIGHT CRIMSON/METALLIC SILVER",
          price: 8500,
        },
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_phantom_gt_elite_fg_-_photo_blue_metallic_silver-rage_green_-_ck8439-400__00.jpg?w=400",
          name: "NIKE PHANTOM GT ELITE FG - PHOTO BLUE/METALLIC SILVER-RAGE GREEN",
          price: 8500,
        },
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_legend_8_elite_fg_-_platinum_tint_rage_green_at5293-030__00.jpg?w=400",
          name: "NIKE TIEMPO LEGEND 8 ELITE FG - PLATINUM TINT/RAGE GREEN",
          price: 7900,
        },
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_vapor_14_elite_fg_-_black_cyber-off_noir_-_cq7635-090_00.jpg?w=400",
          name: "NIKE MERCURIAL VAPOR 14 ELITE FG - BLACK/CYBER-OFF NOIR",
          price: 8500,
        },
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_copa_sense.1_fg_-_cblack_grefiv_grefiv_fw6498__00.jpg?w=400",
          name: "ADIDAS COPA SENSE.1 FG - CORE BLACK/GREY FIVE",
          price: 7300,
        },
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_predator_freak_.1_l_fg_-_cblack_grefou_ftwwht_fy1028__00.jpg?w=400",
          name: "ADIDAS PREDATOR FREAK.1 L FG - CORE BLACK/GREY FOUR",
          price: 7800,
        },
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_predator_freak_.1_l_fg_-_cblack_ftwwht_syello_fy0745__00.jpg?w=400",
          name: "ADIDAS PREDATOR FREAK.1 L FG - CORE BLACK/SOLAR YELLOW",
          price: 7800,
        },
        {
          img:
            "https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_nemeziz_.1_fg_-_cblack-cblack-cblack_fw7422__00.jpg?w=400",
          name: "ADIDAS NEMEZIZ .1 FG - CORE BLACK/CORE BLACK",
          price: 7800,
      },
    ],
    s: [],
    data: [{}],
    Total: 0,



  },
  getters: {
    T: state => {
      return state.Total;
    },
    Menu: state => {
      return state.nun;
    },
    Order: state => (value, index) => {
      return state.select.push({
        name: state.nun[index].name,
        price: state.nun[index].price,
        value: value,
        Total: value * state.nun[index].price
      })
    },
    ShowSelect: state => {
      return state.select;
    }
  },
  mutations: {
    //Clearสินค้า
    Clear: state => {
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = 0;
        state.select = [];
      }
    },
    //รวมราคา
    Submit: state => {
      state.Total = 0;
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = state.Total + state.select[i].Total;
      }
    }
  },
  actions: {},
  modules: {}
})
//忍