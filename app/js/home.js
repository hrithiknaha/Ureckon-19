//Stack
(function (window) {

    'use strict';

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

//Hero Glitch
setInterval(function(){ 
    $('.glitch').toggleClass('glitch--v1');  
    setTimeout(function(){
      $('.glitch').toggleClass('glitch--v2');  
    },100);
 },5000);

 //Smooth Scroll
 var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
});

$(document).ready(function() {
    $('.home__hide').hide();
});

$('.home__hero-subtext-arrow').click(function(){
    $('.home__hide').show();
});

let max_particles    = 2500;
let particles        = [];
let frequency        = 10;
let init_num         = max_particles;
let max_time         = frequency*max_particles;
let time_to_recreate = false;

// Enable repopolate
setTimeout(function(){
  time_to_recreate = true;
}.bind(this), max_time)

// Popolate particles
popolate(max_particles);

var tela = document.createElement('canvas');
    tela.width = $(window).width();
    tela.height = $(window).height();
    $("body").append(tela);

var canvas = tela.getContext('2d');

class Particle{
  constructor(canvas){
    let random = Math.random()
    this.progress = 0;
    this.canvas = canvas;
    this.center = {
      x: $(window).width()/2,
      y: $(window).height()/2
    }
    this.point_of_attraction = {
      x: $(window).width()/2,
      y: $(window).height()/2
    }



    if( Math.random() > 0.5){
      this.x = $(window).width()*Math.random()
      this.y = Math.random() > 0.5 ? -Math.random() - 100 : $(window).height() + Math.random() + 100
    }else{
      this.x = Math.random() > 0.5 ? -Math.random() - 100 : $(window).width() + Math.random() + 100
      this.y = $(window).height()*Math.random()

    }

    this.s = Math.random() * 2;
    this.a = 0
    this.w = $(window).width()
    this.h = $(window).height()
    this.radius = random > .2 ? Math.random()*1 : Math.random()*3
    this.color  = random > .2 ? "#694FB9" : "#9B0127"
    this.radius = random > .8 ? Math.random()*2.2 : this.radius
    this.color  = random > .8 ? "#3CFBFF" : this.color
  }

  calculateDistance(v1, v2){
    let x = Math.abs(v1.x - v2.x);
    let y = Math.abs(v1.y - v2.y);
    return Math.sqrt((x * x) + (y * y));
  }

  render(){
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move(){

    let p1 = {
      x: this.x,
      y: this.y
    }

    let distance = this.calculateDistance(p1, this.point_of_attraction)
    let force = Math.max(100, (1 + distance));

    let attr_x = (this.point_of_attraction.x - this.x)/force;
    let attr_y = (this.point_of_attraction.y - this.y)/force;

    this.x += (Math.cos(this.a) * (this.s)) + attr_x;
    this.y += (Math.sin(this.a) * (this.s)) + attr_y;
    this.a += (Math.random() > 0.5 ? Math.random() * 0.9 - 0.45 : Math.random() * 0.4 - 0.2);

    if( distance < (30 + Math.random()*100) ){
      return false;
    }

    this.render();
    this.progress++;
    return true;
  }
}

function popolate(num){
  for (var i = 0; i < num; i++) {
    setTimeout(
      function(x){
        return function(){
          // Add particle
          particles.push(new Particle(canvas))
        };
      }(i)
      ,frequency*i);
  }
  return particles.length
}

function createSphera(){
  let radius = 180
  let center = {
    x: $(window).width()/2,
    y: $(window).height()/2
  }
}

function clear(){
  canvas.globalAlpha=0.08;
  canvas.fillStyle='#110031';
  canvas.fillRect(0, 0, tela.width, tela.height);
  canvas.globalAlpha=1;
}

/*
 * Function to update particles in canvas
 */
function update(){
  particles = particles.filter(function(p) { return p.move() })
  // Recreate particles
  if(time_to_recreate){
    if(particles.length < init_num){ popolate(1); }
  }
  clear();
  requestAnimationFrame(update.bind(this))
}
update()


//Notification Drawer
$(document).ready(function() {
  $drawerRight = $('.home-drawer-right');
  $home_list = $('.home-btn, .close-btn');
  
  $home_list.click(function() {
    $(this).toggleClass('active');
    $('.home-drawer-push').toggleClass('home-drawer-pushtoleft');
    $drawerRight.toggleClass('home-drawer-open');
  });
});


