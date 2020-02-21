function messageAlert() {
    let input = prompt("Vui lòng nhập chức danh của bạn");
    let login = input.toLowerCase();
    let message = (login === "employee") ?
        "Hello" :
        (login === "director") ?
            "Greetings" :
            (login === "") ?
                "No Login" :
                "";
    alert(message);
}