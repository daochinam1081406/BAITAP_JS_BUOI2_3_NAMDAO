function sanitizeInput(inputElement) {
  // Loại bỏ tất cả các ký tự không phải số và dấu chấm thập phân
  inputElement.value = inputElement.value.replace(/[^0-9.]/g, "");
}
var songaylamviecT = document.getElementById("songaylamviec");
var bai1tinhluong = document.getElementById("bai1tinhluong");

bai1tinhluong.onclick = function () {
  var songaylamviec = 0;

  if (songaylamviecT.value !== "") {
    songaylamviec = parseFloat(songaylamviecT.value);
  }

  var tienluongngay = 100000;
  var tienluong = tienluongngay * songaylamviec;

  var ketquatinhluong = document.getElementById("ketquatinhluong");
  ketquatinhluong.innerText = "Tiền lương = " + tienluong + " VND";
};

var so1T = document.getElementById("so1");
var so2T = document.getElementById("so2");
var so3T = document.getElementById("so3");
var so4T = document.getElementById("so4");
var so5T = document.getElementById("so5");

var tinhtrungbinh = document.getElementById("tinhtrungbinh");
tinhtrungbinh.onclick = function () {
  var so1 = 0;
  var so2 = 0;
  var so3 = 0;
  var so4 = 0;
  var so5 = 0;

  if (so1T.value !== "") {
    so1 = parseFloat(so1T.value);
  }
  if (so2T.value !== "") {
    so2 = parseFloat(so2T.value);
  }
  if (so3T.value !== "") {
    so3 = parseFloat(so3T.value);
  }
  if (so4T.value !== "") {
    so4 = parseFloat(so4T.value);
  }
  if (so5T.value !== "") {
    so5 = parseFloat(so5T.value);
  }

  var kqtrungbinh = (so1 + so2 + so3 + so4 + so5) / 5.0;

  var ketquatrungbinh = document.getElementById("ketquatrungbinh");

  ketquatrungbinh.innerText = "Trung bình cộng của 5 số là: " + kqtrungbinh;
};

var sousdT = document.getElementById("sousd");
var tinhquydoi = document.getElementById("tinhquydoi");
tinhquydoi.onclick = function () {
  var sousd = 0;
  if (sousdT.value !== "") {
    sousd = parseFloat(sousdT.value);
  }
  var kqquydoi = sousd * 23500;
  var ketquaquydoi = document.getElementById("ketquaquydoi");
  ketquaquydoi.innerText =
    "kết quả quy đổi từ USD sang VND là :" + kqquydoi + " VND";
};

var chieudaiT = document.getElementById("chieudai");
var chieudai = 0;
if (chieudaiT.value !== "") {
  chieudai = parseFloat(chieudaiT.value);
}
var chieurongT = document.getElementById("chieurong");
var chieurong = 0;
if (chieurongT.value !== "") {
  chieurong = parseFloat(chieurongT.value);
}
var tinhdientich = document.getElementById("tinhdientich");
var tinhchuvi = document.getElementById("tinhchuvi");
var ketquadientich = document.getElementById("ketquatinhdientich");
var ketquachuvi = document.getElementById("ketquatinhchuvi");

tinhdientich.onclick = function () {
  var chieudai = 0;
  if (chieudaiT.value !== "") {
    chieudai = parseFloat(chieudaiT.value);
  }
  var chieurong = 0;
  if (chieurongT.value !== "") {
    chieurong = parseFloat(chieurongT.value);
  }
  var dai = chieudai;
  var rong = chieurong;

  if (dai <= 0 || rong <= 0) {
    ketquadientich.innerText =
      "Vui lòng nhập giá trị lớn hơn 0 cho cả chiều dài và chiều rộng.";
    return;
  }

  var dientich = dai * rong;

  ketquadientich.innerText = "Diện tích hình chữ nhật là: " + dientich;
};

tinhchuvi.onclick = function () {
  var chieudai = 0;
  if (chieudaiT.value !== "") {
    chieudai = parseFloat(chieudaiT.value);
  }
  var chieurong = 0;
  if (chieurongT.value !== "") {
    chieurong = parseFloat(chieurongT.value);
  }
  var dai = chieudai;
  var rong = chieurong;

  if (dai <= 0 || rong <= 0) {
    ketquachuvi.innerText =
      "Vui lòng nhập giá trị lớn hơn 0 cho cả chiều dài và chiều rộng.";
    return;
  }

  var chuvi = 2 * (dai + rong);

  ketquachuvi.innerText = "Chu vi hình chữ nhật là: " + chuvi;
};
var tinhtongkyso = document.getElementById("tinhtongkyso");
var ketquatongkyso = document.getElementById("ketquatongkyso");

tinhtongkyso.onclick = function () {
  var inputText = document.getElementById("so2chuso").value;

  if (inputText.length !== 2 || isNaN(inputText)) {
    ketquatongkyso.innerText =
      "Vui lòng nhập một chuỗi có 2 ký tự số từ 10 đến 99.";
    return;
  }

  var digit1 = parseInt(inputText.charAt(0));
  var digit2 = parseInt(inputText.charAt(1));

  if (digit1 < 1 || digit1 > 9 || digit2 < 0 || digit2 > 9) {
    ketquatongkyso.innerText =
      "Vui lòng nhập một chuỗi có 2 ký tự số từ 10 đến 99.";
    return;
  }

  var sum = digit1 + digit2;
  ketquatongkyso.innerText = "Tổng 2 ký số là: " + sum;
};
