function doPrint() {
    document.querySelector("footer").style.display = "none";

    print();

    document.querySelector("footer").style.display = "flex";
}

function goHome() {
    window.location.href = "/";
}

function showSaveModal(close = false) {
    if(close) {
        document.querySelector("dialog").close();
        return
    }
    
    document.querySelector("dialog").showModal();

    document.querySelector("dialog form input[name='expiry']").value = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0,10);
    
}