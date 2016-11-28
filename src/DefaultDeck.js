// @flow

import type { CardDescriptor } from "./CardDescriptor";
import type { DeckDescriptor } from "./DeckDescriptor";

const grizzlyBears: CardDescriptor = {
	name: "Grizzly Bears"
};

const forest: CardDescriptor = {
	name: "Forest"
};

const cards = [];

for (let i = 0; i < 40; i++) {
	cards.push(grizzlyBears);
}

for (let i = 0; i < 20; i++) {
	cards.push(forest);
}

const deck: DeckDescriptor = {
	cards
};

export default deck;