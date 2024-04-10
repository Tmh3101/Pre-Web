
function fromCheck(){
    var check = true;

    var mssvValue = document.getElementById('mssv').value;
    var nameValue = document.getElementById('name').value;
    var dobValue = document.getElementById('dob').value;
    var avatarValue = document.getElementById('avatar').value;
    var sdtValue = document.getElementById('sdt');
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailValue = document.getElementById('email');
    var passValue = document.getElementById('pss');
    var pass2Value = document.getElementById('pss2');
    
    if(mssvValue == '') {
        check = false;
        alert("MSSV khong duoc de trong");
    }
    else if (mssvValue.length != 8){
        check = false;
        alert("MSSV phai co dung 8 ki tu");
    }
    else if(nameValue == ''){
        check = false;
        alert("Ho ten khong duoc de trong");
    }
    else if(dobValue == ''){
        check = false;
        alert("Ngay sinh khong duoc de trong");
    }
    // else if(document.getElementById('ht').value == null){
    //     check = false;
    //     alert("Que quan khong duoc de trong");
    // }
    else if(avatarValue == ''){
        check = false;
        alert("Anh dai dien khong duoc de trong");
    }
    else if(sdtValue.length < 10){
        check = false;
        alert("SĐT khong hop le");
    }
    else if(!emailReg.test(emailValue)){
        check = false;
        alert("Email khong hop le");
    }
    else if(passValue == ''){
        check = false;
        alert("Hay nhap mat khau");
    }
    else if(pass2Value != passValue){
        check = false;
        alert("Mat khau khong khop");
    }
    return check;
}

document.getElementById('dk-btn').addEventListener('click', function(){
    if(fromCheck()){
        alert("Thanh cong");
        window.location = "index.html";
    }
})







let db = '{ "account" : [' +
'{ "username":"tmh" , "password":"123" },' +
'{ "firstName":"uuu" , "lastName":"123" },' +
'{ "firstName":"ttt" , "lastName":"123" } ]}';

const accounts = JSON.parse(db);

