const gameArena = document.querySelector("[data-game-arena]");

function togglePlayer() {
	const uncheckedPlayer = document.querySelector(
		"input[type='radio']:not([checked])"
	);
	const checkedPlayer = document.querySelector(
		"input[type='radio'][checked]"
	);

	checkedPlayer.toggleAttribute("checked", false);
	uncheckedPlayer.toggleAttribute("checked", true);
}

function currentPlayer() {
	return (
		document.querySelector("input[type='radio'][checked]")?.value ??
		"player-1"
	);
}

// if certain box clicked then fill the value accordingly
gameArena.addEventListener("click", ({ target }) => {
	if (target.dataset.playerInput) return; // if alread filled the return

	switch (currentPlayer()) {
		// if player 1
		case "player-1":
			target.dataset.playerInput = "✖";
			break;

		// else player 2
		case "player-2":
			target.dataset.playerInput = "O";
			break;
	}

	togglePlayer(); // toggle players
});
