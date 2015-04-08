<html>
	<head>
		<title>《学用典赞习大大》</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<script src="{{URL::asset('js/praise-xi/ajax.js')}}"></script>
		<script src="{{URL::asset('js/praise-xi/main.js')}}"></script>
		<link rel='stylesheet' type="text/css" href="{{URL::asset('css/praise-xi/style.css')}}">
	</head>

	<body>
		<div class="game-back">
			<div class="beginPage">
				<img src="{{URL::asset('images/Xi-logo.png')}}" class="logo">
				<div class="slogan">
					<p>坚定理想信念、练就过硬本领、</p>
					<p>勇于创新创造、矢志艰苦奋斗、</p>
					<p>锤炼高尚品格</p>
				</div>
				<div class="begin_btn" id="begin">开始游戏</div>
				<p class="copyright">©重庆邮电大学红岩网校工作站</p>
			</div>
			<div class="holder">
				<div class="Xi-titile">
				</div>
				<p id="sentence">

				</p>
				<ul class="wordsBox">
					<li></li>
					<li></li>
					<li></li>
					<li style="border: none"></li>
				</ul>
				<ul class="wordSelect">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<p class="gametour"><span class="warm">!</span>在最短的时间内完成所有题目</p>
				<p class="gametour">(荐语时间不计算在内)</p>
			</div>
			<div class="Xiwords" style="display: none;">
				<h1 class="tips_title">
					<span class="line" style="float: left;"></span>[ <span class="xi">习大大用典</span> ]<span class="line" style="float: right"></span>
				</h1>
				<div class="Xiaddress">
					&nbsp;&nbsp;&nbsp;<span class="wordsR">功崇惟志，业广惟勤。</span>----<span class="address">在十二届全国人民代表大会第一次会议上的讲话（2013年3月17日）。</span>
				</div>
				<div class="tips">
					&nbsp;&nbsp;&nbsp;荐语：语出<span class="where">《尚书》</span><br>&nbsp;&nbsp;&nbsp;
					<span class="tipsWords">
						很明显嘛，这对于青年学生非常重要，作风要务实、态度要踏实，一步一个脚印朝前走。“量变引起质变”，咱不可能“一口吃成胖娃娃”。在努力前行的过程中，以志为方向、以勤为动力，相信每个人都能找到人生舞台、收获出彩机会。
					</span>
				</div>
				<div class="beginAgain begin_btn">
					下一题
				</div>
			</div>
			<div class="score" style="display: none">
				<img src="{{URL::asset('images/over.png')}}" class="over_star">
				<p>您在<span class="score_num">50</span>秒内</p><br>
				<p>答对了<span class="sub_num">8</span>道题</p><br>
				<p>排名第<span class="rank_num">1</span></p><br>
				<span class="share">分享</span>
			</div>
		</div>
	</body>
</html>