document.getElementById('name').addEventListener('input', function (event) {

    if ($('.inputFieldError').length !== 0) {

        var name = event.target.value;

        if (name.length < 2) {

            if ($('.inputFieldError').length === 0) {

                $('<p class="inputFieldError pt-3"><i class="fa-solid fa-circle-exclamation me-2"></i>Please enter a valid name</p>')
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

document.getElementById('platform').addEventListener('change', function (event) {

    if ($('.inputFieldError').length !== 0) {

        var selectedPlatform = event.target.value;

        if (selectedPlatform === "") {

            if ($('.inputFieldError').length === 0) {

                $('<p class="inputFieldError pt-3"><i class="fa-solid fa-circle-exclamation me-2"></i>Please enter a valid platform</p>')
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

document.getElementById('optInWaitlist').addEventListener('click', function (event) {

    event.preventDefault();

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var selectedPlatform = document.getElementById('platform').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var name = document.getElementById('name').value;

    if (name.length >= 2) {

        if (emailRegex.test(emailAddress)) {

            if (selectedPlatform !== "") {
    
            var buttonIcon = document.querySelector('#optInWaitlist i.fa');
            buttonIcon.classList.add('fa-fade');
            document.getElementById('optInWaitlist').style.pointerEvents = 'none';
            document.getElementById('optInWaitlist').style.cursor = 'default';
            document.getElementById('name').style.pointerEvents = 'none';
            document.getElementById('name').style.cursor = 'default;'
            document.getElementById('emailAddress').style.pointerEvents = 'none';
            document.getElementById('emailAddress').style.cursor = 'default;'
            document.getElementById('platform').style.pointerEvents = 'none';
            document.getElementById('platform').style.cursor = 'default;'
    
            setTimeout(function () {
    
                var googleFormURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIdu10lTz-WPwAtrMAyLrhyFTK_Bbgrv95yRba2_uUy0_nHQ/formResponse';
    
                var data = new FormData();
    
                data.append('entry.924430555', name);
                data.append('entry.1414189995', emailAddress);
                data.append('entry.1909912909', selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1));
    
                fetch(googleFormURL, {
    
                    method: 'POST',
                    mode: 'no-cors',
                    body: data
    
                }).then(response => {
    
                    buttonIcon.classList.remove('fa-fade');
    
                    $('.inputField').fadeOut(function () {
    
                        $(this).remove();
    
                        if ($('.optInMessage').length === 0) {
    
                            $('<div class="optInMessage w-100 pt-3" style="display:flex;flex-direction:column;align-items: center;"><h1><i class="fa fa-circle-check" style="color:palegreen;text-align:center;align-content: center;"></i><br></h1><h4>You\'re on the waitlist!</h4><br><p>We\'ll reach out once we\'re ready.</p></div>')
                                .hide()
                                .appendTo('.inputArea')
                                .fadeIn();
    
                        } else {
    
                            $('.optInMessage').fadeIn();
    
                        }
    
                    });
    
                }).catch(err => {
    
                    console.error('Error while trying to opt-in to the waitlist:', err);
    
                    buttonIcon.classList.remove('fa-fade');
    
                }).finally(() => {
    
                    buttonIcon.classList.remove('fa-fade');
    
                });
    
            }, 1000);

            } else {

                if ($('.inputFieldError').length === 0) {
    
                    $('<p class="inputFieldError"><i class="fa-solid fa-circle-exclamation pt-3 ps-2 me-2"></i>Please select a valid platform</p>')
                        .hide()
                        .appendTo('.inputArea')
                        .fadeIn();
        
                }

            }
    
        } else {
    
            if ($('.inputFieldError').length === 0) {
    
                $('<p class="inputFieldError"><i class="fa-solid fa-circle-exclamation pt-3 ps-2 me-2"></i>Please enter a valid email address</p>')
                    .hide()
                    .appendTo('.inputArea')
                    .fadeIn();
    
            }
    
        }

    } else {

        if ($('.inputFieldError').length === 0) {
    
            $('<p class="inputFieldError"><i class="fa-solid fa-circle-exclamation pt-3 ps-2 me-2"></i>Please enter a valid name</p>')
                .hide()
                .appendTo('.inputArea')
                .fadeIn();

        }

    }

});