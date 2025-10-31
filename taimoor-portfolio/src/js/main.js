// JavaScript functionality for Taimoor Khan's portfolio website

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    if (name === '') {
        alert('Name is required.');
        valid = false;
    }
    if (email === '') {
        alert('Email is required.');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }
    if (message === '') {
        alert('Message is required.');
        valid = false;
    }

    return valid;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to load project data from JSON file
function loadProjects() {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <img src="${project.image}" alt="${project.title}">
                    <p>${project.description}</p>
                    <a href="${project.liveDemo}" target="_blank">Live Demo</a>
                    <a href="${project.repository}" target="_blank">Repository</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        // Here you can add code to send the form data to a server
    }
});

// Load projects on page load
document.addEventListener('DOMContentLoaded', loadProjects);