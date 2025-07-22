$(document).ready(function () {
  $('#menu_deroulant').click(function () {
    // Si le menu existe déjà
    if ($('#menu_lateral').length > 0) {
      $('#menu_lateral').toggle('slide', { direction: 'left' }, 300);
    } else {
      $('body').append(`
        <div id="menu_lateral" style="
          position: fixed;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          background-color: #fff;
          box-shadow: 2px 0 10px rgba(0,0,0,0.2);
          z-index: 999;
          padding: 20px;
          display: none;
        ">
          <button id="fermer_menu" style="
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
          ">&times;</button>
          <h3>Menu</h3>
          <ul style="list-style: none; padding: 0;">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Produits</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      `);

      // Nécessite jQuery UI pour slide effect
      $('#menu_lateral').show('slide', { direction: 'left' }, 300);

      // Gérer le clic sur le bouton fermer
      $(document).on('click', '#fermer_menu', function () {
        $('#menu_lateral').hide('slide', { direction: 'left' }, 300);
      });
    }
  });
});
