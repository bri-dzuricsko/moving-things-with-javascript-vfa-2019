const app = "I don't do much."

var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left // "180px"
dodger.style.bottom // "0px"

document.addEventListener('keydown', function(e) {
  console.log(e.which)
})

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

function moveDodgerRight() {
  var leftNumbers = dodger.style.right.replace('px', '')
  var left = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerRight()
  }
})