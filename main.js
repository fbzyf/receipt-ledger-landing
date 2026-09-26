(function () {
  var form = document.getElementById("waitlist-form");
  var status = document.getElementById("form-status");
  var email = form && form.querySelector('input[type="email"]');
  if (!form || !email) return;

  function actionLooksPlaceholder(action) {
    return /PLACEHOLDER/i.test(action || "");
  }

  function showStatus(message) {
    if (!status) return;
    status.hidden = false;
    status.textContent = message;
    status.scrollIntoView({ block: "nearest" });
  }

  function emailLooksValid() {
    return email.value.trim() !== "" && email.checkValidity();
  }

  // FormSubmit 成功后会跳回 #thanks
  if (location.hash === "#thanks") {
    showStatus("已收到，内测开放时会发邮件通知你。");
  }

  form.addEventListener("submit", function (event) {
    if (!emailLooksValid()) {
      event.preventDefault();
      showStatus("请填写有效邮箱");
      email.focus();
      return;
    }

    if (actionLooksPlaceholder(form.getAttribute("action") || "")) {
      event.preventDefault();
      showStatus("提交通道待接通。");
    }
  });
})();
