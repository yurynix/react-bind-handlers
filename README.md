[![Build Status](https://travis-ci.org/fiolkaf/osync.svg?branch=master)](https://travis-ci.org/fiolkaf/react-bind-handlers)
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

By default all methods with ```handle*``` prefix will autobind to ```this```

## How to use:

Install:
```
npm i react-bind-handlers
```

Import and use:
```
import bindHandlers from 'react-bind-handlers';
class Component extends React.Component {}
export default bindHandlers(Component);
```

```
import bind from 'react-bind-handlers';
class Component extends React.Component {}
export default bind(regExp)(Component);
```
