import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('collection-list')
export class CollectionList extends LitElement {

    static styles = css`
        /* Barre latérale gauche */
         ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin-bottom: 10px;
        }

        a {
            text-decoration: none;
            color: #333;
            padding: 2px 10px;
            display: block;
            border-radius: 5px;
            transition: background-color 0.2s;
            white-space: nowrap; /* Empêche le texte de se casser sur plusieurs lignes */
            overflow: hidden;
            text-overflow: ellipsis; /* Ajoute des points de suspension si le texte est trop long */
        }

        a:hover {
            background-color: #e6e6e6;
        }

        `;

    render() {
        return html`
            <ul>
                <li part="list-item"><a href="#">Collection 1</a></li>
                <li part="list-item"><a href="#">Collection 2</a></li>
                <li part="list-item"><a href="#">Collection 3</a></li>
            </ul>
        `;
    }
}