    const c = document.getElementById("cursor-particles");
    const ctx = c.getContext("2d");
    function resize() {
      c.width = innerWidth;
      c.height = innerHeight;
    }
    resize();
    addEventListener("resize", resize);

    let particles = [];
    function spawn(x, y) {
      particles.push({x,y,vx:(Math.random()-0.5)*2,vy:(Math.random()-0.5)*2,life:60});
    }
    onmousemove = e => { for(let i=0;i<5;i++) spawn(e.clientX,e.clientY); }

    function draw() {
      ctx.clearRect(0,0,c.width,c.height);
      particles.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy; p.life--;
        ctx.fillStyle=`rgba(166,166,166,${p.life/60})`;
        ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,6.28); ctx.fill();
      });
      particles = particles.filter(p=>p.life>0);
      requestAnimationFrame(draw);
    }
    draw();