const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

/* JQuery */
// let description = $('#description')
// let calories = $('#calories')
// let carbs = $('#carbs')
// let protein = $('#protein')

// // Get the value --> description.val()

// const validateInputs = () => {
//   description.value ? '' : description.addClass('is-invalid')
//   calories.value ? '' : calories.addClass('is-invalid')
//   carbs.value ? '' : carbs.addClass('is-invalid')
//   protein.value ? '' : protein.addClass('is-invalid')

//   if(description.val() && calories.val() && carbs.val() && protein.val()) {
//     console.log('OK!')
//   }
// }

// description.keypress(() => description.removeClass('is-invalid'))
// calories.keypress(() => calories.removeClass('is-invalid'))
// carbs.keypress(() => carbs.removeClass('is-invalid'))
// protein.keypress(() => protein.removeClass('is-invalid'))

/* VanillaJS */
let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')

const inputs = [description, calories, carbs, protein]

let list = []

const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = []

  for (let i = 0; i < keys.length; i++) {
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
  }

  const string = attrs.join('')

  return string
}

const tagAttrs = obj => (content = '') => `<${obj.tag} ${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => {
  if(typeof t === 'string') {
    tagAttrs({tag: t})
  } else {
    tagAttrs(t)
  }
}

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
  console.log(list)
}

const cleanInputs = () => {
  description.value = ''
  calories.value = 0
  carbs.value = 0
  protein.value = 0
}