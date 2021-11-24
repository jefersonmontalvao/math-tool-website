const homeTemplate = 
`
<h1>Hello World</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sapiente temporibus consequuntur incidunt delectus in. Et facere eius quos delectus tempora? Adipisci nemo asperiores nisi minima praesentium ut iusto. Molestiae!</p>
`;

const divisionTemplate =
    `
    <div class="container site-main__container">
    <h1 class="site-main__headline">Quer calcular uma divisão?</h1>

    <form autocomplete="off" class="division-form">
        <div class="container form-division__input-container">
            <label for="dividend" class="division-form__label">Dividendo</label>
            <input type="number" name="dividend" placeholder="Qual número quer dividir?" id="dividend" class="division-form__dividend-input">
        </div>

        <div class="container form-division__input-container">
            <label for="divider" class="division-form__label">Divisor</label>
            <input type="number" name="divider" placeholder="Dividir por quanto?" id="divider" class="division-form__divider-input">
        </div>

        <div class="container form-division__input-container">
            <input type="button" value="Calcular" class="division-form__btn--blue">
        </div>
    </form>
    </div>
`;

export { divisionTemplate, homeTemplate };
