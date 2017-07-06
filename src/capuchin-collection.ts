import { Capuchin } from './capuchin';

/**
 * An array of HTMLElements, with convenience methods
 */
export class CapuchinCollection<T extends Array<HTMLElement | Document>> extends Array<HTMLElement | Document> {

    /**
     * The default context to search in
     */
    public static defaultContext: HTMLElement | Document = document;

    // Keep local copies of Array methods
    private static __foreach = Array.prototype.forEach;

    constructor(public selector: string, public context: HTMLElement | Document = CapuchinCollection.defaultContext) {
        super();

        if (CapuchinCollection.defaultContext === undefined || CapuchinCollection.defaultContext === null) {
            console.warn('Capuchin: Could not determine default context, please set CapuchinCollection.context manually before usage');
        }
    }

}
