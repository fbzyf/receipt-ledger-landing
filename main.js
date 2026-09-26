(function () {
  var thanks = document.getElementById("thanks");
  if (!thanks) return;

  function showIfThanks() {
    if (location.hash !== "#thanks") return;
    thanks.hidden = false;
    thanks.focus();
  }

  showIfThanks();
  window.addEventListener("hashchange", showIfThanks);
})();
