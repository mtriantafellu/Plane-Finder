var countFast = 0;

$("#reallyFast").on("click", function(event) {
    event.preventDefault();

    countFast++;

    // $.post("/api/send", user);
});