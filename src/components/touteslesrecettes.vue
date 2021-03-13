<template>
  <div>
              <b-card  style="height: 900px; "
              >
                <br />
                <b-card-text>
                  <img
                    class="col-md-12"
                    :src="item.image"
                    style="
                      height: 300px;
                      border-radius: 10px;
                      font-size: 5px;"
                  />
                  <h1>{{ item.titre }}</h1>
                  <br /><br />

                  <!--<b-button style="background-color: #ff007f; position:absolute; bottom:0;  " @click="$bvModal.show('modalrecette')"
                    >Voir plus</b-button
                  >-->
                  <b-button style="background-color: #ff007f; 
                  position:absolute; bottom:0;" 
                  @click="showRecette"
                  >Voir plus
                  </b-button>

                </b-card-text>
                <b-modal 
                id="modalrecette" 
                class="test-modal" 
                :static="true"
                hide-header-close 
                hide-header 
                hide-footer 
                >
                    <template2 :detailRecette="item" />
                  </b-modal>
              </b-card>
         
  </div>
</template>   

<script>
import Menuheader from "./menuheader.vue";
import template2 from "./template2.vue";
export default {
  components: {
    template2,
    Menuheader,
  },

  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      form: {
        email: "",
        name: "",
      },

      recette: [],
      show: true,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    showRecette(){
      //console.log(this.item);
      this.$router.push({ path: 'recette', query: this.item})
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

<style scoped>

</style>
