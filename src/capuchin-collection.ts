import { Capuchin } from './capuchin';
import { CapuchinNode } from './capuchin-node';

/**
 * An array of CapuchinNodes
 */
export class CapuchinCollection<T extends Array<CapuchinNode>> extends Array<CapuchinNode> {

    private static __foreach = Array.prototype.forEach;

    constructor(public selector: string, public context: HTMLElement | Document = CapuchinNode.context) {
        super();

        if (CapuchinNode.context === undefined || CapuchinNode.context === null) {
            console.warn('Capuchin: Could not determine default context, please set CapuchinNode.context manually before usage');
        }
    }

}
