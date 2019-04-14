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

const showInvalid = input => input.value ? '' : input.classList.add('is-invalid')

const isValid = input => input.value ? true : false 

const addKeydownEv = input => input.addEventListener('keydown', () => input.classList.remove('is-invalid'))

const validateInputs = () => {
  inputs.forEach(input => showInvalid(input))

  if(inputs.every(input => isValid(input))) {
    console.log('OK!')
  }
}

inputs.forEach(input => addKeydownEv(input))