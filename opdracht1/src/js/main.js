// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const Tijdregistratie = (function () {

    let count = 0;

    function add(amount) {
        count += amount;
        render();
    }

    function reset() {
        count = 0;
        render();
    }

    function render() {
        document.querySelector("#time_display").textContent = count;
    }

    return {
        add,
        reset
    };

})();

// knoppen koppelen
document
    .querySelector("#btn_brief")
    .addEventListener("click", () => Tijdregistratie.add(7));

document
    .querySelector("#btn_shift")
    .addEventListener("click", () => Tijdregistratie.add(33));

document
    .querySelector("#btn_zero")
    .addEventListener("click", Tijdregistratie.reset);

