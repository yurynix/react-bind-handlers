# react-bind-handlers
### Class decorator which binds class methods to instance, so ```this```  always refers to an instance

#### Allows to avoid repetitive ```bind(this)``` in React component constructor:
```
class Component extends React.Component {
    constructor() {
        this.handleOpenBtnTap = this.handleOpenBtnTap.bind(this);
        this.handleCloseBtnTap = this.handleCloseBtnTap.bind(this);
        this.handleMenuItemTap = this.handleMenuItemTap.bind(this);
        ...
    }
}
```
becomes:
```
class Component extends React.Component {
    ...
}

export default bindHandlers(Component);
```

By default all methods with ```bind*``` prefix will autobind to ```this```

## How to use:

Install:
```
npm i react-bind-handlers
```

Import:
```
import bindHandlers from 'react-bind-handlers';
```

Use:
```
class Component extends React.Component {}
export default bindHandlers(Component);

// you can specify regexp selector for handler methods
export default bindHandlers(Component, regexp);
```
