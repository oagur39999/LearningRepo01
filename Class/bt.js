document.write("Chuong 5 Bai 1: He said \"Hello!\"");

function C5B2() {
    alert('Xin chao cac ban!');
}

function C6B2() {
    const cardName = document.getElementById('name').value;
    alert("Xin chao " + cardName + ".");
}

function C6B4() {
    const strin = document.getElementById('string').value;
    const strout = strin.replace('a', 'AB');
    alert(strin + " | " + strout);
}

function C7B1() {
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    var t = a;
    if (a < b) {
        a = b;
        b = t;
    }
    if (a % b == 0) alert(a + " chia het cho " + b);
    else alert(a + " khong chia het cho " + b);
}

function C7B2() {
    var a = parseFloat(document.getElementById('numa').value);
    var b = parseFloat(document.getElementById('numb').value);
    var c = parseFloat(document.getElementById('numc').value);

    if (a > b && a > c) alert("SLN la " + a);
    else if (b > a && b > c) alert("SLN la " + b);
    else if (c > a && c > b) alert("SLN la " + c);
    else {
        var hinum = parseInt(0);
        if (a == b || a == c) {
            hinum = a;
        } else if (b == c) hinum = b;
        alert('Co 2 hoac nhieu so lon nhat bang nhau la ' + hinum);
    }
}

function C7B3() {
    var a = parseInt(document.getElementById('year').value);
    var n = ' khong phai la ';
    if (a % 400 == 0 || (a % 100 != 0 && a % 4 == 0)) n = ' la ';
    alert(a + n + "nam nhuan");
}

function C7B4() {
    var d = parseFloat(prompt("Nhap diem:"))
    if (d > 10 || d < 0) alert("Diem khong hop le.");
    else if (d <= 4) alert("Xep loai yeu.");
    else if (d <= 6) alert("Xep loai trung binh.");
    else if (d <= 8) alert("Xep loai kha.");
    else if (d <= 10) alert("Xep loai gioi.");
}

function C7B5() {
    var d = parseFloat(prompt("Nhap diem:"))
    switch (d) {
        case (d < 1 || d > 10):
            alert("Diem khong hop le.");
            break;
        case (d >= 0 && d < 4):
            alert("Xep loai yeu.");
            break;
        case (d > 4 && d <= 6):
            alert("Xep loai trung binh.");
            break;
        case (d > 6 && d <= 8):
            alert("Xep loai kha.");
            break;
        case (d > 8 && d <= 10):
            alert("Xep loai gioi.");
            break;
    }
}

function C8B1() {
    for (var i = 0; i <= 200; i++) i += i;
    alert(i);
}

function C8B2() {
    for (var i = 1; i <= 300; i = i + 2) i += i;
    alert(i);
}

function C8B3() {
    var num = parseFloat(prompt("Nhap so:"))
    if (num <= 1) {
        alert(num + " khong phai la so nguyen to.");
        return;
    } else {
        for (let i = 2; i < num; i++)
            if (num % i == 0) {
                alert(num + " khong phai la so nguyen to.");
                return;
            };
        alert(num + " la so nguyen to.");
    }
}

function C8B4() {
    var x = parseFloat(prompt("Nhap x:"))
    var n = parseFloat(prompt("Nhap n:"))
    alert(x + "^" + n + " = " + Math.pow(x, n));
}

function C8B5() {
    if (empty.value === "") {
        alert("Hop trong, nhap lai.");
    } else alert("Hop khong trong.")
}

function C8B6() {
    var a = 1699;
    for (a; a <= 2008; a++) {
        if (a % 400 == 0 || (a % 100 != 0 && a % 4 == 0)) console.log(a);
    }
}