
setInterval(displayHello, 1000);
function displayHello() {
    let ngayhientai = new Date();
    let ngaysinhnhat = new Date(2023, 05, 09, 23, 59, 59, 00); // ngày sinh nhật
    let refult = ngaysinhnhat - ngayhientai;
    let refultgiay = refult / 1000;
    let refultphut = refultgiay / 60;
    let refultgio = refultphut / 60;
    let refultday = refultgio / 24;

    document.getElementById('demo').innerHTML = Math.round(refultgiay);
    document.getElementById('demo1').innerHTML = Math.round(refultphut);
    document.getElementById('demo2').innerHTML = Math.round(refultgio);
    document.getElementById('demo3').innerHTML = Math.round(refultday);
}