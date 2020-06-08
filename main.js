const master = new TimelineMax({ paused: true });

master.add(ruedas(), "loop");
master.add(taika(), "loop");
master.add(bg(), "loop");
master.add(sun(), "loop");
master.add(brinco(), "loop");

master.play();

function bg() {
  const tl = new TimelineMax({ repeat: -1 });

  tl.to(".bg", 2500, {
    xPercent: -1200,
    ease: Linear.easeNone,
  });
  return tl;
}

function ruedas() {
  const tl = new TimelineMax({ repeat: -1 });
  const time = 2;

  tl.to(
    ".rueda-del",
    time,
    {
      transformOrigin: "center",
      rotate: 360,
      ease: Linear.easeNone,
    },
    "ruedas"
  );
  tl.to(
    ".rueda-tras",
    time,
    {
      transformOrigin: "center",
      rotate: 360,
      ease: Linear.easeNone,
    },
    "ruedas"
  );
  return tl;
}

function taika() {
  const tl = new TimelineMax({ repeat: -1, yoyo: true });

  tl.to(
    ".taika-lengua",
    0.15,
    {
      transformOrigin: "right",
      scaleY: 0.7,
      skewY: 10,
      ease: Linear.easeNone,
    },
    "loop"
  );

  tl.to(
    ".taika-orejas",
    0.15,
    {
      transformOrigin: "bottom",
      skewX: 10,
      ease: Linear.easeNone,
    },
    "loop"
  );

  return tl;
}

function sun() {
  const tl = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 2 });

  tl.to(".sun", 10, {
    y: 250,
    z: 10,
    ease: Circ.inOut,
  });
  tl.add(luz(), "-=6");
  return tl;
}

function luz() {
  const tl = new TimelineMax();

  tl.from(".luz", 0.5, {
    scaleY: 0,
    transformOrigin: "10% 35%",
    ease: Linear.easeNone,
  });
  return tl;
}

function brinco() {
  const tl = new TimelineMax({ repeat: -1, yoyo: true });

  tl.from(
    ".machito",
    1,
    {
      y: -10,
      transformOrigin: "0% 0%",
      ease: Bounce.easeOut,
    },
    "brinco"
  );
  tl.from(
    ".ruedas",
    1,
    {
      y: -7,
      transformOrigin: "0% 0%",
      ease: Bounce.easeOut,
    },
    "brinco"
  );

  tl.from(
    ".carpa",
    1,
    {
      y: -11,
      transformOrigin: "0% 0%",
      ease: Bounce.easeOut,
    },
    "brinco"
  );

  tl.from(
    ".bidon",
    1,
    {
      y: -7,
      transformOrigin: "0% 0%",
      ease: Bounce.easeOut,
    },
    "brinco"
  );

  return tl;
}
