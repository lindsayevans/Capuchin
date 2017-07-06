import { CapuchinNode } from './capuchin-node';
import { CapuchinCollection } from './capuchin-collection';

/**
 * Retrieves all HTML elements matching `selector`
 */
export function Capuchin(selector: string, context: HTMLElement | Document = CapuchinNode.context) {
    let collection = new CapuchinCollection(selector, context);

    let elements = Array.from(context.querySelectorAll(selector)) as Array<HTMLElement | Document>;
    elements.forEach(element => {
        collection.push(new CapuchinNode(element, selector, context));
    });

    return collection;
}

/**
 * Mapping Capuchin to $ for a more jQuery-like experience
 */
export const $ = Capuchin;
