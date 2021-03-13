<template>
  <div>
    <div class="container">
      <div class="col">
        <menuheader />
      </div>
      <div class="col" style="color: black">
        <img 
        src="images/gateau-chocolat-minceur.jpeg" 
        class="col-10"
        style="border-radius:10px;"/>
        
        <div
        class="ingredient1"
        style="text-align: center; color: black; font-size: 30px"
      >
        <h3>INGREDIENTS</h3>
        <p>
          200g de Chocolat Noir<br />
          100g de Fromage Blanc 0%<br />
          20g de maizena<br />
          04 Oeufs<br />
          50g édulcorant en poudre<br />
          1 pincée de sel<br />
        </p>
      </div>

      <div
      class="ingredient3"
      style="
        text-align: center;
        color: black;
        font-size: 30px;
      "
    >
      <br />
      <h3>ETAPES DE LA PREPARATION</h3>
      <p>
        Préchauffez le four à 200 dégré<br />
        Dans un bain-marie, mettez le chocolat à fondre sur le feu doux.<br />
        Séparez les blancs des jaunes d oeufs<br />
        Battez les jaunes avec le sucre, jusqu à ce que le mélange blanchisse,
        puis<br />
        ajouter la maizena , le fromage blanc, le sel et
        <br />
        terminez par le chocolat fondu<br />
        Montez les blancs d oeufs en neige, puis incorporez-les<br />
        délicatement à la pâte comme pour une mousse au chocolat<br />
        Beurrez un moule<br />
        rectangulaire , versez-y la pour une vingtaine de minute
      </p>
      <br />
      <h3>Un Amour pour le chocolat</h3>
      <p>
        Universellement apprécié, et par toutes <br />
        Toutes les tranches d âge , le chocolat est une gormandise<br />
        que nous avons très envie de garder dans notre alimentation.<br />
        heureusement , de sérieux arguments en sa faveur nous permettent de le
        voir désormais comme<br />
        un aliment bon pour la santé.
      </p>
      <img src="images/chocolat.jpg" 
       style="border-radius:10px;"
       class="col-10"
       />
       
      <p>
        Le chocolat,produit à partir de la fève du cacaoyer, est un produit<br />
        composé de pâte de cacao,et de sucre .<br />
        A ces ingrédients de base peuvent être ajoutés différentes substances<br />
        qui modifient le goût mais aussi les qualités <br />
        nutritionnelles du chocolat, comme le lait, les fruits secs, les
        arômes...<br />
        il faut donc bien différencier le chocolat noir de tous les autres
        chocolats, <br />
        car c est celui que l on peut consommer avec le plus de bénéfices <br />
        et le moins d inconvénients.<br />
        En effet, le beurre de cacao ne favorise pas le mauvais cholestérol<br />
        et aurait même un effet plûtot inverse.<br />
        Un chocolat noir qui ne contient aucune autre matière grasse <br />que
        le beurre de cacao Peut donc être consommé sans risque<br />
        dans le cadre d un régime ant-cholestérol.<br />
        N hésitez pas a en ajouter a votre alimentation.
      </p>
    </div>

      </div>

    <div
      class="footer"
      style="color: #ff007f; margin-top:200px; padding-top:100px"
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










