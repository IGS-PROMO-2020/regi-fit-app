import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Inscription from '../views/Inscription.vue'
import Accueil from '../views/Accueil.vue'
import Connexion from '../views/Connexion.vue'
import Touteslesrecettes from '../views/Touteslesrecettes.vue'
import Recette from '../views/Recette.vue'
import Nutrition from '../views/Nutrition.vue'
import Bonus from '../views/Bonus.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: Bonus
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: Nutrition
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: Inscription
  },
  {
    path: '/recette',
    name: 'recette',
    component: Recette
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  /*{
    path: '/accueil',
    name: 'Accueil',
    component: Accueil
  },*/
  {
    path: '/touteslesrecettes',
    name: 'Touteslesrecettes',
    component: Touteslesrecettes
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
