async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
const urlLogin = 'http://localhost:3000/register';

const form = document.querySelector('form');
const regisBtn = document.querySelector('#regis-btn');

regisBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const usernameRegis = document.querySelector('#username-regis');
    const passwordRegis = document.querySelector('#password-regis');
    const data = {
        username: usernameRegis.value,
        password: passwordRegis.value,
    }
    const result = postData(urlLogin, data).then(res=>{
        const popup = document.querySelector('.popup');
        popup.style.display = 'flex';
        popup.innerHTML = '';
        const notifi = document.createElement('div');
        if(res.success) {
                localStorage.setItem('TOKEN', res.accessToken);
                notifi.innerHTML = `<p class="message">Register successfully, you can log in now</p>`
                    notifi.classList.add('notifi-success');
                popup.appendChild(notifi);
                const redirect = () => {
                window.location.href = 'login.html';
            }
            setTimeout(redirect, 3000);
        } else {
            notifi.classList.add('notifi-error');
            notifi.innerHTML = `<p class="message">Register fail, register try again!</p>`;
            popup.appendChild(notifi);
            setTimeout(()=>{
                popup.style.display = 'none';
            }, 3000);
        }
    });
})