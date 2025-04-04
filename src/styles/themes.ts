export function applyThemeVariables() {
  document.documentElement.style.setProperty("--theme-primary", "#0054e9");
  document.documentElement.style.setProperty("--theme-secondary", "#0163aa");
  document.documentElement.style.setProperty("--theme-tertiary", "#6030ff");
  document.documentElement.style.setProperty("--theme-success", "#2dd55b");
  document.documentElement.style.setProperty("--theme-warning", "#ffc409");
  document.documentElement.style.setProperty("--theme-error", "#b00020");
  document.documentElement.style.setProperty("--theme-dark", "#2f2f2f");
  document.documentElement.style.setProperty("--theme-light", "#f6f8fc");
}

export function themeColors(): Record<string, string> {
  return {
    primary: "var(--theme-primary)",
    secondary: "var(--theme-secondary)",
    tertiary: "var(--theme-tertiary)",
    success: "var(--theme-success)",
    warning: "var(--theme-warning)",
    error: "var(--theme-error)",
    dark: "var(--theme-dark)",
    light: "var(--theme-light)",
  };
}
