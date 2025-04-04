import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { applyThemeVariables, themeColors } from "../../styles/themes";

export class AButton extends LitElement {
  @property({ type: String }) background = "var(--theme-primary)";
  @property({ type: String }) color = "var(--theme-light)";

  constructor() {
    super();
    applyThemeVariables();
  }

  static override styles = css`
    :host {
      display: inline-block;
    }

    button {
      border: none;
      padding: 10px 16px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: var(--main-background);
      color: var(--main-color);
    }

    ::slotted([aPrefix]),
    ::slotted([aSuffix]) {
      display: flex;
      align-items: center;
    }
  `;

  override updated() {
    const resolvedBackground =
      themeColors()[this.background] || this.background;
    const resolvedColor = themeColors()[this.color] || this.color;

    this.style.setProperty("--main-background", resolvedBackground);
    this.style.setProperty("--main-color", resolvedColor);
  }

  override firstUpdated() {
    this.updateSlots();
  }

  updateSlots() {
    this.querySelectorAll("[aPrefix], [aSuffix]").forEach((child) => {
      if (child.hasAttribute("aPrefix")) {
        child.setAttribute("slot", "aPrefix");
      } else if (child.hasAttribute("aSuffix")) {
        child.setAttribute("slot", "aSuffix");
      }
    });
  }

  override render() {
    return html`
      <button @click=${this._onClick}>
        <slot name="aPrefix"></slot>
        <slot></slot>
        <slot name="aSuffix"></slot>
      </button>
    `;
  }

  private _onClick() {}
}

customElements.define("a-button", AButton);
