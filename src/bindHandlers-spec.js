import expect from 'unexpected';
import { bindHandlers, bind } from './bindHandlers';

describe('bindHandlers class decorator', () => {

    class Component {
        constructor() {
            this.value = 'test';
        }

        getValue() {
            return this ? this.value : null;
        }

        handle() {
            return this ? this.value : null;
        }

        handleGetValue() {
            return this ? this.value : null;
        }
    }

    function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
    }
    Person.prototype.handleSpeech = function() {
        return this ? `${this.firstName} ${this.lastName} speaking` : null; 
    }

    it('binds component handler', () => {
        const AutoBoundComponent = bindHandlers(Component);
        const { handle, handleGetValue } = new AutoBoundComponent();
        expect(handleGetValue(), 'to equal', 'test');
        expect(handle(), 'to equal', 'test');
    });

    it('binds component handler using regex', () => {
        const AutoBoundComponent = bind(/\w/)(Component);
        const { handle, handleGetValue, getValue } = new AutoBoundComponent();
        expect(handleGetValue(), 'to equal', 'test');
        expect(handle(), 'to equal', 'test');
        expect(getValue(), 'to equal', 'test');
    });

    it('leaves non handlers unbound', () => {
        const { getValue } = new Component();
        expect(getValue(), 'to equal', null);
    });

    it('should handle multipe constructor parameters', () => {
        const AutoBoundComponent = bind(/\w/)(Person);
	const { handleSpeech } = new AutoBoundComponent('Testy', 'Test');
	expect(handleSpeech(), 'to equal', 'Testy Test speaking');
    });
});
