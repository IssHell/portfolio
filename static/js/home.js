
function accelerometerUpdate(event) {
    var angle = -20;
    var aX = event.accelerationIncludingGravity.x*10;
    var aY = event.accelerationIncludingGravity.y*10;
    // var aZ = event.accelerationIncludingGravity.z*10;

	// ix aY is negative, switch rotation
	if (aY <0) {
		aX = -aX - 180;
	}

	if (aX >= 20 && aX <=45 ) { angle = -45 }
	else if (aX > 45 && aX <=90 ) { angle = -90 }

	document.querySelector(".terminal").style.transform="rotate("+angle+"deg)";

}

$(function() {
    // if (window.DeviceMotionEvent == undefined) {
    //     //No accelerometer is present. Use buttons.
    //     document.querySelector("#acc").textContent = "No Way";
    //     document.querySelector("#acc").className = "no";
    //
    // }
    // else {
    //     document.querySelector("#acc").textContent = "YES";
    //     document.querySelector("#acc").className = "yes";
    // }
    window.addEventListener("devicemotion", accelerometerUpdate, true);
    $(".typed").typed({
    strings: [
      "stat vic.human<br/>" +
      "><span class='caret'>$</span> skills: QA automation, python, java, camera, breakdance battle<br/> ^100" +
      "><span class='caret'>$</span> job: QA automation at <a target='_blank'  href='https://www.citigroup.com/citi/'>Citibank Europe PLC</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: touch rugby, travel, <a target='_blank' href='https://www.flickr.com/photos/isshell/'>photography</a><br/> ^300" +
      "><span class='caret'>$</span> alias: IssHell <br/>" +
      "><span class='caret'>$</span> DJing:  <a target='_blank' href='https://soundcloud.com/victor-issel-olvera'>techno mixes on SoundCloud</a><br/>"/*
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
