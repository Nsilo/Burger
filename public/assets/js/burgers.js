$(document).ready(function () {
  $(document).on("click", ".devourBtn", (e) => {
    const editUrl = `/devour/${e.target.getAttribute("data-id")}`;

    $.ajax({
      method: "PUT",
      url: editUrl,
    }).then((response) => location.reload());
  });

  $("#submitBurger").on("submit", (e) => {
    e.preventDefault();

    const text = $("#submitBurgerText").val();
    $("#submitBurgerText").val("");

    $.ajax({
      method: "POST",
      url: "/add",
      data: { text },
    }).then(() => location.reload());
  });

  $(document).on("click", ".delBtn", (e) => {
    const editUrl = `/delete/${e.target.getAttribute("data-id")}`;

    $.ajax({
      method: "DELETE",
      url: editUrl,
    }).then((response) => location.reload());
  });
});
