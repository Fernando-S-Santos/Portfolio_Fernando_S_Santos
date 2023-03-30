const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const url = form.getAttribute("action");

    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        form.reset();
        document.getElementById('mensagem-sucesso').style.display = 'block';
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('mensagem-erro').style.display = 'block';
      });
});
