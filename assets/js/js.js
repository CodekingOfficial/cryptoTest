
const modalEl = document.getElementById('open-modal-button');
modalEl.addEventListener('click', function () {
  document.getElementById('image-text-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('image-text-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
  const modal = document.getElementById('image-text-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

     // Replace with actual phone number or Messenger username
     const whatsappLink = document.querySelector('.whatsapp');
     const facebookLink = document.querySelector('.facebook');
 
     // WhatsApp number format: https://wa.me/1234567890
     whatsappLink.href = "https://wa.me/2349044043995"; // Replace with actual phone number
 
     // Facebook Messenger username format: https://m.me/username
     facebookLink.href = "https://m.me/nkombeMathias1"; // Replace with actual Messenger username
 