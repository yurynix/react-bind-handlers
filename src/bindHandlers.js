export function bind(regexp) {
    return target => {
        const keys = Object.getOwnPropertyNames(target.prototype);
        const handlerNames = keys.filter(key => key.match(regexp));

        class Component extends target {
            constructor(props) {
                super(props);
                handlerNames.forEach(handlerName => this[handlerName] = this[handlerName].bind(this));
            }
        }

        return Component;
    };
}

export function bindHandlers(target) {
    return bind(/^handle/)(target);
}
