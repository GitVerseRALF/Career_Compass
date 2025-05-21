let themeToggle = document.querySelector(".right");

    themeToggle.addEventListener("click", function() {
      let root = document.documentElement;

      let currentBgColor = root.style.getPropertyValue("--bg-color");

      if (currentBgColor == "#F0EDEE") {
        root.style.setProperty("--bg-color", "#333333");
        root.style.setProperty("--text-color", "#F0EDEE");
        root.style.setProperty("--button-color", "#F0C800");
        root.style.setProperty("--button-hover-color", "#F0A500");
      }
      else {
        root.style.setProperty("--bg-color", "#F0EDEE");
        root.style.setProperty("--text-color", "#333333");
        root.style.setProperty("--button-color", "#F0A500");
        root.style.setProperty("--button-hover-color", "#F0C800");
      }

      localStorage.setItem("theme", root.style.getPropertyValue("--bg-color"));
    });

    window.onload = function() {
      let root = document.documentElement;

      let theme = localStorage.getItem("theme");

      if (theme) {
        root.style.setProperty("--bg-color", theme);

        if (theme == "#333333") {
          root.style.setProperty("--text-color", "#F0EDEE");
          root.style.setProperty("--button-color", "#F0C800");
          root.style.setProperty("--button-hover-color", "#F0A500");
        }
        else {
          root.style.setProperty("--text-color", "#333333");
          root.style.setProperty("--button-color", "#F0A500");
          root.style.setProperty("--button-hover-color", "#F0C800");
        }
      }
    };

    