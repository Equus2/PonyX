// ==UserScript==
// @name        Pashe's 8chanX
// @version     1.35.9.1417688840
// @namespace   https://github.com/Pashe/
// @description Small userscript to improve 8chan
// @match       *://8chan.co/*
// @match       *://hatechan.co/*
// @match       *://jp.8chan.co/*
// @match       *://8ch.net/*
// @run-at      document-end
// @grant       none
// @require     https://8chan.co/js/jquery-ui.custom.min.js
// @require     http://timeago.yarp.com/jquery.timeago.js
// @updateURL   https://github.com/Pashe/8chan-X/raw/master/8chan-x.meta.js
// @downloadURL https://github.com/Pashe/8chan-X/raw/master/8chan-x.user.js
// @icon        data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjc2NTUxNDksLTEuNzY2NTg5OSwxLjc2NTUxNDksMS43NjY1ODk5LDcxLjI3MzI4NywyNC42MDgxOTgpIj48cGF0aCBkPSJtIC0xMy4yMTU4MiwtMTcuODQzNDg4IGMgLTAuODQzNzU1LDZlLTYgLTEuNTA3MzI5LDAuMjI1NTkyIC0xLjk5MDcyMywwLjY3Njc1OCAtMC40ODM0MDIsMC40NTExNzcgLTAuNzI1MTAxLDEuMDcyMjcgLTAuNzI1MDk4LDEuODYzMjgxIC0zZS02LDAuNzkxMDE5IDAuMjQxNjk2LDEuNDEyMTEyIDAuNzI1MDk4LDEuODYzMjgxIDAuNDgzMzk0LDAuNDUxMTc0IDEuMTQ2OTY4LDAuNjc2NzU5IDEuOTkwNzIzLDAuNjc2NzU4IDAuODQzNzQzLDFlLTYgMS41MDg3ODIsLTAuMjI3MDQ5IDEuOTk1MTE3LC0wLjY4MTE1MiAwLjQ4NjMyLC0wLjQ1NDA5OSAwLjcyOTQ4NCwtMS4wNzM3MjggMC43Mjk0OTIsLTEuODU4ODg3IC04ZS02LC0wLjc5MTAxMSAtMC4yNDE3MDcsLTEuNDEyMTA0IC0wLjcyNTA5OCwtMS44NjMyODEgLTAuNDgzNDA1LC0wLjQ1MTE2NiAtMS4xNDk5MDksLTAuNjc2NzUyIC0xLjk5OTUxMSwtMC42NzY3NTggeiBtIC0xLjc3NTM5MSwtMC43NTU4NTkgYyAtMC43NjE3MjIsLTAuMTg3NDkzIC0xLjM1NDk4MywtMC41NDE5ODUgLTEuNzc5Nzg1LC0xLjA2MzQ3NyAtMC40MjQ4MDcsLTAuNTIxNDc2IC0wLjYzNzIwOSwtMS4xNTcyMTcgLTAuNjM3MjA3LC0xLjkwNzIyNiAtMmUtNiwtMS4wNDg4MTggMC4zNzM1MzMsLTEuODc3OTE4IDEuMTIwNjA1LC0yLjQ4NzMwNSAwLjc0NzA2NywtMC42MDkzNjIgMS43NzA5OTIsLTAuOTE0MDQ5IDMuMDcxNzc4LC0wLjkxNDA2MyAxLjMwNjYzMywxLjRlLTUgMi4zMzIwMjMsMC4zMDQ3MDEgMy4wNzYxNzIsMC45MTQwNjMgMC43NDQxMzA2LDAuNjA5Mzg3IDEuMTE2MjAwNiwxLjQzODQ4NyAxLjExNjIxMDUsMi40ODczMDUgLTkuOWUtNiwwLjc1MDAwOSAtMC4yMTI0MTIsMS4zODU3NSAtMC42MzcyMDcsMS45MDcyMjYgLTAuNDI0ODEzNSwwLjUyMTQ5MiAtMS4wMTUxNDU1LDAuODc1OTg0IC0xLjc3MDk5NjUsMS4wNjM0NzcgMC44NTU0NjEsMC4xOTkyMjUgMS41MjE5NjQsMC41ODg4NzMgMS45OTk1MTIxLDEuMTY4OTQ1IDAuNDc3NTI5MSwwLjU4MDA4MyAwLjcxNjI5ODQsMS4yODkwNjcgMC43MTYzMDg2LDIuMTI2OTUzIC0xLjAyZS01LDEuMjcxNDg3IC0wLjM4ODE5MzQsMi4yNDcwNzIgLTEuMTY0NTUwOCwyLjkyNjc1OCAtMC43NzYzNzU5LDAuNjc5Njg3IC0xLjg4ODE5MDksMS4wMTk1MzEgLTMuMzM1NDQ4OSwxLjAxOTUzMSAtMS40NDcyNywwIC0yLjU1OTA4NiwtMC4zMzk4NDQgLTMuMzM1NDUsLTEuMDE5NTMxIC0wLjc3NjM2OCwtMC42Nzk2ODYgLTEuMTY0NTUyLC0xLjY1NTI3MSAtMS4xNjQ1NSwtMi45MjY3NTggLTJlLTYsLTAuODM3ODg2IDAuMjQwMjMzLC0xLjU0Njg3IDAuNzIwNzAzLC0yLjEyNjk1MyAwLjQ4MDQ2NiwtMC41ODAwNzIgMS4xNDg0MzQsLTAuOTY5NzIgMi4wMDM5MDYsLTEuMTY4OTQ1IHogbSAtMC42NTAzOTEsLTIuODAzNzExIGMgLTNlLTYsMC42Nzk2OTYgMC4yMTIzOTksMS4yMDk5NjkgMC42MzcyMDcsMS41OTA4MiAwLjQyNDgwMSwwLjM4MDg2NyAxLjAyMDk5MiwwLjU3MTI5NyAxLjc4ODU3NSwwLjU3MTI4OSAwLjc2MTcxMiw4ZS02IDEuMzU3OTAzLC0wLjE5MDQyMiAxLjc4ODU3NCwtMC41NzEyODkgMC40MzA2NTYsLTAuMzgwODUxIDAuNjQ1OTg4LC0wLjkxMTEyNCAwLjY0NTk5NiwtMS41OTA4MiAtOGUtNiwtMC42Nzk2NzcgLTAuMjE1MzQsLTEuMjA5OTUgLTAuNjQ1OTk2LC0xLjU5MDgyMSAtMC40MzA2NzEsLTAuMzgwODQ3IC0xLjAyNjg2MiwtMC41NzEyNzcgLTEuNzg4NTc0LC0wLjU3MTI4OSAtMC43Njc1ODMsMS4yZS01IC0xLjM2Mzc3NCwwLjE5MDQ0MiAtMS43ODg1NzUsMC41NzEyODkgLTAuNDI0ODA4LDAuMzgwODcxIC0wLjYzNzIxLDAuOTExMTQ0IC0wLjYzNzIwNywxLjU5MDgyMSB6IiBzdHlsZT0iZmlsbDojMjA1MDhjIiAvPjwvZz48L3N2Zz4=
// ==/UserScript==

