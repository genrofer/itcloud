let inputName = document.querySelector('.input-name');
let inputCompany = document.querySelector('.input-company');
let inputPhone = document.querySelector('.input-phone');
let inputEmail = document.querySelector('.input-email');
let inputAbout = document.querySelector('.input-about');
let inputSend = document.querySelector('.input-send');


inputSend.addEventListener('click', function(e) {
     e.preventDefault();
     let name = inputName.value;
     let company = inputCompany.value;
     let phone = inputPhone.value;
     let email = inputEmail.value;
     let about = inputAbout.value;

     if(name == '' || company == '' || phone == '' || email == '' || about == '') {
          alert('Iltimos barcha maydonlarni to\'ldiring!');
     } else {
          var my_text = `Yangi Feedback :%0A%0AIsm familyasi - ${name}, %0A%0AKompaniyasi - %0A${company}, %0A%0ATelefon raqami - ${phone}, %0A%0AElektron pochtasi - ${email}, %0A%0ALoyihasi haqida qisqacha - ${about}`

          var token = "5699572346:AAH0bBJU7PunuwBXeQkBB07pWhmqdiQ7UhY";
          var chat_id = -1001744829663;
          var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
          let api = new XMLHttpRequest();
          api.open("GET", url, true);
          api.send();
          alert('Malumotlar yuborildi ✅');
          window.location.reload();
     }
} );