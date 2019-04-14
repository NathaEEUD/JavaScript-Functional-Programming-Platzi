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

const validateInputs = () => {
  description.value ? '' : description.classList.add('is-invalid')
  calories.value ? '' : calories.classList.add('is-invalid')
  carbs.value ? '' : carbs.classList.add('is-invalid')
  protein.value ? '' : protein.classList.add('is-invalid')

  if(description.value && calories.value && carbs.value && protein.value) {
    console.log('OK!')
  }
}

description.addEventListener('keydown', () => description.classList.remove('is-invalid'))
calories.addEventListener('keydown', () => calories.classList.remove('is-invalid'))
carbs.addEventListener('keydown', () => carbs.classList.remove('is-invalid'))
protein.addEventListener('keydown', () => protein.classList.remove('is-invalid'))