/*Contributors
*tux3
*Zaphkiel
*varemenos
*7185
*Pashe
*/

/*********
GLOBALS
*********/
//Constants
var unreadFavicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAAXNSR0IArs4c6QAAAd1JREFUOMu9kj1oU1EUgL/z8tM8M1iIYOlQ0pzQXTpVnFshFHSKHSoIRUwKDp11FHTwp0NeGhdFQSoKLkFEV3UQQRBxyg0oAbcQlJo+2/eOS1LUUBREv+nce+45nPvdCwOkEBTagkzzE8VasSp7i6D40MzeA6CBGvuxV6KBPgJOJIv14oJE0ouJDwIkzeyJefbCVd2xfftoTY9roJcAZLYxm+pFvW+D3AdXcdMINpwm2Yt6bzBOuVV3P1/LT0zenPT9ur9MzBFXdcJfkxjZMUQn9GJuMbfTbXY7Iwf0sD4z7DXG3Vwp91k00CZQGnhachW3CTDTmDkURdFH0UBtOK3W9CXCnIicNrNrJnbVG7bO38pn8NgMt8MDscXzJnamXWlfTiKsa6BGHyxh4521Th9Y5r/xW9X56/nxRDrxGGHuR5uCrLcqrTUZyi0EhZOCzJtYVkSeh/3wTpyNxY/9lV1v90EqTHVb51shQKFWWBKRe8A7TwO9oHWNRWRDkLdi0sRYHMuMffUjfwujnN5JTw2LATzxtgZhRjTQPpAJ02Gus9Lpjjz7hpYxrgBTv1z+tsu5FdFAzwIN4AvGDfPskyALGFmMrlt15T+SqDU9ilBC2BbkVetc6+nw4/9TvgNQUr7tUjroFgAAAABJRU5ErkJggg==";
var readFavicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAAXNSR0IArs4c6QAAAeNJREFUOMu9kk1IVGEUhp/3jj8zukiYIGkh6iftwzZGaw1EqJW5KAxsvhmFgta1DGpRGTF35g5EURBGQRuJqG21iCKIaOUVCqHdYIU/k849LXIMEymCenbncM7hvO85sIF6fTgv6GELfb44qc0gFz6wwN4D4Hxo7MRmi/PhQ+BIU1++NKSkvpjALoAmM3tsCp7H0eShHec4Xzzs8uEFAPXnouZF1b8BYHyIK4UekDW2aVpU/Q3YsTiautc9Wezcm6tkMkHpOEmyP45+6vh7UttTJpfrPJ89MLJWfT27sK3A5fc8NXgFdifbP/xFzoezwPAPnzQWlwszAPty0e666h/lfGiNbZ0vvgANSDphZlfMdDlojO4ev5nGgpla22pbYjZo0sn5SuGinC9Ng50BMEt1zFf8Z/4rv7W6e/xqR6q15RFoYIuZcG0uKpxVI+714VEZgya1S3pWy6zcTpbalSGZWCe439xaq85dP10D6PXFMaG7wLvA+fCc86VEUlnirbBZzEZal9PLGdWXCGy0hbWuRjNAEGhp47vScj5cAdK19Zbswo2J6raz58ujmF0Cun5RfyuuZifkfJgDIuArsmlLgk8SQ8jaMavG0dToH5noThUPktIwiVYV8HKunH/SePx/ynf5T8EXjP2zGwAAAABJRU5ErkJggg==";
var threadsPerPage = 15;
var bumpLimit = 300;

//Initializations
var unreadPosts = [];
var rse = null;
var threads = null;

//Dynamic
var originalPageTitle = document.title;
var thisBoard = window.location.pathname.split("/")[1]=="mod.php"?window.location.href.split("/")[4]:window.location.pathname.split("/")[1];
try {var thisThread = parseInt(window.location.href.match(/([0-9]+)\.html/)[1]);} catch (e) {var thisThread = -1};

/**************
GENERAL / MISC
**************/
function strEndsWith(str, s) {
  return str.length >= s.length && str.substr(str.length - s.length) == s;
}
  
function isOnCatalog() {
  return active_page === "catalog";
}

function isOnBoardIndex() {
  return active_page === "index";
}

function isOnThread() {
  return active_page === "thread";
}

