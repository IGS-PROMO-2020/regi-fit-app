<template>
  <div class="row">
    <div>
  <b-navbar toggleable="lg">
    <b-navbar-brand >
     <div class="col-md-1">
      <a href="/"
              ><img
                src="images/Groupe 1.png"
                href="/"
                style="width: 200px; height:100px;margin-left:-30px;"
            /></a>
    </div> 
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <div style=" color:white; font-size:40px;">
          <b-dropdown-item href="/">Accueil</b-dropdown-item>
          <b-dropdown-item href="/touteslesrecettes">Recettes</b-dropdown-item>
          <b-dropdown-item href="/nutrition">Nutrition</b-dropdown-item>
          <b-dropdown-item href="/bonus">Bonus</b-dropdown-item>
         </div>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>


  </div>
</template>


<script>
export default {
};
</script>
