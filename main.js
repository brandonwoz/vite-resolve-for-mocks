import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { fetchData } from './api';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="button" type="button">Get Data</button>
    </div>
    <div id="data" class="card"></div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const buttonEl = document.querySelector('#button');
const dataEl = document.querySelector('#data');

buttonEl.addEventListener('click', async () => {
    const data = await fetchData(10);
    console.log(data);
    dataEl.innerHTML = data.title;
});