function wrapQRSelectionWith(str) {
  if ($(document.activeElement)[0].id != "body")
    return;
  var txtarea = document.getElementById("body");
  var start = txtarea.selectionStart;
  var finish = txtarea.selectionEnd;
  var sel = txtarea.value.substring(start, finish);
  sel = str + sel + str;
  var fulltext = txtarea.value.substring(0, start) + sel + txtarea.value.substring(finish);
  txtarea.value = fulltext;
}

function getThreadPage(threadId, boardId, cached) {
	if ((threadId == thisThread) && (boardId == thisBoard)) {
		setTimeout(function() {
			console.log((document.getElementById("thread_stats_page").innerHTML));
			return parseInt(document.getElementById("thread_stats_page").innerHTML);
		}, 1000);
	}
	
	if ((!cached) || (threads == null)) {
		$.ajax({
			url: "/" + boardId + "/threads.json",
			async: false,
			dataType: "json",
			success: function (response) {threads = response;}
		});	
	}
	var precisePages = setting("precisepages");
	var threadPage = -1;

	for (var tIdx=0; tIdx<threads.length; tIdx++) {
		posts = threads[tIdx]['threads'];
		for (pIdx=0; pIdx<posts.length; pIdx++){
			tno = posts[pIdx]['no'];
			if (precisePages) {
				if (tno == threadId) {threadPage = ((threads[tIdx]['page']+1)+((pIdx+1)/threadsPerPage)).toFixed(2)};
			} else {
				if (tno == threadId) {threadPage = threads[tIdx]['page']+1 };
			}
		}
	}
	return threadPage;
}

/*!
* Dynamically changing favicons with JavaScript
* Works in all A-grade browsers except Safari and Internet Explorer
* Demo: http://mathiasbynens.be/demo/dynamic-favicons
* (Stolen from https://gist.github.com/mathiasbynens/428626)
*/
function changeFavicon(src) {
	document.head || (document.head = document.getElementsByTagName('head')[0]);
	var link = document.createElement('link'),
	oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'shortcut icon';
	link.href = src;
	if (oldLink) {document.head.removeChild(oldLink);}
	document.head.appendChild(link);
}

/**************
SETTINGS
**************/
if (typeof _ == 'undefined') {
  var _ = function (a) {
    return a;
  };
}
var tempSettings = {
};
var defaultSettings = {
  'relativetime': true,
  'revealspoilers': false,
  'revealimagespoilers': false,
  'imagehover': true,
  'catalogimagehover': true,
  'cataloglinks': false,
  'threadnewtab': false,
	'precisepages': false,
	'dynamicfavicon': false,
	'hidefeaturedboards': true,
	'searchbyimagelinks': true,
	'imagetimeguess':false,
	'mascoturl':"",
	'autowatchthreads': false
};
var settingsMenu = document.createElement('div');
if (window.Options) {
  var tab = Options.add_tab('8chanX', 'times', '8chanX');
  $(settingsMenu) .appendTo(tab.content);
} 
settingsMenu.innerHTML = '<span style="font-size:8pt;">8chanX '+GM_info.script.version+'</span>'
+ '<div style="overflow:auto;height:240px;">'
+ '<label><input type="checkbox" name="relativetime">' + 'Use relative post times' + '</label><br>'
+ '<label><input type="checkbox" name="revealspoilers">' + 'Reveal text spoilers' + '</label><br>'
+ '<label><input type="checkbox" name="revealimagespoilers">' + 'Reveal image spoilers' + '</label><br>'
+ '<label><input type="checkbox" name="imagehover">' + 'Show full images on hover' + '</label><br>'
+ '<label><input type="checkbox" name="catalogimagehover">' + 'Show full images on hover on catalog' + '</label><br>'
+ '<label><input type="checkbox" name="cataloglinks">' + 'Link to the catalog in the menu' + '</label><br>'
+ '<label><input type="checkbox" name="threadnewtab">' + 'Open threads in a new tab' + '</label><br>'
+ '<label><input type="checkbox" name="precisepages">' + 'Increase page indicator precision' + '</label><br>'
+ '<label><input type="checkbox" name="dynamicfavicon">' + 'Use dynamic favicon' + '</label><br>'
+ '<label><input type="checkbox" name="hidefeaturedboards">' + 'Hide featured boards' + '</label><br>'
+ '<label><input type="checkbox" name="searchbyimagelinks">' + 'Add reverse image search links' + '</label><br>'
+ '<label><input type="checkbox" name="imagetimeguess">' + 'Try to guess when an image was originally uploaded based on its filename' + '</label><br>'
+ '<label><input type="checkbox" name="autowatchthreads">' + 'Automatically watch posted-in threads' + '</label><br>'
+ '<label>' + 'Mascot URL' + '<input type="text" name="mascoturl"></label><br>'
+ '<button id="purgedeadfavorites">' + 'Clean favorites' + '</button>'
+ '</div>';
function setting(name) {
  if (localStorage) {
    if (localStorage[name] === undefined) return defaultSettings[name];
    return JSON.parse(localStorage[name]);
  } else {
    if (tempSettings[name] === undefined) return defaultSettings[name];
    return tempSettings[name];
  }
}
function changeSetting(name, value) {
  if (localStorage) {
    localStorage[name] = JSON.stringify(value);
  } else {
    tempSettings[name] = value;
  }
}
function refreshSettings() {
  var settingsItems = settingsMenu.getElementsByTagName('input');
  for (var i = 0; i < settingsItems.length; i++) {
    var control = settingsItems[i];
    if (control.type == 'checkbox')
      control.checked = setting(control.name);
		if (control.type == 'text')
			control.value = setting(control.name);
  }
}
function setupControl(control) {
  if (control.addEventListener) control.addEventListener('change', function (e) {
    if (control.type == 'checkbox')
      changeSetting(control.name, control.checked);
		 if (control.type == 'text')
			changeSetting(control.name, control.value);
  }, false);
}
refreshSettings();
var settingsItems = settingsMenu.getElementsByTagName('input');
for (var i = 0; i < settingsItems.length; i++) {
  setupControl(settingsItems[i]);
}
if (settingsMenu.addEventListener && !window.Options) {
  settingsMenu.addEventListener('mouseover', function (e) {
    refreshSettings();
    settingsMenu.getElementsByTagName('a') [0].style.fontWeight = 'bold';
    settingsMenu.getElementsByTagName('div') [0].style.display = 'block';
  }, false);
  settingsMenu.addEventListener('mouseout', function (e) {
    settingsMenu.getElementsByTagName('a') [0].style.fontWeight = 'normal';
    settingsMenu.getElementsByTagName('div') [0].style.display = 'none';
  }, false);
}

