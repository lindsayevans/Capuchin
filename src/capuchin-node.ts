import { Capuchin } from './capuchin';
import { CapuchinCollection } from './capuchin-collection';

/**
 * A wrapper around HTMLElement
 */
export class CapuchinNode<T = HTMLElement | Document> extends HTMLElement {

    public static context: HTMLElement | Document = document;

    constructor(public element: HTMLElement | Document, public selector: string, public context: HTMLElement | Document = CapuchinNode.context) {
        super();
    }

}
