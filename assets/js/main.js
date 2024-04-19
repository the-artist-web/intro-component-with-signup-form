const item = document.querySelectorAll("[data-item]"),
iconError = document.querySelectorAll("[data-icon-error]"),
textError = document.querySelectorAll("[data-text-error]"),
email = document.querySelector("[data-email]"),
btnForm = document.querySelector("[data-btn-form]");

for (let i = 0; i < item.length; i++) {
    btnForm.addEventListener("click", () => {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

        if (email.value != emailRegex) {
            item[i].classList.add("active");
            iconError[i].classList.add("active");
            textError[i].classList.add("active");
        } else {
            item[i].classList.remove("active");
            iconError[i].classList.remove("active");
            textError[i].classList.remove("active");
            // clear item value
            item[i].value = "";
        };

        if (item[i].value == "") {
            item[i].classList.add("active");
            iconError[i].classList.add("active");
            textError[i].classList.add("active");
        } else {
            item[i].classList.remove("active");
            iconError[i].classList.remove("active");
            textError[i].classList.remove("active");
            // clear item value
            item[i].value = "";
        };
    });
};