/*************************************************************************
RELATIVE TIME
*************************************************************************/
$(document).ready(function() {
  if (setting('relativetime'))
    $("time").timeago();
});

// Show the relative time for new posts
$(document).on('new_post', function (e, post) {
  if (setting('relativetime'))
    $("time").timeago();
});


/**************************************
MENU BAR
**************************************/
function getMenuStats() {
	var nPosts = document.getElementsByClassName("post reply").length;
	var nImages = document.getElementsByClassName("post-image").length;
  var hlStyle = "<span style='color:#f00;font-weight:bold;'>";
    
  if (nPosts >= bumpLimit) {nPosts = hlStyle + nPosts + "</span>";}

	var threadPage = getThreadPage(thisThread, thisBoard, false);
    
  return "<abbr title='Posts' style='border:none'>" + nPosts + "</abbr> / <abbr title='Images' style='border:none'>" + nImages + "</abbr> / <abbr title='Page' style='border:none'>" + (threadPage<1?"<span style='opacity:0.5'>???</span>":threadPage) + "</abbr>"; //I feel like there's a cleaner way to to the hover text

}

function updateMenuStyle() {
	if (rse == null) {rse = document.createElement("div"); rse.className = "post reply";}
	var menu = document.getElementsByClassName("boardlist")[0];
	var rseBgColor = window.getComputedStyle(rse).backgroundColor;
	var rseBorderColor = window.getComputedStyle(rse).borderBottomColor;
	menu.style.backgroundColor = rseBgColor;
	menu.style.borderBottom = "1pt solid " + rseBorderColor;
}

function updateMenuStats() {
  var stats = document.getElementById("menuStats");
  var nPosts = document.getElementsByClassName("post reply").length;
  var nImages = document.getElementsByClassName("post-image").length;
  stats.innerHTML = getMenuStats();
}

function initMenu() {
  // Customize the menu
  var menu = document.getElementsByClassName("boardlist")[0];
  updateMenuStyle();
  try{document.querySelector('[data-description="1"]').style.display = 'none';} catch (e) {} //b, meta, and int
  try{document.querySelector('[data-description="2"]').style.display = 'none';} catch (e) {} //twitter
	try{
		if (setting("hidefeaturedboards")) {
			var checkPopBoardsExist = setInterval(function() { //popular boards/top boards/featured boards (what is consistency?)
				if (document.querySelectorAll('[data-description="3"]').length) {
					document.querySelector('[data-description="3"]').style.display = 'none';
					clearInterval(checkPopBoardsExist);
				}
			}, 100);
		}
	} catch (e) {}
	
  if (isOnCatalog())
    add_favorites();
  
  if (setting('cataloglinks') && !isOnCatalog())
  {
    $('.favorite-boards a').each( function (index, data) {
      $(this).attr("href", $(this).attr("href")+"/catalog.html");
    });
  }
  
  if (isOnThread())
  {
    $('#update_secs').remove();
    $('#update_thread').html("[Update thread]");
    var updateNode=document.createElement("SPAN");
    var updateTextNode=document.createTextNode('0');
    updateNode.appendChild(updateTextNode);
    updateNode.id = 'update_secs';
		updateNode.style.fontFamily = "'Source Code Pro', monospace";
		updateNode.style.paddingLeft = "1.5pt";
    menu.appendChild(updateNode);
    $('#update_secs').attr("title","Update thread");
    $('#update_secs').click(function() { 
      $('#update_thread').click();
    });
    
    var statsNode=document.createElement("SPAN");
    statsNode.innerHTML = getMenuStats();
    statsNode.id = 'menuStats';
		statsNode.style.paddingLeft = "3pt";
    menu.appendChild(statsNode);
  }
  
  // Hook style changes to update the menu's style
  var styles = document.getElementsByClassName("styles")[0].childNodes;
  for(i=0; i<styles.length; i++) {
    styles[i].onclick = function () {
      changeStyle(this.innerHTML.substring(1, this.innerHTML.length - 1), this);
      updateMenuStyle();
			
			fixTwStyle();
    };
  }
}

/*********************
IMPROVED PAGE TITLES
*********************/
function initImprovedPageTitles() {
  if (isOnCatalog())
    originalPageTitle = document.location.pathname.replace("catalog.html", " - Catalog");
  else if (isOnThread())
  {
    try {
      originalPageTitle = document.location.pathname.match(/\/(.*?)\//)[0] + " - " + (function(){
        var op = document.getElementsByClassName("op")[0];
        var subject = op ? op.getElementsByClassName("subject")[0] : null;
        var body = op ? op.getElementsByClassName("body")[0] : null;
        return subject ? subject.textContent : body ? body.textContent.length > 70 ? body.textContent.substr(0, 70) + "..." : body.textContent : "8chan";
      })();
    } catch (e) { }
  }
  
  document.title = originalPageTitle;
}

/*********************
CATALOG THREAD LINKS
*********************/

function initThreadLinks() {
  if (!setting("threadnewtab"))
    return;
  if (isOnCatalog())
  {
    var threads = document.getElementsByClassName("thread");
    for (i in threads)
    {
      if (typeof threads[i] === "object")
        threads[i].getElementsByTagName("a")[0].target = "_blank";
    }
  }
}

