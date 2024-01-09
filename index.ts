let heroSection: HTMLElement | null = null;
let navbar: HTMLElement | null = null;
let highlightTexts: HTMLElement[] | null = null;
let statusText: HTMLElement | null = null;

function changeSwitch(event: Event): void {
  const { target } = event;
  if (target && "checked" in target && typeof target.checked === "boolean") {
    const { checked } = target;
    changeBackground(checked);
    changeStatusText(checked);
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
    statusText.innerText = checked ? "Awake" : "Asleep";
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
  if ("wakeLock" in navigator) {
    console.log("Wake Lock API is supported");
  } else {
    console.log("Wake Lock is not supported");
  }

  const switchElement: HTMLElement | null =
    document.getElementById("keep-awake-switch");

  heroSection = document.getElementById("hero-section");
  navbar = document.getElementById("navbar");
  highlightTexts = Array.from(document.querySelectorAll(".highlight-text"));
  statusText = document.getElementById("screen-status");

  console.log(highlightTexts);

  if (switchElement) {
    switchElement.addEventListener("change", changeSwitch);
  }
});
