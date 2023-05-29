$(function () {
  $(".header__btn").on("click", function () {
    $(".header__lists").toggleClass("header__lists--active");
  });

  // Валидация формы

  // inputmask - для телефона

  // const form = document.querySelector('.contact__form'); //Класс формы
  // const telSelector = form.querySelector('input[type="tel"]');
  // const inputMask = new Inputmask('+7 (999) 999-99-99');
  // inputMask.mask(telSelector);

  // const validation = new JustValidate(".contact__form", {
  //   errorFieldStyle: {
  //     color: 'blue'
  //   },
  //   errorLabelStyle: {
  //     color: 'blue'
  //   },
  //   // errorFieldCssClass: ['field-invalid'],
  //   // errorLabelCssClass: ['label-invalid'],
  // });

  // validation
  //   .addField(".input-name", [
  //     {
  //       rule: "minLength",
  //       value: 2,
  //       errorMessage: "Поле должно содержать более 2 символов!",
  //     },
  //     {
  //       rule: "maxLength",
  //       value: 30,
  //     },
  //     {
  //       rule: "required",
  //       value: true,
  //       errorMessage: "Введите имя!",
  //     },
  //   ])
  //   .addField(".input-mail", [
  //     {
  //       rule: "required",
  //       value: true,
  //       errorMessage: "Email обязателен",
  //     },
  //     {
  //       rule: "email",
  //       value: true,
  //       errorMessage: "Введите корректный Email",
  //     },
  //   ])
  //   .addField(".input-tel", [
  //     {
  //       rule: "required",
  //       value: true,
  //       errorMessage: "Телефон обязателен",
  //     },
  //     {
  //       rule: "function",
  //       validator: function () {
  //         const phone = telSelector.inputmask.unmaskedvalue();
  //         return phone.length === 10;
  //       },
  //       errorMessage: "Введите корректный телефон",
  //     },
  //   ])
  //   .onSuccess((event) => {
  //     console.log("Validation passes and form submitted", event);

  //     let formData = new FormData(event.target);

  //     console.log(...formData);

  //     let xhr = new XMLHttpRequest();

  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState === 4) {
  //         if (xhr.status === 200) {
  //           console.log("Отправлено");
  //         }
  //       }
  //     };

  //     xhr.open("POST", "mail.php", true);
  //     xhr.send(formData);

  //     event.target.reset();
  //   });

  var tiker = $(".slider__item");
  tiker.css({ overflow: "hidden", width: "100%" });

  tiker.wrapInner("<span>");
  tiker
    .find("span")
    .css({ width: "50%", display: "inline-block", "text-align": "center" });
  tiker.append(tiker.find("span").clone());

  tiker.wrapInner("<div>");
  tiker.find("div").css("width", "650%");

  var reset = function () {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-200%" }, 8000, "linear", reset);
  };

  reset.call(tiker.find("div"));
});