/*********************
REVEAL TEXT SPOILERS
*********************/

function initRevealSpoilers() {
  if (!setting('revealspoilers'))
    return;
  $('.spoiler').each(function() {
    $(this).css('color','white');
  });
}

// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  if (!setting('revealspoilers'))
    return;
  $('#'+$(post).attr('id')+' .spoiler').each(function() {
    $(this).css('color','white');
  });
  
  
});

/*********************
REVEAL IMAGE SPOILERS
*********************/

function initRevealImageSpoilers() {
  if (!setting('revealimagespoilers'))
    return;
  $('.post-image').each(function() {
    var pic;
    if ($(this)[0].tagName == "IMG")
      pic = $(this);
    else if ($(this)[0].tagName == "CANVAS")
      pic = $(this).next();
    var picUrl = pic.attr("src");
    if (picUrl.indexOf('spoiler.png') >= 0)
    {
      pic.attr("src", $(this).parent().attr("href"));
      pic.addClass("8chanx-spoilered-image");
    }
  });
}

// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  if (!setting('revealimagespoilers'))
    return;
  $('#'+$(post).attr('id')+' .post-image').each(function() {
    var pic;
    if ($(this)[0].tagName == "IMG")
      pic = $(this);
    else if ($(this)[0].tagName == "CANVAS")
      pic = $(this).next();
    var picUrl = pic.attr("src");
    if (picUrl.indexOf('spoiler.png') >= 0)
    {
      pic.attr("src", $(this).parent().attr("href"));
      pic.addClass("8chanx-spoilered-image");
    }
  })
});

/***********************
UNANIMATE GIFS
***********************/
// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  if (localStorage.no_animated_gif === 'false')
    return;
  $('#'+$(post).attr('id')+' .post-image').each(function() {
    var pic;
    var pic;
    if ($(this)[0].tagName == "IMG")
      pic = $(this);
    else if ($(this)[0].tagName == "CANVAS")
      pic = $(this).next();
    var picUrl = pic.attr("src");
    if (picUrl.match(".gif$"))
    {
      unanimate_gif(pic.get(0));
    }
  });
});

/***********************
UNREAD POSTS
***********************/
// Returns true if we've just read a new post, and remove it
function checkFirstUnread() {
  if (unreadPosts.length == 0)
    return false;
  
  if (!document.hasFocus())
    return false;
  
  var postId = unreadPosts[0];
  var post = $("#reply_"+postId);
  if ($(window).scrollTop() + $(window).height() >= post.position().top + post.height())
  {
    unreadPosts.shift();
    return true;
  }
  else
    return false;
}

var dynamicFavicon = setting("dynamicfavicon");

function checkUnreadPosts() {  
  while (checkFirstUnread());
  
  if (isOnThread())
  {
    if (unreadPosts.length != 0) {
      document.title = "("+unreadPosts.length+") "+originalPageTitle;
			if (dynamicFavicon) {changeFavicon(unreadFavicon)};
    } else {
      document.title = originalPageTitle;
			if (dynamicFavicon) {changeFavicon(readFavicon)};
		}
  }
}

$(window).focus(function(){
  if (unreadPosts.length)
    checkUnreadPosts();
});

// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  var postId = $(post).attr('id').replace(/^reply_/, '');
  unreadPosts[unreadPosts.length] = postId;
  //alert(unreadPosts);
  updateMenuStats();
  checkUnreadPosts();
});

// Prepare initial unread posts
function initUnreadPosts() {
  // First mark all posts as unread
  $('.post.reply').each( function (index, data) {
    var postId = $(this).attr('id').replace(/^reply_/, '');
    unreadPosts[unreadPosts.length] = postId;
  });
  checkUnreadPosts();
  
  $(window).scroll(function() {
   checkUnreadPosts();
  });
}

/************
IMAGE HOVER
************/
var imghoverMMove = function(e) {
  if (!setting('imagehover') && !setting('catalogimagehover'))
    return;
  var pic;
  if ($(this)[0].tagName == "IMG")
    pic = $(this);
  else if ($(this)[0].tagName == "CANVAS")
    pic = $(this).next();
  var picUrl = pic.attr("src");
  if (picUrl.indexOf('spoiler.png') >= 0)
    picUrl = $(this).parent().attr("href");
  pic.parent().removeData("expanded");
  if (pic.parent().data("expanded"))
    return;
  picUrl = picUrl.replace("/src/","/thumb/");
  if (picUrl.indexOf('/thumb/') == -1)
    return;
  var picTimestamp = picUrl.substr(picUrl.indexOf("/thumb/")+7);
  var picTimestamp = picTimestamp.substr(0, picTimestamp.lastIndexOf("."));
  var picId = "post-image-"+picTimestamp;
  var hoverPic = $("#"+picId);
  // Create the hovering image if needed, otherwise just update it's position
	
	var picRightEdge = hoverPic.width() + e.pageX;
	var windowWidth = $(window).width();
	
  if (!hoverPic.length)
  {
    var newpic = pic.clone();
    newpic.attr("id",picId);
    newpic.css('display', 'block').css('position', 'absolute').css('z-index', '200').css("margin", "0px").css("padding", "0px");
    newpic.attr("src",picUrl.replace("/thumb/","/src/"));
		
		if (picRightEdge > windowWidth) {
			newpic.css('left', (e.pageX + (windowWidth - picRightEdge))).css('top', top);
		} else {
			newpic.css('left', e.pageX).css('top', top);
		}
		
    newpic.css('width', 'auto').css('height', 'auto');
    newpic.css('pointer-events','none');
    newpic.css('max-height',$(window).height());
    newpic.css('max-width',$(window).width());
    newpic.insertAfter(pic);
  }
  else
  {
    var scrollTop = $(window).scrollTop();
    var epy = e.pageY;
    var top = epy;
    if (epy < scrollTop + 15) {
      top = scrollTop;
    } else if (epy > scrollTop + $(window).height() - hoverPic.height() - 15) {
      top = scrollTop + $(window).height() - hoverPic.height() - 15;
    }
		
		if (picRightEdge > windowWidth) {
			hoverPic.css('left', (e.pageX + (windowWidth - picRightEdge))).css('top', top);
		} else {
			hoverPic.css('left', e.pageX).css('top', top);
		}
  }
};

