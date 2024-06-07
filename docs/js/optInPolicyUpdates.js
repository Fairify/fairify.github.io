document.getElementById('emailAddress').addEventListener('input', function (event) {

    if ($('.inputFieldError').length !== 0) {

        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var emailAddress = event.target.value;

        if (!emailRegex.test(emailAddress)) {

            if ($('.inputFieldError').length === 0) {

                $('<p class="inputFieldError pt-3"><i class="fa-solid fa-circle-exclamation me-2"></i>Please enter a valid email address</p>')
                    .hide()
                    .appendTo('.inputArea')
                    .fadeIn();

            }

        } else {

            $('.inputFieldError').fadeOut(function () {

                $(this).remove();

            });

        }

    }

});

document.getElementById('optInPolicyUpdates').addEventListener('click', function (event) {

    event.preventDefault();

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var emailAddress = document.getElementById('emailAddress').value;

    if (emailRegex.test(emailAddress)) {

        var buttonIcon = document.querySelector('#optInPolicyUpdates i.fa');
        buttonIcon.classList.add('fa-fade');
        document.getElementById('optInPolicyUpdates').style.pointerEvents = 'none';
        document.getElementById('optInPolicyUpdates').style.cursor = 'default';
        document.getElementById('emailAddress').style.backgroundColor = 'silver';
        document.getElementById('emailAddress').style.pointerEvents = 'none';
        document.getElementById('emailAddress').style.cursor = 'default;'

        setTimeout(function () {

            var googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfEFWIut_C6jVfM7DdWb-MCWsuaaJ4UtFPncTbzTOr50OPpAQ/formResponse';

            var data = new FormData();

            data.append('entry.924430555', emailAddress);

            fetch(googleFormURL, {

                method: 'POST',
                mode: 'no-cors',
                body: data

            }).then(response => {

                buttonIcon.classList.remove('fa-fade');

                $('.inputField').fadeOut(function () {

                    $(this).remove();

                    if ($('.optInMessage').length === 0) {

                        $('<div class="optInMessage w-100 pt-3"><h5><i class="fa fa-circle-check me-2" style="color:palegreen"></i>You have successfully opted in to policy updates.</h5></div>')
                            .hide()
                            .appendTo('.inputArea')
                            .fadeIn();

                    } else {

                        $('.optInMessage').fadeIn();

                    }

                });

            }).catch(err => {

                console.error('Error while trying to opt-in to policy updates:', err);

                buttonIcon.classList.remove('fa-fade');

            }).finally(() => {

                buttonIcon.classList.remove('fa-fade');

            });

        }, 1000);

    } else {

        if ($('.inputFieldError').length === 0) {

            $('<p class="inputFieldError"><i class="fa-solid fa-circle-exclamation pt-3 ps-2 me-2"></i>Please enter a valid email address</p>')
                .hide()
                .appendTo('.inputArea')
                .fadeIn();

        }

    }

});