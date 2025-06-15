// Functionality of active link in navbar
let navLinks = document.querySelectorAll('.nav-links');
navLinks[0].classList.add("active");
navLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        removeActive(navLinks);
        e.target.classList.add("active");
    });

});

function removeActive(navLinks){
    navLinks.forEach((link)=>{
        link.classList.remove("active")
});
}

// data for projects section
const projects = [
  {
    title: "Responsive Ecommerce Website",
    tools: "HTML, CSS, Responsive Design",
    githubRepo: "https://github.com/your-username/ecommerce-website", 
    githubPages: "https://your-username.github.io/ecommerce-website" ,
    imgUrl : "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" 
  },
  {
    title: "Interactive Calculator",
    tools: "HTML, CSS, JS, Event Handling, DOM Manipulation",
    githubRepo: "https://github.com/your-username/interactive-calculator", 
    githubPages: "https://your-username.github.io/interactive-calculator" ,
    imgUrl : "https://static.vecteezy.com/system/resources/previews/004/987/809/non_2x/calculator-icon-with-long-shadow-free-vector.jpg" 
  },
  {
    title: "Todo List App",
    tools: "HTML, CSS, JS, DOM Manipulation",
    githubRepo: "https://github.com/your-username/todo-list-app", 
    githubPages: "https://your-username.github.io/todo-list-app" ,
    imgUrl : "https://png.pngtree.com/png-clipart/20230928/original/pngtree-flat-vector-illustration-of-a-todo-list-concept-vector-png-image_12900036.png" 
  },
  {
    title: "Personal Portfolio Website",
    tools: "HTML, CSS, JS, Responsive, UI/UX Design",
    githubRepo: "https://github.com/your-username/portfolio-website", 
    githubPages: "https://your-username.github.io/portfolio-website" ,
    imgUrl : "https://static.vecteezy.com/system/resources/previews/041/760/868/non_2x/personal-portfolio-illustration-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-background-vector.jpg" 
  }
];

// creating project card using JS
const projectsContainer = document.querySelector(".projects-container");
let cards = ``;
projects.forEach((project)=>{
  cards += `
            <div class="project-card ">
            <div class="project-image">
              <img src="${project.imgUrl}" alt="">
            </div>
            <div class="project-description flex-column space-between">
              <h2> ${project.title}</h2>
              <p><span>Tools : </span> ${project.tools}</p>
              <div class="btn-section flex align-center justify-center">
                <a href="${project.githubPages}"><button>Go live</button></a>
                <a href="${project.githubRepo}" target="_blank"><i class="fa-brands fa-github"></i></a>

              </div>
            </div>
          </div>
  `
});

projectsContainer.innerHTML = cards;