var imghoverMOut = function(e) {
  // Delete the hovering image
  var pic;
  if ($(this)[0].tagName == "IMG")
    pic = $(this);
  else if ($(this)[0].tagName == "CANVAS")
    pic = $(this).next();
  var picUrl = pic.attr("src");
  if (picUrl.indexOf('spoiler.png') >= 0)
    picUrl = $(this).parent().attr("href");
  picUrl = picUrl.replace("/src/","/thumb/");
  var picTimestamp = picUrl.substr(picUrl.indexOf("/thumb/")+7);
  var picTimestamp = picTimestamp.substr(0, picTimestamp.lastIndexOf("."));
  var picId = "post-image-"+picTimestamp;
  var hoverPic = $("#"+picId);
  if (hoverPic.length)
    hoverPic.remove();
  if ($(this).hasClass('unanimated'))
  {
    $($(this).parent().children()).each( function (index, data) {
    if ($(this).parent().data("expanded") != "true")
    {
      $(this).mousemove(imghoverMMove);
      $(this).mouseout(imghoverMOut);
      $(this).click(imghoverMOut);
    }
  });
  }
};

function initImageHover() {
  if (!setting('imagehover') && !setting('catalogimagehover'))
    return;
  
  var selector = '';
  
  if (setting('imagehover'))
    selector += 'img.post-image, canvas.post-image';
  
  if (setting('catalogimagehover') && isOnCatalog())
  {
    if (selector != '')
      selector += ', ';
    selector += '.thread-image';
    $('.theme-catalog div.thread').each(function() {
      $(this).css('position','inherit');
    });
  }
  
  $(selector).each( function (index, data) {
    if ($(this).parent().data("expanded") != "true")
    {
      $(this).mousemove(imghoverMMove);
      $(this).mouseout(imghoverMOut);
      $(this).click(imghoverMOut);
    }
  });
}

$(document).on('new_post', function (e, post) {
  if (!setting('imagehover'))
    return;
  $('#'+$(post).attr('id')+' .post-image').each( function (index, data) {
    if ($(this).parent().data("expanded") != "true")
    {
      $(this).mousemove(imghoverMMove);
      $(this).mouseout(imghoverMOut);
      $(this).click(imghoverMOut);
    }
  });
});

/***************************************
KEYBOARD EVENTS
***************************************/
// Seems like only firefox has those handy defines
if (typeof KeyEvent == "undefined") {
    var KeyEvent = {
        DOM_VK_ESCAPE: 27,
        DOM_VK_A: 65,
        DOM_VK_B: 66,
        DOM_VK_C: 67,
        DOM_VK_D: 68,
        DOM_VK_E: 69,
        DOM_VK_F: 70,
        DOM_VK_G: 71,
        DOM_VK_H: 72,
        DOM_VK_I: 73,
        DOM_VK_J: 74,
        DOM_VK_K: 75,
        DOM_VK_L: 76,
        DOM_VK_M: 77,
        DOM_VK_N: 78,
        DOM_VK_O: 79,
        DOM_VK_P: 80,
        DOM_VK_Q: 81,
        DOM_VK_R: 82,
        DOM_VK_S: 83,
        DOM_VK_T: 84,
        DOM_VK_U: 85,
        DOM_VK_V: 86,
        DOM_VK_W: 87,
        DOM_VK_X: 88,
        DOM_VK_Y: 89,
        DOM_VK_Z: 90
    };
}

function showQR() {
	$(window).trigger('cite');
};

window.addEventListener('keydown', function(event) {
  var activeElem = document.activeElement;
  if (event.keyCode === KeyEvent.DOM_VK_ESCAPE) {
    $origPostForm.find('textarea[name="body"]').attr('id', 'body');
    $origPostForm.find('textarea[name="body"]').val('');
    $('#quick-reply').remove();
  }
  
  // Some shortcuts should only work outside the QR box
  if (activeElem.nodeName == "INPUT" || activeElem.nodeName == "TEXTAREA") {return;}
	
	if ((!event.ctrlKey) && (!event.metaKey)) {
		switch (event.keyCode) {
			case KeyEvent.DOM_VK_R:
				if (isOnThread()) {
					$('#update_thread').click();
				} else {
					document.location.reload();
				}
				break;
			case KeyEvent.DOM_VK_Q:
				showQR();
				$("#quick-reply textarea").focus();
				event.preventDefault();
				break;
			case KeyEvent.DOM_VK_E:
				var shrink = $('#shrink-all-images a');
				if (shrink.length) {
					shrink.click();
				} else {
					$('#expand-all-images a').click();
				}
				break;
		}
	}
});

/*********
CATALOG
*********/
function initCatalog() {
	if (isOnCatalog()) {
		addCatalogPages();
		setCatalogTitle();
		highlightCatalogAutosage();
		addCatalogNullImagePlaceholders();
		setCatalogImageSize();
	}
}

function addCatalogPages() {
	var threadElements = document.getElementsByClassName("thread");

	for (i=0;i<threadElements.length;i++) {
		var threadId = threadElements[i].innerHTML.match(/<a href="[^0-9]*([0-9]+).html?">/)[1];
		var threadPage = getThreadPage(threadId, thisBoard, true);
		
		$(threadElements[i]).find("strong").first().append(" / P: " + (threadPage<1?"<span style='opacity:0.5'>???</span>":threadPage));
	}
}

