var grid = document.querySelector('.grid');
var msnry;
// element selectors
var imgAll      = document.querySelectorAll('.grid-item');
var imgBetty    = document.querySelectorAll('.betty');
var imgNy       = document.querySelectorAll('.newYork');
var imgFlowers  = document.querySelectorAll('.flowers');
var imgOthers   = document.querySelectorAll('.others');
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

function showImages(showImg, hideImg1, hideImg2){
	for(let i = 0; i < showImg.length; i++){
			showImg[i].style.display = "block";
		}
		for(let i = 0; i < hideImg1.length; i++){
			hideImg1[i].style.display = "none";
		}
		for(let i = 0; i< hideImg2.length; i++){
			hideImg2[i].style.display = "none";
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
		showImages(imgBetty, imgNy, imgFlowers, imgOthers);
	}
	
	//show ny images
	if(event.target.id == "newYork"){
		showImages(imgNy, imgBetty, imgFlowers, imgOthers);
	}
	
	// show flowers
	if(event.target.id == "flowers"){
		showImages(imgFlowers, imgBetty, imgNy, imgOthers);
	}
	
	// show other images
	if(event.target.id == "others"){
		showImages(imgOthers, imgFlowers, imgBetty, imgNy);
	}
	
	msnry.layout();
	
});

grid.addEventListener('click',function(event){
	let imgContainer = event.target.parentNode;
	toggleClass(imgContainer, gridItems, 'grid-item__expanded');
	msnry.layout();
});