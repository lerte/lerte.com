(function() {
	window.onload = function() {
		/* 加载loading显示与隐藏 */
		var loading = {
			show: function() {
				document.getElementById("m-loading").style.display = "block";
			},
			hide: function() {
				document.getElementById("m-loading").style.display = "none";
			}
		}
		/* 创建XMLHttpRequest对象 */
		var createXMLHttpRequest = function() {
			var xml = null;
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			}else {
				try{
					xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0");
				}catch(e) {
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				}
			}
			return xhr;
		}
		/* getElmentsByClassName兼容 */
		var getElementsByClassName = function(className, root, tagName) {
			root = document.body;
			tagName = tagName||"*";
			if(document.getElementsByClassName) {
				return root.getElementsByClassName(className);
			}else {
				var tag = root.getElementsByClassName(tagName);
				var tagAll = [];
				for(var i = 0; i < tag.length; i++) {
					for(var j = 0, n = tag[i].className.split(' '); j < n.length; j++) {
						if(n[j] == className) {
							tagAll.push(tag[i]);
							break;
						}
					}
				}
				return tagAll;
			}
		}
		/* 获取cookie对象 */
		var getcookie = function() {
			var cookie = {};
			var all = document.cookie;
			if (all === ''){return cookie;}
			var list = all.split('; ');
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var p = item.indexOf('=');
				var name = item.substring(0, p);
				name = decodeURIComponent(name);
				var value = item.substring(p + 1);
				value = decodeURIComponent(value);
				cookie[name] = value;
			}
			return cookie;
		}
		/* 检查不再提醒是否显示 */
		var checkremind = function() {
			if(getcookie().noremind) {
				document.getElementById("toptip").remove();
			}else {
				document.getElementById("toptip").style.display = "block";
				document.getElementById("noremind").onclick = function() {
					var date = new Date();
					date.setDate(date.getDate()+7);
					date.toGMTString();
					document.cookie = "noremind=yes"+";expires="+date;
					document.getElementById("toptip").remove();
				};
			}
		}
		/* 关注请求API */
		var follow = function() {
			var xhr = createXMLHttpRequest();
			var url = "//study.163.com/webDev/attention.htm";
			xhr.open("GET", url, true);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 3) {
					loading.show();
				}
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {
						loading.hide();
						if(xhr.responseText == 1) {
							var date = new Date();
							date.setDate(date.getDate()+7);
							date.toGMTString();
							document.cookie = "followSuc=yes"+";expires="+date;
							alert("关注成功");
							checkfollow();
						}
						if(xhr.responseText == 0) {
							alert("关注失败!");
						}
					}	
				}
			}
			xhr.send(null);
		}
		/* 检查是否已关注 */
		var checkfollow = function() {
			if(getcookie().followSuc) {
				/* 显示 已关注|取消 */
				document.getElementById("addfocus").style.display = "none";
				document.getElementById("cancelfocus").style.display = "inline-block";
				document.getElementById("fansnum").innerHTML++;
			}else {
				/* 显示 关注 */
				document.getElementById("addfocus").style.display = "inline-block";
				document.getElementById("cancelfocus").style.display = "none";
			}
		}
		/* 关注点击处理 */
		document.getElementById("addfocus").onclick = function(event) {
			if(getcookie().loginSuc) {
				follow();
			}else {
				document.getElementById("m-login").style.display = "block";
				document.getElementById("mask").style.display = "block";
			}	
		}
		/* 取消关注点击处理 */
		document.getElementById("canceltxt").onclick = function() {
			var date = new Date();
			date.setDate(date.getDate()-1);
			date.toGMTString();
			document.cookie = "followSuc=yes"+";expires="+date;
			alert("取消成功");
			checkfollow();
			document.getElementById("fansnum").innerHTML--;
		}
		/* 点击登录 */
		document.getElementById("loginbtn").onclick = function() {
			var loginform = document.forms["loginform"];
			login(hex_md5(loginform.username.value), hex_md5(loginform.password.value));
		}
		/* 登录请求API */
		var login = function(username, password) {
			var xhr = createXMLHttpRequest();
			var url = "//study.163.com/webDev/login.htm?userName="+username+"&password="+password;
			xhr.open("GET", url, true);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 3) {
					loading.show();
				}
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {
						loading.hide();
						if(xhr.responseText == 1) {
							var date = new Date();
							date.setDate(date.getDate()+7);
							date.toGMTString();
							document.cookie = "loginSuc=yes"+";expires="+date;
							document.getElementById("m-login").style.display = "none";
							document.getElementById("mask").style.display = "none";
							alert("登录成功!");
							follow();
						}
						if(xhr.responseText == 0) {
							alert("账号或密码错误!");
						}
					}
				}
			}
			xhr.send(null);			
		}
		/* 课程内容tab切换相关 */
		document.getElementById("seltab").onclick = function(event) {
			getcourses(null, null, event.target.dataset.type);
			var tNode = event.target.parentNode.children;
			for(var j=0; j<tNode.length; j++) {
				tNode[j].className = "f-fl";
			}
			event.target.className = "selected";
			/* 页码复位到第1页 */
			var pNode = document.getElementById("selpage").children;
			for(var i=1; i<pNode.length-1; i++) {
				pNode[i].className = "pagenum";
			}
			pNode[1].className = "pagenum selected";

		}
		/* 翻页切换相关 */
		document.getElementById("selpage").onclick = function(event) {
			if(event.target != document.getElementById("selpage")) {
				var currentpage = parseInt(document.getElementById("m-pageidx").dataset.pageNo);
				var pageprev = document.getElementById("selpage").firstElementChild;
				var pagenext = document.getElementById("selpage").lastElementChild;
				var type = document.getElementById("m-pageidx").dataset.type;
				var pNode = event.target.parentNode.children;
				for(var i=1; i<pNode.length-1; i++) {
					pNode[i].className = "pagenum";
				}
				if(event.target.dataset.index) {
					/* 数字页码点击处理 */
					getcourses(event.target.dataset.index, null, type);
					event.target.className = "pagenum selected";
				}else if(event.target == pageprev) {
					/* 前一页点击处理 */
					if(currentpage>1) {
						getcourses(currentpage-1, null, type);
						pNode[currentpage-1].className = "pagenum selected";	
					}else {
						pNode[1].className = "pagenum selected";
					}
				}else if(event.target == pagenext) {
					/* 后一页点击处理，暂时只处理到第8页 */
					if(currentpage<8) {
						getcourses(currentpage+1, null, type);
						pNode[currentpage+1].className = "pagenum selected";
					}else {
						pNode[8].className = "pagenum selected";
					}
				}
			}
		}
		/* 获取课程列表数据 */
		var getcourses = function(pageNo, psize, type) {
			var pageNo = arguments[0] ? arguments[0] : 1;
			var psize = arguments[1] ? arguments[1] : 24;
			var type = arguments[2] ? arguments[2] : 10;
			var xhr = createXMLHttpRequest();
			var courselistinner = document.getElementById("courselistinner");
			var url = "//study.163.com/webDev/couresByCategory.htm?pageNo="+pageNo+"&psize="+psize+"&type="+type;
			xhr.open("GET", url, true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 3) {
					loading.show();
				}
				if(xhr.readyState == 4){
					if(xhr.status == 200) {
						loading.hide();
						var result = eval('(' + xhr.responseText + ')');
						courselistinner.innerHTML = "";
						for(var i = 0; i < result.list.length; i++) {
							if(parseInt(result.list[i].price)==0) {
								result.list[i].price = "免费";
							}
							if(!result.list[i].categoryName) {
								result.list[i].categoryName = "";
							}
							courselistinner.innerHTML += '<div class="u-cover">\
									<div class="wrap f-cb">\
										<a>\
											<div class="img">\
												<div class="pic f-pr">\
													<img class="imgpic" src='+result.list[i].middlePhotoUrl+'>\
												</div>\
												<div class="title">\
													<h3 class="f-thide">'+result.list[i].name+'</h3>\
												</div>\
												<div class="orgname f-thide">'+result.list[i].provider+'</div>\
												<div class="thumb">\
													<div class="desc f-cb">\
														<span class="partcount">'+result.list[i].learnerCount+'</span>\
													</div>\
													<div class="btn">\
														<span class="normal">￥'+result.list[i].price+'</span>\
													</div>\
												</div>\
											</div>\
										</a>\
									</div>\
									<div class="wraphover f-pb">\
										<div class="upside">\
											<img src=' +result.list[i].middlePhotoUrl +'>\
											<span class="f-fr">\
												<p class="title f-thide">' +result.list[i].name+'</p>\
												<p class="partcount">'+result.list[i].learnerCount+'人在学</p>\
												<p class="orgname">发布者：'+result.list[i].provider+'</p>\
												<p class="category">分类：'+result.list[i].categoryName+'</p>\
											</span>\
										</div>\
										<div class="downside">\
											<p class="description">'+result.list[i].description+'</p>\
										</div>\
									</div>\
								</div>';
						}
						document.getElementById("m-pageidx").dataset.pageNo = pageNo;
						if(parseInt(pageNo) == 1) {
							document.getElementById("selpage").firstElementChild.className = "pagebtn pageprv disable"
						}else {
							document.getElementById("selpage").firstElementChild.className = "pagebtn pageprv"
						}
						if(parseInt(pageNo) == 8) {
							document.getElementById("selpage").lastElementChild.className = "pagebtn pagenxt disable"
						}else {
							document.getElementById("selpage").lastElementChild.className = "pagebtn pagenxt"
						}
						document.getElementById("m-pageidx").dataset.type = type;
					}
				}
			}
			xhr.send(null);
		}
		/* 获取排行列表数据 */
		var gethotcoures = function() {
			var xhr = new createXMLHttpRequest();
			var hottoplistinner = document.getElementById("hottoplistinner");
			var url = "//study.163.com/webDev/hotcouresByCategory.htm";
			xhr.open("GET", url, true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 3) {
					loading.show();
				}
				if(xhr.readyState == 4){
					if(xhr.status == 200) {
						loading.hide();
						var result = eval('(' + xhr.responseText + ')');
						hottoplistinner.innerHTML = "";
						for(var i=0; i<result.length; i++) {
							hottoplistinner.innerHTML += '<div class="u-cell"><img src=' +result[i].smallPhotoUrl +' />\
							<span class="f-fr">\
							<p class="f-thide">' +result[i].name +'</p>\
							<p class="learnercount">'+ result[i].learnerCount +'</p>\
							</span></div>';
						}
					}
					goscroll();
				}
			}
			xhr.send(null);
		}
		/* 排行列表滚动 */
		var goscroll = function() {
			var t;
			var h = 700;
			var preTop = 0;
			var speed = 20;
			var delay = 5000;
			var element = document.getElementById("hottoplistinner");
			element.scrollTop = 10;
			var lh = 70;
			var step = function() {
				t = setInterval(scroll, 20);
				element.scrollTop += 1;
			}
			var scroll = function() {
				if(element.scrollTop % lh != 0 && element.scrollTop % (element.scrollHeight - h - 1) != 0) {
					preTop = element.scrollTop;
					element.scrollTop += 1;
					if(preTop >= 680 || preTop == element.scrollTop) {
						setTimeout(function(){element.scrollTop = 0}, delay);
					}
				}else {
					clearInterval(t);
					setTimeout(step, delay);
				}
			}
			setTimeout(step, delay);
		}
		/* 获取课程列表数据和排行列表数据 */
		var getdatas = function() {
			getcourses();
			gethotcoures();
		}
		/* 视频播放控制相关 */
		document.getElementById("openvideo").onclick = function(event) {
			document.getElementById("m-player").style.display = "block";
			document.getElementById("videohandle").src = document.getElementById("introvideo").dataset.src;
			document.getElementById("videohandle").play();
			document.getElementById("mask").style.display = "block";
		}
		document.getElementById("closevideo").onclick = function() {
			document.getElementById("videohandle").pause();
			document.getElementById("m-player").style.display = "none";
			document.getElementById("mask").style.display = "none";
		}
		document.getElementById("closelogin").onclick = function() {
			document.getElementById("m-login").style.display = "none";
			document.getElementById("mask").style.display = "none";
		}
		/* 淡入动画效果 */
		var fadein = function(element) {
			var intervalId = null;
			if (!parseFloat(element.style.opacity)) {
				element.style.opacity = 0;
			}
			function step() {
				if (parseFloat(element.style.opacity) < 1) {
					element.style.opacity = parseFloat(element.style.opacity) + 1/20;
				} else {
					element.style.opacity = 1;
					clearInterval(intervalId);
				}
			}
			if(!!intervalId) {
				intervalId = clearInterval(intervalId);
			}
			var intervalId = setInterval(step, 25);
		}
		fadein(document.getElementById("slidewrap")); /* 首次载入页面淡入 */
		/* 淡入播放轮播图 */
		var current = 1;
		var intervalId = null;
		var imgs = document.getElementById("slidewrap").children;
		var idxs = document.getElementById("pointer").children;
		var slide = function(element) {
			for(var i = 0; i < imgs.length; i++) {
				imgs[i].style.display = "none";
				imgs[i].style.opacity = 0;
				imgs[current].style.display = "block";
				idxs[i].className = "";
				idxs[current].className = "current";
				fadein(imgs[current]);
			}
			current++;
			if(current > imgs.length - 1) {current = 0;}
		}
		/* 鼠标悬停，暂停切换轮播 */
		document.getElementById("slidewrap").onmouseover = function() {
			clearInterval(intervalId);
		}
		document.getElementById("slidewrap").onmouseout = function() {
			intervalId = setInterval(slide, 5000);
		}
		/* 点击小圆点切换轮播 */
		document.getElementById("pointer").onclick =  function(event) {
			if(event.target != document.getElementById("pointer")) {
				current = event.target.dataset.index;
				slide();
				clearInterval(intervalId);
				intervalId = setInterval(slide, 5000);
			}
		}
		var goslides = function() {
			if(!!intervalId) {
				intervalId = clearInterval(intervalId);
			}
			intervalId = setInterval(slide, 5000);
		}
		/* 顶部不再提醒是否显示 */
		checkremind();
		/* 关注状态显示 */
		checkfollow();
		/* 开始轮播 */
		goslides();
		/* 获取数据 */
		getdatas();
	}
}());