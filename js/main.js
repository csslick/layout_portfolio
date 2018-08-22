$(function(){
		
	// 능력치 그래프 
	var yoffset = 200;	// 스크로 보정값
	var about_top = $('#skill').offset().top - yoffset;

	$(window).on('scroll', function(){
		var win_scroll_top = $(window).scrollTop();
		var point = [90, 70, 80, 70, 50, 60];
		
		// #skill 섹션에 도달하면 그래프 애니메이션 시작
		if(win_scroll_top >= about_top){
			for(var i = 0; i < 6; i++){
				$('#skill .skill_list span')
					.eq(i)
					.animate({width: point[i]+'%'});
			}	
		}	
	});
	
	
	// 비쥬얼 영역에 마우스가 올라가면 애니메이션 재생
	$('#visual').on('mouseover', function(){
		$('.visual_txt ')
			.css('animation-play-state', 'running');
	});
	
	// 페이지 스크롤 효과
	$('#main_gnb a, #to_top a').on('click', function(){
		// 이동한 내부 링크의 위치값(hash)
		var target = $(this.hash);
		console.log(target);
		$('html, body').animate({
			scrollTop: target.offset().top
		});
		return false; // 앵커태그 무효화
	});
	
	// 유투브 비디오 크기 설정
	function youtube_iframe(){
		var $iframe = $('#skill iframe');
		var i_width = parseInt($iframe.css('width'));
		console.log(i_width);
		$iframe.css('height', 56.25*i_width/100);
	}
	
	youtube_iframe();
	$(window).on('resize', function(){
		youtube_iframe();
	});
	
	// 비디오 버튼 효과
	$('#btn_play').on('click', function(){
		console.log('btn play');
		 $(this).hide(200, function(){
			 $('#skill iframe')
				.stop()
				.animate({'opacity': 1});	 
		 });
		 $('#skill .col-2').last().css('border', 'none');	
			
	});

});