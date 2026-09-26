(function () {
  var thanks = document.getElementById("thanks");
  if (!thanks) return;

  if (location.hash === "#thanks") {
    thanks.hidden = false;
    thanks.focus();
  }
})();
