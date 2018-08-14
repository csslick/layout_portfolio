$(function(){
	// 비쥬얼 영역에 마우스가 올라가면 애니메이션 재생
	$('#visual').on('mouseover', function(){
		$('.visual_txt')
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

});