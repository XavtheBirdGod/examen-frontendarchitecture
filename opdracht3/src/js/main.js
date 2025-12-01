// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
class TeamPing {
    static instance;


    constructor(){
        if(TeamPing.instance){
            return TeamPing.instance;
        }
        this.logs = [];
        TeamPing.instance = this;
    }

    log(name, pings){
        const entry = {
            name: document.querySelector("#team_name").value,
            pings: document.querySelector("#team_value").value,
            totalPings
        };
        this.logs.push(entry)
        this.render();
    }

    render() {
        event.preventDefault()

        const list = document.querySelector("#log_list")
        if(!list) return;

        list.innerHTML = this.logs
            .map(log => `
             <li class="list-group-item d-flex justify-content-between">
                  <span>${log.name}</span>
                  <span>${log.pings}</span>
               </li>
            `)
            .join("")


        const totalList = document.querySelector("#totals_list")
        if(!list) return;

        list.innerHTML = this.logs
            .map(log => `
             <li class="list-group-item d-flex justify-content-between">
                  <span>${log.name}</span>
                  <span>${log.totalPings}</span>
               </li>
            `)
            .join("")
    }
}
const Logger = new TeamPing();

document
    .querySelector("#btn_send")
    ?.addEventListener("click", () => Logger.log())