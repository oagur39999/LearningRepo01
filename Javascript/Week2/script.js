function Function1() {
    var A = parseFloat(document.getElementById('1_num_1').value);
    if (A < 0) {
        alert("A is negative");
    } else {
        alert("A is positive")
    }
}

function Function2() {
    var A = parseFloat(document.getElementById('2_num_1').value);
    var B = parseFloat(document.getElementById('2_num_2').value);
    if (A > B) alert(A);
    else alert(B);
}

function Function3() {
    var A = parseFloat(document.getElementById('3_num_1').value);
    var B = parseFloat(document.getElementById('3_num_2').value);
    var C = parseFloat(document.getElementById('3_num_3').value);
    if (A > B && A > C) alert(A);
    else if (B > A && B > C) alert(B);
    else alert(C);
}

function Function4() {
    var STR = document.getElementById('4_str_1').innerHTML;
    var ARR = STR.split();
    alert(ARR);
}

function Function5() {
    var STR = document.getElementById('5_str_1').innerHTML;
    var CAP = STR.split(' ').map(STR.charAt(0).toUpperCase() + STR.slice(1)).join(' ');
    alert(CAP);
}

function Function6() {
    var A = document.getElementById('6_str_1').innerHTML;
    var B = document.getElementById('6_str_2').innerHTML;
    var search = A.search(B);
    if (search != -1) {
        alert("YES " + search + " " + (search + B.length));
    }
    else alert("NO");
}

function Function7() {
    var NUM = document.getElementById('7_num_1').innerHTML;
    NUM.slice(0, -4).concat("****");
}