const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginButton = document.querySelector('.btnlog-in');
const close = document.querySelector('.close_icon');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

loginButton.addEventListener('click', ()=>{
    wrapper.classList.add('open');
});
close.addEventListener('click',()=>{
    wrapper.classList.remove('open');
});