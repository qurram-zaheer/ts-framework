export type Callback = () => void;

export class Eventing {
    events: { [key: string]: [Callback] } = {};

    on = (eventName: string, callback: Callback): void => {
        let initArray: [Callback] = [callback];

        const handlers = this.events[eventName] || initArray;
        handlers.length < 1 ? null : handlers.push(callback);

        this.events[eventName] = handlers;
    };

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length < 1) {
            return;
        }

        handlers.forEach((callback) => callback());
    };
}
