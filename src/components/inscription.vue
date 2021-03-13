<template>
  <div>
    <div class="container">
      <div class="col">
        <menuheader />
      </div>

      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Inscription reussie!
    </b-alert>

      <div class="row">
        <div class="col-3">
          
        </div>
        <div class="col-6">
          <br /><br /><br />
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-card-group deck>
              <b-card>
                <br />

                <b-card-text>
                  <h1>Inscription</h1>
                  <center style="background-color: #ffffff; opacity: 0.5">
                    <b-form-group id="input-group-1" label-for="input-1">
                      <b-form-input
                        class="form-control"
                        type="text"
                        v-model="form.nom"
                        placeholder="Entrer votre prenom"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </center>

                  <br />

                  <b-card-text>
                    <center style="background-color: #ffffff; opacity: 0.5">
                      <b-form-group id="input-group-1" label-for="input-1">
                        <b-form-input
                          class="form-control"
                          type="email"
                          v-model="form.email"
                          placeholder="Entrer votre email"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </center>
                  </b-card-text>

                  <br />

                  <center style="background-color: #ffffff; opacity: 0.5">
                    <b-form-group id="input-group-2" label-for="input-2">
                      <b-form-input
                        type="password"
                        class="form-control"
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
                    variant="danger"
                  >
                    S inscrire
                  </b-button>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-form>

          <br />
        <h6 style="color: black">
          Retour a la page <a href="/Connexion"> Connexion </a>
        </h6>
        </div>
        <div class="col-3">

        </div>
      </div>
    </div>
  </div>
</template>


<script>
var bcrypt = dcodeIO.bcrypt;
import Menuheader from "./menuheader.vue";
export default {
  components: {
    Menuheader,
  },
  data() {
    return {
      form: {
        nom: "",
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
      try {
        event.preventDefault();
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(this.form.password, salt);

        let res = await this.$db.post(
          Object.assign(this.form, {
            password: hash,
          })
        );
        console.log(res);
        this.onReset(event);
        this.dismissCountDown = this.dismissSecs;

        return res;
      } catch (error) {
        console.log(error);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.nom = "";
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


