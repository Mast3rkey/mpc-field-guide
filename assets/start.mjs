// Keep the accessibility jump separate from hash-based page navigation.
const skip = document.querySelector('.skip');
skip?.addEventListener('click', event => {
  event.preventDefault();
  const target = document.getElementById('main');
  target?.focus({preventScroll:true});
  target?.scrollIntoView({behavior:'auto',block:'start'});
});
await import('./app.js');
