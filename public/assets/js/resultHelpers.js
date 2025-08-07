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
        document.querySelector("dialog.save").close();
        return
    }
    
    document.querySelector("dialog.save").showModal();

    document.querySelector("dialog.save form input[name='expiry']").value = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0,10);
    
}

function showShareModal() {
    document.querySelector("dialog.share").showModal();

    document.querySelector("dialog.share form input[name='url']").value = window.location.href;
}

function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    
    document.querySelector("dialog.share").close();
}