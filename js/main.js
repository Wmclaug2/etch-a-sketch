$(document).ready(function(){
	createGrid(16);
	$(".box").hover(darken);

});

function erase(){
	$('.erase').toggleClass('draw').toggleClass('erase');
	$('.box').hover(lighten);
}

function draw(){
	$('.erase').toggleClass('erase').toggleClass('draw');
	$('.box').hover(darken);
}

function darken(){
	var currentDarkness = +$(this).css('opacity');
	if (currentDarkness < 1) currentDarkness += .10;
	$(this).css({"opacity": currentDarkness});
}

function lighten(){
	var currentDarkness = +$(this).css('opacity');
	if (currentDarkness >= 0) currentDarkness -= .10;
	$(this).css({"opacity": currentDarkness});
}
function createGrid(sqNum){
	var totalSquares = sqNum * sqNum;
	$('#canvas').empty();
	for (var i = 0; i < totalSquares;i++){
		$("#canvas").append("<div class='box'></div>");
	}
}

function reset(){
	$('#canvas').empty();
	createGrid(16);
	$(".box").hover(darken);
}

function newGrid(){
	var sqNum = prompt("How many boxes do you want on each side?");
	if (sqNum < 1 || sqNum == null || sqNum > 150){
		var sqNum = prompt("That number is out of range. How many boxes do you want on each side?");
	}else{
		createGrid(sqNum);
		var totalSquares = sqNum*sqNum;
		var boxSize = 800/sqNum;
		$(".box").css({"width": boxSize+'px'});
		$(".box").css({"height": boxSize+'px'});
		$(".box").hover(darken);
	}
}

$('.erase').off('click').on('click', erase);
$('.draw').off('click').on('click', draw);
