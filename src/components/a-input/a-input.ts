import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

export class AInput extends LitElement {
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";

  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px;
      gap: 4px;
    }

    ::slotted([aPrefix]),
    ::slotted([aSuffix]) {
      display: flex;
      align-items: center;
    }

    input {
      border: none;
      outline: none;
      flex: 1;
      font-size: 16px;
    }
  `;

  override render() {
    return html`
      <slot name="aPrefix"></slot>
      <input
        type="text"
        value=${this.value}
        placeholder=${this.placeholder}
        @input=${(e: Event) =>
          (this.value = (e.target as HTMLInputElement).value)}
      />
      <slot name="aSuffix"></slot>
    `;
  }

  override firstUpdated() {
    this.updateSlots();
  }

  updateSlots() {
    const children = Array.from(this.children);

    children.forEach((child) => {
      if (child.hasAttribute("aPrefix")) {
        child.setAttribute("slot", "aPrefix");
      } else if (child.hasAttribute("aSuffix")) {
        child.setAttribute("slot", "aSuffix");
      }
    });
  }
}

customElements.define("a-input", AInput);
