function setPerson(b){b.style.top=b.r*84-5+"px";b.style.left=b.c*84+14+"px"}function loadImgs(b,g){var f={};var d=0;for(var e=0;e<b.length;e++){var h=new Image();h.src=b[e];var c=b[e].split(".")[0];h.onload=function(){d++;if(d==b.length){g()}};f[c]=h}return f}var LoadingList=["begin_bg.jpg","games_bg.jpg","games_bg.png","person_03.png","share.jpg","st.png","tips.jpg"];window.onload=function(){var y=document.querySelector("#tips_btn");var n=document.querySelector("#bg_web");var m=document.querySelector("#tip_web");var A=document.querySelector("#tips");var o=document.querySelector("#return");var x=document.querySelector("#start");var t=document.querySelector("#game_web");var v=document.querySelector("#loading_web");var s=document.querySelector("#share");var u=[["我为","核心","价值","代言"],["富强","民主","文明","和谐"],["自由","平等","公正","法治"],["爱国","敬业","诚信","友善"]];var g=document.querySelector("#game_box");var e=document.querySelector(".score");var b=document.querySelector(".time");var l=document.querySelector("#restart");var p=document.querySelector("#reply");var k=document.querySelector("#begin_img");var C=0;var h=[];var d=[];var f=0;console.log($(window).width());document.title="欢迎使用“社会主义核心价值观”游戏——夸父追日";if($(window).height()<=470){k.style.width=$(window).width()+"px";k.style.height=$(window).height()+"px";n.style.width=$(window).width()+"px";n.style.height=$(window).height()+"px";t.style.width=$(window).width()+"px";t.style.height=$(window).height()+"px";m.style.width=$(window).width()+"px";m.style.height=$(window).height()+"px";A.style.width=$(window).width()+"px";A.style.height=$(window).height()+"px";s.style.width=$(window).width()+"px";s.style.height=$(window).height()+"px";share_img.style.height=$(window).height()+"px";share_img.style.width=$(window).width()+"px"}loadImgs(LoadingList,function(){v.style.display="none";n.style.display="block"});x.addEventListener("click",function(){n.style.display="none";t.style.display="block";b.innerHTML="时间："+f+"";timer=setInterval(function(){f++;b.innerHTML="时间："+f+""},1000)});for(var z=0;z<4;z++){for(var w=0;w<4;w++){oNewDiv=document.createElement("div");oNewDiv.className="dot";g.appendChild(oNewDiv);h[z*4+w]={c:w,r:z,div:oNewDiv,type:"dark",inner:u[z][w]}}}for(var z=0;z<h.length;z++){h[z].div.style.top=h[z].r*84+28+"px";h[z].div.style.left=h[z].c*84+13+"px";h[z].div.innerHTML=h[z].inner}for(var z=0;z<3;z++){var q=parseInt(4*Math.random());var B=parseInt(4*Math.random());for(var w=0;w<h.length;w++){if(h[w].c==B&&h[w].r==q&&h[w].type=="dark"){h[w].div.style.background="red";h[w].div.style.color="yellow";h[w].type="light";d.push({r:q,c:B})}}}oPerson=document.createElement("div");oPerson.className="person";oPerson.r=parseInt(4*Math.random());oPerson.c=parseInt(4*Math.random());g.appendChild(oPerson);setPerson(oPerson);for(var z=0;z<h.length;z++){h[z].div.index=z;h[z].div.addEventListener("click",function(){var r=false;if(Math.abs(h[this.index].c-oPerson.c)==2&&Math.abs(h[this.index].r-oPerson.r)==1){r=true}if(Math.abs(h[this.index].c-oPerson.c)==1&&Math.abs(h[this.index].r-oPerson.r)==2){r=true}if(r){C++;e.innerHTML="步数："+C+"";if(h[this.index].type=="light"){h[this.index].type="dark";h[this.index].div.style.background="#3b2a01";h[this.index].div.style.color="#fff"}else{h[this.index].type="light";this.style.background="red";this.style.color="yellow"}oPerson.c=h[this.index].c;oPerson.r=h[this.index].r;setPerson(oPerson)}var c=0;for(var j=0;j<h.length;j++){if(h[j].type=="light"){c++}}if(c==16){alert("您一共走了"+C+"步！！！");t.style.display="none";s.style.display="block";clearInterval(timer);document.title="我在夸父追日中在"+f+"秒内以"+C+"步取得了胜利"}},false)}p.addEventListener("click",function(){var c=phone_input.value;var i=a.getAttribute("data");if(c.length!=11){alert('请输入正确的手机号!');return;}$.ajax({url:"/game/public/post",type:"post",dataType:"json",contentType:"application/json",data:JSON.stringify({_token:i,score:C,phone:c,time:f,type:"sun"})}).fail(function(){alert("与服务器连接错误!")}).complete(function(j){j=j.responseJSON;rank=j.rank;alert("提交成功,您当前是第"+rank+"名,点击右上角分享到朋友圈叫大家一起参与吧!");document.title='我在夸父追日中在'+f+"秒内以"+C+"步取得了胜利，排名第"+rank+""})},false);y.addEventListener("click",function(){n.style.display="none";m.style.display="block"},false);o.addEventListener("click",function(){m.style.display="none";n.style.display="block"},false);l.addEventListener("click",function(){self.location.reload()},false);reload.addEventListener("click",function(){self.location.reload()})};