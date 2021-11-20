window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#nav').classList.toggle('burger-menu_active')
  })
})
