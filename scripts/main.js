"use strict";!function(){CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,readOnly:!0,theme:"monokai"}),$(".age").html(moment("19941213","YYYYMMDD").fromNow()),$(".coding").html(moment("20130601","YYYYMMDD").fromNow()),$(".enlarge").hover(function(){$(this).transition({scale:1.5})},function(){$(this).transition({scale:1})}),$(".instagram").hover(function(){$(this).css({color:"#3f729b"})},function(){$(this).css({color:"#EEEEEE"})}),$(".facebook").hover(function(){$(this).css({color:"#3b5998"})},function(){$(this).css({color:"#EEEEEE"})}),$(".twitter").hover(function(){$(this).css({color:"#8b9dc3"})},function(){$(this).css({color:"#EEEEEE"})}),$(".github").hover(function(){$(this).css({color:"#666666"})},function(){$(this).css({color:"#EEEEEE"})}),$(".gplus").hover(function(){$(this).css({color:"#dc4e41"})},function(){$(this).css({color:"#EEEEEE"})}),$("#typehere").typed({stringsElement:$(".typethis"),typeSpeed:30,startDelay:1e3,loop:!0})}();