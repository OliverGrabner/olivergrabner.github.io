// Play each chart's grow-in animation once, when it scrolls into view.
// Without this script, or with reduced motion, every chart simply shows in full.
(function(){
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold: 0.35});
  document.querySelectorAll('[data-chart]').forEach(function(c){
    c.classList.add('armed');
    io.observe(c);
  });
})();

// Tooltips for marks inside an svg: dots carry data-tip, step charts carry data-steps.
(function(){
  var marks = document.querySelectorAll('.chart svg [data-tip]');
  var stepCharts = document.querySelectorAll('svg[data-steps]');
  if (!marks.length && !stepCharts.length) return;
  var tip = document.createElement('div');
  tip.className = 'chart-tip';
  tip.setAttribute('aria-hidden', 'true');
  document.body.appendChild(tip);
  var owner = null;

  function show(content, x, y, from){
    if (owner && owner !== from && owner.clear) owner.clear();
    owner = from;
    if (typeof content === 'string') tip.textContent = content;
    else { tip.textContent = ''; tip.appendChild(content); }
    tip.classList.add('on');
    var w = tip.offsetWidth, h = tip.offsetHeight, sx = window.scrollX, sy = window.scrollY;
    var left = Math.min(Math.max(x - w / 2, sx + 8), sx + document.documentElement.clientWidth - w - 8);
    var top = y - h - 14;
    if (top < sy + 4) top = y + 18;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  function hide(){
    tip.classList.remove('on');
    if (owner && owner.clear) owner.clear();
    owner = null;
  }
  function page(e){ return [e.clientX + window.scrollX, e.clientY + window.scrollY]; }

  marks.forEach(function(el){
    var text = el.getAttribute('data-tip');
    el.addEventListener('pointermove', function(e){ if (e.pointerType === 'mouse'){ var p = page(e); show(text, p[0], p[1], el); } });
    el.addEventListener('pointerleave', function(e){ if (e.pointerType === 'mouse') hide(); });
    el.addEventListener('click', function(e){ e.stopPropagation(); var p = page(e); show(text, p[0], p[1], el); });
    el.addEventListener('focus', function(){
      var r = el.getBoundingClientRect();
      show(text, r.left + r.width / 2 + window.scrollX, r.top + window.scrollY, el);
    });
    el.addEventListener('blur', hide);
  });

  // Step charts: follow the cursor along the x-axis and read every series at that step.
  stepCharts.forEach(function(svg){
    var cfg = JSON.parse(svg.getAttribute('data-steps'));
    var hit = svg.querySelector('.step-hit'), guide = svg.querySelector('.step-guide');
    var dots = svg.querySelectorAll('.step-dot');
    var last = Math.max.apply(null, cfg.series.map(function(s){ return s.vals.length; }));
    var cur = last;
    var ctl = {clear: function(){
      guide.classList.remove('on');
      for (var i = 0; i < dots.length; i++) dots[i].classList.remove('on');
    }};
    function sx(c){ return cfg.x0 + (cfg.x1 - cfg.x0) * c / cfg.max; }
    function sy(v){ return cfg.y0 - (cfg.y0 - cfg.y1) * v / cfg.ymax; }
    function line(cls, text){
      var row = document.createElement('div');
      row.className = cls;
      row.textContent = text;
      return row;
    }
    function stepAt(clientX){
      var pt = svg.createSVGPoint();
      pt.x = clientX; pt.y = 0;
      var x = pt.matrixTransform(svg.getScreenCTM().inverse()).x;
      return Math.min(last, Math.max(1, Math.round((x - cfg.x0) / (cfg.x1 - cfg.x0) * cfg.max)));
    }
    function read(step, px, py){
      cur = step;
      var x = sx(step), box = document.createElement('div');
      box.appendChild(line('tip-head', 'Step ' + step));
      guide.setAttribute('x1', x); guide.setAttribute('x2', x); guide.classList.add('on');
      cfg.series.forEach(function(s, i){
        if (step <= s.vals.length){
          var v = s.vals[step - 1];
          dots[i].setAttribute('cx', x); dots[i].setAttribute('cy', sy(v)); dots[i].classList.add('on');
          var row = line('tip-row', (v / 1000).toFixed(1) + 'k tokens');
          var sw = document.createElement('span');
          sw.className = 'sw bg-' + s.color;
          row.insertBefore(sw, row.firstChild);
          box.appendChild(row);
        } else {
          dots[i].classList.remove('on');
        }
      });
      if (px === undefined){
        var r = guide.getBoundingClientRect();
        px = r.left + window.scrollX; py = r.top + window.scrollY;
      }
      show(box, px, py, ctl);
    }
    hit.addEventListener('pointermove', function(e){ if (e.pointerType === 'mouse'){ var p = page(e); read(stepAt(e.clientX), p[0], p[1]); } });
    hit.addEventListener('pointerleave', function(e){ if (e.pointerType === 'mouse') hide(); });
    hit.addEventListener('click', function(e){ e.stopPropagation(); var p = page(e); read(stepAt(e.clientX), p[0], p[1]); });
    hit.addEventListener('focus', function(){ read(cur); });
    hit.addEventListener('blur', hide);
    hit.addEventListener('keydown', function(e){
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
        e.preventDefault();
        read(Math.min(last, Math.max(1, cur + (e.key === 'ArrowRight' ? 1 : -1))));
      }
    });
  });
  document.addEventListener('click', hide);
})();
