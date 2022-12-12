const groupLogin = document.querySelector('.group-login');
const checkToken = localStorage.getItem('TOKEN');
const logoutBtn = document.querySelector('.log-btn');
if(checkToken) {
    groupLogin.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
}
if(logoutBtn) {
    logoutBtn.addEventListener('click', ()=> {
        localStorage.clear();
        location.reload();
    })
}

const getApi = async (api) =>  {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json, application/x-www-form-urlencoded'
          },
    });
    return response.json();
} 

const token = localStorage.getItem('TOKEN');
if(token) {
    const listAnnouncements = `http://localhost:3000/api/announcements?token=${token}`;
    getApi(listAnnouncements).then(res=>{
        const announcementDiv = document.querySelector('.announcement');
        announcementDiv.innerHTML = '';
        for(let i=0;i<res.context.length;i++) {
            const context = res.context[i];
            const announceEle = document.createElement('div');
        announceEle.classList.add('anoun_element');
        announceEle.innerHTML = `
        <h1>
        ${context.announcementTitle}
        </h1>
        <h2>
        ${context.announcementContent}
        </h2>
        `
        announcementDiv.appendChild(announceEle);
        }
    })
}