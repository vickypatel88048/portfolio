document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.menu-toggle');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  toggle?.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });

  if (window.Typed && document.querySelector('.typing')) {
    new Typed('.typing', {
      strings: ['Developer', 'React Developer', 'PHP Developer', 'Full Stack Developer'],
      typeSpeed: 65,
      backSpeed: 40,
      backDelay: 1300,
      loop: true
    });
  }
});
