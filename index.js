let holder =document.querySelector('.holder')
let yellow = document.querySelector('.yello')
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let c3 = document.querySelector('.c-3')
let c2 = document.querySelector('.c-2')

function start(){
  holder.style.justifyContent = 'start'
  red.style.height = '65px'
  yellow.style.height= '65px'
  green.style.height = '65px'
}

function center(){
  holder.style.justifyContent = 'center'
}

function end(){
  holder.style.justifyContent = 'end'
}

function spacebetween(){
  holder.style.justifyContent = 'space-between'
}

function spacearound(){
  holder.style.justifyContent = 'space-around'
}

function spaceevenly(){
  holder.style.justifyContent = 'space-evenly'
}

function row(){
  holder.style.flexDirection = 'row'
  c2.style.display = 'flex'
  c3.style.display = 'none'

}

function column(){
  holder.style.flexDirection = 'column'
  c2.style.display = 'none'
   c3.style.display = 'flex'

}

function stretch(){
    red.style.height = '100%'
     yellow.style.height = '100%'
    green.style.height = '100%'
}
stretch()

// align commands functions

function Astart() {
  holder.style.alignItems = 'start'
  red.style.width = '65px'
  yellow.style.width = '65px'
  green.style.width = '65px'
  red.style.height = '65px'
  yellow.style.height= '65px'
  green.style.height = '65px'
}

function Acenter() {
  holder.style.alignItems = 'center'
}

function Aend() {
  holder.style.alignItems = 'end'
}

function Astretch() {
  red.style.width = '100%'
  yellow.style.width = '100%'
  green.style.width = '100%'
}





