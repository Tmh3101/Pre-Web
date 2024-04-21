function dangKy(){

    //check form
    var mssvValue = document.getElementById('mssv').value;
    var hoTenValue = document.getElementById('hoTen').value;
    var gioiTinhNam = document.getElementById('nam');
    var gioiTinhNu = document.getElementById('nu');
    var ngaySinhValue = document.getElementById('ngaySinh').value;
    var queQuanValue = document.getElementById('queQuan').value;
    var sdtValue = document.getElementById('sdt').value;
    var emailValue = document.getElementById('email').value;
    var anhDaiDienValue = document.getElementById('anhDaiDien').value;
    var pswValue = document.getElementById('psw').value;
    var psw2Value = document.getElementById('psw2').value;


    var sdtRegex = /^\d{10}$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var formCheck = true;
    var mess = '';

    if(mssvValue.length == 0){
        mess = 'Vui lòng nhập MSSV';
        formCheck = false;
    } else if(mssvValue.length != 8){
        mess = 'MSSV phải có đúng 8 ký tự';
        formCheck = false;
    } else if(hoTenValue.length == 0){
        mess = 'Vui lòng nhập họ tên';
        formCheck = false;
    } else if(!gioiTinhNam.checked && !gioiTinhNu.checked){
        mess = 'Vui lòng chọn giới tính';
        formCheck= false;
    } else if(ngaySinhValue.length == 0) {
        mess = 'Vui lòng chọn ngày sinh';
        formCheck = false;
    } else if(queQuanValue.length == 0) {
        mess = 'Vui lòng nhập quê quán';
        formCheck = false;
    } else if(sdtValue.length == 0) {
        mess = 'Vui lòng nhập số điện thoại';
        formCheck = false;
    } else if(!sdtRegex.test(sdtValue)) {
        mess = 'Số điện thoại không hợp lệ (phải có đúng 10 số)';
        formCheck = false;
    } else if(emailValue.length == 0) {
        mess = 'Vui lòng nhập email';
        formCheck = false;
    } else if(!emailRegex.test(emailValue)) {
        mess = 'Email không hợp lệ';
        formCheck = false;
    } else if(anhDaiDienValue.length == 0) {
        mess = 'Vui lòng chọn ảnh đại diện';
        formCheck = false;
    } else if(pswValue.length == 0) {
        mess = 'Vui lòng nhập mật khẩu';
        formCheck = false;
    } else if(pswValue.length < 8 || pswValue.length > 20) {
        mess = 'Mật khẩu không hợp lệ (từ 8 - 20 ký tự)';
        formCheck = false;
    } else if(psw2Value != pswValue) {
        mess = 'Mật khẩu không trùng khớp';
        formCheck = false;
    }


    //submit
    if(formCheck) {
        alert('Bạn đã đăng ký thành công');
        window.location.href = 'index.html';
    } else {
        alert(mess);
    }

}

var database = '[{"username": "admin", "password": "88888888"},' 
              +' {"username": "user1", "password": "12345678"},'
              +' {"username": "user2", "password": "87654321"}]';

var accounts = JSON.parse(database);

function dangNhap(){

    //check form
    var usernameValue = document.getElementById('username').value;
    var pswValue = document.getElementById('psw').value;

    var formCheck = false;
    var usernameCheck = false;
    var mess = '';
    
    accounts.forEach(acc => {
        if(acc.username == usernameValue){
            usernameCheck = true;
            if(acc.password == pswValue){
                formCheck = true;
            } else {
                mess = 'Mật khẩu không đúng';
            }
        }
    });

    //submit
    if(formCheck) {
        alert('Đăng nhập thành công');
        window.location.href = 'index.html';
    } else if (!usernameCheck){
        alert('Username không tồn tại');
    } else {
        alert(mess);
    }

}