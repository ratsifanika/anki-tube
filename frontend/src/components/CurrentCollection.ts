import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('current-collection')
export class CurrentCollection extends LitElement {

  static styles = [
    css`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 600px;
        padding: 20px;
        box-sizing: border-box;
      }

      h1 {
        text-align: center;
        color: #202124;
        font-size: 24px;
        margin-bottom: 20px;
      }
    `
  ];

  render() {
    return html`
      <div class="container">
        <h1>Current Collection</h1>
        <slot></slot>
      </div>
    `;
  }
}