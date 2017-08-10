import type { GameDescriptor } from "./types";
import GameInstance from "./GameInstance";

describe("GameInstance", () => {
	it("should be constructable", () => {
		const descriptor: GameDescriptor = {
			players: {
				a: {
					id: "a",
				},
				b: {
					id: "b",
				},
			},
		};

		 new GameInstance(descriptor);
	});
});