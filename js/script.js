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
        rockLeft.style.transform = 'translateX(-' + fogScroll/10 + 'px)';
        rockLeft.style.transform = 'translateY(' + fogScroll/1 + 'px)';
        rockLeft.style.transform = 'scale(' + (fogScroll + 800)/800 + ')';
    });

    const rockRight = document.querySelector('.parallax__montain2');
    window.addEventListener('scroll', function(event) {
        let fogScroll = this.scrollY;
        rockRight.style.transform = 'translateX(' + fogScroll/10 + 'px)';
        rockRight.style.transform = 'translateY(' + fogScroll/1 + 'px)';
        rockRight.style.transform = 'scale(' + (fogScroll + 800)/800 + ')';
    });

    const rockCentr = document.querySelector('.parallax__montain1');
    window.addEventListener('scroll', function(event) {
        let fogScroll = this.scrollY;
        rockCentr.style.transform = 'scale(' + (fogScroll + 1800)/1800 + ')';
    });
}
paralax();