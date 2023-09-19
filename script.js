const dropArea = document.querySelector('.drag-files'),
  buttons = document.querySelectorAll('.action'),
  reload = document.querySelector('.error')

dropArea.addEventListener('dragover', () => {
  dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover')
})

buttons.forEach((button) => {
  button.addEventListener('click', (ev) => {
    const parent = button.parentNode

    console.log({ ev, parent })
    parent.remove()
  })
})

reload.addEventListener('click', () => {
  window.location.reload()
})
