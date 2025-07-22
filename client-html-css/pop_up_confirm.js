$(document).ready(function() {
  $(".basket").click(function() {
    // Créer la pop-up si elle n'existe pas
    if ($("#popup-confirmation").length === 0) {
      $("body").append(`
        <div id="popup-confirmation" style="
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #009688;
          color: white;
          padding: 15px 25px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 1000;
          font-weight: bold;
          display: none;
        ">
          Produit ajouté au panier !
        </div>
      `);
    }

    // Afficher la pop-up
    $("#popup-confirmation")
      .stop(true, true)
      .fadeIn(200)
      .delay(1500)
      .fadeOut(600);

    // Mise à jour du bouton
    $(this).text("Ajouté ✔").css("background-color", "#009688");
  });
});
