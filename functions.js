function notifyLaunchedApp() {

    const statusIcon = document.getElementById('status-icon');

    if (statusIcon) {
        statusIcon.innerHTML = '<i class="fa-regular fa-face-smile-beam"></i>';
    } else {
        console.error("status-icon was not found");
    }

}
