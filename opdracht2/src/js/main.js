// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const Meldingscentrum = (function () {

    let meldingen = [];

    function handleAdd() {
        const input = document.querySelector("#notify_interval");
        const value = input.value.trim();
        if (value === "") return;

        addItem(value);
        render();
        input.value = "";
    }

    function addItem(value) {
        meldingen.push(value);
    }

    // function type(){
    //     const popup = document.querySelector("#notify_popup")
    //     const email = document.querySelector("#notify_email")
    //     let message = ""
    //
    //     return message;
    // }

    function render() {
        const list = document.querySelector("#notify_output");
        list.innerHTML = meldingen
            .map(item => `<li class="list-group-item d-flex justify-content-between shadow-sm p-2"><p>${type("message")}</p> <p>${item} minuten</p></li>`)
            .join("");
    }

    return {
        handleAdd
    };

})();

document
    .querySelector("#btn_notify_save")
    ?.addEventListener("click", Meldingscentrum.handleAdd);
