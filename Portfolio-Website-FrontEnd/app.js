for (i = 0; i < document.querySelectorAll("button").length; i++) {
  $("button").click(function () {
    $("h1").css("color", "red");
  });
}
for (i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
      document.querySelectorAll("h1").style.color = "red";
    });

}