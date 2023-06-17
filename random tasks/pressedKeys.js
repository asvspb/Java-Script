$(function () {
    $('body').on({
        keydown: function (event) {
            $('#pressedKey').text(event.key)
        },
        keyup: function () {
            $('#pressedKey').text('')
        }
    });
});