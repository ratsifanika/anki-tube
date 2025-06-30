import { LitElement, html, css } from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('main-app')
export class MainApp extends LitElement {
  static styles = css`p { color: red }
              other-part {color: blue}`;
  render() {
    return html`<p>
        Hello I'm the main app!!!
        <other-part></other-part>
    </p>`;
  }
}
