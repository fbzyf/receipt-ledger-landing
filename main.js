(function () {
  var form = document.getElementById("waitlist-form");
  var status = document.getElementById("form-status");
  if (!form) return;

  function actionLooksPlaceholder(action) {
    return /PLACEHOLDER/i.test(action || "");
  }

  form.addEventListener("submit", function (event) {
    var action = form.getAttribute("action") || "";
    if (!actionLooksPlaceholder(action)) return;

    event.preventDefault();
    if (!status) return;
    status.hidden = false;
    status.textContent = "提交通道待接通。把表单地址换成飞书多维表单或 Formspree 后即可提交。";
  });
})();
