
const getApi = async (api) =>  {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json, application/x-www-form-urlencoded'
          },
    });
    return response.json();
} 
console.log('heere')
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

const token = localStorage.getItem('TOKEN');
if(token) {
    const listAnnouncements = `http://localhost:3000/api/all/courses?token=${token}`;
    getApi(listAnnouncements).then(async res=>{
        console.log('res',res)
        const coursesDiv = document.querySelector('.courses');
        coursesDiv.innerHTML = '';
        for(let i=0;i<res.length;i++) {
            const context = res[i];
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            courseItem.innerHTML = `
            <p class="course-name" data-index="${context.id}">
                ${context.coursename}
            </p>
            <button class="btn btn-outline-success enroll-btn" type="button">Enroll</button>
        `
        courseItem.setAttribute('data-index', context.id);
        coursesDiv.appendChild(courseItem);
        }
        const enrollBtn = document.querySelectorAll('.enroll-btn');
        if(enrollBtn) {
            for(let i=0;i<enrollBtn.length;i++) {
                enrollBtn[i].addEventListener('click', async () => {
                const courseItem = enrollBtn[i].parentElement;
                const courseId = courseItem.getAttribute('data-index');
                const idUser = localStorage.getItem('ID_USER');
                if(idUser) {
                    const data = {
                        courseId: courseId,
                        userId: idUser,
                        token: token,
                    }
                    const url = 'http://localhost:3000/api/my/create';
                    location.reload();
                    await postData(url, data);
                }

        })
    }
}
    })
}
