var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
export class AInput extends LitElement {
    constructor() {
        super(...arguments);
        this.placeholder = "";
        this.value = "";
    }
    render() {
        return html `
      <slot name="aPrefix"></slot>
      <input
        type="text"
        value=${this.value}
        placeholder=${this.placeholder}
        @input=${(e) => (this.value = e.target.value)}
      />
      <slot name="aSuffix"></slot>
    `;
    }
    firstUpdated() {
        this.updateSlots();
    }
    updateSlots() {
        const children = Array.from(this.children);
        children.forEach((child) => {
            if (child.hasAttribute("aPrefix")) {
                child.setAttribute("slot", "aPrefix");
            }
            else if (child.hasAttribute("aSuffix")) {
                child.setAttribute("slot", "aSuffix");
            }
        });
    }
}
AInput.styles = css `
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
__decorate([
    property({ type: String })
], AInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], AInput.prototype, "value", void 0);
customElements.define("a-input", AInput);
//# sourceMappingURL=a-input.js.map