window.addEventListener("load", function() {
var menu1 = document.querySelector('.hd-menu1 > a');
var menu2 = document.querySelector('.hd-menu2');
var menu3 = document.querySelector('#volunteer-apply > a');
var menu4 = document.querySelector('.hd-menu3');

menu1.addEventListener("click", function(e) {
  e.preventDefault();
  menu2.classList.toggle("active")
  // menu2.classList.add("active");
  menu4.classList.remove("active");
});

menu3.addEventListener("click", function(e) {
  e.preventDefault();
  menu2.classList.remove("active");
  menu4.classList.toggle("active")
  // menu4.classList.add("active");
});
const pgNaviContainer = document.querySelector(".pg-navi .inner");
  const nowPg = document.title;

  function renderPgNavi() {
    let html = `
          <div class="home">
            <i class="fa-solid fa-house"></i>
          </div>
          <span class="chevron"></span>
          <span class="now-pg">${nowPg}</span>
        `;
    pgNaviContainer.innerHTML = html;
  }

  renderPgNavi();
});