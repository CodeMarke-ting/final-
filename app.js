// // web store
// // localstorage, sessionStorage, cookie

// // localStorage.setItem("isLogged", "true");

// // const isLogged = localStorage.getItem("isLogged");

// // localStorage.setItem("color-mode", "dark");
// // 5mb limit
// // console.log(isLogged);

// // locaSlStorage.removeItem("color-mode");

// // localStorage.clear();
// // const button = document.querySelector("button");
// // const input = document.querySelector("input");
// // const main = document.querySelector("main");
// // const span = document.querySelector("span");

// // let value = "";

// // input.addEventListener("input", (e) => {
// //   console.log(e.target.value);
// //   value = e.target.value;
// // });

// // button.addEventListener("click", () => {
// //   console.log(value);
// //   span.textContent = value;
// //   input.value = "";
// //   sessionStorage.setItem("fav-color", value);
// // });

// // window.onload = () => {
// //   const favColor = sessionStorage.getItem("fav-color");
// //   if (favColor) {
// //     span.textContent = favColor;
// //   } else {
// //     span.textContent = "fav color does not exist";
// //   }
// //   console.log(favColor);
// // };

// // const arr = [1, 2, 3];

// // const data = [
// //   {
// //     id: 1,
// //     category: "products",
// //   },
// //   {
// //     id: 2,
// //     category: "electronics",
// //   },
// // ];

// // localStorage.setItem("arr", JSON.stringify(data));

// // const dataFromLS = JSON.parse(localStorage.getItem("arr"));

// // console.log(dataFromLS);

// // const date = new Date();
// // console.log(date);

// // console.log(typeof date);

// // const months = [
// //   "jan",
// //   "feb",
// //   "mar",
// //   "apr",
// //   "may",
// //   "jun",
// //   "jul",
// //   "aug",
// //   "sep",
// //   "oct",
// //   "nov",
// //   "dec",
// // ];

// // console.log(date.getFullYear());
// // console.log(date.getMonth());
// // console.log(date.getDay());
// // console.log(date.getDate());
// // console.log(`${months[date.getMonth()]}`);

// // console.log(date.getHours());
// // console.log(date.getMinutes());
// // console.log(date.getSeconds());
// // console.log(date.getMilliseconds());

// // setInterval(() => {
// //   const date = new Date();
// //   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// // }, 1000);
// ! todo
// const todoInput = document.querySelector(".todo-input");
// const addTodo = document.querySelector(".add-todo");
// const todoContainer = document.querySelector(".todo-container");

// let todoContent = "";
// let todos = [];

// todoInput.addEventListener("input", (e) => {
//   todoContent = e.target.value;
// });

// window.onload = () => {
//   const todosformLS = JSON.parse(localStorage.getItem("todos"));
//   if (todosformLS) {
//     todos = todosformLS;
//     displayTodos(todos);
//   }
// };

// function displayTodos(todos) {
//   todos.forEach((todo) => {
//     const todoUI = `
//               <div class="card mt-3">
//                   <div class="card-body d-flex justify-content-between">
//                       <h5 class="card-title">${todo.text}</h5>
//                       <button class="btn btn-danger delete-btn" delete-id=${todo.id}>X</button>
//                   </div>
//               </div>
//       `;

//     todoContainer.innerHTML += todoUI;
//   });

//   deleteTodo();
// }

// function deleteTodo() {
//   const deleteButtons = document.querySelectorAll(".delete-btn");

//   deleteButtons.forEach((deleteTodo) => {
//     deleteTodo.addEventListener("click", (e) => {
//       const deleteID = e.target.getAttribute("delete-id");

//       todos = todos.filter((todo) => todo.id != deleteID);

//       localStorage.setItem("todos", JSON.stringify(todos));

//       clear();
//       displayTodos(todos);
//     });
//   });
// }

// addTodo.addEventListener("click", (e) => {
//   e.preventDefault();

//   let todo = {
//     id: todos.length,
//     text: todoContent,
//   };

//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));

//   clear();
//   displayTodos(todos);
// });

// function clear() {
//   todoInput.value = "";
//   todoContent = "";
//   todoContainer.innerHTML = "";
// }

// ! form handling
const form = document.querySelector("form");

const submitBtn = document.querySelector(".submit-btn");

const username = document.querySelector(".username");
const userError = document.querySelector(".user-error");

const passwordInput = document.querySelector(".password-input");
const passError = document.querySelector(".password-error");

const favColor = document.querySelector("select");
const selectError = document.querySelector(".select-error");

const licence = document.querySelector(".licence");
const erorrLicence = document.querySelector(".licence-error");

const email = document.querySelector(".email");
const emailError = document.querySelector(".email-error");

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let isValid = true;

  if (!username.value.trim()) {
    error("enter username", userError);
    isValid = false;
  }

  if (!passwordInput.value.trim()) {
    error("enter password", passError);
    isValid = false;
  } else if (passwordInput.value.trim().length < 8) {
    error("password must be at least 8 charachters", passError);
    isValid = false;
  }

  if (favColor.selectedIndex === 0) {
    error("select a color", selectError);
    isValid = false;
  }

  if (!licence.checked) {
    error("check a licence", erorrLicence);
    isValid = false;
  }

  if (!regex.test(email.value)) {
    error("enter vaild mail", emailError);
    isValid = false;
  }

  if (isValid) {
    let formData = {
      username: username.value,
      email: email.value,
      password: passwordInput.value,
      favColor: favColor.value,
      licence: licence.checked,
    };
    console.log("send", formData);
  }
});

function error(errormessage, error) {
  error.classList.toggle("d-none");
  error.textContent = errormessage;

  setTimeout(() => {
    error.classList.toggle("d-none");
  }, 3000);
}
