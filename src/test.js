import string from './css.js'         //导入
let n = 1
demo1.innerText = string
demo2.innerHTML = string
let time = 78;

let id = setInterval(() => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo1.innerText = string
    demo2.innerHTML = string
    demo1.scrollTop = demo1.scrollHeight

}, time);

btnPause.onclick = () => {
    window.clearInterval(id)
}
btnPause.onclick = () => {
    id = setInterval(() => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        demo1.innerText = string
        demo2.innerHTML = string
        demo1.scrollTop = demo1.scrollHeight

    }, time);
}

btnSlow.onclick = () => {
    window.clearInterval(id)
    time = 300
    id = setInterval(() => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        demo1.innerText = string
        demo2.innerHTML = string
        demo1.scrollTop = demo1.scrollHeight

    }, time);
}
btnNormal.onclick = () => {
    window.clearInterval(id)
    time = 78
    id = setInterval(() => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        demo1.innerText = string
        demo2.innerHTML = string
        demo1.scrollTop = demo1.scrollHeight

    }, time);
}

btnFast.onclick = () => {
    window.clearInterval(id)
    time = 0
    id = setInterval(() => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        demo1.innerText = string
        demo2.innerHTML = string
        demo1.scrollTop = demo1.scrollHeight

    }, time);
}