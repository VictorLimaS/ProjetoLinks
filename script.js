
// Muda a foto
document.getElementById('file-input').addEventListener('change', function (event) {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById('profile-img').src = e.target.result;
  };
  reader.readAsDataURL(file);
});


// Faz o Botao do label aparecer para editar o Nome e o Link 
document.querySelector('.block .close').addEventListener('click', function () {
  let block = document.querySelector('.block');
  block.style.display = 'none';
});


// Adiciona os Nome e Links
document.querySelectorAll('.links span').forEach(function (span) {
  span.addEventListener('click', function () {
    let block = document.querySelector('.block');
    let nomeInput = document.getElementById('nome');
    let linkInput = document.getElementById('link');
    let label = this.parentElement;

    block.style.display = 'flex';
    nomeInput.value = label.textContent.trim();
    linkInput.value = label.getAttribute('data-link') || '';

    block.setAttribute('data-label-id', label.getAttribute('for'));
  });
});

document.getElementById('enviarBtn').addEventListener('click', function () {
  enviarFormulario();
});

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    enviarFormulario();
  }
});



function enviarFormulario() {
  let nomeInput = document.getElementById('nome').value;
  let linkInput = document.getElementById('link').value;
  let labelId = document.querySelector('.block').getAttribute('data-label-id');
  let label = document.querySelector('.links label[for="' + labelId + '"]');

  label.querySelector('span').innerHTML = '<i class="fa-solid fa-ellipsis"></i>';

  label.textContent = nomeInput;
  label.setAttribute('data-link', linkInput);

  document.querySelector('.block').style.display = 'none';
}

document.querySelectorAll('.links label').forEach(function (label) {
  label.addEventListener('click', function () {
    let link = this.getAttribute('data-link');
    if (link) {
      window.open(link, '_blank');
    }
  });
});



// mudar o nome do top 
document.addEventListener('DOMContentLoaded', function () {
  const profileName = document.querySelector('.profile p');
  const nameSection = document.querySelector('.name');

  profileName.addEventListener('click', function () {
    nameSection.style.display = 'flex';
  });

  const newnameInput = document.getElementById('newname');
  newnameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      enviarNome();
    }
  });

  document.getElementById('enviarName').addEventListener('click', enviarNome);

  function enviarNome() {
    const newname = newnameInput.value.trim();

    if (newname !== '') {
      profileName.textContent = newname;
      nameSection.style.display = 'none';
      newnameInput.value = '';
    }
  }
});



// Links do icones

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.querySelector('.fa-instagram');
  const facebookIcon = document.querySelector('.fa-facebook');
  const twitterIcon = document.querySelector('.fa-twitter');

  instagramIcon.addEventListener('click', function () {
    window.open('https://www.instagram.com/', '_blank');
  });

  facebookIcon.addEventListener('click', function () {
    window.open('https://www.facebook.com/', '_blank');
  });

  twitterIcon.addEventListener('click', function () {
    window.open('https://twitter.com/', '_blank');
  });
});


function toggleMenu() {
  let menuIcon = document.querySelector('.hambuguer');
  let box = document.querySelector('.box');

  let isVisible = window.getComputedStyle(box).display !== 'none';

  if (isVisible) {
    box.style.right = '-100%';
    setTimeout(function () {
      box.style.display = 'none';
    },);
  } else {
    box.style.display = 'flex';
    box.style.right = '0';
  }
  menuIcon.classList.toggle('change');
}



function closeBox() {
  let box = document.querySelector('.box');
  box.style.right = '-100%';
  setTimeout(function () {
    box.style.display = 'none';
  },);
  let menuIcon = document.querySelector('.hambuguer');
  menuIcon.classList.remove('change');
}



//Colors
function changeColor(color) {
  switch (color) {
    case '#0d0d0d':
      document.body.style.background = 'linear-gradient(to bottom right, #080808, #424548, #e0e1dd)';
      break;
    case '#b1afaf':
      document.body.style.background = 'linear-gradient(to bottom right, #ffffff, #8e8e8e, #7b7878)';
      break;
    case '#d534d0':
      document.body.style.background = 'linear-gradient(to bottom right, #f15bb5, #9b5de5, #fee440)';
      break;
    case '#386dc2':
      document.body.style.background = 'linear-gradient(to bottom right, #1e96fc, #072ac8, #a2d6f9)';
      break;
    default:
      document.body.style.background = color;
      break;
  }
}