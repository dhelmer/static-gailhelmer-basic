var grid = document.querySelector('.grid');
var msnry;
// element selectors
var imgAll      		= document.querySelectorAll('.grid-item');
var imgBetty    		= document.querySelectorAll('.betty');
var imgHome      		= document.querySelectorAll('.home');
var imgStyle      	= document.querySelectorAll('.style');
var imgCalligraphy	= document.querySelectorAll('.calligraphy');
var imgFlowers  		= document.querySelectorAll('.flowers');
var imgOthers   		= document.querySelectorAll('.others');
// buttons
const tabsUl = document.getElementById('buttonGroup');
const lis = tabsUl.children;
const gridItems = grid.children;


imagesLoaded(grid, function(){
	msnry = new Masonry( grid, {
		//options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});

//element & class name
function toggleClass(parentElem, childElems, className){
	for(let i = 0; i <childElems.length; i++){
		if(childElems[i]==parentElem){
			childElems[i].classList.add(className);
		}
		else{
			childElems[i].classList.remove(className);
		}
	}
}

function showImages(showImg, hideImg1, hideImg2, hideImg3, hideImg4, hideImg5){
		for(let i = 0; i < showImg.length; i++){
			showImg[i].style.display = "block";
		}
		for(let i = 0; i < hideImg1.length; i++){
			hideImg1[i].style.display = "none";
		}
		for(let i = 0; i< hideImg2.length; i++){
			hideImg2[i].style.display = "none";
		}
		for(let i = 0; i< hideImg3.length; i++){
			hideImg3[i].style.display = "none";
		}
		for(let i = 0; i< hideImg4.length; i++){
			hideImg4[i].style.display = "none";
		}
		for(let i = 0; i< hideImg5.length; i++){
			hideImg5[i].style.display = "none";
		}
}


tabsUl.addEventListener('click', (event) =>{
	let tabLi = event.target.parentNode;
	
	toggleClass(tabLi, lis, 'is-active');
	
	//show all images
	if(event.target.id == "all"){
		for(let i = 0; i< imgAll.length; i++){
			imgAll[i].style.display = "block";
		}
	}

  //show betty images
	if(event.target.id == "betty"){
		showImages(imgBetty, imgHome, imgStyle, imgCalligraphy, imgFlowers, imgOthers);
	}
	
	//show home images
	if(event.target.id == "home"){
		showImages(imgHome, imgBetty, imgStyle, imgCalligraphy, imgFlowers, imgOthers);
	}

	//show style images
	if(event.target.id == "style"){
		showImages(imgStyle, imgBetty, imgHome, imgCalligraphy, imgFlowers, imgOthers);
	}

	//show calligraphy images
	if(event.target.id == "calligraphy"){
		showImages(imgCalligraphy, imgBetty, imgHome, imgStyle, imgFlowers, imgOthers);
	}
	
	// show flowers
	if(event.target.id == "flowers"){
		showImages(imgFlowers, imgBetty, imgHome, imgStyle, imgCalligraphy, imgOthers);
	}
	
	// show other images
	if(event.target.id == "others"){
		showImages(imgOthers, imgBetty, imgHome, imgStyle, imgCalligraphy, imgFlowers);
	}
	
	msnry.layout();
	
});

grid.addEventListener('click',function(event){
	let imgContainer = event.target.parentNode;
	toggleClass(imgContainer, gridItems, 'grid-item__expanded');
	msnry.layout();
});