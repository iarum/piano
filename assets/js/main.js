let qwerty = [113, 50, 119, 51, 101, 114, 53, 116, 54, 121, 55, 117, 105];
let keyCode;
let audio;

for (let i = 0; i < qwerty.length; i++) {
    $('#keyboard').append(`<div class="${qwerty[i] > 60 ? "key" : "up-key"} key-${qwerty[i]}"></div>`);

    // Mouse
    $(`.key-${qwerty[i]}`).on('mousedown', function () {
        audio = new Audio(`assets/audio/key${(qwerty.indexOf(qwerty[i]) + 1)}.mp3`);
        audio.play();

        $(this).css('box-shadow', `inset 0 0 15px 0 ${qwerty[i] > 60 ? 'gray' : 'black'}`);
    })

    $(`.key-${qwerty[i]}`).on('mouseup', function () {
        $(this).removeAttr('style');
    })
}

$(document).on('keypress', function (e) {
    keyCode = e.which;

    if (qwerty.includes(keyCode)) {
        audio = new Audio(`assets/audio/key${(qwerty.indexOf(keyCode) + 1)}.mp3`);
        audio.play();

        $(`.key.key-${keyCode}`).css('box-shadow', 'inset 0 0 15px 0 gray');
        $(`.up-key.key-${keyCode}`).css('box-shadow', 'inset 0 0 15px 0 black');
    }
})

$(document).on('keyup', function () {
    $(`.key-${keyCode}`).removeAttr('style');
})