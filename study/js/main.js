function toast({
                   title = '',
                   message = '',
                   type = 'info',
                   duration = 5000
               }) {
    const main = document.getElementById('toast')
    const icons = {
        success: 'fas fa-check-circle'
    }
    const icon = icons[type];
    if (main) {
        const toast = document.createElement('div');
        const autoRemove = setTimeout(function () {
            main.removeChild(toast)
        }, duration + 1000)
        //auto remove
        toast.onclick = function (e) {
            console.log(e.target)
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove)
            }
        }
        toast.classList.add('toast', `toast--${type}`);
        const delay = (duration/1000).toFixed(2)
        toast.style.animation = `slideInLeft ease 0.7s, fateOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                <div class="toast__icon">
                <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>`;
        main.appendChild(toast)
    }
}

function showSuccessToast() {
    toast({
        title: "Success",
        message: "LOLOLOLOLOLOL",
        type: "success",
        duration: 5000
    })
}