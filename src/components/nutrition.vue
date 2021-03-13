
<template>
    <div class="container">
      <div class="col">
        <menuheader />
      </div>
      <div class="col">
        <div class="Groupe2" style="font-size: 30px">
          <h1> NUTRITION </h1>
             <p> 
               Dans cette rubrique nous parlerons de la nutrititon 
               et des comportements a adopter vis à vis d elle.
               Qui est aussi un assemblage de comportement 
               qu il faut adopter pour être en pleine forme
             </p>
          <img
            src="images/slider5.jpg"
            class="col-10"
            style=" height: 500px; border-radius: 10px;"
          />
        </div>
        <div
          class="ingredient1"
          style="
            text-align: center;
            margin-top: 120px;
            font-size: 30px;
            margin-bottom: 100px;
          "
        >
          <h3>QU EST CE QUE LA NUTRITION</h3>
         <p>
         La nutrition est la science qui analyse les rapports
         entre les aliments et la santé.
         De l observation clinique de maladies ayant pour cause une déficience alimentaire
         comme le scorbut (manque de vitamine c ),
         la nutrition a évolué vers des questions plus complexes:les problèmes cardiaques,
         le diabète,ou l ostéoporose.
         Ajourdhui , l attention portée a la nutrition se fonde sur une définition nouvelle de la santé
         "prévention des maladies", ou la nutrition joue un rôle premier
         </p>
        </div>

        <div
          class="ingredient3"
          style="text-align: center; margin-top: 120px; font-size: 30px"
        >
          <h3>COMMENT MIEUX SE NOURIR</h3>
          <p>
          Pour mieux se nourir il faut avoir un régime alimentaire sain et équilibré ,
          il est important de faire les bons choix , mais ces 
          choix sont basés sur d autres facteurs que la simple  nutrition:
          ils dépendent de la disponibilité et du coût
          de la nourriture , de sa saveur et de son apparence, des goûts et des aversions de chacun ,
          et des coutumes et des traditions culturelles
          il n existe pas d alimentation "idéale" qui convienne à tout le monde.
          Chacun a des besoins nutritionnels spécifiques , mais nous avons tous besoin
          d un regime équilibré comprenant toute une palette d aliments offrant les différents<br>
          types de nutriments en juste quantité pour nous maintenir en bonnne santé.
          </p>
          <h1> LES ALIMENTS APPROPRIÉS POUR MIEUX SE NOURIR </h1>
           
            <img
            src="images/omelette.jpg"
            style="width: 600px; height: 500px; border-radius: 10px;"
            class="col-10"
          />
             <p> les aliments appropriés pour manger sain , si les besoins nutrionnels t alimentaires<br>
              d un individus dépendent de divers facteurs.<br> 
             niveaux d activité-il existe des conseils de base pour une alimentation équilibrée <br>
             à l âge adulte<br>
             *Les glucides et féculents doivent constituer <br>
             la base de la pluspart des repas.<br>
             *Consommer régulièrement des légumineuses(légumes secs).<br>
             *Consommer régulièrement du lait et des produits laitiers en petite quantité<br>
             *Manger régulièrement viande, volaille, oeufs, poisson en grande quantité<br>
             *Choisir avec soin les types de matières garsses et d huiles à consommer en quantité limité<br>
             *Limiter la consommation de sel<br>
             *Limiter la consommation d alcool<br>
             *boire beaucoup d eau.</p>
        </div>
        <div
          class="footer"
          style="
            color: #ff007f;
            margin-top: 200px;
            padding-top: 100px;
            margin: 40px;
          "
        >
          <div class="row">
            <div class="col order-last">
              <a href="/nutrition"
                ><h1>BONUS</h1>
                <p>Recette bonus</p>
                <p>Recette pure cacao de côte d ivoire</p></a
              >
            </div>
            <div class="col">
              <a href="/Touteslesrecettes"
                ><h1>LES RECETTES</h1>
                <p>Les recettes appropriées pour manger sain</p>
                <p>Les fabuleux ingrédients qui accompagnent ces recettes</p>
                <p>La fonction de ces aliments</p></a
              >
            </div>

            <div class="col order-first">
              <a href="/Nutrition">
                <h1>NUTRITION</h1>
                <p>Que veut dire nutrition?</p>
                <p>Comment mieux se nourir?</p>
                <p>Quels sont les aliments appropriés pour manger sain</p></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
</template>   

<script>
import Menuheader from "./menuheader.vue";
export default {
  components: {
    Menuheader,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script> 


<!-- Add "scoped" attribute to limit CSS to this component only -->


