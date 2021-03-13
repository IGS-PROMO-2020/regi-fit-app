<template>
  <div class="container">
    <div class="col">
      <menuheader />
    </div>

    <div class="col">
      <b-form
        @submit="onSubmit"
        @reset="onReset"
        v-if="show"
        style="margin-top: 200px; color: white"
      >
        <h1>BIENVENUE SUR LA PLATEFORME DE REGI-FIT-APP</h1>
        <h2>De merveilleuses recettes et conseils vous y attendent</h2>
        <h3>pour garder la forme et la santé</h3>
        <br /><br /><br />
        <a href="/connexion" v-if="this.$token.length ==0"
          ><b-button
            variant="success"
            style="background-color: #ff007f; width: 250px; font-size: 25px"
            >Se connecter</b-button
          ></a
        >
      </b-form>
      <div
        class="footer"
        style="color: #ff007f; margin-top: 200px; padding-top: 100px"
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

  created() {
    console.log(this.$token);
  },

  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
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


<style>
body {
  background-image: url("/images/slider3-image.jpeg");
  background-size: cover;
}

.footer {
  background-color: #ff007f;
  float: center;
}
.b-button {
  background-color: #ff007f;
}
b-form-input {
  height: 100px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>