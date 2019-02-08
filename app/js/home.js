
//Stack
(function (window) {

    'use strict';
  
    /**
   * StackFx: The parent class.
   */
    function StackFx(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.stack = this.DOM.el.querySelector('.stack');
        this.DOM.stackItems = [].slice.call(this.DOM.stack.children);
        this.totalItems = this.DOM.stackItems.length;
        this.DOM.img = this.DOM.stack.querySelector('.stack__figure > .stack__img');
        this.DOM.caption = this.DOM.el.querySelector('.grid__item-caption');
        this.DOM.title = this.DOM.caption.querySelector('.grid__item-title');
        this.DOM.columns = { left: this.DOM.caption.querySelector('.column--left'), right: this.DOM.caption.querySelector('.column--right') };
    }
  
    StackFx.prototype._removeAnimeTargets = function () {
        anime.remove(this.DOM.stackItems);
        anime.remove(this.DOM.img);
        anime.remove(this.DOM.title);
        anime.remove(this.DOM.columns.left);
        anime.remove(this.DOM.columns.right);
    };
  
  
  
    /************************************************************************
   * PolluxFx.
   ************************************************************************/
    function PolluxFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
  
    PolluxFx.prototype = Object.create(StackFx.prototype);
    PolluxFx.prototype.constructor = PolluxFx;
  
    PolluxFx.prototype._initEvents = function () {
        var self = this;
        this._mouseenterFn = function () {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function () {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener('mouseenter', this._mouseenterFn);
        this.DOM.stack.addEventListener('mouseleave', this._mouseleaveFn);
    };
  
    PolluxFx.prototype._in = function () {
        var self = this;
  
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            opacity: {
                value: function (target, index, cnt) {
                    return index !== cnt - 1 ? [0, 0.1 * index + 0.1] : 1
                },
                easing: 'linear',
                delay: function (target, index, cnt) {
                    return (cnt - index - 1) * 60;
                }
            },
            translateY: {
                value: function (target, index) {
                    return -1 * index * 10;
                },
                easing: 'easeInOutCubic'
            },
            rotateX: {
                value: 80,
                easing: 'easeInOutCubic'
            },
            rotateZ: {
                value: 360,
                easing: 'easeInOutCubic',
                delay: function (target, index, cnt) {
                    return (cnt - index - 1) * 60;
                }
            }
        });
  
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: 'easeInOutCubic',
            scale: 1
        });
  
        anime({
            targets: this.DOM.title,
            rotate: [
        {
            value: [0, 10],
            duration: 300,
            delay: 300,
            easing: 'easeOutCubic',
        },
        {
            value: [-20, 0],
            duration: 300,
            easing: 'easeOutCubic',
        }
            ],
            opacity: [
        {
            value: [1, 0],
            duration: 100,
            delay: 300,
            easing: 'easeOutCubic'
        },
        {
            value: [0, 1],
            duration: 100,
            delay: 300,
            easing: 'easeOutCubic'
        }
            ]
        });
    };
  
    PolluxFx.prototype._out = function () {
        var self = this;
  
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            opacity: {
                value: function (target, index, cnt) {
                    return index !== cnt - 1 ? 0 : 1
                },
                easing: 'linear',
                delay: function (target, index) {
                    return index * 60;
                },
            },
            translateY: {
                value: 0,
                easing: 'easeInOutCubic'
            },
            rotateX: {
                value: 0,
                easing: 'easeInOutCubic'
            },
            rotateZ: {
                value: 0,
                easing: 'easeInOutCubic',
                delay: function (target, index, cnt) {
                    return (cnt - index - 1) * 60;
                }
            }
        });
  
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: 'easeInOutCubic',
            scale: 1
        });
  
        anime({
            targets: this.DOM.title,
            duration: 1000,
            easing: 'easeInOutCubic',
            rotate: 0,
            opacity: 1
        });
    };
  
    window.PolluxFx = PolluxFx;
  
  })(window);


  let root       = document.documentElement;
  let body       = document.getElementsByTagName('body')[0];
  let elementsCC = document.querySelectorAll('.cube');
  let lightMode  = document.getElementById("toggle-mode");
  let pauseMode  = document.getElementById("toggle-modePP");
  
   
  elementsCC.forEach(element => {
    let bbox = element.getBBox(),
      x = bbox.x,
      y = bbox.y,
      w = bbox.width,
      h = bbox.height;
                   
    //center center
    let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';
    
    element.style.setProperty("transform-origin", resultCC)
  }); // forEach
  
  function map(value, minA, maxA, minB, maxB) {
      return (1 - ((value - minA) / (maxA - minA))) * minB + ((value - minA) / (maxA - minA)) * maxB;
  }
  
  onmousemove = function(e) {
    xpos = e.clientX;
    ypos = e.clientY;
    maw = window.innerWidth;
    
    Hsl = map(e.clientX, 0, maw, 140, 290);
    root.style.setProperty('--Hsl', Hsl);
  }
  
  lightMode.addEventListener("click", function(){
    if (body.classList.contains("darkMode")) {
      body.classList.remove("darkMode");
    } else {
      body.classList.add("darkMode");
    }
  }); 
  
  pauseMode.addEventListener("click", function(){
    if (body.classList.contains("togglePaused")) {
      body.classList.remove("togglePaused");
    } else {
      body.classList.add("togglePaused");
    }
  }); 
  
  body.addEventListener("keypress", function(e){
    var keyCode = e.keyCode;
    if(keyCode == 32){
      if (body.classList.contains("togglePaused")) {
        body.classList.remove("togglePaused");
      } else {
        body.classList.add("togglePaused");
      }
    }
  });
  





