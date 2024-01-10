import NoSleep from "./nosleep/nosleep.js";
var heroSection = null;
var navbar = null;
var highlightTexts = null;
var statusText = null;
var favicon = null;
var nosleep = new NoSleep();
function changeSwitch(event) {
    var target = event.target;
    if (target && "checked" in target && typeof target.checked === "boolean") {
        var checked = target.checked;
        checked ? nosleep.enable() : nosleep.disable();
        changeBackground(checked);
        changeStatusText(checked);
        changeFavicon(checked);
    }
}
function changeBackground(checked) {
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
        }
        else {
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
function changeStatusText(checked) {
    if (statusText) {
        statusText.innerText = checked ? "Awake" : "Almost sleepy";
    }
}
function changeFavicon(checked) {
    if (favicon && "href" in favicon) {
        favicon.setAttribute("href", checked ? "./favicon/favicon_green.ico" : "./favicon/favicon_blue.ico");
    }
}
function addRemoveClassesOfMultipleElements(classes) {
    if (classes === null || classes === void 0 ? void 0 : classes.toAdd) {
        var _loop_1 = function (classToAdd) {
            classes.toAdd[classToAdd].forEach(function (element) {
                element.classList.add(classToAdd);
            });
        };
        for (var classToAdd in classes === null || classes === void 0 ? void 0 : classes.toAdd) {
            _loop_1(classToAdd);
        }
    }
    if (classes === null || classes === void 0 ? void 0 : classes.toRemove) {
        var _loop_2 = function (classToRemove) {
            classes.toRemove[classToRemove].forEach(function (element) {
                element.classList.remove(classToRemove);
            });
        };
        for (var classToRemove in classes === null || classes === void 0 ? void 0 : classes.toRemove) {
            _loop_2(classToRemove);
        }
    }
}
window.addEventListener("DOMContentLoaded", function () {
    heroSection = document.getElementById("hero-section");
    navbar = document.getElementById("navbar");
    highlightTexts = Array.from(document.querySelectorAll(".highlight-text"));
    statusText = document.getElementById("screen-status");
    favicon = document.getElementById("web-icon");
    var switchElement = document.getElementById("keep-awake-switch");
    if (switchElement) {
        nosleep.enable();
        switchElement.addEventListener("change", changeSwitch);
    }
});
