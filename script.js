"use strict";
const emailModal = document.querySelector(".check-email");
const infoModal = document.querySelector(".about-info");
const verifyEmail = document.querySelector(".verify-email");
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);
const email = document.getElementById("email");

// lắng nghe sự kiện nhập email và verify email với người dùng
verifyEmail.addEventListener("click", function () {
  const isValidEmail = emailRegex.test(email.value);
  if (!isValidEmail) {
    alert("Hay nhap dia chi email hop le.\nExample@gmail.com");
  } else {
    emailModal.classList.add("hidden");
    infoModal.classList.remove("hidden");
  }
});

const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");
const itemContent = document.querySelectorAll(".item-content");

// hàm lắng nghe sự kiện để hiển thị button view-more
// khi di chuyển chuột vào các trường thông tin kinh nghiệm, học vấn, sở thích được rút gọn
const viewmoreStatus = function (number) {
  itemContent[number * 2].addEventListener("mouseover", function () {
    viewMore[number].classList.remove("hidden");
  });
  itemContent[number * 2].addEventListener("mouseout", function () {
    viewMore[number].classList.add("hidden");
  });
};

// hàm lắng nghe sự kiện để hiển thị button view-less
// khi di chuyển chuột vào các trường thông tin kinh nghiệm, học vấn, sở thích đầy đủ
const viewlessStatus = function (number) {
  itemContent[number * 2 + 1].addEventListener("mouseover", function () {
    viewLess[number].classList.remove("hidden");
  });
  itemContent[number * 2 + 1].addEventListener("mouseout", function () {
    viewLess[number].classList.add("hidden");
  });
};

//duyệt từng phần tử của mục thông tin kinh nghiệm, học vấn, hoạt động,..
// để hiển thị và ẩn button view khi di chuyển chuột đến
for (let i = 0; i < viewMore.length; i++) {
  viewmoreStatus(i);
  viewlessStatus(i);
}

// xử lý ẩn hiện modal khi click button view-more hoặc view-less
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    itemContent[i * 2].classList.add("hidden");
    itemContent[i * 2 + 1].classList.remove("hidden");
    viewlessStatus(i);
  });
  viewLess[i].addEventListener("click", function () {
    itemContent[i * 2 + 1].classList.add("hidden");
    itemContent[i * 2].classList.remove("hidden");
    viewmoreStatus(i);
  });
}

/* chú thích để có được công thức áp dụng vào các sự kiện trên*/
// view-more 0 : item-content 0  -- view-less 0 : item-content 1    i = 0
// view-more 1 : item-content 2  -- view-less 1 : item-content 3    i = 1
// view-more 2 : item-content 4  -- view-less 2 : item-content 5    i = 2
// view-more 3 : item-content 6  -- view-less 3 : item-content 7    i = 3
// view-more 4 : item-content 8  -- view-less 4 : item-content 9    i = 4
// view-more 5 : item-content 10 -- view-less 5 : item-content 11   i = 5

// => itemContent(viewMore) = i(viewMore) * 2
// => itemContent(viewLess) = i(viewLess) * 2