function setCatalogTitle() {
	document.title = "/" + thisBoard + "/ - " + "Catalog";
}

function highlightCatalogAutosage() {
	replyElements = document.getElementsByClassName("replies");

	for (i=0;i<replyElements.length;i++) {
		eReplies = replyElements[i].innerHTML.match(/R: ([0-9]+)/)[1];
		if (eReplies>bumpLimit) {replyElements[i].innerHTML = replyElements[i].innerHTML.replace(/R: ([0-9]+)/, "<span style='color:#f00;'>R: $1</span>")};
	}
}

function setCatalogImageSize() {
		var catalogStorage = JSON.parse(localStorage["catalog"]);
		if (!catalogStorage["image_size"]) {
			catalogStorage["image_size"] = "large";
			localStorage["catalog"] = JSON.stringify(catalogStorage);
			
			$(".grid-li").removeClass("grid-size-vsmall");
			$(".grid-li").removeClass("grid-size-small");
			$(".grid-li").removeClass("grid-size-large");
			$(".grid-li").addClass("grid-size-" + catalogStorage["image_size"]);
			$("#image_size").val(catalogStorage["image_size"]);
		}
}

function addCatalogNullImagePlaceholders() {
	$("img").filter("[src='']").attr("src", "data:image/svg+xml;base64,PHN2ZyB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyMDAiIHdpZHRoPSIyMDAiIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtODYwKSI+PHRleHQgc3R5bGU9ImxldHRlci1zcGFjaW5nOjBweDt0ZXh0LWFuY2hvcjptaWRkbGU7d29yZC1zcGFjaW5nOjBweDt0ZXh0LWFsaWduOmNlbnRlcjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZvbnQtc2l6ZT0iNjRweCIgeT0iOTMwIiB4PSI5NSIgZm9udC1mYW1pbHk9IidBZG9iZSBDbGVhbiBVSScsIHNhbnMtc2VyaWYiIGxpbmUtaGVpZ2h0PSIxMjUlIiBmaWxsPSIjMDAwMDAwIj48dHNwYW4geD0iOTUiIHk9IjkyOSI+Tm88L3RzcGFuPjx0c3BhbiB4PSI5NSIgeT0iMTAxMCI+SW1hZ2U8L3RzcGFuPjwvdGV4dD48L2c+PC9zdmc+");
}

var sbp = [
	{
		"urlPre" : "https://www.google.com/searchbyimage?image_url=",
		"urlPost": "",
		"name"   : "Google"
	},
	{
		"urlPre" : "http://iqdb.org/?url=",
		"urlPost": "",
		"name"   : "iqdb"
	},
	{
		"urlPre" : "https://saucenao.com/search.php?db=999&url=",
		"urlPost": "",
		"name"   : "SauceNAO"
	},
	{
		"urlPre" : "https://www.tineye.com/search/?url=",
		"urlPost": "",
		"name"   : "TinEye"
	}
];

function initSbiLinks() {
if (setting("searchbyimagelinks")) {
	var posts = $("img.post-image");
	$(document).on('new_post', function (e, post) {
		var newPosts = $('#'+$(post).attr('id')+' img.post-image'); 
		for (var npIdx in newPosts) {
			addSbiLinks(newPosts[npIdx]);
		}
	});
	for (var pIdx in posts) {
		addSbiLinks(posts[pIdx]);
	}
}
}

function addSbiLinks(post) {
	for (var sbpIdx in sbp) {
		try {
		var imgUrl = post.src;
		var urlPre = sbp[sbpIdx]["urlPre"] || "";
		var urlPost = sbp[sbpIdx]["urlPost"] || "";
		
		var sbiUrl = (urlPre + imgUrl + urlPost);
		var sbiText = ("[" + sbp[sbpIdx]["name"][0].toUpperCase() + "]");
		
		var spElement = document.createElement('span');
		spElement.innerHTML = "&nbsp;";
		
		var sbiElement = document.createElement('a');
		sbiElement.href = sbiUrl;
		sbiElement.title = "Search with "+sbp[sbpIdx]["name"];
		sbiElement.target = "_blank";
		sbiElement.style.fontSize = "8pt";
		sbiElement.className = "sbi_link";
		sbiElement.innerHTML = sbiText;
		
		post.parentNode.parentNode.getElementsByClassName("fileinfo")[0].appendChild(spElement);
		post.parentNode.parentNode.getElementsByClassName("fileinfo")[0].appendChild(sbiElement);
	} catch(e){}}
}

function initQrDrag() {
	$("#quick-reply").draggable();
}

function initImageDates() {
	if (setting("imagetimeguess")) {try {
	var minTimeStamp = new Date(1985,1).valueOf();
	var maxTimeStamp = Date.now()+86400000;
	var selectorString = "p.fileinfo > span.unimportant > a:link";
	
	var filenames = document.querySelectorAll(selectorString);
	for (var fIdx in filenames) {
		try {
		var fName = filenames[fIdx].innerHTML;
		var fTimeStamp = +(fName.match(/^([0-9]{9,13})[^a-zA-Z0-9]?.*$/)[1]);
		
		if (fTimeStamp < minTimeStamp) {fTimeStamp *= 1000;} //It's probably not a microsecond timestamp if it's before 1985
		if ((fTimeStamp < minTimeStamp) || (fTimeStamp > maxTimeStamp)) {continue} //It's probably not a timestamp at all if it's before 1985 or after tomorrow
		var fDate = new Date(fTimeStamp);
		
		var fTimeElement = document.createElement('span');
		fTimeElement.className = "image-time-guess";
		fTimeElement.title = fDate.toGMTString();
		fTimeElement.innerHTML = ", " + $.timeago(fTimeStamp) + ")";
		fTimeElement.dataset.timestamp = fTimeStamp;
		fTimeElement.dataset.isotime = fDate.toISOString();
		
		document.querySelectorAll(selectorString)[fIdx].parentNode.innerHTML = document.querySelectorAll(selectorString)[fIdx].parentNode.innerHTML.replace(")", "");
		document.querySelectorAll(selectorString)[fIdx].parentNode.appendChild(fTimeElement);
		} catch (e) {}
	}
	} catch (e) {}}
}

