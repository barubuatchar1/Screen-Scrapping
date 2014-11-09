var multicoldd={};(function(a){a.fn.multicoldd=function(o,k,b,n){var i={data:[],results:[],showAll:true,title:"&nbsp;",closeTooltip:"Close",closeLabel:"&times;",emptyLabel:"",emptyValue:"",emptyCategory:"",emptyCategoryId:"",emptyText:"",emptyResultText:"",cols:4,rows:10,speed:300,isRTL:false,panels:[{caption:"",cssClass:"",visibility:true}],enableHNavigation:true,enableVNavigation:true,enableType:true,enableSearch:true,enablePreSelect:true,autoSelect:true,autoClose:true,autoCompleteOne:true,select:function(p,q){},open:function(p){},close:function(p){}};var h={previousValue:"",attributeToClear:"data-category",attributeFocus:"data-focus"};var l=a(this);if(l.hasClass("multicoldd-value")){var c=l.parent(".multicoldd");var d=c.attr("data-mcdd-id");var f=multicoldd[d];var m=c.children(".multicoldd-user-input");if(c.children(".multicoldd-dialog").length>0){var j=c.children(".multicoldd-dialog");}}switch(o){case"option":if(b){f[k]=b;}else{return f[k];}break;case"clearSelection":m.val(f.emptyLabel);m.removeAttr("data-category data-category-id");l.val(f.emptyValue).attr("data-category",f.emptyCategory).attr("data-category-id",f.emptyCategoryId);break;case"value":if(k||k===""){l.val(k);a.each(f.data,function(p,r){var q={category:r.category,items:[]};a.each(r.items,function(t,s){if(s.value==l.val()){l.multicoldd("label",s.label);return false;}});});}return l.val();break;case"label":if(k||k==""){m.val(k);}return m.val();break;case"category":if(k||k==""){m.attr("data-category",k);}return m.attr("data-category");break;case"categoryId":if(k||k==""){m.attr("data-category-id",k);}return m.attr("data-category-id");break;case"enableType":if(k!=undefined&&k!=null){m.attr("readonly",!k);}return m.attr("readonly")!="readonly";break;case"search":var g=[];var e=(n==true?true:false);a.each(f.data,function(p,r){if(b&&r.category.toLowerCase()!=b.toLowerCase()){return true;}var q={category:r.category,id:r.id,items:[],panel:r.panel};a.each(r.items,function(w,t){var y=String(k).toUpperCase();var v=String(t.label).toUpperCase();var u=String(t.value).toUpperCase();var s=String(t.category).toUpperCase();if(String(v).indexOf(y)==0||String(u).indexOf(y)==0||String(s).indexOf(y)==0){var x={label:(e?t.label.replace(new RegExp("("+k+")","ig"),"<b>$1</b>"):t.label),value:t.value,disabled:t.disabled};q.items.push(x);}});if(q.items.length>0){g.push(q);}});return g;break;case"disabled":if(k!=undefined&&k!=null){l.attr("disabled",k);}return l.attr("disabled")=="disabled";break;case"id":if(k!=undefined&&k!=null){m.attr("id",k);m.attr("required","true");}if(b!=undefined&&b!=null){m.attr("requiredError",b);}if(n!=undefined&&n!=null){m.attr("requiredempty",n);}m.attr("autocomplete","off");break;}return this.each(function(){var z=a(this);var A;var D;var G;var v;if(z.hasClass("multicoldd-value")){A=z.parent(".multicoldd");D=A.attr("data-mcdd-id");G=multicoldd[D];v=A.children(".multicoldd-user-input");if(A.children(".multicoldd-dialog").length>0){var F=A.children(".multicoldd-dialog");}}switch(o){default:if(z.hasClass("multicoldd-value")){G=a.extend(G,o);z.multicoldd("enableType",G.enableType);}a(this).multicoldd("init",o);break;case"init":if(z.hasClass("multicoldd-value")){return;}G=a.extend(i,k);D=(z.prop("id")==null?"MultiColDD_":z.prop("id")+"_")+Math.floor(Math.random()*100000);multicoldd[D]=G;A=a('<div class="multicoldd multicoldd-container">'+'<input type="text" class="multicoldd-user-input multicoldd-toggle" />'+'<div class="multicoldd-drop-arrow multicoldd-toggle">&nbsp;</div>'+"</div>");A.attr("data-mcdd-id",D).addClass(D);v=A.find(".multicoldd-user-input");if(z.prop("tabindex")!=undefined&&z.prop("tabindex")!=""){v.prop("tabindex",z.prop("tabindex"));}v.addClass(z.prop("class")).attr("style",z.attr("style"));z.hide();A.insertAfter(z);z.appendTo(A);z.addClass("multicoldd-value");z.container=A;z.inputUI=v;z.multicoldd("enableType",G.enableType);if(G.enablePreSelect&&z.multicoldd("value")+""!=""){a.each(G.data,function(I,K){var J={category:K.category,items:[]};a.each(K.items,function(M,L){if(L.value==z.val()){z.multicoldd("label",L.label);return false;}});});}else{z.multicoldd("clearSelection");}v.click(function(){if(z[0].className.indexOf("dropDownDisabled")<0){if(z.multicoldd("disabled")){return false;}z.multicoldd("show");}v.select();});v.focusin(function(){var J=Boolean(v.attr(h.attributeFocus));if(J){return;}v.attr(h.attributeFocus,"true");var I=Boolean(v.attr(h.attributeToClear));if(!I){h.previousValue=v.val();v.val("");}});v.focusout(function(){var J=v.val();if(J==""){var I=h.previousValue;v.val(I);h.previousValue="";}v.removeAttr(h.attributeFocus);});A.children(".multicoldd-drop-arrow").click(function(){if(A.children(".multicoldd-dialog").length>0){z.multicoldd("hide");}else{z.multicoldd("show");}});v.keyup(function(J){if(z.multicoldd("disabled")){return false;}var I=A.children(".multicoldd-dialog");if(!G.enableSearch){return false;}if((J.which>=37&&J.which<=40)||(J.which>8&&J.which<=27)||(J.which==44)){return false;}z.multicoldd("show");z.multicoldd("filter",a(this).val());z.val("").attr("data-category","").attr("data-category-id","");if(G.results.length==1&&G.results[0].items.length==1){I.find(".multicoldd-item.multicoldd-selected").removeClass("multicoldd-selected");I.find(".multicoldd-item").eq(0).addClass("multicoldd-selected");}});v.keydown(function(J){if(z.multicoldd("disabled")){return false;}var P=A.children(".multicoldd-dialog");switch(J.which){case 40:if(!G.enableVNavigation){return;}z.multicoldd("show");if(P.length){var N=P.find(".multicoldd-item").index(P.find(".multicoldd-item.multicoldd-selected"));var L=P.find(".multicoldd-item").length;var M=(N+1)%L;while(P.find(".multicoldd-item").eq(M).hasClass("multicoldd-disabled")&&M!=N){M=(M+1)%L;}P.find(".multicoldd-item").eq(N).removeClass("multicoldd-selected");P.find(".multicoldd-item").eq(M).addClass("multicoldd-selected");z.multicoldd("update");}break;case 38:if(!G.enableVNavigation){return;}z.multicoldd("show");if(P.length){var N=P.find(".multicoldd-item").index(P.find(".multicoldd-item.multicoldd-selected"));var L=P.find(".multicoldd-item").length;var M=(N-1+L)%L;while(P.find(".multicoldd-item").eq(M).hasClass("multicoldd-disabled")&&M!=N){M=(M-1+L)%L;}P.find(".multicoldd-item").eq(N).removeClass("multicoldd-selected");P.find(".multicoldd-item").eq(M).addClass("multicoldd-selected");z.multicoldd("update");}break;case 39:if(!G.enableHNavigation){return;}z.multicoldd("show");if(P.length){var Q=P.find(".multicoldd-column").length;var I=P.find(".multicoldd-column").index(P.find(".multicoldd-column:has(.multicoldd-item.multicoldd-selected)"));var N=P.find(".multicoldd-column").eq(I).find("li").index(P.find(".multicoldd-column").eq(I).find(".multicoldd-item.multicoldd-selected"));var L=P.find(".multicoldd-column").eq(I).find("li").length;var K=(I+1)%Q;var O=P.find(".multicoldd-column").eq(K).find("li").length;var M=(N>=O)?O-1:N;var R=(M-1+O)%O;while((P.find(".multicoldd-column").eq(K).find("li").eq(M).hasClass("multicoldd-disabled")||P.find(".multicoldd-column").eq(K).find("li").eq(M).hasClass("multicoldd-category"))&&M!=R){M=(M-1+O)%O;}P.find(".multicoldd-column").eq(I).find("li").eq(N).removeClass("multicoldd-selected");P.find(".multicoldd-column").eq(K).find("li").eq(M).addClass("multicoldd-selected");z.multicoldd("update");}break;case 37:if(!G.enableHNavigation){return;}z.multicoldd("show");if(P.length){var Q=P.find(".multicoldd-column").length;var I=P.find(".multicoldd-column").index(P.find(".multicoldd-column:has(.multicoldd-item.multicoldd-selected)"));var N=P.find(".multicoldd-column").eq(I).find("li").index(P.find(".multicoldd-column").eq(I).find(".multicoldd-item.multicoldd-selected"));var L=P.find(".multicoldd-column").eq(I).find("li").length;var K=(I-1+Q)%Q;var O=P.find(".multicoldd-column").eq(K).find("li").length;var M=(N>=O)?O-1:N;var R=(M-1+O)%O;while((P.find(".multicoldd-column").eq(K).find("li").eq(M).hasClass("multicoldd-disabled")||P.find(".multicoldd-column").eq(K).find("li").eq(M).hasClass("multicoldd-category"))&&M!=R){M=(M-1+O)%O;}P.find(".multicoldd-column").eq(I).find("li").eq(N).removeClass("multicoldd-selected");P.find(".multicoldd-column").eq(K).find("li").eq(M).addClass("multicoldd-selected");z.multicoldd("update");}break;case 27:z.multicoldd("hide");break;case 13:case 9:if(P.length){if(P.find(".multicoldd-selected").length){P.find(".multicoldd-selected").find("a").click();}else{if(J.which==9){z.multicoldd("hide");return true;}}return false;}break;}});break;case"focus":v.focus();v.select();break;case"show":if(A.children(".multicoldd-dialog").length>0){return;}var F=a('<div class="multicoldd-dialog multicoldd-is-opening"><div class="multicoldd-wrapper">'+'<div class="multicoldd-header">'+'<a class="multicoldd-close" title="'+G.closeTooltip+'">'+G.closeLabel+"</a>"+'<div class="multicoldd-caption">'+G.title+"</div>"+"</div>"+'<div class="multicoldd-content">'+"</div>"+"</div></div>");if(parseInt(F.children(".multicoldd-wrapper").css("min-width"))<A.width()||F.children(".multicoldd-wrapper").css("min-width")==""){F.children(".multicoldd-wrapper").css("min-width",A.width()-(F.children(".multicoldd-wrapper").outerWidth()-F.children(".multicoldd-wrapper").width()));}z.dialog=F;A.addClass("multicoldd-active");F.appendTo(A);z.multicoldd("reload");F.css({"visibility":"hidden","display":"block"});var C=20;if(G.isRTL){F.css("right",0);if(F.offset().left-C<0){if(F.outerWidth()+C>a(window).width()){F.css("right","-"+(a(window).width()-F.offset().left-F.outerWidth()-C)+"px");}else{F.css("right",(F.offset().left-C)+"px");}}}else{F.css("left",0);}F.css({"display":"none","visibility":"visible"});F.slideDown(G.speed,function(){a(this).removeClass("multicoldd-is-opening");if(G.open){G.open(z);}});v.focus();F.find(".multicoldd-close").click(function(){z.multicoldd("hide");});A.hover(function(){a("body").attr("data-mcdd-hovered","true");},function(){a("body").attr("data-mcdd-hovered","false");});a(window).click(function(I){if(a("body").attr("data-mcdd-hovered")=="false"){a("body").unbind(I);a(".multicoldd .multicoldd-dialog:not(.multicoldd-is-opening) .multicoldd-close").click();}});break;case"hide":case"close":a("body").removeAttr("data-mcdd-hovered");A.unbind("hover").unbind("mouseover");if(!z.multicoldd("value")){z.multicoldd("label",G.emptyLabel);v.removeAttr("data-category data-category-id");}A.removeClass("multicoldd-active");G.showAll=true;if(F){F.slideUp(G.speed,function(){a(this).remove();if(G.close){G.close(z);}});}break;case"remove":if(!z.hasClass("multicoldd-value")){return;}z.insertBefore(A);A.remove();z.removeClass("multicoldd-value");z.show();break;case"add":if(k.category==null){k.category="$default";}G.data[k.category].push(k);break;case"reload":if(k){G.data=k;}F.find(".multicoldd-content").empty();if(G.showAll){G.results=G.data;}if(G.results&&G.results.length>0){var H=0;var s=0;var y=0;a.each(G.results,function(I,J){H++;H+=J.items.length;});if(G.rows*G.cols<H){var q=Math.ceil(H/G.cols);}else{var q=G.rows;}var r=Math.ceil(H/q);var w=0;var x;var t=0;var E=false;a.each(G.results,function(K,L){w++;if(!L.panel){L.panel=0;}if(G.panels[L.panel].visibility!=undefined&&!G.panels[L.panel].visibility){return;}if(w>=q||K==0||L.panel!=t){var J={caption:"",cssClass:""};if(G.panels[L.panel]){if(G.panels[L.panel].caption){J.caption=G.panels[L.panel].caption;}if(G.panels[L.panel].cssClass){J.cssClass=G.panels[L.panel].cssClass;}}if(L.panel!=t){var I=true;}else{var I=false;}x=a('<ul class="'+"multicoldd-column "+J.cssClass+" "+(J.caption?"multicoldd-column-has-caption ":"")+'">'+(I?'<div class="multicoldd-column-caption">'+J.caption+"</div>":"")+"</ul>");x.appendTo(F.find(".multicoldd-content"));t=L.panel;w=1;}x.append('<li class="multicoldd-category" data-id="'+(typeof(L.id)=="string"?L.id:"")+'">'+L.category+"</li>");a.each(L.items,function(P,O){w++;if(w>q&&P<L.items.length-1){var N={caption:"",cssClass:""};if(G.panels[L.panel]){if(G.panels[L.panel].caption){N.caption=G.panels[L.panel].caption;}if(G.panels[L.panel].cssClass){N.cssClass=G.panels[L.panel].cssClass;}}var M=false;x=a('<ul class="'+"multicoldd-column "+N.cssClass+" "+(N.caption?"multicoldd-column-has-caption ":"")+'">'+(M?'<div class="multicoldd-column-caption">'+N.caption+"</div>":"")+"</ul>");x.appendTo(F.find(".multicoldd-content"));w=0;}var Q=false;if(O.value==z.val()&&E==false){E=true;Q=true;}x.append('<li class="multicoldd-item '+(O.disabled?"multicoldd-disabled ":"")+(Q?"multicoldd-selected ":"")+'">'+'<a data-value="'+O.value+'" data-category="'+L.category+'" data-category-id="'+L.id+'">'+O.label+"</a>"+"</li>");});});F.find(".multicoldd-content").append('<div class="multicoldd-clear"></div>');var u=x.outerWidth()+parseInt(x.css("margin-left"))+parseInt(x.css("margin-right"));r=F.find(".multicoldd-content ul.multicoldd-column").length;var B=(F.find(".multicoldd-content").outerWidth()-F.find(".multicoldd-content").width())+(F.children(".multicoldd-wrapper").outerWidth()-F.children(".multicoldd-wrapper").width());F.children(".multicoldd-wrapper").css("width",(r*u+B)+"px");}else{if(!G.data||G.data.length==0){F.children(".multicoldd-wrapper").css("width","0px");F.find(".multicoldd-content").append('<div class="multicoldd-empty">'+G.emptyText+"</div>");}else{F.children(".multicoldd-wrapper").css("width","0px");F.find(".multicoldd-content").append('<div class="multicoldd-empty">'+G.emptyResultText+"</div>");}}z.dialog=F;if(G.onreload){G.onreload(z);}F.find(".multicoldd-item").find("a").hover(function(){F.find(".multicoldd-item.multicoldd-selected").removeClass("multicoldd-selected");a(this).parent(".multicoldd-item").addClass("multicoldd-selected");if(G.autoSelect){z.multicoldd("update");}},function(){a(this).parent(".multicoldd-item").removeClass("multicoldd-selected");}).click(function(){if(a(this).parent(".multicoldd-item").hasClass("multicoldd-disabled")){return false;}a(this).parent(".multicoldd-item").addClass("multicoldd-selected");z.multicoldd("update");if(G.select){G.select(z,{label:v.val(),value:z.val(),category:a(this).attr("data-category"),categoryId:a(this).attr("data-category-id")});}if(G.autoClose){F.find(".multicoldd-close").click();}return false;});break;case"filter":if(k==""){G.showAll=true;}else{G.results=z.multicoldd("search",k,b,true);G.showAll=false;}z.multicoldd("reload");break;case"update":var p=F.find(".multicoldd-item.multicoldd-selected");if(p.hasClass("multicoldd-disabled")){return false;}v.val(p.children("a").text());z.val(p.children("a").attr("data-value"));v.attr("data-category",p.children("a").attr("data-category"));v.attr("data-category-id",p.children("a").attr("data-category-id"));break;}});};})(jQuery);