var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { applyThemeVariables, themeColors } from "../../styles/themes";
export class AButton extends LitElement {
    constructor() {
        super();
        this.background = "var(--theme-primary)";
        this.color = "var(--theme-light)";
        applyThemeVariables();
    }
    updated() {
        const resolvedBackground = themeColors()[this.background] || this.background;
        const resolvedColor = themeColors()[this.color] || this.color;
        this.style.setProperty("--main-background", resolvedBackground);
        this.style.setProperty("--main-color", resolvedColor);
    }
    firstUpdated() {
        this.updateSlots();
    }
    updateSlots() {
        this.querySelectorAll("[aPrefix], [aSuffix]").forEach((child) => {
            if (child.hasAttribute("aPrefix")) {
                child.setAttribute("slot", "aPrefix");
            }
            else if (child.hasAttribute("aSuffix")) {
                child.setAttribute("slot", "aSuffix");
            }
        });
    }
    render() {
        return html `
      <button @click=${this._onClick}>
        <slot name="aPrefix"></slot>
        <slot></slot>
        <slot name="aSuffix"></slot>
      </button>
    `;
    }
    _onClick() { }
}
AButton.styles = css `
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
__decorate([
    property({ type: String })
], AButton.prototype, "background", void 0);
__decorate([
    property({ type: String })
], AButton.prototype, "color", void 0);
customElements.define("a-button", AButton);
//# sourceMappingURL=a-button.js.map