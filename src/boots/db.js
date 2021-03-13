import PouchDB from "pouchdb"
import Vue from "vue"

console.log("hello world");
Vue.prototype.$db = new PouchDB("user");
Vue.prototype.$db_token = new PouchDB("token");
Vue.prototype.$db_recette = new PouchDB("recette");
//Vue.prototype.$pouchdb = PouchDB
Vue.prototype.$bcrypt = dcodeIO.bcrypt;

Vue.prototype.$token = ""

Vue.prototype.$setToken = (token=null) =>{
    if (token) {
        Vue.prototype.$token = token
    } else {
        throw new Error("Entre un token valide")
    }
}