$(document).ready(function() {
    $('.update-btn').click(updateClick)

    $('.logout-btn').click(logoutClick)
});

function updateClick() {
    const lasUsername = this.id.split('???')[1];
    const lastPassword = this.id.split('???')[2];
    if ($('#username').val() && $('#password').val() && $('#email').val() &&
        $('input[name="gender"]:checked').val()) {
        let isLoggedIn = true;
        if (lasUsername !== $('#username').val() || lastPassword !== $('#password').val()) {
            console.log('aa');
            isLoggedIn = false
        }
        let data = {
            lasUsername,
            lastPassword,
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val(),
            gender: $('input[name="gender"]:checked').val(),
            isLoggedIn
        }

        $('#updateNecessary').css('display', 'none')
        $('#updateErrorText').css('display', 'none');
        $.ajax({
            type: "POST",
            url: "/user/updateUser",
            data,
            success: function(response) {
                if (!isLoggedIn) {
                    location.replace('/')
                }
            },
            error: function(err) {
                $('#updateErrorText').text(err.responseJSON.message).css('display', 'block');
            }
        });
    } else {
        $('#updateNecessary').css('display', 'block')
    }
}

function logoutClick() {
    const username = this.id.split('???')[1];
    $.ajax({
        type: "POST",
        url: `/user/${username}`,
        success: function(response) {
            location.replace('/')
        },
        error: function(err) {
            location.replace('/')
        }
    });
}