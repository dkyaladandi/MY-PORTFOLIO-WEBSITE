const app = document.getElementById('app');

function loadPage(page) {
  const tmpl = document.getElementById(page);
  if (tmpl) {
    app.innerHTML = tmpl.innerHTML;
    // attach handlers to buttons inside loaded content
    app.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        loadPage(btn.dataset.page);
      });
    });
  }
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    loadPage(link.dataset.page);
  });
});

// Load home initially
loadPage('home');
