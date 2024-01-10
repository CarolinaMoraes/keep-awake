import NoSleep from "./nosleep/nosleep.js";

let heroSection: HTMLElement | null = null;
let navbar: HTMLElement | null = null;
let highlightTexts: HTMLElement[] | null = null;
let statusText: HTMLElement | null = null;
let favicon: HTMLElement | null = null;

let nosleep = new NoSleep();

function changeSwitch(event: Event): void {
  const { target } = event;
  if (target && "checked" in target && typeof target.checked === "boolean") {
    const { checked } = target;

    checked ? nosleep.enable() : nosleep.disable();

    changeBackground(checked);
    changeStatusText(checked);
    changeFavicon(checked);
  }
}

function changeBackground(checked: boolean): void {
  if (heroSection && navbar && highlightTexts) {
    if (checked) {
      addRemoveClassesOfMultipleElements({
        toAdd: {
          "background-enabled": [navbar, heroSection],
          "highlight-text": highlightTexts,
        },
        toRemove: {
          "background-disabled": [navbar, heroSection],
          "secondary-highlight-text": highlightTexts,
        },
      });
    } else {
      addRemoveClassesOfMultipleElements({
        toAdd: {
          "background-disabled": [navbar, heroSection],
          "secondary-highlight-text": highlightTexts,
        },
        toRemove: {
          "background-enabled": [navbar, heroSection],
          "highlight-text": highlightTexts,
        },
      });
    }
  }
}

function changeStatusText(checked: boolean): void {
  if (statusText) {
    statusText.innerText = checked ? "Awake" : "Almost sleepy";
  }
}

function changeFavicon(checked: boolean): void {
  if (favicon && "href" in favicon) {
    favicon.setAttribute(
      "href",
      checked ? "./favicon/favicon_green.ico" : "./favicon/favicon_blue.ico"
    );
  }
}

interface ToAddAndRemove {
  [key: string]: HTMLElement[];
}

interface ClassesToAddAndRemove {
  toAdd?: ToAddAndRemove;
  toRemove?: ToAddAndRemove;
}

function addRemoveClassesOfMultipleElements(
  classes: ClassesToAddAndRemove
): void {
  if (classes?.toAdd) {
    for (const classToAdd in classes?.toAdd) {
      classes.toAdd[classToAdd].forEach((element) => {
        element.classList.add(classToAdd);
      });
    }
  }

  if (classes?.toRemove) {
    for (const classToRemove in classes?.toRemove) {
      classes.toRemove[classToRemove].forEach((element) => {
        element.classList.remove(classToRemove);
      });
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  heroSection = document.getElementById("hero-section");
  navbar = document.getElementById("navbar");
  highlightTexts = Array.from(document.querySelectorAll(".highlight-text"));
  statusText = document.getElementById("screen-status");

  favicon = document.getElementById("web-icon");

  const switchElement: HTMLElement | null =
    document.getElementById("keep-awake-switch");

  if (switchElement) {
    nosleep.enable();
    switchElement.addEventListener("change", changeSwitch);
  }
});
