// JavaScript for interactive elements (optional)
// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a[href^="#"]');
    
//     for (const link of links) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             target.scrollIntoView({ behavior: 'smooth' });
//         });
//     }
// });

// Function to close the top bar
function closeTopBar() {
    document.querySelector('.navbar').style.display = 'none';
    
    document.querySelector('.hero').style.paddingTop = '0';
}
