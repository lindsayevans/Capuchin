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

    /**
     * Checks if any element in the collection has the CSS class `name`
     */
    public hasClass(name: string): boolean {

        let hasClass = false;

        this.forEach(element => {
            if (element.classList.contains(name)) {
                hasClass = true;
            }
        });

        return hasClass;
    }

    /**
     * Adds CSS class `name` to all elements in collection
     */
    public addClass(name: string)
        : CapuchinCollection<T> {

        this.forEach(element => {
            element.classList.add(name);
        });

        return this;
    }

    /**
     * Removes CSS class `name` from all elements in collection
     */
    public removeClass(name: string)
        : CapuchinCollection<T> {

        this.forEach(element => {
            element.classList.remove(name);
        });

        return this;
    }

    /**
     * Toggles the CSS class `name` on all elements in collection
     */
    public toggleClass(name: string)
        : CapuchinCollection<T> {

        this.forEach(element => {
            element.classList.toggle(name);
        });

        return this;
    }

    /**
     * Listens for event `type` on all elements in collection
     */
    public on<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, useCapture?: boolean)
        : CapuchinCollection<T> {

        this.forEach(element => {
            element.addEventListener(type, listener, useCapture);
        });

        return this;
    }

    /**
     * Listens for event `type` on all elements in collection
     */
    public off<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, useCapture?: boolean)
        : CapuchinCollection<T> {

        this.forEach(element => {
            element.removeEventListener(type, listener, useCapture);
        });

        return this;
    }

    /**
     * Triggers the event `type` on all elements in collection
     * @param data - Optional data to pass to the event handler
     */
    public trigger<K extends keyof DocumentEventMap>(type: K, data?: any)
        : CapuchinCollection<T> {

        // FIXME: For some reason Event.detail is coming through as null in JSDOM
        let event = new CustomEvent(type, data);

        this.forEach(element => {
            element.dispatchEvent(event);
        });

        return this;
    }

}
