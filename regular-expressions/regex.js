$(function () {
    $('#emailForm').submit(function (event) {
        event.preventDefault();

        //Validasi Email
        const inputEmail = $('#email');
        const inputEmailError = $('#inputEmailError');
        const validasiEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        //Validasi Nama
        const inputNama = $('#nama');
        const inputNamaError = $('#inputNamaError');
        const validasiNama = /^[A-Z][a-zA-Z\s]*$/;

        //Validasi NoTelp
        const inputNoTelp = $('#noTelp');
        const inputNoTelpError = $('#inputNoTelpError');
        const validasiNoTelp = /^[0-9+]+$/;

        //Validasi Password
        const inputPassword = $('#password');
        const inputPasswordError = $('#inputPasswordError');
        const password = inputPassword.val();
        const validasiPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        //Validasi URL
        const inputURL = $('#url');
        const inputURLError = $('#inputURLError');
        const validasiURL = /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]{0,61}[a-zA-Z\d])?)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-zA-Z\d%@_.~+&:]*)*(\?[;&a-zA-Z\d%@_.,~+&:=-]*)?(#[-a-zA-Z\d_]*)?$/;

        //Inputan Nama
        if (inputNama.val().trim() === '') {
            inputNamaError.text('Tolong Masukkan Nama Anda');
            inputNama.addClass('border-red-500');
        } else if (!validasiNama.test(inputNama.val())) {
            inputNamaError.text('Masukkan Nama Yang Valid Dengan Menggunakan Pascal Case');
            inputNama.addClass('border-red-500');
        } else {
            inputNamaError.text('');
            inputNama.removeClass('border-red-500');
        }

        //Inputan Email
        if (inputEmail.val().trim() === '') {
            inputEmailError.text('Tolong Masukkan Email Anda');
            inputEmail.addClass('border-red-500');
        } else if (!validasiEmail.test(inputEmail.val())) {
            inputEmailError.text('Tolong Masukkan Email Yang Valid');
            inputEmail.addClass('border-red-500');
        } else {
            inputEmailError.text('');
            inputEmail.removeClass('border-red-500');
        }

        //Inputan NoTelp
        if (inputNoTelp.val().trim() === '') {
            inputNoTelpError.text('Tolong Masukkan No Handphone Anda');
            inputNoTelp.addClass('border-red-500');
        } else if (!validasiNoTelp.test(inputNoTelp.val())) {
            inputNoTelpError.text('Tolong Masukkan No Handphone Yang Valid');
            inputNoTelp.addClass('border-red-500');
        } else {
            inputNoTelpError.text('');
            inputNoTelp.removeClass('border-red-500');
        }

        //Inputan Password
        if (password.trim() === '') {
            inputPasswordError.text('Tolong Masukkan Password Anda');
            inputPassword.addClass('border-red-500');
        } else if (!validasiPassword.test(password)) {
            inputPasswordError.text('Password harus minimal 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter khusus (@$!%*?&).');
            inputPassword.addClass('border-red-500');
        } else {
            inputPasswordError.text('');
            inputPassword.removeClass('border-red-500');
        }

        //Inputan URL
        if (inputURL.val().trim() === '') {
            inputURLError.text('Tolong Masukkan URL Anda');
            inputURL.addClass('border-red-500');
        } else if (!validasiURL.test(inputURL.val())) {
            inputURLError.text('Tolong Masukkan URL Yang Valid');
            inputURL.addClass('border-red-500');
        } else {
            inputURLError.text('');
            inputURL.removeClass('border-red-500');
        }
    });
});
