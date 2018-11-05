"use strict";

class BaseWidget {

    constructor(hapyak) {
        this.context = hapyak.context;
        this.player = hapyak.context && hapyak.context.player;
        this.currentTime = this.player && this.player.currentTime;
    }

    init() {

    }
    
    setupWidget() {
        
    }

    getTime() {
        return this.player.currentTime;
    }

    setTime(time) {
        return this.player.currentTime(time);
    }

    setPosition(top, left, width, height, duration) {
        const animateTranisition = (prop, pos) => {
            let currentPosition;

            if (['top', 'left', 'width', 'height'].indexOf(prop) < 0) {
                return;
            }
            
            currentPosition = hapyak.context[prop];
        };

        if (top) {
            this.context.top = animateTranisition('top', top);
        }

        if (left) {
            this.context.left = animateTranisition('left', left);
        }

        if (width) {
            this.context.width = animateTranisition('width', width);
        }

        if (height) {
            this.context.height = animateTranisition('height', height);
        }
    }

    iframeshow() {

    }
    
    timeupdate() {
        this.currentTime = this.player.currentTime;
    }

};

module.exports = BaseWidget;