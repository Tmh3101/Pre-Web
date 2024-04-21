function dangKy(){

    function checkForm(){
        var mssvValue = document.getElementById('mssv').value;
        var hoTenValue = document.getElementById('hoTen').value;
        var gioiTinhNam = document.getElementById('nam');
        var gioiTinhNu = document.getElementById('nu');
        var ngaySinhValue = document.getElementById('ngaySinh').value;
        var queQuanValue = document.getElementById('queQuan').value;
        var sdtValue = document.getElementById('sdt').value;
        var emailValue = document.getElementById('email').value;
        var anhDaiDienValue = document.getElementById('anhDaiDien').value;
        var psw1Value = document.getElementById('psw1').value;
        var psw2Value = document.getElementById('psw2').value;

        var toDay = new Date().toISOString().slice(0, 10);
        var sdtRegex = /^\d{10}$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        var result = true;

        if(mssvValue.length == 0) {
            alert('Vui lòng nhập MSSV');
            result = false;
        } else if (mssvValue.length != 8){
            alert('MSSV phải có đúng 8 ký tự');
            result = false;
        } else if(hoTenValue.length == 0){
            alert('Vui lòng nhập họ tên');
            result = false;
        } else if(!gioiTinhNam.checked && !gioiTinhNu.checked){
            alert('Vui lòng chọn giới tính');
            result = false;
        } else if(queQuanValue.length == 0){
            alert('Vui lòng nhập quê quán');
            result = false;
        } else if(anhDaiDienValue.length == 0){
            alert('Vui lòng chọn ảnh đại diện');
            result = false;
        } else if(ngaySinhValue.length == 0 || ngaySinhValue > toDay){
            alert('Ngày sinh không hợp lệ');
            result = false;
        } else if(!sdtRegex.test(sdtValue)){
            alert('Số điện thoại không hợp lệ (phải có đúng 10 kí tự số)');
            result = false;
        } else if(!emailRegex.test(emailValue)){
            alert('Email không hợp lệ');
            result = false;
        } else if (psw1Value.length < 8 || psw1Value.length > 20){
            alert('Mật khẩu phải có từ 8 đến 20 ký tự');
            result = false;
        } else if(psw2Value != psw1Value){
            alert('Mật khẩu không trùng khớp');
            result = false;
        }

        return result;
    }

    if(checkForm()){
        alert('Bạn đã đăng ký thành công');
        window.location.href = 'index.html';
    }
    
}




var db = '[{"username": "user1", "password": "12345678"},' +
         ' {"username": "admin", "password": "88888888"}]';
var accounts = JSON.parse(db);

function dangNhap(){

    function checkForm(){
        var usernameValue = document.getElementById('username').value;
        var pswValue = document.getElementById('psw').value;

        var result = false;
        var checkUsername = false;

        accounts.forEach(acc => {
            if(acc.username == usernameValue){
                checkUsername = true;
                if(acc.password == pswValue) result = true;
                else alert('Mật khẩu không chính xác');
            }
        });

        if(!checkUsername) alert('Username không tồn tại');

        return result;
    }

    if(checkForm()){
        alert('Đăng nhập thành công');
        window.location.href = 'index.html';
    }
    
}