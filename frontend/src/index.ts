import { LitElement, html, css } from 'lit';
import './components/Part';

export class MyElement extends LitElement {
  static styles = css`p { color: red }
              other-part {color: blue}`;
  render() {
    return html`<p>
        Hello from Lit + TypeScript!+ Voilà!!!
        <other-part></other-part>
    </p>`;
  }
}

customElements.define('my-element', MyElement);
