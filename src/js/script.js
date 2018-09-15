const teachersBoxes = document.querySelectorAll(".teacher-box");
const teacherNamesBack = document.querySelectorAll(".teacher-box__name--back")

const url = "https://randomuser.me/api/?results=6&nat=gb,dk,fr&inc=name,picture";

function getTeachers() {
    fetch(url)
        .then(res => res.json())
        .then(teachers => {
            teachersBoxes.forEach((teacherBox, i) => {
                teacherBox.children[0].src = teachers.results[i].picture.large;
                teacherBox.children[1].textContent = `${teachers.results[i].name.first} ${teachers.results[i].name.last}`;
            })
            return teachers
        })
        .then(teachers => teacherNamesBack.forEach((teacherName, i) => teacherName.textContent = `${teachers.results[i].name.first} ${teachers.results[i].name.last}`))
        .catch(err => console.log(err))
}

getTeachers();

const navbar = document.querySelector(".navigation");

let navbarY = navbar.offsetTop;

window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    windowY >= navbarY ? navbar.classList.add("to-top") : navbar.classList.remove("to-top");
});