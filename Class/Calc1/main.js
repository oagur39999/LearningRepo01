const math = () => {
    var plus = document.getElementById("sum")
    var sub = document.getElementById("sub")
    var mul = document.getElementById("mul")
    var div = document.getElementById("div")

    var num1 = document.getElementById("1").value
    var num2 = document.getElementById("2").value
    var res = document.getElementById("res")

    if (plus.checked == true) {
        res.value = (parseInt(num1) + parseInt(num2)).toFixed(2)
        console.log("test123 ", num1 + num2)
    } else if (sub.checked == true) {
        res.value = (parseInt(num1) - parseInt(num2)).toFixed(2)
    } else if (mul.checked == true) {
        res.value = (parseInt(num1) * parseInt(num2)).toFixed(2)
    } else if (div.checked == true) {
        res.value = (parseInt(num1) / parseInt(num2)).toFixed(2)
    }

    if (num1 == "" || num2 == "" || (plus.checked == false && sub.checked == false && mul.checked == false && div.checked == false)) {
        alert("Bạn điền đủ thông tin để tính")
        window.location.reload()
    }

    if (num2 == 0 && div.checked == true) {
        alert("Không thực hiện được phép tính div mẫu bằng 0")
        window.location.reload()
    }
}

const del = () => {
    document.getElementById("1").value = ""
    document.getElementById("2").value = ""
    document.getElementById("res").value = ""
}

const close = () => {
    window.close()
}