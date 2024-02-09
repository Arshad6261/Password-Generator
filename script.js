
function generatePassword(){
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let upperCase = lowerCase.map(ele=>ele.toUpperCase())
    let numbers = [0,1,2,3,4,5,6,7,8,9]
    let sysmbols = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','~','`',';',':','<','>','/','?',',']
    let passLength = document.getElementById('pl').value
    let checkboxInput = [];
    
    let ucCheck = document.getElementById('uc').checked
    let lcCheck = document.getElementById('lc').checked
    let numCheck = document.getElementById('num').checked
    let symCheck = document.getElementById('sym').checked
    let showPassword = document.getElementById('showPassword')

    if(ucCheck==true) checkboxInput.push(upperCase)
    if(lcCheck==true) checkboxInput.push(lowerCase)
    if(numCheck==true) checkboxInput.push(numbers)
    if(symCheck==true) checkboxInput.push(sysmbols)
    let finalArray = checkboxInput.flat(5)
    if(ucCheck==false && lcCheck==false && numCheck==false &&  symCheck==false){
        alert("Please choose atleat one option given below");
    }
    function generateRandomNum(){
        return Math.floor(Math.random() * finalArray.length)
    }
    if(passLength<=4) alert("Please enter password length more than 4 ")
    else{
      let password = ""
      for(let i=0;i<passLength;i++){
        password += finalArray[generateRandomNum()]
      }
      showPassword.innerText = password;
    } 
}

function copyToClipboard(){
  let password = document.getElementById("showPassword").innerHTML
  const copyContent = async()=> {
    try{
      await navigator.clipboard.writeText(password)
      alert("Password copied to clipboard : " + password)
    }catch(err){
      alert("Failed to copy : ",err)
    }
  }
  copyContent()
}