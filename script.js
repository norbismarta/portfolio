document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente caricato!');


const buttonclick = () => {
    console.log('Button clicked');
}

const button = document.getElementById('cta-button');
button.addEventListener('click', buttonclick);


// get all a tags with "#" in href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

});