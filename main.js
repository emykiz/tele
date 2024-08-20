const nextBtn = document.getElementById('next-btn')
const middlesection = document.querySelector('.middle-section')
const firstMidlle = document.querySelector('.first-middle-section')
const nav = document.querySelector('.nav');

// LOGIN REGISTRATION
const loginForm = document.getElementById('login-for')
loginForm.addEventListener('submit', loginUser)
console.log(loginForm);
function loginUser(e){
    e.preventDefault();
    console.log('ghgh')
    window.location.href = '/home.html';
   
}
// PASSWORD HIDE

const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const eye = document.querySelector('.Eye');
const eye2 = document.querySelector('.Eye2');
const hidePw = document.querySelector('.hide-pw');
const hide = document.querySelector('.hide')
const hide2 = document.querySelector('.hide2')
hidePw.onclick = ()=>{
    // password.type = 'text'
    password.type = 'text'
    eye.style.display = 'block'
    hide.style.display = 'none'
}
eye.onclick = ()=>{
    password.type = 'password'
    password2.type = 'password'
    eye.style.display = 'none'
    hide.style.display = 'block'
}
hide2.onclick = ()=>{
    password2.type = 'text'
    eye2.style.display = 'block'
    hide2.style.display = 'none'
}
eye2.onclick = ()=>{
    password2.type = 'password'
    eye2.style.display = 'none'
    hide2.style.display = 'block'
}
//

const signup_login = document.querySelector('.signup-login')
const signup = document.querySelector('.sign-up')
const login = document.querySelector('.login')
// const loginContainer = document.querySelector('.login-container')
// const signupContainer = document.querySelector('.sign-up-container')
const signupBtn = document.querySelector('#trybtn')
signup_login.onclick = ()=>{
    signup.style.display = 'none'
    login.style.display = 'block'
    
    // loginContainer.style.display = 'block'
}
signupBtn.onclick = ()=>{
    signup.style.display = 'block'
    login.style.display = 'none'
    nav.style.backgroundColor = '#023539';
    nav.style.color = 'white'
    console.log("touch");
    window.location.href = '/home.html';
    // signupContainer.style.display = 'block'
}
homeNav.onclick = ()=>{
    firstMidlle.style.display = 'block'
    articleSection.style.display = 'none'
    supportSection.style.display ='none'
    middlesection.style.display ='none';
    faqSection.style.display = 'none'
    login.style.display = 'none'
    signup.style.display = 'none'
}


const btns=document.querySelectorAll(".btn-class")
const articles=document.querySelectorAll(".content")
const articleSection=document.querySelector(".article-section")
const article=document.querySelector(".article")
const about = document.getElementById('About')

const aboutNav = document.getElementById('about-nav')
aboutNav.onclick = ()=>{
    articleSection.style.display = 'block'
    nav.style.backgroundColor = '#023539';
    nav.style.color = 'white'
    supportSection.style.display ='none'
    firstMidlle.style.display ='none';
    middlesection.style.display ='none';
    faqSection.style.display = 'none'
    login.style.display = 'none'
    signup.style.display = 'none'
}


articleSection.addEventListener("click", function(e){
    
    const id=e.target.dataset.id
    if (id){

        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active')
        })
        articles.forEach(function (article) {
            console.log(article)
            article.classList.remove('active')
        })
        const element=document.getElementById(id)
        element.classList.add('active')
    }
    console.log(article)
    
})

const supportNav = document.querySelector('#support-nav')

const a = document.getElementsByTagName('a')
const supportSection = document.querySelector('.support-section')
supportNav.onclick = ()=>{
    nav.style.backgroundColor = 'white';
    nav.style.color = '#023539'
    supportSection.style.display ='block'
    articleSection.style.display = 'none'
    firstMidlle.style.display ='none';
    middlesection.style.display ='none';
    faqSection.style.display = 'none'
    login.style.display = 'none'
    signup.style.display = 'none'
}



const faqBtn = document.querySelector('.faq-btn')
const faqSection = document.querySelector('.faq-section')
faqBtn.onclick = ()=>{
    supportSection.style.display ='none'
    faqSection.style.display = 'block'
    articleSection.style.display = 'none'
    login.style.display = 'none'
    signup.style.display = 'none'
}

const loginNav = document.getElementById('login-nav');
// const login = document.querySelector('.login');
loginNav.onclick = ()=>{
    login.style.display = 'block'
    articleSection.style.display = 'none'
    firstMidlle.style.display ='none';
    middlesection.style.display ='none';
    faqSection.style.display = 'none'
    supportSection.style.display ='none'
    nav.style.backgroundColor = '#023539';
    nav.style.color = 'white'
}


// Users Registration
const registerForm = document.getElementById('register-form')
registerForm.addEventListener('submit', registerUser)
console.log(registerForm)
function registerUser(e){
   
   
    e.preventDefault();
    const sOrganization = document.getElementById('Organization').value;
    const Createname = document.getElementById('name').value;
    const phoneEmail = document.getElementById('phone/email2').value;
    const createPassword = document.getElementById('password2').value;
    const data = {
        'organization':sOrganization,
        'fullName':Createname,
        'email':phoneEmail,
        'password':createPassword,
    }
    console.log(data);
    try {
        fetch('http://localhost:4000/app/signup',{
            method:'POST',
            headers : {
                'Content-Type':'application/json',
                // "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data)
        }).then(res=>{
            console.log('finished fetching')
            res.json().then(obj => {
                // console.log(obj);
                // console.log(obj['data']);
            })
        })
    } catch (error) {
        console.log(error);
    }
    window.location.href = '/home.html';
}

