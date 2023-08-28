function onSubmit(event) {
    event.preventDefault();
    const w = parseFloat(event.target[0].value);
    const h = parseFloat(event.target[1].value);
    console.log(w, h);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert("적절한 값이 아닙니다.");
        return;
    }
    const bmi = (w / (h*h)).toFixed(2);
    console.log(w / (h*h));

    const res = document.getElementById("res");
    res.style.display = "flex";

    document.getElementById("bmi").innerText = bmi;
    document.getElementById("meter").value = bmi;
    
    let state = "정상";
    let common = true;
    if (bmi <= 18.5) {
        state = "저체중";
        common = false;
    }
    if (bmi >= 25) {
        state = "과체중";
        common = false;
    }

    const stateElement = document.getElementById("state");
    stateElement.innerText = state;
    stateElement.style.color = common ? "#29ff21" : "#ff3a3a"
}

function onReset() {
    document.getElementById("res").style.display = "none";
}