<template>
  <div class="container">
      
      <div class="col" >
         <menuheader />
      </div>

      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Connexion reussie!
    </b-alert>

      <div class="col" style="margin-top:100px; margin-left:50px;">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
         <b-card-group deck>
        <b-card
        >
          <br />
         <b-card-text>
          <h1>Connexion</h1>
          <center style="background-color: #ffffff;opacity: 0.5;">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                size="200px"
                style="height: 60px"
                id="input-3"
                class="col-5"
                v-model="form.email"
                placeholder="Entrer votre email"
                required
              ></b-form-input>
            </b-form-group>
          </center>
          <br />
          <center style="background-color: #ffffff;opacity: 0.5;">
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                size="200px"
                style="height: 60px"
                type="password"
                id="text-password"
                class="col-5"
                aria-describedby="password-help-block"
                v-model="form.password"
                placeholder="Entrer votre mot de passe"
                required
              ></b-form-input>
            </b-form-group>
          </center>
          <br />
          <b-button
            type="submit"
            size="200px"
            style="height: 60px"
            class="col-5"
            variant="danger"
            >Se connecter</b-button
          >
         </b-card-text>
        </b-card>
        </b-card-group>
        </b-form>
        <br>
        <h6 style="color:black"> Vous n avez pas de compte <a href="/inscription"> Inscrivez-vous! </a></h6>
   
        </div>
        
  </div>
</template>


<script>
import Menuheader from "./menuheader.vue";
import PouchDB from "pouchdb";
var db = new PouchDB("user");
var db_token = new PouchDB("token");
var bcrypt = dcodeIO.bcrypt;
import { nanoid } from "nanoid";
export default {
  components: {
    Menuheader,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      show: true,
    };
  },

  methods: {
    async onSubmit(event) {
      event.preventDefault();
      /*var res = await db.find({
        selector: {},
      });
      console.log(res);*/
      this.$db.createIndex({
        index: { fields: ["email", "password"] },
      });

      this.$db_token.createIndex({
        index: { fields: ["user", "token"] },
      });

      var rest = await this.$db.find({
        selector: {
          email: this.form.email,
        },
      });
      //console.log("res", rest.docs[0].password);
      console.log("res", this.form.password);

      if (rest.docs.length > 0) {
        if (bcrypt.compareSync(this.form.password, rest.docs[0].password)) {
          let result = await db_token.find({
            selector: {
              user: rest.docs[0]._id,
            },
          });
          console.log(result.docs);
          if (result.docs.length === 0) {
            console.log("ya pas");
            let token = await this.$db_token.post({
              user: rest.docs[0]._id,
              token: nanoid(15),
            });

            let token_find = await this.$db_token.find({
              selector: {
                user: rest.docs[0]._id,
              },
            });
            console.log(token_find.docs[0].token);
            this.$router.push("/")

            this.$setToken(token_find.docs[0].token)
            //this.$token = token_find.docs[0].token
            return this.$token
          } else {
            console.log("ya token");

            this.$router.push("/")
            this.$setToken(result.docs[0].token)
            console.log(this.$token);
            return this.$token
          }
        } else {
          console.log(false);
          return false;
        }
      } else {
        console.log(false);
        return false; 
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script> 


<!-- Add "scoped" attribute to limit CSS to this component only -->
