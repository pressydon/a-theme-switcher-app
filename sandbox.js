const bodyFont = getComputedStyle(document.body).getPropertyValue('--body-font');
const backgroundColor = getComputedStyle(document.body).getPropertyValue('--background-color');
const textColor = getComputedStyle(document.body).getPropertyValue('--text-color');


const fontSelect = document.querySelector('.js-font-select');
const bgColorPicker = document.querySelector('.js-bg-color-picker');
const textColorPicker = document.querySelector('.js-text-color-picker');


const themeOptions = [fontSelect,bgColorPicker,textColorPicker];


themeOptions.forEach(function(option){
 option.addEventListener('change', (e) =>{
     document.body.style.setProperty(option.dataset.themeValue, e.target.value)
 });
});