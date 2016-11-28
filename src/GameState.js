// @flow

import type { PlayerDescriptor } from "./PlayerDescriptor";

type Mapish<V> = {
	[key: string]: ?V
};

export type GameState = {
	players: Mapish<PlayerDescriptor>
};