import type { PartData } from '../protocol/messages';
type Options<TPartData> = {
    splitLinesToSections?: boolean;
    getExtraClassNames?: ((part: TPartData) => ReadonlyArray<string>) | undefined;
};
export declare const renderPartsTo: <TPartData extends PartData>(parent: HTMLElement, parts: readonly TPartData[], { splitLinesToSections, getExtraClassNames }?: Options<TPartData>) => void;
export declare const renderParts: <TPartData extends PartData>(parts: readonly TPartData[], options?: Options<TPartData>) => HTMLElement;
export {};
