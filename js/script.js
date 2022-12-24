function paralax(){
    const fog = document.querySelector('.parallax__fog');
    const fogHeight = fog.clientHeight;
    window.addEventListener('scroll', function(event) {
        let fogScroll = this.scrollY/100 + 1;
        fog.style.transform = 'scale(' + fogScroll + ')';
        fog.style.opacity = 1 / fogScroll;
    });

    const rockLeft = document.querySelector('.parallax__montain3');
    window.addEventListener('scroll', function(event) {
        let fogScroll = this.scrollY;
        let transformX = 'translateX(-' + fogScroll/25 + 'px)';
        let transformY = 'translateY(' + fogScroll/11 + 'px)';
        let transformScale = 'scale(' + (fogScroll + 800)/800 + ')';
        rockLeft.style.transform = transformX + transformY + transformScale;
    });

    const rockRight = document.querySelector('.parallax__montain2');
    window.addEventListener('scroll', function(event) {
        let fogScroll = this.scrollY;
        let transformX = 'translateX(' + fogScroll/25 + 'px)';
        let transformY = 'translateY(' + fogScroll/11 + 'px)';
        let transformScale = 'scale(' + (fogScroll + 800)/800 + ')';
        rockRight.style.transform = transformX + transformY + transformScale;
    });

    const rockCentr = document.querySelector('.parallax__montain1');
    window.addEventListener('scroll', function(event) {
        let fogScroll = this.scrollY;
        rockCentr.style.transform = 'scale(' + (fogScroll + 1800)/1800 + ')';
    });
}
paralax();