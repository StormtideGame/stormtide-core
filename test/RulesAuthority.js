// @flow

import { expect } from "chai";
import { GameDescriptor, Game, RulesAuthority } from "stormtide-core";

describe("RulesAuthority", () => {
	it("should be constructable", () => {
		const settings = new GameDescriptor();
		const rules = new RulesAuthority(settings);

		expect(rules).to.be.ok;
	});

	it("should throw on getInitialState", () => {
		const settings = new GameDescriptor();
		const game = new Game(settings);
		const rules = new RulesAuthority();

		const using = () => {
			rules.getInitialState(game);
		};

		expect(rules.getInitialState).to.be.a("function");
		expect(using).to.throw(Error);
	});

	it("should throw on processAction", () => {
		const settings = new GameDescriptor();
		const rules = new RulesAuthority(settings);

		const using = () => {
			// Totally incorrect usage of processAction
			const any = (null: any);
			rules.processAction(any, any);
		};

		expect(rules.processAction).to.be.a("function");
		expect(using).to.throw(Error);
	});
});