var form = document.getElementById('form');
var input = document.getElementById('search');
var searchButton = document.getElementById('srch');
var shpCrtButton = document.getElementById('shp-crt');

shpCrtButton.addEventListener('click', function(event){
    event.preventDefault();
});

function checkValidSearch(){
    return (input.value.trim() !== '') ? true : false;
}

input.addEventListener('keyup', function(event) {
    event.preventDefault(event);
    if (event.key === 32 && checkValidSearch()) {
        form.submit();
    }
});

searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    if(checkValidSearch()){
        form.submit();
    }
});

function show() {
    var url = new URL(window.location);
    var mess = url.searchParams.get('search');
    document.getElementById('mess').innerText = mess;
}

function form_check(frm) {

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var mess = 'Thanh cong!!!';
    var check = true;

    if(emailReg.test(frm.email.value) == false){
        mess = 'Email khong hop le!!!';
        check = false;
    } else if(frm.psw.value.length < 8){
        mess = 'Mat khau phai nhieu hon 8 ki tu!!!';
        check = false;
    } else if(frm.psw2.value !== frm.psw.value){
        mess = 'Mat khau khong trung khop!!!';
        check = false;
    } else if(frm.hoTen.value.length < 4){
        mess = 'Ho ten phai dai hon 4 ki tu';
        check = false;
    } else if(frm.content.value.length < 10){
        mess = 'Noi dung phai co hon 10 ki tu';
        check = false;
    }
    alert(mess);
    return check;

}

function lienhe_check(frm){
    
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var mess = 'Thanh cong!!!';
    var check = true;
    if(frm.hoTen.value.length < 4){
        mess = 'Ho ten phai dai hon 4 ki tu';
        check = false;
    } else if(emailReg.test(frm.email.value) == false){
        mess = 'Email khong hop le!!!';
        check = false; 
    } else if(frm.content.value.length < 10){
        mess = 'Noi dung phai co hon 10 ki tu';
        check = false;
    }
    alert(mess); 
    return check;
}


var itemList = {	
    "sp001":{"name":"Sữa Chua Vị Kiwi","price":21000,"photo":"images/sanpham/kiwi.jpg"},
	"sp002":{"name":"Sữa Chua Vị Xoài","price":22000,"photo":"images/sanpham/mango.jpg"},
	"sp003":{"name":"Sữa Chua Vị Dưa lưới","price":23000,"photo":"images/sanpham/cantaloupe.jpg"},
	"sp004":{"name":"Sữa Chua Vị Mâm Xôi","price":24000,"photo":"images/sanpham/blackberry.jpg"},
	"sp005":{"name":"Sữa Chua Vị Dâu Tây","price":25000,"photo":"images/sanpham/strawberry.jpg"},
	"sp006":{"name":"Sữa Chua Vị Việt Quất","price":26000,"photo":"images/sanpham/blueberry.jpg"},
	"sp007":{"name":"Sữa Chua Vị Bưởi","price":27000,"photo":"images/sanpham/grapes.jpg"},
    "sp008":{"name":"Sữa Chua Vị Táo Xanh","price":28000,"photo":"images/sanpham/green-apple.jpg"},
	"sp009":{"name":"Sữa Chua Vị Dứa","price":29000,"photo":"images/sanpham/pineapple.jpg"},
};

function addCart(masp){
    var soluong = document.getElementById(masp);
    if(soluong <= 0) return;
    if(typeof localStorage[masp] == 'undefined') window.localStorage.setItem(masp, soluong);
    else {
        var soluong_curr = window.localStorage.getItem(masp);
        if(soluong + soluong_curr > 100) {
            alert('Vuot qua so luong quy dinh (khong qua 100)');
            window.localStorage.setItem(masp, 100);
            return;
        }
        window.localStorage.setItem(masp, soluong + soluong_curr);
    }
    alert('Da them ' + soluong + ' san pham: ' + itemList[masp].name + ' thanh cong'); 
}
