$(document).ready(function(){
				/*拐点坐标弹出框开始*/
				$('#close').click(function(){
					$('.coordinate').hide(300);
				});
				
				$("#zuobiao").click(function(event) {
			var e = window.event || event;
			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
			$(".coordinate").show(300);
		});
		$(".coordinate").click(function(event) {
					var e = window.event || event;
					if (e.stopPropagation) {
						e.stopPropagation();
					} else {
						e.cancelBubble = true;
					}
		});
		document.onclick = function() {
			$(".coordinate").hide(300);
		};
		/*拐点坐标结束*/
		/*选项卡及隔行变色开始*/
				$(".box1-table tbody td:odd").css('color','#8493e3');
				$('.box1-content2 tbody td:odd').css('color','#8493e3');
		/*选项卡点击事件*/
				$('.box1-div li').click(function(){
					$('.box1-div li').removeClass('active1');
					$(this).addClass('active1');
					$('.box1>div').css('display','none');
					$('.box1>div:eq('+$(this).index()+')').css('display','block');
				});
				
				$('.meun ul>li').click(function(){
					$('.meun ul>li').removeClass('active');
					$(this).addClass('active');
					$('.box>div').css('display','none');
					$('.box>div:eq('+$(this).index()+')').css('display','block');
				});
				$('.box2 ul>li').click(function(){
					$('.box2 ul>li').removeClass('active1');
					$(this).addClass('active1');
					$('.box2>div').css('display','none');
					$('.box2>div:eq('+$(this).index()+')').css('display','block');
				});
			});
			
$(function() {
				var container = $('#container');
				var list = $('#list');
				var buttons = $('#buttons span');
				var prev = $('#prev');
				var next = $('#next');
				var index = 1;
				var len = 11;
				var interval = 10000;
				var timer;
				function animate(offset) {
					var left = parseInt(list.css('left')) + offset;
					if(offset > 0) {
						offset = '+=' + offset;
					} else {
						offset = '-=' + Math.abs(offset);
					}
					list.animate({
						'left': offset
					}, 300, function() {
						if(left > -200) {
							list.css('left', -1050 * len);
						}
						if(left < (-1050 * len)) {
							list.css('left', -1050);
						}
					});
				}
				function showButton() {
					buttons.eq(index - 1).addClass('on').siblings().removeClass('on');
				}
				function play() {
					timer = setTimeout(function() {
						next.trigger('click');
						play();
					}, interval);
				}
				function stop() {
					clearTimeout(timer);
				}
				next.bind('click', function() {
					if(list.is(':animated')) {
						return;
					}
					if(index == 11) {
						index = 1;
					} else {
						index += 1;
					}
					animate(-1050);
					showButton();
				});
				prev.bind('click', function() {
					if(list.is(':animated')) {
						return;
					}
					if(index == 1) {
						index = 11;
					} else {
						index -= 1;
					}
					animate(1050);
					showButton();
				});
				buttons.each(function() {
					$(this).bind('click', function() {
						if(list.is(':animated') || $(this).attr('class') == 'on') {
							return;
						}
						var myIndex = parseInt($(this).attr('index'));
						var offset = -1050 * (myIndex - index);
						animate(offset);
						index = myIndex;
						showButton();
					})
				});
				container.hover(stop, play);
				play();
			});