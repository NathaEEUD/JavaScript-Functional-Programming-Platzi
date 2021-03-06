const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')

const inputs = [description, calories, carbs, protein]

let list = []

const attrsToString = (obj = {}) => 
  Object.keys(obj)
    .map(item => `${item}="${obj[item]}"`)
    .join('')

const tagAttrs = obj => (content = '') => 
  `<${obj.tag} ${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => typeof t === 'string' ? tagAttrs({tag: t}) : tagAttrs(t)

const tableRow = tag('tr')
const tableRows = items => compose(tableRow, tableCells)(items)

const tableCell = tag('td')
const tableCells = items => items.map(tableCell).join('')

const trashIcon = tag({tag: 'i', attrs: {class: 'fas fa-trash-alt'}})('')

const showInvalid = input => input.value ? '' : input.classList.add('is-invalid')

const isValid = input => input.value ? true : false 

const addKeydownEv = input => input.addEventListener('keydown', () => input.classList.remove('is-invalid'))

inputs.forEach(input => addKeydownEv(input))

const validateInputs = () => {
  inputs.forEach(input => showInvalid(input))

  if(inputs.every(input => isValid(input))) add()
}

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value)
  }

  list.push(newItem)
  cleanInputs()
  updateTotals()
  renderItems()
}

const updateTotals = () => {
  let calories = 0, carbs = 0, protein = 0

  list.map(item => {
    calories += item.calories,
    carbs += item.carbs,
    protein += item.protein
  })

  document.querySelector('#totalCalories').textContent = calories
  document.querySelector('#totalCarbs').textContent = carbs
  document.querySelector('#totalProtein').textContent = protein
}

const cleanInputs = () => {
  description.value = ''
  calories.value = 0
  carbs.value = 0
  protein.value = 0
}

const renderItems = () => {
  const listWrapper = document.querySelector('tbody')
  listWrapper.innerHTML = ''
  list.map((item, index) => {
    const removeButton = tag({
      tag: 'button',
      attrs: {
        class: 'btn btn-outline-danger',
        onclick: `removeItem(${index})`
      }
    })(trashIcon)

    listWrapper.innerHTML += tableRows([
      item.description,
      item.calories,
      item.carbs,
      item.protein,
      removeButton
    ])
  })
}

const removeItem = (index) => {
  list.splice(index, 1)

  updateTotals()
  renderItems()
}