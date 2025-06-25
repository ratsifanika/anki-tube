import { LitElement, html, css } from 'lit';
import {customElement} from 'lit/decorators';
import './components/Part';

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css`p { color: red }
              other-part {color: blue}`;
  render() {
    return html`<p>
        Hello from Lit + TypeScript!+ Voilà!!!
        <other-part></other-part>
    </p>`;
  }
}
