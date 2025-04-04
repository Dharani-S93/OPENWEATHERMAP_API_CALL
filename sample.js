window.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });

        });
    });

    var city= document.getElementById("City");
    const temp= document.getElementById("temp");
    const imu= document.getElementById("humi");

    var data = fetch("https://api.openweathermap.org/+6/2.5/weather?lat=10.6588234&lon=77.00873&appid=window.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });

        });
    });
    var city= document.getElementById("City");
    const temp= document.getElementById("temp");
    const imu= document.getElementById("humi");

    var data = fetch("https://api.openweathermap.org/data/2.5/weather?lat=10.6588234&lon=77.00873&appid="29debe273031e13106635d96e43db00a")
    .then(Response=>{
        
        console.log(JSON.stringify(Response));
    })
    
    
})")
    .then(Response=>{
        
        console.log(JSON.stringify(Response));
    })
    
    
})