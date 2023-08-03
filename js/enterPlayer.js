import { getQuery }     from "./utils/getQuery.js";
import { Player }       from "./player.js";
import mySettings       from "./settings.js";


const form             = getQuery(mySettings.EnterPlayer.Form.ID);
const player1InputForm = getQuery(mySettings.EnterPlayer.Form.player1InputFormIDSelector);
const player2InputForm = getQuery(mySettings.EnterPlayer.Form.player2InputFormIDSelector);



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const player1Value = player1InputForm.value.toUpperCase();
    const player2Value = player2InputForm.value.toUpperCase();

    const player1  = new Player(player1Value);
    const player2  = new Player(player2Value);

    player1.setName(player1Value);
    player2.setName(player2Value);

    player1.save();
    player2.save();

    localStorage.setItem("player1", player1.name);
    localStorage.setItem("player2", player2.name);

    document.location.href = mySettings.Pages.avatarPage;
})
