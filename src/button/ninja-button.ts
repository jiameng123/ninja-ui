import { LitElement, html, customElement } from 'lit-element';
/**
 * Behavior that highlights stuff.
 *
 * @polymerBehavior
 */
@customElement("ninja-button")
export default class Button extends LitElement {
    render() {
        return html`
        <button>Hello world! From my-element</button>
    `;
    }
}



