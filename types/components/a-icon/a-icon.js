var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, svg } from "lit";
import { property } from "lit/decorators.js";
import { applyThemeVariables, themeColors } from "../../styles/themes";
export class AIcon extends LitElement {
    constructor() {
        super();
        this.name = "heart";
        this.color = "var(--theme-primary)";
        this.size = 20;
        applyThemeVariables();
    }
    updated() {
        const resolvedColor = themeColors()[this.color] || this.color;
        this.style.setProperty("--icon-size", `${this.size}px`);
        this.style.setProperty("--icon-color", resolvedColor);
    }
    render() {
        return svg `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 24 24"
        fill="var(--icon-color)"
      >
        ${this.getIconPath(this.name)}
      </svg>
    `;
    }
    getIconPath(name) {
        const icons = {
            search: svg `<path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79l5 4.99L20.49 19l-4.99-5zM6.5 11a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>`,
            star: svg `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.91-1L12 2z"/>`,
            heart: svg `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>`,
        };
        return icons[name] || svg ``;
    }
}
AIcon.styles = css `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: var(--icon-size, 24px);
      height: var(--icon-size, 24px);
      fill: var(--icon-color);
    }
  `;
__decorate([
    property({ type: String })
], AIcon.prototype, "name", void 0);
__decorate([
    property({ type: String })
], AIcon.prototype, "color", void 0);
__decorate([
    property({ type: Number })
], AIcon.prototype, "size", void 0);
customElements.define("a-icon", AIcon);
//# sourceMappingURL=a-icon.js.map