$(document).ready(function () {
    // find all elements that are headers (<h1> ... <h6>) and apply the headline class to them
    $(":header").addClass("headline");
    // take the first three elements in a list. hide them. then fadein over three seconds
    $("li").hide().fadeIn(3000);
    // when a list item is clicked on, remove it fromt he DOM
    $("li").on("click", function () {
        $(this).remove();
    });
});