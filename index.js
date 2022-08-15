
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  console.log("clicked")
  count += 1
  countEl.innerText = count
}

function save() {
  console.log(count)
  
}

