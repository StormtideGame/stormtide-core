// @flow

import { expect } from "chai";
import { CardDescriptor, DeckDescriptor } from "stormtide-core";

describe("DeckDescriptor", () => {
	it("should be instantiable with reasonable defaults", () => {
		const cards = [
			new CardDescriptor({
				name: "Storm Crow"
			})
		];

		const deck = new DeckDescriptor({
			cards
		});

		expect(deck).to.be.ok;
		expect(deck.cards).to.include.all(cards[0]);
	});
});