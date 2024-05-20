document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};
/*--------nextpagemoving-----------*/

/*----------nextTeacherPage----------*/
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("nextTeacherPage");

  button.addEventListener("click", function () {
    // Navigate to the new page
    window.location.href = "/teacher/index.html"; // Replace '_______.html' with the actual URL or path to the next page
  });
});
/*------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("nextStudentPage");

  button.addEventListener("click", function () {
    // Navigate to the new page
    window.location.href = "/student/index.html"; // Replace '____________.html' with the actual URL or path to the next page
  });
});
/*------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("nextBusinessPage");

  button.addEventListener("click", function () {
    // Navigate to the new page
    window.location.href = "/business/index.html"; // Replace '____________.html' with the actual URL or path to the next page
  });
});
