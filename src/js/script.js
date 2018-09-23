// Fetching teachers

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


//  Sticky navbar

const navbar = document.querySelector(".navigation");

let navbarY = navbar.offsetTop;

window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    windowY >= navbarY ? navbar.classList.add("to-top") : navbar.classList.remove("to-top");
});


// Changing active class

const changeActive = (entries, observer) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			document.querySelector('.active').classList.remove('active');
			const id = entry.target.getAttribute('id');
            document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

const options = {
	threshold: 0.55
}

const observer = new IntersectionObserver(changeActive, options);

const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});

// Submit button

const privacyCheckbox = document.getElementById('privacy-checkbox');
const submitBtn = document.getElementById('privacy-btn');

privacyCheckbox.onchange = function() {
    submitBtn.disabled = !this.checked;
};