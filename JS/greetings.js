const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { // 유저 이름 확인 및 저장
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const typedUsername = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, typedUsername); 
    paintGreetings(typedUsername)
}

function paintGreetings(username) { // greeting 표시
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) { // 저장된 유저 이름이 없을 때는 form 표시(greeting 숨김)
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("sumbit", onLoginSubmit);
} else { // 있을 때는 greeting 표시(form 숨김)
    paintGreetings(savedUsername)
}




                             