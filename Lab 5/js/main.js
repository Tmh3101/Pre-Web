var frm = document.getElementById("frm");

function form_check(frm) {

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var mess = 'Thanh cong!!!';
    var check = true;

    var hoVaTen = document.getElementById('hoVaTen');
    var email = document.getElementById('email');
    var psw = document.getElementById('psw');
    var psw2 = document.getElementById('psw2');

    if(hoVaTen.value.trim().length <= 0){
        mess = 'Ho ten khong duoc de trong';
        check = false;
    } else if(emailReg.test(email.value) == false){
        mess = 'Email khong hop le!!!';
        check = false;
    } else if(psw.value.length < 8){
        mess = 'Mat khau phai nhieu hon 8 ki tu!!!';
        check = false;
    } else if(psw2.value !== psw.value){
        mess = 'Mat khau khong trung khop!!!';
        check = false;
    } 
    alert(mess);
    return check;

}

var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    if(form_check()){
        frm.submit();
    }
});
