
<template>
  <div>
    <div class="container">
      <div class="col">
        <menuheader />
      </div>
      <br /><br /><br />
      <div class="col">
        <div class="Groupe2" style="font-size: 30px align:center">
          <h1> {{detailRecette.titre}} </h1>
          <br /><br />
          <p style="font-size:30px">
            {{detailRecette.paragraphe}}
          </p>
          <br />
             <b-img  center
                :src="detailRecette.image"
                style="width: 600px; height: 500px; border-radius: 10px"
                class="col-8"
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
          <h3>INGREDIENTS</h3>
          {{detailRecette.ingredient}}
        </div>

        <div
          class="ingredient3"
          style="text-align: center; margin-top: 120px; font-size: 30px"
        >
          <h3>ETAPES DE LA PREPARATION</h3>
          <p>
            {{detailRecette.preparation}}
          </p>
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
  </div>
</template>   

<script>
import Menuheader from "./menuheader.vue";
export default {
  components: {
    Menuheader,
  },

  /*props: {
    detailRecette: {
      type: Object,
      default() {
        return {};
      },
    },
  },*/

  created(){
    this.detailRecette=this.$router.currentRoute.query
    console.log(this.$router.currentRoute.query);
  },

  data() {
    return {
      detailRecette:"",
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

<style scoped>

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

