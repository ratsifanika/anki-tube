import {LitElement, html} from 'lit'

export class Part extends LitElement
{
    render() {
        return html `<div>coucou I'm part</div>`;
    }
}

customElements.define('other-part', Part);