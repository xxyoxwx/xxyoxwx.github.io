/* MarqueeTitle v4.0 | MIT License | git.io/vQZbs */
(function(c, a, m) {
    var title = (c || document.title) + " " + (a || "-") + " ";
    setInterval(function() {
      title = title.substring(1) + title.charAt(0);
      document.title = title;
    }, m || 300);
  })(
    /* Tab Text */ "snexisgod",
    /* Title Repeat Separator */ "_____",
    /* Scroll Speed (in milleseconds) */ 550
  );

function imgclicker() {
	let audio = new Audio('assorts/aha.wav');

	audio.volume = 0.5;
	audio.play();
}

function unnclicker() {
	let audio = new Audio('assorts/dude.wav');

	audio.volume = 0.5;
	audio.play();
}