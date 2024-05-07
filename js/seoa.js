// =============================================================
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/kiosk0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/kiosk.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/app0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/app.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage2");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/AI0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/grandma.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage3");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/smartphone0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/smartphone.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage4");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
//   ================================================================
$(document).ready(function(){
  $('.shortcutbtnli:nth-child(1)').click(function(){
      window.location.href = 'edu_list.html';
  });
});
$(document).ready(function(){
  $('.shortcutbtnli:nth-child(2)').click(function(){
      window.location.href = 'edu_list.html';
  });
});
$(document).ready(function(){
  $('.shortcutbtnli:nth-child(3)').click(function(){
      window.location.href = 'volunteer_regist.html';
  });
});
$(document).ready(function(){
  $('.shortcutbtnli:nth-child(4)').click(function(){
      window.location.href = 'edu_list.html';
  });
});
$(document).ready(function(){
  $('.shortcutbtnli:nth-child(5)').click(function(){
      window.location.href = 'edu_list.html';
  });
});
$(document).ready(function(){
  $('.shortcutbtnli:nth-child(6)').click(function(){
      window.location.href = 'level.html';
  });
});
// ==============