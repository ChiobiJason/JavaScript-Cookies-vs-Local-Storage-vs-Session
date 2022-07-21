localStorage.setItem("name", "Bob");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");


sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

document.cookie = "name=Jason; expires=" + new Date(2023, 0, 1).toUTCString();

console.log(new Date(20233, 0, 1).toUTCString());

console.log(document.cookie);