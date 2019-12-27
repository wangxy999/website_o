//js做响应式适配当大于640px固定100pxfont-size

functionresize() {

    vardocEl = document.documentElement;
    varclientWidth = window.innerWidth;
    if (!clientWidth) return;
    if (clientWidth >= 640) {
        docEl.style.fontSize = '100px';
    } else {
        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
    }

}
resize();


window.addEventListener('resize', resize);









