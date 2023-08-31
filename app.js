// objects

// var obj = {
//     s_id : '01',
//     s_name : 'ahmed',
//     s_age : 19,
//     s_roll : 'Wma 123',
// }
// for(var a in obj){
//     document.write(a,' : ',obj[a],'<br>')
// }

// document.write(obj.s_id,obj.s_name)
// console.log(obj)


// objects

// localStorage

// localStorage.setItem('firstName','Ahmed')
// localStorage.clear()


// localStorage

// sessionstorage

// sessionStorage.setItem('Name','Ahmed')
// sessionStorage.clear()

// sessionstorage

// project1

function signup(){
    var a = document.getElementById('semail').value
    var b = document.getElementById('spass').value
    var c = localStorage.setItem('Email',a)
    var d =localStorage.setItem('Password',b)
    location.href = './signin.html'
}

function signin(){
    var a = document.getElementById('lemail').value
    var b = document.getElementById('lpass').value
    if(a==localStorage.getItem('Email') && b==localStorage.getItem('Password')){
        location.href ='./welcome.html'
    }
    else{
        alert('First Sign Up Yourself')
        location.href = './signup.html'
        
    }
}

function logout(){
    alert('Are you sure')
    localStorage.clear()
    location.href = './signin.html'
}














// project1