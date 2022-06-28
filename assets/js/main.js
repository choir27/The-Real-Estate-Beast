
// 	Strata by HTML5 UP
// 	html5up.net | @ajlkn
// 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
// */

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);





document.querySelector('.leftArrow1').addEventListener('click',goLeft)
document.querySelector('.rightArrow1').addEventListener('click',goRight)

document.querySelector('.leftArrow').addEventListener('click',goLeft)
document.querySelector('.rightArrow').addEventListener('click',goRight)

let arr = []

for(let i = 1;i<10;i++){
	let tabs = document.querySelector(`.vid${i}`)
	arr.push(tabs)
}


let currentIndex = 0
let currentIndex1 = 1
let currentIndex2 = 2
function goLeft(){
	if(currentIndex === 0){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex = arr.length - 1
		currentIndex1-=1
		currentIndex2-=1
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}


	if(currentIndex1 === 0){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex -=1
		currentIndex1 = arr.length -1
		currentIndex2-=1
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}


	if(currentIndex2 === 0){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex -=1
		currentIndex1 -=1
		currentIndex2 = arr.length -1
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}

	if(currentIndex1 !== 0 && currentIndex !== 0 && currentIndex !== 0){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex -=1
		currentIndex1 -=1
		currentIndex2 -=1
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}		

}

function goRight(){

	if(currentIndex === arr.length-1){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex = 0
		currentIndex1+=1
		currentIndex2+=1
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}

	if(currentIndex1 === arr.length-1){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex +=1
		currentIndex1 = 0
		currentIndex2+=1
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}


	if(currentIndex2 === arr.length-1){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex +=1
		currentIndex1 +=1
		currentIndex2 = 0
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}

	if(currentIndex1 !== arr.length-1 && currentIndex !== arr.length-1 && currentIndex !== arr.length-1){
		arr[currentIndex].classList.add('hidden')
		arr[currentIndex1].classList.add('hidden')
		arr[currentIndex2].classList.add('hidden')
		currentIndex +=1
		currentIndex1 +=1
		currentIndex2 +=1
		arr[currentIndex].classList.remove('hidden')
		arr[currentIndex1].classList.remove('hidden')
		arr[currentIndex2].classList.remove('hidden')
	}		
}


document.querySelector('.listing').addEventListener('mouseover',viewButton)
document.querySelector('.listing').addEventListener('mouseleave',hideButton)

function viewButton(){
	document.querySelector('#view').classList.remove('hidden')
}

function hideButton(){
	document.querySelector('#view').classList.add('hidden')

}


