
const animation = {
   
    animate: true,

    duration: 750,
    
    once: true
}

const header = {
    name: "Gurvinder",
}
const background = {
    
    type: "Snow"
}

const section2title = "About Me"
const about = {
    paragraph: "I'm 26 years old and I'm from Birmingham I was working as a software tester, but now I'm a web developer and this is my website I hope you like it!"
}

const skillsBar = [
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },{
        name: "CSS3",
        faClass: "fab fa-css3"
    },{
        name: "Javascript",
        faClass: "fab fa-js"
    },{
        name: "Node",
        faClass: "fab fa-node"
    },{
        name: "NPM",
        faClass: "fab fa-npm"
    },{
        name: "Heroku",
        faClass: "fas fa-h-square"
    }
      
]


const section3Title = "Past Projects"
const projects = [
    {
       
        id: "project1",
        name: "Project 1 - Mouldy Potatoes",
        skills: ["HTML, CSS, JS"],
        url: "https://mouldy-potatoes.herokuapp.com/"
    },
    {
        
        id: "project2",
        name: "Project 2 - Popcornpedia",
        skills: ["HTML, CSS, JS"],
        url: "https://ben-pauley.github.io/Popcornpedia-Project/"
    },
    {
       
        id: "project3",
        name: "Project 3 - Team Profile Generator",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/gurvinderdehl/TeamProfile-Generator"
    },
    {
       
        id: "project4",
        name: "Project 4 - Weather Dashboard",
        skills: ["HTML, CSS, JS"],
        url: "https://gurvinderdehl.github.io/Homework-6-Weather-Dashboard-/"
    },
    {
      
        id: "project5",
        name: "Project 5 - Workday Scheduler",
        skills: ["HTML, CSS, JS"],
        url: "https://gurvinderdehl.github.io/Homework-5-Workday-Scheduler/"
    },
    {
        
        id: "project6",
        name: "Project 6 - Budget Tracker",
        skills: ["HTML, CSS, JS"],
        url: "https://floating-headland-48587.herokuapp.com/"
    },
]

const section5Title = "Get in Touch"
const contact = {
    pitch: "If you have any queries, please contact me below!",
    copyright: "",
    contactUrl: ''
}

const social = {
    github: 'https://github.com/gurvinderdehl',
    facebook: 'https://facebook.com',
    linkedin: 'https://www.linkedin.com/in/gurvinder-dehl/',
    instagram: 'https://instagram.com',
    resume: ''
}

export { animation, header, background, about, skillsBar, projects, contact, social, section2title, section3Title, section5Title }