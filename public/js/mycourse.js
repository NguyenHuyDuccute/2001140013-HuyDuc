
const getApi = async (api) =>  {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json, application/x-www-form-urlencoded'
          },
    });
    return response.json();
} 
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
    const listAnnouncements = `http://localhost:3000/api/my/courses?token=${token}`;
    getApi(listAnnouncements).then(async res=>{
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
            <button class="btn btn-outline-success" type="button"><a href="doquizz.html" style=text-decoration:none;">Do Quiz</a></button>
            
        `
        coursesDiv.appendChild(courseItem);
        }
    })
}
