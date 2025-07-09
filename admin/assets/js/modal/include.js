function includeHTML() {
  const elements = document.querySelectorAll('[w3-include-html]');
  const promises = [];

  elements.forEach(el => {
    const file = el.getAttribute('w3-include-html');
    if (file) {
      const promise = fetch(file)
        .then(response => response.text())
        .then(html => {
          el.innerHTML = html;
          el.removeAttribute('w3-include-html');
        });
      promises.push(promise);
    }
  });

  return Promise.all(promises);
}
