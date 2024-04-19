document.getElementById('emailForm').addEventListener('submit', function(event) 
{
    event.preventDefault();

    //Validasi Penginputan Email
    const inputEmail = document.getElementById('email');
    const inputEmailError = document.getElementById('inputEmailError');
    const validasiEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValid = validasiEmail.test(inputEmail.value);

    //Validasi Penginputan Nama
    const inputNama = document.getElementById('nama');
    const inputNamaError = document.getElementById('inputNamaError');
    const validasiNama = /^[A-Z][a-z]*(?:[A-Z][a-z]*)*$/;

    //Validasi Penginputan No Handphone
    const inputNoTelp = document.getElementById('noTelp');
    const inputNoTelpError = document.getElementById('inputNoTelpError');
    const validasiNoTelp = /^[0-9+]+$/;

    // Validasi Penginputan Password
    const inputPassword = document.getElementById('password');
    const inputPasswordError = document.getElementById('inputPasswordError');
    const password = inputPassword.value;
    const validasiPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Minimal 8 karakter, minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter khusus

    //Validasi Penginputan URL
    const inputURL = document.getElementById('url');
    const inputURLError = document.getElementById('inputURLError');
    const validasiURL = /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]{0,61}[a-zA-Z\d])?)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-zA-Z\d%@_.~+&:]*)*(\?[;&a-zA-Z\d%@_.,~+&:=-]*)?(#[-a-zA-Z\d_]*)?$/;

    //Inputan Nama
    if (inputNama.value.trim() === '') 
    {
        inputNamaError.textContent = 'Tolong Masukkan Nama Anda';
        inputNama.classList.add('border-red-500');
    } 
    else if (!validasiNama.test(inputNama.value)) 
    {
        inputNamaError.textContent = 'Masukkan Nama Yang Valid Dengan Menggunakan Pascal Case';
        inputNama.classList.add('border-red-500');
    } 
    else 
    {
        inputNamaError.textContent = '';
        inputNama.classList.remove('border-red-500');
    }    
    
    //Inputan Email
    if (inputEmail.value.trim() === '') 
    {
      inputEmailError.textContent = 'Tolong Masukkan Email Anda';
      inputEmail.classList.add('border-red-500');
    }
    else if (!emailValid) 
    {
      inputEmailError.textContent = 'Tolong Masukkan Email Yang Valid';
      inputEmail.classList.add('border-red-500');
    } 
    else 
    {
      inputEmailError.textContent = '';
      inputEmail.classList.remove('border-red-500');
    }

    //Inputan No Handphone
    if (inputNoTelp.value.trim() === '') 
    {
      inputNoTelpError.textContent = 'Tolong Masukkan No Handphone Anda';
      inputNoTelp.classList.add('border-red-500');
    } 
    else if (!validasiNoTelp.test(inputNoTelp.value))
    {
      inputNoTelpError.textContent = 'Tolong Masukkan No Handphone Yang Valid';
      inputNoTelp.classList.add('border-red-500');
    } 
    else 
    {
      inputNoTelpError.textContent = '';
      inputNoTelp.classList.remove('border-red-500');
    }

    //Validasi Penginputan Password
    if (password.trim() === '') 
    {
        inputPasswordError.textContent = 'Tolong Masukkan Password Anda';
        inputPassword.classList.add('border-red-500');
    } 
    else if (!validasiPassword.test(password)) 
    {
        inputPasswordError.textContent = 'Password harus minimal 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter khusus (@$!%*?&).';
        inputPassword.classList.add('border-red-500');
    } 
    else 
    {
        inputPasswordError.textContent = '';
        inputPassword.classList.remove('border-red-500');
    }
    
    // Validasi Penginputan URL
    if (inputURL.value.trim() === '') 
    {
        inputURLError.textContent = 'Tolong Masukkan URL Anda';
        inputURL.classList.add('border-red-500');
    } 
    else if (!validasiURL.test(inputURL.value)) 
    {
        inputURLError.textContent = 'Tolong Masukkan URL Yang Valid';
        inputURL.classList.add('border-red-500');
    } 
    else 
    {
        inputURLError.textContent = '';
        inputURL.classList.remove('border-red-500');
    }
});
  