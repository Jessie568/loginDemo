import '../css/style.scss'

// email-group
const email = document.getElementById('email')
email.addEventListener('keyup', ()=>{
  checkEmail(email.value)
})

function checkEmail(info) {
  const emailMag = document.getElementById('email_message')
  const emailGroup = document.getElementById('email_group')
  let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(pattern.test(info)){
    emailMag.textContent = "Valid Email"
    emailGroup.classList.remove('error')
    emailGroup.classList.add('success')
  }else{
    emailMag.textContent = "Invalid Email"
    emailGroup.classList.remove('success')
    emailGroup.classList.add('error')
  }
}




// password-group
const password = document.getElementById('password')
const passwordToggle = document.querySelector('.password_icon')

passwordToggle.addEventListener('click', ()=>{
  if(password.type === 'password'){
    password.setAttribute('type','text')
    passwordToggle.classList.remove('show')
    passwordToggle.classList.add('show')
  }else{
    password.setAttribute('type','password')
    passwordToggle.classList.remove('show')
  }
})

password.addEventListener('keyup', ()=>{
  checkPassword(password.value)  
})

function checkPassword(info){
  const passwordMsg = document.getElementById('password_message')
  passwordMsg.textContent = '需要'
  const lower = new RegExp('(?=.*[a-z])')
  const upper = new RegExp('(?=.*[A-Z])')
  const number = new RegExp('(?=.*[0-9])')
  const special = new RegExp('(?=.*[!@#\$%\^&\*])')
  const length = new RegExp('(?=.{8,})') 
  

  let errorFlag = false;

  if(!lower.test(info)){
    errorFlag = true
    passwordMsg.textContent += " 小写"
  }
  if(!upper.test(info)){
    errorFlag = true
    passwordMsg.textContent += " 大写"
  }
  if(!number.test(info)){
    errorFlag = true
    passwordMsg.textContent += " 数字"
  }
  if(!special.test(info)){
    errorFlag = true
    passwordMsg.textContent += " 特殊字符"
  }
  if(!length.test(info)){
    errorFlag = true
    passwordMsg.textContent += " 长度大于8"
  }else{
    errorFlag = false
    passwordMsg.textContent = 'Valid Password'
  }

  const passwordGroup = document.getElementById("password_group")
  if(errorFlag) {
    passwordGroup.classList.remove('success')
    passwordGroup.classList.add('error')
  }else{
    passwordGroup.classList.remove('error')
    passwordGroup.classList.add('success')
  }

}