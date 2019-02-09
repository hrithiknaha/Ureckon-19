var c=document.getElementById("c");
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
    
    opts = {
      
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: .05,
      spawnChance: 1,
      sparkChance: .1,
      sparkDist: 10,
      sparkSize: 2,
      
      color: 'hsl(hue,100%,light%)',
      baseLight: 50,
      addedLight: 10, // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: .01,
      addedLightInputMultiplier: .02,
      
      cx: w / 2,
      cy: h / 2,
      repaintAlpha: .04,
      hueChange: .1
    },
    
    tick = 0,
    lines = [],
    dieX = w / 2 / opts.len,
    dieY = h / 2 / opts.len,
    
    baseRad = Math.PI * 2 / 6;
    
ctx.fillStyle = 'black';
ctx.fillRect( 0, 0, w, h );

function loop() {
  
  window.requestAnimationFrame( loop );
  
  ++tick;
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.repaintAlpha );
  ctx.fillRect( 0, 0, w, h );
  ctx.globalCompositeOperation = 'lighter';
  
  if( lines.length < opts.count && Math.random() < opts.spawnChance )
    lines.push( new Line );
  
  lines.map( function( line ){ line.step(); } );
}
function Line(){
  
  this.reset();
}
Line.prototype.reset = function(){
  
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;
  
  this.rad = 0;
  
  this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
  
  this.color = opts.color.replace( 'hue', tick * opts.hueChange );
  this.cumulativeTime = 0;
  
  this.beginPhase();
}
Line.prototype.beginPhase = function(){
  
  this.x += this.addedX;
  this.y += this.addedY;
  
  this.time = 0;
  this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;
  
  this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
  this.addedX = Math.cos( this.rad );
  this.addedY = Math.sin( this.rad );
  
  if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY )
    this.reset();
}
Line.prototype.step = function(){
  
  ++this.time;
  ++this.cumulativeTime;
  
  if( this.time >= this.targetTime )
    this.beginPhase();
  
  var prop = this.time / this.targetTime,
      wave = Math.sin( prop * Math.PI / 2  ),
      x = this.addedX * wave,
      y = this.addedY * wave;
  
  ctx.shadowBlur = prop * opts.shadowToTimePropMult;
  ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
  ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 2 );
  
  if( Math.random() < opts.sparkChance )
    ctx.fillRect( opts.cx + ( this.x + x ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.cy + ( this.y + y ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize )
}
loop();

window.addEventListener( 'resize', function(){
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  ctx.fillStyle = 'black';
  ctx.fillRect( 0, 0, w, h );
  
  opts.cx = w / 2;
  opts.cy = h / 2;
  
  dieX = w / 2 / opts.len;
  dieY = h / 2 / opts.len;
});


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

