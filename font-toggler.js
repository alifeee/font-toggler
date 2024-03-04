class FontToggler extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const div = document.createElement("div");
    const slot = document.createElement("slot");

    div.appendChild(slot);

    this.shadowRoot.appendChild(div);

    let stylesheets = document.styleSheets;
    let rules;
    for (let i = 0; i < stylesheets.length; i++) {
      let stylesheet = stylesheets[i];
      if (stylesheet.href && stylesheet.href.includes("fonts.css")) {
        rules = stylesheet.cssRules;
      }
    }
    // loop over CSSStyleRules and collect selectorText
    let selectors = [];
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      if (rule instanceof CSSStyleRule) {
        // remove leading dot
        let selector = rule.selectorText.slice(1);
        selectors.push(selector);
      }
    }

    let interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * selectors.length);
      // remove final class and add new class
      div.classList = "";
      div.classList.add(selectors[randomIndex]);
    }, 1000);
  }
}

customElements.define("font-toggler", FontToggler);
