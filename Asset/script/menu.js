let _name = ""

window.onload = function() {
    const ob = JSON.parse(window.localStorage.getItem("_data"))
    //console.log(JSON.parse(window.localStorage.getItem("_data")))
    try {
        if ((ob['score'] / 20)*100 < 70) {
            document.getElementById('menu-score').innerText = `แบบทดสอบ : ยังไม่ผ่าน`
        } else {
            document.getElementById('menu-score').innerText = `แบบทดสอบ : ผ่าน`
        }
    } catch {}
    
}

try {
    _name = JSON.parse(window.localStorage.getItem("_data"))
    //console.log(_name)
    if (_name) {
        document.getElementById('menu-container').style.display = 'none'
        document.getElementById('menu-selector').style.display = 'block'
        document.getElementById('menu-name').innerText = `ยินดีต้อนรับ : ${_name['name']}`
    }else {
        document.getElementById('menu-container').style.display = 'block'
        document.getElementById('menu-selector').style.display = 'none'
    }
}catch (er) {
    console.error('err : ', er)
}

document.getElementById('login-btn').addEventListener('click', (e) => {
    
    const _dataName = document.getElementById('login-data').value
    const user = {
        "name" : _dataName,
        "score" : 0
    }
    if (_dataName != "") {
        localStorage.setItem("_data", JSON.stringify(user));
        document.getElementById('menu-container').style.display = 'none'
        document.getElementById('menu-selector').style.display = 'block'
        document.getElementById('menu-name').innerText = `ยินดีต้อนรับ : ${_dataName}`
        const ob = JSON.parse(window.localStorage.getItem("_data"))
        if ((ob['score'] / 20)*100 < 70) {
            document.getElementById('menu-score').innerText = `แบบทดสอบ : ยังไม่ผ่าน`
        } else {
            document.getElementById('menu-score').innerText = `แบบทดสอบ : ผ่าน`
        }
    } else {
        
        document.getElementById('label-login').innerText = "ชื่อของคุณ"
        document.getElementById('label-login').style.animation = "shake 350ms ease"
        document.getElementById('label-login').style.color = '#808080'
        document.getElementById('label-login').style.color = '#fe0000'
        
        setTimeout(() => {
            document.getElementById('label-login').style.color = '#808080'
            document.getElementById('label-login').style.animation = "none"
        }, 400);
    }   
})

document.getElementById('exit').addEventListener('click', (e) => {
    localStorage.removeItem('_data')
    location.reload()
    const thx = window.open('../components/thx.html', '_self')
})

function preventBack() { 
    window.history.forward();  
} 
  
setTimeout("preventBack()", 0); 
  
window.onunload = function () { null }; 