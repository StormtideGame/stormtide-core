// @flow

import { expect } from "chai";

import {
	Game,
	GameDescriptor,
	DefaultDeck
} from "stormtide-core";

import type {
	PlayerDescriptor
} from "stormtide-core";

describe("Scenario: Game Start", () => {
	const settings = new GameDescriptor();

	const player1: PlayerDescriptor = {
		deck: DefaultDeck
	};
	const player2: PlayerDescriptor = {
		deck: DefaultDeck
	};

	settings.players = [player1, player2];

	const game = new Game(settings);
	game.start();

	const playerState1 = game.state.playerTurnOrder
		.map(v => game.state.players[v])
		.filter(v => v != null)
		.find(player => player && player.descriptor === player1);

	it("should have the right players", () => {
		expect(Object.keys(game.state.players)).to.have.lengthOf(2);
	});

	// This will change with the addition of pre-game actions
	it("should give turn and priority to player 1 on untap step", () => {
		expect(playerState1).to.be.ok;

		if (!playerState1) {
			return;
		}

		expect(game.state.turn).to.equal(playerState1.id);
		expect(game.state.priority).to.equal(playerState1.id);
		expect(game.state.phase).to.equal("Untap");
	});
});