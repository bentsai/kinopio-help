console.log('🍉 examples ready')

const uses = document.querySelectorAll('.use')
const examples = document.querySelectorAll('.example')

function hideAll () {
  uses.forEach(use => {
    use.classList.remove('active')
  })
  examples.forEach(example => {
    example.classList.add('hidden')
  })
}

function showExample (type) {
  console.log('🍅', type, uses)
  const use = Array.from(uses).find(element => element.dataset.type === type)
  const example = Array.from(examples).find(element => element.dataset.type === type)
  use.classList.add('active')
  example.classList.remove('hidden')
}


hideAll()
showExample('brainstorming')
uses.forEach(use => {
  use.addEventListener('click', (event) => {
    hideAll()
    showExample(event.target.dataset.type)
  })
})

