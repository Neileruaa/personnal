import React, {useEffect} from 'react';
import '../styles/textTyping.css'


const TextTyper = () => {
    const period = 600;
    const whatToSay = ["C'est trop bien", "j'adore ça !"];

    const TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        let that = this;
        let delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };


    useEffect(()=> {
        const elements = document.getElementsByClassName('__is-typing');
        for (let i=0; i<elements.length; i++) {
            new TxtRotate(elements[i], whatToSay, period);
        }
    });

    return (
        <span
            className="__is-typing">
        </span>
    )
};
export default TextTyper