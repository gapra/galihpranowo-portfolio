$(function(){

	var winH = $(window).height();
	var myPath = document.getElementById('gp_preloader');
	//var myPathLength = myPath.getTotalLength();
	//console.log(myPathLength);
	/*$('#gp_preloader').css({
		'stroke-dasharray': myPathLength+' '+myPathLength,
		'stroke-dashoffset': myPathLength
	});*/
	//myPath.style.strokeDasharray = myPathLength + ' ' + myPathLength;
	myPath.style.strokeDasharray = '868.39, 868.39';
	myPath.style.strokeDashoffset = '868.39';
	myPath.style.transition = myPath.style.WebkitTransition = 'none';

	$(window).on('load', function(){
		$('#gp_preloader').css('opacity', 1);
		//myPath.style.strokeDasharray = myPathLength + ' ' + myPathLength;
		myPath.style.strokeDasharray = '868.39, 868.39';
		myPath.getBoundingClientRect();
		myPath.style.strokeDashoffset = '0';
		myPath.style.transition = myPath.style.WebkitTransition = 'stroke-dashoffset 2.5s ease-in-out';
		setTimeout(function(){
			$('.gp-preloader').fadeOut(1000);
		}, 2500);
	});

	$('.gp-toggle-menu').on('click', function(){
		$(this).parent().addClass('open');
		$(this).parent().find('.gp-toggle-close').fadeIn();
	});
	$('.gp-toggle-close').on('click', function(){
		$(this).fadeOut();
		$(this).parents('.gp-header-menu').removeClass('open');
	});

	function lineLoop(){
		$('.line-art.left > span:nth-of-type(1)')
			.animate({ left: 0 }, 1600)
			.animate({ left: '33%' }, 2000, lineLoop);
		$('.line-art.left > span:nth-of-type(2)')
			.animate({ left: 0 }, 5800)
			.animate({ left: '55%' }, 4800, lineLoop);
		$('.line-art.left > span:nth-of-type(3)')
			.animate({ left: 0 }, 3600)
			.animate({ left: '65%' }, 2200, lineLoop);
		$('.line-art.left > span:nth-of-type(4)')
			.animate({ left: 0 }, 1400)
			.animate({ left: '81%' }, 4600, lineLoop);
		$('.line-art.left > span:nth-of-type(5)')
			.animate({ left: 0 }, 5600)
			.animate({ left: '94%' }, 2000, lineLoop);
		$('.line-art.right > span:nth-of-type(1)')
			.animate({ right: 0 }, 2600)
			.animate({ right: '33%' }, 3000, lineLoop);
		$('.line-art.right > span:nth-of-type(2)')
			.animate({ right: 0 }, 3800)
			.animate({ right: '55%' }, 2800, lineLoop);
		$('.line-art.right > span:nth-of-type(3)')
			.animate({ right: 0 }, 4600)
			.animate({ right: '65%' }, 4200, lineLoop);
		$('.line-art.right > span:nth-of-type(4)')
			.animate({ right: 0 }, 2400)
			.animate({ right: '81%' }, 2600, lineLoop);
		$('.line-art.right > span:nth-of-type(5)')
			.animate({ right: 0 }, 2600)
			.animate({ right: '94%' }, 5600, lineLoop);
	}
	lineLoop();

	$('#intro').height($(window).height());
	$('html, body').animate({ scrollTop: 0 });
	$(window).on('load ready resize', function(){
		$('#intro').height($(window).height());
	});
	$('.gp-toggle-scrolldown').on('click', function(){
		var expPos = $('#experience').offset();
		$('body').removeClass('overflow-y');
		$(this).fadeOut();
		$('html, body').animate({ scrollTop: expPos.top - 60 }, 600);
	});
	if($('#experience').offset().top > winH) {
		$('body').removeClass('overflow-y');
	}

	$(window).scroll(function(){
		var expPosition = $('#experience').offset();
		var skillPosition = $('#skillset').offset();
		var authorPosition = $('#author').offset();
		var getintouchHeight = $('#getintouch').height();
		var getintouchPosition = $('#getintouch').offset();
		if($(window).scrollTop() == 0) {
			$('body').addClass('overflow-y');
			$('.gp-toggle-scrolldown').fadeIn();
			$('.gp-side-nav').fadeOut();
		} else {
			$('body').removeClass('overflow-y');
		}
		if($(window).scrollTop() < expPosition.top - 60) {
			$('.gp-side-nav').fadeOut();
			$('.gp-side-nav a[href="#intro"]').addClass('active');
		} else {
			$('.gp-side-nav').fadeIn();
			$('.gp-side-nav a[href="#intro"]').removeClass('active');
		}
		if($(window).scrollTop() >= expPosition.top - 60) {
			$('.gp-side-nav a[href="#intro"], a[href="#skillset"], a[href="#author"], a[href="#getintouch"]').removeClass('active');
			$('a[href="#experience"]').addClass('active');
		}
		if($(window).scrollTop() >= skillPosition.top - 80) {
			$('.gp-side-nav a[href="#intro"], a[href="#experience"], a[href="#author"], a[href="#getintouch"]').removeClass('active');
			$('a[href="#skillset"]').addClass('active');
		}
		if($(window).scrollTop() >= authorPosition.top - 80) {
			$('.gp-side-nav a[href="#intro"], a[href="#experience"], a[href="#skillset"], a[href="#getintouch"]').removeClass('active');
			$('a[href="#author"]').addClass('active');
		}
		if($(window).scrollTop() >= (getintouchPosition.top - 80) - getintouchHeight) {
			$('.gp-side-nav a[href="#intro"], a[href="#experience"], a[href="#skillset"], a[href="#author"]').removeClass('active');
			$('a[href="#getintouch"]').addClass('active');
		}
	});

	$('.gp-menu-content > a.navlink, .gp-side-nav > a.navlink').on('click', function(){
		var navHref = $(this).attr('href');
		var navLink = $(navHref).offset();
		$('html, body').animate({ scrollTop: navLink.top - 60 }, 600);
		$('.gp-side-nav').fadeIn();
	});
	$('.gp-menu-content > a[href="#intro"], .gp-side-nav > a[href="#intro"]').on('click', function(){
		$('html, body').animate({ scrollTop: 0 }, 600);
		$('body').addClass('overflow-y');
		$('.gp-toggle-scrolldown').fadeIn();
		$('.gp-header-menu').removeClass('open');
		$('.gp-toggle-close, .gp-side-nav').fadeOut();
	});
	$('a.backtotop').on('click', function(){
		$('html, body').animate({ scrollTop: 0 }, 600);
	});

	$('[data-toggle="tooltip"]').tooltip();

});