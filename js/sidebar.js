const menuButton = document.querySelector(".menu-show");
const sidebar = document.querySelector("sidebar");
let isSmall = window.innerWidth > 1200 ? false : true;
menuButton.addEventListener("click", openSideBar);

function openSideBar() {
  if (!isSmall) return;

  sidebar.style.display = "block";
  setTimeout(() => {
    sidebar.style.transform = "translateX(0%)";
    sidebar.style.boxShadow = "0px 10px 250px 300px rgb(0 0 0 / 20%)";
  }, 1);
}

function closeSideBar() {
  if (!isSmall) return;
  sidebar.style.transform = "translateX(-100%)";
  sidebar.style.boxShadow = "0px 0px 0px 0px rgb(0 0 0 / 0%)";
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 400);
}

function resetSideBar() {
  if (!isSmall) {
    sidebar.style.boxShadow = "0px 0px 21px 5px rgba(0, 0, 0, 0.06)";
    sidebar.style.display = "block";
    sidebar.style.transform = "translateX(0%)";
  } else {
    sidebar.style.display = "none";
    sidebar.style.transform = "translateX(-100%)";
  }
}

function handleResize() {
  if (window.innerWidth > 1200) {
    isSmall = false;
    resetSideBar();
  } else {
    isSmall = true;
    resetSideBar();
  }
}

document.addEventListener("click", function (event) {
  if (!isSmall) return;

  let isClickInsideElement = sidebar.contains(event.target);
  let isClickOnMenu = menuButton.contains(event.target);
  if (!isClickInsideElement && !isClickOnMenu) {
    closeSideBar();
  }
});

window.onresize = handleResize;
