	/*var imagetwo = false;
	$("#logo").click(function(){
		if(imagetwo!=true){
			$("#wrap").css('background', 'url("background2.png") no-repeat scroll center top');
			imagetwo = true;
		}
		else{
			$("#wrap").css('background', 'url("background.png") no-repeat scroll center top');
			imagetwo = false;
			}
	});*/
	
	var data = [
	{
		video: 'http://www.youtube.com/watch?v=adB-By-HYDo&feature=youtu.be',
		layer: '<div id = "slider-image1"><h2>A Nu look for September</h2></div>'	
	},{
		video: 'http://www.youtube.com/watch?v=PO8XLn2O2J0&feature=youtu.be',
		layer: '<div class = "overimage"><h2>Becket explains the master plan (part 1)</h2></div>'
	},{
		video: 'http://www.youtube.com/watch?v=WUl7xLJWFUE&feature=g-upl',
		layer: '<div class = "overimage"><h2>The Master Plan (part 2)</h2></div>'
	}
	]
	
	Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
	Galleria.run('#galleria', {
		dataSource: data
	});
	Galleria.configure({
	autoplay: true,
	height: 495,
	width: 885});
	
	