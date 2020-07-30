const state = {
    topOfferItems: []

};

const mutations = {
    SET_TOP_OFFER_ITEMS(state, payload){
        state.topOfferItems = [...payload]
    }

};

const actions = {
    async getTopOfferItems({commit}){
        const result = [{id:1, name:"Hlace",price:"$2.68",category:"Trousers", top_offer:false},
        {id:2, name:"Tenisice", price:"$2.66", category:"Shoes",top_offer:true}]
        commit('SET_TOP_OFFER_ITEMS', result)
    }

};

const getters = {


};

export default {
    state,
    mutations,
    actions,
    getters
}