
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ff9d"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0099ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});


document.getElementById('year').textContent = new Date().getFullYear();


document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('active');
    
    const spans = this.querySelectorAll('span');
    if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
      
        document.querySelector('nav ul').classList.remove('active');
        document.querySelector('.mobile-menu-btn').classList.remove('active');
        
        const spans = document.querySelector('.mobile-menu-btn').querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const headerHeight = 80;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const currentId = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
   
    const header = document.querySelector('header');
    if (scrollPosition > 100) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(5, 7, 9, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.backgroundColor = 'rgba(5, 7, 9, 0.9)';
    }
});


const commands = [
    { text: "initializing system...", delay: 500 },
    { text: "running security scan...", delay: 1500 },
    { text: "accessing secure database...", delay: 1200 },
    { text: "loading security profile...", delay: 1000 },
    { text: "profile loaded.", delay: 1000 },
    { text: "welcome to my security portfolio", delay: 500 }
];

let commandIndex = 0;
let charIndex = 0;
let outputIndex = 0;
const commandElement = document.querySelector('.command');
const outputElement = document.getElementById('terminal-output');
const typingDelay = 70;

function typeCommand() {
    if (commandIndex < commands.length) {
        const command = commands[commandIndex].text;
        
        if (charIndex < command.length) {
            commandElement.textContent += command.charAt(charIndex);
            charIndex++;
            setTimeout(typeCommand, typingDelay);
        } else {
            setTimeout(() => {
                if (commandIndex < commands.length - 1) {
                    
                    outputElement.innerHTML += `<div class="line"><span class="prompt">$</span> ${commandElement.textContent}</div>`;
                    commandElement.textContent = '';
                    charIndex = 0;
                    commandIndex++;
                    setTimeout(typeCommand, typingDelay);
                } else {
                    
                    commandElement.textContent = commands[commandIndex].text;
                }
            }, commands[commandIndex].delay);
        }
    }
}


setTimeout(typeCommand, 1000);

const aboutText = "Security Researcher | Ethical Hacker | Security Engineer";
let aboutTextIndex = 0;
const typedTextElement = document.querySelector('.typed-text');

function typeAboutText() {
    if (aboutTextIndex < aboutText.length) {
        typedTextElement.textContent += aboutText.charAt(aboutTextIndex);
        aboutTextIndex++;
        setTimeout(typeAboutText, 100);
    } else {
       
        setTimeout(() => {
            typedTextElement.textContent = '';
            aboutTextIndex = 0;
            typeAboutText();
        }, 5000);
    }
}


const skillLevels = document.querySelectorAll('.skill-level');

function animateSkillsOnScroll() {
    skillLevels.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillPosition < screenPosition) {
            const width = skill.parentElement.previousElementSibling.lastElementChild.textContent;
            skill.style.width = width;
        }
    });
}


const glitchElements = document.querySelectorAll('.glitch-effect');

glitchElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('active-glitch');
    });
    
    element.addEventListener('mouseleave', () => {
        element.classList.remove('active-glitch');
    });
});


const contactForm = document.getElementById('secure-contact');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
       
        setTimeout(() => {
            const formData = new FormData(contactForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Form submitted:', formValues);
            
            
            contactForm.reset();
          
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.backgroundColor = '#28ca41';
            
           
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 3000);
        }, 2000);
    });
}


document.addEventListener('DOMContentLoaded', function() {
   
    typeAboutText();
    
  
    window.addEventListener('scroll', animateSkillsOnScroll);
    
   
    animateSkillsOnScroll();
});