document.querySelectorAll('.card-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const card = this.querySelector('.card');
    const target = this.getAttribute('href');

    card.classList.add('animate__animated', 'animate__pulse');

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
});
