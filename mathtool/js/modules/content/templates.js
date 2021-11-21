let divisionTemplate =
    '<div class="division-input-block">' +
    '   <label for="division-form" class="division-input-block__label">Insira os números abaixo:</label>' +
    '\n' +
    '   <form id="division-form" class="division-form division-input-block__division-form" autocomplete="off">' +
    '       <label for="input-dividend" class="division-form__label">Dividendo:</label>' +
    '       <input type="text" id="input-dividend" placeholder="Número Dividendo..." class="division-form__input division-form__dividend">' +
    '\n' +
    '       <label for="input-divider" class="division-form__label">Divisor:</label>' +
    '       <input type="text" id="input-divider" placeholder="Número Divisor..." class="division-form__input division-form__divider">' +
    '\n' +
    '       <input type="button" value="Calcular" class="division-form__input division-form__btn-calculate">' +
    "   </form>" +
    "</div>";

export { divisionTemplate };
