const container=document.querySelector('.container');
const url ='https://picsum.photos/'
createimgaes()
function createimgaes(){
  container.innerHTML=''
  for(let i = 0;i < 12;i++){
        
       const child =document.createElement('div');
       child.classList.add('child');
       child.innerHTML = `
          <img src="${url}${getrandomnumbers()}">
       `

       child.addEventListener('animationend',()=>{
            
       })
       container.appendChild(child);
       rotateallements()
  }
}
function getrandomnumbers(){
    let first = Math.floor(Math.random() * 1000) + 800;
    let second = Math.floor(Math.random() * 1000) + 800;
    return `${first}/${second}`
}
setInterval(createimgaes,10000);


function rotateallements(){
    const chids = document.querySelectorAll('.child');
    chids.forEach( item => item.classList.add('in'))
}
const sqcoords=sec