// Registrace proběhne jen pokud ji prohlížeč podporuje
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
     .then(reg => console.log("Service Worker zaregistrován!", reg))
     .catch(err => console.log("Registrace selhala:", err));
  });
}