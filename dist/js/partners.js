"use strict";function gray(s){s.style.filter="grayscale(0%)",s.classList.add("animated"),s.classList.add("zoomIn"),setTimeout(function(){s.classList.remove("zoomIn"),s.classList.remove("animated")},1e3)}function nogray(s){s.style.filter="grayscale(100%)"}