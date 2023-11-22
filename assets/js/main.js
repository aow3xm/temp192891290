var selectElement = document.querySelector(`.baiTap__content #luaChonBaiTap`);
var baiTap1BtnElement = document.querySelector(`.baiTap__content .baiTap1 .submitBtn`);
var baiTap2BtnElement = document.querySelector(`.baiTap__content .baiTap2 .submitBtn`);
var baiTap3BtnElement = document.querySelector(`.baiTap__content .baiTap3 .submitBtn`);
var baiTap4BtnElement = document.querySelector(`.baiTap__content .baiTap4 .submitBtn`);
var baiTap5BtnElement = document.querySelector(`.baiTap__content .baiTap5 .submitBtn`);
const ERR_MSG = `Tham số không hợp lệ!`;

selectElement.addEventListener(`change`, function(){
    var baiTap = {
        'baiTap1': document.querySelector(`.baiTap__content .baiTap1`),
        'baiTap2': document.querySelector(`.baiTap__content .baiTap2`),
        'baiTap3': document.querySelector(`.baiTap__content .baiTap3`),
        'baiTap4': document.querySelector(`.baiTap__content .baiTap4`),
        'baiTap5': document.querySelector(`.baiTap__content .baiTap5`)
    };

    for (var key in baiTap) {
        if (baiTap.hasOwnProperty(key)) {
            baiTap[key].style.display = (key === this.value) ? 'flex' : 'none';
        }
    }
});
baiTap1BtnElement.addEventListener(`click`, function(){
    var luongMotNgay = document.querySelector(`.baiTap__content .baiTap1 input#luongMotNgay`).value*1;
    var soNgayLam = document.querySelector(`.baiTap__content .baiTap1 input#soNgayLam`).value*1;
    var ketQua = document.querySelector(`.baiTap__content .baiTap1 .ketQua h3`);
    if(luongMotNgay <= 0 || soNgayLam <= 0){
        ketQua.innerHTML = ERR_MSG;
    }
    else{
        var rs =`${(luongMotNgay * soNgayLam).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`;
        ketQua.innerHTML = rs;
    }
});

baiTap2BtnElement.addEventListener(`click`, function(){
    var inputs = document.querySelectorAll(`.baiTap__content .baiTap2 input`);
    var sum = 0;
    for (var i = 0; i < inputs.length; i++) {
        sum += inputs[i].value * 1;
    }
    var rs = sum / inputs.length;
    var ketQua = document.querySelector(`.baiTap__content .baiTap2 .ketQua h3`);
    ketQua.innerHTML = rs;
});

baiTap3BtnElement.addEventListener(`click`, function(){
    var soTien = document.querySelector(`.baiTap__content .baiTap3 input#soTien`).value*1;
    var ketQua = document.querySelector(`.baiTap__content .baiTap3 .ketQua h3`);

    if(soTien <= 0){
        ketQua.innerHTML = ERR_MSG;
    }
    else{

        const TI_GIA = 23500;
        var rs = (TI_GIA * soTien).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        ketQua.innerHTML = rs;
    }
});

baiTap4BtnElement.addEventListener(`click`, function(){
    var chieuDai = document.querySelector(`.baiTap__content .baiTap4 input#chieuDai`).value*1;
    var chieuRong = document.querySelector(`.baiTap__content .baiTap4 input#chieuRong`).value*1;
    var ketQua = document.querySelector(`.baiTap__content .baiTap4 .ketQua h3`);
    if(chieuDai <= 0 || chieuRong <= 0){
        ketQua.innerHTML = ERR_MSG;
    }
    else{
        var rsS = chieuDai*chieuRong;
        var rsP = (chieuDai+chieuRong)*2;
        ketQua.innerHTML = `Diện tích: ${rsS} Chu vi: ${rsP}`;
    }
});

baiTap5BtnElement.addEventListener(`click`, function(){
    var numberInput = document.querySelector(`.baiTap__content .baiTap5 input`).value*1;
    var ketQua = document.querySelector(`.baiTap__content .baiTap5 .ketQua h3`);
    if(numberInput <= 0)
        ketQua.innerHTML = ERR_MSG;
    else if(numberInput.toString().length > 2)
        ketQua.innerHTML = `Hãy nhập hai chữ số`;
    else{
        var firstNum = Math.floor(numberInput/10);
        var secNum = numberInput%10;
        var rs = (firstNum + secNum)*1;
        ketQua.innerHTML = rs;
    }
})

// B1 Người dùng nhập dữ kiện
// B2 Xử lí
// B3 Trả dữ liệu đã xử lí cho người dùng