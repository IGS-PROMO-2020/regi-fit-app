<template>
  <div>
    <div class="container">
      <div class="col">
        <menuheader />
      </div>
      <br />
      <br />
      <div class="col">
        <div class="Groupe2" style="font-size: 30px">
          <h1>LES RECETTES</h1>
          <br />
          <h2>Vos recettes</h2>
          <p>
            Retrouvez <a href="/Touteslesrecettes">ici</a> la liste de vos
            Recettes preferées rien que pour votre bonheur
          </p>
          <br />

          <div>
            <b-card-group columns>
              <b-card style="height: 2000px;"
                v-for="item in this.recette"
                :key="'item-recette-'.concat(item._id)"
              >
                <br />
                <b-card-text>
                  <img
                    :src="item.image"
                    style="width: 300px; height: 300px; border-radius: 10px"
                  />
                  <h1>{{ item.titre }}</h1>
                  <br /><br />

                  <b-button style="background-color: #ff007f" @click="$bvModal.show('modalrecette')"
                    >Voir plus</b-button
                  >
                  <b-modal id="modalrecette" class="test-modal" size="xl" hide-header-close hide-header hide-footer hide-backdrop>
                    <template2 :detailRecette="item" />
                  </b-modal>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
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
import template2 from "./template2.vue";
import PouchDB from "pouchdb";
var db_recette = new PouchDB("recette");
//var monTexte = "Bonjour\n\nCeci est la première ligne.\nCeci est la deuxième.\nEtc."
export default {
  components: {
    template2,
    Menuheader,
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

  /*
  async created() {
    let recette = [
      {
        titre: "RECETTE DE SOUPE DE BOEUF A L AFRICAINE",
        paragraphe:
          "Le bœuf africain est un incontournable de la cuisine à la mijoteuse " +
          "C’est une recette parfaitement réconfortante qui permet de faire le" +
          "plein de protéines et de légumes. Sa sauce sucrée et onctueuse" +
          "relevée par un peu de gingembre, d’ail et de vinaigre balsamique" +
          "agrémente à merveille le goût des cubes de bœuf, alors que la" +
          "cuisson lente à la mijoteuse procure à la viande une tendreté sans" +
          "pareille! Ce mijoté est bien pratique, puisqu’il cuit pendant 8" +
          "longues heures, ce qui en fait la recette idéale à préparer avant de" +
          "partir pour le travail ou pour une journée d’activités extérieures" +
          "hivernales. Elle vous attendra à votre retour, prête à être dévorée!" +
          "N’hésitez pas à cuisiner cette recette de bœuf africain en grande" +
          "quantité et à la congeler afin d’avoir toujours sous la main un bon" +
          "plat soutenant et réconfortant.",
        image: "images/boeuf-africain.jpg",
        ingredient:
          "30 ml (2 c. à soupe) d’huile d’olive\n\n" +
          "1 contenant de champignons de 227 g, coupés en deux\n\n" +
          "800 g (environ 1 3/4 lb) de cubes de boeuf à ragoût\n\n" +
          "2 carottes coupées en dés\n\n" +
          "1 oignon haché\n\n" +
          "1 branche de céleri coupée en dés\n\n" +
          "15 ml (1 c. à soupe) d’ail haché\n\n" +
          "15 ml (1 c. à soupe) de gingembre haché\n\n" +
          "1 boîte de soupe aux tomates condensée de 284 ml\n\n" +
          "15 ml (1 c. à soupe) de sauce Worcestershire\n\n" +
          "60 ml (1/4 de tasse) de cassonade\n\n" +
          "45 ml (3 c. à soupe) de vinaigre balsamique\n\n" +
          "Sel et poivre au goût\n\n",
        preparation:
          "Préparer le poulet Couper le blanc de poulet en morceaux. Préparer" +
          "les légumes Laver et essorer les carottes et les tomates. Éplucher" +
          "les carottes et les oignons. Couper les légumes en morceaux et" +
          "séparément. Faire cuire le poulet et les légumes Dans une cocotte," +
          "faire chauffer l’huile d’olive. Y faire dorer l’oignon 2 minutes." +
          "Ajouter le poulet. Bien mélanger. Ajouter les tomates, les carottes," +
          "le concentré et le piment. Saler et poivrer. Couvrir la cocotte et" +
          "laisser mijoter 30 minutes à feu doux. Ajouter le beurre de" +
          "cacahuète Verser le beurre de cacahuète puis, le bouillon de" +
          "volaille dégraissé. Bien remuer. Laisser mijoter encore 15 minutes." +
          "Servir chaud.",
      },

      {
        titre: "FEUILLE DE MANIOC A L HUILE DE PALME",
        paragraphe:
          "Aujourd’hui nous vous proposons les feuilles de manioc à l’huile de palme. C’est un plat, comme son nom l’indique, \n\n" +
          "fait à base des feuilles de Manioc. \n\n" +
          "Le manioc qu’on consomme généralement c’est la transformation du tubercule. \n\n" +
          "Découvrons-le",

        image: "images/Feuille-de-manioc.jpg",
        ingredient:
          "500 g de feuilles de manioc pilées (ça correspond à deux bottes de feuilles de manioc)\n\n" +
          "1 boîte de sardines\n\n" +
          "50 cL d’huile de palme (à votre convenance)\n\n" +
          "1 oignon\n\n" +
          "un peu de persil et de basilic\n\n" +
          "sel\n\n" +
          "du piment (facultatif)\n\n",
        preparation:
          "Pour commencer, ajoutez un litre d’eau aux feuilles de manioc pilées et faites bouillir dans une grande casserole pendant 2 heures\n\n" +
          "en rajoutant de l’eau au fur et à mesure si c’est nécessaire.\n\n" +
          "Au bout d’une heure et demi, rajoutez du sel,\n\n" +
          "du persil, du basilic et laissez le tout cuire.\n\n" +
          "Au bout de deux heures, assurez vous qu’il n’y ait plus trop d’eau dans les feuilles de manioc.\n\n" +
          "Si tel est le cas, vous pouvez maintenant rajouter une boîte de conserve en entier et laissez\n\n" +
          "Dès que les feuilles de manioc se sont vidées de leur sauce, enlevez-les du feu.\n\n" +
          "Dans une poêle, faîtes chauffer l’huile de palme \n\n" +
          "Découpez les oignons en fines lamelles, mettez- les sur les feuilles de manioc cuits \n\n" +
          "Versez l’huile de palme brûlante dessus en veillant à ne pas vous brûler\n\n" +
          "Faites chauffer 2 minutes et c’est prêt!\n\n" +
          "Vous pouvez l’accompagner de riz ou de bouillie de banane\n\n" +
          "Bon appétit\n\n",
      },

      {
        titre: "RECETTE DE RIZ AU CURRY ACCOMPAGNES DE PETITS LEGUMES",
        paragraphe:
          " Recette pour 4 personnes" +
          "Temps de préparation 20 minutes" +
          "Temps de cuisson 40 minutes</p>",
        image: "images/riz-curry.jpg",
        ingredient:
          " 200g Riz" +
          "1cuil. à café Curry" +
          "250g Champignons de Paris" +
          "100g Petits pois" +
          "2cuil. à soupe Huile" +
          "3gousses Ail" +
          "Sel",
        preparation:
          "Faites cuire le riz comme indiqué sur son emballage." +
          "Nettoyez les champignons et découpez-les en morceaux." +
          "Épluchez les gousses d’ail puis hachez-les." +
          "+Versez l'huile dans une poêle au feu. Faites-y frire l’ail." +
          "+Ajoutez les morceaux de champignons" *
            " Mélangez et salez selon votre goût." +
          "Au bout de 10 minutes, incorporez le riz cuit, les petits pois et le curry." +
          " Mélangez le tout et servez.",
      },

      {
        titre: "POULETYASSA",
        paragraphe:
          "Le poulet Yassa est un plat traditionnel de la cuisine sénégalaise.\n\n" +
          "Alors pour voyager un peu, laissez-vous embarquer dans ce mélange de saveurs et d'épices typique de la cuisine africaine.\n\n" +
          "Une chose est sûre, vous allez succomber !",
        image: "images/yassa-poulet.jpg",
        ingredient:
          "3 c. à café de moutarde" +
          "5 oignons\n\n" +
          "2 gousses d’ail\n\n" +
          "3 citrons jaunes\n\n" +
          "1 citron vert\n\n" +
          "1 piment frais\n\n" +
          "1 gros poulet\n\n" +
          "2 feuilles de laurier\n\n" +
          "5 c. à soupe d’huile\n\n" +
          "sel fin, poivre noir du moulin\n\n ",
        preparation:
          "Pressez les 4 citrons pour en recueillir le jus puis épluchez et émincez deux oignons et écrasez la gousse d’ail. \n\n" +
          " Découpez la volaille en morceaux. Dans un bol, réalisez la marinade du poulet Yassa :\n\n" +
          " mélangez la moitié de l’huile avec le jus des 4 citrons, la gousse d’ail écrasée et les oignons émincés.\n\n" +
          "Salez et poivrez légèrement.\n\n" +
          "Disposez les morceaux de poulet dans un plat et recouvrez-les de la marinade.\n\n" +
          "Laissez-les mariner au réfrigérateur pendant 6 à 12 h (idéalement une nuit entière).\n\n" +
          "Mélangez de temps en temps pour que tous les blancs de poulet soient bien imprégnés de marinade.\n\n" +
          "Retirez les morceaux de poulet de la marinade puis faites-les légèrement griller sur la braise,\n\n" +
          "au four ou à la poêle.\n\n" +
          "Ensuite, épluchez et émincez les 3 oignons restants. Émincez et épépinez le piment.\n\n" +
          "Dans une marmite, mettez le reste de l’huile et faites revenir le reste des oignons.\n\n" +
          "Versez la marinade. Ajoutez alors le piment, les feuilles de laurier et la moutarde.\n\n" +
          "Mélangez puis ajoutez les morceaux de poulet. Laissez chauffer votre poulet Yassa dans le bouillon à feu doux pendant 1 h.\n\n" +
          "Servez votre poulet Yassa bien chaud et dégustez-le aussitôt, avec du riz blanc ou du riz brisé.",
      },

      {
        titre: "RECETTE AFRICAINE DE POULET AU BEURRE DE CACAHUÈTE LIGHT",
        paragraphe:
          "Très populaire au Sénégal et en Afrique en général,\n\n" +
          "le mafé de poulet ou poulet au beurre de cacahuète s’invite maintenant dans tous les menus. \n\n" +
          "Bien évidemment, il s’agit d’un plat à base de viande de poulet et de beurre de cacahuète, \n\n" +
          "mais en plus, il inclut aussi d’autres ingrédients comme la carotte et la tomate.",
        image: "images/yassa-poulet.jpg",
        ingredient:
          "pour 4 personnes : 8 sp / personne :\n\n" +
          "300 g de lentilles\n\n" +
          "1 oignon\n\n" +
          "200 g de chorizo\n\n" +
          "1 boite de tomate concassées\n\n" +
          "3 carotte\n\n" +
          "1 bouillon cube de boeuf\n\n" +
          "1 cuillère à soupe d’huile d’olive\n\n" +
          "60 cl d’eau\n\n" +
          "sel, poivre\n\n",
        preparation:
          "Préparer le poulet" +
          "Couper le blanc de poulet en morceaux." +
          "Préparer les légumes" +
          "Laver et essorer les carottes et les tomates. Éplucher les carottes et les oignons. Couper les légumes en morceaux et séparément." +
          "Faire cuire le poulet et les légumes" +
          "Dans une cocotte, faire chauffer l’huile d’olive. Y faire dorer l’oignon 2 minutes. Ajouter le poulet. Bien mélanger." +
          "Ajouter les tomates, les carottes, le concentré et le piment. Saler et poivrer. Couvrir la cocotte et laisser mijoter 30 minutes à feu doux." +
          "Ajouter le beurre de cacahuète" +
          "Verser le beurre de cacahuète puis, le bouillon de volaille dégraissé. Bien remuer.Laisser mijoter encore 15 minutes. Servir chaud.",
      },

      {
        titre: " EPINARD AU BEURRE DE CACAHUETE ",
        paragraphe:
          "Si vous souhaitez la faire, la bonne saison est le début de" +
          "l’automne.\n\n" +
          "Vous trouverez des épinards, des tomates et des poivrons. Désolée de" +
          "la poster en ce moment.\n\n" +
          "Le tour du monde ne facilite pas toujours les posts au bon moment." +
          "Plus que quelques semaines où je ne suis pas toujours synchro.",
        image: "images/epinard-beurre-de-cacao.jpg",
        ingredient:
          "500 g d' épinards\n\n" +
          "2 cs de purée de cacahuètes\n\n" +
          "1 pincée de piment d'espelette\n\n" +
          "3 oignons nouveaux\n\n" +
          "sel et poivre\n\n" +
          "1 peu d' huile d'olive\n\n" +
          "1 cs de concentré de tomate\n\n",
        preparation:
          "Lavez les épinards.\n\n" +
          "Faites-les « tomber » à feu vif quelques minutes dans une grande" +
          "poêle à couvert ou cuisez-les au four vapeur cinq minutes à 100°.\n\n" +
          "Mettez-les dans un égouttoir, salez-les légèrement et coupez-les" +
          "grossièrement.\n\n" +
          "Épluchez les oignons, lavez-les avec leurs tiges. Coupez les en" +
          "petits morceaux.\n\n" +
          "Dans une poêle, faites-les revenir dans un peu d’huile.\n\n" +
          "Ajoutez le concentré de tomates, mélangez bien.\n\n" +
          "Allongez la purée de cacahuète (ou beurre de cacahuète) avec un peu" +
          "d’eau\n\n" +
          "Ajoutez les épinards dans la poêle puis la purée de cacahuètes, le" +
          "sel et poivre et le piment.\n\n" +
          "Remettez la poêle sur feu doux jusqu’à ce que les épinards soient" +
          "chauds.\n\n" +
          "Servez de suite.",
      },

      {
        titre: "EPINARDS AFRICAIN AU BOEUF ET POULET FUMEE",
        paragraphe:
          "Recette pour 4 personnes\n\n" +
          "Temps de préparation 20 minutes\n\n" +
          "Temps de cuisson 40 minutes\n\n",
        image: "images/epinard-africain.jpg",
        ingredient:
          "Ingrédients de la recette Epinards africains au boeuf et poulet fumé\n\n" +
          "-1 KG DE BŒUF COMME POUR LE BŒUF BOURGUIGNON\n\n" +
          "-1 POULET FUMÉ D’1 KG\n\n" +
          "-500 G DE TOMATES PELÉES\n\n" +
          "-1 KG D’ÉPINARDS EN BRANCHES\n\n" +
          "-2 OIGNONS HACHÉS\n\n" +
          "-1 C. À CAFÉ DE CREVETTES SÉCHÉES OU DE SAUCE DE POISSON\n\n" +
          "-2 CUBES DE BOUILLON\n\n" +
          "-PIMENT DE CAYENNE\n\n" +
          "-SEL ET POIVRE. \n\n" +
          "Preparation\n\n" +
          "Faire revenir les oignons dans un peu de matière grasse et mettre de côté.\n\n" +
          "Ensuite faire revenir le boeuf coupé en morceaux incorporer les oignons assaisonner et ajouter les crevettes séchées ou soupe de poisson ainsi que les cubes de bouillon délayés\n\n" +
          "dans de l’eau chaude (suffisamment pour presque couvrir la viande).\n\n" +
          "Laisser cuire 15 minutes avant d’ajouter les épinards et les tomates coupées en dés.\n\n" +
          "Laisser mijoter 1 heure.\n\n" +
          "Pour finir ajouter le poulet fumé coupé en morceaux et laisser mijoter encore 1 heure.",
        preparation:
          "Lavez les feuilles d’épinards et faites les bouillir avec du sel pendant 15 mn puis les découper en fines lamelles" +
          "Mettez les morceaux de viande de bœuf dans une casserole avec de l’eau, du sel, un oignon émincé, l’ail et le gingembre et aites bouillir environ 15mn" +
          "Retirez la viande du feu et égouttez en conservant le bouillon de cuisson" +
          "posez une casserole sur le feu et versez y l’huile d’arachide. faites y revenir les oignons et l’ail" +
          "Ajoutez la purée de tomate, mélangez régulièrement pendant env 10mn, salez" +
          "Ajoutez ensuite le bouillon de cuisson de la viande, rectifiez l’assaisonnement et laissez bouillir à feu moyen pendant 10 à 15 mn" +
          "Ajoutez ensuite les épinards et la viande et laissez mijoter env 10 mn" +
          "Servez avec akoume, ablo ou du riz" +
          "Servez avec akoume, ablo ou du riz",
      },
      {
        titre: "GRATIN DAUPHINOIS TRADITIONNEL",
        paragraphe:
          "Recette typique de l’ancienne province du Dauphiné, \n\n" +
          "le gratin Dauphinois cuit au four est un fleuron de la gastronomie française. \n\n" +
          "Ce gratin de pommes de terre en rondelles nécessite une cuisson longue et lente pour que les pommes de terre soient\n\n" +
          "« confites » dans la préparation. Plus vous prolongerez la cuisson, meilleur sera le gratin !",
        image: "images/recette-de-la-paella.jpg",
        ingredient:
          "Président100 gr de Beurre gastronomique doux Président\n\n" +
          "Logo Lactel1 L de Lait Lactel\n\n" +
          "1.5 kg de pommes de terre (Charlotte)\n\n" +
          "1 gousse d' ail\n\n" +
          "30 cl de crème légère\n\n" +
          "sel\n\n" +
          "poivre\n\n" +
          "muscade",
        preparation:
          "Préparation des pommes de terre et du plat" +
          "Épluchez vos pommes de terre Charlotte." +
          "Plongez-les dans une bassine d'eau froide. Laissez-les tremper pendant la préparation de votre plat à gratin." +
          "Épluchez la gousse d’ail, coupez-la en deux et retirez-en le germe." +
          "Frottez la gousse d’ail sur les parois et le fond du plat à gratin avant de l’écraser et de la hacher finement." +
          "Réservez-la." +
          "Pré-cuisson des pommes de terre" +
          "Égouttez les pommes de terre, essuyez-les soigneusement avec du papier absorbant ou un torchon en tissu." +
          "Découpez-les en rondelles assez fines, d’environ 3 mm d’épaisseur." +
          "Salez et poivrez généreusement : le gratin dauphinois est un plat qui supporte très bien une bonne quantité de poivre noir." +
          "Dans une grande casserole, verser le lait, l’ail haché, la crème et les rondelles de pommes de terre, sans oublier une bonne demi-cuillerée de noix de muscade moulue." +
          "Portez le mélange à ébullition en veillant à ce que toutes les pommes de terre soient bien immergées à l'aide d'une écumoire. Lorsque la préparation bout, arrêtez la cuisson." +
          "La cuisson du gratin au four" +
          "Préchauffez le four à 190 °." +
          "Versez toute la préparation dans votre plat à gratin. La crème et lait doivent bien recouvrir les pommes de terre." +
          "Déposez de petits morceaux de beurre sur la surface." +
          "Baissez la température à 150° et enfournez pendant au moins 45 min." +
          "La cuisson doit être lente pour obtenir une pomme de terre confite." +
          "Vérifiez la cuisson en plantant la lame d’un couteau dans le gratin" +
          ": elle doit s’enfoncer sans aucune résistance." +
          "Votre gratin dauphinois traditionnel est prêt, régalez-vous en l'accompagnant d'un gigot d'agneau ou d'un poulet rôti " +
          "et d’une salade aillée !",
      },
      {
        titre: "JOUE DE BOEUF A LA MEXICAINE ",
        paragraphe:
          "Recette pour 4 personnes\n\n" +
          "Temps de préparation 20 minutes\n\n" +
          "Temps de cuisson 40 minutes\n\n",
        image: "images/joue-de-boeuf.jpg",
        ingredient:
          "600 g de joue de bœuf" +
          "1 poivron rouge" +
          "1 poivron vert" +
          "2 carottes" +
          "1 gros oignon" +
          "2 gousses d'ail" +
          "1 piment rouge jalapeno" +
          "Quelques brins de coriandre fraîche" +
          "400 g de maïs en grain" +
          "180 g de haricots rouges" +
          "20 cl de pulpe de tomate" +
          "1 cube de bouillon de bœuf" +
          "Quelques gouttes de sauce pimentée" +
          "3 c. à soupe d'huile d’olive" +
          "Sel et poivre du moulin",
        preparation:
          "Couper la joue de bœuf en cubes, égoutter et rincer le maïs, épépiner les poivrons et les couper en lanières,\n\n" +
          "peler les carottes et les couper en petits dés, peler l’oignon et l’émincer finement, épépiner le piment et le couper en fines rondelles,\n\n" +
          "peler l’ail et le dégermer.\n\n" +
          "Chauffer l’huile dans une cocotte, colorer la joue de bœuf à feu vif et la réserver.\n\n" +
          "La remplacer par l’oignon et le colorer légèrement, remettre la joue de bœuf, \n\n" +
          "ajouter l’ail pressé, le piment et la pulpe de tomate, verser de l’eau à hauteur, ajouter le cube de bouillon,\n\n" +
          "les carottes et les poivrons, couvrir et laisser mijoter 25 minutes.\n\n" +
          "Ajouter les haricots rouges, saler et poivrer si besoin, verser quelques gouttes de sauce pimentée et poursuivre la cuisson 15 minutes\n\n" +
          "en mélangeant régulièrement, ajouter le maïs 5 minutes avant la fin de la cuisson en mélangeant délicatement.\n\n" +
          "Servir la joue de bœuf à la mexicaine décorée de coriandre finement",
      },
      {
        titre: "BIRYANI DE LEGUMES",
        paragraphe:
          "Un plat que vous pouvez manger tel quel ou que vous pouvez servir en accompagnement de viande ou poisson." +
          "Il me permet d’accompagner mon amie Sophie et saluer les habitants du Kenya à l’occasion de leur fête nationale le 12 décembre." +
          "Cette recette est extraite du livre toutes les cuisines d’Afrique." +
          "S’il est originaire d’Inde, le biryani est beaucoup consommé dans l’Afrique de l’Est." +
          "J’ai fait cette recette l’été dernier avec des poivrons bio de plein champs.",
        image: "images/legume-au-riz.jpg",
        ingredient:
          "Ingrédients" +
          "1 oignon" +
          "6 poivrons" +
          "250 g de riz" +
          "quelques feuilles de menthe" +
          "1 pincée de safran" +
          "de l' huile d'olive" +
          "2 cc de cumin" +
          "1 cs de gingembre frais" +
          "1 cc de cardamone" +
          "sel et poivre" +
          "4 cs de noix de cajou",
        preparation:
          "Rincez le riz à l’eau froide jusqu’à ce que celle-ci soit bien claire." +
          "Cuisez le riz dans une fois et demie son volume avec le safran et une pincée de sel" +
          "(ex : un petit bol de riz = un bol et demi d’eau légèrement salée)." +
          "Étalez-le dans un plat et faites le refroidir." +
          "Épluchez l’oignon et coupez-les en fines tranches." +
          "Pelez les poivrons et coupez les en tranches." +
          "Faites revenir les oignons et les poivrons avec toutes les épices pendant 15 minutes (à couvert pour moi)." +
          "Ajoutez le riz, la menthe ciselée, les noix de cajou et faites revenir pendant quelques minutes." +
          "Servez sans attendre.",
      },
      {
        titre: "LES LENTILLES AU CHERIZO",
        paragraphe:
          "Voici la recette des lentilles au chorizo,\n\n" +
          "un bon plat rassasiant très délicieux, simple et facile à réaliser,\n\n" +
          "idéal pour un repas hivernal qui plaira à tous \n\n" +
          "nous parlerons de ces benfaits, de sa conception.",
        image: "images/lentilles-au-chorizo.jpg",
        ingredient:
          "Ingrédients" +
          "pour 4 personnes : 8 sp / personne :" +
          "300 g de lentilles" +
          "1 oignon" +
          "200 g de chorizo" +
          "1 boite de tomate concassées" +
          "3 carotte" +
          "1 bouillon cube de boeuf" +
          "1 cuillère à soupe d’huile d’olive" +
          "60 cl d’eau" +
          "sel, poivre ",
        preparation:
          "Épluchez et hachez l’oignon puis coupez les carottes en rondelles.\n\n" +
          "Dans une cocotte chauffez l’huile d’olive puis faites revenir l’oignon et les carottes pendant quelques minutes.\n\n" +
          "Ajoutez les chorizo coupé en morceaux et faites revenir.\n\n" +
          "Ensuite ajoutez les tomates, les lentilles, le bouillon cube, le sel et le poivre, \n\n" +
          "versez l’eau puis laissez cuire 40 à 45 minutes.\n\n" +
          "C est prêt a table!",
      },
      {
        titre: "OMELETTE DJIBOUTIENNE",
        paragraphe:
          "Avec cette recette, j’accompagne Sophie et salue avec elle les habitants de Djibouti ." +
          "Le jour de leur fête nationale le 27 juin,ce plat est rapide et healthy si on a la chance de trouver de bons oeufs bio fermiers" +
          "et des légumes bio de plein champs.",
        image: "images/omelette.jpg",
        ingredient:
          "Pelez les oignons, coupez-les en fines lamelles ou en dés et uisez-les doucement dans une poêle avec un peu d’huile." +
          "Lavez et pelez les tomates (peau peu digeste), coupez les en dés." +
          "Ajoutez-les dans la poêle et continuez la cuisson 2 ou 3 minutes." +
          "Battez les œufs en omelette, versez le piment et salez." +
          "Ajoutez-les dans la poêle et laissez cuire à feu vif le temps que les œufs soient cuits." +
          "Versez l’omelette dans des assiettes préchauffées à 85°. Proposez une salade si vous aimez.</p>",
        preparation:
          "Pelez les oignons, coupez-les en fines lamelles ou en dés et uisez-les doucement dans une poêle avec un peu d’huile." +
          "Lavez et pelez les tomates (peau peu digeste), coupez les en dés." +
          "Ajoutez-les dans la poêle et continuez la cuisson 2 ou 3 minutes." +
          "Battez les œufs en omelette, versez le piment et salez." +
          "Ajoutez-les dans la poêle et laissez cuire à feu vif le temps que les œufs soient cuits." +
          "Versez l’omelette dans des assiettes préchauffées à 85°. Proposez une salade si vous aimez.",
      },
      {
        titre:
          "Pommes de terre et gambas cuites dans une sauce tomate épicée, aillée et parfumée au basilic",
        paragraphe:
          "Pommes de terre et gambas cuites dans une sauce tomate épicée, aillée et parfumée au basilic.",
        image: "images/recette-de-pomme-de-terre.jpg",
        ingredient:
          "pour 6 personnes :" +
          "Gambas surgelée(s) : 24 pièce(s) " +
          "Pomme(s) de terre à chair ferme : 1 kg" +
          "Bouillon de crustacé : 90 cl" +
          "Vin blanc sec : 10 cl" +
          "Oignon(s) blanc(s) : 2 pièce(s)" +
          "Gousse(s) d'ail : 1 pièce(s)" +
          "Parmesan Parmigiano Reggiano : 50 g" +
          "Huile d'olive : 3 cl" +
          "Sel fin : 6 pincée(s)" +
          "Piment d'Espelette : 1 pincée(s)" +
          "Tomate(s) : 3 pièce(s)" +
          "Piment(s) oiseau : 0.5 pièce(s)" +
          "Basilic : 1 botte(s)",
        preparation:
          "Faire chauffer le fumet de crustacés dans une casserole." +
          "Éplucher les pommes de terre et les tailler en petits cubes." +
          "Ôter la tête des gambas et les décortiquer en prenant soin de laisser la queue intacte." +
          "Retirer ensuite le boyau à l'aide de la pointe d'un couteau." +
          "ETAPE 2" +
          "Éplucher et ciseler les oignons. Éplucher les tomates et les couper en 4, puis les épépiner et tailler la chair" +
          "en petits dés." +
          "Éplucher et dégermer la gousse d'ail." +
          "Retirer les pépins du 1/2 piment, puis le hacher finement." +
          "Effeuiller le basilic et le ciseler." +
          "ETAPE 3" +
          "Saisir rapidement le piment dans un wok avec de l'huile d'olive." +
          "Ajouter les oignons et l'ail, puis les faire suer avec une pincée de sel fin." +
          "Ajouter les dés de tomates et cuire pendant 2 min. Déglacer ensuite au vin blanc," +
          "puis ajouter les pommes de terre rincées et les mouiller avec le fumet." +
          "Laisser cuire à couvert jusqu'à ce que les pommes de terre soient fondantes (ajouter du bouillon autant de fois que nécessaire)." +
          "ETAPE 4" +
          "En fin de cuisson, ajouter les gambas et les cuire jusqu'à ce qu'elles soient uniformément roses." +
          "Terminer par le basilic ciselé et assaisonner le tout de sel et de piment d'Espelette." +
          "ETAPE 5Dresser dans des assiettes creuses." +
          "Décorer de copeaux de parmesan, puis disposer les gambas tout autour.",
      },
      {
        titre: "RECETTE DE LA PAELLA FIDEUA",
        paragraphe:
          "Les uns sont pour les fins (Fideo fino) affirmant que le plat en est plus savoureux," +
          "laissant la primeur au goût des poissons et fruits de mer... et le temps de cuisson moins long..." +
          "trop gourmands pour attendre ? Les autres, optant pour le plus épais (Fideo gordo) l'apprécient car ce vermicelle est creux," +
          "le fumet pénètre mieux et reste à l'intérieur ; un éclatement des saveurs en bouche. Il demande plus de fumet et un peu plus de cuisson. A vous de choisir ! .",
        image: "images/recette-de-la-paella.jpg",
        ingredient:
          "700 g de calamars " +
          "6 crevettes ou gambas" +
          "6 langoustines ou crevettes " +
          "300 g de moules " +
          "300 g de palourde " +
          "600 g de vermicelle de votre choix " +
          "2 belles tomates " +
          "1 poivron vert" +
          "2 gousses d'ail" +
          "Safran " +
          "1 cuillère à café de piment doux ou paprika" +
          "Sel, poivre " +
          "Vous pouvez également rajouter du poisson à chair ferme." +
          "Dans la paella faites cuire les crevettes ou gambas, les langoustines dans de l'huile d'olive bien chaude." +
          "Réservez-les. Dans la même huile faites rissoler le calamar coupé en morceaux, les tomates pelées et concassées," +
          "le poivron en lanières et l'ail haché. Faites réduire à feu doux." +
          "Versez le fumet, quand il commence à bouillir ajoutez les vermicelles, répartissez-les bien sur l'ensemble de la paella." +
          "Saupoudrez d'une bonne pincée de safran et laissez mijoter environ 6 minutes puis déposez les coquillages nettoyés, les crevettes, gambas, langoustines." +
          "Laissez cuire au moins 15 minutes, le bouillon doit s'être évaporé. Retirez votre paella du feu et laissez reposer 5 minutes pour que les vermilles s'imprègnent du bouillon de cuisson." +
          "Ce qui rend ces petites pâtes spéciales et goûteuses, c'est qu'on les fait griller à sec dans une poêle, en plusieurs lots, avant de les faire cuire dans un liquide." +
          "Cette étape leur donne un léger goût de noisette grillée franchement délicieux." +
          "Servez avec de l'aïoli ou un filet de citron.",
        preparation:
          " <h3>ETAPES DE LA PREPARATION</h3>" +
          "<h3> recette de la Fideuà</h3>" +
          "La veille, préparez votre fumet de poisson." +
          "Si vous n'avez pas envie ou le temps de le faire vous pouvez toujours opter pour un bouillon cube «fumet de poisson»" +
          "que vous n'aurez qu'à diluer dans de l'eau chaude." +
          "Réaliser un fumet de poisson" +
          "Pour faire 2 litres de fumet de poisson, il vous faut :" +
          "2 kg de petits poissons, avec queues et têtes" +
          "1 oignon" +
          "2 carottes" +
          "feuilles de laurier" +
          "sel" +
          "\n\n\n\n" +
          "<h3> Préparation du fumet de poisson</h3>" +
          "\n\n\n\n" +
          "<p>" +
          "Lavez puis coupez en morceaux, queues et têtes de poissons que vous déposerez dans une grande casserole." +
          "Coupez l'oignon et les carottes en morceaux ajoutez-les dans la casserole avec les feuilles de laurier et le sel." +
          "Recouvrez d'eau et assaisonnez. Portez à ébullition. Une mousse peut apparaître, pas de panique, c'est normal, écumez-la." +
          "Réduisez le feu et laissez cuire environ 45 minutes. Retirez du feu et laissez refroidir." +
          "A l'aide d'un chinois ou d'une passoire, filtrez le tout pour ne récupérer que le bouillon." +
          "Cela peut paraître un peu fastidieux mais le résultat est délicieusement incomparable, plus généreux en goût.",
      },
      {
        titre: "POULET AU ARACHIDE A L AFRICAINE",
        paragraphe:
          "Appelé aussi mafé, cette recette traditionnelle de la cuisine africaine ravira vos papilles et celles de vos invités !" +
          "Si vous souhaitez un plat qui change et que vous aimez le sucré -" +
          "salée cette recette de poulet aux arachides à l'africaine est faites pour vous." +
          "Composée simplement d'une sauce aux oignons, pâtes d'arachide",
        image: "images/pouet.jpg",
        ingredient:
          "1 lb (0,5 kg) de poitrines de poulet désossées sans peau\n\n" +
          "1 c. à soupe (15 ml) d'huile d’olive extra vierge\n\n" +
          "2 gousses d'ail,émincées\n\n" +
          "1 tasse (250 ml) d'oignons, coupés en dés\n\n" +
          "1/2 lb (0,3 kg) de champignons, tranchés\n\n" +
          "3 tasses (750 ml) de sauce pour pâtes marinara\n\n" +
          "1/4 tasse (60 ml) de demi-crème\n\n" +
          "2 c. à soupe (30 ml) de vinaigre balsamique\n\n" +
          "1/2 c. à thé (2,5 ml) de poivre de Cayenne ou flocons de piment fort\n\n" +
          "1/2 tasse (125 ml) de persil, frais, émincé\n\n" +
          "1 c. à soupe (15 ml) de romarin, frais, émincé\n\n" +
          "1 paquet de pâtes fusilli de blé entier\n\n" +
          "1 tasse (250 ml) de fromage mozzarella, partiellement écrémé, 16,5 % MG\n\n " +
          "1/4 tasse (60 ml) de fromage parmesan, râpé\n\n" +
          "15 olives Kalamata, dénoyautées\n\n",
      },
      {
        titre: "POULET AU FOUR ET PÂTE ROMARIN",
        paragraphe:
          "Romarin frais, formage parmesan et poulet : \n\n" +
          "ce sont les ingrédients parfaits pour créer les saveurs italiennes\n\n" +
          "classiques de ce plat de pâtes cuites au four.\n\n" +
          "Cette recette vous permettra de nourrir généreusement une famille de quatre,\n\n" +
          "et les restants seront encore meilleurs le lendemain ",
        image: "images/rosemary-past.jpg",
        ingredient:
          "1 lb (0,5 kg) de poitrines de poulet désossées sans peau\n\n" +
          "1 c. à soupe (15 ml) d'huile d’olive extra vierge\n\n" +
          "2 gousses d'ail,émincées\n\n" +
          "1 tasse (250 ml) d'oignons, coupés en dés\n\n" +
          "1/2 lb (0,3 kg) de champignons, tranchés\n\n" +
          "3 tasses (750 ml) de sauce pour pâtes marinara\n\n" +
          "1/4 tasse (60 ml) de demi-crème\n\n" +
          "2 c. à soupe (30 ml) de vinaigre balsamique\n\n" +
          "1/2 c. à thé (2,5 ml) de poivre de Cayenne ou flocons de piment fort\n\n" +
          "1/2 tasse (125 ml) de persil, frais, émincé\n\n" +
          "1 c. à soupe (15 ml) de romarin, frais, émincé\n\n" +
          "1 paquet de pâtes fusilli de blé entier\n\n" +
          "1 tasse (250 ml) de fromage mozzarella, partiellement écrémé, 16,5 % MG\n\n" +
          "1/4 tasse (60 ml) de fromage parmesan, râpé\n\n" +
          "15 olives Kalamata, dénoyautées",
        preparation:
          "Chauffer le four à 450 °F (230 °C). Couper les poitrines de poulet en petites bouchées.\n\n" +
          "Chauffer l’huile dans une casserole à fond épais à température moyenne élevée.\n\n Faire sauter les oignons, \n\n" +
          "l’ail et le poulet en agitant de temps à autre,\n\n" +
          "jusqu’à ce que le poulet soit cuit et légèrement bruni.\n\n " +
          "Ajouter les champignons, la sauce pour pâtes et la crème.\n\n" +
          "Amener à ébullition à température moyenne élevée, puis laisser mijoter pendant 10 minutes,\n\n" +
          "en agitant de temps à autre, jusqu’à ce que la sauce épaississe légèrement.\n\n" +
          "Ajouter dans la sauce en remuant le vinaigre balsamique, les olives dénoyautées hachées,\n\n" +
          "le poivre de cayenne, le persil et le romarin.\n\n" +
          "Cuire pour réchauffer, environ 5 minutes.\n\n" +
          "Plonger les pâtes de blé entier dans l’eau bouillante non salée et cuire jusqu’à consistance al dente \n\n" +
          "en suivant les directives sur la boîte. Cuire les pâtes un peu moins qu’en temps normal\n\n" +
          "puisqu’elles continueront de cuire dans le four.\n\n" +
          "Égoutter les pâtes et les ajouter à la sauce.\n\n" +
          "Vaporiser un plat de cuisson rectangulaire de 3 L d’un aérosol de cuisson sans gras.\n\n" +
          "Étendre les pâtes et la sauce dans le plat.\n\n" +
          "Ajouter la mozzarella et le parmesan sur les pâtes et saupoudrer de persil frais haché.\n\n" +
          "Mettre au four jusqu’à ce que le fromage soit doré, environ 15 minutes.",
      },
      {
        titre: "RECETTE DE RIZ AU CURRY ACCOMPAGNES DE PETITS LEGUMES",
        paragraphe:
          "Recette pour 4 personnes" +
          "Temps de préparation 20 minutes" +
          "Temps de cuisson 40 minutes",
        image: "images/riz-curry.jpg",
        ingredient:
          "200g Riz" +
          "1cuil. à café Curry" +
          "250g Champignons de Paris" +
          "100g Petits pois" +
          "2cuil. à soupe Huile" +
          "3gousses Ail" +
          "Sel",
        preparation:
          "Faites cuire le riz comme indiqué sur son emballage." +
          "Nettoyez les champignons et découpez-les en morceaux." +
          "Épluchez les gousses d’ail puis hachez-les." +
          "Versez l'huile dans une poêle au feu. Faites-y frire l’ail." +
          "Ajoutez les morceaux de champignons." +
          "Mélangez et salez selon votre goût." +
          "Au bout de 10 minutes, incorporez le riz cuit, les petits pois et le curry." +
          "Mélangez le tout et servez. ",
      },
      {
        titre: "SALADE AVOCAT MAIS",
        paragraphe:
          " Bonjour mes amour j'espère que vous allez bien, et que le week-end à très bien débuté.\n\n" +
          "Aujourd’hui comme recette je vous présenterez la salade a l avocat et au mais. ",
        image: "images/salade-avocat-mais.jpeg",
        ingredient:
          "Pour 4 personnes" +
          "Avocats : 2" +
          "Boîte de maïs : 1" +
          "Jus d'un demi citron : 1" +
          "Tomates cerises : 12" +
          "Olives noires: 12" +
          "Bouquet de basilic : 1/2" +
          "Piment rouge : 1/2" +
          "Sel" +
          "Poivre",

        preparation:
          "Épluchez l'avocat et coupez le en cubes." +
          "Lavez et égouttez le maïs." +
          "Coupez les tomates en 2 et les olives en rondelles." +
          "Ciselez le basilic et le piment rouge." +
          "Mélangez tous les ingrédients dans un saladier avant de servir. ",
      },
      {
        titre: "POULET SAUCE TOMATE",
        paragraphe:
          "Bonjour mes amour j'espère que vous allez bien, et que le week-end à très bien débuté." +
          "Aujourd’hui comme recette je vous présenterez le poulet a la sauce tomate .",
        image: "images/poulet-a-la-sauce-tomate.jpeg",
        ingredient:
          "4Blancs de poulet\n\n" +
          "400g Pulpe de tomates\n\n" +
          "2C.a.s de concentré de tomates\n\n" +
          "1Oignon\n\n" +
          "1gousse Ail\n\n" +
          "10cl Crème fraîche épaisse\n\n" +
          "C.a.s de paprika" +
          "2C.a.s de cumin" +
          "1Cube de bouillon de boeuf",
        preparation:
          "Épluchez l'oignon et l'ail, émincez l'oignon. \n\n" +
          "Découpez les blancs de poulet en morceaux et réservez.\n\n" +
          "Dans une cocotte, versez l'eau et délayez le cube de bouillon de bœuf à feu moyen.\n\n" +
          "Incorporez le concentré de tomates, remuez jusqu'à obtenir un mélange homogène." +
          "Retirez le zeste. Lissez la soupe au mixeur. Ajoutez le jus de l'orange.\n\n" +
          "Réchauffez sur feu doux en fouettant jusqu'à ébullition.\n\n" +
          "Rectifiez l'assaisonnement. Relevez d'une pointe de piment.\n\n" +
          "Accompagnez de crème fraîche.",
      },
      {
        titre: "RECETTE DE SOUPE DE BOEUF A L AFRICAINE",
        paragraphe:
          "Bonjour mes amour j'espère que vous allez bien, et que le week-end à très bien débuté." +
          "Aujourd’hui comme recette je vous présenterez du biékosseu au foutou." +
          "Plat typique ivoirien, la recette biékosseu qui signifie (sauce piment)" +
          "nous viens du Sud de la Côte D’ivoire plus précisément en pays Attié.",
        image: "images/boeuf-africain.jpg",
        ingredient:
          "Pour 3 personnes" +
          "5 poissons frais (carpe de préférence)" +
          "_6 tomates fraîches" +
          " _ Du piment frais" +
          "_ Des aubergines" +
          "_ De la tomate concentrée" +
          " _ Des cubes d’assaisonnements" +
          " _ Du persil" +
          " _ Un peu d’huile" +
          " _ Du sel" +
          "_ Du poivre " +
          "_ 6 bananes mûres" +
          " _ Du manioc" +
          "_ Une feuille d'attiéké",
        preparation:
          "Rôti de poisson (adala en langue Attié)" +
          "1) Nettoyez les condiments : piment, oignon, persil, ainsi que les tomates boules." +
          "Découpez les et écrasez les à l’aide d’un mixeur ou d’un talier." +
          "Une fois écrasée ajoutez y la tomate concentrée et deux cubes d’assaisonnements, du poivre et un peu d’eau." +
          "2) Lavez la feuille d'attiéké puis l’étaler dans la casserole, ajoutez y les poissons puis les condiments écrasés." +
          "Laissez mijoter au feu pendant 60min. À défaut de la feuille d’attiéké vous pouvez utiliser du papier aluminium." +
          "NB : Assurez vous de ne pas mettre assez d’eau car à la base le carpe est un poisson qui contient beaucoup d’eau." +
          "Si vous en prenez beaucoup vos poissons peuvent être réduit en pâte ." +
          ") Les 60 min écoulées, ajoutez y un peu d’huile puis laissez encore 10 min et c’est prêt." +
          "1) Épluchez le manioc et les couper en morceaux assez moyen. Épluchez aussi la banane, les fendre en deux et retirer l’intérieur qui contient les petits points noirs." +
          "Mettez le manioc et la banane dans une casserole. Assurez vous que le manioc soit en bas et les bananes au dessus." +
          "Ajoutez un peu de sel pour faciliter la cuisson du manioc . Cependant cela reste facultatif." +
          "Laissez au feu 45 min." +
          "2) Retirez la casserole du feu et renversez l’eau restante de la cuisson dans une autre casserole." +
          "3) Utilisez maintenant votre mortier, pilez d’abord la banane jusqu’à obtenir une pâte lisse." +
          "Ensuite le manioc pour obtenir une pâte lisse et homogène." +
          "4) Mélangez enfin les deux pâtes obtenues dans le mortier et les piler ensemble. " +
          "Réalisez maintenant des petits pains ovales ou des boules." +
          "La sauce piquante ( le biekosseu en langue attié)" +
          "1) Avec l’eau de cuisson du foutou recueilli ajoutez y les aubergines ainsi que les piments équeuter, sans oublier les boules de tomates et un oignon." +
          "Mettez au feu et laissez cuire 30 min." +
          "2) Retirez les condiments préparés et écrasez les en ajoutant un cube d’assaisonnement. " +
          "Renversez la pâte obtenu dans la casserole avec un peu d’eau et laissez bouillir à feu doux pendant 15 min." +
          "Voilà votre repas du jour est prêt vous pouvez servir." +
          "Le Foutou banane",
      },
      {
        titre: "SOUPE DE CAROTTE A L ORANGE",
        paragraphe: "",
        image: "images/soupe-de-carottes.jpg",
        ingredient:
          "Pour 3 personnes" +
          "600g Carottes" +
          "1Oignon pelé" +
          "2cuil. à soupe Huile d'olive" +
          "1Orange non traitée" +
          "0,5cuil. à café Sucre" +
          "Piment de Cayenne" +
          "Sel" +
          "Poivre",
        preparation:
          "Épluchez et râpez finement les carottes." +
          "Hachez l'oignon. Prélevez le zeste de l'orange." +
          "Faites fondre l'oignon avec l'huile chaude 3 min sur feu doux dans une casserole, puis ajoutez les carottes." +
          "Mélangez 5 min et versez 50 cl d'eau. Ajoutez le sucre et le zeste de l'orange, salez légèrement." +
          "Laissez cuire 15 min à couvert." +
          "Retirez le zeste. Lissez la soupe au mixeur. Ajoutez le jus de l'orange." +
          "Réchauffez sur feu doux en fouettant jusqu'à ébullition." +
          "Rectifiez l'assaisonnement. Relevez d'une pointe de piment." +
          "Accompagnez de crème fraîche. ",
      },
      {
        titre: "FEUILLES DE BLETTE FARCIE A LA VIANDE",
        paragraphe:
          " Bonjour mes amour j'espère que vous allez bien, et que le week-end à très bien débuté." +
          "Aujourd’hui comme recette je vous présenterez la recette de feuilles de blette " +
          "a la viande farcie.",
        image: "images/boeuf-africain.jpg",
        ingredient:
          "500g Viande hachée" +
          "300g Feuilles de blettes(+)" +
          "6Grandes belle feuilles" +
          "1Gros oignon" +
          "1Oeuf" +
          "1Verre de riz" +
          "2cuil. à soupe Fines herbes : menthe(persil, aneth)\n\n" +
          "1Pot de sauce tomate" +
          "1cuil. à soupe Concentré de tomate\n\n" +
          "2cuil. à soupe Huile d'olive\n\n" +
          "Sel",
        preparation:
          "Hachez les feuilles de blettes et les herbes." +
          "Faites revenir l'oignon émincé dans l'huile (1 cuil. à soupe)." +
          "Ajoutez les blettes et les herbes." +
          "Dans un saladier, mélangez la viande avec le riz cru, les herbes, l'oeuf." +
          "Lavez les 6 feuilles de blettes et coupez-les en 2." +
          "Mettre une boule de farce dans chaque feuille et roulez-les sur elles-mêmes." +
          "Versez l'huile restante, le concentré de tomate et un fond d'eau (2 cm) dans une sauteuse." +
          "Posez les farcis bien serrés dedans." +
          "Faites cuire à feu doux 30 min et à couvert." +
          "Servez accompagné de sauce tomate.",
      },
    ];

    await db_recette.createIndex({
      index: {
        fields: ["titre"],
      },
    });

    for (const item of recette) {
      var result = await db_recette.find({
        selector: { titre: item.titre },
      });
      console.log(result.docs.length);

      if (result.docs.length === 0) {
        console.log("ya pas recette");
        await db_recette.post(item);
      } else {
        console.log("ya recette");
      }
    }

    let res = await db_recette.find({
      selector: {},
    });

    console.log(res);
  },
  */

  async created() {
    let res = await db_recette.find({
      selector: {},
    });

    console.log(res.docs);
    this.recette = res.docs;
    console.log(this.recette);
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

<style scoped>
.test-modal .modal-dialog {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
}
</style>
