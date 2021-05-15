
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
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Dapibus ultrices in iaculis nunc. Pretium nibh ipsum consequat nisl vel. Consequat ac felis donec et odio. Orci nulla pellentesque dignissim enim sit amet. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu."
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
        name: "Project 1",
        skills: ["HTML, CSS, JS"],
        url: "https://mouldy-potatoes.herokuapp.com/"
    },
    {
        
        id: "project2",
        name: "Project 2",
        skills: ["HTML, CSS, JS"],
        url: ""
    },
    {
       
        id: "project3",
        name: "Project 3",
        skills: ["HTML, CSS, JS"],
        url: ""
    },
    {
       
        id: "project4",
        name: "Project 4",
        skills: ["HTML, CSS, JS"],
        url: ""
    },
    {
      
        id: "project5",
        name: "Project 5",
        skills: ["HTML, CSS, JS"],
        url: ""
    },
    {
        
        id: "project6",
        name: "Project 6",
        skills: ["HTML, CSS, JS"],
        url: ""
    },
]

const section5Title = "Get in Touch"
const contact = {
    pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
    copyright: "",
    contactUrl: ''
}

const social = {
    github: 'https://github.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    resume: ''
}

export { animation, header, background, about, skillsBar, projects, contact, social, section2title, section3Title, section5Title }