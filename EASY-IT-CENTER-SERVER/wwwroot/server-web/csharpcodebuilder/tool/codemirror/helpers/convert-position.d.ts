import type { Text } from '@codemirror/state';
import type { ServerPosition } from '../../protocol/messages';
export declare const getEnd: (start: ServerPosition, length: number) => ServerPosition;
export declare const getLength: (start: ServerPosition, end: ServerPosition) => number;
export declare const convertToServerPosition: (doc: Text, position: number) => ServerPosition;
export declare const convertFromServerPosition: (doc: Text, position: ServerPosition) => number;
