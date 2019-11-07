const container = document.querySelector('.container')
const clearBtn = document.querySelector('.clear-btn')


function createGrid(n) {
 for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
   const div = document.createElement('div')
   div.style.width = `${40/n}em`;
   div.style.height = `${40/n}em`;
   div.className = 'grid-item'
   container.appendChild(div)
  }
 }
}
function clearGrid() {
 container.innerHTML = ''
 const input = prompt('please enter a required number of grids')
 createGrid(input)
}

let s = 100;
let l = 50;
let flip;

function changeColor(e) {
 if (!e.target.matches('.container > div')) return
 let h = Math.floor(Math.random() * 360);
 let rgb = e.target

 if(rgb.style.backgroundColor !== '') {
  rgb.style.backgroundColor = `hsl(${h},${s}%,${l}%)`
  if (l >= 100 || l <= 1 ) {
   flip = !flip
  }

  if(flip) {
   l++
  }else {
    l--
   }

 }else {
  l = 50
   rgb.style.backgroundColor = `hsl(${h},${s}%,${l}%)`
  }
  console.log(e.target)

}

createGrid(16)

container.addEventListener('mouseover', changeColor)
clearBtn.addEventListener('click', clearGrid)