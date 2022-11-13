import string from './css.js'         //导入css.js文件  （模块化）
let n = 1
demo1.innerText = string.substr(0, n)   //从0到n展示string的子字符串
demo2.innerHTML = string.substr(0, n)

let time = 80;

const run = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo1.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo1.scrollTop = demo1.scrollHeight           //设置滚动条随内容输出自行滚动，一直拉到最下面

}
const play = () => {
    return setInterval(run, time)
}

const pause = () => {
    window.clearInterval(id)
}

let id = play()

btnPause.onclick = () => {
    pause()
}

btnPlay.onclick = () => {
    id = play();
}

btnSlow.onclick = () => {
    pause()
    time = 300
    id = play();
}
btnNormal.onclick = () => {
    pause()
    time = 80
    id = play();
}

btnFast.onclick = () => {
    pause()
    time = 0
    id = play();

}