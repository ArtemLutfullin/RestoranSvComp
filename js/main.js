function regbtn() {
  let k = 0;

  let checkname = /[а-яё]/i;
  if (!checkname.test($("#name").val())) {
    $("#name").val("Вводите только кириллицу ");
    setTimeout(() => {
      $("#name").val("");
    }, 2000);
  } else {
    k++;
  }

  let checkfullname = /[а-яё]/i;
  if (!checkfullname.test($("#fam").val())) {
    $("#fam").val("Вводите только кириллицу ");
    setTimeout(() => {
      $("#fam").val("");
    }, 2000);
  } else {
    k++;
  }

  let patronymic = /[а-яё]/i;
  if (!patronymic.test($("#ot").val())) {
    $("#ot").val("Вводите только кириллицу ");
    setTimeout(() => {
      $("#ot").val("");
    }, 2000);
  } else {
    k++;
  }

  let checklogin = /[a-z\d\.]/i;
  if (!checklogin.test($("#email").val())) {
    $("#email").val("Вводите на английском");
    setTimeout(() => {
      $("#email").val("");
    }, 2000);
  } else {
    k++;
  }
  if ($("#password").val() == "") {
    $("#password").val("Введите пароль");
    $("#password").attr("type", "text");
    setTimeout(() => {
      $("#password").val("");
      $("#password").attr("type", "password");
    }, 2000);
  } else if ($("#password").val() != $("#password2").val()) {
    $("#password2").val("Повторите пароль");
    $("#password2").attr("type", "text");
    setTimeout(() => {
      $("#password2").val("");
      $("#password2").attr("type", "password");
    }, 2000);
  } else {
    k++;
  }
  if (k == 3) {
    alert("Регистрация прошла успешно");
  }
  console.log("name");
}
