// portfolio_script.js

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Project Details (Optional Example)
const projects = [
    {
        title: "Project 1",
        description: "A Java application for managing tasks efficiently."
    },
    {
        title: "Project 2",
        description: "An AutoHotkey script to automate repetitive tasks."
    },
    {
        title: "Project 3",
        description: "A Python program for data analysis and visualization."
    },
    {
        title: "Project 4",
        description: "A web scraper built in Python for extracting data."
    },
    {
        title: "Project 5",
        description: "A Java-based chatbot using natural language processing."
    }
];

const projectContainer = document.querySelector('#projects .grid');
projectContainer.innerHTML = ""; // Clear existing static content

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('bg-gray-100', 'p-6', 'rounded-lg', 'shadow');

    projectElement.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-700">${project.description}</p>
    `;

    projectContainer.appendChild(projectElement);
});

// Contact Form Submission (Optional Feature)
// You can add functionality for handling form submissions, like sending data to an email API or backend service. This example only logs the data.
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log('Form Submission:', formObject);
        alert('Thank you for reaching out!');
        contactForm.reset();
    });
}

// Adding new skills dynamically
const skills = ["Java", "AutoHotkey", "Python", "JavaScript", "App Development"];
const skillsContainer = document.querySelector('#skills .flex');
skillsContainer.innerHTML = ""; // Clear existing static content

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('text-center');

    skillElement.innerHTML = `
        <h3 class="text-2xl font-semibold">${skill}</h3>
    `;

    skillsContainer.appendChild(skillElement);
});
