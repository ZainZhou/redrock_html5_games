/**
 * Created by truemenhale on 15/5/14.
 */
//1.爱国;2.诚信;3.敬业;4.友善
function setCenter(obj,m,c){
	obj.css('left',m*c);
}
function count(obj,flag){
	var m=2;
	var timer=setInterval(function(){
		obj.html(m);
		m--;
		if(m<0){
			obj.html("Go!");
			clearInterval(timer);
		}
	},1000);
}
function gameOver(){
	alert('游戏结束！');
}
function ballInit(){
	this.type;
	this.src;
	this.dom;
}
ballInit.prototype.setType=function(a){
		this.type=a;
};
ballInit.prototype.setSrc=function(src){
	this.src=src;
};
ballInit.prototype.setDom=function(dom){
	this.dom=dom;
};
function boxInit(){
	ballInit.call(this);
}
for(x in ballInit.prototype){
	boxInit.prototype[x]=ballInit.prototype[x];
}
function gameInit(balls,boxs){
	for(var i=1 ; i<5 ; i++){
		switch (i){
			case 1:
				for(var j=1 ; j<10 ; j++){
					var a=new ballInit();
					a.setType(i);
					a.setSrc('../../../public/images/goodcitizen/'+i+'/'+j+'.png');
					balls.push(a);
				}
				break;
			case 2:
				for(var j=1 ; j<12 ; j++){
					var a=new ballInit();
					a.setType(i);
					a.setSrc('../../../public/images/goodcitizen/'+i+'/'+j+'.png');
					balls.push(a);
				}
				break;
			case 3:
				for(var j=1 ; j<14 ; j++){
					var a=new ballInit();
					a.setType(i);
					a.setSrc('../../../public/images/goodcitizen/'+i+'/'+j+'.png');
					balls.push(a);
				}
				break;
			case 4:
				for(var j=1 ; j<12 ; j++){
					var a=new ballInit();
					a.setType(i);
					a.setSrc('../../../public/images/goodcitizen/'+i+'/'+j+'.png');
					balls.push(a);
				}
				break;
			default:
				alert('我要报警了！');
		}
	}
	balls.sort(function(){ return 0.5 - Math.random() });
	balls.sort(function(){ return 0.5 - Math.random() });
	balls.sort(function(){ return 0.5 - Math.random() });
	balls.sort(function(){ return 0.5 - Math.random() });
	balls.sort(function(){ return 0.5 - Math.random() });
	for(var i = 1;i<5;i++){
		var b=new boxInit();
		b.setSrc('../../../public/images/goodcitizen/'+i+'.png');
		b.setType(i);
		boxs.push(b);
	}
}
function setBall(parent,arr,W){
	parent.append("<img class=\"ball animation\" content="+arr[0].type+" src="+arr[0].src+">");
	arr[0].setDom($('.ball'));
	setCenter(arr[0].dom,W,0.3984375);
}
var balls=[];
var boxs=[];
$(function(){
	var W=$(window).width();
	var H=$(window).height();
	var startBtn=$('.game_start');
	var guideBtn=$('.game_guide');
	var oHolder=$('.game_holder');
	var guideWords=$('.guide_words');
	var closeBtn=$('.close_btn');
	var GameBack=$('.game_page');
	var interval=(W*0.04);
	var countDown=$('.timer');
	var boxList=$('.box_list');
	var oScore=$('.score');
	var score=0;
	var blood=3;
	$('.container').css('height',H);
	setCenter($('.game_title'),W,0.178);
	setCenter($('.back_words'),W,0.1531375);
	setCenter(startBtn,W,0.23125);
	setCenter(guideBtn,W,0.23125);
	setCenter(guideWords,W,0.165625);
	guideBtn[0].addEventListener('touchstart',function(ev){
		guideWords.css('display','block');
		ev.preventDefault();
	});
	closeBtn[0].addEventListener('touchstart',function(ev){
		guideWords.css('display','none');
		ev.preventDefault();
	});
	startBtn[0].addEventListener('touchstart',function(ev){
		gameInit(balls,boxs);
		for(var i = 0;i<4;i++){
			boxList.append('<li class="back_size" content='+(i+1)+' style="background-image: url('+boxs[i].src+')"></li>');
		}
		var aLi = boxList[0].getElementsByTagName('li');
		for(var i = 0;i<aLi.length;i++){
			aLi[i].style.left=(interval*(i+1)+W*0.2*i)+'px';
		}
		oHolder.animate({'top':-H},400,function(){
			count(countDown);
			setTimeout(function(){
				countDown.animate({'top':-100},300,function(){
					//开始计时：
					var b=0;
					var s=0;
					var g=0;
					var msecond=0;
					var minsecond=0;
					var oB=$('.b');
					var oS=$('.s');
					var oG=$('.g');
					var omS=$('.msecond');
					var ominS=$('.minsecond');
					secondCount=setInterval(function(){
						minsecond++;
						if(minsecond>=10){
							msecond++;
							if(msecond>=10){
								g++;
								if(g>=10){
									g=0;
									s++;
									if(s>=10){
										s=0;
										b++;
										if(b>=10){
											gameOver();
										}
										oB.html(b);
									}
									oS.html(s);
								}
								oG.html(g);
								msecond=0;
							}
							omS.html(msecond);
							minsecond=0;
						}
						ominS.html(minsecond);
					},10);
					//生成dom.
					for(var i = 0;i<aLi.length;i++){
						aLi[i].addEventListener('touchstart',function(type){
							var ball=$('.ball');
							var a=parseInt(this.attributes['content'].value);
							var b=parseInt(ball.attr('content'));
							if(a==b){
								score++;
								oScore.html(score*10);
							}
							else{
								blood--;
								var bloodChange=document.getElementsByClassName('felled');
								bloodChange[0].className='empty';
								if(blood==0){
									gameOver();
								}
							}
							ball.remove();
							balls.splice(0,1);
							setBall(GameBack,balls,W);
						})
					}
					setBall(GameBack,balls,W);
				});
			},3300)
		});
		ev.preventDefault();
	});
});