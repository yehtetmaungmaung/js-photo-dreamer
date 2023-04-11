import './style.css';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch('http://localhost:8080/api/v1/dream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: data.get('prompt'),
    }),
  });

  const { image } = await response.json()
  const content = document.getElementById('content');
  content.innerHTML = `<img src="${image}" width="512" />`;
});