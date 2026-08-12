// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
  if (theme == "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}


let setTheme = (theme) =>  {
  transTheme();
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);
  
  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};


let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
}


let initTheme = (theme) => {
  // Default to light on all devices (ignore the OS prefers-color-scheme) so
  // the site looks consistent everywhere. Visitors can still switch to dark
  // with the toggle, and that explicit choice is remembered in localStorage.
  if (theme == null || (theme !== "dark" && theme !== "light")) {
    theme = "light";
  }
  setTheme(theme);
}


// One-time reset: the previous logic auto-saved a theme based on each device's
// OS setting (so phones in dark mode persisted "dark"). Clear that once so every
// device starts from the new light default; explicit toggles afterward stick.
if (localStorage.getItem("theme_reset_v2") == null) {
  localStorage.removeItem("theme");
  localStorage.setItem("theme_reset_v2", "1");
}

initTheme(localStorage.getItem("theme"));
