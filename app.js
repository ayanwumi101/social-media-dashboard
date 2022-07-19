let root = document.documentElement;
const theme = document.getElementById('theme');
const text = document.querySelector('.dark-text');

theme.addEventListener('click', function(){

    root.classList.toggle('change');
    text.textContent = 'Light Mode';

})