function initNotifications() {
	Notification.requestPermission();

	$(document).on('new_post', function(e,post) {
		var $post = $(post);
		if ($post.is('div.post.reply')) { // it's a reply
			$post.each(notifyReplies);
		}
		else {
			//$post.each(notifyReplies); // first OP
			$post.find('div.post.reply').each(notifyReplies); // then replies
		}
	});
}

function notifyReplies() {
	/*
	* taken from https://github.com/ctrlcctrlv/8chan/blob/master/js/show-own-posts.js
	*
	* Released under the MIT license
	* Copyright (c) 2014 Marcin Labanowski <marcin@6irc.net>
	*/
	
  var thread = $(this).parents('[id^="thread_"]').first();
  if (!thread.length) {
    thread = $(this);
  }

  var ownPosts = JSON.parse(localStorage.own_posts || '{}');

  $(this).find('div.body:first a:not([rel="nofollow"])').each(function() {
    var postID;

    if(postID = $(this).text().match(/^>>(\d+)$/))
      postID = postID[1];
    else
      return;

    if (ownPosts[thisBoard] && ownPosts[thisBoard].indexOf(postID) !== -1) {
			var replyPost = $(this).closest("div.post");
			var replyUser = (replyPost.find(".name").text()+replyPost.find(".trip").text());
			var replyBody = replyPost.find(".body").text();
			var replyImage = replyPost.find(".post-image").first().attr('src');
			
			new Notification(replyUser+" replied to your post", {body:replyBody,icon:replyImage});
    }
  });
};

function fixTwStyle() {
	var twVis = $("#watchlist").css("display");
	watchlist.render(true);
	$("#watchlist").css("display", twVis);
}

function initMascot() {
if (setting("mascoturl")) {
	$("head").append(
		"<style>" +
		"	form[name=postcontrols] {"+
		"		margin-right: 22%;"+
		"	}"+
		"	div.delete{"+
		"		padding-right: 6%;"+
		"	}"+
		"	div.styles {"+
		"		float: left;"+
		"	}"+
		"	div#eightchanxmascot img {"+
		"		display: block;"+
		"		position: fixed;"+
		"		bottom: 0pt;"+
		"		right: 0pt;"+
		"		left: auto;"+
		"		max-width: 25%;"+
		"		max-height: 100%;"+
		"		opacity: 0.8;"+
		"		z-index: -100;"+
		"		pointer-events: none;"+
		"	}"+
		"</style>"
	);
	
	var mascotHolder = document.createElement("div");
	var mascotImage = document.createElement("img");
	var hostElement = document.getElementsByTagName("body")[0];

	mascotHolder.id = "eightchanxmascot"
	mascotImage.setAttribute('src', setting("mascoturl"));

	mascotHolder.appendChild(mascotImage);
	hostElement.appendChild(mascotHolder);
	
	$(mascotImage).css("display", "block").css("position", "fixed").css("bottom", "0pt").css("right", "0pt").css("left", "auto").css("max-width", "25%").css("max-height", "100%").css("opacity", "0.8").css("z-index", "-100").css("pointer-events", "none");
	
	if (isOnCatalog()) {mascotImage.style.zIndex = -100}
}
}

$(document).ready(function() {
$("#purgedeadfavorites").click(function() {
	console.log("Working...");
	var originalText = $("#purgedeadfavorites").text();
	$("#purgedeadfavorites").text("Working...");
	$("#purgedeadfavorites").prop("disabled", true);
	var boards;
	$.ajax({
			url: "/boards.json",
			async: false,
			dataType: "json",
			success: function (response) {boards = response;}
	});	
	var boardsURIs = [];
	var favorites = JSON.parse(localStorage.favorites);

	for (var x in boards) {
		boardsURIs.push(boards[x]['uri']);
	}
	
	if (boardsURIs.length > 0) {
		for (var i=0; i<favorites.length; i++) {
			var board = favorites[i];
			if (($.inArray(board, boardsURIs) == -1)) {
				$.ajax({
					url: "/" + board + "/",
					async: false,
					statusCode: {404: function() {
						unfavorite(board);
						console.log("Purge board /" + board + "/");
					}},
					success: function () {console.log("Keep unlisted board /" + board + "/");},
					type: "HEAD"
				});
			} else {
				console.log("Keep listed board /" + board + "/");
			}
		}
	}
	console.log("Done");
	$("#purgedeadfavorites").text(originalText + " - done")
	$("#purgedeadfavorites").prop("disabled", false);
});
});

/*********
INIT
*********/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
// When all is loaded
//addLoadEvent(initMenu);
// As soon as the DOM is ready
$(document).ready(function() {
  initMenu();
  initImprovedPageTitles();
  initThreadLinks();
  initUnreadPosts();
  initImageHover();
  initRevealSpoilers();
  initRevealImageSpoilers();
	initCatalog();
	changeFavicon(readFavicon);
	initSbiLinks();
	initQrDrag();
	initImageDates();
	if (localStorage.color_ids == undefined) localStorage.color_ids = true;
	if ((localStorage.videohover == undefined) && setting('imagehover')) localStorage.videohover = true;
	if (localStorage.useInlining == undefined) localStorage.useInlining = true;
	initNotifications();
	fixTwStyle();
	initMascot();
	$(document).on('ajax_after_post', function(e, ret) {if (isOnThread() && setting('autowatchthreads'))	{$(".watchThread").click();}}); //Auto thread watch
});
