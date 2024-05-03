const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')
    toggleBtn.onclick = function(){
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')

      toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
    
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab")
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyYSac0iZNPdhYmNyLCnBDqfCadmB1L8EToYrVgg0tan0e2rEO1KHwnP9rs39S0Q_mP-A/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg= document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML='Message sent successfully'
          setTimeout(function(){
            msg.innerHTML=""
          },5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })