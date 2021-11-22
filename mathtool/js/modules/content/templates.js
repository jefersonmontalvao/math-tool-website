let divisionTemplate =
    `<div class="division-input-block">
        <label for="division-form" class="division-input-block__label">Insira os números abaixo:</label>

        <form id="division-form" class="division-form division-input-block__division-form" autocomplete="off">
            <label for="input-dividend" class="division-form__label">Dividendo:</label>
            <input type="number" id="input-dividend" placeholder="Número Dividendo..." class="division-form__input division-form__dividend">

            <label for="input-divider" class="division-form__label">Divisor:</label>
            <input type="number" id="input-divider" placeholder="Número Divisor..." class="division-form__input division-form__divider">

            <input type="button" value="Calcular" class="division-form__input division-form__btn-calculate">
        </form>
    </div>`;

export { divisionTemplate };
