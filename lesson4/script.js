const sections=document.querySelectorAll('section');
const page2=document.querySelector('#page2');
const page3=document.getElementById('page3');
let firsbuttvalue = 1;
let secondbuttvalue = 2;
setimg();
function setimg(){
     sections.forEach(section =>{
         section.style.backgroundImage =`url('https://picsum.photos/${getrandomvalues()}')`
     })
}

function getrandomvalues(){
    let value =  Math.floor(Math.random() * 1000) + 200;
    return `${value}/${value + 1}`
}

page2.addEventListener('click',()=>{
     sections[firsbuttvalue].scrollIntoView({behavior : 'smooth'})
})
page3.addEventListener('click',()=>{
     sections[secondbuttvalue].scrollIntoView({behavior : 'smooth'})
})

