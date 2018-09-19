uiCore.directive("progressBar",function(){return{restrict:"AE",transclude:true,replace:true,template:'<div class="ui_com_progressbar_info"><div class="ui_com_progressbar_top"><richtext  param="compData.JS.textsmallfont1" ></span></div><div class="ui-percentageIcon" showpercentageimage={{percentageimageblockconfig}} styleset={{styleSet}} percentage percent="percent"></div><div class="ui_com_progressbar_icon_div"><div ng-show="compData.JS.percentagetextblockconfig" class="ui_com_progressbar_icon">{{percent}}%</div></div><div class="ui_com_progressbar_bottom"><horizontal-container param="compData.JS.TraffuUsagedetails" ><horizontal-container param="compData.JS.TrafficUsagevtfxUsedDetails" ><horizontal-container param="compData.JS.TraffuUsageValue" ><richtext  param="compData.JS.textsmallfontUsed"></richtext><richtext  param="compData.JS.textsmallfontused"  ></richtext><richtext  param="compData.JS.textsmallfontunit" ></richtext></horizontal-container></horizontal-container><horizontal-container  param="compData.JS.TrafficUsagevtfxAvailDetails"><horizontal-container param="compData.JS.TraffuUsageValue" ><richtext param="compData.JS.textsmallfontAvailable"  ></richtext><richtext param="compData.JS.textsmallfontremain" ></richtext><richtext  param="compData.JS.textsmallfontunit" ></richtext></horizontal-container></horizontal-container><horizontal-container  param="compData.JS.TrafficUsagevtfxTotalDetails" ><horizontal-container param="compData.JS.TraffuUsageValue" ><richtext    param="compData.JS.textsmallfontTotal"></richtext><richtext param="compData.JS.textsmallfonttotal" ></richtext><richtext param="compData.JS.textsmallfontunit"  ></richtext></horizontal-container></horizontal-container></horizontal-container></div></div>',require:"^pid",controller:["$scope","$element","$attrs","coreService","coreUtils","$timeout",function(d,c,b,f,a,e){d.cid=b.cid;d.eventMap={};d.compData={JS:{TrafficUsagevtfxUsedDetails:{CSS:{},JS:{type:"TrafficUsagevtfxUsedDetails",TrafficUsagevtfxUsedDetails:{extendable:"false",position:"relative",width:"32%",height:"100%",display:"flex",border:"none","box-shadow":"none","float":"left",overflow:"hidden"}}},TrafficUsagevtfxAvailDetails:{CSS:{},JS:{type:"TrafficUsagevtfxAvailDetails",TrafficUsagevtfxAvailDetails:{extendable:"false",position:"relative",width:"36%",height:"100%",display:"flex",border:"none","box-shadow":"none","float":"left",overflow:"hidden"}}},TrafficUsagevtfxTotalDetails:{CSS:{},JS:{type:"TrafficUsagevtfxTotalDetails",TrafficUsagevtfxTotalDetails:{extendable:"false",position:"relative",width:"32%",height:"100%",display:"flex",border:"none","box-shadow":"none","float":"left",overflow:"hidden"}}},TraffuUsagedetails:{CSS:{},JS:{type:"TraffuUsagedetails",TraffuUsagedetails:{extendable:"false",position:"relative",width:"100%",height:"2em",display:"flex",border:"none",border:"none","box-shadow":"none",top:"0px"}}},TraffuUsageValue:{CSS:{},JS:{type:"TraffuUsageValue",TraffuUsageValue:{extendable:"false",position:"relative",border:"none","box-shadow":"none",width:"4em"}}},textsmallfont1:{CSS:{"font-size":"0.7em","line-height":"2.5em","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","min-width":"10%","max-width":"100%","text-align":"left","font-family":"inherit","font-weight":"bold",},JS:{text:d.data.name}},textsmallfontUsed:{CSS:{"font-size":"0.7em","line-height":"2.5em","font-family":"inherit",display:"inline"},JS:{text:"Used:"}},textsmallfont:{CSS:{"font-size":"0.7em","line-height":"2.5em","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","min-width":"10%","max-width":"100%","text-align":"left","font-family":"inherit",display:"inline"},JS:{}},textsmallfontused:{CSS:{"font-size":"0.7em","line-height":"2.5em","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","min-width":"10%","max-width":"100%","text-align":"left","font-family":"inherit",display:"inline"},JS:{text:d.data.used}},textsmallfontremain:{CSS:{"font-size":"0.7em","line-height":"2.5em","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","min-width":"10%","max-width":"100%","text-align":"left","font-family":"inherit",display:"inline"},JS:{text:d.data.remain}},textsmallfontname:{CSS:{"font-size":"0.7em","line-height":"2.5em","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","min-width":"10%","max-width":"100%","text-align":"left","font-family":"inherit",display:"inline"},JS:{text:d.data.name}},textsmallfontunit:{CSS:{"font-size":"0.7em","line-height":"2.5em","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","min-width":"10%","max-width":"100%","text-align":"left","font-family":"inherit",display:"inline"},JS:{text:d.data.unit}},textsmallfonttotal:{CSS:{"font-size":"0.7em","line-height":"2.5em","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","min-width":"10%","max-width":"100%","text-align":"left","font-family":"inherit",display:"inline"},JS:{text:d.data.total}},textsmallfontAvailable:{CSS:{"font-size":"0.7em","line-height":"2.5em","font-family":"inherit",display:"inline"},JS:{text:"Available:"}},textsmallfontTotal:{CSS:{"font-size":"0.7em","line-height":"2.5em","font-family":"inherit",display:"inline"},JS:{text:"Total:",}},}};d.extendDeep=function g(h){angular.forEach(arguments,function(i){if(i!==h){angular.forEach(i,function(k,j){if(h[j]&&h[j].constructor&&h[j].constructor===Object){g(h[j],k)}else{h[j]=k}})}});return h};d.extendComponentData=function(h){d.compData=a.extendDeep(d.compData,h)};d.init=function(){f.registerComponentInstance(c.attr("cid"),d);var i=f.getInitProperties(b.cid)||{},l=i.JS||{},j=i.CSS||{},k=a.String2JSON(b.jsdata),h=a.String2JSON(b.cssdata);d.jsProp=a.extendDeep(l,k);d.cssProp=a.extendDeep(j,h);d.title=d.jsProp.title;d.item1=d.jsProp.item1;d.item2=d.jsProp.item2;d.item3=d.jsProp.item3;d.percentageimageblockconfig=d.jsProp.percentageimageblockconfig;d.convertRangeConfig();d.extendComponentData(f.getInitProperties(d.cid))};d.applyElementCss=function(){c.css(d.cssProp);d.applyIconStyles()};d.getPercentageColor=function(){var h=undefined;for(p in d.styleSet){var i=p.split("_");if(i.length>0){if(parseInt(i[0])<=d.percent&&d.percent<=parseInt(i[1])){return d.styleSet[p]}}}return d.styleSet.defaultset};d.applyIconStyles=function(){var i=c[0].querySelector(".ui_com_progressbar_icon");var h=d.getPercentageColor();angular.element(i).css({"background-color":d.getPercentageColor().activecolor})};d.convertRangeConfig=function(){d.styleSet={};for(var h=1;h<=4;h++){d.convertSingleRangeConfig("range"+h)}d.styleSet.defaultset={activecolor:d.jsProp.defaultRange.c,activeimage:d.jsProp.defaultRange.iu}};d.convertSingleRangeConfig=function(h){var i=d.jsProp[h];if(null!=i.e&&i.e==1){d.styleSet[i.l+"_"+i.h]={activecolor:i.c,activeimage:i.iu}}}}],link:function(c,d,b,a,e){c.percent=b.percent;c.pageID=a.pageID;c.componentType="progress-bar";c.init();c.applyElementCss()}}});
uiCore.directive("notificationbar",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div {{param}}  style="display:none" class="notificationbar">	<idivholder param="compData.JS.outerholder">		<idivholder param="compData.JS.leftimageholder">			<imageholder param="compData.JS.notificationimage"></imageholder>		</idivholder>		<idivholder param="compData.JS.contentholder" ifit="{{compData.JS.fitdivminus}}" vscroll="null">			<idivholder param="compData.JS.contenttextholder">				<ihtmltext param="compData.JS.notificationtext" itext="{{compData.JS.notificationtext.JS.textdata}}"></ihtmltext>			</idivholder>		</idivholder>		<idivholder param="compData.JS.closeholder" ng-click="closeClick();$event.stopPropagation();">			<imageholder param="compData.JS.closeimage"></imageholder>		</idivholder>		<idivholder param="compData.JS.detailholder" class="fluxdisplay">			<ibutton param="compData.JS.detailbutton" ng-click="detailClick();$event.stopPropagation();" class="fluxdisplay"></ibutton>		</idivholder>	</idivholder></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{height:"2.5em",right:"0",position:"fixed","z-index":"2147483646",background:'url("'+top.tlbs.templatePath+'/images/content_bg_1.png") repeat scroll 0 0',"background-size":"contain","box-shadow":"2px 2px 5px #777","-moz-box-shadow":"2px 2px 5px #777","-webkit-box-shadow":"2px 2px 5px #777","font-style":"normal","font-family":"Microsoft Yahei","font-weight":"normal","text-shadow":"none",overflow:"hidden",display:"block",},JS:{clickable:false,fitdivminus:"abcd",autoclosetimeout:200,animation:false,messagemapping:"",detaileventdata:"",packagedata:"packagelist",stateconfig:{state:1,state0:{},state1:{},state2:{},state3:{}},outerholder:{CSS:{height:"100%",width:"100%",overflow:"hidden",position:"absolute"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},leftimageholder:{CSS:{height:"100%","float":"left",cssFloat:"left",overflow:"hidden"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},contentholder:{CSS:{height:"100%","float":"left",cssFloat:"left",overflow:"hidden"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},contenttextholder:{CSS:{height:"100%",width:"100%",display:"table"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},closeholder:{CSS:{height:"100%",width:"3em","float":"right",cssFloat:"right",overflow:"hidden"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},detailholder:{CSS:{height:"100%","float":"right",cssFloat:"right",overflow:"hidden","align-items":"center","-webkit-box-align":"center","justify-content":"center"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},notificationimage:{CSS:{width:"100%",height:"100%",position:"relative","text-align":"center","background-repeat":"no-repeat","background-position":"center"},JS:{clickable:false,stateconfig:{state:0,state0:{"background-image":'url("'+top.tlbs.templatePath+'/images/app1.png")'},state1:{"background-image":'url("'+top.tlbs.templatePath+'/images/app2.png")'},state2:{},state3:{}}}},closeimage:{CSS:{width:"100%",height:"100%",position:"relative","text-align":"center","background-repeat":"no-repeat","background-position":"center"},JS:{clickable:false,stateconfig:{state:0,state0:{"background-image":'url("'+top.tlbs.templatePath+'/images/close_1.png")'},state1:{"background-image":'url("'+top.tlbs.templatePath+'/images/close_1.png")'}}}},notificationtext:{CSS:{"font-size":"0.55em",display:"block","font-family":"Microsoft Yahei",color:"#000000",height:"100%","text-align":"left"},JS:{textdata:"Welcome To Simple Toolbar.!",clickable:false,stateconfig:{state:0,state0:{},state1:{}}}},detailbutton:{CSS:{height:"40%",width:"70%","background-color":"#8B0000","border-radius":".1em","text-align":"center",overflow:"hidden",padding:"0.2em","word-break":"break-all","line-height":"1.3em",color:"#fff","align-items":"center","-webkit-box-align":"center","justify-content":"center",margin:"0 auto"},JS:{buttontext:"Detail",clickable:false,stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}},buttontextstyle:{CSS:{"font-size":"0.8em"},JS:{}}}}}};g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i)};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));if(null!=g.compData.JS.autoclosetimeout&&g.compData.JS.autoclosetimeout>0){g.autoHide(g.compData.JS.autoclosetimeout);g.pcbarAutoHide(g.compData.JS.autoclosetimeout)}g.applyStyle()};g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.changeState=function(j,i){if(null!=j&&null!=j.cstate){if(g.compData.JS.stateconfig.state!=j.cstate){g.compData.JS.stateconfig.state=j.cstate;g.compData.JS.notificationimage.JS.stateconfig.state=j.cstate;g.compData.JS.leftimageholder.JS.stateconfig.state=j.cstate;g.compData.JS.detailholder.JS.stateconfig.state=j.cstate;g.$broadcast("stateChange");g.applyStyle();g.$evalAsync(function(){if(null!=i){i.resolve()}})}else{if(null!=i){i.resolve()}}}};g.updateMessage=function(j,i){if(j&&g.compData.JS.messagemapping){var k=d.transfer(j||{},g.compData.JS.messagemapping);g.compData.JS.notificationtext.JS.textdata=k}if(null!=i){i.resolve()}};g.show=function(j,i){g.compData.JS.detaileventdata={};if(j.packagelist&&j.packagelist[0]&&j.packagelist[0].list[0]){g.compData.JS.detaileventdata=j.packagelist[0].list[0]}g.compData.JS.detaileventdata.pageid=j.pageid;g.compData.JS.detaileventdata.state=j.state;g.compData.JS.detaileventdata.appname=j.appname;if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="100%"){g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="100%";if(null!=g.compData.JS.autoclosetimeout&&g.compData.JS.autoclosetimeout>0){g.autoHide(g.compData.JS.autoclosetimeout)}g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}if(null!=g.compData.JS.packagedata){if(null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata]&&null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata][0]){g.compData.JS.detaileventdata=d.extendDeep(g.compData.JS.detaileventdata,g.compData.JS.detaileventdata[g.compData.JS.packagedata][0])}}g.applyStyle()};g.hide=function(j,i){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="0%"){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]&&null!=i){i.resolve();return}g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="0%";g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}g.applyStyle()};g.pcbarshow=function(j,i){g.compData.JS.detaileventdata={};if(j.packagelist&&j.packagelist[0]&&j.packagelist[0].list[0]){g.compData.JS.detaileventdata=j.packagelist[0].list[0]}g.compData.JS.detaileventdata.pageid=j.pageid;g.compData.JS.detaileventdata.state=j.state;g.compData.JS.detaileventdata.appname=j.appname;if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="60%"){g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="60%";g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["display"]="block";if(null!=g.compData.JS.autoclosetimeout&&g.compData.JS.autoclosetimeout>0){g.pcbarAutoHide(g.compData.JS.autoclosetimeout)}g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}if(null!=g.compData.JS.packagedata){if(null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata]&&null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata][0]){g.compData.JS.detaileventdata=d.extendDeep(g.compData.JS.detaileventdata,g.compData.JS.detaileventdata[g.compData.JS.packagedata][0])}}g.applyStyle()};g.pcbarhide=function(j,i){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="0%"){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]&&null!=i){i.resolve();return}g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="0%";g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["display"]="none";g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}g.applyStyle()};g.iresize=function(j,i){g.compData.JS.fitdivminus="bnBar";g.$evalAsync(function(){if(null!=i){i.resolve()}})};g.updateButtonText=function(j,i){if(null!=j&&null!=j.buttontext){g.compData.JS.detailbutton.JS.buttontext=j.buttontext}g.$evalAsync(function(){if(null!=i){i.resolve()}})};g.eventMap.changeState=g.changeState;g.eventMap.updateMessage=g.updateMessage;g.eventMap.show=g.show;g.eventMap.pcbarshow=g.pcbarshow;g.eventMap.hide=g.hide;g.eventMap.pcbarhide=g.pcbarhide;g.eventMap.iresize=g.iresize;g.eventMap.updateButtonText=g.updateButtonText;g.$on(g.cid+"_handleEvent",function(l,j,k,i){g.eventMap[j](k,i)});g.closeClick=function(){h.fireEvent(g.cid,"closeclick",g.compData.JS.detaileventdata);var i={cdrType:"uitracingcdr",enable:true,storeData:false};g.compData.JS.cdrData={};g.compData.JS.cdrData={pageId:g.pageID,componentId:"notificationbar.close",iseComp:"0",};d.cdrService(i,g.compData.JS.cdrData);top.tlbs.notificationCdrData=null};g.detailClick=function(){h.fireEvent(g.cid,"detailclick",g.compData.JS.detaileventdata);if(null!=g.compData.JS.detaileventdata.appid){var i=h.getComponentScope(g.compData.JS.detaileventdata.appid);if(null!=i){i.changeState({cstate:1},null)}}var j={cdrType:"uitracingcdr",enable:true,storeData:true};g.compData.JS.cdrData={};g.compData.JS.cdrData={pageId:g.pageID,componentId:"notificationbar.detail",iseComp:"1",};d.cdrService(j,g.compData.JS.cdrData)};g.autoHide=function(i){b(function(){if(g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]=="100%"){h.fireEvent(g.cid,"autoclose",g.compData.JS.detaileventdata)}g.applyStyle();top.tlbs.notificationCdrData=null},i*1000)};g.pcbarAutoHide=function(i){b(function(){if(g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]=="60%"){h.fireEvent(g.cid,"autoclose",g.compData.JS.detaileventdata);g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["display"]="none"}g.applyStyle();top.tlbs.notificationCdrData=null},i*1000)};g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="notificationbar";g.init()}}}]);
﻿uiCore.directive('buoy', [function () {
		return {
			restrict : 'AE',
			replace : true,
			require : '^pid',
			template : '<div style="position: fixed; bottom: 3px; right: 3px; z-index: 2047483646 !important;" class="buoyConfir"><div class="logoContainer" ng-style="compData.JS.logoContainer" ng-show="ishowLogo"><div class="singlelogo" ng-style="compData.JS.singlelogo" ng-click="logoclick()"></div></div><div class="buoyContainer" ng-style="compData.JS.buoyContainer" ng-class="{trafficflip: isFlip}" ng-show="ishowBuoy" ng-click="logoclick()"><div class="abPos trafficfontface" ng-style="compData.JS.trafficfontface"><div class="abPos fontfaceBg" ng-style="compData.JS.fontfaceBg"></div><div ng-style="compData.JS.logo"></div><div class="abPos" style="overflow:hidden; border-radius:50%;" ng-show="ishowWaterlines"><canvas></canvas><div class="fontText" ng-style="compData.JS.fontText" ng-show="!isLack"><div class="fontTitle" ng-style="compData.JS.fontTitleStyle" ng-bind="compData.JS.fontTitle"></div><div class="fontVal" ng-style="compData.JS.fontVal" ng-bind="consumedVal"></div></div></div></div><div class="abPos trafficbackface" ng-style="compData.JS.trafficbackface" ng-show="ishowBackface"><div class="backfaceBg" ng-style="compData.JS.backfaceBg"></div><div class="backText" ng-style="compData.JS.backText"><div class="backTitle" ng-style="compData.JS.backTitle" ng-bind="backTitle"></div><div class="backVal" ng-style="compData.JS.backVal" ng-bind="consumedVal"></div></div></div></div><div class="clickContainer" ng-style="compData.JS.clickContainer1" ng-show="ishowBtn1" ng-click="logoclick()"><div class="btntextContainer" ng-style="compData.JS.btntextContainer"><div class="btnupText" ng-style="compData.JS.btnupTextStyle" ng-bind="compData.JS.btnupText"></div><div class="btndownText" ng-style="compData.JS.btndownTextStyle" ng-bind="compData.JS.btndownText"></div></div></div><div class="clickContainer1" ng-style="compData.JS.clickContainer2" ng-show="ishowBtn2" ng-click="logoclick()"><span id="blinkText" class="btnText" ng-style="compData.JS.btnText2Style" ng-bind="compData.JS.btnText2"></span></div><div class="clickContainer" ng-style="compData.JS.clickContainer3" ng-show="ishowBtn3" ng-click="logoclick()"><span class="btnText" ng-style="compData.JS.btnText3Style" ng-bind="compData.JS.btnText3"></span></div><div ng-show="ishowSpecial"><div class="specialContainer" ng-style="compData.JS.specialContainer" ><div class="leftTraffic" ng-style="compData.JS.leftTraffic"><div class="leftText" ng-bind="compData.JS.leftText" ng-style="compData.JS.leftTextStyle"></div><div class="leftBannerContainer" ng-style="compData.JS.leftBannerContainer"><div class="leftBanner" ng-style="compData.JS.leftBanner"></div></div></div></div><div class="rightBuoy" ng-style="compData.JS.rightBuoy" ng-click="logoclick()"><div ng-style="compData.JS.specialLogo"></div><div class="rightBuoyText" ng-style="compData.JS.rightBuoyText"><span ng-bind="compData.JS.btnText4" ng-style="compData.JS.btnText4Style"></span></div></div></div></div>',
			scope : {},
			controller : ["$scope", "$element", "$attrs", 'coreService', 'coreUtils', 'Const', '$timeout', '$interval', function ($scope, $element, $attrs, coreService, coreUtils, Const, $timeout, $interval) {
					$scope.cid = $attrs.cid;
					$scope.eventMap = [];
					$scope.compData = {
						CSS: {},
						JS: {
							logoContainer: {},
							buoyContainer: {},
							trafficfontface: {},
							fontfaceBg: {},
							fontText: {},
							fontTitleStyle: {},
							fontVal: {},
							fontText40: {},
							fontTitle40: {},
							fontVal40: {},
							trafficbackface: {},
							backfaceBg: {},
							backText: {},
							backTitle: {},
							backVal: {},
							clickContainer1: {},
							btntextContainer: {},
							btnupTextStyle: {},
							btndownTextStyle: {},
							clickContainer2: {},
							btnText2Style: {},
							clickContainer3: {},
							leftTraffic: {},
							leftBannerContainer: {},
							rightBuoy: {},
							rightBuoyText: {},
							btnText3Style: {
								"font-weight": "initial",
								"font-size": "0.5em"
							},
							btnText4Style: {
								"font-weight": "bold",
								"font-size": "0.4em"
							},
							leftTextStyle: {},
							
							fontTitle: 'MBs consumed',
							btnupText: 'NEW!',
							btndownText: 'Click Here',
							btnText2: 'Click Here',
							btnText3: 'Click Here',
							btnText4: 'Click Here',
							
							singlelogo: {},
				            logo: {},
							waterline: {
								boHeight: 5,
								lines: []
							},
							blink: {
								footstep: 1,
								intervalTime: 6,
								max: 100,
								min: 20
							},
							jump: {
								height: 50,
								position: 0,
								sec: 1
							},
							flipInterval: 2,
							stateconfig: {
								state: '0',
								state0: {
									'opacity': '1'
								},
								state1: {
									'opacity': '0.5'
								}
							},
							delayTime: '10',
							criticalPoint: '25',
							belowColor: '#b5b5b5',
							aboveColor: '#83aa40',
							
							styleconfig: {
								state: '0',
								state0: {
									ishowLogo: true,
									ishowBtn1: true,
									canBlink: true,
									bottomDistance: '0'
								},
								state1: {
									ishowBuoy: true,
									ishowBtn3: true,
									canJump: true,
									bottomDistance: '0'
								},
								state2: {
									ishowBuoy: true,
									ishowBackface: true,
									ishowBtn2: true,
									canFlip: false,
									bottomDistance: '0'
								},
								state3: {
									ishowBuoy: true,
									ishowWaterlines: true,
									ishowBtn2: true,
									canBlink: true,
									bottomDistance: '0'
								},
								state4: {
									ishowLogo: true,
									ishowBtn2: true,
									canBlink: true,
									canDrag: true,
									bottomDistance: '0',
									dragBottom: '-2.8em',
									dragRight: '-1.8em'
								},
								state5: {
									ishowSpecial: true,
									canBlink: true
								}
							}
						}
					};
					var ele = $element[0];
					var ae = angular.element;
					var jsConfig = $scope.compData.JS;
					
					var $buoyEle = ae(ele.querySelector('.buoyContainer'));
					var $singleLogoEle = ae(ele.querySelector('.logoContainer'));
					var $blinkEle = ae(ele.querySelector('.btnupText'));
					var $blinkTxt = ae(ele.querySelector('#blinkText'));
					var $rightBuoyText = ae(ele.querySelector('.rightBuoyText'));
					var specialContainer = ae(ele.querySelector('.specialContainer'));
					var leftBanner = ae(ele.querySelector('.leftBanner'));
					var leftBannerContainer = ae(ele.querySelector('.leftBannerContainer'));
					var leftText = ae(ele.querySelector('.leftText'));
					var backText = ae(ele.querySelector('.backText'));
					var backTitle = ae(ele.querySelector('.backTitle'));
					var backVal = ae(ele.querySelector('.backVal'));
					
					
					//跳跃
					$scope.createJumpAnmiateFrame = function () {
						var position = jsConfig.jump.position || 0;
						var height = jsConfig.jump.height || 30;
						var sec = jsConfig.jump.sec || 1;
						
							
						var jumpanimation = {
							'-moz-animation': 'jump_animation ' + sec + 's linear infinite',
							'-webkit-animation': 'jump_animation ' + sec + 's linear infinite',
							'-o-animation': 'jump_animation ' + sec + 's linear infinite',
							'animation': 'jump_animation ' + sec + 's linear infinite'
						};
						$buoyEle.css(jumpanimation);
						
					}
					
					//波浪线
					$scope.excutedSin = false;
					$scope.sin = function() {
						if ($scope.percent == null || $scope.excutedSin || !$scope.ishowWaterlines) return;
						
						var c = ae(ele.querySelector('canvas'))[0];
						var ctx = c.getContext('2d');
						c.width = c.parentNode.offsetWidth;
						c.height = c.parentNode.offsetHeight;
						
						var boHeight = jsConfig.waterline.boHeight || 5;
						var posHeight = c.height * (1 - $scope.percent / 100);
						var step = 0;
						var lines = jsConfig.waterline.lines.length ? jsConfig.waterline.lines : ['rgba(110, 167, 66, 0.9)'];
						
						function loop() {
							ctx.clearRect(0, 0, c.width, c.height);
							step++;
							ctx.fillStyle = lines[0];
							
							var angle = step * Math.PI / 180;
							var deltaHeight = Math.sin(angle) * boHeight;
							var deltaHeightRight = Math.cos(angle) * boHeight;
							
							ctx.beginPath();
							ctx.moveTo(0, posHeight + deltaHeight);
							ctx.bezierCurveTo(c.width / 2, posHeight + deltaHeight - boHeight, c.width / 2, posHeight + deltaHeightRight - boHeight, c.width, posHeight + deltaHeightRight);
							ctx.lineTo(c.width, c.height);
							ctx.lineTo(0, c.height);
							ctx.lineTo(0, posHeight + deltaHeight);
							ctx.closePath();
							ctx.fill();
						}
						if (c.width && c.height && !$scope.excutedSin) {
							$scope.excutedSin = !$scope.excutedSin;
							$interval(loop, 1000 / 180);
						}
					};
					//闪烁
					$scope.blink = function(ele) {
						var footstep = +jsConfig.blink.footstep || 1;
						var intervalTime = jsConfig.blink.intervalTime || 8;
						var direction;
						var opacityValue = 100;
						var max = jsConfig.blink.max || 100;
						var min = jsConfig.blink.min || 20;
						
						function doChange() {
							if(ele) {
								ele.css('opacity', opacityValue / 100);
							}
							if (opacityValue >= max) {
								direction = -footstep;
							}
							if (opacityValue <= min) {
								direction = footstep;
							}
							opacityValue += direction;
						}
						return setInterval(doChange, intervalTime);
					};
					//handle response
					$scope.excuted = false;
					$scope.isLack = false;
					$scope.consumedVal = 0;
					$scope.getTraffic = function (data) {
						if ($scope.excuted) return;
						
						$scope.percent = null;
						$scope.remain = null;
						$scope.unit = null;
						$scope.balance = null;
						
						var order = 'Connect#Rate plan#RP Units#RP Bonus#Balance';
						var details = [];
						var balance = null;
						if (data.respparam) {
							order = data.respparam.order || 'Connect#Rate plan#RP Units#RP Bonus#Balance';
							details = data.respparam.meters || [];
							balance = data.respparam.balance;
						}
						
						var state = jsConfig.styleconfig.state;
						var orders = order.split('#');
//						var relations = {
//							'Rate plan': 'mainBundle',
//							'Connect': 'connectBundle'
//						};
						if (orders.length && details.length) {
							for (var i = 0, olen = orders.length; i < olen; i++) {
								if (state == '5' && $scope.percent >= 99) {
									$scope.percent = null;
								}
								
								if (($scope.percent != null && $scope.remain != null) || $scope.balance) break;
								for (var j = 0, dlen = details.length; j < dlen; j++) {
									if (state == '2' || state == '5') {
										if (orders[i] == 'Balance' && balance != null && balance != 'N/A') {
											$scope.balance = balance;
											break;
										}
									}
									if (orders[i] == details[j].name) {
										$scope.percent = details[j].percent;
										$scope.remain = details[j].remain;
										$scope.unit = details[j].unit;
										break;
									}
								}
							}
						}
						
						if ($scope.percent != null && jsConfig.criticalPoint > 0) {
							if ($scope.percent < jsConfig.criticalPoint) {
								$scope.isLack = true;
							}else {
								$scope.isLack = false;
							}
							if ($scope.percent > 100) {
								$scope.percent = 100;
							}
						}else {
							$scope.isLack = true;
						}
						
						if (state == '2') {
							$scope.backTitle = $scope.unit + ' consumed';
							if ($scope.percent != null) {
								backTitle.css('display', 'block');
								backText.css('top', '-2.3em');
								$scope.consumedVal = $scope.percent + '%';
								backVal.css('font-size', '0.8em');
							}else if ($scope.balance) {
								backTitle.css('display', 'none');
								backText.css('top', '-1.8em');
								$scope.consumedVal = $scope.balance + ' EGP Left';
								backVal.css('font-size', '0.45em');
							}else {
								backTitle.css('display', 'none');
								backText.css('top', '-1.8em');
								$scope.consumedVal = 'Check your bundle';
								backVal.css('font-size', '0.45em');
							}
						}
						
						if (state == '3' && $scope.percent != null) {
							jsConfig.fontTitle = $scope.unit + ' consumed';
							$scope.consumedVal = $scope.percent + '%';
							$scope.sin();
						}
						
						if (state == '5') {
							if ($scope.percent != null && $scope.remain != null) {
//								if ($scope.remain > 999) {
//									$scope.remain = +($scope.remain / 1024).toFixed(2);
//									jsConfig.leftText = $scope.remain + ' GBs Left';
//								}else {
//									jsConfig.leftText = $scope.remain + ' MBs Left';
//								}
								jsConfig.leftText = $scope.remain + ' ' + $scope.unit + ' Left';
								leftText.css('font-size', '0.5em');
								leftBanner.css({
									'width' : 100 - $scope.percent + '%'
								});
							}else if ($scope.balance) {
								jsConfig.leftText = $scope.balance + ' EGP Left';
								leftText.css('font-size', '0.5em');
								leftBanner.css('width', '100%');
								if (jsConfig.belowColor) {
									leftBannerContainer.css('background-color', jsConfig.belowColor);
								}
								if (jsConfig.aboveColor) {
									leftBanner.css('background-color', jsConfig.aboveColor);
								}
							}else {
								jsConfig.leftText = 'Check your bundle’s details';
								leftText.css('font-size', '0.35em');
								leftBanner.css('width', '100%');
							}
						}
						
						$scope.excuted = true;
						$element.css(jsConfig.stateconfig['state0']);
						$scope.startAutoStateChanger({'logostate': '1'});
					};
					$scope.logoclick = function() {
						if ($scope.bindtouch) return;
						if ($scope.dragflag) {
							jsConfig.stateconfig.state = 0;
							coreService.fireEvent($element.attr('cid'), ($attrs['event'] || 'click') + jsConfig.stateconfig.state);
							
							applyState();
							$scope.dragflag = false;
							$element.css({
								'bottom': '3px',
								'right': '3px'
							});
						}else {
							coreService.fireEvent($element.attr('cid'), ($attrs['event'] || 'click') + jsConfig.stateconfig.state);
						}
						
					};
					
					$scope.initFlag = function() {
						var styleconfig = jsConfig.styleconfig;
						switch(styleconfig.state) {
							case '0':
								clearInterval($scope.blinkEleInterval);
								$scope.blinkEleInterval = undefined;
								break;
							case '1':
								$buoyEle.css({
									'animation': 'initial',
									'-webkit-animation': 'initial',
									'-moz-animation': 'initial',
									'-o-animation': 'initial',
									'bottom': '0.4em'
								});
								break;
							case '2':
								clearInterval($scope.flipInterval);
								$scope.isFlip = false;
								break;
							case '3':
								clearInterval($scope.blinkTxtInterval);
								$scope.blinkTxtInterval = undefined;
								$scope.ishowWaterlines = false;
								break;
							case '4':
								break;
							case '5':
								clearInterval($scope.rightBuoyTextInterval);
								$scope.rightBuoyTextInterval = undefined;
						}
						$blinkEle.css('opacity','1');
						$blinkTxt.css('opacity','1');
						$rightBuoyText.css('opacity','1');
					};
					$scope.changeState = function(stateObject) {
						if (stateObject && stateObject.logostate) {
							if (isNaN(stateObject.logostate)) return;
							
							var styleconfig = jsConfig.styleconfig;
							if (stateObject.logostate == '0') {
								applyState();
							}
							if (stateObject.logostate == '1') {
								$scope.initFlag();
							}
							jsConfig.stateconfig.state = stateObject.logostate;
							$element.css(jsConfig.stateconfig['state' + jsConfig.stateconfig.state])
						}
					};
					$scope.eventMap['changeState'] = $scope.changeState;

					$scope.timerInterval = null;
					$scope.startAutoStateChanger = function (stateObject, deferred) {
						if ($scope.timerInterval) {
							$timeout.cancel($scope.timerInterval);
						}
						if (stateObject == null) return;
						$scope.timerInterval = $timeout(function () {
							$scope.changeState(stateObject);
						}, jsConfig.delayTime * 1000);
						if (null != deferred) {
							deferred.resolve();
						}
					};
					$scope.eventMap['startAutoStateChanger'] = $scope.startAutoStateChanger;
					
					function applyState(stateF) {
						var currentState = {};
						if(stateF != "hide"){
							currentState = jsConfig.styleconfig['state' + jsConfig.styleconfig.state];
						}else{
							currentState = jsConfig.styleconfig['state' + stateF];
						}
						if (currentState) {
							$scope.ishowLogo = currentState.ishowLogo || false;
							$scope.ishowBuoy = currentState.ishowBuoy || false;
							$scope.ishowSpecial = currentState.ishowSpecial || false;
							$scope.ishowBackface = currentState.ishowBackface || false;
							$scope.ishowWaterlines = currentState.ishowWaterlines || false;
							$scope.ishowBtn1 = currentState.ishowBtn1 || false;
							$scope.ishowBtn2 = currentState.ishowBtn2 || false;
							$scope.ishowBtn3 = currentState.ishowBtn3 || false;
							$scope.canBlink = currentState.canBlink || false;
							$scope.canJump = currentState.canJump || false;
							$scope.canFlip = currentState.canFlip || false;
							$scope.canDrag = currentState.canDrag || false;
							$scope.bottomDistance = currentState.bottomDistance;
							
							$scope.dragBottom = currentState.dragBottom;
							$scope.dragRight = currentState.dragRight;
							
						}
						if ($scope.bottomDistance) {
							$buoyEle.css('bottom', $scope.bottomDistance);
							$singleLogoEle.css('bottom', $scope.bottomDistance);
						}
						if ($scope.ishowWaterlines) {
							$timeout($scope.sin);
						}
						if ($scope.canBlink) {
							if (!$scope.blinkEleInterval) {
								$scope.blinkEleInterval = $scope.blink($blinkEle);
							}
							if (!$scope.blinkTxtInterval) {
								$scope.blinkTxtInterval = $scope.blink($blinkTxt);
							}
							if (!$scope.rightBuoyTextInterval) {
								$scope.rightBuoyTextInterval = $scope.blink($rightBuoyText);
							}
						}
						if ($scope.canFlip) {
							$scope.isFlip = false;
							$scope.flipInterval = setInterval(function() {
								$scope.isFlip = !$scope.isFlip;
							}, jsConfig.flipInterval * 1000 || 2000);
						}
						if ($scope.canJump) {
							$scope.createJumpAnmiateFrame();
						}
						
						if (jsConfig.styleconfig.state == '5') {
							$timeout(function() {
								specialContainer.css({
									'width': '3.3em'
								})
							}, 3000);
						}
					};
					//拖动
					$scope.drag = function () {
						var _touchstart = Const.touchEvent.start;
						var _touchmove = Const.touchEvent.move;
						var _touchend = Const.touchEvent.end;
						var xdistance;
						var ydistance;
						var moveflag = false;
						$scope.dragflag = false;
						$element.bind(_touchstart, function (e) {
							$scope.bindtouch = true;
							e.stopPropagation();
							e.preventDefault();
							var _lastYPos = e.touches ? e.touches[0].clientY : e.clientY;
							var _lastXPos = e.touches ? e.touches[0].clientX : e.clientX;
							var touch = function (e) {
								e.stopPropagation();
								e.preventDefault();
								var _currentYPos = e.touches ? e.touches[0].clientY : e.clientY;
								var _currentXPos = e.touches ? e.touches[0].clientX : e.clientX;
								ydistance = _currentYPos - _lastYPos;
								xdistance = _currentXPos - _lastXPos;
								if (Math.abs(ydistance) > 3 || Math.abs(xdistance) > 3) {
									moveflag = true;
								}
							};
							var endTouch = function (e) {
								try {
									e.stopPropagation();
									e.preventDefault();
									if (!$scope.dragflag && moveflag && xdistance > 0 && ydistance > 0) {
										$scope.startAutoStateChanger();
										$scope.initFlag();
										applyState("hide");
										$scope.dragflag = true;
										$element.css({
											'bottom': $scope.dragBottom,
											'right': $scope.dragRight,
											'opacity': '1'
										});
									}else if ($scope.dragflag && moveflag && (xdistance < 0 || ydistance < 0)) {
										jsConfig.stateconfig.state = 0;
										applyState();
										$scope.startAutoStateChanger({'logostate': '1'});
										$scope.dragflag = false;
										$element.css({
											'bottom': '3px',
											'right': '3px'
										});
									}else if (!moveflag && $scope.dragflag) {
										jsConfig.stateconfig.state = 0;
										coreService.fireEvent($element.attr('cid'), ($attrs['event'] || 'click') + jsConfig.stateconfig.state);
										
										applyState();
										$scope.dragflag = false;
										$element.css({
											'bottom': '3px',
											'right': '3px'
										});
									}else if (!moveflag && !$scope.dragflag) {
										coreService.fireEvent($element.attr('cid'), ($attrs['event'] || 'click') + jsConfig.stateconfig.state);
									}
								}
								finally {
									moveflag = false;
									top.document.removeEventListener(_touchmove, touch, false);
									top.document.removeEventListener(_touchend, endTouch, false);
								}
							};
							top.document.addEventListener(_touchmove, touch, false);
							top.document.addEventListener(_touchend, endTouch, false);
						});
					};
					
					$scope.initBuoy = function () {
						var state = jsConfig.styleconfig.state;
						if (state == '2') {
							backTitle.css('display', 'none');
							backText.css('top', '-1.8em');
							$scope.consumedVal = 'Check your bundle';
							backVal.css('font-size', '0.45em');
						}
						
						if (state == '3') {
							$scope.isLack = true;
						}
						
						if (state == '5') {
//							if (jsConfig.belowColor) {
//								leftBannerContainer.css('background-color', jsConfig.belowColor);
//							}
//							if (jsConfig.aboveColor) {
//								leftBanner.css('background-color', jsConfig.aboveColor);
//							}
							
							jsConfig.leftText = 'Check your bundle’s details';
							leftText.css('font-size', '0.35em');
							leftBanner.css('width', '100%');
							specialContainer.css('transition', '2s');
						}
						applyState();
					};
					
					$scope.init = function () {
						coreService.registerComponentInstance($element.attr('cid'), $scope);
						$scope.compData = coreUtils.extendDeep($scope.compData, coreService.getInitProperties($scope.cid));
						top.tlbs.buoystate = jsConfig.styleconfig.state || -1;
						if(top.tlbs.watermark == '0'){
							$element.css('display','none');
						}
						$scope.drag();
						
						var cdrConfig = {
                            'cdrType': 'uidisplaycdr',
                            'enable': true,
                            'storeData': false
                        };
                        var cdrDataOpen = {
                            'pageId': $scope.pageID,
                            'displayType': 1,
                            'displayResult': 0
                        };
                        coreUtils.cdrService(cdrConfig, cdrDataOpen);
					};
					
					$scope.hide = function () {
						angular.element($element[0]).css({
							"display": "none",
						});
					};
					$scope.show = function(){
						angular.element($element[0]).css({
							"display": "block",
						});
					};
					$scope.eventMap['getTraffic'] = $scope.getTraffic;
					$scope.eventMap['drawWaterline'] = $scope.sin;
					$scope.eventMap['initBuoy'] = $scope.initBuoy;
					$scope.eventMap['show'] = $scope.show;
					$scope.eventMap['hide'] = $scope.hide;
					$scope.$on($attrs['cid'] + '_handleEvent', function (event, cevent, args, deferred) {
						if ($scope.eventMap[cevent]) {
							$scope.eventMap[cevent](args);
							if (null != deferred) {
								deferred.resolve();
							}
						}
					});
				}
			],
			link : function ($scope, $element, $attrs, ctl) {
				$scope.pageID = ctl.pageID;
				$scope.componentType = 'buoy';
				$scope.init();
			}
		}
	}
]);
uiCore.directive('ititle', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            require: '^pid',
            scope: {
                param: '=param'
            },
            template: '<div {{param}}><imageholder cid="titleimage" ng-show="compData.JS.titleimageconfigflag" param="compData.JS.titleimageconfig"></imageholder><irichtext cid="titletext" param="compData.JS.titletextconfig"></irichtext></div>',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                'coreService',
                'coreUtils',
                function($scope, $element, $attrs, coreService, coreUtils) {
                    $scope.cid = $attrs.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {},
                        'JS': {
                            'clickable': false,
                            'stateconfig': {
                                'state': 0,
                                'state0': {},
                                'state1': {}
                            },
                            'titletextconfig': {
                                'CSS': {
                                    'text-align': 'center'
                                },
                                'JS': {
                                    'clickable': false,
                                    'stateconfig': {
                                        'state': 0,
                                        'state0': {},
                                        'state1': {}
                                    }
                                }
                            }
                        }
                    };
                    $scope.setEvents = function() {
                        if ($scope.compData.JS.clickable) {
                            $element.bind('click', function() {
                                coreService.fireEvent($scope.cid, 'click_' + $scope.compData.JS.stateconfig.state);
                            });
                        }
                    };
                    $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                        if ($scope.eventMap[cevent]) {
                            $scope.eventMap[cevent](args);
                            if (null != deferred) {
                                deferred.resolve();
                            }
                        }
                    });
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.init = function() {
                        coreService.registerComponentInstance($element.attr('cid'), $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        $scope.applyStyle();
                    };
                    $scope.applyStyle = function() {
                        if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
                            coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
                        }
                        $element.css($scope.compData.CSS);
                    };
                    $scope.$watch($scope.param, function(newValue) {
                        if ($scope.param) {
                            $scope.compData = $scope.param;
                            $scope.applyStyle();
                        }
                    });
                    $scope.updateTitleText = function(titleTextData, deferred) {
                    	if(top.tlbs.languageID == "ar" && titleTextData.stitle_ar){
                        	$scope.compData.JS.titletextconfig.JS.textdata = titleTextData.stitle_ar;
                        }else{
                        	$scope.compData.JS.titletextconfig.JS.textdata = titleTextData.stitle;
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    
                    $scope.judgeResult = function(data,deferred) {
                    	if(data.respparam){
                    		if(data.respparam.success){
                    			coreService.fireEvent($attrs['cid'], "success", data);
                    		}else{
                    			coreService.fireEvent($attrs['cid'], "error", data);
                    		}
                    	}
                    	
                    	 if (null != deferred) {
                             deferred.resolve();
                         }
                    }
                    
                    $scope.eventMap['judgeResult'] = $scope.judgeResult;
                    $scope.eventMap['updateTitleText'] = $scope.updateTitleText;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                }
            ],
            link: function($scope, $element, $attrs, ctl) {
                $scope.pageID = ctl.pageID;
                $scope.componentType = 'ititle';
                $scope.init();
            }
        };
    }
]);
uiCore.directive('verticalContainer', [
		'$timeout',
		function ($timeout) {
			return {
				restrict : 'E',
				replace : true,
				transclude : true,
				require : '^pid',
				scope : {},
				template : '<div class="ui-com-verticalContainer" ng-transclude></div>',
				controller : [
					'$scope',
					'$element',
					'$attrs',
					'coreService',
					'coreUtils',
					function ($scope, $element, $attrs, coreService, coreUtils) {
						$scope.cid = $attrs.cid;
						$scope.eventMap = {};
						$scope.compData = {};
						$scope.isPopupActive = false;
						$element.bind('click', function (e) {
							//$scope.expand();
							e.stopPropagation();
							e.preventDefault();
						});
						$scope.$on($scope.cid + '_handleEvent', function (eventObj, event, args, deferred) {
							$scope.eventMap[event](eventObj, args, deferred);
							if (null != deferred && $scope.currentStyle.isAnimation == 'false') {
								deferred.resolve();
							}
						});
						$scope.extendDeep = function extendDeep(dst) {
							angular.forEach(arguments, function (obj) {
								if (obj !== dst) {
									angular.forEach(obj, function (value, key) {
										if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
											extendDeep(dst[key], value);
										} else {
											dst[key] = value;
										}
									});
								}
							});
							return dst;
						};
						$scope.judgepage = function (event, args, deferred) {
							var resp = args.respparam;
							var cid = $element.attr('cid');
							if(resp && resp.successcode == "0"){
								//显示的号码前加0
								if(resp.phoneNumber){
									resp.phoneNumber = "0" + resp.phoneNumber;
								}
								if (!resp.requestTime) {
									resp.requestTime = '- -';
									coreService.fireEvent(cid, "hideUpdateTime", args);
								}else {
									coreService.fireEvent(cid, "showUpdateTime", args);
								}
								//判断是否为Emerald类别里的parent类型
								if(resp.isParent && resp.isParent == "TRUE") {
									coreService.fireEvent(cid, "showParent",args);
								}else if(resp.isParent && resp.isParent == "FALSE"){
									coreService.fireEvent(cid, "hideParent",args);
								}else{
									coreService.fireEvent(cid, "hideEmerald",args);
								}
								//判断报文里的summaryDetail是否存在且有值
								if((resp.summaryDetail && resp.summaryDetail.length) || (resp.meters && resp.meters.length)) {
									$element.css("display","block");
									coreService.fireEvent(cid, "usagesummarypage",args);
								}else {
//									$element.css("display","none");
									coreService.fireEvent(cid, "nosummarydetail",args);
								}
								//balance是否有值，没值的话将按钮置灰
								if(!resp.balance || resp.balance <=0){
									coreService.fireEvent(cid, "graybtn",args);
								}
								
								ckeckBill(args);
								coreService.fireEvent(cid, "showpage",args);
							}else if(resp && resp.successcode == "1"){
								coreService.fireEvent(cid, "serrorbusy",args);
							}else{
								coreService.fireEvent(cid, "errorbusy",args);
							}
						};
						
						var ckeckBill = function(args){
							if(args.respparam.usertype && args.respparam.usertype == "Postpaid" && (!args.respparam.balance || isNaN(args.respparam.balance))){
								coreService.fireEvent($element.attr('cid'),"hideunit");
							}else{
								coreService.fireEvent($element.attr('cid'),"showunit");
							}
						}
						//获取报文中，用户的类型
						$scope.checkusertype = function(event, args, deferred) {
							if(args.respparam){
								if(args.respparam.usertype){
									var usertype = args.respparam.usertype;
									if(usertype != "Prepaid" && usertype != "Postpaid"){
										usertype = "Prepaid";
									}
									var type = {
											"usertype" : usertype
											};
									coreService.fireEvent($element.attr('cid'), "settype",type);
								}
							}
						};
						
						$scope.eventMap['checkusertype'] = $scope.checkusertype;
						$scope.eventMap['judgepage'] = $scope.judgepage;
						$scope.init = function () {
							coreService.registerComponentInstance($element.attr('cid'), $scope);
							var properties = coreService.getInitProperties($attrs['cid']) || {},
							jsProp = properties.JS || {},
							cssProp = properties.CSS || {},
							jsData = coreUtils.String2JSON($attrs['jsdata']),
							cssData = coreUtils.String2JSON($attrs['cssdata']);
							$scope.jsProp = coreUtils.extendDeep(jsProp, jsData);
							$scope.cssProp = coreUtils.extendDeep(cssProp, cssData);
							if ($scope.jsProp.type) {
								$scope.type = $scope.jsProp.type;
								$scope.currentStyle = $scope.jsProp[$scope.jsProp.type];
							} else {
								$scope.type = 'fixed';
								$scope.currentStyle = {
									'extendable' : 'false',
									'position' : 'relative',
									'width' : '150px',
									'height' : '100px'
								};
							}
						};
						$scope.expand = function (event, args, deferred) {
							if ($scope.jsProp.expand && $scope.jsProp.expand.height) {
								$element.css($scope.jsProp.expand);
							} else {
								$element.css('height', $scope.mainDivHeight);
							}
							if (null != deferred) {
								deferred.resolve();
								/*
								var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								$element.one(_transitionEnd, function(e) {
								e.stopPropagation();
								deferred.resolve();
								});
								 */
							}
						};
						$scope.verifyChildren = function () {
							var childrens = $element[0].children;
							var element = null;
							var position = null;
							angular.forEach(childrens, function (value, key) {
								element = angular.element(value);
								position = element.css('position');
								if (position == 'fixed' || position == 'absolute')
									element.css('position', 'relative');
							});
						};
						$scope.collapse = function (event, args, deferred) {
							$element.css('height', 0);
							if (null != deferred) {
								deferred.resolve();
								/*var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								$element.one(_transitionEnd, function(e) {
								e.stopPropagation();
								deferred.resolve();
								});*/
							}
						};
						
						$scope.updateBgColor = function (event, args, deferred) {
							$element.css('background-color', "#D6E9BB");
							if (null != deferred) {
								deferred.resolve();

							}
						};
						
						$scope.hide = function (event, args, deferred) {
							$element.css('display', "none");
							if (null != deferred) {
								deferred.resolve();

							}
						};
						$scope.display = function (event, args, deferred) {
							$element.css('display', "block");
							if ($scope.jsProp.expand && $scope.jsProp.expand.height) {
								$element.css($scope.jsProp.expand);
							} else {
								$element.css('height', $scope.mainDivHeight);
							}
							if (null != deferred) {
								deferred.resolve();

							}
						};
						$scope.collapsePopup = function (event, args, deferred) {
							if (parseInt($element.css('height')) == 0) {
								deferred.resolve();
								return false;
							}
							$element.css('height', 0);
							if (null != deferred) {
								//var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								if (top.tlbs.isTransitionSupported) {
									$element.one(top.tlbs.transitionendEvent, function (e) {
										e.stopPropagation();
										deferred.resolve();
									});
								} else {
									e.stopPropagation();
									deferred.resolve();
								}
							}
						};
						$scope.eventMap['updateBgColor'] = $scope.updateBgColor;
						$scope.eventMap['expand'] = $scope.expand;
						$scope.eventMap['collapse'] = $scope.collapse;
						$scope.eventMap['collapsepopup'] = $scope.collapsePopup;
						$scope.eventMap['hide'] = $scope.hide;
						$scope.eventMap['display'] = $scope.display;
						$scope.applyElementCss = function () {
							$element.css($scope.cssProp);
							$element.css($scope.currentStyle);
							if ($scope.currentStyle.isPopup == 'true') {
								$element.css('height', 0);
							}
						};
						/*$scope.loadChildrens = function(transcludeFn) {
						transcludeFn(function(clone, scope) {
						$element.append(clone);
						});
						};*/
						$scope.extendableComponent = function () {
							var childrens = $element[0].children;
							$scope.mainDivWidth = 0;
							$scope.mainDivHeight = 0;
							var childElementWidth = 0;
							var style = null;
							angular.forEach(childrens, function (value, key) {
								childElementWidth = 0;
								style = window.getComputedStyle(childrens[key], null);
								childElementWidth += parseInt(childrens[key].offsetWidth) + parseInt(style['marginLeft']) + parseInt(style['marginRight']);
								$scope.mainDivHeight += parseInt(childrens[key].offsetHeight) + parseInt(style['marginTop']) + parseInt(style['marginBottom']);
								if ($scope.mainDivWidth <= childElementWidth)
									$scope.mainDivWidth = childElementWidth;
							});
							$scope.mainDivWidth += 'px';
							$scope.mainDivHeight += 'px';
							if ($scope.currentStyle.isPopup == 'true') {
								$element.css({
									'width' : $scope.mainDivWidth,
									'height' : 0
								});
							} else {
								$element.css({
									'width' : $scope.mainDivWidth,
									'height' : $scope.mainDivHeight
								});
							}
						};
					}
				],
				link : function ($scope, $element, $attributes, $controller, ctrl) {
					$scope.pageID = $controller.pageID;
					$scope.componentType = 'vertical-container';
					$scope.init();
					//$scope.loadChildrens($transcludeFn);
					$scope.applyElementCss();
					$scope.mainDivHeight = $scope.currentStyle.height || $scope.cssProp.height;
					if ($scope.currentStyle.modifyChild == 'true') {
						$scope.verifyChildren();
					}
					if ($scope.currentStyle.extendable == 'true') {
						$scope.extendableComponent();
					} //alert($scope.mainDivHeight);
				}
			};
		}
	]);
uiCore.directive('iappholder', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'AE',
            replace: true,
            template: '<div></div>',
            transclude: true,
            scope: {},
            require: '^pid',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$compile',
                '$templateCache',
                '$interval',
                function($scope, $element, $attrs, $compile, $templateCache, $interval) {
                    $scope.cid = $attrs.cid;
                    //BEGIN SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                    $scope.tempAccessTime = undefined;
                    top.tlbs.lastAccessTime = "false";

                    $scope.hasStoreQuery = false;
                    //END SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {},
                        'JS': {
                            'clickable': false,
                            'animation': false,
                            'custommessage': false,
                            'pageStack': [],
                            'apploadState': false,
                            'stateconfig': {
                                'state': 0,
                                'state0': {},
                                'state1': {}
                            },
                            'currentpageid': '',
                            'backimageconfig': {
                                'CSS': {},
                                'JS': {
                                    'clickable': false,
                                    'stateconfig': {
                                        'state': 0,
                                        'state0': {},
                                        'state1': {}
                                    }
                                }
                            },
                            'closeimageconfig': {
                                'CSS': {},
                                'JS': {
                                    'clickable': false,
                                    'stateconfig': {
                                        'state': 0,
                                        'state0': {},
                                        'state1': {}
                                    }
                                }
                            },
                            'progresswindowconfig': {
                                'CSS': {
                                    'width': '100%',
                                    'height': '100%',
                                    'display': 'none'
                                },
                                'JS': {}
                            },
                            'progresstextconfig': {
                                'CSS': {
                                    'position': 'relative',
                                    'border-radius': '.1em',
                                    'width': '7em',
                                    'height': '1em',
                                    'line-height': '1em',
                                    'top': '5.75em',
                                    'text-align': 'center',
                                    'background-color': '#6FA140',
                                    'margin': '0 auto',
                                    'color': 'white'
                                },
                                'JS': {
                                    'progresstext': 'Please Wait...'
                                }
                            },
                            'statusholderconfig': {
                                'CSS': {
                                    'display': 'none',
                                    'height': '4.5em',
                                    'top': '30%',
                                    'color': '#BDBDBD',
                                    'border': '0.05em solid #F2F2F2',
                                    'background-color': '#F9F9F9',
                                    'position': 'absolute',
                                    'width': '50%',
                                    'left': '25%',
                                    'line-height': '100%',
                                    'text-align': 'left',
                                    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
                                    'list-style': 'none outside none',
                                    'padding': '0',
                                    'z-index': '2047483647',
                                },
//                                'JS': {
//                                    'statustext': '<p class="img"></p><p class="info"><i res="PLEASE_RELOAD">对不起！<br>服务器正忙.<br>请重试.</i></p>'
//                                }
                            },
                            'pagercompmapping': {
                                'goldcoin': 'goldcoinlayout'
                            }
                        }
                    };
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    var loadAppObject = function() {};
                    loadAppObject.prototype.eexecute = function() {
                        if (!$scope.compData.JS.apploadState) {
                            var elementTemplateCache = $templateCache.get($attrs.templateurl);
                            elementTemplateCache = '<div id="progressholder"><div id="progresstextholder" class="rtlstyle">{{compData.JS.progresstextconfig.JS.progresstext}}</div></div><div id="statusholder" ng-show="false" class="reload"><horizontal-container cid="statusholder" param="compData.JS.statusholder"><imageholder ng-show="compData.JS.custommessage" cid="statusholderimage" param="compData.JS.statusholderimage"></imageholder><richtext ng-show="compData.JS.custommessage" cid="titletext" param="compData.JS.statustext"></richtext></horizontal-container></div>' + elementTemplateCache;
                            $element.html(elementTemplateCache);
                            $compile($element.contents())($scope);
                            $scope.compData.JS.apploadState = true;
                            $scope.ctrlPageGroup = {};
                            $scope.progressHolderElement = angular.element($element[0].querySelector('[id="progressholder"]'));
                            $scope.progressTextHolderElement = angular.element($element[0].querySelector('[id="progresstextholder"]'));
                            $scope.statusHolder = angular.element($element[0].querySelector('[id="statusholder"]'));
                            $scope.titleBackImage = angular.element($element[0].querySelector('[id="titlebackimage"]'));
                            var alllLoad = angular.element($element[0].querySelectorAll('[lload="0"]'));
                            for (var i = 0; i < alllLoad.length; i++) {
                                var localElement = angular.element(alllLoad[i]);
                                $scope.ctrlPageGroup[localElement.attr('pid')] = localElement;
                            }
                        }
                    };
                    $scope.loadApps = function(stateObject, deferred) {
                        var loadApp = new loadAppObject().eexecute();
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['loadApps'] = $scope.loadApps;
                    $scope.lloadApps = function(loadObject, deferred) {
                        if (null != loadObject.applist && loadObject.applist.length > 0) {
                            var pageidSplit = loadObject.applist.split(',');
                            new loadAppArray().eexecute(pageidSplit, deferred);
                        } else if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    var loadAppArray = function() {};

                    loadAppArray.prototype.eexecute = function(pageArray, deferred) {
                        var j = pageArray.length,
                            count = 0,
                            pageArrayIds = pageArray,
                            deferred = deferred;
                        var executeFunction = function() {
                            var pageObject = $scope.ctrlPageGroup[pageArrayIds[count]];
                            if (null != pageObject && pageObject.attr('lload') == 0) {
                                new loadSingleApp(pageObject, pageArrayIds[count]).eexecute();
                            }
                            count = count + 1;
                            if (count == j && null != deferred) {
                                $timeout(function() {
                                    deferred.resolve();
                                });
                            }
                        };
                        $interval(executeFunction, 10, j);
                    };

                    var loadSingleApp = function(singleAppObject, pageid) {
                        this.singleAppObject = singleAppObject;
                        this.pageid = pageid;
                    };
                    loadSingleApp.prototype.eexecute = function() {
                        this.singleAppObject.attr('lload', '1');
                        $scope.ctrlPageGroup[this.pageid] = null;
                    };
                    $scope.eventMap['lloadApps'] = $scope.lloadApps;
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        $timeout(function() {
                            $scope.loadApps();
                            $scope.applyStyle();
                            $scope.initNext();
                            coreService.fireEvent($scope.cid, 'init', null);
                        }, 500);
                    };
                    $scope.initNext = function() {
                        $scope.statusHolder.css($scope.compData.JS.statusholderconfig.CSS);
                        if (!$scope.compData.JS.custommessage)
                            $scope.statusHolder[0].innerHTML = $scope.compData.JS.statusholderconfig.JS.statustext;
                    };
                    $scope.updateStatusMessage = function(stateObject, deferred) {
                        $scope.statusHolder[0].innerHTML = stateObject.cmessage;
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.updateCustomStatusMessage = function(stateObject, deferred) {
                        var textHolder = angular.element($element[0].querySelector('[cid="titletext"]'));
                        textHolder[0].innerHTML = stateObject.cmessage;
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.showStatus = function (data) {
					
                    	$timeout(function () {
						if(data&&data.pageid==$scope.compData.JS.currentpageid){
                    		$scope.statusHolder.css('display', 'block');
								}
                    	});
						
                    };
                    $scope.hideStatusMessage = function() {
					 $scope.statusHolder.css('display', 'none');
                    };
                    $scope.applyStyle = function() {
                        if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
                            coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
                        }
                        $element.css($scope.compData.CSS);
                        $scope.progressHolderElement.css($scope.compData.JS.progresswindowconfig.CSS);
                        $scope.progressTextHolderElement.css($scope.compData.JS.progresstextconfig.CSS);
                        if (null != $scope.titleBackImage) {
                            if (null != $scope.compData.JS.backimageconfig.JS.stateconfig['state' + $scope.compData.JS.backimageconfig.JS.stateconfig.state]) {
                                coreUtils.extendDeep($scope.compData.JS.backimageconfig.CSS, $scope.compData.JS.backimageconfig.JS.stateconfig['state' + $scope.compData.JS.backimageconfig.JS.stateconfig.state]);
                            }
                            $scope.titleBackImage.css($scope.compData.JS.backimageconfig.CSS);
                        }
                    };
                    $scope.changeState = function(stateObject, deferred) {
                        if (null != stateObject && null != stateObject.cstate) {
                            if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
                                $scope.compData.JS.stateconfig.state = stateObject.cstate;
                                $scope.applyStyle();
                                $scope.$evalAsync(
                                    function() {
                                        if (null != deferred) {
                                            if ($scope.compData.JS.animation) {
                                                //var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
                                                if (top.tlbs.isTransitionSupported) {
                                                    $element.on(top.tlbs.transitionendEvent, function(e) {
                                                        deferred.resolve();
                                                    });
                                                } else {
                                                    deferred.resolve();
                                                }
                                            } else {
                                                deferred.resolve();
                                            }
                                        }
                                    });
                            } else if (null != deferred) {
                                deferred.resolve();
                            }
                        }
                    };
                    $scope.eventMap['changeState'] = $scope.changeState;
                    $scope.eventMap['showStatus'] = $scope.showStatus;
                    $scope.eventMap['updateStatusMessage'] = $scope.updateStatusMessage;
                    $scope.eventMap['updateCustomStatusMessage'] = $scope.updateCustomStatusMessage;
					$scope.eventMap['hideStatusMessage'] = $scope.hideStatusMessage;
                    $scope.changeCurrentPageID = function(pageIDConfig, deferred) {
                        if (null != pageIDConfig && null != pageIDConfig.pageid && pageIDConfig.pageid.length > 0) {
							
                            if ($scope.compData.JS.progresswindowconfig.CSS['display'] == 'block') {
                                $scope.compData.JS.progresswindowconfig.CSS['display'] = 'none';
                            }
                            //BEGIN SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                            $scope.updateLastAccess();
                            //END SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                            $scope.hideStatusMessage();
                            if (null != pageIDConfig.cpageid && pageIDConfig.cpageid != $scope.compData.JS.currentpageid) {
                                return;
                            }
							if(pageIDConfig.pageid=="itraffic" || pageIDConfig.pageid=="istore"){
								var a="";
								if(top.tlbs.buoystate==undefined || top.tlbs.buoystate==-1){
									a="";
								}else{
									a=top.tlbs.buoystate
								}
								pageIDConfig.pageid=pageIDConfig.pageid+a;
							}
                            var rootComponentConfig = $scope.compData.JS.pagercompmapping[pageIDConfig.pageid];
                            if (null != rootComponentConfig && rootComponentConfig.length > 0) {
                                var compScope = coreService.getComponentScope(rootComponentConfig);
                                if (null != compScope) {
                                    typeof compScope.showcb === 'function' &&
                                        compScope.showcb();
                                }
                            }
                            var cdrConfig = {
                                'cdrType': 'uidisplaycdr',
                                'enable': true,
                                'storeData': false
                            };
                            var cdrDataOpen = {
                                'pageId': pageIDConfig.pageid,
                                'displayType': 1,
                                'displayResult': 0
                            };
                            if (pageIDConfig.pageid != $scope.compData.JS.currentpageid) {
                                var cdrDataClose = {
                                    'pageId': $scope.compData.JS.currentpageid,
                                    'displayType': 0,
                                    'displayResult': 0
                                };
                                if (null != $scope.compData.JS.currentpageid && $scope.compData.JS.currentpageid.length > 0 && $scope.compData.JS.currentpageid != "pageId") {
                                    coreUtils.cdrService(cdrConfig, cdrDataClose);
                                }
                                coreUtils.cdrService(cdrConfig, cdrDataOpen);
                            } else {
                                coreUtils.cdrService(cdrConfig, cdrDataOpen);
                            }
                            $scope.compData.JS.currentpageid = pageIDConfig.pageid;
                            if (null != pageIDConfig.state && '1' == pageIDConfig.state) {
                                $scope.compData.JS.pageStack.push(pageIDConfig.pageid);
                                if ($scope.compData.JS.pageStack.length > 1) {
                                    $scope.compData.JS.backimageconfig.JS.stateconfig.state = 1;
                                } else {
                                    $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                                }
                            } else {
                                $scope.compData.JS.pageStack = [];
                                $scope.compData.JS.pageStack.push(pageIDConfig.pageid);
                                $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                            }
                            $scope.compData.JS.backimageconfigtouch.JS.stateconfig.state = $scope.compData.JS.backimageconfig.JS.stateconfig.state;
                            $scope.resetScroll($scope.compData.JS.currentpageid);
                            
                            if( $scope.compData.JS.currentpageid == "istore"
                            	|| $scope.compData.JS.currentpageid == "istore0"
                            	|| $scope.compData.JS.currentpageid == "istore1"
                            	|| $scope.compData.JS.currentpageid == "istore2"
                            	|| $scope.compData.JS.currentpageid == "istore3"
                            	|| $scope.compData.JS.currentpageid == "istore4"
                            	|| $scope.compData.JS.currentpageid == "istore5"){
                            	if (!$scope.hasStoreQuery) {
                            		$scope.hasStoreQuery = true;
                                	coreService.fireEvent($scope.cid, 'storeQuery');
                            	}else {
                           		 	coreService.fireEvent($scope.cid, 'initStore');
                            	}
                        	}
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.applyStyle();
                        if ((coreUtils.getRemoteServiceStatus('trafficquery') != 0 || coreUtils.getRemoteServiceStatus('trafficdetails') != 0) && $scope.compData.JS.currentpageid == $scope.compData.JS.pageid) {
                            $scope.statusHolder.css('display', 'block');
                        } else {
                            $scope.statusHolder.css('display', 'none');
                        }
                        var currentpage = angular.element($element[0].querySelectorAll('[pid="' + pageIDConfig.pageid + '"]'));
                        
                        if (!currentpage[0]){
                        	console.log("The page of ", pageIDConfig.pageid, " doesn't exist.");
                        }
                        
                        var lload = currentpage[0].getAttribute('lload');
                        if (lload == '0') {
                            $scope.lloadApps({
                                "applist": pageIDConfig.pageid
                            });
                            checkPageLoad(pageIDConfig.pageid);

                        } else if (pageIDConfig.reload != '0') {
                            coreService.fireEvent((currentpage[0].getAttribute('pagesrcid') || pageIDConfig.pageid) + 'show', 'recvd');
                        }
                    };
                    
                    $scope.schangeCurrentPageID = function(pageIDConfig, deferred) {
                        if (null != pageIDConfig && null != pageIDConfig.pageid && pageIDConfig.pageid.length > 0) {
							
                            if ($scope.compData.JS.progresswindowconfig.CSS['display'] == 'block') {
                                $scope.compData.JS.progresswindowconfig.CSS['display'] = 'none';
                            }
                            //BEGIN SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                            $scope.updateLastAccess();
                            //END SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                            $scope.hideStatusMessage();
                            if (null != pageIDConfig.cpageid && pageIDConfig.cpageid != $scope.compData.JS.currentpageid) {
                                return;
                            }
                            var rootComponentConfig = $scope.compData.JS.pagercompmapping[pageIDConfig.pageid];
                            if (null != rootComponentConfig && rootComponentConfig.length > 0) {
                                var compScope = coreService.getComponentScope(rootComponentConfig);
                                if (null != compScope) {
                                    typeof compScope.showcb === 'function' &&
                                        compScope.showcb();
                                }
                            }
                            var cdrConfig = {
                                'cdrType': 'uidisplaycdr',
                                'enable': true,
                                'storeData': false
                            };
                            var cdrDataOpen = {
                                'pageId': pageIDConfig.pageid,
                                'displayType': 1,
                                'displayResult': 0
                            };
                            if (pageIDConfig.pageid != $scope.compData.JS.currentpageid) {
                                var cdrDataClose = {
                                    'pageId': $scope.compData.JS.currentpageid,
                                    'displayType': 0,
                                    'displayResult': 0
                                };
                                if (null != $scope.compData.JS.currentpageid && $scope.compData.JS.currentpageid.length > 0 && $scope.compData.JS.currentpageid != "pageId") {
                                    coreUtils.cdrService(cdrConfig, cdrDataClose);
                                }
                                coreUtils.cdrService(cdrConfig, cdrDataOpen);
                            } else {
                                coreUtils.cdrService(cdrConfig, cdrDataOpen);
                            }
                            $scope.compData.JS.currentpageid = pageIDConfig.pageid;
                            if (null != pageIDConfig.state && '1' == pageIDConfig.state) {
                                $scope.compData.JS.pageStack.push(pageIDConfig.pageid);
                                if ($scope.compData.JS.pageStack.length > 1) {
                                    $scope.compData.JS.backimageconfig.JS.stateconfig.state = 1;
                                } else {
                                    $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                                }
                            } else {
                                $scope.compData.JS.pageStack = [];
                                $scope.compData.JS.pageStack.push(pageIDConfig.pageid);
                                $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                            }
                            $scope.compData.JS.backimageconfigtouch.JS.stateconfig.state = $scope.compData.JS.backimageconfig.JS.stateconfig.state;
                            $scope.resetScroll($scope.compData.JS.currentpageid);
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.applyStyle();
                        var currentpage = angular.element($element[0].querySelectorAll('[pid="' + pageIDConfig.pageid + '"]'));
                        
                        if (!currentpage[0]){
                        	console.log("The page of ", pageIDConfig.pageid, " doesn't exist.");
                        }
                        
                        var lload = currentpage[0].getAttribute('lload');
                        if (lload == '0') {
                            $scope.lloadApps({
                                "applist": pageIDConfig.pageid
                            });
                            checkPageLoad(pageIDConfig.pageid);

                        } else if (pageIDConfig.reload != '0') {
                            coreService.fireEvent((currentpage[0].getAttribute('pagesrcid') || pageIDConfig.pageid) + 'show', 'recvd');
                        }
                    };

                    function checkPageLoad(pageid) {
                        var currentpage = angular.element($element[0].querySelectorAll('[pid="' + pageid + '"]'));
                        var html = currentpage[0].innerHTML;
                        if ("<div></div>" == html) {
                            timer = $timeout(function() {
                                checkPageLoad(pageid);
                            }, 50);
                        } else {
                            if (timer) {
                                clearTimeout(timer);
                            }
                            coreService.fireEvent((currentpage[0].getAttribute('pagesrcid') || pageid) + 'show', 'recvd');
                        }
                    };
                    $scope.eventMap['changeCurrentPageID'] = $scope.changeCurrentPageID;
                    $scope.eventMap['schangeCurrentPageID'] = $scope.schangeCurrentPageID;
                    $scope.popPage = function(args, deferred) {
                        if (null != $scope.compData.JS.pageStack) {
                            var poppage = $scope.compData.JS.pageStack.pop();
                            if (null != poppage) {
                                if (poppage == $scope.compData.JS.currentpageid) {
                                    $scope.popPage();
                                } else {
                                    $scope.changeCurrentPageID({
                                        'pageid': poppage,
                                        'state': 1
                                    }, deferred);
                                }
                            } else {
                                $scope.compData.JS.pageStack = [];
                                $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                            }
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['popPage'] = $scope.popPage;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                    $scope.isCurrentPage = function(pageID) {
                        return $scope.compData.JS.currentpageid == pageID ? true : false;
                    };
                    $scope.showProgress = function(stateObject, deferred) {
                        $scope.compData.JS.progresswindowconfig.CSS['display'] = 'block';
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.applyStyle();
                    };
                    $scope.eventMap['showProgress'] = $scope.showProgress;

                    $scope.hideProgress = function(stateObject, deferred) {
                        $scope.compData.JS.progresswindowconfig.CSS['display'] = 'none';
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.applyStyle();
                    };
                    $scope.eventMap['hideProgress'] = $scope.hideProgress;

                    $scope.writeCPageOpenCDR = function(stateObject, deferred) {
                        var cdrConfig = {
                            'cdrType': 'uidisplaycdr',
                            'enable': true,
                            'storeData': false
                        };
                        var cdrData = {
                            'pageId': $scope.compData.JS.currentpageid,
                            'displayType': 1,
                            'displayResult': 0
                        };
                        coreUtils.cdrService(cdrConfig, cdrData);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.writeCPageCloseCDR = function(stateObject, deferred) {
                        var cdrConfig = {
                            'cdrType': 'uidisplaycdr',
                            'enable': true,
                            'storeData': false
                        };
                        var cdrData = {
                            'pageId': $scope.compData.JS.currentpageid,
                            'displayType': 0,
                            'displayResult': 0
                        };
                        coreUtils.cdrService(cdrConfig, cdrData);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.compData.JS.currentpageid = '';
                    };
                    $scope.eventMap['writeCPageOpenCDR'] = $scope.writeCPageOpenCDR;
                    $scope.eventMap['writeCPageCloseCDR'] = $scope.writeCPageCloseCDR;

                    $scope.resetScroll = function(pageId) {
                        var pageObject = $element[0].querySelector('[pid="' + pageId + '"]');
                        if (null != pageObject) {
                            var scrollObject = pageObject.querySelector('[class="ui-com-vscroll-wrapper"]');
                            if (null != scrollObject) {
                                var scrollObjectAngular = angular.element(scrollObject);
                                scrollObjectAngular.css({
                                    '-webkit-transform': 'translate3d(0,0,0)',
                                    '-moz-transform': 'translate3d(0,0,0)',
                                    '-ms-transform': 'translate3d(0,0,0)',
                                    'transform': 'translate3d(0,0,0)',
                                    '-o-transform': 'translate(0,0)'
                                });
                            }
                        }
                    };

                    //BEGIN SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                    $scope.updateLastAccess = function() {
                        var currTime = new Date().getTime();

                        if (!$scope.tempAccessTime) {
                            $scope.tempAccessTime = currTime;

                            top.tlbs.lastAccessTime = "true"
                        } else {
                            var diffTime = currTime - $scope.tempAccessTime;

                            if (diffTime > 120000) { //If difference is more than 2 minutes
                                $scope.tempAccessTime = currTime;
                                top.tlbs.lastAccessTime = "true"
                            } else {
                                top.tlbs.lastAccessTime = "false";
                            }
                        }
                    };
                    //END SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015

                    $scope.clearGlobalData = function(eventObject, deferred) {
                        if (null != eventObject && null != eventObject.datakey) {
                            var dataKeyArray = eventObject.datakey.split(',');
                            for (var i = 0; i < dataKeyArray.length; i++) {
                                top.tlbs[dataKeyArray[i]] = null;
                            }
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.checkSub = function(eventObject, deferred) {
                    	if(top.tlbs.showClose == true){
                    		var substate="3";
                    		coreService.fireEvent($element.attr('cid'), 'suberror1',substate);
                    	}else{
                    		coreService.fireEvent($element.attr('cid'), 'suberror2');
                    	}
                    };
                    $scope.eventMap['checkSub'] = $scope.checkSub;
                    $scope.eventMap['clearGlobalData'] = $scope.clearGlobalData;
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'iappholder';
                scope.init();
            }
        };
    }
]);
uiCore.directive('selectbox',[
	'coreService',
	'coreUtils',
	function(coreService,coreUtils){
		return {
			restrict: 'E',
			replace: false,
			require: '^pid',
			scope: {
				param: '=param'
			},
			template: '<div ng-repeat="data in compData.JS.datas" ><div ng-style="checkholder(data.state)"><div id={{data.key}} key={{data.key}} ng-click="{{data.clickable}} && changeState($index)" class="btnstate" ng-style="optionStyle(data.state)"></div><span ng-style="compData.JS.checktext" class="checktext" ng-click="{{data.clickable}} && changeState($index)">{{data.value}}</span></div></div><div class="confirmbtn" ng-style="compData.JS.confirmbtn" ng-click="diableBtn() && confirmaction()">{{compData.JS.btntext}}</div>',
			controller: [
                '$scope',
                '$element',
                '$attrs',
                'coreService',
                'coreUtils',
                function($scope, $element, $attrs, coreService, coreUtils) {
                	$scope.cid = $attrs.cid;
                	$scope.selected = [];
                	$scope.eventMap = {};
                	$scope.compData = {};
                	$scope.initState = function(object){
                		if(object.selected != null){
            				var selecteds = object.selected.split(',');
            				for(data in $scope.compData.JS.datas){
            					if ($scope.compData.JS.datas[data].state == '2') break; 
            					
        						if(selecteds.indexOf($scope.compData.JS.datas[data].key) != '-1'){
        							$scope.compData.JS.datas[data].state = '1';
        						}else{
        							$scope.compData.JS.datas[data].state = '0';
        						}
            				}
                		}
                	};
                	
                	//用于埃及et项目在不刷新页面的情况下，重载toolbar的方法---start
                	//top.retlbs.rejs方法在base.js里
                	$scope.rejs = top.retlbs.rejs;
                	$scope.eventMap['rejs'] = $scope.rejs;
                	//用于在不刷新页面的情况下，重载toolbar的方法---end

                	//用于埃及et项目在检查选择的语言是否和初始语言是否相同的方法---start
                	$scope.checkChangeStatus = function(){
                		if($scope.compData.JS.checkedvalue && $scope.compData.JS.checkedvalue == top.tlbs.languageID){
                			coreService.fireEvent($scope.cid, 'nochange');
                		}else{
                			coreService.fireEvent($scope.cid, 'change');
                		}
                	};
                	$scope.eventMap['checkChangeStatus'] = $scope.checkChangeStatus;
                	//用于埃及et项目在检查选择的语言是否和初始语言是否相同的方法---end
                	
                	$scope.eventMap['initState'] = $scope.initState;
                	$scope.$on($scope.cid + '_handleEvent', function (eventObj, event, inputData, deferred) {
						$scope.eventMap[event](inputData, deferred);
					});
                	$scope.formatStyleData = function (styleData) {
						styleData = styleData.replace(/","/g, ';').replace(/":"/g, ':').replace(/\\/g, '').replace(/{"/, '{').replace(/"}/, '}');
						return styleData;
					};
                	$scope.applyStyle = function(){
                		var checkholdercss = $scope.compData.JS.checkholdercss;
                		var checkholdhide = $scope.compData.JS.checkholdhide;
                		var textcss = $scope.compData.JS.textcss;
						$scope.compData.JS.state0 = $scope.compData.JS.state0;
						$scope.compData.JS.state1 = $scope.compData.JS.state1;
						var confirmbtncss = $scope.compData.JS.confirmbtncss;
						$scope.compData.JS.checkholder = checkholdercss;
						$scope.compData.JS.checkholdhide = checkholdhide;
						$scope.compData.JS.checktext = textcss;
						$scope.compData.JS.confirmbtn = confirmbtncss;
						$scope.compData.JS.btnstate0 = $scope.compData.JS.state0;
						$scope.compData.JS.btnstate1 = $scope.compData.JS.state1;
						$scope.compData.JS.btnstate2 = $scope.compData.JS.state2;
						$scope.compData.JS.btnstate3 = $scope.compData.JS.state3;
                	};
                	
                	$scope.optionStyle = function(state){
                		var state = state || 0;
                		//state=0 时,显示，未选中,可以点击
                		if(state == 0){
                			return $scope.compData.JS.btnstate0;
                		}
                		//state=1 时,显示，已选中,可以点击
                		if(state == 1){
                			return $scope.compData.JS.btnstate1;
                		}
                		//state=2 时,显示，不可以选,不可以点击
                		if(state == 2){
                			return $scope.compData.JS.btnstate2;
                		}
                		//state=3 时,隐藏...
                		if(state == 3){
                			return $scope.compData.JS.btnstate3;
                		}
                	};
                	//当state = 3 时，不显示当前选项
                	$scope.checkholder = function(state) {
                		var state = state || 0;
                		if(state == 3){
                			return $scope.compData.JS.checkholdhide;
                		}else{
                			return $scope.compData.JS.checkholder;
                		}
                	};
                	
                	$scope.changeState = function(index){
                		var datas = $scope.compData.JS.datas;
                		
                		if (datas[index].state == '2') return;
                		
                		if($scope.compData.JS.type == 0){
                			for(data in datas){
                				if(index == data){
                					datas[data].state = '1';
                					var selectedOption = datas[data];
                					var jsData = $scope.compData.JS;
                					if(selectedOption.key && jsData.btntextAr && jsData.btntextEn)
                					jsData.btntext = selectedOption.key == 'ar' ? jsData.btntextAr : jsData.btntextEn;
                				}
                				else if (datas[data].state == '1') {
                					datas[data].state = '0';
                				}
                			}
                			var selectstate = datas[data].state;
                		}
                		if($scope.compData.JS.type == 1){
                			if(state == 0){
                    			datas[index].state = '1';
                    		}
                    		if(state == 1){
                    			datas[index].state = '0';
                    		}
                		}
                	};
                	$scope.confirmaction = function(){
                		var temp = [];
                		var functionType = "";
                		var eventData = coreUtils.extendDeep({}, $scope.eventdata || $scope.edata);
                		var datas = $scope.compData.JS.datas;
                		for(data in datas){
                			if(datas[data].state == '1'){
                				temp.push(datas[data].key);
                				
                				if ($attrs["cid"] == 'setuptimeselectbox') {
                					eventData['status'] = '0';
                					eventData["cycle"] = (parseInt(datas[data].key) + 1).toString();
                					eventData["functionType"] = '0X580000';
                				}
                				eventData["key"] = datas[data].key;
//                				//关闭时，status=0;开通时,status=1...
//                				if($scope.compData.JS.type == "1"){
//                					if($scope.compData.JS.setUptype == "Enable"){
//                						eventData["status"] = "1"; 
//                						eventData["cycle"] = "5";  //开通时没有时间选项，默认key=5
//                					}else{
//                						eventData["status"] = "0";
//                					}
//                					functionType += datas[data].key +"|";
//                				}else{
//                					eventData["key"] = datas[data].key;
//                					eventData["cycle"] = (parseInt(datas[data].key) + 1).toString();
//                				}
                			}
                		}
//                		//针对setUp功能，增加functionType字段返回给后台
//                		functionType = functionType.substring(0,functionType.length-1);
//                		
//                		if(!eventData.functionType){
//                			eventData["functionType"] = functionType;
//                		}
                		$scope.compData.JS.checkedvalue = temp[0];
                		
                		//记录话单
                		var cdrConfig = {
                                'cdrType': 'uitracingcdr',
                                'enable': true,
                                'storeData': $element.attr('storedata') == 'true'
                            };
                        $scope.compData.JS['cdrData'] = {};
                        $scope.compData.JS.cdrData = {
                              'pageId': $scope.pageID,
                              'componentId': $element.attr('cid') || '',
                              'iseComp': $element.attr('isecomp') || '0',
                        };
                        coreUtils.cdrService(cdrConfig, $scope.compData.JS.cdrData);
                		
                		coreService.fireEvent($scope.cid, 'click',eventData);
                	};
                	$scope.extendComponentData = function (componetData) {
						$scope.compData = coreUtils.extendDeep($scope.compData, componetData);
					};
                	$scope.init = function(){
                		coreService.registerComponentInstance($scope.cid, $scope);
						$scope.extendComponentData(coreService.getInitProperties($scope.cid));
						$scope.compData.JS.newdatas = [];
						if($scope.compData.JS.datas.length){
							for(var i=0; i<$scope.compData.JS.datas.length; i++){
								$scope.compData.JS.newdatas.push($scope.compData.JS.datas['data'+i])
							}
						}
						$scope.compData.JS.datas = $scope.compData.JS.newdatas;
						$scope.applyStyle();
                	};
                	//获取是否开通的状态..
                	$scope.choose = function(param){
                		if (param && param.key != null) {
                			coreService.fireEvent($scope.cid, 'click' + param.key);
                		}
                	};
                	$scope.updateEventData = function(eventData) {
                        $scope.edata = coreUtils.extendDeep({}, eventData);
                    };
                	
                    $scope.updateLangBtn = function(){
                    	$scope.language = top.tlbs.languageID;
                    	var selectIndex = 0;
                    	if($scope.language == "ar"){
                    		$scope.compData.JS.datas[1]['state'] = '1';
                    		$scope.compData.JS.datas[0]['state'] = '0';
                    		selectIndex = 0;
                    	}
                    	if($scope.language == "en"){
                    		$scope.compData.JS.datas[1]['state'] = '0';
                    		$scope.compData.JS.datas[0]['state'] = '1';
                    		selectIndex = 1;
                    	};
                    	$scope.changeState(selectIndex);
                    };
                    $scope.eventMap['updateLangBtn'] = $scope.updateLangBtn;
                    
                    $scope.diableBtn = function() {
                    	if (!$scope.compData.JS.disable) {
                    		for(items in $scope.compData.JS.datas){
                      			 if($scope.compData.JS.datas[items].state =="1"){
                      				return true;
                      			 }
                      		 }
                    	}
                    	return false;
                    };
                    
                    $scope.hide = function(){
                    	$element.css('display', "none");
                    };
                    
                    $scope.show = function(){
                    	$element.css('display', "block");
                    };
                    
                    $scope.hideBtn = function(){
                    	$scope.compData.JS.confirmbtn = {"display" : "none"};
                    };
                    
                    $scope.showBtn = function(){
                    	$scope.compData.JS.confirmbtn = $scope.compData.JS.confirmbtncss;
                    };
                    
                    $scope.enable = function () {
                    	$scope.compData.JS.confirmbtn = $scope.compData.JS.confirmbtncss;
                    	$scope.compData.JS.disable = false;
                    };
                    
                    $scope.disable = function () {
                    	$scope.compData.JS.confirmbtn = $scope.compData.JS.disablecss;
                    	$scope.compData.JS.disable = true;
                    };
                    
                    $scope.disableOption = function (obj) {
                    	if (obj && obj.index && obj.index == '1') {
                        	$scope.compData.JS.datas[obj.index].state = '2';
                    	}
                    };
                    
                    $scope.eventMap['hide'] = $scope.hide;
                    $scope.eventMap['show'] = $scope.show;
                    $scope.eventMap['hideBtn'] = $scope.hideBtn;
                    $scope.eventMap['showBtn'] = $scope.showBtn;
                    $scope.eventMap['btn.enable'] = $scope.enable;
                    $scope.eventMap['btn.disable'] = $scope.disable;
                    $scope.eventMap['updateEventData'] = $scope.updateEventData;
                	$scope.eventMap['choose'] = $scope.choose;
                	$scope.eventMap['disableOption'] = $scope.disableOption;
                }
            ],
            link: function($scope, $element, $attrs, ctl) {
                $scope.pageID = ctl.pageID;
                $scope.componentType = 'selectbox';
                $scope.init();
            }
		};
	}]
);
uiCore.directive('itable', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'AE',
            replace: true,
            template: '<div></div>',
            require: '^pid',
            scope: {},
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$templateCache',
                '$compile',
                function($scope, $element, $attrs, $templateCache, $compile) {
                    var isOpera = /preto/i.test(navigator.userAgent) || /opera/i.test(navigator.userAgent);
                    $scope.cid = $attrs.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {
                            'border-collapse': 'collapse',
                            'border-spacing': '0',
                            'margin': '0'
                        },
                        'JS': {
                        	'backbtn' : '< Back',
                            'clickable': false,
                            'tableConfigRespPath': '',
                            'tableDataRespPath': '',
                            'tableArrayDataRespPath': '',
                            'templateUrl': '',
                            'table_config': [],
                            'defaultvalues': false,
                            'table_data': [],
                            'runtimeDataPath': 'respparam.packages',
                            'runtimeDataKey': 'id',
                            'filterKey': '',
                            'filterValue': '',
                            'filterType': '',
                            'cdrConfig': {
                                'uinotiftracingcdr': {
                                    'cdrType': 'uinotiftracingcdr',
                                    'enable': false,
                                    'storeData': false
                                }
                            },
                            'whiteline': {},
                            'tableStyle':{},
                            'categorysDefaultName': {},
                            'categorysMap': [],
                            'products': {}
                        }
                    };
                    //当前类别数据
                    $scope.current = {};
                    //上层数据
                    $scope.before = [];
                    
                    $scope.getColData = function(columnIndex, rowIndex) {
                        return $scope.compData.JS.table_data[rowIndex][$scope.compData.JS.table_config[columnIndex].data];
                    };
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.excuteTrafficQuery = function() {
                    	coreService.fireEvent($element.attr('cid'), "excuteTrafficQuery");
                    };
                    $scope.init = function() {
                    	if($element.attr('cid') == "ipackagepostpaid"){
                    		var w = angular.element(top.window);
							w.bind('resize', function () {
								$scope.excuteTrafficQuery();
							});
                    	}
                    	
                        $scope.compData.JS.templateUrl = $attrs['templateUrl'] || $scope.compData.JS.templateUrl;
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        if ($scope.compData.JS.defaultvalues) {
                            $scope.compData.JS.table_dataarray = [];
                            $scope.compData.JS.table_dataarray.push($scope.compData.JS.table_data);
                            $scope.compData.JS.table_data = $scope.compData.JS.table_dataarray;
                        }
                        $scope.initNext();
                        //$element.bind('DOMNodeInserted', $scope.updateTable);
                    };
                    $scope.initNext = function() {
                        var elementTemplateCache = $templateCache.get($scope.compData.JS.templateUrl);
                        $element.html(elementTemplateCache);
                        $compile($element.contents())($scope);
                        $scope.tableElement = angular.element($element[0].querySelector('table'));
                        $scope.tableElement.css($scope.compData.CSS);
                    };
                    $scope.getTemplateUrl = function() {
                        return $scope.compData.JS.templateUrl;
                    };
                    $scope.updateTableConfig = function(respData) {
                        if ($scope.compData.JS.tableConfigRespPath) {
                            $scope.compData.JS.table_config = coreUtils.transfer(respData, $scope.compData.JS.tableConfigRespPath);
                        } else if (null != respData) {
                            $scope.compData.JS.table_config = respData;
                        }
                    };
                    $scope.updateTableData = function(respData) {
                        if ($scope.compData.JS.tableDataRespPath) {
                            $scope.compData.JS.table_data = coreUtils.transfer(respData, $scope.compData.JS.tableDataRespPath);
                        } else if (null != respData) {
                            $scope.compData.JS.table_data = respData;
                        }
                        $scope.tableDataUpdateCommonTask(respData);
                    };
                    $scope.handleTrafficResp = function(respData) {
                    	var resp = respData.respparam;
                    	var summaryDetail = resp.summaryDetail || [];
                    	var meters = resp.meters || [];
                    	var isParent = resp.isParent;
                    	
                    	var cssData = $scope.compData.CSS;
                    	var jsData = $scope.compData.JS;
                    	var isAr = top.tlbs.languageID === 'ar';
                    	
                    	for (var i = 0, ilen = summaryDetail.length; i < ilen; i++) {
                    		var single = summaryDetail[i];
                    		var category = single.category || '';
                    		
                    		if (category === 'mainBundle') {
                    			var mainName = (isAr ? single.pkgnameAra : single.pkgname) || '';
                    			coreService.fireEvent($element.attr('cid'), "changtype",{'text' : mainName});
                    			
                    			var renewtime = single.renewTime;
                    			if (renewtime) {
                        			coreService.fireEvent($element.attr('cid'), "renewtime",{"text" : renewtime});
                    			}
                    		}
                    		if (category === 'connectBundle') {
                    			var mirenewtime = single.renewTime;
                    			if (mirenewtime) {
                        			coreService.fireEvent($element.attr('cid'), "MIrenewtime",{'text' : mirenewtime});
                    			}
                    		}
                    	};
                    	
                    	var meterInfo = [];
                    	var textInfo = [];
                    	for (var j = 0, jlen = meters.length; j < jlen; j++) {
                    		var singleMeter = meters[j];
                    		singleMeter.displayTitle = isAr ? singleMeter.titleAr : singleMeter.title;
                    		if (singleMeter.display === 'text') {
                    			var formattedText = singleMeter.displayTitle + ' : ' + singleMeter.used + ' ' + singleMeter.unit;
                    			textInfo.push(formattedText);
                    		}
                    		if (singleMeter.display === 'meter') {
                    			meterInfo.push(singleMeter);
                    		}
                    	};
                    	if (textInfo.length === 0) {
                    		angular.element($element[0].children[1]).css('margin-top','1em');
                    	}
                    	if (textInfo.length === 1) {
                    		angular.element($element[0].children[1]).css('margin-top','0.5em');
                    	}
                    	if (textInfo.length === 2) {
                    		angular.element($element[0].children[1]).css('margin-top','0');
                    	}
                    	
                    	jsData.textsData = textInfo;
                    	jsData.metersData = meterInfo;
                    };
                    var filterCategory = function(trafficdetail){
                    	var output = [];
                    	for(var index in trafficdetail){
                    		var trafficinfo = trafficdetail[index];
                    		var categoryName = trafficinfo.category || '';
                    		if(categoryName.indexOf('Happy') == -1){
                    			output.push(trafficinfo);
                    		}
                    	}
                    	return output;
                    };
                  //add end by tWX330131 for DTS2017031505833
                    
                    $scope.updateArrayTableData = function(respData) {
                        $scope.compData.JS.tempTableData = [];
                        if (null != respData.respparam.recommandations) {
                            for (var i = 0; i < respData.respparam.recommandations.length; i++) {
                                $scope.compData.JS.tempTableData = $scope.compData.JS.tempTableData.concat(respData.respparam.recommandations[i].list);
                            }
                            if ($scope.compData.JS.tempTableData.length > 0) {
                                $scope.compData.JS.table_data = $scope.compData.JS.tempTableData;
                                $scope.tableDataUpdateCommonTask(respData);
                            }
                        }
                    };
                    $scope.tableDataUpdateCommonTask = function(respData) {
                        $scope.updateTable();
                        if (null != respData.respparam.taskId && respData.respparam.taskId.length > 0) {
                            var cdrConfig = $scope.compData.JS.cdrConfig;
                            if (null != cdrConfig && null != cdrConfig.uinotiftracingcdr && cdrConfig.uinotiftracingcdr.enable) {
                                var cdrData = {
                                    'taskId': respData.respparam.taskId || '',
                                    'componentId': $scope.cid,
                                    'pageId': $scope.pageID
                                };
                                coreUtils.cdrService(cdrConfig.uinotiftracingcdr, cdrData);
                            }
                        }
                    };
                    $scope.click = function(data) {
                        $scope.eventdata = data;
                        var eventData = coreUtils.extendDeep({}, $scope.eventdata || $scope.edata);
                        coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'btnclick', eventData);
                    };

                    $scope.isLast = function(last) {
                        var cssClass = last ? null : $scope.compData.JS.rowborder;
                        return cssClass;
                    };
					$scope.showcb = function(){
					
					 if (null != $scope.compData.JS.table_data && $scope.compData.JS.table_data.length > 0) {
                            coreService.fireEvent($scope.cid, 'updatedata1', null);	
                        } else {
                            coreService.fireEvent($scope.cid, 'updatedata0', null);
                        }
					
					};
                    $scope.updateTable = function() {
                        if (null != $scope.compData.JS.table_data && $scope.compData.JS.table_data.length > 0) {
                            coreService.fireEvent($scope.cid, 'updatedata1', null);
                        } else {
                            coreService.fireEvent($scope.cid, 'updatedata0', null);
                        }
                        
                        $element[0].lastChild.scrollTop = 0;
                    };
                    $scope.updateTableDatawithMerge = function(respData) {
                        var mergeDataSet = {};
                        var tableDataRespPathlist = $scope.compData.JS.tableDataRespPath.split(",");
                        if (tableDataRespPathlist.length > 0) {
                            var j = 0;
                            var responsedata1 = coreUtils.transfer(respData, tableDataRespPathlist[0]);
                            var i = 0;
                            for (data in responsedata1) {

                                if (i >= $scope.compData.JS.startposition - 1) {
                                    mergeDataSet[j] = responsedata1[data];
                                    j++;
                                }
                                i++;
                            }

                            var responsedata2 = coreUtils.transfer(respData, tableDataRespPathlist[1]);

                            for (data in responsedata2) {
                                mergeDataSet[j] = responsedata2[data];
                                j++;
                            }
                            $timeout(function() {
                                $scope.compData.JS.table_data = {};
                                $scope.$digest();
                                if ($scope.compData.JS.startposition > 0) {
                                    $scope.compData.JS.table_data = mergeDataSet;
                                }
                                $scope.$digest();
                            });
                            return;

                        }

                    };
                    $scope.handleClick = function(inputParam) {
                        if (null != inputParam && inputParam.length != 0) {
                            coreService.commonServiceRef.dynamicService(null, {
                                "serviceType": "urlservice",
                                "openurl": inputParam
                            });
                        }
                    };
                    
                    $scope.initScroll = function(){
						var scroll = $element[0].children[1].lastChild.lastChild.lastChild;
                    	scroll.style.top = 0;
                    	$element[0].lastChild.firstChild.scrollTop = 0;
                    };
                    
                    $scope.updateTableByTabClick = function(inputData) {
                    	$scope.current = {};
                    	$scope.before = [];
                    	if (inputData && inputData.subCategory) {
                            $scope.current = inputData.subCategory;
                            $scope.initScroll();
                        }
                    };
                    
                    //点击按钮后到下一层
                    $scope.toNext = function(data){
                    	if(data.flag != null && data.flag != '2' && data.subCategory && data.subCategory.length > 0){
                        	$scope.before.push($scope.current);
                    		$scope.current = data.subCategory;
                    		$scope.initScroll();
                    	}else{
                    		if(data.parentName && data.name){
                    			data.name = data.parentName + '" ' + $scope.compData.JS.joinwords + ' "' + data.name;
                    		}
                    		if(data.price && data.parentPrice && data.price <= 0){
                    			data.price = data.parentPrice;
                    		}
                    		data.childid = data.parentId ? data.id : '';
                    		data.id = data.parentId ? data.parentId : data.id;
                    		data.id = data.id || '';
                    		coreService.fireEvent('btn', 'tosubpage',data);
//                    		$scope.current = {};
                    		$scope.initScroll();
                    	}
                    };
                    
                    //点击back返回上一层
                    $scope.back = function(){
                    	var len = $scope.before.length;
                    	if(len > 0 && $scope.before[len-1]){
                    		$scope.current = {};
                    		$scope.current = $scope.before[len-1];
                    		$scope.initScroll();
                    		$scope.before.pop();
                    	}
                    };
                    
                    $scope.hide = function () {
						$element.css({
							'display' : 'none'
						});
					};
					$scope.eventMap['hide'] = $scope.hide;
					$scope.show = function () {
						$element.css({
							'display' : 'block'
						});
					};
					$scope.eventMap['show'] = $scope.show;
					
					//是否显示滑动时需要的白线
					$scope.isScroll = function(){
						var div = $element[0].children[1].firstChild;
						var table = div.lastChild;
						return table.offsetHeight > div.offsetHeight;
					}
					
					$scope.clickTime = new Date();
					$scope.showAbbWord = function(index) {
//						$scope.lastTime = $scope.clickTime;
//						$scope.clickTime = new Date();
//						if($scope.clickTime - $scope.lastTime < 100) return;
//						var pkgName = angular.element($element[0].querySelectorAll('[cid="pssricht1"]'))[index];
//						var whitespace = pkgName.style.whiteSpace;
//						if(whitespace){
//							angular.element(pkgName).css({
//								'whiteSpace' : ''
//							});
//						}else{
//							angular.element(pkgName).css({
//								'whiteSpace' : 'nowrap'
//							});
//						}
					}
					
                    $scope.updateTableDataWithFilter = function(respData) {
                        $scope.compData.JS.tempTableData = [];
                        var tableData = null;
                        if ($scope.compData.JS.tableDataRespPath) {
                            tableData = coreUtils.transfer(respData, $scope.compData.JS.tableDataRespPath);
                        } else if (null != respData) {
                            tableData = respData;
                        }
                        for (var i = 0; i < tableData.length; i++) {
                            var singleObject = tableData[i];
                            var filterKeyValue = singleObject[$scope.compData.JS.filterKey];
                            if (null != filterKeyValue) {
                                if ("0" == $scope.compData.JS.filterType) {
                                    if (filterKeyValue != $scope.compData.JS.filterValue) {
                                        $scope.compData.JS.tempTableData = $scope.compData.JS.tempTableData.concat(singleObject);
                                    }
                                } else if ("1" == $scope.compData.JS.filterType) {
                                    if (filterKeyValue == $scope.compData.JS.filterValue) {
                                        $scope.compData.JS.tempTableData = $scope.compData.JS.tempTableData.concat(singleObject);
                                    }
                                }
                            }
                        }
                        if ($scope.compData.JS.tempTableData.length > 0) {
							$scope.tableElement.css('display','table');
                            $scope.compData.JS.table_data = $scope.compData.JS.tempTableData;
                            $scope.tableDataUpdateCommonTask(respData);
                        }
                        //$scope.tableDataUpdateCommonTask(respData);
                    };
					$scope.clickDisable = function() {};
					$scope.eventMap['handleTrafficResp'] = $scope.handleTrafficResp;
                    $scope.eventMap['updateTableConfig'] = $scope.updateTableConfig;
                    $scope.eventMap['updateTableData'] = $scope.updateTableData;
                    $scope.eventMap['updateTableDatawithMerge'] = $scope.updateTableDatawithMerge;
                    $scope.eventMap['updateTableByTabClick'] = $scope.updateTableByTabClick;
                    $scope.eventMap['updateArrayTableData'] = $scope.updateArrayTableData;
                    $scope.eventMap['updateTableDataWithFilter'] = $scope.updateTableDataWithFilter;
                    $scope.eventMap['click'] = $scope.click;
                    $scope.eventMap['toNext'] = $scope.toNext;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                    	$scope.eventMap[event](inputData);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    });
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'itable';
                scope.init();
            }
        };
    }
]);
uiCore.directive('iappiconholderlbar', [
    'coreService',
    'coreUtils',
    function(coreService, coreUtils) {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            template: '<div id="maindiv" ng-class="appiconbarStyle"><div ng-click="handleAppClick(app,$index);" ng-style="compData.JS.appBackgroundStyle[$index]" ng-class="app.icclass" id="appicon" ng-repeat="app in compData.JS.appconfig" ng-click="compData.JS.clickable && handleClick(app);"><div class="app-red-notice" ng-style="app.reddotStyle">&nbsp;</div><div ng-show="app.selected" ng-style="compData.JS.tineStyle" class="app-tine-icon" ></div><div id="appiconimage" ng-show="app.selected && compData.JS.curve" class="ts-blue-cur"><div class="ts-blue-cur-top"></div><div class="ts-blue-cur-bottom"></div></div><img id="appiconimage" ng-class="app.iclass" ng-show="false" width="50%" height="50%" ng-src="{{app.finalimage}}"></img></div><div ng-style="compData.JS.rightdivstyle.CSS"></div></div>',
            scope: {},
            require: '^pid',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$timeout',
                function($scope, $element, $attrs, $timeout) {
                    $scope.cid = $attrs.cid;
                    $scope.classid = '.' + $scope.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {
                            'height': '100%',
                            'width': '100%'
                        },
                        'JS': {
                            'selectdAppData': null,
                            'selectdAppIndex': null,
                            'clickable': true,
                            'redDotImg': "url('" + top.tlbs.templatePath + "/images/reddot.png?V=1')",
                            'curve': false,
                            'redDotImgMargin': 'initial',
                            'appiconstyle': {
                                'CSS': {
                                    'vertical-align': 'top',
                                    'height': '3.54em',
                                    'float': 'left',
                                    'cssFloat': 'left',
                                    'width': '3.54em',
                                    'background': '#ddd',
                                    'position': 'relative',
                                    'text-align': 'initial',
                                    "border": "2px solid #fff !important",
                                    "box-sizing": "border-box !important",
                                    "border-left": "none !important"
                                },
                                'JS': {}
                            },
                            'appiconstyleselect': {
                                'CSS': {
                                    "background-color": "#EBF5CF",
                                    "background-repeat": "no-repeat",
                                    "background-size": "100% 100%",
                                    "border": "2px solid #fff !important",
                                    "box-sizing": "border-box !important",
                                    "border-left": "none !important"
                                },
                                'JS': {}
                            },
                            'appimagestyle': {
                                'CSS': {
                                    'height': '3em',
                                    'left': '0.7em',
                                    'position': 'relative',
                                    'text-align': 'center',
                                    'top': '0.25em',
                                    'width': '3em'
                                },
                                'JS': {}
                            },
                            'appimagestyleselect': {
                                'CSS': {},
                                'JS': {}
                            },
                            'appnameholderstyle': {
                                'CSS': {
                                    'position': 'relative',
                                    'overflow': 'hidden',
                                    'text-align': 'center',
                                    'top' : "2.2em"
                                },
                                'JS': {

                                }
                            },
                            'appnameholderstyleselect': {
                                'CSS': {

                                },
                                'JS': {

                                }
                            },
                            'appnamestyle': {
                                'CSS': {
                                    'position': 'relative',
                                    'display': 'inline-block',
                                    'color': '#fff',
                                    'font-size': '0.6em!important',
                                    'line-height': '1.5em!important',
                                    'margin-top': '0.3em!important',
                                    'min-width': '10%',
                                    'overflow': 'hidden',
                                    'text-align': 'center',
                                    'white-space': 'nowrap!important',
                                    'width': 'auto'
                                },
                                'JS': {}
                            },
                            'appnamestyleselect': {
                                'CSS': {

                                },
                                'JS': {}
                            },
                            "rightdivstyle": {
                                'CSS': {
                                    'display': 'none',
                                    'vertical-align': 'top',
                                    'height': '2.8em',
                                    'float': 'left',
                                    'cssFloat': 'left',
                                    'width': '3em',
                                    'background': 'none',
                                    'position': 'relative',
                                    'text-align': 'initial'
                                },
                                'JS': {

                                }
                            },
                            "cdrConfig": {
                                "uitracingcdr": {
                                    "cdrType": "uitracingcdr",
                                    "enable": true,
                                    "storeData": false
                                }
                            }
                        }
                    };
                    $scope.compData.JS.appconfig = top.tlbs.appholder || [];
                    $scope.compData.JS.appBackgroundStyle = [];
                    $scope.lastClickTime = new Date();
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        if(top.tlbs.languageID=="ar"){
                        	$scope.compData.JS.appiconstyle.CSS.float="left";
                        	$scope.compData.JS.appimagestyle.CSS.left="initial";
                        	$scope.compData.JS.appimagestyle.CSS.right="0.5em";
                        }
                        $scope.initStyle();
                        $scope.setAllAppToDefaultStyle();
                        $scope.processStyle();

                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            if ($scope.compData.JS.appconfig[i]['selected'] && $scope.compData.JS.selectdAppIndex != appIndex) {
                                $scope.setAppToDefaultStyle(i);
                            }

                            //根据不同的pageId,设置点击时不同的APP尖角颜色
                            if($scope.compData.JS.appconfig[i]["pageid"] == "itraffic"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "itraffic0"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "itraffic1"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "itraffic2"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "itraffic3"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "itraffic4"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "itraffic5"){
                            	$scope.compData.JS.appconfig[i]['tineColor'] = {
                                		"border-bottom-color" : $scope.compData.JS.trafficTineColor
                                };
                            }
                            
                            if($scope.compData.JS.appconfig[i]["pageid"] == "istore"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "istore0"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "istore1"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "istore2"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "istore3"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "istore4"
                            	||$scope.compData.JS.appconfig[i]["pageid"] == "istore5"){
                            	$scope.compData.JS.appconfig[i]['tineColor'] = {
                                		"border-bottom-color" : $scope.compData.JS.storeTineColor
                                };
                            }
                            
                            if($scope.compData.JS.appconfig[i]["pageid"] == ""){
                            	$scope.compData.JS.appconfig[i]['tineColor'] = {
                                		"border-bottom-color" : $scope.compData.JS.otherTineColor
                                };
                            }
                            
                            $scope.compData.JS.appconfig[i]['reddotStyle'] = {
                                'background-image': 'url(' + $scope.compData.JS.redDotImg + ')',
                                'display': ($scope.compData.JS.appconfig[i]['reddot'] ? 'block' : 'none'),
                                'margin': $scope.compData.JS.redDotImgMargin,
                            };
                            $scope.compData.JS.appconfig[i]['redDotSrvSet'] = false;
                        }
                        $scope.updateAppNameStyle();
                    };

                    $scope.setAppSelectdToDefault = function(appIndex) {
                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            if ($scope.compData.JS.appconfig[i]['selected'] && $scope.compData.JS.selectdAppIndex != appIndex) {
                                $scope.setAppToDefaultStyle(i);
                            }
                        }
                    };

                    $scope.setAllAppToDefaultStyle = function() {
                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            $scope.setAppToDefaultStyle(i);
                        }
                        $scope.compData.JS.selectdAppData = null;
                        $scope.compData.JS.selectdAppIndex = null;
                    };

                    $scope.setAppToSelectedStyle = function(appIndex) {
                        $scope.compData.JS.appconfig[appIndex]['icclass'] = $scope.appiconStyleSelected;
                        $scope.compData.JS.appconfig[appIndex]['iclass'] = $scope.appimageStyleSelected;
                        $scope.compData.JS.appconfig[appIndex]['thclass'] = $scope.appTextHolderStyleSelected;
                        $scope.compData.JS.appconfig[appIndex]['tclass'] = $scope.appTextStyleSelected;
                        if ($scope.compData.JS.appconfig[appIndex]['changeclass']) {
                            $scope.compData.JS.appconfig[appIndex]['tclass'] = $scope.compData.JS.appconfig[appIndex]['tclass'] + ' appnameanimclass' + appIndex;
                        }
                        $scope.compData.JS.appconfig[appIndex]['finalimage'] = $scope.compData.JS.appconfig[appIndex]["clickedimage"];
                        $scope.compData.JS.appBackgroundStyle[appIndex] = {
                        		"background-image" : "url('" + $scope.compData.JS.appconfig[appIndex]['clickedimage'] + "')",
                        		"background-position" : "center center",
                        		"background-size" : "cover"
                        };
                        //设置APP尖角的颜色
                        $scope.compData.JS.tineStyle = $scope.compData.JS.appconfig[appIndex]['tineColor'];
                        $scope.compData.JS.appconfig[appIndex]['selected'] = true;
                    };

                    $scope.setAppToDefaultStyle = function(appIndex) {
                        $scope.compData.JS.appconfig[appIndex]['icclass'] = $scope.appiconStyle;
                        $scope.compData.JS.appconfig[appIndex]['iclass'] = $scope.appimageStyle;
                        $scope.compData.JS.appconfig[appIndex]['thclass'] = $scope.appTextHolderStyle;
                        $scope.compData.JS.appconfig[appIndex]['tclass'] = $scope.appTextStyle;
                        if ($scope.compData.JS.appconfig[appIndex]['changeclass']) {
                            $scope.compData.JS.appconfig[appIndex]['tclass'] = $scope.compData.JS.appconfig[appIndex]['tclass'] + ' appnameanimclass' + appIndex;
                        }
                        $scope.compData.JS.appconfig[appIndex]['finalimage'] = $scope.compData.JS.appconfig[appIndex]["defaultimage"];
                        $scope.compData.JS.appBackgroundStyle[appIndex] = {
                        		"background-image" : "url('" + $scope.compData.JS.appconfig[appIndex]['defaultimage'] + "')",
                        		"background-position" : "center center",
                        		"background-size" : "cover"
                        };
                        $scope.compData.JS.appconfig[appIndex]['selected'] = false;
                    };

                    $scope.splitString = function(input) {
                        $scope.array = input.split(',');
                        return $scope.result = $scope.array;
                    };

                    // BEGIN SCG TOOLBAR V5R5C60LG005 Defect: DTS2015091711704 K70924 18.09.2015
                    $scope.preSetRedDot = function(eventObject, deferred) {

                        var appDetail = undefined;

                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            var output = $scope.splitString(eventObject.appname);
                            if (output != null && output.length > 1) {
                                for (var i = 0; i < output.length; i++) {
                                    if (null == appDetail || undefined == appDetail) {
                                        appDetail = $scope.searchAppDetails('name', output[i]);
                                    }
                                }
                            } else {
                                appDetail = $scope.searchAppDetails('name', eventObject.appname);
                            }
                        }

                        if (null != appDetail) {
                            eventObject['appid'] = appDetail.appdata.appid;
                            var appIdx = appDetail.appindex;

                            coreService.fireEvent($scope.cid, 'redDotPreSet', eventObject);
                            $scope.compData.JS.appconfig[appIdx]['redDotSrvSet'] = true;
                        }


                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['preSetRedDot'] = $scope.preSetRedDot;
                    // END SCG TOOLBAR V5R5C60LG005 Defect: DTS2015091711704 K70924 18.09.2015
                    //BEGIN Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature
                    $scope.setRedDot = function(eventObject, deferred) {

                        var appDetail = null;

                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            appDetail = $scope.searchAppDetails('name', eventObject.appname);
                        }

                        if (null != appDetail) {
                            var redDotDiv = $element.children()[appDetail.appindex].children[0];
                            var styleDisp = redDotDiv.style.getPropertyValue('display');
                            eventObject['appid'] = appDetail.appdata.appid;
                            var appIdx = appDetail.appindex;

                            if (null == styleDisp || styleDisp == 'none') {
                                redDotDiv.style.setProperty('display', 'block');

                                coreService.fireEvent($scope.cid, 'redDotSet', eventObject);
                                $scope.compData.JS.appconfig[appIdx]['redDotSrvSet'] = true;
                            }
                        }

                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['setRedDot'] = $scope.setRedDot;

                    $scope.clearRedDot = function(eventObject, deferred) {

                        var appDetail = null;
                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            //appDetail = $scope.searchAppDetails('name', eventObject.appname);
                            var output = $scope.splitString(eventObject.appname);
                            if (output != null && output.length > 1) {
                                for (var i = 0; i < output.length; i++) {
                                    if (null == appDetail || undefined == appDetail) {
                                        appDetail = $scope.searchAppDetails('name', output[i]);
                                    }
                                }
                            } else {
                                appDetail = $scope.searchAppDetails('name', eventObject.appname);
                            }
                        }

                        if (null != appDetail) {
                            $scope.clearAppRedDot(appDetail.appindex, appDetail.appdata.appid);
                        }

                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['clearRedDot'] = $scope.clearRedDot;

                    $scope.clearAppRedDot = function(index, appid) {
                        var redDotDiv = $element.children()[index].children[0];
                        var styleDisp = redDotDiv.style.getPropertyValue('display');
                        var redDotSrvSet = $scope.compData.JS.appconfig[index]['redDotSrvSet'];

                        if (styleDisp == 'block') {
                            redDotDiv.style.setProperty('display', 'none');
                            coreService.fireEvent($scope.cid, 'redDotCleared', {
                                'appid': appid
                            });
                            $scope.compData.JS.appconfig[index]['redDotSrvSet'] = false;
                        } else if (redDotSrvSet) {
                            coreService.fireEvent($scope.cid, 'redDotCleared', {
                                'appid': appid
                            });
                            $scope.compData.JS.appconfig[index]['redDotSrvSet'] = false;
                        }
                    }

                    //END Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature

                    $scope.handleAppClick = function(appData, appIndex) {
                        var currentTime = new Date();
                        var differenceTime = currentTime.getTime() - $scope.lastClickTime.getTime();
                        if (differenceTime <= 400) {
                            return;
                        }
                        if (appData.linktype != '1') {
                            $scope.setAppSelectdToDefault(appIndex);
                            if ($scope.compData.JS.appconfig[appIndex]['selected']) {
                                coreService.fireEvent($scope.cid, 'closeapp');
                                $scope.compData.JS.appconfig[appIndex]['selected'] = false;
                                $scope.setAppToDefaultStyle(appIndex);
                                $scope.compData.JS.selectdAppData = null;
                                $scope.compData.JS.selectdAppIndex = null;
                                $scope.handleDisplayCDR(0,0);
                            } else {
                                var eventData = {
                                    "state": "0",
                                    "pageid": appData.pageid,
                                    "reload": '1'
                                };
                                coreService.fireEvent($scope.cid, 'openapp', eventData);
                                $scope.setAppToSelectedStyle(appIndex);
                                $scope.compData.JS.selectdAppData = appData;
                                $scope.compData.JS.selectdAppIndex = appIndex;

                                $scope.clearAppRedDot(appIndex, appData.appid);
                                $scope.handleDisplayCDR(1,0);
                            }
                        } else {
                            window.open(appData.url);
                        }
                        $scope.handleCDR(appData);
                        $scope.lastClickTime = currentTime;
                    };

                    $scope.handleCDR = function(appData) {
                        if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
                            $scope.compData.JS['cdrData'] = {};
                            $scope.compData.JS.cdrData = {
                                'pageId': $scope.pageID,
                                'componentId': appData.appid
                            };
                            coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
                        }
                    };

                    $scope.handleDisplayCDR = function(displayType,displayResult){
						if (coreUtils.cdrUtils.canWriteUIDisplayCDR($scope.compData.JS.cdrConfig)) {
							$scope.compData.JS['cdrData'] = {};
							$scope.compData.JS.cdrData = {
								'pageId' : $scope.pageID,
								'displayType' : displayType,
								'displayResult' : displayResult
							};
							coreUtils.cdrService($scope.compData.JS.cdrConfig.uidisplaycdr, $scope.compData.JS.cdrData);
						}
					};

                    $scope.selectApp = function(eventObject, deferred) {
                        $scope.setAllAppToDefaultStyle();
                        var appDetail = null;
                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            //appDetail = $scope.searchAppDetails('name', eventObject.appname);
                            var output = $scope.splitString(eventObject.appname);
                            if (output != null && output.length > 1) {
                                for (var i = 0; i < output.length; i++) {
                                    if (null == appDetail || undefined == appDetail) {
                                        appDetail = $scope.searchAppDetails('name', output[i]);
                                    }
                                }
                            } else {
                                appDetail = $scope.searchAppDetails('name', eventObject.appname);
                            }
                        } else if (eventObject.pageId != null) {
                            appDetail = $scope.searchAppDetails('pageid', eventObject.pageId);
                        }
                        if (null != appDetail) {
                            $scope.setAppToSelectedStyle(appDetail.appindex);
                            $scope.compData.JS.selectdAppData = appDetail.appdata;
                            $scope.compData.JS.selectdAppIndex = appDetail.appindex;
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };

                    $scope.searchAppDetails = function(searchKey, searchValue) {
                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            var foundValue = $scope.compData.JS.appconfig[i][searchKey];
                            if (null == foundValue) {
                                return null;
                            } else if (foundValue === searchValue) {
                                return {
                                    'appindex': i,
                                    'appdata': $scope.compData.JS.appconfig[i]
                                };
                            }
                        }
                        return null;
                    };

                    $scope.processStyle = function() {
                        var mainStyle = JSON.stringify($scope.compData.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle($scope.classid, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appiconstyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appiconStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appiconstyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appiconStyle, '.sel', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appimagestyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appimageStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appimagestyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appimageStyle, '.sel', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnamestyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnamestyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextStyle, '.sel', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnameholderstyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextHolderStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnameholderstyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextHolderStyle, '.sel', mainStyle);

                    };

                    $scope.initStyle = function() {
                        $scope.appiconbarStyle = $scope.cid;
                        $scope.appiconStyle = $scope.cid + "-aicos";
                        $scope.appiconStyleSelected = $scope.cid + "-aicos sel";
                        $scope.appimageStyle = $scope.cid + "-aimgs";
                        $scope.appimageStyleSelected = $scope.cid + "-aimgs sel";
                        $scope.appTextHolderStyle = $scope.cid + "-atxths";
                        $scope.appTextHolderStyleSelected = $scope.cid + "-atxths sel";
                        $scope.appTextStyle = $scope.cid + "-atxts";
                        $scope.appTextStyleSelected = $scope.cid + "-atxts sel";
                    };
                    $scope.formatStyleData = function(styleData) {
                        styleData = styleData.replace(/","/g, ';').replace(/":"/g, ':').replace(/\\/g, '').replace(/{"/, '{').replace(/"}/, '}');
                        return styleData;
                    };

                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    
                    $scope.getStatus = function(data) {
                    	if(data){
                    		$scope.compData.JS.Status = data.status;
                    	}
                    };
                    
                    $scope.requestQuery = function(data){
                    	if((data.pageid == "itraffic"
                    		||data.pageid == "itraffic0"
                    		||data.pageid == "itraffic1"
                    		||data.pageid == "itraffic2"
                    		||data.pageid == "itraffic3"
                    		||data.pageid == "itraffic4"
                    		||data.pageid == "itraffic5") && $scope.compData.JS.requestQuery && $scope.compData.JS.Status == 0){
                   		 	coreService.fireEvent($scope.cid, 'query');
                    	}
                    };
                    
                    $scope.eventMap['getStatus'] = $scope.getStatus;
                    $scope.eventMap['requestQuery'] = $scope.requestQuery;
                    $scope.eventMap['selectApp'] = $scope.selectApp;
                    $scope.eventMap['setAllAppToDefaultStyle'] = $scope.setAllAppToDefaultStyle;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });

                    $scope.updateAppNameStyle = function() {
                        $timeout(function() {
                            var allAppElement = $element[0].querySelectorAll('.iappiconholderlbar-atxths');
                            if (allAppElement.length > 0) {
                                for (var i = 0; i < allAppElement.length; i++) {
                                    if (allAppElement[i].children[0].clientWidth > allAppElement[i].clientWidth) {
                                        var extraWidth = (allAppElement[i].children[0].clientWidth - allAppElement[i].clientWidth) + 2;
                                        var csstext = "appnameanim" + i + "{0% {left: 2px;} 100% {left: -" + extraWidth + "px;}}";
                                        var sheets = top.document.styleSheets;
                                        var lastSheet = null;
                                        var len = 0;
                                        for (var j in sheets) {
        									//firefox 非同源css操作会报insecure错误，所以此处需要捕获异常
        									try{
        										if (sheets[j].cssRules && sheets[j].title != 'toolbar') {
        											lastSheet = sheets[j];
        											len = sheets[j].cssRules.length;
        											break;
        										}
        									}
        									catch(e){}
        								}
                                        
                                        try {
                                            lastSheet.insertRule("@-webkit-keyframes " + csstext, len);
                                        } catch (e) {
                                            try {
                                                lastSheet.insertRule("@keyframes  " + csstext, len);
                                            } catch (e) {
                                                try {
                                                    lastSheet.insertRule("@-moz-keyframes  " + csstext, len);
                                                } catch (e) {
                                                    try {
                                                        lastSheet.insertRule("@-o-keyframes  " + csstext, len);
                                                    } catch (e) {
                                                        throw e;
                                                    }
                                                }
                                            }
                                        }
                                        var appNameAnimClassData = {
                                            '-moz-animation': 'appnameanim' + i + ' 10s linear infinite',
                                            '-webkit-animation': 'appnameanim' + i + ' 10s linear infinite',
                                            'animation': 'appnameanim' + i + ' 10s linear infinite'
                                        };
                                        appNameAnimClassData = $scope.formatStyleData(JSON.stringify(appNameAnimClassData));
                                        coreService.commonServiceRef.appendStyle('.appnameanimclass' + i, '', appNameAnimClassData);
                                        $scope.compData.JS.appconfig[i]['tclass'] = $scope.compData.JS.appconfig[i]['tclass'] + " appnameanimclass" + i;
                                        $scope.compData.JS.appconfig[i]['changeclass'] = true;
                                        //console.log(csstext, sheets.length);
                                    }
                                }
                            }
                        });
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'iappiconholderlbar';
                scope.init();
            }
        };
    }
]);
uiCore.directive('ipopuplang', function() {
    return {
        restrict: 'AE',
        replace: false,
        templateUrl: function(elem, attrs) {
            return attrs.templateurl;
        },
        controller: [
            '$scope',
            function($scope) {}
        ],
        link: function(scope, element, attrs) {}
    };
});
uiCore.directive('inputbox', function () {
	return {
		restrict : 'EA',
		replace : true,
		scope : {},
		require : '^pid',
		template : '<div class=\'ui-com-textarea-feedback\'    ng-click=\'click();$event.stopPropagation();\'>' + '<textarea autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ng-style=\'style\' class=\'textarea-input rtlstyle\' placeholder={{compData.JS.tips}} ng-blur=\'blur();\' ng-focus=\'focus();\'  ng-model=\'compData.JS.content\' ng-trim=\'false\'></textarea>' + '<div class=\'textarea-notice\' ng-show=\'compData.JS.isShowNotice\'><b class=\'textarea-num\' ng-style="counterStyle">{{compData.JS.maxLength-compData.JS.content.length}}</b><span class=\'textarea-text\'>{{compData.JS.unit}}</span></div>' + '</div>',
		controller : [
			'$scope',
			'$element',
			'$attrs',
			'coreService',
			'coreUtils',
			'$timeout',
			function ($scope, $element, $attrs, coreService, coreUtils, $timeout) {
				$scope.eventMap = {};
				$scope.compData = {};
				$scope.$on($attrs['cid'] + '_handleEvent', function (event, cevent, args, deferred) {
					if ($scope.eventMap[cevent]) {
						var result = $scope.eventMap[cevent](args);
						if (null != deferred && result) {
							deferred.resolve();
						}
					}
				});
				$scope.click = function () {
					setStyle({}); //coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'btnclick', $attrs['eventdata']);
				};
				$scope.blur = function () {
					
					//Fall - back logic to handle placeholder not supported.
                    if ($scope.isPlaceholderSupported()) {
                    	$scope.compData.JS.tips = $scope.tips;
					}
                    else {
                    	var inputbox = $element[0].querySelector('textarea');
                    	if(inputbox.value.trim() == ''||inputbox.value.trim()==$scope.tips) {
                    		$timeout(function() {            				
                    			inputbox.value = $scope.tips;
        					});
                    	}
                    }
					//  top.document.querySelector(".ilinebarholder ").style.bottom="0";
					// top.window.scroll(0, top.document.body.scrollHeight);
                    
//                    if($scope.moveFlag){
//                    	$scope.moveFlag = false;
//						coreService.fireEvent($element.attr('cid'),"moveInputbox",{'moveFlag':false});
//                    }
				};
			 
				$scope.focus = function () {
                    if ($scope.isPlaceholderSupported()) {
                    	$scope.compData.JS.tips = '';
					}
                    else {
                    	var inputbox = $element[0].querySelector('textarea');
                    	
                    	if(inputbox.value == $scope.tips) {
                    		inputbox.value = '';
                    	}
                    }
//					setTimeout(function(){
//						if($element[0].getBoundingClientRect().top < 0){
//						$scope.moveFlag = true;
//						coreService.fireEvent($element.attr('cid'),"moveInputbox",{'moveFlag':true});
//						}
//					},500);
				};
				$scope.$watch('compData.JS.content', function (newv, old) {

					if (newv.length > $scope.compData.JS.maxLength) {

						$scope.compData.JS.content = $scope.content;
					} else {
						$scope.content = $scope.compData.JS.content;

					}
				});
				$scope.init = function () {
					var defaultProp = {
						CSS : {},
						JS : {
							maxLength : 1024,
							minLength : 1,
							unit : 'words',
							invalideStyle : {
								'border-color' : 'red'
							},
							defaultStyle : {
								'border-color' : ''
							},
							counterStyle : {
								'color' : '#46a3ff',
							},
							fontStyle : {
								'color' : '#656466',
							}
						}
					},
					
					properties = coreService.getInitProperties($attrs['cid']) || {},
					jsProp = properties.JS || {},
					cssProp = properties.CSS || {},
					jsData = coreUtils.String2JSON($attrs['jsdata']),
					cssData = coreUtils.String2JSON($attrs['cssdata']);
					$scope.compData.JS = coreUtils.extendDeep(defaultProp.JS, jsProp, jsData);
					$scope.compData.CSS = coreUtils.extendDeep(defaultProp.CSS, cssProp, cssData);
					$element.css($scope.compData.CSS);
					$scope.tips = $scope.compData.JS.tips;
					$scope.compData.JS.content = '';
					$scope.counterStyle = $scope.compData.JS.counterStyle;
					$scope.fontStyle = $scope.compData.JS.fontStyle;
					//resolve when scrol feedback,the parent page alse scroll
					(function () {
						var inputbox = $element[0].querySelector('textarea');
						var _lastYPos = 0;
						var _currentYPos = 0;
						var moveFlag = false;
						var touchFlag = false;
						var start = function (e) {
						    touchFlag = true;
							_lastYPos = e.touches ? e.touches[0].pageY : e.pageY;
						};
						var move = function (e) {
							var currentScrollTop = inputbox.scrollTop;
							_currentYPos = e.touches ? e.touches[0].pageY : e.pageY;
							if (Math.abs(_currentYPos - _lastYPos) > 3 || moveFlag ||!touchFlag) {
								moveFlag = true;
								ydistance = _currentYPos - _lastYPos;
								inputbox.scrollTop = currentScrollTop - ydistance;
								e.stopPropagation();
								e.preventDefault();
							}
							_lastYPos = _currentYPos;
						};
						var end = function (e) {
							if (moveFlag) {
								e.stopPropagation();
								e.preventDefault();
							}
							_lastYPos = 0;
						    _currentYPos = 0;
							touchFlag = false;
							moveFlag = false;
						};
						inputbox.addEventListener('touchstart', start);
						inputbox.addEventListener('touchmove', move);
						inputbox.addEventListener('touchend', end);

					})();
					if (top.tlbs.languageID == "ar"){
						defaultProp.JS.tips=$scope.compData.JS.tips;
					}
				};
				$scope.isPlaceholderSupported = function() {
					var test = document.createElement('textarea');
					
                    if ('placeholder' in test) {
                    	return true;
					}
                    else {
                    	return false;
                    }
				};
				
				$scope.getContent = function () {
					return $scope.compData.JS.content;
				};
				$scope.clearContent = function () {
					setStyle($scope.compData.JS.defaultStyle);
					$scope.compData.JS.content = '';
					var inputbox = $element[0].querySelector('textarea');
					    inputbox.value = '';
                	
					if (!$scope.isPlaceholderSupported()) {
						$scope.blur();
					}
					
					return true;
				};
				var setStyle = function (style) {
					$scope.style = style;
					/*$timeout(function() {
					$scope.$apply();
					});*/
				};
				var validate = function () {
					if ($scope.compData.JS.content.trim().length < $scope.compData.JS.minLength) {	
						setStyle($scope.compData.JS.invalideStyle);
						$scope.compData.JS.content = $scope.compData.JS.content.trim();
						$scope.blur();
						return false;
					}
					return true;
				};
				var setDefaultText = function (style) {
					$scope.compData.JS.content = $scope.compData.JS.defaulttext;
				};
				var changeTextValuea = function (args) {
					if ($scope.compData.JS.dataMapping) {
						$scope.compData.JS.defaulttext = coreUtils.transfer(args, $scope.compData.JS.dataMapping);
						if ($scope.compData.JS.defaulttext == undefined)
							$scope.compData.JS.defaulttext = "";
					} else {
						$scope.compData.JS.defaulttext = args.defaulttext;
					}
					$scope.compData.JS.content = $scope.compData.JS.defaulttext;
				};
				
				// add begin by tWX330131.DTS2016121608528.
				var checkinput= function () {
					var inputbox = $element[0].querySelector('textarea');
					var msg;
					msg = inputbox.value.replace(/%/g,"%25");
					coreService.fireEvent($element.attr('cid'),"sendfeedback",{"feedback":msg});
				};
				// add end by tWX330131. 
				
				$scope.eventMap['checkinput'] = checkinput;
				$scope.eventMap['changeTextValuea'] = changeTextValuea;
				$scope.eventMap['setDefaultText'] = setDefaultText;
				$scope.eventMap['clear'] = $scope.clearContent;
				$scope.eventMap['validate'] = validate;
				coreService.registerComponentInstance($element.attr('cid'), $scope);
			}
		],
		link : function ($scope, $element, $attrs, ctl) {
			$scope.pageID = ctl.pageID;
			$scope.componentType = 'inputbox';
			$scope.init();
		}
	};
});
/**
 * directive:richtext
 * usage:<richtext>package name</richtext>
 */
uiCore.directive('richtext', function () {
	return {
		restrict : 'EA',
		replace : true,
		require : '^pid',
		scope : {
			param : '=param'
		},
		template : '<div class=\'ui-com-link\'  ng-click=\'click();\'></div>',
		controller : [
			'$scope',
			'$element',
			'$attrs',
			'coreService',
			'coreUtils',
			function ($scope, $element, $attrs, coreService, coreUtils) {
				var isOpera = /preto/i.test(navigator.userAgent) || /opera/i.test(navigator.userAgent);
				var IEadjust = function () {
					var docM = document.documentMode;
					var ua = navigator.userAgent;
					return docM < 10 ? true : false;
				}
				$scope.eventMap = {};
				$scope.compData = {
					'CSS' : {},
					'JS' : {
						'linkSupport' : false,
						'supportIE' : false,
						'addCSS' : false
					}
				};
				$scope.compData.defaultRange = {
					"defaultRange" : {
						"c" : "#8A0808"
					},
					"range1" : {
						"c" : "#6DB312",
						"e" : "1",
						"h" : "50",
						"l" : "0"
					},
					"range2" : {
						"c" : "#FFA500",
						"e" : "1",
						"h" : "80",
						"l" : "51"
					},
					"range3" : {
						"c" : "#FF0000",
						"e" : "1",
						"h" : "95",
						"l" : "81"
					},
					"range4" : {
						"c" : "#8A0808",
						"e" : "1",
						"h" : "100",
						"l" : "96"
					}
				};

				$scope.$on($attrs['cid'] + '_handleEvent', function (event, cevent, args, deferred) {
					if ($scope.eventMap[cevent]) {
						$scope.eventMap[cevent](args);
						if (null != deferred) {
							deferred.resolve();
						}
					}
				});
				var feedbackTextValue = function (args){
					if(args.respparam && args.respparam.success) {
						$element[0].innerHTML = $scope.jsProp.successtext;
					}else {
						$element[0].innerHTML = $scope.jsProp.messagetext;
					}
				};
				
				var changeTextValue = function (args) {
					if ($scope.jsProp.dataMapping) {
						$scope.jsProp.text = coreUtils.transfer(args, $scope.jsProp.dataMapping);
						//show traffic detail actualdata value and formateddata value
						if($attrs['cid'] == $scope.jsProp.actualDataCid && $scope.jsProp.text && $scope.jsProp.text.length >0){
							$scope.jsProp.text = $scope.jsProp.text[0].actualdata;
						}
						if($attrs['cid'] == $scope.jsProp.formatedDataCid && $scope.jsProp.text && $scope.jsProp.text.length >0){
							$scope.jsProp.text = $scope.jsProp.text[0].formateddata;
						}
						if ($scope.jsProp.text == undefined || $scope.jsProp.text == ""){
							$scope.jsProp.text = "--";
						}
						//add begin by tWX330131 for DTS2017031508958
						if(isNaN($scope.jsProp.text) && ($attrs['cid'] == "textBalance" || $attrs['cid'] == "textBalanceh")){
							$scope.jsProp.text = "--";
						}
						//add end by tWX330131 for DTS2017031508958
						if($attrs['cid'] == $scope.jsProp.updatedTimeCid && $scope.jsProp.text && $scope.jsProp.text.length >0){
							$scope.jsProp.text = "【" + $scope.jsProp.text + "】";
							if ($scope.jsProp.text == undefined || $scope.jsProp.text == ""){
								$scope.jsProp.text = "【--】";
							}
						}
					} else {
						$scope.jsProp.text = args.text;
					}
					$element[0].innerHTML = $scope.jsProp.text;
				};
				var changeTextValueSlider = function (args) {
					if ($scope.jsProp.dataMapping && args.data) {
						args = args.data;
						$scope.jsProp.text = coreUtils.transfer(args, $scope.jsProp.dataMapping);
						if ($scope.jsProp.text == undefined)
							$scope.jsProp.text = "";
					}
					$element[0].innerHTML = $scope.jsProp.text;
				};
				var changeTextValueRaw = function (args) {
					$scope.jsProp.text = args.text;
					$element[0].innerHTML = $scope.jsProp.text;
				};
				var changeTextValueByconfig = function (args) {
					if(args && args.text_ar && top.tlbs.languageID == 'ar'){
						$scope.jsProp.text = args.text_ar;
					}else if(args && args.text){
						$scope.jsProp.text = args.text;
					}
					$element[0].innerHTML = $scope.jsProp.text;
				};
				$scope.checkforError = function (respData) {
					var responsedata1 = coreUtils.transfer(respData, $scope.compData.JS.errorMsgRespPath);
					if (responsedata1 == undefined || responsedata1.length == 0) {
						angular.element($element[0]).css({
							'display' : 'block'
						});
					} else {
						angular.element($element[0]).css({
							'display' : 'none'
						});

					}

					return;
				};
				var fillTextTemplate = function (args) {
					if ($scope.jsProp.dataMapping) {
						if($attrs['cid'] == "packnamevalue" && typeof($scope.jsProp.dataMapping) == "string"){
							$scope.jsProp.dataMapping = $scope.jsProp.dataMapping.split(",");
						}
						var param = [];
						param=coreUtils.transfer(args,$scope.jsProp.dataMapping);
						var template = $scope.jsProp.template;
						$scope.jsProp.text = template.replace(/\{[0-9]\}/g, function (s, i, str) {
								var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
								return param[index];
							});
						$element[0].innerHTML = $scope.jsProp.text;
					}
				};
				var fillTextTemplateName = function (args) {
					if ($scope.jsProp.dataMapping) {
						var param = [args.text];
						var template = $scope.jsProp.template;
						$scope.jsProp.text = template.replace(/\{[0-9]\}/g, function (s, i, str) {
								var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
								return param[index];
							});
						$element[0].innerHTML = $scope.jsProp.text;
					}
				};
				var showText = function (args) {
					angular.element($element[0]).css({
						'display' : 'block'
					});
				};
				var show= function (args) {
					angular.element($element[0]).css({
						"display" : "table-cell"
					});
				};
				var hideText = function (args) {
					angular.element($element[0]).css({
						'display' : 'none'
					});
				};
				var resetvscroll = function (l) {
					var wrapperDiv = angular.element($element[0].parentNode);
					if (wrapperDiv && wrapperDiv[0] && wrapperDiv[0].className == 'ui-com-vscroll-wrapper') {
						if (isOpera) {
							wrapperDiv.css('-o-transform', 'translate(0,0)');
							wrapperDiv.css('transform', 'translate(0,0)');
						} else {
							wrapperDiv.css('-webkit-transform', 'translate3d(0,0,0)');
							wrapperDiv.css('-moz-transform', 'translate3d(0,0,0)');

							wrapperDiv.css('-ms-transform', 'translate3d(0,0,0)');
							wrapperDiv.css('transform', 'translate3d(0,0,0)');
						}
					}
				};
				
				var updateSetupTimeTitle = function(param) {
					param.functionType = '0X580000';
					param.type = 'disable';
					
					if (param.key == '0') {
						param.time = $scope.compData.JS.time1;
					}
					if (param.key == '1') {
						param.time = $scope.compData.JS.time2;
					}
					if (param.key == '2') {
						param.time = $scope.compData.JS.time3;
					}
					if (param.key == '3') {
						param.time = $scope.compData.JS.time4;
					}
					
					var template = $scope.jsProp.text;
					var map = $scope.jsProp.dataMapping;
					var text = template.replace(/\{[0-9]\}/g, function (s, i, str) {
						var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
						return param[map[index]];
					});
					$element[0].innerHTML = text;
					
					//$element[0].innerHTML = $scope.compData.JS.text5 + $scope.compData.JS.text10 + $scope.compData.JS.text7  + ' ' + text1 + ' ' + $scope.compData.JS.text9 + ' ' + time + $scope.compData.JS.text8 + ' ' + ($scope.compData.JS.text11 || '');
				};
				$scope.eventMap["updateSetupTimeTitle"] = updateSetupTimeTitle;
				
				//获取流量查询页面用户类型...
				var getType = function (param) {
					var type = param.usertype || "Prepaid";
					$scope.jsProp = $scope.compData.JS.configType[type];
					$element[0].innerHTML = $scope.jsProp.text;
				};
				
				//埃及et版本，针对语音显示和更新的新增方法---strat
				var changeCallsTxt = function (args) {
					if($attrs['cid'] == "textCallsEtTxt") {
						$element[0].innerHTML = args.text0 || 0;
					}
					if($attrs['cid'] == "textCallsOtherTxt") {
						$element[0].innerHTML = args.text1 || 0;
					}
				}
				//埃及et版本，针对语音显示和更新的新增方法---end
				
				//埃及et版本下，针对选择语言弹不同语言的成功提示框---start
				var updateSuccessMsg = function(param){
					if(param && param.newlangId){
						$scope.jsProp.text = $scope.compData.JS['' + top.tlbs.languageID + '-' + param.newlangId];
					}
					$element[0].innerHTML = $scope.jsProp.text;
					var classes = $element[0].classList;
					if(param && param.newlangId && param.newlangId == 'ar'){
						classes.remove('enstyle');
						classes.add('arstyle');
					}else{
						classes.remove('arstyle');
						classes.add('enstyle');
					}
				};
				var updateMsgByLang = function (param) {
					var classes = $element[0].classList;
					if (param && param.newlangId) {
						if (param.newlangId == 'en') {
							$element[0].innerHTML = $scope.compData.JS.en;
							classes.remove('arstyle');
							classes.add('enstyle');
						}
						if (param.newlangId == 'ar') {
							$element[0].innerHTML = $scope.compData.JS.ar;
							classes.remove('enstyle');
							classes.add('arstyle');
						}
					}
				};
				//埃及et版本下，针对选择语言弹不同语言的成功提示框---end
				var changeStyle = function(param){
					if(param && param.state && $scope.compData.JS.states && $scope.compData.JS.states[param.state]){
						angular.element($element[0]).css(
							$scope.compData.JS.states[param.state]		
						);
					}
				}
				
				$scope.eventMap["updateMsgByLang"] = updateMsgByLang;
				$scope.eventMap["changeStyle"] = changeStyle;
				$scope.eventMap["changeCallsTxt"] = changeCallsTxt;
				$scope.eventMap["updateSuccessMsg"] = updateSuccessMsg;
				$scope.eventMap["getType"] = getType;
				$scope.eventMap["text.update2"] = changeTextValueByconfig;
				$scope.eventMap["resetvscroll"] = resetvscroll;
				$scope.eventMap['text.update'] = changeTextValue;
				$scope.eventMap['text.feedbackText'] = feedbackTextValue;
				$scope.eventMap['text.updateslider'] = changeTextValueSlider;
				$scope.eventMap['text.update1'] = changeTextValueRaw;
				$scope.eventMap['template.update'] = fillTextTemplate;
				$scope.eventMap['template.update1'] = fillTextTemplateName;
				$scope.eventMap['checkforError'] = $scope.checkforError;
				$scope.eventMap['showText'] = showText;
				$scope.eventMap['hideText'] = hideText;
				$scope.eventMap['show'] = show;
				$scope.init = function () {
					var properties = coreService.getInitProperties($attrs['cid']) || {},
					jsProp = properties.JS || {},
					cssProp = properties.CSS || {};
					$scope.jsProp = jsProp;
					$scope.cssProp = cssProp;
					$scope.compData['JS'] = $scope.jsProp;
					$scope.compData['CSS'] = $scope.cssProp;
					$element.css($scope.cssProp);
					if ($scope.compData.JS.supportIE) {
						if ($scope.compData.JS.addCSS && IEadjust()) {
							angular.element($element[0]).css({
								'display' : 'inline'
							});
						}
					}
					if ($scope.jsProp.text) {
						$element[0].innerHTML = $scope.jsProp.text
					};
					$scope.$watch($scope.param, function (newValue) {
						if ($scope.param) {
							$scope.update();
						}
					});
				};

				$scope.getPercentageColor = function () {
					var valueSet = undefined;
					for (p in $scope.styleSet) {

						var dataSet = p.split("_");

						if (dataSet.length > 0) {

							if (parseInt(dataSet[0]) <= $scope.jsProp.percent && $scope.jsProp.percent <= parseInt(dataSet[1])) {
								return $scope.styleSet[p];
							}
						}
					}
					return $scope.styleSet.defaultset;
				};

				$scope.convertRangeConfig = function () {
					$scope.styleSet = {};
					for (var i = 1; i <= 4; i++) {
						$scope.convertSingleRangeConfig('range' + i);
					}
					$scope.styleSet['defaultset'] = {
						'activecolor' : $scope.jsProp.defaultRange.c,
					};
				};
				$scope.convertSingleRangeConfig = function (singleRange) {
					var singleRangeConfig = $scope.jsProp[singleRange];
					if (null != singleRangeConfig.e && singleRangeConfig.e == 1) {
						$scope.styleSet[singleRangeConfig.l + '_' + singleRangeConfig.h] = {
							'activecolor' : singleRangeConfig.c,
						};
					}
				};

				$scope.update = function () {
					if (typeof $scope.param == 'string') {
						$scope.param = coreUtils.String2JSON($scope.param);
					}
					$scope.jsProp = coreUtils.extendDeep($scope.compData.defaultRange, $scope.jsProp, $scope.param.JS || {});
					$scope.cssProp = coreUtils.extendDeep($scope.cssProp, $scope.param.CSS || {});
					if ($scope.jsProp.percent || $scope.jsProp.percent == 0) {
						$scope.convertRangeConfig();
						var colorSet = $scope.jsProp.colorSet || {
							'#6DB312' : [
								0,
								60
							],
							'#FF7F00' : [
								61,
								90
							],
							'#FF1111' : [
								91,
								100
							],
							'#FF1111' : [
								101,
								200
							]
						},
						//color = getPercentageColor(parseInt($scope.jsProp.percent), colorSet);
						color = $scope.getPercentageColor().activecolor;
						if (color) {
							$scope.cssProp.color = color;
						}
					}
					$element.css($scope.cssProp);
//					if($attrs['cid'] == "textvalue"){
//						$scope.jsProp.text = "--";
//					}
					$element[0].innerHTML = $scope.jsProp.text
				};
				$scope.click = function (e) {
					if (null != $scope.compData.JS.clickable && $scope.compData.JS.clickable && !$scope.compData.JS.linkSupport) {
						coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'click', $attrs['eventdata']);
					} else if ($scope.compData.JS.linkSupport && $scope.compData.JS.openurl) {
						coreService.commonServiceRef.dynamicService(null, {
							"serviceType" : "urlservice",
							"openurl" : $scope.compData.JS.openurl
						});
						if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
							$scope.compData.JS['cdrData'] = {};
							$scope.compData.JS.cdrData = {
								'pageId' : $scope.pageID,
								'componentId' : $scope.cid,
								'iseComp' : '1'
							};
							coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
						}
					}
				};
				coreService.registerComponentInstance($element.attr('cid'), $scope);
			}
		],
		link : function ($scope, $element, $attrs, ctl) {
			$scope.pageID = ctl.pageID;
			$scope.cid = $attrs.cid;
			$scope.componentType = 'richtext';
			$scope.init();
		}
	};
});
//usage:<button></button>
uiCore.directive('tbbutton', function() {
    return {
        restrict: 'EA',
        replace: true,
        require: '^pid',
        template: '<div class=\'tb-ui-com-btn {{::compData.JS.customclass}}\' ng-click="bclicked();$event.preventDefault();$event.stopPropagation();"><div class=\'tb-ui-com-btn-desc\' ng-style="compData.JS.textStyle">{{param.JS.name || jsProp.name}}{{countDown}}</div></div>',
        scope: {
            param: '=param',
            eventdata: '=eventdata'
        },
        controller: [
            '$scope',
            '$element',
            '$attrs',
            'coreService',
            'coreUtils',
            'Const',
            function($scope, $element, $attrs, coreService, coreUtils, Const) {
                $scope.eventMap = {};
                $scope.compData = {
                    'CSS': {

                    },
                    'JS': {
						'customclass':'',
                        'fontSize': '0.8em',
                        'eventMapping': '',
                        'timerConfig': {
                            'timerValue': '0',
                            'timerText': '',
                        },
                        'disableCss': {

                        },
						'disablePermanent':false,
                        'textStyle': {

                        },
                        'cdrConfig': {
                            'uitracingcdr': {
                                'cdrType': 'uitracingcdr',
                                'enable': true,
                                'storeData': false
                            }
                        },
                        'serviceData': false
                    }
                };
                $scope.countDown = "";
                $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                    if ($scope.eventMap[cevent]) {
                        $scope.eventMap[cevent](args);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    }
                });
                $scope.init = function() {
                    coreService.registerComponentInstance($element.attr('cid'), $scope);
                    var properties = coreService.getInitProperties($attrs['cid']) || {},
                        jsProp = properties.JS || {},
                        cssProp = properties.CSS || {},
                        jsData = coreUtils.String2JSON($attrs['jsdata']),
                        cssData = coreUtils.String2JSON($attrs['cssdata']);
                    $scope.jsProp = coreUtils.extendDeep($scope.compData.JS, jsProp, jsData);
                    $scope.cssProp = coreUtils.extendDeep($scope.compData.CSS, cssProp, cssData);
                    $scope.disableCSS = coreUtils.extendDeep(angular.copy($scope.cssProp), $scope.compData.JS.disableCss);
                    coreUtils.extendDeep($scope.compData.CSS, $scope.cssProp);
                    coreUtils.extendDeep($scope.compData.JS, $scope.jsProp);
                    //$scope.compData['JS'] = $scope.jsProp;
                    //$scope.compData['CSS'] = $scope.cssProp;
                    $scope.name = $scope.jsProp.name || '';
                    coreUtils.extendDeep($scope.compData.JS.textStyle, {
                        'fontSize': $scope.compData.JS.fontSize || $scope.compData.JS.textStyle.fontSize
                    });
					if($attrs['cid']=="psbtn1"){
                    	if($scope.eventdata.out == "HV" || $scope.eventdata.out == "Connect" || $scope.eventdata.out == "MI New Platform") {
                    		$attrs['event'] = "becomeselectbtn";
                    		$scope.jsProp.name = "SELECT";
                    	}
                    }
                    $scope.applyStyle();
                    $scope.$watch($scope.param, function() {
                        if ($scope.param) {
                            $scope.update();
                        }
                    });
                    $scope.$watch($scope.eventdata, function() {});
                };
                $scope.applyStyle = function() {
                    if (!$scope.jsProp.disable) {
                        $element.css($scope.cssProp);
                    } else {
                        $element.css($scope.disableCSS);
                    }
                };
                $scope.bclicked = function() {
                    if ($attrs['cid']) {
                        var eventData = coreUtils.extendDeep({}, $scope.eventdata || $scope.edata);
                        if (null != $scope.compData.JS.serviceData && $scope.compData.JS.serviceData) {
                            eventData = $scope.loadServiceData(eventData);
                        }
                        if (!$scope.jsProp.disable && $scope.compData.JS.timerConfig.timerValue == 0) {
                        	//add begin by tWX330131 for * DTS2017031504965 
                        	if($element.attr('cid') == "usagefailmsgbtn"){
                        		coreService.fireEvent($element.attr('cid'), 'btnclick');
                        	}else{
                        		coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'btnclick', eventData);
                        	}
                        	//add end by tWX330131 for * DTS2017031504965 
                        } else if (!$scope.jsProp.disable && $scope.compData.JS.timerConfig.timerValue > 0) {
                            coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'btnclick', eventData);
                            $scope.diableBtn();
                            $scope.startTimer(); 
                        }
                        if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
                        	if (eventData.flag != null) {
                        		if (eventData.flag == '0') {
                        			eventData.serflag = '1'
                        		}
                        		if (eventData.flag == '1' || eventData.flag == '2') {
                        			eventData.serflag = '2'
                        		}
                        		if ($element.attr('cid') == 'isubscribebutton') {
                        			eventData.serflag = '';
                        			eventData.cateName = '';
                        		}
                        	}
                            $scope.compData.JS['cdrData'] = {};
                            $scope.compData.JS.cdrData = {
                                'pageId': $scope.pageID,
                                'componentId': $element.attr('cid'),
                                'policyName': eventData.policyName || '',
                                'sername': eventData.sername || eventData.notifType || eventData.cateName || '',
                                'serflag': eventData.serflag || ''
                            };
                            coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
                        }
                    } else if (null != $attrs['cdr'] && "1" == $attrs['cdr']) {
                        var cdrConfig = {
                            'cdrType': 'uitracingcdr',
                            'enable': true,
                            'storeData': $element.attr('storedata') == 'true'
                        };
                        $scope.compData.JS['cdrData'] = {};
                        $scope.compData.JS.cdrData = {
                            'pageId': $scope.pageID,
                            'componentId': $element.attr('ccid') || '',
                            'iseComp': $element.attr('isecomp') || '0',
                        };
                        coreUtils.cdrService(cdrConfig, $scope.compData.JS.cdrData);
                        var componentId = $element.attr('ccid') || '';
                        if ('msgdlg.close' == componentId || 'msgdlg.cancel' == componentId) {
                            top.tlbs.notificationCdrData = null;
                        }
                    }
                };
                $scope.loadServiceData = function(eventData) {
                    if (typeof eventData == 'string') {
                        eventData = coreUtils.String2JSON(eventData);
                    }
                    if (null != top.tlbs.cdrData) {
                        eventData['epageId'] = top.tlbs.cdrData.pageId || '';
                    }
                    return eventData;
                };
                $scope.startTimer = function() {
                    $scope.countDown = $scope.compData.JS.timerConfig.timerValue;
                    $scope.countDownText = $scope.jsProp.name;
                    $scope.jsProp.name = $scope.compData.JS.timerConfig.timerText;
                    var countDownTimer = setInterval(function() {
                        if ($scope.countDown <= 0) {
                            clearInterval(countDownTimer);
                            $scope.countDown = "";
                            $scope.jsProp.name = $scope.countDownText;
                            $scope.enable();
                            $scope.$apply();
                            return;
                        }
                        $scope.countDown--;
                        $scope.$apply();
                    }, 1000);
                }
                $scope.updateEventData = function(eventData) {
                	if(eventData && eventData.flag && eventData.flag=="updatepkginfo"){
                		 $scope.edata ={
                    			"id": eventData.campaign.packageID || "",
                    			'childid':'',
                    			"categoryName" : eventData.campaign.categoryName|| "",
                				"packageName" :eventData.campaign.packageName|| "",
                				"cdrPrice" : eventData.campaign.packagefee|| "",
                				"operation" : "1",
                				"CategoryId" : "",
                    	};
                	}else{
                		 $scope.edata = coreUtils.extendDeep({}, eventData);
                	}
                };
                $scope.updateEvent = function(event) {
                    if ($scope.compData.JS.eventMapping.length > 0) {
                        $attrs['event'] = coreUtils.transfer(event, $scope.compData.JS.eventMapping);
                    } else {
                        $attrs['event'] = event.name;
                    }
                };
                $scope.diableBtn = function(event) {
					$scope.jsProp.disable = true;
                    $scope.applyStyle();
                    return true;
                };
				$scope.diableBtnPermanent = function (event) {
					$scope.jsProp.disablePermanent = true;
					$scope.jsProp.disable = true;
					$scope.applyStyle();
					return true;
				};
				$scope.enableBtnPermanent = function (event) {
					$scope.jsProp.disablePermanent = false;
					$scope.jsProp.disable = false;
					$scope.applyStyle();
					return true;
				};
				
				$scope.enableCStyle = function(event){
					$scope.jsProp.disablePermanent = false;
					$scope.jsProp.disable = false;
					
					$element.css($scope.disableCSS);
	                  
					return true;
				};
				
                $scope.enable = function(event) {
					if($scope.jsProp.disablePermanent)
						return;
                    $scope.jsProp.disable = false;
                    $scope.applyStyle();
                };
                $scope.update = function() {
                    if (typeof $scope.param == 'string') {
                        $scope.param = coreUtils.String2JSON($scope.param);
                    }
                    $scope.jsProp = coreUtils.extendDeep($scope.jsProp, $scope.param.JS || {});
                    $scope.cssProp = coreUtils.extendDeep($scope.cssProp, $scope.param.CSS || {});
                    $scope.disableCSS = coreUtils.extendDeep(angular.copy($scope.cssProp), $scope.compData.JS.disableCss);
                    $scope.applyStyle();
                };
                var changeTextValue = function(args) {
                    if ($scope.jsProp.dataMapping) {
                        $scope.jsProp.text = coreUtils.transfer(args, $scope.jsProp.dataMapping);
                    } else {
                        $scope.jsProp.text = args.text;
                    }
                    $scope.jsProp.name = $scope.jsProp.text;
                };
                //埃及切换语言成功，更新按钮名称
                $scope.updateSuccessBtn = function(args){
                	if(args && args.newlangId && args.newlangId == 'ar'){
                		$scope.jsProp.name = $scope.jsProp.textAr;
                	}else{
                		$scope.jsProp.name = $scope.jsProp.text;
                	}
                }
                
                $scope.updateBtnByLang = function (param) {
                	if (param && param.newlangId) {
                		if (param.newlangId == 'en') {
                			$scope.jsProp.name = $scope.jsProp.en;
                			$element.css({
                				'left': 'initial',
                				'right': '1em'
                			});
                		}
                		if (param.newlangId == 'ar') {
                			$scope.jsProp.name = $scope.jsProp.ar;
                			$element.css({
                				'left': '4.1em',
                				'right': 'initial'
                			})
                		}
                	}
                };
                //配置点击时，跳转的网址...
                $scope.openUrl = function() {
                	window.open($scope.jsProp.url);
                };
                //获取流量查询页面用户类型...
                $scope.setType = function (param) {
					type = param.usertype || "Prepaid";
					$scope.jsProp = $scope.compData.JS.configType[type];
					$scope.cssProp = coreUtils.extendDeep($scope.compData.CSS,$scope.compData.JS.configType[type]);
					$scope.applyStyle();
				};
                 var sendEventData = function() {
                	coreService.fireEvent($element.attr('cid'), 'clickselect', $scope.eventData);
                };
                
                $scope.checkSubResult = function(args){
                	
                	if(top.tlbs.showClose){}else{
                		if(args && args.respparam.subscribtionstatus == '0'){
                    		coreService.fireEvent($element.attr('cid'), 'subsuccess');
                    	}else if(args && args.respparam.subscribtionstatus == 'RP-00001'){
                    		coreService.fireEvent($element.attr('cid'), 'subfail');
                    	}else{
                    		coreService.fireEvent($element.attr('cid'), 'error');
                    	}
                	
                	}
                };
                
                $scope.eventMap['updateBtnByLang'] = $scope.updateBtnByLang;
                $scope.eventMap['sendEventData'] = sendEventData;
				$scope.eventMap['setType'] = $scope.setType;
                $scope.eventMap['openUrl'] = $scope.openUrl;
                $scope.eventMap['text.update'] = changeTextValue;
                $scope.eventMap['eventData.update'] = $scope.updateEventData;
                $scope.eventMap['event.update'] = $scope.updateEvent;
                $scope.eventMap['btn.disable'] = $scope.diableBtn;
                $scope.eventMap['btn.enableCStyle'] = $scope.enableCStyle;
				$scope.eventMap['btn.diableBtnPer'] = $scope.diableBtnPermanent;
				$scope.eventMap['btn.enableBtnPer'] = $scope.enableBtnPermanent;
                $scope.eventMap['btn.enable'] = $scope.enable;
                $scope.eventMap['updateSuccessBtn'] = $scope.updateSuccessBtn;
                $scope.eventMap['checkSubResult'] = $scope.checkSubResult;
            }
        ],
        link: function($scope, $element, $attrs, ctl) {
            $scope.pageID = ctl.pageID;
            $scope.componentType = 'tbbutton';
            $scope.init();
        }
    };
});
uiCore.directive("iconditioncheck",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"E",replace:true,template:"<div></div>",scope:{},require:"^pid",controller:["$scope","$element","$attrs","$interval",function(f,e,d,j){f.cid=d.cid;f.eventMap={};f.compData={CSS:{display:"none",width:"0em",height:"0em"},JS:{autochecktimer:"1",datapath:"",successdata:"",errordata:"",inprogressdata:"",eventdatakey:"",eventdatapath:""}};var h;var g=null;var i=0;f.extendComponentData=function(k){f.compData=a.extendDeep(f.compData,k)};f.init=function(){c.registerComponentInstance(f.cid,f);f.extendComponentData(c.getInitProperties(f.cid));e.css(f.compData.CSS)};f.startTask=function(l,k){if(angular.isDefined(h)){return}c.fireEvent(f.cid,"taskstart");h=j(function(){i=i+g.guiRefreshTime*1000;if(i<=g.timeoutVal*60000){c.fireEvent(f.cid,"inprogress",g)}else{f.endTask();c.fireEvent(f.cid,"checkerror")}},g.guiRefreshTime*1000);if(null!=k){k.resolve()}};f.endTask=function(l,k){g=null;if(angular.isDefined(h)){c.fireEvent(f.cid,"taskend");j.cancel(h);h=undefined}if(null!=k){k.resolve()}};f.validateData=function(n,k){if(null!=f.compData.JS.datapath&&f.compData.JS.datapath.length>0){var m=a.transfer(n,f.compData.JS.datapath);if(f.compData.JS.successdata===m){f.endTask();c.fireEvent(f.cid,"checksuccess")}else{if(f.compData.JS.errordata===m){f.endTask();c.fireEvent(f.cid,"checkerror")}else{if(f.compData.JS.inprogressdata===m){if(null!=f.compData.JS.eventdatapath&&null==g){var l=a.transfer(n,f.compData.JS.eventdatapath);g=l}f.startTask()}else{if(m===undefined){f.endTask();c.fireEvent(f.cid,"checkempty")}else{c.fireEvent(f.cid,"checkerror")}}}}}if(null!=k){k.resolve()}};f.validateDataPrivacy=function(n,k){if(null!=f.compData.JS.datapath&&f.compData.JS.datapath.length>0){var m=top.tlbs.locationprivacy;if(parseInt(f.compData.JS.successdata)===m){f.endTask();c.fireEvent(f.cid,"checksuccess")}else{if(parseInt(f.compData.JS.errordata)===m){f.endTask();c.fireEvent(f.cid,"checkerror")}else{if(f.compData.JS.inprogressdata===m){if(null!=f.compData.JS.eventdatapath&&null==g){var l=a.transfer(f.compData.JS.eventdatapath);g=l}f.startTask()}else{if(m===undefined){f.endTask();c.fireEvent(f.cid,"checkempty")}else{c.fireEvent(f.cid,"checkerror")}}}}}if(null!=k){k.resolve()}};f.updateprivacystatus=function(k){top.tlbs.locationprivacy=parseInt(k.privacystatus)};f.eventMap.startTask=f.startTask;f.eventMap.endTask=f.endTask;f.eventMap.validateData=f.validateData;f.eventMap.validateDataPrivacy=f.validateDataPrivacy;f.eventMap.updateprivacystatus=f.updateprivacystatus;f.$on(f.cid+"_handleEvent",function(n,l,m,k){f.eventMap[l](m,k)})}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="iconditioncheck";f.init()}}}]);
/**
 * @license
 * Video.js 7.0.3 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.videojs=e()}(this,function(){var d="7.0.3",t="undefined"!=typeof top.window?top.window:"undefined"!=typeof global?global:"undefined"!=typeof top.self?top.self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var i,g="undefined"!=typeof top.window?top.window:"undefined"!=typeof t?t:"undefined"!=typeof top.self?top.self:{},r={},n=Object.freeze({default:r}),s=n&&r||n,a="undefined"!=typeof t?t:"undefined"!=typeof top.window?top.window:{};"undefined"!=typeof top.document?i=top.document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=s);var p=i,o=void 0,u="info",l=[],c=function(t,e){var i=o.levels[u],r=new RegExp("^("+i+")$");if("log"!==t&&e.unshift(t.toUpperCase()+":"),l&&l.push([].concat(e)),e.unshift("VIDEOJS:"),g.console){var n=g.console[t];n||"debug"!==t||(n=g.console.info||g.console.log),n&&i&&r.test(t)&&n[Array.isArray(e)?"apply":"call"](g.console,e)}};(o=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];c("log",e)}).levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:u},o.level=function(t){if("string"==typeof t){if(!o.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level');u=t}return u},o.history=function(){return l?[].concat(l):[]},o.history.clear=function(){l&&(l.length=0)},o.history.disable=function(){null!==l&&(l.length=0,l=null)},o.history.enable=function(){null===l&&(l=[])},o.error=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("error",e)},o.warn=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("warn",e)},o.debug=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("debug",e)};var f=o;var m=function(t){for(var e="",i=0;i<arguments.length;i++)e+=t[i].replace(/\n\r?\s*/g,"")+(arguments[i+1]||"");return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t,e){return t.raw=e,t},T=Object.prototype.toString,S=function(t){return E(t)?Object.keys(t):[]};function k(e,i){S(e).forEach(function(t){return i(e[t],t)})}function C(i){for(var t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return Object.assign?Object.assign.apply(Object,[i].concat(e)):(e.forEach(function(t){t&&k(t,function(t,e){i[e]=t})}),i)}function E(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))}function w(t){return E(t)&&"[object Object]"===T.call(t)&&t.constructor===Object}function A(t,e){if(!t||!e)return"";if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(t);return i?i[e]:""}return""}var L=h(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);function P(t){return"string"==typeof t&&/\S/.test(t)}function O(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function x(){return p===g.document}function I(t){return E(t)&&1===t.nodeType}function D(){try{return g.parent!==g.self}catch(t){return!0}}function R(r){return function(t,e){if(!P(t))return p[r](null);P(e)&&(e=p.querySelector(e));var i=I(e)?e:p;return i[r]&&i[r](t)}}function M(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],n=p.createElement(t);return Object.getOwnPropertyNames(i).forEach(function(t){var e=i[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(f.warn(m(L,t,e)),n.setAttribute(t,e)):"textContent"===t?U(n,e):n[t]=e}),Object.getOwnPropertyNames(e).forEach(function(t){n.setAttribute(t,e[t])}),r&&et(n,r),n}function U(t,e){return"undefined"==typeof t.textContent?t.innerText=e:t.textContent=e,t}function N(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function B(t,e){return O(e),t.classList?t.classList.contains(e):(i=e,new RegExp("(^|\\s)"+i+"($|\\s)")).test(t.className);var i}function j(t,e){return t.classList?t.classList.add(e):B(t,e)||(t.className=(t.className+" "+e).trim()),t}function F(t,e){return t.classList?t.classList.remove(e):(O(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function H(t,e,i){var r=B(t,e);if("function"==typeof i&&(i=i(t,e)),"boolean"!=typeof i&&(i=!r),i!==r)return i?j(t,e):F(t,e),t}function V(i,r){Object.getOwnPropertyNames(r).forEach(function(t){var e=r[t];null===e||"undefined"==typeof e||!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})}function q(t){var e={},i=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";if(t&&t.attributes&&0<t.attributes.length)for(var r=t.attributes,n=r.length-1;0<=n;n--){var s=r[n].name,a=r[n].value;"boolean"!=typeof t[s]&&-1===i.indexOf(","+s+",")||(a=null!==a),e[s]=a}return e}function W(t,e){return t.getAttribute(e)}function z(t,e,i){t.setAttribute(e,i)}function G(t,e){t.removeAttribute(e)}function X(){p.body.focus(),p.onselectstart=function(){return!1}}function Y(){p.onselectstart=function(){return!0}}function $(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),i={};return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(i[t]=e[t])}),i.height||(i.height=parseFloat(A(t,"height"))),i.width||(i.width=parseFloat(A(t,"width"))),i}}function K(t){var e=void 0;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var i=p.documentElement,r=p.body,n=i.clientLeft||r.clientLeft||0,s=g.pageXOffset||r.scrollLeft,a=e.left+s-n,o=i.clientTop||r.clientTop||0,u=g.pageYOffset||r.scrollTop,l=e.top+u-o;return{left:Math.round(a),top:Math.round(l)}}function Q(t,e){var i={},r=K(t),n=t.offsetWidth,s=t.offsetHeight,a=r.top,o=r.left,u=e.pageY,l=e.pageX;return e.changedTouches&&(l=e.changedTouches[0].pageX,u=e.changedTouches[0].pageY),i.y=Math.max(0,Math.min(1,(a-u+s)/s)),i.x=Math.max(0,Math.min(1,(l-o)/n)),i}function J(t){return E(t)&&3===t.nodeType}function Z(t){for(;t.firstChild;)t.removeChild(t.firstChild);return t}function tt(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),I(t)||J(t)?t:"string"==typeof t&&/\S/.test(t)?p.createTextNode(t):void 0}).filter(function(t){return t})}function et(e,t){return tt(t).forEach(function(t){return e.appendChild(t)}),e}function it(t,e){return et(Z(t),e)}function rt(t){return void 0===t.button&&void 0===t.buttons||(0===t.button&&void 0===t.buttons||0===t.button&&1===t.buttons)}var nt=R("querySelector"),st=R("querySelectorAll"),at=Object.freeze({isReal:x,isEl:I,isInFrame:D,createEl:M,textContent:U,prependTo:N,hasClass:B,addClass:j,removeClass:F,toggleClass:H,setAttributes:V,getAttributes:q,getAttribute:W,setAttribute:z,removeAttribute:G,blockTextSelection:X,unblockTextSelection:Y,getBoundingClientRect:$,findPosition:K,getPointerPosition:Q,isTextNode:J,emptyEl:Z,normalizeContent:tt,appendContent:et,insertContent:it,isSingleLeftClick:rt,$:nt,$$:st}),ot=1;function ut(){return ot++}var lt={},ct="vdata"+(new Date).getTime();function ht(t){var e=t[ct];return e||(e=t[ct]=ut()),lt[e]||(lt[e]={}),lt[e]}function dt(t){var e=t[ct];return!!e&&!!Object.getOwnPropertyNames(lt[e]).length}function pt(e){var t=e[ct];if(t){delete lt[t];try{delete e[ct]}catch(t){e.removeAttribute?e.removeAttribute(ct):e[ct]=null}}}function ft(t,e){var i=ht(t);0===i.handlers[e].length&&(delete i.handlers[e],t.removeEventListener?t.removeEventListener(e,i.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,i.dispatcher)),Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers,delete i.dispatcher,delete i.disabled),0===Object.getOwnPropertyNames(i).length&&pt(t)}function mt(e,i,t,r){t.forEach(function(t){e(i,t,r)})}function gt(t){function e(){return!0}function i(){return!1}if(!t||!t.isPropagationStopped){var r=t||g.event;for(var n in t={},r)"layerX"!==n&&"layerY"!==n&&"keyLocation"!==n&&"webkitMovementX"!==n&&"webkitMovementY"!==n&&("returnValue"===n&&r.preventDefault||(t[n]=r[n]));if(t.target||(t.target=t.srcElement||p),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){r.preventDefault&&r.preventDefault(),t.returnValue=!1,r.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),t.cancelBubble=!0,r.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=i,t.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=i,null!==t.clientX&&void 0!==t.clientX){var s=p.documentElement,a=p.body;t.pageX=t.clientX+(s&&s.scrollLeft||a&&a.scrollLeft||0)-(s&&s.clientLeft||a&&a.clientLeft||0),t.pageY=t.clientY+(s&&s.scrollTop||a&&a.scrollTop||0)-(s&&s.clientTop||a&&a.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}var yt=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){yt=!0}});g.addEventListener("test",null,t),g.removeEventListener("test",null,t)}catch(t){}}();var vt=["touchstart","touchmove"];function _t(a,t,e){if(Array.isArray(t))return mt(_t,a,t,e);var o=ht(a);if(o.handlers||(o.handlers={}),o.handlers[t]||(o.handlers[t]=[]),e.guid||(e.guid=ut()),o.handlers[t].push(e),o.dispatcher||(o.disabled=!1,o.dispatcher=function(t,e){if(!o.disabled){t=gt(t);var i=o.handlers[t.type];if(i)for(var r=i.slice(0),n=0,s=r.length;n<s&&!t.isImmediatePropagationStopped();n++)try{r[n].call(a,t,e)}catch(t){f.error(t)}}}),1===o.handlers[t].length)if(a.addEventListener){var i=!1;yt&&-1<vt.indexOf(t)&&(i={passive:!0}),a.addEventListener(t,o.dispatcher,i)}else a.attachEvent&&a.attachEvent("on"+t,o.dispatcher)}function bt(t,e,i){if(dt(t)){var r=ht(t);if(r.handlers){if(Array.isArray(e))return mt(bt,t,e,i);var n=function(t,e){r.handlers[e]=[],ft(t,e)};if(void 0!==e){var s=r.handlers[e];if(s)if(i){if(i.guid)for(var a=0;a<s.length;a++)s[a].guid===i.guid&&s.splice(a--,1);ft(t,e)}else n(t,e)}else for(var o in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},o)&&n(t,o)}}}function Tt(t,e,i){var r=dt(t)?ht(t):{},n=t.parentNode||t.ownerDocument;if("string"==typeof e?e={type:e,target:t}:e.target||(e.target=t),e=gt(e),r.dispatcher&&r.dispatcher.call(t,e,i),n&&!e.isPropagationStopped()&&!0===e.bubbles)Tt.call(null,n,e,i);else if(!n&&!e.defaultPrevented){var s=ht(e.target);e.target[e.type]&&(s.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),s.disabled=!1)}return!e.defaultPrevented}function St(e,i,r){if(Array.isArray(i))return mt(St,e,i,r);var t=function t(){bt(e,i,t),r.apply(this,arguments)};t.guid=r.guid=r.guid||ut(),_t(e,i,t)}var kt=Object.freeze({fixEvent:gt,on:_t,off:bt,trigger:Tt,one:St}),Ct=!1,Et=void 0,wt=function(){if(x()&&!1!==Et.options.autoSetup){var t=Array.prototype.slice.call(p.getElementsByTagName("video")),e=Array.prototype.slice.call(p.getElementsByTagName("audio")),i=Array.prototype.slice.call(p.getElementsByTagName("video-js")),r=t.concat(e,i);if(r&&0<r.length)for(var n=0,s=r.length;n<s;n++){var a=r[n];if(!a||!a.getAttribute){At(1);break}void 0===a.player&&null!==a.getAttribute("data-setup")&&Et(a)}else Ct||At(1)}};function At(t,e){e&&(Et=e),g.setTimeout(wt,t)}x()&&"complete"===p.readyState?Ct=!0:St(g,"load",function(){Ct=!0});var Lt=function(t){var e=p.createElement("style");return e.className=t,e},Pt=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},Ot=function(t,e,i){e.guid||(e.guid=ut());var r=function(){return e.apply(t,arguments)};return r.guid=i?i+"_"+e.guid:e.guid,r},xt=function(e,i){var r=Date.now();return function(){var t=Date.now();i<=t-r&&(e.apply(void 0,arguments),r=t)}},It=function(r,n,s){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:g,o=void 0;return function(){var t=this,e=arguments,i=function(){i=o=null,s||r.apply(t,e)};!o&&s&&r.apply(t,e),a.clearTimeout(o),o=a.setTimeout(i,n)}},Dt=function(){};Dt.prototype.allowedEvents_={},Dt.prototype.addEventListener=Dt.prototype.on=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},_t(this,t,e),this.addEventListener=i},Dt.prototype.removeEventListener=Dt.prototype.off=function(t,e){bt(this,t,e)},Dt.prototype.one=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},St(this,t,e),this.addEventListener=i},Dt.prototype.dispatchEvent=Dt.prototype.trigger=function(t){var e=t.type||t;"string"==typeof t&&(t={type:e}),t=gt(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),Tt(this,t)};var Rt=function(e){return e instanceof Dt||!!e.eventBusEl_&&["on","one","off","trigger"].every(function(t){return"function"==typeof e[t]})},Mt=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},Ut=function(t){if(!t.nodeName&&!Rt(t))throw new Error("Invalid target; must be a DOM node or evented object.")},Nt=function(t){if(!Mt(t))throw new Error("Invalid event type; must be a non-empty string or array.")},Bt=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},jt=function(t,e){var i=e.length<3||e[0]===t||e[0]===t.eventBusEl_,r=void 0,n=void 0,s=void 0;return i?(r=t.eventBusEl_,3<=e.length&&e.shift(),n=e[0],s=e[1]):(r=e[0],n=e[1],s=e[2]),Ut(r),Nt(n),Bt(s),{isTargetingSelf:i,target:r,type:n,listener:s=Ot(t,s)}},Ft=function(t,e,i,r){Ut(t),t.nodeName?kt[e](t,i,r):t[e](i,r)},Ht={on:function(){for(var t=this,e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var n=jt(this,i),s=n.isTargetingSelf,a=n.target,o=n.type,u=n.listener;if(Ft(a,"on",o,u),!s){var l=function(){return t.off(a,o,u)};l.guid=u.guid;var c=function(){return t.off("dispose",l)};c.guid=u.guid,Ft(this,"on","dispose",l),Ft(a,"on","dispose",c)}},one:function(){for(var n=this,t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=jt(this,e),s=r.isTargetingSelf,a=r.target,o=r.type,u=r.listener;if(s)Ft(a,"one",o,u);else{var l=function t(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];n.off(a,o,t),u.apply(null,i)};l.guid=u.guid,Ft(a,"one",o,l)}},off:function(t,e,i){if(!t||Mt(t))bt(this.eventBusEl_,t,e);else{var r=t,n=e;Ut(r),Nt(n),Bt(i),i=Ot(this,i),this.off("dispose",i),r.nodeName?(bt(r,n,i),bt(r,"dispose",i)):Rt(r)&&(r.off(n,i),r.off("dispose",i))}},trigger:function(t,e){return Tt(this.eventBusEl_,t,e)}};function Vt(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).eventBusKey;if(e){if(!t[e].nodeName)throw new Error('The eventBusKey "'+e+'" does not refer to an element.');t.eventBusEl_=t[e]}else t.eventBusEl_=M("span",{className:"vjs-event-bus"});return C(t,Ht),t.on("dispose",function(){t.off(),g.setTimeout(function(){t.eventBusEl_=null},0)}),t}var qt={state:{},setState:function(t){var i=this;"function"==typeof t&&(t=t());var r=void 0;return k(t,function(t,e){i.state[e]!==t&&((r=r||{})[e]={from:i.state[e],to:t}),i.state[e]=t}),r&&Rt(this)&&this.trigger({changes:r,type:"statechanged"}),r}};function Wt(t,e){return C(t,qt),t.state=C({},t.state,e),"function"==typeof t.handleStateChanged&&Rt(t)&&t.on("statechanged",t.handleStateChanged),t}function zt(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function Gt(){for(var i={},t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.forEach(function(t){t&&k(t,function(t,e){w(t)?(w(i[e])||(i[e]={}),i[e]=Gt(i[e],t)):i[e]=t})}),i}var Xt=function(){function l(t,e,i){if(y(this,l),!t&&this.play?this.player_=t=this:this.player_=t,this.options_=Gt({},this.options_),e=this.options_=Gt(this.options_,e),this.id_=e.id||e.el&&e.el.id,!this.id_){var r=t&&t.id&&t.id()||"no_player";this.id_=r+"_component_"+ut()}this.name_=e.name||null,e.el?this.el_=e.el:!1!==e.createEl&&(this.el_=this.createEl()),!1!==e.evented&&Vt(this,{eventBusKey:this.el_?"el_":null}),Wt(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},!(this.childNameIndex_={})!==e.initChildren&&this.initChildren(),this.ready(i),!1!==e.reportTouchActivity&&this.enableTouchActivity()}return l.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;0<=t;t--)this.children_[t].dispose&&this.children_[t].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),pt(this.el_),this.el_=null),this.player_=null},l.prototype.player=function(){return this.player_},l.prototype.options=function(t){return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t&&(this.options_=Gt(this.options_,t)),this.options_},l.prototype.el=function(){return this.el_},l.prototype.createEl=function(t,e,i){return M(t,e,i)},l.prototype.localize=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:t,i=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),s=r&&r[i],a=i&&i.split("-")[0],o=r&&r[a],u=e;return s&&s[t]?u=s[t]:o&&o[t]&&(u=o[t]),n&&(u=u.replace(/\{(\d+)\}/g,function(t,e){var i=n[e-1],r=i;return"undefined"==typeof i&&(r=t),r})),u},l.prototype.contentEl=function(){return this.contentEl_||this.el_},l.prototype.id=function(){return this.id_},l.prototype.name=function(){return this.name_},l.prototype.children=function(){return this.children_},l.prototype.getChildById=function(t){return this.childIndex_[t]},l.prototype.getChild=function(t){if(t)return t=zt(t),this.childNameIndex_[t]},l.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.children_.length,r=void 0,n=void 0;if("string"==typeof t){n=zt(t);var s=e.componentClass||n;e.name=n;var a=l.getComponent(s);if(!a)throw new Error("Component "+s+" does not exist");if("function"!=typeof a)return null;r=new a(this.player_||this,e)}else r=t;if(this.children_.splice(i,0,r),"function"==typeof r.id&&(this.childIndex_[r.id()]=r),(n=n||r.name&&zt(r.name()))&&(this.childNameIndex_[n]=r),"function"==typeof r.el&&r.el()){var o=this.contentEl().children[i]||null;this.contentEl().insertBefore(r.el(),o)}return r},l.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,i=this.children_.length-1;0<=i;i--)if(this.children_[i]===t){e=!0,this.children_.splice(i,1);break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null;var r=t.el();r&&r.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},l.prototype.initChildren=function(){var n=this,r=this.options_.children;if(r){var s=this.options_,t=void 0,i=l.getComponent("Tech");(t=Array.isArray(r)?r:Object.keys(r)).concat(Object.keys(this.options_).filter(function(e){return!t.some(function(t){return"string"==typeof t?e===t:e===t.name})})).map(function(t){var e=void 0,i=void 0;return"string"==typeof t?i=r[e=t]||n.options_[e]||{}:(e=t.name,i=t),{name:e,opts:i}}).filter(function(t){var e=l.getComponent(t.opts.componentClass||zt(t.name));return e&&!i.isTech(e)}).forEach(function(t){var e=t.name,i=t.opts;if(void 0!==s[e]&&(i=s[e]),!1!==i){!0===i&&(i={}),i.playerOptions=n.options_.playerOptions;var r=n.addChild(e,i);r&&(n[e]=r)}})}},l.prototype.buildCSSClass=function(){return""},l.prototype.ready=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},l.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_;this.readyQueue_=[],t&&0<t.length&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},l.prototype.$=function(t,e){return nt(t,e||this.contentEl())},l.prototype.$$=function(t,e){return st(t,e||this.contentEl())},l.prototype.hasClass=function(t){return B(this.el_,t)},l.prototype.addClass=function(t){j(this.el_,t)},l.prototype.removeClass=function(t){F(this.el_,t)},l.prototype.toggleClass=function(t,e){H(this.el_,t,e)},l.prototype.show=function(){this.removeClass("vjs-hidden")},l.prototype.hide=function(){this.addClass("vjs-hidden")},l.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},l.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},l.prototype.getAttribute=function(t){return W(this.el_,t)},l.prototype.setAttribute=function(t,e){z(this.el_,t,e)},l.prototype.removeAttribute=function(t){G(this.el_,t)},l.prototype.width=function(t,e){return this.dimension("width",t,e)},l.prototype.height=function(t,e){return this.dimension("height",t,e)},l.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},l.prototype.dimension=function(t,e,i){if(void 0!==e)return null!==e&&e==e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(i||this.trigger("componentresize"));if(!this.el_)return 0;var r=this.el_.style[t],n=r.indexOf("px");return-1!==n?parseInt(r.slice(0,n),10):parseInt(this.el_["offset"+zt(t)],10)},l.prototype.currentDimension=function(t){var e=0;if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value");if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(this.el_);e=i.getPropertyValue(t)||i[t]}if(0===(e=parseFloat(e))){var r="offset"+zt(t);e=this.el_[r]}return e},l.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},l.prototype.currentWidth=function(){return this.currentDimension("width")},l.prototype.currentHeight=function(){return this.currentDimension("height")},l.prototype.focus=function(){this.el_.focus()},l.prototype.blur=function(){this.el_.blur()},l.prototype.emitTapEvents=function(){var e=0,r=null,n=void 0;this.on("touchstart",function(t){1===t.touches.length&&(r={pageX:t.touches[0].pageX,pageY:t.touches[0].pageY},e=(new Date).getTime(),n=!0)}),this.on("touchmove",function(t){if(1<t.touches.length)n=!1;else if(r){var e=t.touches[0].pageX-r.pageX,i=t.touches[0].pageY-r.pageY;10<Math.sqrt(e*e+i*i)&&(n=!1)}});var t=function(){n=!1};this.on("touchleave",t),this.on("touchcancel",t),this.on("touchend",function(t){!(r=null)===n&&((new Date).getTime()-e<200&&(t.preventDefault(),this.trigger("tap")))})},l.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var e=Ot(this.player(),this.player().reportUserActivity),i=void 0;this.on("touchstart",function(){e(),this.clearInterval(i),i=this.setInterval(e,250)});var t=function(t){e(),this.clearInterval(i)};this.on("touchmove",e),this.on("touchend",t),this.on("touchcancel",t)}},l.prototype.setTimeout=function(t,e){var i=this;t=Ot(this,t);var r=g.setTimeout(t,e),n=function(){return i.clearTimeout(r)};return n.guid="vjs-timeout-"+r,this.on("dispose",n),r},l.prototype.clearTimeout=function(t){g.clearTimeout(t);var e=function(){};return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},l.prototype.setInterval=function(t,e){var i=this;t=Ot(this,t);var r=g.setInterval(t,e),n=function(){return i.clearInterval(r)};return n.guid="vjs-interval-"+r,this.on("dispose",n),r},l.prototype.clearInterval=function(t){g.clearInterval(t);var e=function(){};return e.guid="vjs-interval-"+t,this.off("dispose",e),t},l.prototype.requestAnimationFrame=function(t){var e=this;if(this.supportsRaf_){t=Ot(this,t);var i=g.requestAnimationFrame(t),r=function(){return e.cancelAnimationFrame(i)};return r.guid="vjs-raf-"+i,this.on("dispose",r),i}return this.setTimeout(t,1e3/60)},l.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){g.cancelAnimationFrame(t);var e=function(){};return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},l.registerComponent=function(t,e){if("string"!=typeof t||!t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.');var i=l.getComponent("Tech"),r=i&&i.isTech(e),n=l===e||l.prototype.isPrototypeOf(e.prototype);if(r||!n){var s=void 0;throw s=r?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+t+'"; '+s+".")}t=zt(t),l.components_||(l.components_={});var a=l.getComponent("Player");if("Player"===t&&a&&a.players){var o=a.players,u=Object.keys(o);if(o&&0<u.length&&u.map(function(t){return o[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return l.components_[t]=e},l.getComponent=function(t){if(t)return t=zt(t),l.components_&&l.components_[t]?l.components_[t]:void 0},l}();Xt.prototype.supportsRaf_="function"==typeof g.requestAnimationFrame&&"function"==typeof g.cancelAnimationFrame,Xt.registerComponent("Component",Xt);var Yt,$t,Kt,Qt,Jt=g.navigator&&g.navigator.userAgent||"",Zt=/AppleWebKit\/([\d.]+)/i.exec(Jt),te=Zt?parseFloat(Zt.pop()):null,ee=/iPad/i.test(Jt),ie=/iPhone/i.test(Jt)&&!ee,re=/iPod/i.test(Jt),ne=ie||ee||re,se=(Yt=Jt.match(/OS (\d+)_/i))&&Yt[1]?Yt[1]:null,ae=/Android/i.test(Jt),oe=function(){var t=Jt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!t)return null;var e=t[1]&&parseFloat(t[1]),i=t[2]&&parseFloat(t[2]);return e&&i?parseFloat(t[1]+"."+t[2]):e||null}(),ue=ae&&oe<5&&te<537,le=/Firefox/i.test(Jt),ce=/Edge/i.test(Jt),he=!ce&&/Chrome/i.test(Jt),de=($t=Jt.match(/Chrome\/(\d+)/))&&$t[1]?parseFloat($t[1]):null,pe=(Kt=/MSIE\s(\d+)\.\d/.exec(Jt),!(Qt=Kt&&parseFloat(Kt[1]))&&/Trident\/7.0/i.test(Jt)&&/rv:11.0/.test(Jt)&&(Qt=11),Qt),fe=/Safari/i.test(Jt)&&!he&&!ae&&!ce,me=fe||ne,ge=x()&&("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch),ye=Object.freeze({IS_IPAD:ee,IS_IPHONE:ie,IS_IPOD:re,IS_IOS:ne,IOS_VERSION:se,IS_ANDROID:ae,ANDROID_VERSION:oe,IS_NATIVE_ANDROID:ue,IS_FIREFOX:le,IS_EDGE:ce,IS_CHROME:he,CHROME_VERSION:de,IE_VERSION:pe,IS_SAFARI:fe,IS_ANY_SAFARI:me,TOUCH_ENABLED:ge});function ve(t,e,i,r){return function(t,e,i){if("number"!=typeof e||e<0||i<e)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+i+").")}(t,r,i.length-1),i[r][e]}function _e(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:ve.bind(null,"start",0,t),end:ve.bind(null,"end",1,t)}}function be(t,e){return Array.isArray(t)?_e(t):void 0===t||void 0===e?_e():_e([[t,e]])}function Te(t,e){var i=0,r=void 0,n=void 0;if(!e)return 0;t&&t.length||(t=be(0,0));for(var s=0;s<t.length;s++)r=t.start(s),e<(n=t.end(s))&&(n=e),i+=n-r;return i/e}for(var Se={},ke=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ce=ke[0],Ee=void 0,we=0;we<ke.length;we++)if(ke[we][1]in p){Ee=ke[we];break}if(Ee)for(var Ae=0;Ae<Ee.length;Ae++)Se[Ce[Ae]]=Ee[Ae];function Le(t){if(t instanceof Le)return t;"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:E(t)&&("number"==typeof t.code&&(this.code=t.code),C(this,t)),this.message||(this.message=Le.defaultMessages[this.code]||"")}Le.prototype.code=0,Le.prototype.message="",Le.prototype.status=null,Le.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],Le.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Pe=0;Pe<Le.errorTypes.length;Pe++)Le[Le.errorTypes[Pe]]=Pe,Le.prototype[Le.errorTypes[Pe]]=Pe;var Oe=function(t,e){var i,r=null;try{i=JSON.parse(t,e)}catch(t){r=t}return[r,i]};function xe(t){return null!=t&&"function"==typeof t.then}function Ie(t){xe(t)&&t.then(null,function(t){})}var De=function(r){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(t,e,i){return r[e]&&(t[e]=r[e]),t},{cues:r.cues&&Array.prototype.map.call(r.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Re=function(t){var e=t.$$("track"),i=Array.prototype.map.call(e,function(t){return t.track});return Array.prototype.map.call(e,function(t){var e=De(t.track);return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===i.indexOf(t)}).map(De))},Me=function(t,i){return t.forEach(function(t){var e=i.addRemoteTextTrack(t).track;!t.src&&t.cues&&t.cues.forEach(function(t){return e.addCue(t)})}),i.textTracks()},Ue="vjs-modal-dialog",Ne=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=M("div",{className:Ue+"-content"},{role:"document"}),i.descEl_=M("p",{className:Ue+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),U(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},n.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return Ue+" vjs-hidden "+r.prototype.buildCSSClass.call(this)},n.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},n.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},n.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},n.prototype.open=function(){if(!this.opened_){var t=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},n.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},n.prototype.close=function(){if(this.opened_){var t=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},n.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,i=this.getChild("closeButton");if(e&&!i){var r=this.contentEl_;this.contentEl_=this.el_,i=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=r,this.on(i,"close",this.close)}!e&&i&&(this.off(i,"close",this.close),this.removeChild(i),i.dispose())}return this.closeable_},n.prototype.fill=function(){this.fillWith(this.content())},n.prototype.fillWith=function(t){var e=this.contentEl(),i=e.parentNode,r=e.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,i.removeChild(e),this.empty(),it(e,t),this.trigger("modalfill"),r?i.insertBefore(e,r):i.appendChild(e);var n=this.getChild("closeButton");n&&i.appendChild(n.el_)},n.prototype.empty=function(){this.trigger("beforemodalempty"),Z(this.contentEl()),this.trigger("modalempty")},n.prototype.content=function(t){return"undefined"!=typeof t&&(this.content_=t),this.content_},n.prototype.conditionalFocus_=function(){var t=p.activeElement,e=this.player_.el_;this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(p,"keydown",this.handleKeyDown))},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(p,"keydown",this.handleKeyDown)},n.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),i=this.el_.querySelector(":focus"),r=void 0,n=0;n<e.length;n++)if(i===e[n]){r=n;break}p.activeElement===this.el_&&(r=0),t.shiftKey&&0===r?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||r!==e.length-1||(e[0].focus(),t.preventDefault())}},n.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*");return Array.prototype.filter.call(t,function(t){return(t instanceof g.HTMLAnchorElement||t instanceof g.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof g.HTMLInputElement||t instanceof g.HTMLSelectElement||t instanceof g.HTMLTextAreaElement||t instanceof g.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof g.HTMLIFrameElement||t instanceof g.HTMLObjectElement||t instanceof g.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},n}(Xt);Ne.prototype.options_={pauseOnOpen:!0,temporary:!0},Xt.registerComponent("ModalDialog",Ne);var Be=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);var e=b(this,r.call(this));e.tracks_=[],Object.defineProperty(e,"length",{get:function(){return this.tracks_.length}});for(var i=0;i<t.length;i++)e.addTrack(t[i]);return e}return _(n,r),n.prototype.addTrack=function(t){var e=this.tracks_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},n.prototype.removeTrack=function(t){for(var e=void 0,i=0,r=this.length;i<r;i++)if(this[i]===t){(e=this[i]).off&&e.off(),this.tracks_.splice(i,1);break}e&&this.trigger({track:e,type:"removetrack"})},n.prototype.getTrackById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},n}(Dt);for(var je in Be.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"},Be.prototype.allowedEvents_)Be.prototype["on"+je]=null;var Fe=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].enabled=!1)},He=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].enabled){Fe(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.enabled&&Fe(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("enabledchange",function(){e.changing_||(e.changing_=!0,Fe(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),Ve=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].selected=!1)},qe=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].selected){Ve(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,Object.defineProperty(i,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t;return-1},set:function(){}}),i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.selected&&Ve(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("selectedchange",function(){e.changing_||(e.changing_=!0,Ve(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),We=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.addTrack=function(t){e.prototype.addTrack.call(this,t),t.addEventListener("modechange",Ot(this,function(){this.trigger("change")}));-1===["metadata","chapters"].indexOf(t.kind)&&t.addEventListener("modechange",Ot(this,function(){this.trigger("selectedlanguagechange")}))},t}(Be),ze=function(){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,r),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}});for(var e=0,i=t.length;e<i;e++)this.addTrackElement_(t[e])}return r.prototype.addTrackElement_=function(t){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},r.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,i=0,r=this.trackElements_.length;i<r;i++)if(t===this.trackElements_[i].track){e=this.trackElements_[i];break}return e},r.prototype.removeTrackElement_=function(t){for(var e=0,i=this.trackElements_.length;e<i;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1);break}},r}(),Ge=function(){function e(t){y(this,e),e.prototype.setCues_.call(this,t),Object.defineProperty(this,"length",{get:function(){return this.length_}})}return e.prototype.setCues_=function(t){var e=this.length||0,i=0,r=t.length;this.cues_=t,this.length_=t.length;var n=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})};if(e<r)for(i=e;i<r;i++)n.call(this,i)},e.prototype.getCueById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},e}(),Xe={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Ye={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},$e={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Ke={disabled:"disabled",hidden:"hidden",showing:"showing"},Qe=function(s){function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var e=b(this,s.call(this)),i={id:t.id||"vjs_track_"+ut(),kind:t.kind||"",label:t.label||"",language:t.language||""},r=function(t){Object.defineProperty(e,t,{get:function(){return i[t]},set:function(){}})};for(var n in i)r(n);return e}return _(a,s),a}(Dt),Je=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],i=p.createElement("a");i.href=t;var r=""===i.host&&"file:"!==i.protocol,n=void 0;r&&((n=p.createElement("div")).innerHTML='<a href="'+t+'"></a>',i=n.firstChild,n.setAttribute("style","display:none; position:absolute;"),p.body.appendChild(n));for(var s={},a=0;a<e.length;a++)s[e[a]]=i[e[a]];return"http:"===s.protocol&&(s.host=s.host.replace(/:80$/,"")),"https:"===s.protocol&&(s.host=s.host.replace(/:443$/,"")),s.protocol||(s.protocol=g.location.protocol),r&&p.body.removeChild(n),s},Ze=function(t){if(!t.match(/^https?:\/\//)){var e=p.createElement("div");e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},ti=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);if(e)return e.pop().toLowerCase()}return""},ei=function(t){var e=g.location,i=Je(t);return(":"===i.protocol?e.protocol:i.protocol)+i.host!==e.protocol+e.host},ii=Object.freeze({parseUrl:Je,getAbsoluteURL:Ze,getFileExtension:ti,isCrossOrigin:ei}),ri=function(t){var e=ni.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)},ni=Object.prototype.toString;var si=Object.freeze({default:ri,__moduleExports:ri}),ai=e(function(t,e){(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}}),oi=ai.left,ui=ai.right,li=Object.freeze({default:ai,__moduleExports:ai,left:oi,right:ui}),ci=si&&ri||si,hi=function(t,e,i){if(!ci(e))throw new TypeError("iterator must be a function");arguments.length<3&&(i=this);"[object Array]"===di.call(t)?function(t,e,i){for(var r=0,n=t.length;r<n;r++)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i):"string"==typeof t?function(t,e,i){for(var r=0,n=t.length;r<n;r++)e.call(i,t.charAt(r),r,t)}(t,e,i):function(t,e,i){for(var r in t)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i)},di=Object.prototype.toString,pi=Object.prototype.hasOwnProperty;var fi=Object.freeze({default:hi,__moduleExports:hi}),mi=li&&ai||li,gi=fi&&hi||fi,yi=function(t){if(!t)return{};var s={};return gi(mi(t).split("\n"),function(t){var e,i=t.indexOf(":"),r=mi(t.slice(0,i)).toLowerCase(),n=mi(t.slice(i+1));"undefined"==typeof s[r]?s[r]=n:(e=s[r],"[object Array]"===Object.prototype.toString.call(e)?s[r].push(n):s[r]=[s[r],n])}),s},vi=Object.freeze({default:yi,__moduleExports:yi}),_i=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var r in i)bi.call(i,r)&&(t[r]=i[r])}return t},bi=Object.prototype.hasOwnProperty;var Ti=Object.freeze({default:_i,__moduleExports:_i}),Si=vi&&yi||vi,ki=Ti&&_i||Ti,Ci=wi;function Ei(t,e,i){var r=t;return ci(e)?(i=e,"string"==typeof t&&(r={uri:t})):r=ki(e,{uri:t}),r.callback=i,r}function wi(t,e,i){return Ai(e=Ei(t,e,i))}function Ai(r){if("undefined"==typeof r.callback)throw new Error("callback argument missing");var n=!1,s=function(t,e,i){n||(n=!0,r.callback(t,e,i))};function e(t){return clearTimeout(u),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,s(t,m)}function t(){if(!a){var t;clearTimeout(u),t=r.useXDR&&void 0===o.status?200:1223===o.status?204:o.status;var e=m,i=null;return 0!==t?(e={body:function(){var t=void 0;if(t=o.response?o.response:o.responseText||function(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}(o),f)try{t=JSON.parse(t)}catch(t){}return t}(),statusCode:t,method:c,headers:{},url:l,rawRequest:o},o.getAllResponseHeaders&&(e.headers=Si(o.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),s(i,e,e.body)}}var i,a,o=r.xhr||null;o||(o=r.cors||r.useXDR?new wi.XDomainRequest:new wi.XMLHttpRequest);var u,l=o.url=r.uri||r.url,c=o.method=r.method||"GET",h=r.body||r.data,d=o.headers=r.headers||{},p=!!r.sync,f=!1,m={body:void 0,headers:{},statusCode:0,method:c,url:l,rawRequest:o};if("json"in r&&!1!==r.json&&(f=!0,d.accept||d.Accept||(d.Accept="application/json"),"GET"!==c&&"HEAD"!==c&&(d["content-type"]||d["Content-Type"]||(d["Content-Type"]="application/json"),h=JSON.stringify(!0===r.json?h:r.json))),o.onreadystatechange=function(){4===o.readyState&&setTimeout(t,0)},o.onload=t,o.onerror=e,o.onprogress=function(){},o.onabort=function(){a=!0},o.ontimeout=e,o.open(c,l,!p,r.username,r.password),p||(o.withCredentials=!!r.withCredentials),!p&&0<r.timeout&&(u=setTimeout(function(){if(!a){a=!0,o.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",e(t)}},r.timeout)),o.setRequestHeader)for(i in d)d.hasOwnProperty(i)&&o.setRequestHeader(i,d[i]);else if(r.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(r.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in r&&(o.responseType=r.responseType),"beforeSend"in r&&"function"==typeof r.beforeSend&&r.beforeSend(o),o.send(h||null),o}wi.XMLHttpRequest=g.XMLHttpRequest||function(){},wi.XDomainRequest="withCredentials"in new wi.XMLHttpRequest?wi.XMLHttpRequest:g.XDomainRequest,function(t,e){for(var i=0;i<t.length;i++)e(t[i])}(["get","put","post","patch","head","delete"],function(r){wi["delete"===r?"del":r]=function(t,e,i){return(e=Ei(t,e,i)).method=r.toUpperCase(),Ai(e)}});var Li=function(t,e){var i=new g.WebVTT.Parser(g,g.vttjs,g.WebVTT.StringDecoder()),r=[];i.oncue=function(t){e.addCue(t)},i.onparsingerror=function(t){r.push(t)},i.onflush=function(){e.trigger({type:"loadeddata",target:e})},i.parse(t),0<r.length&&(g.console&&g.console.groupCollapsed&&g.console.groupCollapsed("Text Track parsing errors for "+e.src),r.forEach(function(t){return f.error(t)}),g.console&&g.console.groupEnd&&g.console.groupEnd()),i.flush()},Pi=function(t,n){var e={uri:t},i=ei(t);i&&(e.cors=i),Ci(e,Ot(this,function(t,e,i){if(t)return f.error(t,e);if(n.loaded_=!0,"function"!=typeof g.WebVTT){if(n.tech_){var r=function(){return Li(i,n)};n.tech_.on("vttjsloaded",r),n.tech_.on("vttjserror",function(){f.error("vttjs failed to load, stopping trying to process "+n.src),n.tech_.off("vttjsloaded",r)})}}else Li(i,n)}))},Oi=function(l){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(y(this,c),!t.tech)throw new Error("A tech was not provided.");var e=Gt(t,{kind:$e[t.kind]||"subtitles",language:t.language||t.srclang||""}),i=Ke[e.mode]||"disabled",r=e.default;"metadata"!==e.kind&&"chapters"!==e.kind||(i="hidden");var n=b(this,l.call(this,e));n.tech_=e.tech,n.cues_=[],n.activeCues_=[];var s=new Ge(n.cues_),a=new Ge(n.activeCues_),o=!1,u=Ot(n,function(){this.activeCues,o&&(this.trigger("cuechange"),o=!1)});return"disabled"!==i&&n.tech_.ready(function(){n.tech_.on("timeupdate",u)},!0),Object.defineProperties(n,{default:{get:function(){return r},set:function(){}},mode:{get:function(){return i},set:function(t){var e=this;Ke[t]&&("showing"===(i=t)&&this.tech_.ready(function(){e.tech_.on("timeupdate",u)},!0),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?s:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return a;for(var t=this.tech_.currentTime(),e=[],i=0,r=this.cues.length;i<r;i++){var n=this.cues[i];n.startTime<=t&&n.endTime>=t?e.push(n):n.startTime===n.endTime&&n.startTime<=t&&n.startTime+.5>=t&&e.push(n)}if(o=!1,e.length!==this.activeCues_.length)o=!0;else for(var s=0;s<e.length;s++)-1===this.activeCues_.indexOf(e[s])&&(o=!0);return this.activeCues_=e,a.setCues_(this.activeCues_),a},set:function(){}}}),e.src?(n.src=e.src,Pi(e.src,n)):n.loaded_=!0,n}return _(c,l),c.prototype.addCue=function(t){var e=t;if(g.vttjs&&!(t instanceof g.vttjs.VTTCue)){for(var i in e=new g.vttjs.VTTCue(t.startTime,t.endTime,t.text),t)i in e||(e[i]=t[i]);e.id=t.id,e.originalCue_=t}for(var r=this.tech_.textTracks(),n=0;n<r.length;n++)r[n]!==this&&r[n].removeCue(e);this.cues_.push(e),this.cues.setCues_(this.cues_)},c.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var i=this.cues_[e];if(i===t||i.originalCue_&&i.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_);break}}},c}(Qe);Oi.prototype.allowedEvents_={cuechange:"cuechange"};var xi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Ye[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"enabled",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("enabledchange"))}}),e.enabled&&(i.enabled=e.enabled),i.loaded_=!0,i}return _(s,n),s}(Qe),Ii=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Xe[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"selected",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("selectedchange"))}}),e.selected&&(i.selected=e.selected),i}return _(s,n),s}(Qe),Di=0,Ri=2,Mi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=b(this,n.call(this)),i=void 0,r=new Oi(t);return e.kind=r.kind,e.src=r.src,e.srclang=r.language,e.label=r.label,e.default=r.default,Object.defineProperties(e,{readyState:{get:function(){return i}},track:{get:function(){return r}}}),i=Di,r.addEventListener("loadeddata",function(){i=Ri,e.trigger({type:"load",target:e})}),e}return _(s,n),s}(Dt);Mi.prototype.allowedEvents_={load:"load"},Mi.NONE=Di,Mi.LOADING=1,Mi.LOADED=Ri,Mi.ERROR=3;var Ui={audio:{ListClass:He,TrackClass:xi,capitalName:"Audio"},video:{ListClass:qe,TrackClass:Ii,capitalName:"Video"},text:{ListClass:We,TrackClass:Oi,capitalName:"Text"}};Object.keys(Ui).forEach(function(t){Ui[t].getterName=t+"Tracks",Ui[t].privateName=t+"Tracks_"});var Ni={remoteText:{ListClass:We,TrackClass:Oi,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:ze,TrackClass:Mi,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Bi=Gt(Ui,Ni);Ni.names=Object.keys(Ni),Ui.names=Object.keys(Ui),Bi.names=[].concat(Ni.names).concat(Ui.names);var ji=Object.create||function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function Fi(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function Hi(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):59<i[1]?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function Vi(){this.values=ji(null)}function qi(t,e,i,r){var n=r?t.split(r):[t];for(var s in n)if("string"==typeof n[s]){var a=n[s].split(i);if(2===a.length)e(a[0],a[1])}}function Wi(e,t,s){var i,r,a,n=e;function o(){var t=Hi(e);if(null===t)throw new Fi(Fi.Errors.BadTimeStamp,"Malformed timestamp: "+n);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function u(){e=e.replace(/^\s+/,"")}if(u(),t.startTime=o(),u(),"--\x3e"!==e.substr(0,3))throw new Fi(Fi.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);e=e.substr(3),u(),t.endTime=o(),u(),i=e,r=t,a=new Vi,qi(i,function(t,e){switch(t){case"region":for(var i=s.length-1;0<=i;i--)if(s[i].id===e){a.set(t,s[i].region);break}break;case"vertical":a.alt(t,e,["rl","lr"]);break;case"line":var r=e.split(","),n=r[0];a.integer(t,n),a.percent(t,n)&&a.set("snapToLines",!1),a.alt(t,n,["auto"]),2===r.length&&a.alt("lineAlign",r[1],["start","middle","end"]);break;case"position":r=e.split(","),a.percent(t,r[0]),2===r.length&&a.alt("positionAlign",r[1],["start","middle","end"]);break;case"size":a.percent(t,e);break;case"align":a.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),r.region=a.get("region",null),r.vertical=a.get("vertical",""),r.line=a.get("line","auto"),r.lineAlign=a.get("lineAlign","start"),r.snapToLines=a.get("snapToLines",!0),r.size=a.get("size",100),r.align=a.get("align","middle"),r.position=a.get("position",{start:0,left:0,middle:50,end:100,right:100},r.align),r.positionAlign=a.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},r.align)}((Fi.prototype=ji(Error.prototype)).constructor=Fi).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Vi.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var r=0;r<i.length;++r)if(e===i[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&0<=(e=parseFloat(e))&&e<=100)&&(this.set(t,e),!0)}};var zi={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},Gi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Xi={v:"title",lang:"lang"},Yi={rt:"ruby"};function $i(s,i){function t(){if(!i)return null;var t,e=i.match(/^([^<]*)(<[^>]*>?)?/);return t=e[1]?e[1]:e[2],i=i.substr(t.length),t}function e(t){return zi[t]}function r(t){for(;f=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(f[0],e);return t}function n(t,e){var i=Gi[t];if(!i)return null;var r=s.document.createElement(i);r.localName=i;var n=Xi[t];return n&&e&&(r[n]=e.trim()),r}for(var a,o,u,l=s.document.createElement("div"),c=l,h=[];null!==(a=t());)if("<"!==a[0])c.appendChild(s.document.createTextNode(r(a)));else{if("/"===a[1]){h.length&&h[h.length-1]===a.substr(2).replace(">","")&&(h.pop(),c=c.parentNode);continue}var d,p=Hi(a.substr(1,a.length-2));if(p){d=s.document.createProcessingInstruction("timestamp",p),c.appendChild(d);continue}var f=a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!f)continue;if(!(d=n(f[1],f[3])))continue;if(o=c,Yi[(u=d).localName]&&Yi[u.localName]!==o.localName)continue;f[2]&&(d.className=f[2].substr(1).replace("."," ")),h.push(f[1]),c.appendChild(d),c=d}return l}var Ki=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Qi(t){for(var e=0;e<Ki.length;e++){var i=Ki[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function Ji(){}function Zi(t,e,i){Ji.call(this),this.cue=e,this.cueDiv=$i(t,e.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={direction:function(t){var e=[],i="";if(!t||!t.childNodes)return"ltr";function n(t,e){for(var i=e.childNodes.length-1;0<=i;i--)t.push(e.childNodes[i])}function s(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?r[t.length=0]:i}return"ruby"===e.tagName?s(t):e.childNodes?(n(t,e),s(t)):void 0}for(n(e,t);i=s(e);)for(var r=0;r<i.length;r++)if(Qi(i.charCodeAt(r)))return"rtl";return"ltr"}(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===e.align?"center":e.align,font:i.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var n=0;switch(e.positionAlign){case"start":n=e.position;break;case"middle":n=e.position-e.size/2;break;case"end":n=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function tr(t){var e,i,r,n;if(t.div){i=t.div.offsetHeight,r=t.div.offsetWidth,n=t.div.offsetTop;var s=(s=t.div.childNodes)&&(s=s[0])&&s.getClientRects&&s.getClientRects();t=t.div.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight}function er(t,e,o,u){var i=new tr(e),r=e.cue,n=function(t){if("number"==typeof t.line&&(t.snapToLines||0<=t.line&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return-1*++r}(r),s=[];if(r.snapToLines){var a;switch(r.vertical){case"":s=["+y","-y"],a="height";break;case"rl":s=["+x","-x"],a="width";break;case"lr":s=["-x","+x"],a="width"}var l=i.lineHeight,c=l*Math.round(n),h=o[a]+l,d=s[0];Math.abs(c)>h&&(c=c<0?-1:1,c*=Math.ceil(h/l)*l),n<0&&(c+=""===r.vertical?o.height:o.width,s=s.reverse()),i.move(d,c)}else{var p=i.lineHeight/o.height*100;switch(r.lineAlign){case"middle":n-=p/2;break;case"end":n-=p}switch(r.vertical){case"":e.applyStyles({top:e.formatStyle(n,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(n,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(n,"%")})}s=["+y","-x","+x","-y"],i=new tr(e)}var f=function(t,e){for(var i,r=new tr(t),n=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(o,e[s])||t.within(o)&&t.overlapsAny(u);)t.move(e[s]);if(t.within(o))return t;var a=t.intersectPercentage(o);a<n&&(i=new tr(t),n=a),t=new tr(r)}return i||r}(i,s);e.move(f.toCSSCompatValues(o))}function ir(){}Ji.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},Ji.prototype.formatStyle=function(t,e){return 0===t?0:t+e},(Zi.prototype=ji(Ji.prototype)).constructor=Zi,tr.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},tr.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},tr.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},tr.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},tr.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},tr.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},tr.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},tr.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i}},ir.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},ir.convertCueToDOMTree=function(t,e){return t&&e?$i(t,e):null};ir.processCues=function(r,n,t){if(!r||!n||!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);var s=r.document.createElement("div");if(s.style.position="absolute",s.style.left="0",s.style.right="0",s.style.top="0",s.style.bottom="0",s.style.margin="1.5%",t.appendChild(s),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(n)){var a=[],o=tr.getSimpleBoxPosition(s),u={font:Math.round(.05*o.height*100)/100+"px sans-serif"};!function(){for(var t,e,i=0;i<n.length;i++)e=n[i],t=new Zi(r,e,u),s.appendChild(t.div),er(0,t,o,a),e.displayState=t.div,a.push(tr.getSimpleBoxPosition(t))}()}else for(var e=0;e<n.length;e++)s.appendChild(n[e].displayState)},(ir.Parser=function(t,e,i){i||(i=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=i||new TextDecoder("utf8"),this.regionList=[]}).prototype={reportOrThrowError:function(t){if(!(t instanceof Fi))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){var s=this;function e(){for(var t=s.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var i=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,s.buffer=t.substr(e),i}function i(t){t.match(/X-TIMESTAMP-MAP/)?qi(t,function(t,e){switch(t){case"X-TIMESTAMP-MAP":i=e,r=new Vi,qi(i,function(t,e){switch(t){case"MPEGT":r.integer(t+"S",e);break;case"LOCA":r.set(t+"L",Hi(e))}},/[^\d]:/,/,/),s.ontimestampmap&&s.ontimestampmap({MPEGTS:r.get("MPEGTS"),LOCAL:r.get("LOCAL")})}var i,r},/=/):qi(t,function(t,e){switch(t){case"Region":!function(t){var n=new Vi;if(qi(t,function(t,e){switch(t){case"id":n.set(t,e);break;case"width":n.percent(t,e);break;case"lines":n.integer(t,e);break;case"regionanchor":case"viewportanchor":var i=e.split(",");if(2!==i.length)break;var r=new Vi;if(r.percent("x",i[0]),r.percent("y",i[1]),!r.has("x")||!r.has("y"))break;n.set(t+"X",r.get("x")),n.set(t+"Y",r.get("y"));break;case"scroll":n.alt(t,e,["up"])}},/=/,/\s/),n.has("id")){var e=new(s.vttjs.VTTRegion||s.window.VTTRegion);e.width=n.get("width",100),e.lines=n.get("lines",3),e.regionAnchorX=n.get("regionanchorX",0),e.regionAnchorY=n.get("regionanchorY",100),e.viewportAnchorX=n.get("viewportanchorX",0),e.viewportAnchorY=n.get("viewportanchorY",100),e.scroll=n.get("scroll",""),s.onregion&&s.onregion(e),s.regionList.push({id:n.get("id"),region:e})}}(e)}},/:/)}t&&(s.buffer+=s.decoder.decode(t,{stream:!0}));try{var r;if("INITIAL"===s.state){if(!/\r\n|\n/.test(s.buffer))return this;var n=(r=e()).match(/^WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new Fi(Fi.Errors.BadSignature);s.state="HEADER"}for(var a=!1;s.buffer;){if(!/\r\n|\n/.test(s.buffer))return this;switch(a?a=!1:r=e(),s.state){case"HEADER":/:/.test(r)?i(r):r||(s.state="ID");continue;case"NOTE":r||(s.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){s.state="NOTE";break}if(!r)continue;if(s.cue=new(s.vttjs.VTTCue||s.window.VTTCue)(0,0,""),s.state="CUE",-1===r.indexOf("--\x3e")){s.cue.id=r;continue}case"CUE":try{Wi(r,s.cue,s.regionList)}catch(t){s.reportOrThrowError(t),s.cue=null,s.state="BADCUE";continue}s.state="CUETEXT";continue;case"CUETEXT":var o=-1!==r.indexOf("--\x3e");if(!r||o&&(a=!0)){s.oncue&&s.oncue(s.cue),s.cue=null,s.state="ID";continue}s.cue.text&&(s.cue.text+="\n"),s.cue.text+=r;continue;case"BADCUE":r||(s.state="ID");continue}}}catch(t){s.reportOrThrowError(t),"CUETEXT"===s.state&&s.cue&&s.oncue&&s.oncue(s.cue),s.cue=null,s.state="INITIAL"===s.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse()),"INITIAL"===e.state)throw new Fi(Fi.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var rr=ir,nr=Object.freeze({default:rr,__moduleExports:rr}),sr="auto",ar={"":1,lr:1,rl:1},or={start:1,middle:1,end:1,left:1,right:1};function ur(t){return"string"==typeof t&&(!!or[t.toLowerCase()]&&t.toLowerCase())}function lr(t,e,i){this.hasBeenReset=!1;var r="",n=!1,s=t,a=e,o=i,u=null,l="",c=!0,h="auto",d="start",p=50,f="middle",m=50,g="middle";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(t){r=""+t}},pauseOnExit:{enumerable:!0,get:function(){return n},set:function(t){n=!!t}},startTime:{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");s=t,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");a=t,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(t){o=""+t,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return u},set:function(t){u=t,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return l},set:function(t){var e,i="string"==typeof(e=t)&&!!ar[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");l=i,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return c},set:function(t){c=!!t,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t&&t!==sr)throw new SyntaxError("An invalid number or illegal string was specified.");h=t,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return d},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");d=e,this.hasBeenReset=!0}},position:{enumerable:!0,get:function(){return p},set:function(t){if(t<0||100<t)throw new Error("Position must be between 0 and 100.");p=t,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return f},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");f=e,this.hasBeenReset=!0}},size:{enumerable:!0,get:function(){return m},set:function(t){if(t<0||100<t)throw new Error("Size must be between 0 and 100.");m=t,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return g},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");g=e,this.hasBeenReset=!0}}}),this.displayState=void 0}lr.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var cr=lr,hr=Object.freeze({default:cr,__moduleExports:cr}),dr={"":!0,up:!0};function pr(t){return"number"==typeof t&&0<=t&&t<=100}var fr=function(){var e=100,i=3,r=0,n=100,s=0,a=100,o="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(t){if(!pr(t))throw new Error("Width must be between 0 and 100.");e=t}},lines:{enumerable:!0,get:function(){return i},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.");i=t}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(t){if(!pr(t))throw new Error("RegionAnchorX must be between 0 and 100.");n=t}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(t){if(!pr(t))throw new Error("RegionAnchorY must be between 0 and 100.");r=t}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(t){if(!pr(t))throw new Error("ViewportAnchorY must be between 0 and 100.");a=t}},viewportAnchorX:{enumerable:!0,get:function(){return s},set:function(t){if(!pr(t))throw new Error("ViewportAnchorX must be between 0 and 100.");s=t}},scroll:{enumerable:!0,get:function(){return o},set:function(t){var e,i="string"==typeof(e=t)&&!!dr[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");o=i}}})},mr=Object.freeze({default:fr,__moduleExports:fr}),gr=nr&&rr||nr,yr=hr&&cr||hr,vr=mr&&fr||mr,_r=e(function(t){var e=t.exports={WebVTT:gr,VTTCue:yr,VTTRegion:vr};g.vttjs=e,g.WebVTT=e.WebVTT;var i=e.VTTCue,r=e.VTTRegion,n=g.VTTCue,s=g.VTTRegion;e.shim=function(){g.VTTCue=i,g.VTTRegion=r},e.restore=function(){g.VTTCue=n,g.VTTRegion=s},g.VTTCue||e.shim()});_r.WebVTT,_r.VTTCue,_r.VTTRegion;var br=function(e){function n(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};y(this,n),i.reportTouchActivity=!1;var r=b(this,e.call(this,null,i,t));return r.hasStarted_=!1,r.on("playing",function(){this.hasStarted_=!0}),r.on("loadstart",function(){this.hasStarted_=!1}),Bi.names.forEach(function(t){var e=Bi[t];i&&i[e.getterName]&&(r[e.privateName]=i[e.getterName])}),r.featuresProgressEvents||r.manualProgressOn(),r.featuresTimeupdateEvents||r.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===i["native"+t+"Tracks"]&&(r["featuresNative"+t+"Tracks"]=!1)}),!1===i.nativeCaptions||!1===i.nativeTextTracks?r.featuresNativeTextTracks=!1:!0!==i.nativeCaptions&&!0!==i.nativeTextTracks||(r.featuresNativeTextTracks=!0),r.featuresNativeTextTracks||r.emulateTextTracks(),r.autoRemoteTextTracks_=new Bi.text.ListClass,r.initTrackListeners(),i.nativeControlsForTouch||r.emitTapEvents(),r.constructor&&(r.name_=r.constructor.name||"Unknown Tech"),r}return _(n,e),n.prototype.triggerSourceset=function(t){var e=this;this.isReady_||this.one("ready",function(){return e.setTimeout(function(){return e.triggerSourceset(t)},1)}),this.trigger({src:t,type:"sourceset"})},n.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},n.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},n.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Ot(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),1===(this.bufferedPercent_=t)&&this.stopTrackingProgress()}),500)},n.prototype.onDurationChange=function(t){this.duration_=this.duration()},n.prototype.buffered=function(){return be(0,0)},n.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration_)},n.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},n.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},n.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},n.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},n.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.dispose=function(){this.clearTracks(Ui.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),e.prototype.dispose.call(this)},n.prototype.clearTracks=function(t){var n=this;(t=[].concat(t)).forEach(function(t){for(var e=n[t+"Tracks"]()||[],i=e.length;i--;){var r=e[i];"text"===t&&n.removeRemoteTextTrack(r),e.removeTrack(r)}})},n.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var i=t[e];this.removeRemoteTextTrack(i)}},n.prototype.reset=function(){},n.prototype.error=function(t){return void 0!==t&&(this.error_=new Le(t),this.trigger("error")),this.error_},n.prototype.played=function(){return this.hasStarted_?be(0,0):be()},n.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.initTrackListeners=function(){var n=this;Ui.names.forEach(function(t){var e=Ui[t],i=function(){n.trigger(t+"trackchange")},r=n[e.getterName]();r.addEventListener("removetrack",i),r.addEventListener("addtrack",i),n.on("dispose",function(){r.removeEventListener("removetrack",i),r.removeEventListener("addtrack",i)})})},n.prototype.addWebVttScript_=function(){var t=this;if(!g.WebVTT)if(p.body.contains(this.el())){if(!this.options_["vtt.js"]&&w(_r)&&0<Object.keys(_r).length)return void this.trigger("vttjsloaded");var e=p.createElement("script");e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),g.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},n.prototype.emulateTextTracks=function(){var t=this,i=this.textTracks(),e=this.remoteTextTracks(),r=function(t){return i.addTrack(t.track)},n=function(t){return i.removeTrack(t.track)};e.on("addtrack",r),e.on("removetrack",n),this.addWebVttScript_();var s=function(){return t.trigger("texttrackchange")},a=function(){s();for(var t=0;t<i.length;t++){var e=i[t];e.removeEventListener("cuechange",s),"showing"===e.mode&&e.addEventListener("cuechange",s)}};a(),i.addEventListener("change",a),i.addEventListener("addtrack",a),i.addEventListener("removetrack",a),this.on("dispose",function(){e.off("addtrack",r),e.off("removetrack",n),i.removeEventListener("change",a),i.removeEventListener("addtrack",a),i.removeEventListener("removetrack",a);for(var t=0;t<i.length;t++){i[t].removeEventListener("cuechange",s)}})},n.prototype.addTextTrack=function(t,e,i){if(!t)throw new Error("TextTrack kind is required but was not provided");return function(t,e,i,r){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},s=t.textTracks();n.kind=e,i&&(n.label=i),r&&(n.language=r),n.tech=t;var a=new Bi.text.TrackClass(n);return s.addTrack(a),a}(this,t,e,i)},n.prototype.createRemoteTextTrack=function(t){var e=Gt(t,{tech:this});return new Ni.remoteTextEl.TrackClass(e)},n.prototype.addRemoteTextTrack=function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=this.createRemoteTextTrack(e);return!0!==i&&!1!==i&&(f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),i=!0),this.remoteTextTrackEls().addTrackElement_(r),this.remoteTextTracks().addTrack(r.track),!0!==i&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(r.track)}),r},n.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t);this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},n.prototype.getVideoPlaybackQuality=function(){return{}},n.prototype.setPoster=function(){},n.prototype.playsinline=function(){},n.prototype.setPlaysinline=function(){},n.prototype.overrideNativeAudioTracks=function(){},n.prototype.overrideNativeVideoTracks=function(){},n.prototype.canPlayType=function(){return""},n.canPlayType=function(){return""},n.canPlaySource=function(t,e){return n.canPlayType(t.type)},n.isTech=function(t){return t.prototype instanceof n||t instanceof n||t===n},n.registerTech=function(t,e){if(n.techs_||(n.techs_={}),!n.isTech(e))throw new Error("Tech "+t+" must be a Tech");if(!n.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!n.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return t=zt(t),n.techs_[t]=e,"Tech"!==t&&n.defaultTechOrder_.push(t),e},n.getTech=function(t){if(t)return t=zt(t),n.techs_&&n.techs_[t]?n.techs_[t]:g&&g.videojs&&g.videojs[t]?(f.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),g.videojs[t]):void 0},n}(Xt);Bi.names.forEach(function(t){var e=Bi[t];br.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),br.prototype.featuresVolumeControl=!0,br.prototype.featuresFullscreenResize=!1,br.prototype.featuresPlaybackRate=!1,br.prototype.featuresProgressEvents=!1,br.prototype.featuresSourceset=!1,br.prototype.featuresTimeupdateEvents=!1,br.prototype.featuresNativeTextTracks=!1,br.withSourceHandlers=function(n){n.registerSourceHandler=function(t,e){var i=n.sourceHandlers;i||(i=n.sourceHandlers=[]),void 0===e&&(e=i.length),i.splice(e,0,t)},n.canPlayType=function(t){for(var e=n.sourceHandlers||[],i=void 0,r=0;r<e.length;r++)if(i=e[r].canPlayType(t))return i;return""},n.selectSourceHandler=function(t,e){for(var i=n.sourceHandlers||[],r=0;r<i.length;r++)if(i[r].canHandleSource(t,e))return i[r];return null},n.canPlaySource=function(t,e){var i=n.selectSourceHandler(t,e);return i?i.canHandleSource(t,e):""};["seekable","seeking","duration"].forEach(function(t){var e=this[t];"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},n.prototype),n.prototype.setSource=function(t){var e=n.selectSourceHandler(t,this.options_);e||(n.nativeSourceHandler?e=n.nativeSourceHandler:f.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),e!==n.nativeSourceHandler&&(this.currentSource_=t),this.sourceHandler_=e.handleSource(t,this,this.options_),this.on("dispose",this.disposeSourceHandler)},n.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Xt.registerComponent("Tech",br),br.registerTech("Tech",br),br.defaultTechOrder_=[];var Tr={},Sr={},kr={};function Cr(t,e,i){t.setTimeout(function(){return function i(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];var n=arguments[2];var s=arguments[3];var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];var e=t[0],u=t.slice(1);if("string"==typeof e)i(r,Tr[e],n,s,a,o);else if(e){var l=function(t,e){var i=Sr[t.id()],r=null;if(null==i)return r=e(t),Sr[t.id()]=[[e,r]],r;for(var n=0;n<i.length;n++){var s=i[n],a=s[0],o=s[1];a===e&&(r=o)}null===r&&(r=e(t),i.push([e,r]));return r}(s,e);l.setSource(C({},r),function(t,e){if(t)return i(r,u,n,s,a,o);a.push(l),i(e,r.type===e.type?u:Tr[e.type],n,s,a,o)})}else u.length?i(r,u,n,s,a,o):o?n(r,a):i(r,Tr["*"],n,s,a,!0)}(e,Tr[e.type],i,t)},1)}function Er(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n="call"+zt(i),s=t.reduce(Pr(n),r),a=s===kr,o=a?null:e[i](s);return function(t,e,i,r){for(var n=t.length-1;0<=n;n--){var s=t[n];s[e]&&s[e](r,i)}}(t,i,o,a),o}var wr={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},Ar={setCurrentTime:1},Lr={play:1,pause:1};function Pr(i){return function(t,e){return t===kr?kr:e[i]?e[i](t):t}}var Or={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"},xr=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=ti(t);return Or[e.toLowerCase()]||""};function Ir(t){var e=xr(t.src);return!t.type&&e&&(t.type=e),t}var Dr=function(l){function c(t,e,i){y(this,c);var r=Gt({createEl:!1},e),n=b(this,l.call(this,t,r,i));if(e.playerOptions.sources&&0!==e.playerOptions.sources.length)t.src(e.playerOptions.sources);else for(var s=0,a=e.playerOptions.techOrder;s<a.length;s++){var o=zt(a[s]),u=br.getTech(o);if(o||(u=Xt.getComponent(o)),u&&u.isSupported()){t.loadTech_(o);break}}return n}return _(c,l),c}(Xt);Xt.registerComponent("MediaLoader",Dr);var Rr=function(n){function r(t,e){y(this,r);var i=b(this,n.call(this,t,e));return i.emitTapEvents(),i.enable(),i}return _(r,n),r.prototype.createEl=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},e),"button"===t&&f.error("Creating a ClickableComponent with an HTML element of "+t+" is not supported; use a Button instead."),i=C({role:"button"},i),this.tabIndex_=e.tabIndex;var r=n.prototype.createEl.call(this,t,e,i);return this.createControlTextEl(r),r},r.prototype.dispose=function(){this.controlTextEl_=null,n.prototype.dispose.call(this)},r.prototype.createControlTextEl=function(t){return this.controlTextEl_=M("span",{className:"vjs-control-text"},{"aria-live":"polite"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},r.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.el();if(void 0===t)return this.controlText_||"Need Text";var i=this.localize(t);this.controlText_=t,U(this.controlTextEl_,i),this.nonIconControl||e.setAttribute("title",i)},r.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+n.prototype.buildCSSClass.call(this)},r.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),"undefined"!=typeof this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},r.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),"undefined"!=typeof this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},r.prototype.handleClick=function(t){},r.prototype.handleFocus=function(t){_t(p,"keydown",Ot(this,this.handleKeyPress))},r.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.trigger("click")):n.prototype.handleKeyPress&&n.prototype.handleKeyPress.call(this,t)},r.prototype.handleBlur=function(t){bt(p,"keydown",Ot(this,this.handleKeyPress))},r}(Xt);Xt.registerComponent("ClickableComponent",Rr);var Mr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update(),t.on("posterchange",Ot(i,i.update)),i}return _(n,r),n.prototype.dispose=function(){this.player().off("posterchange",this.update),r.prototype.dispose.call(this)},n.prototype.createEl=function(){return M("div",{className:"vjs-poster",tabIndex:-1})},n.prototype.update=function(t){var e=this.player().poster();this.setSrc(e),e?this.show():this.hide()},n.prototype.setSrc=function(t){var e="";t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e},n.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause())},n}(Rr);Xt.registerComponent("PosterImage",Mr);var Ur="#222",Nr={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};function Br(t,e){return"rgba("+parseInt(t[1]+t[1],16)+","+parseInt(t[2]+t[2],16)+","+parseInt(t[3]+t[3],16)+","+e+")"}function jr(t,e,i){try{t.style[e]=i}catch(t){return}}var Fr=function(n){function s(i,t,e){y(this,s);var r=b(this,n.call(this,i,t,e));return i.on("loadstart",Ot(r,r.toggleDisplay)),i.on("texttrackchange",Ot(r,r.updateDisplay)),i.on("loadstart",Ot(r,r.preselectTrack)),i.ready(Ot(r,function(){if(i.tech_&&i.tech_.featuresNativeTextTracks)this.hide();else{i.on("fullscreenchange",Ot(this,this.updateDisplay));for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0);this.preselectTrack()}})),r}return _(s,n),s.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),i=this.player_.cache_.selectedLanguage,r=void 0,n=void 0,s=void 0,a=0;a<e.length;a++){var o=e[a];i&&i.enabled&&i.language===o.language?o.kind===i.kind?s=o:s||(s=o):i&&!i.enabled?n=r=s=null:o.default&&("descriptions"!==o.kind||r?o.kind in t&&!n&&(n=o):r=o)}s?s.mode="showing":n?n.mode="showing":r&&(r.mode="showing")},s.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},s.prototype.clearDisplay=function(){"function"==typeof g.WebVTT&&g.WebVTT.processCues(g,[],this.el_)},s.prototype.updateDisplay=function(){var t=this.player_.textTracks();this.clearDisplay();for(var e=null,i=null,r=t.length;r--;){var n=t[r];"showing"===n.mode&&("descriptions"===n.kind?e=n:i=n)}i?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(i)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},s.prototype.updateForTrack=function(t){if("function"==typeof g.WebVTT&&t.activeCues){for(var e=[],i=0;i<t.activeCues.length;i++)e.push(t.activeCues[i]);if(g.WebVTT.processCues(g,e,this.el_),this.player_.textTrackSettings)for(var r=this.player_.textTrackSettings.getValues(),n=e.length;n--;){var s=e[n];if(s){var a=s.displayState;if(r.color&&(a.firstChild.style.color=r.color),r.textOpacity&&jr(a.firstChild,"color",Br(r.color||"#fff",r.textOpacity)),r.backgroundColor&&(a.firstChild.style.backgroundColor=r.backgroundColor),r.backgroundOpacity&&jr(a.firstChild,"backgroundColor",Br(r.backgroundColor||"#000",r.backgroundOpacity)),r.windowColor&&(r.windowOpacity?jr(a,"backgroundColor",Br(r.windowColor,r.windowOpacity)):a.style.backgroundColor=r.windowColor),r.edgeStyle&&("dropshadow"===r.edgeStyle?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px "+Ur:"raised"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px "+Ur:"depressed"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px "+Ur:"uniform"===r.edgeStyle&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px "+Ur)),r.fontPercent&&1!==r.fontPercent){var o=g.parseFloat(a.style.fontSize);a.style.fontSize=o*r.fontPercent+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px"}r.fontFamily&&"default"!==r.fontFamily&&("small-caps"===r.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Nr[r.fontFamily])}}}},s}(Xt);Xt.registerComponent("TextTrackDisplay",Fr);var Hr=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(){var t=this.player_.isAudio(),e=this.localize(t?"Audio Player":"Video Player"),i=M("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[e])}),r=n.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return r.appendChild(i),r},t}(Xt);Xt.registerComponent("LoadingSpinner",Hr);var Vr=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),i=C({type:"button"},i);var r=Xt.prototype.createEl.call(this,"button",e,i);return this.createControlTextEl(r),r},t.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this.constructor.name;return f.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),Xt.prototype.addChild.call(this,t,e)},t.prototype.enable=function(){e.prototype.enable.call(this),this.el_.removeAttribute("disabled")},t.prototype.disable=function(){e.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},t.prototype.handleKeyPress=function(t){32!==t.which&&13!==t.which&&e.prototype.handleKeyPress.call(this,t)},t}(Rr);Xt.registerComponent("Button",Vr);var qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-big-play-button"},n.prototype.handleClick=function(t){var e=this.player_.play();if(!(this.mouseused_&&t.clientX&&t.clientY)){var i=this.player_.getChild("controlBar"),r=i&&i.getChild("playToggle");if(r){var n=function(){return r.focus()};xe(e)?e.then(n,function(){}):this.setTimeout(n,1)}else this.player_.focus()}},n.prototype.handleKeyPress=function(t){this.mouseused_=!1,r.prototype.handleKeyPress.call(this,t)},n.prototype.handleMouseDown=function(t){this.mouseused_=!0},n}(Vr);qr.prototype.controlText_="Play Video",Xt.registerComponent("BigPlayButton",qr);var Wr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.controlText(e&&e.controlText||i.localize("Close")),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-close-button "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},n}(Vr);Xt.registerComponent("CloseButton",Wr);var zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"play",i.handlePlay),i.on(t,"pause",i.handlePause),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-play-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},n.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},n.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},n.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},n}(Vr);zr.prototype.controlText_="Play",Xt.registerComponent("PlayToggle",zr);var Gr=function(t,e){t=t<0?0:t;var i=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600),s=Math.floor(e/60%60),a=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=i="-"),(n=0<n||0<a?n+":":"")+(r=((n||10<=s)&&r<10?"0"+r:r)+":")+(i=i<10?"0"+i:i)},Xr=Gr;function Yr(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t;return Xr(t,e)}var $r=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.throttledUpdateContent=xt(Ot(i,i.updateContent),25),i.on(t,"timeupdate",i.throttledUpdateContent),i}return _(n,r),n.prototype.createEl=function(t){var e=this.buildCSSClass(),i=r.prototype.createEl.call(this,"div",{className:e+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text">'+this.localize(this.labelText_)+" </span>"});return this.contentEl_=M("span",{className:e+"-display"},{"aria-live":"off"}),this.updateTextNode_(),i.appendChild(this.contentEl_),i},n.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,r.prototype.dispose.call(this)},n.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=p.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},n.prototype.formatTime_=function(t){return Yr(t)},n.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t);e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},n.prototype.updateContent=function(t){},n}(Xt);$r.prototype.labelText_="Time",$r.prototype.controlText_="Time",Xt.registerComponent("TimeDisplay",$r);var Kr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-current-time"},n.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(e)},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},n}($r);Kr.prototype.labelText_="Current Time",Kr.prototype.controlText_="Current Time",Xt.registerComponent("CurrentTimeDisplay",Kr);var Qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.updateContent),i.on(t,"loadedmetadata",i.throttledUpdateContent),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-duration"},n.prototype.updateContent=function(t){var e=this.player_.duration();e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},n}($r);Qr.prototype.labelText_="Duration",Qr.prototype.controlText_="Duration",Xt.registerComponent("DurationDisplay",Qr);var Jr=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(Xt);Xt.registerComponent("TimeDivider",Jr);var Zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.throttledUpdateContent),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-remaining-time"},n.prototype.formatTime_=function(t){return"-"+r.prototype.formatTime_.call(this,t)},n.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},n}($r);Zr.prototype.labelText_="Remaining Time",Zr.prototype.controlText_="Remaining Time",Xt.registerComponent("RemainingTimeDisplay",Zr);var tn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=M("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+" </span>"+this.localize("LIVE")},{"aria-live":"off"}),t.appendChild(this.contentEl_),t},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},n}(Xt);Xt.registerComponent("LiveDisplay",tn);var en=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return _(n,r),n.prototype.enabled=function(){return this.enabled_},n.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},n.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},n.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return e.className=e.className+" vjs-slider",e=C({tabIndex:0},e),i=C({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),r.prototype.createEl.call(this,t,e,i)},n.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument;t.preventDefault(),X(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},n.prototype.handleMouseMove=function(t){},n.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument;Y(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},n.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar;if(e){("number"!=typeof t||t!=t||t<0||t===1/0)&&(t=0);var i=(100*t).toFixed(2)+"%",r=e.el().style;return this.vertical()?r.height=i:r.width=i,t}}},n.prototype.calculateDistance=function(t){var e=Q(this.el_,t);return this.vertical()?e.y:e.x},n.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},n.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},n.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1;this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},n}(Xt);Xt.registerComponent("Slider",en);var rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.partEls_=[],i.on(t,"progress",i.update),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},n.prototype.dispose=function(){this.partEls_=null,r.prototype.dispose.call(this)},n.prototype.update=function(t){var e=this.player_.buffered(),i=this.player_.duration(),r=this.player_.bufferedEnd(),n=this.partEls_,s=function(t,e){var i=t/e||0;return 100*(1<=i?1:i)+"%"};this.el_.style.width=s(r,i);for(var a=0;a<e.length;a++){var o=e.start(a),u=e.end(a),l=n[a];l||(l=this.el_.appendChild(M()),n[a]=l),l.style.left=s(o,r),l.style.width=s(u-o,r)}for(var c=n.length;c>e.length;c--)this.el_.removeChild(n[c-1]);n.length=e.length},n}(Xt);Xt.registerComponent("LoadProgressBar",rn);var nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,i){var r=$(this.el_),n=$(this.player_.el()),s=t.width*e;if(n&&r){var a=t.left-n.left+s,o=t.width-s+(n.right-t.right),u=r.width/2;a<u?u+=u-a:o<u&&(u=o),u<0?u=0:u>r.width&&(u=r.width),this.el_.style.right="-"+u+"px",U(this.el_,i)}},e}(Xt);Xt.registerComponent("TimeTooltip",nn);var sn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=Yr(n.player_.scrubbing()?n.player_.getCache().currentTime:n.player_.currentTime(),n.player_.duration()),e=n.getChild("timeTooltip");e&&e.update(i,r,t)})},e}(Xt);sn.prototype.options_={children:[]},ne||ae||sn.prototype.options_.children.push("timeTooltip"),Xt.registerComponent("PlayProgressBar",sn);var an=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update=xt(Ot(i,i.update),25),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},n.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=n.player_.duration(),e=Yr(r*t,t);n.el_.style.left=i.width*r+"px",n.getChild("timeTooltip").update(i,r,e)})},n}(Xt);an.prototype.options_={children:["timeTooltip"]},Xt.registerComponent("MouseTimeDisplay",an);var on=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.setEventHandlers_(),i}return _(n,r),n.prototype.setEventHandlers_=function(){var t=this;this.update=xt(Ot(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){t.clearInterval(t.updateInterval),t.updateInterval=t.setInterval(function(){t.requestAnimationFrame(function(){t.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){t.clearInterval(t.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},n.prototype.update_=function(t,e){var i=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[Yr(t,i),Yr(i,i)],"{1} of {2}")),this.bar.update($(this.el_),e)},n.prototype.update=function(t){var e=r.prototype.update.call(this);return this.update_(this.getCurrentTime_(),e),e},n.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},n.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},n.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration();return 1<=t?1:t||0},n.prototype.handleMouseDown=function(t){rt(t)&&(t.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),r.prototype.handleMouseDown.call(this,t))},n.prototype.handleMouseMove=function(t){if(rt(t)){var e=this.calculateDistance(t)*this.player_.duration();e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)}},n.prototype.enable=function(){r.prototype.enable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.show()},n.prototype.disable=function(){r.prototype.disable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.hide()},n.prototype.handleMouseUp=function(t){r.prototype.handleMouseUp.call(this,t),t&&t.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&Ie(this.player_.play())},n.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},n.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},n.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.handleAction(t)):r.prototype.handleKeyPress&&r.prototype.handleKeyPress.call(this,t)},n}(en);on.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},ne||ae||on.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),on.prototype.playerEvent="timeupdate",Xt.registerComponent("SeekBar",on);var un=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.handleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=xt(Ot(i,i.handleMouseSeek),25),i.enable(),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},n.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar");if(e){var i=e.getChild("mouseTimeDisplay"),r=e.el(),n=$(r),s=Q(r,t).x;1<s?s=1:s<0&&(s=0),i&&i.update(n,s)}},n.prototype.handleMouseSeek=function(t){var e=this.getChild("seekBar");e&&e.handleMouseMove(t)},n.prototype.enabled=function(){return this.enabled_},n.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},n.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseDown(t),this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseUp(t),this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n}(Xt);un.prototype.options_={children:["seekBar"]},Xt.registerComponent("ProgressControl",un);var ln=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"fullscreenchange",i.handleFullscreenChange),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},n.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},n}(Vr);ln.prototype.controlText_="Fullscreen",Xt.registerComponent("FullscreenToggle",ln);var cn=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},hn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(Xt);Xt.registerComponent("VolumeLevel",hn);var dn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on("slideractive",i.updateLastVolume_),i.on(t,"volumechange",i.updateARIAAttributes),t.ready(function(){return i.updateARIAAttributes()}),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},n.prototype.handleMouseDown=function(t){rt(t)&&r.prototype.handleMouseDown.call(this,t)},n.prototype.handleMouseMove=function(t){rt(t)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(t)))},n.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},n.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},n.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},n.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},n.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},n.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},n.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume();this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},n}(en);dn.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},dn.prototype.playerEvent="volumechange",Xt.registerComponent("VolumeBar",dn);var pn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),e.vertical=e.vertical||!1,("undefined"==typeof e.volumeBar||w(e.volumeBar))&&(e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=e.vertical);var i=b(this,r.call(this,t,e));return cn(i,t),i.throttledHandleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return _(n,r),n.prototype.createEl=function(){var t="vjs-volume-horizontal";return this.options_.vertical&&(t="vjs-volume-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+t})},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},n}(Xt);pn.prototype.options_={children:["volumeBar"]},Xt.registerComponent("VolumeControl",pn);var fn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(t,["loadstart","volumechange"],i.update),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-mute-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){var e=this.player_.volume(),i=this.player_.lastVolume_();if(0===e){var r=i<.1?.1:i;this.player_.volume(r),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},n.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},n.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3;0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2);for(var i=0;i<4;i++)F(this.el_,"vjs-vol-"+i);j(this.el_,"vjs-vol-"+e)},n.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute";this.controlText()!==t&&this.controlText(t)},n}(Vr);fn.prototype.controlText_="Mute",Xt.registerComponent("MuteToggle",fn);var mn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),"undefined"!=typeof e.inline?e.inline=e.inline:e.inline=!0,("undefined"==typeof e.volumeControl||w(e.volumeControl))&&(e.volumeControl=e.volumeControl||{},e.volumeControl.vertical=!e.inline);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i}return _(n,r),n.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},n.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},n.prototype.createEl=function(){var t="vjs-volume-panel-horizontal";return this.options_.inline||(t="vjs-volume-panel-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+t})},n}(Xt);mn.prototype.options_={children:["muteToggle","volumeControl"]},Xt.registerComponent("VolumePanel",mn);var gn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return e&&(i.menuButton_=e.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return _(n,r),n.prototype.addItem=function(e){this.addChild(e),e.on("click",Ot(this,function(t){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==e.name()&&this.menuButton_.focus())}))},n.prototype.createEl=function(){var t=this.options_.contentElType||"ul";this.contentEl_=M(t,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var e=r.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return e.appendChild(this.contentEl_),_t(e,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),e},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},n.prototype.stepForward=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},n.prototype.stepBack=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},n.prototype.focus=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice();e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),0<e.length&&(t<0?t=0:t>=e.length&&(t=e.length-1),e[this.focusedChild_=t].el_.focus())},n}(Xt);Xt.registerComponent("Menu",gn);var yn=function(n){function s(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,s);var i=b(this,n.call(this,t,e));i.menuButton_=new Vr(t,e),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var r=Vr.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+r,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return _(s,n),s.prototype.update=function(){var t=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},s.prototype.createMenu=function(){var t=new gn(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var e=M("li",{className:"vjs-menu-title",innerHTML:zt(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,t.children_.unshift(e),N(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)t.addItem(this.items[i]);return t},s.prototype.createItems=function(){},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},s.prototype.buildWrapperCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+Vr.prototype.buildCSSClass()+" "+n.prototype.buildCSSClass.call(this)},s.prototype.buildCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+n.prototype.buildCSSClass.call(this)},s.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(t,e)},s.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",Ot(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},s.prototype.focus=function(){this.menuButton_.focus()},s.prototype.blur=function(){this.menuButton_.blur()},s.prototype.handleFocus=function(){_t(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleBlur=function(){bt(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},s.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},s.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),ne&&D())return;this.menu.focus()}},s.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},s.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},s.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},s}(Xt);Xt.registerComponent("MenuButton",yn);var vn=function(s){function a(t,e){y(this,a);var i=e.tracks,r=b(this,s.call(this,t,e));if(r.items.length<=1&&r.hide(),!i)return b(r);var n=Ot(r,r.update);return i.addEventListener("removetrack",n),i.addEventListener("addtrack",n),r.player_.on("ready",n),r.player_.on("dispose",function(){i.removeEventListener("removetrack",n),i.removeEventListener("addtrack",n)}),r}return _(a,s),a}(yn);Xt.registerComponent("TrackButton",vn);var _n=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.selectable=e.selectable,i.isSelected_=e.selected||!1,i.selected(i.isSelected_),i.selectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitem"),i}return _(n,r),n.prototype.createEl=function(t,e,i){return this.nonIconControl=!0,r.prototype.createEl.call(this,"li",C({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},e),i)},n.prototype.handleClick=function(t){this.selected(!0)},n.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},n}(Rr);Xt.registerComponent("MenuItem",_n);var bn=function(u){function l(t,e){y(this,l);var i=e.track,r=t.textTracks();e.label=i.label||i.language||"Unknown",e.selected="showing"===i.mode;var n=b(this,u.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)},a=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleSelectedLanguageChange.apply(n,e)};if(t.on(["loadstart","texttrackchange"],s),r.addEventListener("change",s),r.addEventListener("selectedlanguagechange",a),n.on("dispose",function(){t.off(["loadstart","texttrackchange"],s),r.removeEventListener("change",s),r.removeEventListener("selectedlanguagechange",a)}),void 0===r.onchange){var o=void 0;n.on(["tap","click"],function(){if("object"!==v(g.Event))try{o=new g.Event("change")}catch(t){}o||(o=p.createEvent("Event")).initEvent("change",!0,!0),r.dispatchEvent(o)})}return n.handleTracksChange(),n}return _(l,u),l.prototype.handleClick=function(t){var e=this.track.kind,i=this.track.kinds,r=this.player_.textTracks();if(i||(i=[e]),u.prototype.handleClick.call(this,t),r)for(var n=0;n<r.length;n++){var s=r[n];s===this.track&&-1<i.indexOf(s.kind)?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},l.prototype.handleTracksChange=function(t){var e="showing"===this.track.mode;e!==this.isSelected_&&this.selected(e)},l.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage;if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},l.prototype.dispose=function(){this.track=null,u.prototype.dispose.call(this)},l}(_n);Xt.registerComponent("TextTrackMenuItem",bn);var Tn=function(i){function r(t,e){return y(this,r),e.track={player:t,kind:e.kind,kinds:e.kinds,default:!1,mode:"disabled"},e.kinds||(e.kinds=[e.kind]),e.label?e.track.label=e.label:e.track.label=e.kinds.join(" and ")+" off",e.selectable=!0,b(this,i.call(this,t,e))}return _(r,i),r.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<this.options_.kinds.indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i!==this.isSelected_&&this.selected(i)},r.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<["captions","descriptions","subtitles"].indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})},r}(bn);Xt.registerComponent("OffTextTrackMenuItem",Tn);var Sn=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.textTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:bn,i=void 0;this.label_&&(i=this.label_+" off"),t.push(new Tn(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i})),this.hideThreshold_+=1;var r=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var n=0;n<r.length;n++){var s=r[n];if(-1<this.kinds_.indexOf(s.kind)){var a=new e(this.player_,{track:s,selectable:!0});a.addClass("vjs-"+s.kind+"-menu-item"),t.push(a)}}return t},r}(vn);Xt.registerComponent("TextTrackButton",Sn);var kn=function(a){function o(t,e){y(this,o);var i=e.track,r=e.cue,n=t.currentTime();e.selectable=!0,e.label=r.text,e.selected=r.startTime<=n&&n<r.endTime;var s=b(this,a.call(this,t,e));return s.track=i,s.cue=r,i.addEventListener("cuechange",Ot(s,s.update)),s}return _(o,a),o.prototype.handleClick=function(t){a.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},o.prototype.update=function(t){var e=this.cue,i=this.player_.currentTime();this.selected(e.startTime<=i&&i<e.endTime)},o}(_n);Xt.registerComponent("ChaptersTrackMenuItem",kn);var Cn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.update=function(t){this.track_&&(!t||"addtrack"!==t.type&&"removetrack"!==t.type)||this.setTrack(this.findChaptersTrack()),r.prototype.update.call(this)},n.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);i&&i.addEventListener("load",this.updateHandler_)}}},n.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;0<=e;e--){var i=t[e];if(i.kind===this.kind_)return i}},n.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(zt(this.kind_))},n.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),r.prototype.createMenu.call(this)},n.prototype.createItems=function(){var t=[];if(!this.track_)return t;var e=this.track_.cues;if(!e)return t;for(var i=0,r=e.length;i<r;i++){var n=e[i],s=new kn(this.player_,{track:this.track_,cue:n});t.push(s)}return t},n}(Sn);Cn.prototype.kind_="chapters",Cn.prototype.controlText_="Chapters",Xt.registerComponent("ChaptersButton",Cn);var En=function(a){function o(t,e,i){y(this,o);var r=b(this,a.call(this,t,e,i)),n=t.textTracks(),s=Ot(r,r.handleTracksChange);return n.addEventListener("change",s),r.on("dispose",function(){n.removeEventListener("change",s)}),r}return _(o,a),o.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!1,r=0,n=e.length;r<n;r++){var s=e[r];if(s.kind!==this.kind_&&"showing"===s.mode){i=!0;break}}i?this.disable():this.enable()},o.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildCSSClass.call(this)},o.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildWrapperCSSClass.call(this)},o}(Sn);En.prototype.kind_="descriptions",En.prototype.controlText_="Descriptions",Xt.registerComponent("DescriptionsButton",En);var wn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildWrapperCSSClass.call(this)},n}(Sn);wn.prototype.kind_="subtitles",wn.prototype.controlText_="Subtitles",Xt.registerComponent("SubtitlesButton",wn);var An=function(r){function n(t,e){y(this,n),e.track={player:t,kind:e.kind,label:e.kind+" settings",selectable:!1,default:!1,mode:"disabled"},e.selectable=!1,e.name="CaptionSettingsMenuItem";var i=b(this,r.call(this,t,e));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+e.kind+" settings dialog"),i}return _(n,r),n.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},n}(bn);Xt.registerComponent("CaptionSettingsMenuItem",An);var Ln=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-captions-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),r.prototype.createItems.call(this,t)},n}(Sn);Ln.prototype.kind_="captions",Ln.prototype.controlText_="Captions",Xt.registerComponent("CaptionsButton",Ln);var Pn=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(t,e,i){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),r+="</span>",n.prototype.createEl.call(this,t,C({innerHTML:r},e),i)},t}(bn);Xt.registerComponent("SubsCapsMenuItem",Pn);var On=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.label_="subtitles",-1<["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)&&(i.label_="captions"),i.menuButton_.controlText(zt(i.label_)),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.label_})),this.hideThreshold_+=1),t=r.prototype.createItems.call(this,t,Pn)},n}(Sn);On.prototype.kinds_=["captions","subtitles"],On.prototype.controlText_="Subtitles",Xt.registerComponent("SubsCapsButton",On);var xn=function(a){function o(t,e){y(this,o);var i=e.track,r=t.audioTracks();e.label=i.label||i.language||"Unknown",e.selected=i.enabled;var n=b(this,a.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)};return r.addEventListener("change",s),n.on("dispose",function(){r.removeEventListener("change",s)}),n}return _(o,a),o.prototype.handleClick=function(t){var e=this.player_.audioTracks();a.prototype.handleClick.call(this,t);for(var i=0;i<e.length;i++){var r=e[i];r.enabled=r===this.track}},o.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},o}(_n);Xt.registerComponent("AudioTrackMenuItem",xn);var In=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.audioTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.buildCSSClass=function(){return"vjs-audio-button "+i.prototype.buildCSSClass.call(this)},r.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+i.prototype.buildWrapperCSSClass.call(this)},r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var e=this.player_.audioTracks(),i=0;i<e.length;i++){var r=e[i];t.push(new xn(this.player_,{track:r,selectable:!0}))}return t},r}(vn);In.prototype.controlText_="Audio Track",Xt.registerComponent("AudioTrackButton",In);var Dn=function(s){function a(t,e){y(this,a);var i=e.rate,r=parseFloat(i,10);e.label=i,e.selected=1===r,e.selectable=!0;var n=b(this,s.call(this,t,e));return n.label=i,n.rate=r,n.on(t,"ratechange",n.update),n}return _(a,s),a.prototype.handleClick=function(t){s.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},a.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},a}(_n);Dn.prototype.contentElType="button",Xt.registerComponent("PlaybackRateMenuItem",Dn);var Rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateVisibility(),i.updateLabel(),i.on(t,"loadstart",i.updateVisibility),i.on(t,"ratechange",i.updateLabel),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this);return this.labelEl_=M("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),t.appendChild(this.labelEl_),t},n.prototype.dispose=function(){this.labelEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createMenu=function(){var t=new gn(this.player()),e=this.playbackRates();if(e)for(var i=e.length-1;0<=i;i--)t.addChild(new Dn(this.player(),{rate:e[i]+"x"}));return t},n.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},n.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),i=this.playbackRates(),r=i[0],n=0;n<i.length;n++)if(i[n]>e){r=i[n];break}this.player().playbackRate(r)},n.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},n.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&0<this.playbackRates().length},n.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},n.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},n}(yn);Rn.prototype.controlText_="Playback Rate",Xt.registerComponent("PlaybackRateMenuButton",Rn);var Mn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(Xt);Xt.registerComponent("Spacer",Mn);var Un=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)},t.prototype.createEl=function(){var t=e.prototype.createEl.call(this,{className:this.buildCSSClass()});return t.innerHTML=" ",t},t}(Mn);Xt.registerComponent("CustomControlSpacer",Un);var Nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},e}(Xt);Nn.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Xt.registerComponent("ControlBar",Nn);var Bn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"error",i.open),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-error-display "+r.prototype.buildCSSClass.call(this)},n.prototype.content=function(){var t=this.player().error();return t?this.localize(t.message):""},n}(Ne);Bn.prototype.options_=Gt(Ne.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Xt.registerComponent("ErrorDisplay",Bn);var jn="vjs-text-track-settings",Fn=["#000","Black"],Hn=["#00F","Blue"],Vn=["#0FF","Cyan"],qn=["#0F0","Green"],Wn=["#F0F","Magenta"],zn=["#F00","Red"],Gn=["#FFF","White"],Xn=["#FF0","Yellow"],Yn=["1","Opaque"],$n=["0.5","Semi-Transparent"],Kn=["0","Transparent"],Qn={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Fn,Gn,zn,qn,Hn,Xn,Wn,Vn]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[Yn,$n,Kn]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Gn,Fn,zn,qn,Hn,Xn,Wn,Vn]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[Yn,$n]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[Kn,$n,Yn]}};function Jn(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}Qn.windowColor.options=Qn.backgroundColor.options;var Zn=function(r){function n(t,e){y(this,n),e.temporary=!1;var i=b(this,r.call(this,t,e));return i.updateDisplay=Ot(i,i.updateDisplay),i.fill(),i.hasBeenOpened_=i.hasBeenFilled_=!0,i.endDialog=M("p",{className:"vjs-control-text",textContent:i.localize("End of dialog window.")}),i.el().appendChild(i.endDialog),i.setDefaults(),void 0===e.persistTextTrackSettings&&(i.options_.persistTextTrackSettings=i.options_.playerOptions.persistTextTrackSettings),i.on(i.$(".vjs-done-button"),"click",function(){i.saveSettings(),i.close()}),i.on(i.$(".vjs-default-button"),"click",function(){i.setDefaults(),i.updateDisplay()}),k(Qn,function(t){i.on(i.$(t.selector),"change",i.updateDisplay)}),i.options_.persistTextTrackSettings&&i.restoreSettings(),i}return _(n,r),n.prototype.dispose=function(){this.endDialog=null,r.prototype.dispose.call(this)},n.prototype.createElSelect_=function(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"label",n=Qn[t],s=n.id.replace("%s",this.id_),a=[e,s].join(" ").trim();return["<"+r+' id="'+s+'" class="'+("label"===r?"vjs-label":"")+'">',this.localize(n.label),"</"+r+">",'<select aria-labelledby="'+a+'">'].concat(n.options.map(function(t){var e=s+"-"+t[1].replace(/\W+/g,"");return['<option id="'+e+'" value="'+t[0]+'" ','aria-labelledby="'+a+" "+e+'">',i.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},n.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElColors_=function(){return M("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},n.prototype.createElFont_=function(){return M("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},n.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values");return M("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},n.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},n.prototype.label=function(){return this.localize("Caption Settings Dialog")},n.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},n.prototype.buildCSSClass=function(){return r.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},n.prototype.getValues=function(){var a=this;return function(i,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return S(i).reduce(function(t,e){return r(t,i[e],e)},t)}(Qn,function(t,e,i){var r,n,s=(r=a.$(e.selector),n=e.parser,Jn(r.options[r.options.selectedIndex].value,n));return void 0!==s&&(t[i]=s),t},{})},n.prototype.setValues=function(i){var r=this;k(Qn,function(t,e){!function(t,e,i){if(e)for(var r=0;r<t.options.length;r++)if(Jn(t.options[r].value,i)===e){t.selectedIndex=r;break}}(r.$(t.selector),i[e],t.parser)})},n.prototype.setDefaults=function(){var i=this;k(Qn,function(t){var e=t.hasOwnProperty("default")?t.default:0;i.$(t.selector).selectedIndex=e})},n.prototype.restoreSettings=function(){var t=void 0;try{t=JSON.parse(g.localStorage.getItem(jn))}catch(t){f.warn(t)}t&&this.setValues(t)},n.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues();try{Object.keys(t).length?g.localStorage.setItem(jn,JSON.stringify(t)):g.localStorage.removeItem(jn)}catch(t){f.warn(t)}}},n.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay");t&&t.updateDisplay()},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(p,"keydown",this.handleKeyDown);var t=this.player_.controlBar,e=t&&t.subsCapsButton,i=t&&t.captionsButton;e?e.focus():i&&i.focus()},n}(Ne);Xt.registerComponent("TextTrackSettings",Zn);var ts=function(s){function a(t,e){y(this,a);var i=e.ResizeObserver||g.ResizeObserver;null===e.ResizeObserver&&(i=!1);var r=Gt({createEl:!i},e),n=b(this,s.call(this,t,r));return n.ResizeObserver=e.ResizeObserver||g.ResizeObserver,n.loadListener_=null,n.resizeObserver_=null,n.debouncedHandler_=It(function(){n.resizeHandler()},100,!1,t),i?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_),n.resizeObserver_.observe(t.el())):(n.loadListener_=function(){n.el_.contentWindow&&_t(n.el_.contentWindow,"resize",n.debouncedHandler_),n.off("load",n.loadListener_)},n.on("load",n.loadListener_)),n}return _(a,s),a.prototype.createEl=function(){return s.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},a.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},a.prototype.dispose=function(){this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&bt(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null},a}(Xt);Xt.registerComponent("ResizeManager",ts);var es=function(t){var e=t.el();if(e.hasAttribute("src"))return t.triggerSourceset(e.src),!0;var i=t.$$("source"),r=[],n="";if(!i.length)return!1;for(var s=0;s<i.length;s++){var a=i[s].src;a&&-1===r.indexOf(a)&&r.push(a)}return!!r.length&&(1===r.length&&(n=r[0]),t.triggerSourceset(n),!0)},is=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(t){var e=p.createElement(this.nodeName.toLowerCase());e.innerHTML=t;for(var i=p.createDocumentFragment();e.childNodes.length;)i.appendChild(e.childNodes[0]);return this.innerText="",g.Element.prototype.appendChild.call(this,i),this.innerHTML}}),rs=function(t,e){for(var i={},r=0;r<t.length&&!((i=Object.getOwnPropertyDescriptor(t[r],e))&&i.set&&i.get);r++);return i.enumerable=!0,i.configurable=!0,i},ns=function(s){var a=s.el();if(!a.resetSourceWatch_){var e={},t=rs([s.el(),g.HTMLMediaElement.prototype,g.Element.prototype,is],"innerHTML"),i=function(n){return function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=n.apply(a,e);return es(s),r}};["append","appendChild","insertAdjacentHTML"].forEach(function(t){a[t]&&(e[t]=a[t],a[t]=i(e[t]))}),Object.defineProperty(a,"innerHTML",Gt(t,{set:i(t.set)})),a.resetSourceWatch_=function(){a.resetSourceWatch_=null,Object.keys(e).forEach(function(t){a[t]=e[t]}),Object.defineProperty(a,"innerHTML",t)},s.one("sourceset",a.resetSourceWatch_)}},ss=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?Ze(g.Element.prototype.getAttribute.call(this,"src")):""},set:function(t){return g.Element.prototype.setAttribute.call(this,"src",t),t}}),as=function(r){if(r.featuresSourceset){var n=r.el();if(!n.resetSourceset_){var i=rs([r.el(),g.HTMLMediaElement.prototype,ss],"src"),s=n.setAttribute,e=n.load;Object.defineProperty(n,"src",Gt(i,{set:function(t){var e=i.set.call(n,t);return r.triggerSourceset(n.src),e}})),n.setAttribute=function(t,e){var i=s.call(n,t,e);return/src/i.test(t)&&r.triggerSourceset(n.src),i},n.load=function(){var t=e.call(n);return es(r)||(r.triggerSourceset(""),ns(r)),t},n.currentSrc?r.triggerSourceset(n.currentSrc):es(r)||ns(r),n.resetSourceset_=function(){n.resetSourceset_=null,n.load=e,n.setAttribute=s,Object.defineProperty(n,"src",i),n.resetSourceWatch_&&n.resetSourceWatch_()}}}},os=h(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),us=function(c){function h(t,e){y(this,h);var i=b(this,c.call(this,t,e)),r=t.source,n=!1;if(r&&(i.el_.currentSrc!==r.src||t.tag&&3===t.tag.initNetworkState_)?i.setSource(r):i.handleLateInit_(i.el_),t.enableSourceset&&i.setupSourcesetHandling_(),i.el_.hasChildNodes()){for(var s=i.el_.childNodes,a=s.length,o=[];a--;){var u=s[a];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),n||i.el_.hasAttribute("crossorigin")||!ei(u.src)||(n=!0)):o.push(u))}for(var l=0;l<o.length;l++)i.el_.removeChild(o[l])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&n&&f.warn(m(os)),i.restoreMetadataTracksInIOSNativePlayer_(),(ge||ie||ue)&&!0===t.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return _(h,c),h.prototype.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),h.disposeMediaElement(this.el_),this.options_=null,c.prototype.dispose.call(this)},h.prototype.setupSourcesetHandling_=function(){as(this)},h.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var r=this.textTracks(),n=void 0,t=function(){n=[];for(var t=0;t<r.length;t++){var e=r[t];"metadata"===e.kind&&n.push({track:e,storedMode:e.mode})}};t(),r.addEventListener("change",t),this.on("dispose",function(){return r.removeEventListener("change",t)});var e=function t(){for(var e=0;e<n.length;e++){var i=n[e];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}r.removeEventListener("change",t)};this.on("webkitbeginfullscreen",function(){r.removeEventListener("change",t),r.removeEventListener("change",e),r.addEventListener("change",e)}),this.on("webkitendfullscreen",function(){r.removeEventListener("change",t),r.addEventListener("change",t),r.removeEventListener("change",e)})},h.prototype.overrideNative_=function(t,e){var i=this;if(e===this["featuresNative"+t+"Tracks"]){var r=t.toLowerCase();this[r+"TracksListeners_"]&&Object.keys(this[r+"TracksListeners_"]).forEach(function(t){i.el()[r+"Tracks"].removeEventListener(t,i[r+"TracksListeners_"][t])}),this["featuresNative"+t+"Tracks"]=!e,this[r+"TracksListeners_"]=null,this.proxyNativeTracksForType_(r)}},h.prototype.overrideNativeAudioTracks=function(t){this.overrideNative_("Audio",t)},h.prototype.overrideNativeVideoTracks=function(t){this.overrideNative_("Video",t)},h.prototype.proxyNativeTracksForType_=function(t){var r=this,e=Ui[t],n=this.el()[e.getterName],s=this[e.getterName]();if(this["featuresNative"+e.capitalName+"Tracks"]&&n&&n.addEventListener){var a={change:function(t){s.trigger({type:"change",target:s,currentTarget:s,srcElement:s})},addtrack:function(t){s.addTrack(t.track)},removetrack:function(t){s.removeTrack(t.track)}},i=function(){for(var t=[],e=0;e<s.length;e++){for(var i=!1,r=0;r<n.length;r++)if(n[r]===s[e]){i=!0;break}i||t.push(s[e])}for(;t.length;)s.removeTrack(t.shift())};this[e.getterName+"Listeners_"]=a,Object.keys(a).forEach(function(e){var i=a[e];n.addEventListener(e,i),r.on("dispose",function(t){return n.removeEventListener(e,i)})}),this.on("loadstart",i),this.on("dispose",function(t){return r.off("loadstart",i)})}},h.prototype.proxyNativeTracks_=function(){var e=this;Ui.names.forEach(function(t){e.proxyNativeTracksForType_(t)})},h.prototype.createEl=function(){var t=this.options_.tag;if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var e=t.cloneNode(!0);t.parentNode&&t.parentNode.insertBefore(e,t),h.disposeMediaElement(t),t=e}else{t=p.createElement("video");var i=Gt({},this.options_.tag&&q(this.options_.tag));ge&&!0===this.options_.nativeControlsForTouch||delete i.controls,V(t,C(i,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}"undefined"!=typeof this.options_.preload&&z(t,"preload",this.options_.preload);for(var r=["loop","muted","playsinline","autoplay"],n=0;n<r.length;n++){var s=r[n],a=this.options_[s];"undefined"!=typeof a&&(a?z(t,s,s):G(t,s),t[s]=a)}return t},h.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,i=function(){e=!0};this.on("loadstart",i);var r=function(){e||this.trigger("loadstart")};return this.on("loadedmetadata",r),void this.ready(function(){this.off("loadstart",i),this.off("loadedmetadata",r),e||this.trigger("loadstart")})}var n=["loadstart"];n.push("loadedmetadata"),2<=t.readyState&&n.push("loadeddata"),3<=t.readyState&&n.push("canplay"),4<=t.readyState&&n.push("canplaythrough"),this.ready(function(){n.forEach(function(t){this.trigger(t)},this)})}},h.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){f(t,"Video is not ready. (Video.js)")}},h.prototype.duration=function(){var e=this;if(this.el_.duration===1/0&&ae&&he&&0===this.el_.currentTime){return this.on("timeupdate",function t(){0<e.el_.currentTime&&(e.el_.duration===1/0&&e.trigger("durationchange"),e.off("timeupdate",t))}),NaN}return this.el_.duration||NaN},h.prototype.width=function(){return this.el_.offsetWidth},h.prototype.height=function(){return this.el_.offsetHeight},h.prototype.proxyWebkitFullscreen_=function(){var t=this;if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",i),this.on("dispose",function(){t.off("webkitbeginfullscreen",i),t.off("webkitendfullscreen",e)})}},h.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=g.navigator&&g.navigator.userAgent||"";if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},h.prototype.enterFullScreen=function(){var t=this.el_;t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},h.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},h.prototype.src=function(t){if(void 0===t)return this.el_.src;this.setSrc(t)},h.prototype.reset=function(){h.resetMediaElement(this.el_)},h.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},h.prototype.setControls=function(t){this.el_.controls=!!t},h.prototype.addTextTrack=function(t,e,i){return this.featuresNativeTextTracks?this.el_.addTextTrack(t,e,i):c.prototype.addTextTrack.call(this,t,e,i)},h.prototype.createRemoteTextTrack=function(t){if(!this.featuresNativeTextTracks)return c.prototype.createRemoteTextTrack.call(this,t);var e=p.createElement("track");return t.kind&&(e.kind=t.kind),t.label&&(e.label=t.label),(t.language||t.srclang)&&(e.srclang=t.language||t.srclang),t.default&&(e.default=t.default),t.id&&(e.id=t.id),t.src&&(e.src=t.src),e},h.prototype.addRemoteTextTrack=function(t,e){var i=c.prototype.addRemoteTextTrack.call(this,t,e);return this.featuresNativeTextTracks&&this.el().appendChild(i),i},h.prototype.removeRemoteTextTrack=function(t){if(c.prototype.removeRemoteTextTrack.call(this,t),this.featuresNativeTextTracks)for(var e=this.$$("track"),i=e.length;i--;)t!==e[i]&&t!==e[i].track||this.el().removeChild(e[i])},h.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var t={};return"undefined"!=typeof this.el().webkitDroppedFrameCount&&"undefined"!=typeof this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),g.performance&&"function"==typeof g.performance.now?t.creationTime=g.performance.now():g.performance&&g.performance.timing&&"number"==typeof g.performance.timing.navigationStart&&(t.creationTime=g.Date.now()-g.performance.timing.navigationStart),t},h}(br);if(x()){us.TEST_VID=p.createElement("video");var ls=p.createElement("track");ls.kind="captions",ls.srclang="en",ls.label="English",us.TEST_VID.appendChild(ls)}us.isSupported=function(){try{us.TEST_VID.volume=.5}catch(t){return!1}return!(!us.TEST_VID||!us.TEST_VID.canPlayType)},us.canPlayType=function(t){return us.TEST_VID.canPlayType(t)},us.canPlaySource=function(t,e){return us.canPlayType(t.type)},us.canControlVolume=function(){try{var t=us.TEST_VID.volume;return us.TEST_VID.volume=t/2+.1,t!==us.TEST_VID.volume}catch(t){return!1}},us.canControlPlaybackRate=function(){if(ae&&he&&de<58)return!1;try{var t=us.TEST_VID.playbackRate;return us.TEST_VID.playbackRate=t/2+.1,t!==us.TEST_VID.playbackRate}catch(t){return!1}},us.canOverrideAttributes=function(){try{var t=function(){};Object.defineProperty(p.createElement("video"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("video"),"innerHTML",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"innerHTML",{get:t,set:t})}catch(t){return!1}return!0},us.supportsNativeTextTracks=function(){return me},us.supportsNativeVideoTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.videoTracks)},us.supportsNativeAudioTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.audioTracks)},us.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],us.prototype.featuresVolumeControl=us.canControlVolume(),us.prototype.featuresPlaybackRate=us.canControlPlaybackRate(),us.prototype.featuresSourceset=us.canOverrideAttributes(),us.prototype.movingMediaElementInDOM=!ne,us.prototype.featuresFullscreenResize=!0,us.prototype.featuresProgressEvents=!0,us.prototype.featuresTimeupdateEvents=!0,us.prototype.featuresNativeTextTracks=us.supportsNativeTextTracks(),us.prototype.featuresNativeVideoTracks=us.supportsNativeVideoTracks(),us.prototype.featuresNativeAudioTracks=us.supportsNativeAudioTracks();var cs=us.TEST_VID&&us.TEST_VID.constructor.prototype.canPlayType,hs=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;us.patchCanPlayType=function(){4<=oe&&!le&&!he&&(us.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&hs.test(t)?"maybe":cs.call(this,t)})},us.unpatchCanPlayType=function(){var t=us.TEST_VID.constructor.prototype.canPlayType;return us.TEST_VID.constructor.prototype.canPlayType=cs,t},us.patchCanPlayType(),us.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},us.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),i=e.length;i--;)t.removeChild(e[i]);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){(this.el_[e]=t)?this.el_.setAttribute(e,e):this.el_.removeAttribute(e)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){this.el_[e]=t}}),["pause","load","play"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]()}}),br.withSourceHandlers(us),us.nativeSourceHandler={},us.nativeSourceHandler.canPlayType=function(t){try{return us.TEST_VID.canPlayType(t)}catch(t){return""}},us.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return us.nativeSourceHandler.canPlayType(t.type);if(t.src){var i=ti(t.src);return us.nativeSourceHandler.canPlayType("video/"+i)}return""},us.nativeSourceHandler.handleSource=function(t,e,i){e.setSrc(t.src)},us.nativeSourceHandler.dispose=function(){},us.registerSourceHandler(us.nativeSourceHandler),br.registerTech("Html5",us);var ds=h(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),ps=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],fs={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},ms=function(c){function h(t,e,i){if(y(this,h),t.id=t.id||e.id||"vjs_video_"+ut(),(e=C(h.getTagSettings(t),e)).initChildren=!1,e.createEl=!1,e.evented=!1,e.reportTouchActivity=!1,!e.language)if("function"==typeof t.closest){var r=t.closest("[lang]");r&&r.getAttribute&&(e.language=r.getAttribute("lang"))}else for(var n=t;n&&1===n.nodeType;){if(q(n).hasOwnProperty("lang")){e.language=n.getAttribute("lang");break}n=n.parentNode}var s=b(this,c.call(this,null,e,i));if(s.isPosterFromTech_=!1,s.queuedCallbacks_=[],s.isReady_=!1,s.hasStarted_=!1,s.userActive_=!1,!s.options_||!s.options_.techOrder||!s.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(s.tag=t,s.tagAttributes=t&&q(t),s.language(s.options_.language),e.languages){var a={};Object.getOwnPropertyNames(e.languages).forEach(function(t){a[t.toLowerCase()]=e.languages[t]}),s.languages_=a}else s.languages_=h.prototype.options_.languages;s.cache_={},s.poster_=e.poster||"",s.controls_=!!e.controls,s.cache_.lastVolume=1,t.controls=!1,t.removeAttribute("controls"),s.scrubbing_=!1,s.el_=s.createEl(),s.cache_.lastPlaybackRate=s.defaultPlaybackRate(),Vt(s,{eventBusKey:"el_"});var o=Gt(s.options_);if(e.plugins){var u=e.plugins;Object.keys(u).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist');this[t](u[t])},s)}s.options_.playerOptions=o,s.middleware_=[],s.initChildren(),s.isAudio("audio"===t.nodeName.toLowerCase()),s.controls()?s.addClass("vjs-controls-enabled"):s.addClass("vjs-controls-disabled"),s.el_.setAttribute("role","region"),s.isAudio()?s.el_.setAttribute("aria-label",s.localize("Audio Player")):s.el_.setAttribute("aria-label",s.localize("Video Player")),s.isAudio()&&s.addClass("vjs-audio"),s.flexNotSupported_()&&s.addClass("vjs-no-flex"),ne||s.addClass("vjs-workinghover"),h.players[s.id_]=s;var l=d.split(".")[0];return s.addClass("vjs-v"+l),s.userActive(!0),s.reportUserActivity(),s.one("play",s.listenForUserActivity_),s.on("fullscreenchange",s.handleFullscreenChange_),s.on("stageclick",s.handleStageClick_),s.changingSrc_=!1,s.playWaitingForReady_=!1,s.playOnLoadstart_=null,s}return _(h,c),h.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),h.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),Sr[this.id()]=null,c.prototype.dispose.call(this)},h.prototype.createEl=function(){var e=this.tag,i=void 0,t=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),r="video-js"===this.tag.tagName.toLowerCase();t?i=this.el_=e.parentNode:r||(i=this.el_=c.prototype.createEl.call(this,"div"));var n=q(e);if(r){for(i=this.el_=e,e=this.tag=p.createElement("video");i.children.length;)e.appendChild(i.firstChild);B(i,"video-js")||j(i,"video-js"),i.appendChild(e),t=this.playerElIngest_=i,Object.keys(i).forEach(function(t){e[t]=i[t]})}if(e.setAttribute("tabindex","-1"),e.removeAttribute("width"),e.removeAttribute("height"),Object.getOwnPropertyNames(n).forEach(function(t){r&&"class"===t||i.setAttribute(t,n[t]),r&&e.setAttribute(t,n[t])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=i.player=this,this.addClass("vjs-paused"),!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=Lt("vjs-styles-dimensions");var s=nt(".vjs-styles-defaults"),a=nt("head");a.insertBefore(this.styleEl_,s?s.nextSibling:a.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var o=e.getElementsByTagName("a"),u=0;u<o.length;u++){var l=o.item(u);j(l,"vjs-hidden"),l.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!t&&e.parentNode.insertBefore(i,e),N(e,i),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=i},h.prototype.width=function(t){return this.dimension("width",t)},h.prototype.height=function(t){return this.dimension("height",t)},h.prototype.dimension=function(t,e){var i=t+"_";if(void 0===e)return this[i]||0;if(""===e)return this[i]=void 0,void this.updateStyleEl_();var r=parseFloat(e);isNaN(r)?f.error('Improper value "'+e+'" supplied for for '+t):(this[i]=r,this.updateStyleEl_())},h.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_;this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},h.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},h.prototype.updateStyleEl_=function(){if(!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){var t=void 0,e=void 0,i=void 0,r=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:0<this.videoWidth()?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),n=r[1]/r[0];t=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/n:this.videoWidth()||300,e=void 0!==this.height_?this.height_:t*n,i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(i),Pt(this.styleEl_,"\n      ."+i+" {\n        width: "+t+"px;\n        height: "+e+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*n+"%;\n      }\n    ")}else{var s="number"==typeof this.width_?this.width_:this.options_.width,a="number"==typeof this.height_?this.height_:this.options_.height,o=this.tech_&&this.tech_.el();o&&(0<=s&&(o.width=s),0<=a&&(o.height=a))}},h.prototype.loadTech_=function(t,e){var i=this;this.tech_&&this.unloadTech_();var r=zt(t),n=t.charAt(0).toLowerCase()+t.slice(1);"Html5"!==r&&this.tag&&(br.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=r,this.isReady_=!1;var s={source:e,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+r+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset};Bi.names.forEach(function(t){var e=Bi[t];s[e.getterName]=i[e.privateName]}),C(s,this.options_[r]),C(s,this.options_[n]),C(s,this.options_[t.toLowerCase()]),this.tag&&(s.tag=this.tag),e&&e.src===this.cache_.src&&0<this.cache_.currentTime&&(s.startTime=this.cache_.currentTime);var a=br.getTech(t);if(!a)throw new Error("No Tech named '"+r+"' exists! '"+r+"' should be registered using videojs.registerTech()'");this.tech_=new a(s),this.tech_.ready(Ot(this,this.handleTechReady_),!0),Me(this.textTracksJson_||[],this.tech_),ps.forEach(function(t){i.on(i.tech_,t,i["handleTech"+zt(t)+"_"])}),Object.keys(fs).forEach(function(e){i.on(i.tech_,e,function(t){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+fs[e]+"_"].bind(i),event:t}):i["handleTech"+fs[e]+"_"](t)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===r&&this.tag||N(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},h.prototype.unloadTech_=function(){var i=this;Bi.names.forEach(function(t){var e=Bi[t];i[e.privateName]=i[e.getterName]()}),this.textTracksJson_=Re(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},h.prototype.tech=function(t){return void 0===t&&f.warn(m(ds)),this.tech_},h.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},h.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},h.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused())try{delete this.tag.poster}catch(t){f("deleting tag.poster throws in some browsers",t)}},h.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},h.prototype.updateSourceCaches_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=t,i="";"string"!=typeof e&&(e=t.src,i=t.type),this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],e&&!i&&(i=function(t,e){if(!e)return"";if(t.cache_.source.src===e&&t.cache_.source.type)return t.cache_.source.type;var i=t.cache_.sources.filter(function(t){return t.src===e});if(i.length)return i[0].type;for(var r=t.$$("source"),n=0;n<r.length;n++){var s=r[n];if(s.type&&s.src&&s.src===e)return s.type}return xr(e)}(this,e)),this.cache_.source={src:e,type:i};for(var r=this.cache_.sources.filter(function(t){return t.src&&t.src===e}),n=[],s=this.$$("source"),a=[],o=0;o<s.length;o++){var u=q(s[o]);n.push(u),u.src&&u.src===e&&a.push(u.src)}a.length&&!r.length?this.cache_.sources=n:r.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=e},h.prototype.handleTechSourceset_=function(t){var i=this;if(!this.changingSrc_&&(this.updateSourceCaches_(t.src),!t.src)){this.tech_.one(["sourceset","loadstart"],function t(e){"sourceset"!==e.type&&i.updateSourceCaches_(i.techGet_("currentSrc")),i.tech_.off(["sourceset","loadstart"],t)})}this.trigger({src:t.src,type:"sourceset"})},h.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_;t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},h.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},h.prototype.handleTechRateChange_=function(){0<this.tech_.playbackRate()&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(t){return t.callback(t.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},h.prototype.handleTechWaiting_=function(){var t=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},h.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},h.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},h.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},h.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},h.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},h.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},h.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},h.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},h.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},h.prototype.handleTechClick_=function(t){rt(t)&&this.controls_&&(this.paused()?this.play():this.pause())},h.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},h.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},h.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},h.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},h.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},h.prototype.handleStageClick_=function(){this.reportUserActivity()},h.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},h.prototype.handleTechError_=function(){var t=this.tech_.error();this.error(t)},h.prototype.handleTechTextData_=function(){var t=null;1<arguments.length&&(t=arguments[1]),this.trigger("textdata",t)},h.prototype.getCache=function(){return this.cache_},h.prototype.techCall_=function(n,s){this.ready(function(){if(n in Ar)return t=this.middleware_,e=this.tech_,r=s,e[i=n](t.reduce(Pr(i),r));if(n in Lr)return Er(this.middleware_,this.tech_,n,s);var t,e,i,r;try{this.tech_&&this.tech_[n](s)}catch(t){throw f(t),t}},!0)},h.prototype.techGet_=function(e){if(this.tech_&&this.tech_.isReady_){if(e in wr)return t=this.middleware_,i=this.tech_,r=e,t.reduceRight(Pr(r),i[r]());if(e in Lr)return Er(this.middleware_,this.tech_,e);var t,i,r;try{return this.tech_[e]()}catch(t){if(void 0===this.tech_[e])throw f("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.",t),t;if("TypeError"===t.name)throw f("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.",t),this.tech_.isReady_=!1,t;throw f(t),t}}},h.prototype.play=function(){var t=this;if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.playOnLoadstart_=function(){t.playOnLoadstart_=null,Ie(t.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return;this.playWaitingForReady_=!0,this.ready(function(){t.playWaitingForReady_=!1,Ie(t.play())})}},h.prototype.pause=function(){this.techCall_("pause")},h.prototype.paused=function(){return!1!==this.techGet_("paused")},h.prototype.played=function(){return this.techGet_("played")||be(0,0)},h.prototype.scrubbing=function(t){if("undefined"==typeof t)return this.scrubbing_;this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},h.prototype.currentTime=function(t){return"undefined"!=typeof t?(t<0&&(t=0),void this.techCall_("setCurrentTime",t)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},h.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(t=parseFloat(t))<0&&(t=1/0),t!==this.cache_.duration&&((this.cache_.duration=t)===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},h.prototype.remainingTime=function(){return this.duration()-this.currentTime()},h.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},h.prototype.buffered=function(){var t=this.techGet_("buffered");return t&&t.length||(t=be(0,0)),t},h.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration())},h.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),i=t.end(t.length-1);return e<i&&(i=e),i},h.prototype.volume=function(t){var e=void 0;return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(0<e&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},h.prototype.muted=function(t){if(void 0===t)return this.techGet_("muted")||!1;this.techCall_("setMuted",t)},h.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},h.prototype.lastVolume_=function(t){if(void 0===t||0===t)return this.cache_.lastVolume;this.cache_.lastVolume=t},h.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},h.prototype.isFullscreen=function(t){if(void 0===t)return!!this.isFullscreen_;this.isFullscreen_=!!t},h.prototype.requestFullscreen=function(){var i=Se;this.isFullscreen(!0),i.requestFullscreen?(_t(p,i.fullscreenchange,Ot(this,function t(e){this.isFullscreen(p[i.fullscreenElement]),!1===this.isFullscreen()&&bt(p,i.fullscreenchange,t),this.trigger("fullscreenchange")})),this.el_[i.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},h.prototype.exitFullscreen=function(){var t=Se;this.isFullscreen(!1),t.requestFullscreen?p[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},h.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=p.documentElement.style.overflow,_t(p,"keydown",Ot(this,this.fullWindowOnEscKey)),p.documentElement.style.overflow="hidden",j(p.body,"vjs-full-window"),this.trigger("enterFullWindow")},h.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},h.prototype.exitFullWindow=function(){this.isFullWindow=!1,bt(p,"keydown",this.fullWindowOnEscKey),p.documentElement.style.overflow=this.docOrigOverflow,F(p.body,"vjs-full-window"),this.trigger("exitFullWindow")},h.prototype.canPlayType=function(t){for(var e=void 0,i=0,r=this.options_.techOrder;i<r.length;i++){var n=r[i],s=br.getTech(n);if(s||(s=Xt.getComponent(n)),s){if(s.isSupported()&&(e=s.canPlayType(t)))return e}else f.error('The "'+n+'" tech is undefined. Skipped browser support check for that tech.')}return""},h.prototype.selectSource=function(t){var i,r=this,e=this.options_.techOrder.map(function(t){return[t,br.getTech(t)]}).filter(function(t){var e=t[0],i=t[1];return i?i.isSupported():(f.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(t,i,r){var n=void 0;return t.some(function(e){return i.some(function(t){if(n=r(e,t))return!0})}),n},s=function(t,e){var i=t[0];if(t[1].canPlaySource(e,r.options_[i.toLowerCase()]))return{source:e,tech:i}};return(this.options_.sourceOrder?n(t,e,(i=s,function(t,e){return i(e,t)})):n(e,t,s))||!1},h.prototype.src=function(t){var n=this;if("undefined"==typeof t)return this.cache_.src||"";var s=function e(t){if(Array.isArray(t)){var i=[];t.forEach(function(t){t=e(t),Array.isArray(t)?i=i.concat(t):E(t)&&i.push(t)}),t=i}else t="string"==typeof t&&t.trim()?[Ir({src:t})]:E(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[Ir(t)]:[];return t}(t);s.length?(this.changingSrc_=!0,this.cache_.sources=s,this.updateSourceCaches_(s[0]),Cr(this,s[0],function(t,e){var i,r;if(n.middleware_=e,n.cache_.sources=s,n.updateSourceCaches_(t),n.src_(t))return 1<s.length?n.src(s.slice(1)):(n.changingSrc_=!1,n.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void n.triggerReady());i=e,r=n.tech_,i.forEach(function(t){return t.setTech&&t.setTech(r)})})):this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0)},h.prototype.src_=function(t){var e,i,r=this,n=this.selectSource([t]);return!n||(e=n.tech,i=this.techName_,zt(e)!==zt(i)?(this.changingSrc_=!0,this.loadTech_(n.tech,n.source),this.tech_.ready(function(){r.changingSrc_=!1})):this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src),this.changingSrc_=!1},!0),!1)},h.prototype.load=function(){this.techCall_("load")},h.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},h.prototype.currentSources=function(){var t=this.currentSource(),e=[];return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},h.prototype.currentSource=function(){return this.cache_.source||{}},h.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},h.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},h.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},h.prototype.autoplay=function(t){return void 0!==t?(this.techCall_("setAutoplay",t),void(this.options_.autoplay=t)):this.techGet_("autoplay",t)},h.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},h.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},h.prototype.poster=function(t){if(void 0===t)return this.poster_;t||(t=""),t!==this.poster_&&(this.poster_=t,this.techCall_("setPoster",t),this.isPosterFromTech_=!1,this.trigger("posterchange"))},h.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var t=this.tech_.poster()||"";t!==this.poster_&&(this.poster_=t,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},h.prototype.controls=function(t){if(void 0===t)return!!this.controls_;t=!!t,this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},h.prototype.usingNativeControls=function(t){if(void 0===t)return!!this.usingNativeControls_;t=!!t,this.usingNativeControls_!==t&&(this.usingNativeControls_=t,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},h.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new Le(t),this.addClass("vjs-error"),f.error("(CODE:"+this.error_.code+" "+Le.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},h.prototype.reportUserActivity=function(t){this.userActivity_=!0},h.prototype.userActive=function(t){if(void 0===t)return this.userActive_;if((t=!!t)!==this.userActive_){if(this.userActive_=t,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive");this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},h.prototype.listenForUserActivity_=function(){var e=void 0,i=void 0,r=void 0,n=Ot(this,this.reportUserActivity);this.on("mousedown",function(){n(),this.clearInterval(e),e=this.setInterval(n,250)}),this.on("mousemove",function(t){t.screenX===i&&t.screenY===r||(i=t.screenX,r=t.screenY,n())}),this.on("mouseup",function(t){n(),this.clearInterval(e)}),this.on("keydown",n),this.on("keyup",n);var s=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(s);var t=this.options_.inactivityTimeout;t<=0||(s=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},h.prototype.playbackRate=function(t){if(void 0===t)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1;this.techCall_("setPlaybackRate",t)},h.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},h.prototype.isAudio=function(t){if(void 0===t)return!!this.isAudio_;this.isAudio_=!!t},h.prototype.addTextTrack=function(t,e,i){if(this.tech_)return this.tech_.addTextTrack(t,e,i)},h.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},h.prototype.removeRemoteTextTrack=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).track,e=void 0===t?arguments[0]:t;if(this.tech_)return this.tech_.removeRemoteTextTrack(e)},h.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},h.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},h.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},h.prototype.language=function(t){if(void 0===t)return this.language_;this.language_=String(t).toLowerCase()},h.prototype.languages=function(){return Gt(h.prototype.options_.languages,this.languages_)},h.prototype.toJSON=function(){var t=Gt(this.options_),e=t.tracks;t.tracks=[];for(var i=0;i<e.length;i++){var r=e[i];(r=Gt(r)).player=void 0,t.tracks[i]=r}return t},h.prototype.createModal=function(t,e){var i=this;(e=e||{}).content=t||"";var r=new Ne(this,e);return this.addChild(r),r.on("dispose",function(){i.removeChild(r)}),r.open(),r},h.getTagSettings=function(t){var e={sources:[],tracks:[]},i=q(t),r=i["data-setup"];if(B(t,"vjs-fluid")&&(i.fluid=!0),null!==r){var n=Oe(r||"{}"),s=n[0],a=n[1];s&&f.error(s),C(i,a)}if(C(e,i),t.hasChildNodes())for(var o=t.childNodes,u=0,l=o.length;u<l;u++){var c=o[u],h=c.nodeName.toLowerCase();"source"===h?e.sources.push(q(c)):"track"===h&&e.tracks.push(q(c))}return e},h.prototype.flexNotSupported_=function(){var t=p.createElement("i");return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},h}(Xt);Bi.names.forEach(function(t){var e=Bi[t];ms.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),ms.players={};var gs=g.navigator;ms.prototype.options_={techOrder:br.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:gs&&(gs.languages&&gs.languages[0]||gs.userLanguage||gs.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(t){ms.prototype[t]=function(){return this.techGet_(t)}}),ps.forEach(function(t){ms.prototype["handleTech"+zt(t)+"_"]=function(){return this.trigger(t)}}),Xt.registerComponent("Player",ms);var ys="plugin",vs="activePlugins_",_s={},bs=function(t){return _s.hasOwnProperty(t)},Ts=function(t){return bs(t)?_s[t]:void 0},Ss=function(t,e){t[vs]=t[vs]||{},t[vs][e]=!0},ks=function(t,e,i){var r=(i?"before":"")+"pluginsetup";t.trigger(r,e),t.trigger(r+":"+e.name,e)},Cs=function(n,s){return s.prototype.name=n,function(){ks(this,{name:n,plugin:s,instance:null},!0);for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=new(Function.prototype.bind.apply(s,[null].concat([this].concat(e))));return this[n]=function(){return r},ks(this,r.getEventHash()),r}},Es=function(){function s(t){if(y(this,s),this.constructor===s)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=t,Vt(this),delete this.trigger,Wt(this,this.constructor.defaultState),Ss(t,this.name),this.dispose=Ot(this,this.dispose),t.on("dispose",this.dispose)}return s.prototype.version=function(){return this.constructor.VERSION},s.prototype.getEventHash=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},s.prototype.trigger=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Tt(this.eventBusEl_,t,this.getEventHash(e))},s.prototype.handleStateChanged=function(t){},s.prototype.dispose=function(){var t=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e[vs][t]=!1,this.player=this.state=null,e[t]=Cs(t,_s[t])},s.isBasic=function(t){var e="string"==typeof t?Ts(t):t;return"function"==typeof e&&!s.prototype.isPrototypeOf(e.prototype)},s.registerPlugin=function(t,e){if("string"!=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+("undefined"==typeof t?"undefined":v(t))+".");if(bs(t))f.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!');else if(ms.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!');if("function"!=typeof e)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+("undefined"==typeof e?"undefined":v(e))+".");var i,r,n;return _s[t]=e,t!==ys&&(s.isBasic(e)?ms.prototype[t]=(i=t,r=e,n=function(){ks(this,{name:i,plugin:r,instance:null},!0);var t=r.apply(this,arguments);return Ss(this,i),ks(this,{name:i,plugin:r,instance:t}),t},Object.keys(r).forEach(function(t){n[t]=r[t]}),n):ms.prototype[t]=Cs(t,e)),e},s.deregisterPlugin=function(t){if(t===ys)throw new Error("Cannot de-register base plugin.");bs(t)&&(delete _s[t],delete ms.prototype[t])},s.getPlugins=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Object.keys(_s),i=void 0;return t.forEach(function(t){var e=Ts(t);e&&((i=i||{})[t]=e)}),i},s.getPluginVersion=function(t){var e=Ts(t);return e&&e.VERSION||""},s}();Es.getPlugin=Ts,Es.BASE_PLUGIN_NAME=ys,Es.registerPlugin(ys,Es),ms.prototype.usingPlugin=function(t){return!!this[vs]&&!0===this[vs][t]},ms.prototype.hasPlugin=function(t){return!!bs(t)};var ws=function(t){return 0===t.indexOf("#")?t.slice(1):t};function As(t,i,e){var r=As.getPlayer(t);if(r)return i&&f.warn('Player "'+t+'" is already initialised. Options will not be applied.'),e&&r.ready(e),r;var n="string"==typeof t?nt("#"+ws(t)):t;if(!I(n))throw new TypeError("The element or ID supplied is not valid. (videojs)");p.body.contains(n)||f.warn("The element supplied is not included in the DOM"),i=i||{},As.hooks("beforesetup").forEach(function(t){var e=t(n,Gt(i));E(e)&&!Array.isArray(e)?i=Gt(i,e):f.error("please return an object in beforesetup hooks")});var s=Xt.getComponent("Player");return r=new s(n,i,e),As.hooks("setup").forEach(function(t){return t(r)}),r}if(As.hooks_={},As.hooks=function(t,e){return As.hooks_[t]=As.hooks_[t]||[],e&&(As.hooks_[t]=As.hooks_[t].concat(e)),As.hooks_[t]},As.hook=function(t,e){As.hooks(t,e)},As.hookOnce=function(i,t){As.hooks(i,[].concat(t).map(function(e){return function t(){return As.removeHook(i,t),e.apply(void 0,arguments)}}))},As.removeHook=function(t,e){var i=As.hooks(t).indexOf(e);return!(i<=-1)&&(As.hooks_[t]=As.hooks_[t].slice(),As.hooks_[t].splice(i,1),!0)},!0!==g.VIDEOJS_NO_DYNAMIC_STYLE&&x()){var Ls=nt(".vjs-styles-defaults");if(!Ls){Ls=Lt("vjs-styles-defaults");var Ps=nt("head");Ps&&Ps.insertBefore(Ls,Ps.firstChild),Pt(Ls,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}At(1,As),As.VERSION=d,As.options=ms.prototype.options_,As.getPlayers=function(){return ms.players},As.getPlayer=function(t){var e=ms.players,i=void 0;if("string"==typeof t){var r=ws(t),n=e[r];if(n)return n;i=nt("#"+r)}else i=t;if(I(i)){var s=i,a=s.player,o=s.playerId;if(a||e[o])return a||e[o]}},As.getAllPlayers=function(){return Object.keys(ms.players).map(function(t){return ms.players[t]}).filter(Boolean)},As.players=ms.players,As.getComponent=Xt.getComponent,As.registerComponent=function(t,e){br.isTech(e)&&f.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Xt.registerComponent.call(Xt,t,e)},As.getTech=br.getTech,As.registerTech=br.registerTech,As.use=function(t,e){Tr[t]=Tr[t]||[],Tr[t].push(e)},Object.defineProperty(As,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(As.middleware,"TERMINATOR",{value:kr,writeable:!1,enumerable:!0}),As.browser=ye,As.TOUCH_ENABLED=ge,As.extend=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=function(){t.apply(this,arguments)},r={};for(var n in"object"===("undefined"==typeof e?"undefined":v(e))?(e.constructor!==Object.prototype.constructor&&(i=e.constructor),r=e):"function"==typeof e&&(i=e),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)}(i,t),r)r.hasOwnProperty(n)&&(i.prototype[n]=r[n]);return i},As.mergeOptions=Gt,As.bind=Ot,As.registerPlugin=Es.registerPlugin,As.plugin=function(t,e){return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),Es.registerPlugin(t,e)},As.getPlugins=Es.getPlugins,As.getPlugin=Es.getPlugin,As.getPluginVersion=Es.getPluginVersion,As.addLanguage=function(t,e){var i;return t=(""+t).toLowerCase(),As.options.languages=Gt(As.options.languages,((i={})[t]=e,i)),As.options.languages[t]},As.log=f,As.createTimeRange=As.createTimeRanges=be,As.formatTime=Yr,As.setFormatTime=function(t){Xr=t},As.resetFormatTime=function(){Xr=Gr},As.parseUrl=Je,As.isCrossOrigin=ei,As.EventTarget=Dt,As.on=_t,As.one=St,As.off=bt,As.trigger=Tt,As.xhr=Ci,As.TextTrack=Oi,As.AudioTrack=xi,As.VideoTrack=Ii,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){As[t]=function(){return f.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),at[t].apply(null,arguments)}}),As.computedStyle=A,As.dom=at,As.url=ii;var Os=e(function(t,e){var i,c,r,n,h;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,c=/^([^\/;?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,h={buildAbsoluteURL:function(t,e,i){if(i=i||{},t=t.trim(),!(e=e.trim())){if(!i.alwaysNormalize)return t;var r=h.parseURL(t);if(!r)throw new Error("Error trying to parse base URL.");return r.path=h.normalizePath(r.path),h.buildURLFromParts(r)}var n=h.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return i.alwaysNormalize?(n.path=h.normalizePath(n.path),h.buildURLFromParts(n)):e;var s=h.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var a=c.exec(s.path);s.netLoc=a[1],s.path=a[2]}s.netLoc&&!s.path&&(s.path="/");var o={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(o.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,l=u.substring(0,u.lastIndexOf("/")+1)+n.path;o.path=h.normalizePath(l)}else o.path=s.path,n.params||(o.params=s.params,n.query||(o.query=s.query));return null===o.path&&(o.path=i.alwaysNormalize?h.normalizePath(n.path):n.path),h.buildURLFromParts(o)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(r,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=h}),xs=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Is=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Ds=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Rs=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},Ms=function(){function t(){xs(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t],i=void 0,r=void 0,n=void 0;if(e)if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else for(n=Array.prototype.slice.call(arguments,1),r=e.length,i=0;i<r;++i)e[i].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Us=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.buffer="",t}return Ds(i,e),i.prototype.push=function(t){var e=void 0;for(this.buffer+=t,e=this.buffer.indexOf("\n");-1<e;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},i}(Ms),Ns=function(t){for(var e=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},r=e.length,n=void 0;r--;)""!==e[r]&&((n=/([^=]*)=(.*)/.exec(e[r]).slice(1))[0]=n[0].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^['"](.*)['"]$/g,"$1"),i[n[0]]=n[1]);return i},Bs=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.customParsers=[],t}return Ds(i,e),i.prototype.push=function(t){var e=void 0,i=void 0;if(0!==(t=t.replace(/^[\u0000\s]+|[\u0000\s]+$/g,"")).length)if("#"===t[0]){for(var r=0;r<this.customParsers.length;r++)if(this.customParsers[r].call(this,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))this.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void this.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"map"},e[1]){var n=Ns(e[1]);if(n.URI&&(i.uri=n.URI),n.BYTERANGE){var s=n.BYTERANGE.split("@"),a=s[0],o=s[1];i.byterange={},a&&(i.byterange.length=parseInt(a,10)),o&&(i.byterange.offset=parseInt(o,10))}}this.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=Ns(e[1]),i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),l={};u[0]&&(l.width=parseInt(u[0],10)),u[1]&&(l.height=parseInt(u[1],10)),i.attributes.RESOLUTION=l}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=Ns(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-ENDLIST/.exec(t))this.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))this.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=Ns(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i);if(e=/^#EXT-X-START:?(.*)$/.exec(t))return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=Ns(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);this.trigger("data",{type:"tag",data:t.slice(4)})}}}else this.trigger("data",{type:"comment",text:t.slice(1)})}else this.trigger("data",{type:"uri",uri:t})},i.prototype.addParser=function(t){var e=this,i=t.expression,r=t.customType,n=t.dataParser,s=t.segment;"function"!=typeof n&&(n=function(t){return t}),this.customParsers.push(function(t){if(i.exec(t))return e.trigger("data",{type:"custom",data:n(t),customType:r,segment:s}),!0})},i}(Ms),js=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));t.lineStream=new Us,t.parseStream=new Bs,t.lineStream.pipe(t.parseStream);var n=t,s=[],a={},o=void 0,u=void 0,l={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},c=0;return t.manifest={allowCache:!0,discontinuityStarts:[],segments:[]},t.parseStream.on("data",function(e){var i=void 0,r=void 0;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=e.allowed,"allowed"in e||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var t={};"length"in e&&((a.byterange=t).length=e.length,"offset"in e||(this.trigger("info",{message:"defaulting offset to zero"}),e.offset=0)),"offset"in e&&((a.byterange=t).offset=e.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),0<e.duration&&(a.duration=e.duration),0===e.duration&&(a.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=s},key:function(){e.attributes?"NONE"!==e.attributes.METHOD?e.attributes.URI?(e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),u={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI},"undefined"!=typeof e.attributes.IV&&(u.iv=e.attributes.IV)):this.trigger("warn",{message:"ignoring key declaration without URI"}):u=null:this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(e.number)?this.manifest.mediaSequence=e.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){isFinite(e.number)?(this.manifest.discontinuitySequence=e.number,c=e.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){/VOD|EVENT/.test(e.playlistType)?this.manifest.playlistType=e.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},map:function(){o={},e.uri&&(o.uri=e.uri),e.byterange&&(o.byterange=e.byterange)},"stream-inf":function(){this.manifest.playlists=s,this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes?(a.attributes||(a.attributes={}),Is(a.attributes,e.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes&&e.attributes.TYPE&&e.attributes["GROUP-ID"]&&e.attributes.NAME){var t=this.manifest.mediaGroups[e.attributes.TYPE];t[e.attributes["GROUP-ID"]]=t[e.attributes["GROUP-ID"]]||{},i=t[e.attributes["GROUP-ID"]],(r={default:/yes/i.test(e.attributes.DEFAULT)}).default?r.autoselect=!0:r.autoselect=/yes/i.test(e.attributes.AUTOSELECT),e.attributes.LANGUAGE&&(r.language=e.attributes.LANGUAGE),e.attributes.URI&&(r.uri=e.attributes.URI),e.attributes["INSTREAM-ID"]&&(r.instreamId=e.attributes["INSTREAM-ID"]),e.attributes.CHARACTERISTICS&&(r.characteristics=e.attributes.CHARACTERISTICS),e.attributes.FORCED&&(r.forced=/yes/i.test(e.attributes.FORCED)),i[e.attributes.NAME]=r}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){c+=1,a.discontinuity=!0,this.manifest.discontinuityStarts.push(s.length)},"program-date-time":function(){"undefined"==typeof this.manifest.dateTimeString&&(this.manifest.dateTimeString=e.dateTimeString,this.manifest.dateTimeObject=e.dateTimeObject),a.dateTimeString=e.dateTimeString,a.dateTimeObject=e.dateTimeObject},targetduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):this.manifest.targetDuration=e.duration},totalduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+e.duration}):this.manifest.totalDuration=e.duration},start:function(){e.attributes&&!isNaN(e.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:e.attributes["TIME-OFFSET"],precise:e.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){a.cueOut=e.data},"cue-out-cont":function(){a.cueOutCont=e.data},"cue-in":function(){a.cueIn=e.data}}[e.tagType]||function(){}).call(n)},uri:function(){a.uri=e.uri,s.push(a),!this.manifest.targetDuration||"duration"in a||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),a.duration=this.manifest.targetDuration),u&&(a.key=u),a.timeline=c,o&&(a.map=o),a={}},comment:function(){},custom:function(){e.segment?(a.custom=a.custom||{},a.custom[e.customType]=e.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[e.customType]=e.data)}})[e.type].call(n)}),t}return Ds(i,e),i.prototype.push=function(t){this.lineStream.push(t)},i.prototype.end=function(){this.lineStream.push("\n")},i.prototype.addParser=function(t){this.parseStream.addParser(t)},i}(Ms),Fs=function(t){var e,i=t.attributes,r=t.segments,n={attributes:(e={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:r,mediaSequence:r.length?r[0].number:1};return i.contentProtection&&(n.contentProtection=i.contentProtection),n},Hs=function(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))},Vs=function r(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.reduce(function(e,i){return Object.keys(i).forEach(function(t){Array.isArray(e[t])&&Array.isArray(i[t])?e[t]=e[t].concat(i[t]):Hs(e[t])&&Hs(i[t])?e[t]=r(e[t],i[t]):e[t]=i[t]}),e},{})},qs=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Ws=function(t){var e=t.baseUrl,i=void 0===e?"":e,r=t.source,n=void 0===r?"":r,s=t.range,a=void 0===s?"":s,o={uri:n,resolvedUri:qs(i||"",n)};if(a){var u=a.split("-"),l=parseInt(u[0],10),c=parseInt(u[1],10);o.byterange={length:c-l,offset:l}}return o},zs=function(t,e){for(var i,r,n,s,a,o,u,l,c,h,d,p,f=t.type,m=void 0===f?"static":f,g=t.minimumUpdatePeriod,y=void 0===g?0:g,v=t.media,_=void 0===v?"":v,b=t.sourceDuration,T=t.timescale,S=void 0===T?1:T,k=t.startNumber,C=void 0===k?1:k,E=t.periodIndex,w=[],A=-1,L=0;L<e.length;L++){var P=e[L],O=P.d,x=P.r||0,I=P.t||0;A<0&&(A=I),I&&A<I&&(A=I);var D=void 0;if(x<0){var R=L+1;R===e.length?"dynamic"===m&&0<y&&0<_.indexOf("$Number$")?(r=A,n=O,void 0,s=(i=t).NOW,a=i.clientOffset,o=i.availabilityStartTime,u=i.timescale,l=void 0===u?1:u,c=i.start,h=void 0===c?0:c,d=i.minimumUpdatePeriod,p=(s+a)/1e3+(void 0===d?0:d)-(o+h),D=Math.ceil((p*l-r)/n)):D=(b*S-A)/O:D=(e[R].t-A)/O}else D=x+1;for(var M=C+w.length+D,U=C+w.length;U<M;)w.push({number:U,duration:O/S,time:A,timeline:E}),A+=O,U++}return w},Gs=function(t){return t.reduce(function(t,e){return t.concat(e)},[])},Xs=function(t){if(!t.length)return[];for(var e=[],i=0;i<t.length;i++)e.push(t[i]);return e},Ys={static:function(t){var e=t.duration,i=t.timescale,r=void 0===i?1:i,n=t.sourceDuration;return{start:0,end:Math.ceil(n/(e/r))}},dynamic:function(t){var e=t.NOW,i=t.clientOffset,r=t.availabilityStartTime,n=t.timescale,s=void 0===n?1:n,a=t.duration,o=t.start,u=void 0===o?0:o,l=t.minimumUpdatePeriod,c=void 0===l?0:l,h=t.timeShiftBufferDepth,d=void 0===h?1/0:h,p=(e+i)/1e3,f=r+u,m=p+c-f,g=Math.ceil(m*s/a),y=Math.floor((p-f-d)*s/a),v=Math.floor((p-f)*s/a);return{start:Math.max(0,y),end:Math.min(g,v)}}},$s=function(t){var o,e=t.type,i=void 0===e?"static":e,r=t.duration,n=t.timescale,s=void 0===n?1:n,a=t.sourceDuration,u=Ys[i](t),l=function(t,e){for(var i=[],r=t;r<e;r++)i.push(r);return i}(u.start,u.end).map((o=t,function(t,e){var i=o.duration,r=o.timescale,n=void 0===r?1:r,s=o.periodIndex,a=o.startNumber;return{number:(void 0===a?1:a)+t,duration:i/n,timeline:s,time:e*i}}));if("static"===i){var c=l.length-1;l[c].duration=a-r/s*c}return l},Ks=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,Qs=function(t,e){return t.replace(Ks,(s=e,function(t,e,i,r){if("$$"===t)return"$";if("undefined"==typeof s[e])return t;var n=""+s[e];return"RepresentationID"===e?n:(r=i?parseInt(r,10):1)<=n.length?n:""+new Array(r-n.length+1).join("0")+n}));var s},Js=function(i,t){var e,r,n={RepresentationID:i.id,Bandwidth:i.bandwidth||0},s=i.initialization,a=void 0===s?{sourceURL:"",range:""}:s,o=Ws({baseUrl:i.baseUrl,source:Qs(a.sourceURL,n),range:a.range});return(r=t,(e=i).duration||r?e.duration?$s(e):zs(e,r):[{number:e.startNumber||1,duration:e.sourceDuration,time:0,timeline:e.periodIndex}]).map(function(t){n.Number=t.number,n.Time=t.time;var e=Qs(i.media||"",n);return{uri:e,timeline:t.timeline,duration:t.duration,resolvedUri:qs(i.baseUrl||"",e),map:o,number:t.number}})},Zs="INVALID_NUMBER_OF_PERIOD",ta="DASH_EMPTY_MANIFEST",ea="DASH_INVALID_XML",ia="NO_BASE_URL",ra="SEGMENT_TIME_UNSPECIFIED",na="UNSUPPORTED_UTC_TIMING_SCHEME",sa=function(u,t){var e=u.duration,i=u.segmentUrls,r=void 0===i?[]:i;if(!e&&!t||e&&t)throw new Error(ra);var n=r.map(function(t){return i=t,r=(e=u).baseUrl,n=e.initialization,a=Ws({baseUrl:r,source:(s=void 0===n?{}:n).sourceURL,range:s.range}),(o=Ws({baseUrl:r,source:i.media,range:i.mediaRange})).map=a,o;var e,i,r,n,s,a,o}),s=void 0;return e&&(s=$s(u)),t&&(s=zs(u,t)),s.map(function(t,e){if(n[e]){var i=n[e];return i.timeline=t.timeline,i.duration=t.duration,i.number=t.number,i}}).filter(function(t){return t})},aa=function(t){var e=t.baseUrl,i=t.initialization,r=void 0===i?{}:i,n=t.sourceDuration,s=t.timescale,a=void 0===s?1:s,o=t.indexRange,u=void 0===o?"":o,l=t.duration;if(!e)throw new Error(ia);var c=Ws({baseUrl:e,source:r.sourceURL,range:r.range}),h=Ws({baseUrl:e,source:e,range:u});if(h.map=c,l){var d=$s(t);d.length&&(h.duration=d[0].duration,h.timeline=d[0].timeline)}else n&&(h.duration=n/a,h.timeline=0);return h.number=0,[h]},oa=function(t){var e=t.attributes,i=t.segmentInfo,r=void 0,n=void 0;if(i.template?(n=Js,r=Vs(e,i.template)):i.base?(n=aa,r=Vs(e,i.base)):i.list&&(n=sa,r=Vs(e,i.list)),!n)return{attributes:e};var s=n(r,i.timeline);if(r.duration){var a=r,o=a.duration,u=a.timescale,l=void 0===u?1:u;r.duration=o/l}else s.length?r.duration=s.reduce(function(t,e){return Math.max(t,Math.ceil(e.duration))},0):r.duration=0;return{attributes:r,segments:s}},ua=function(t,e){return Xs(t.childNodes).filter(function(t){return t.tagName===e})},la=function(t){return t.textContent.trim()},ca=function(t){var e=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);if(!e)return 0;var i=e.slice(1),r=i[0],n=i[1],s=i[2],a=i[3],o=i[4],u=i[5];return 31536e3*parseFloat(r||0)+2592e3*parseFloat(n||0)+86400*parseFloat(s||0)+3600*parseFloat(a||0)+60*parseFloat(o||0)+parseFloat(u||0)},ha={mediaPresentationDuration:function(t){return ca(t)},availabilityStartTime:function(t){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e=t)&&(e+="Z"),Date.parse(e)/1e3;var e},minimumUpdatePeriod:function(t){return ca(t)},timeShiftBufferDepth:function(t){return ca(t)},start:function(t){return ca(t)},width:function(t){return parseInt(t,10)},height:function(t){return parseInt(t,10)},bandwidth:function(t){return parseInt(t,10)},startNumber:function(t){return parseInt(t,10)},timescale:function(t){return parseInt(t,10)},duration:function(t){var e=parseInt(t,10);return isNaN(e)?ca(t):e},d:function(t){return parseInt(t,10)},t:function(t){return parseInt(t,10)},r:function(t){return parseInt(t,10)},DEFAULT:function(t){return t}},da=function(t){return t&&t.attributes?Xs(t.attributes).reduce(function(t,e){var i=ha[e.name]||ha.DEFAULT;return t[e.name]=i(e.value),t},{}):{}};var pa,fa,ma={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},ga=function(t,i){return i.length?Gs(t.map(function(e){return i.map(function(t){return qs(e,la(t))})})):t},ya=function(t){var e=ua(t,"SegmentTemplate")[0],i=ua(t,"SegmentList")[0],r=i&&ua(i,"SegmentURL").map(function(t){return Vs({tag:"SegmentURL"},da(t))}),n=ua(t,"SegmentBase")[0],s=i||e,a=s&&ua(s,"SegmentTimeline")[0],o=i||n||e,u=o&&ua(o,"Initialization")[0],l=e&&da(e);l&&u?l.initialization=u&&da(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization});var c={template:l,timeline:a&&ua(a,"S").map(function(t){return da(t)}),list:i&&Vs(da(i),{segmentUrls:r,initialization:da(u)}),base:n&&Vs(da(n),{initialization:da(u)})};return Object.keys(c).forEach(function(t){c[t]||delete c[t]}),c},va=function(t){return t.reduce(function(t,e){var i=da(e),r=ma[i.schemeIdUri];if(r){t[r]={attributes:i};var n=ua(e,"cenc:pssh")[0];if(n){var s=la(n),a=s&&function(t){for(var e=g.atob(t),i=new Uint8Array(e.length),r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(s);t[r].pssh=a}}return t},{})},_a=function(p,f,m){return function(t){var e=da(t),i=ga(f,ua(t,"BaseURL")),r=ua(t,"Role")[0],n={role:da(r)},s=Vs(p,e,n),a=va(ua(t,"ContentProtection"));Object.keys(a).length&&(s=Vs(s,{contentProtection:a}));var o,u,l,c=ya(t),h=ua(t,"Representation"),d=Vs(m,c);return Gs(h.map((o=s,u=i,l=d,function(t){var e=ua(t,"BaseURL"),i=ga(u,e),r=Vs(o,da(t)),n=ya(t);return i.map(function(t){return{segmentInfo:Vs(l,n),attributes:Vs(r,{baseUrl:t})}})})))}},ba=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=e.manifestUri,r=void 0===i?"":i,n=e.NOW,s=void 0===n?Date.now():n,a=e.clientOffset,o=void 0===a?0:a,u=ua(t,"Period");if(1!==u.length)throw new Error(Zs);var l,c,h=da(t),d=ga([r],ua(t,"BaseURL"));return h.sourceDuration=h.mediaPresentationDuration||0,h.NOW=s,h.clientOffset=o,Gs(u.map((l=h,c=d,function(t,e){var i=ga(c,ua(t,"BaseURL")),r=da(t),n=Vs(l,r,{periodIndex:e}),s=ua(t,"AdaptationSet"),a=ya(t);return Gs(s.map(_a(n,i,a)))})))},Ta=function(t){if(""===t)throw new Error(ta);var e=(new g.DOMParser).parseFromString(t,"application/xml"),i=e&&"MPD"===e.documentElement.tagName?e.documentElement:null;if(!i||i&&0<i.getElementsByTagName("parsererror").length)throw new Error(ea);return i},Sa=function(t,e){return function(t){var e;if(!t.length)return{};var i=t[0].attributes,r=i.sourceDuration,n=i.minimumUpdatePeriod,s=void 0===n?0:n,a=t.filter(function(t){var e=t.attributes;return"video/mp4"===e.mimeType||"video"===e.contentType}).map(Fs),o=t.filter(function(t){var e=t.attributes;return"audio/mp4"===e.mimeType||"audio"===e.contentType}),u=t.filter(function(t){var e=t.attributes;return"text/vtt"===e.mimeType||"text"===e.contentType}),l={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(e={AUDIO:{},VIDEO:{}},e["CLOSED-CAPTIONS"]={},e.SUBTITLES={},e),uri:"",duration:r,playlists:a,minimumUpdatePeriod:1e3*s};return o.length&&(l.mediaGroups.AUDIO.audio=o.reduce(function(t,e){var i,r,n,s,a,o=e.attributes.role&&e.attributes.role.value||"main",u=e.attributes.lang||"",l="main";return u&&(l=e.attributes.lang+" ("+o+")"),t[l]&&t[l].playlists[0].attributes.BANDWIDTH>e.attributes.bandwidth||(t[l]={language:u,autoselect:!0,default:"main"===o,playlists:[(i=e,n=i.attributes,s=i.segments,a={attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth,CODECS:n.codecs},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1},n.contentProtection&&(a.contentProtection=n.contentProtection),a)],uri:""}),t},{})),u.length&&(l.mediaGroups.SUBTITLES.subs=u.reduce(function(t,e){var i,r,n,s,a=e.attributes.lang||"text";return t[a]||(t[a]={language:a,default:!1,autoselect:!1,playlists:[(i=e,n=i.attributes,s=i.segments,"undefined"==typeof s&&(s=[{uri:n.baseUrl,timeline:n.periodIndex,resolvedUri:n.baseUrl||"",duration:n.sourceDuration,number:0}],n.duration=n.sourceDuration),{attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:n.baseUrl||"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1})],uri:""}),t},{})),l}(ba(Ta(t),e).map(oa))},ka=function(t){return function(t){var e=ua(t,"UTCTiming")[0];if(!e)return null;var i=da(e);switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD";break;case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET";break;case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value);break;case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error(na)}return i}(Ta(t))},Ca={toUnsigned:function(t){return t>>>0}},Ea=Ca.toUnsigned,wa=Object.freeze({default:Ca,__moduleExports:Ca,toUnsigned:Ea}),Aa=(wa&&Ca||wa).toUnsigned;pa=function(t,e){var i,r,n,s,a,o=[];if(!e.length)return null;for(i=0;i<t.byteLength;)r=Aa(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3]),n=fa(t.subarray(i+4,i+8)),s=1<r?i+r:t.byteLength,n===e[0]&&(1===e.length?o.push(t.subarray(i+8,s)):(a=pa(t.subarray(i+8,s),e.slice(1))).length&&(o=o.concat(a))),i=s;return o};fa=function(t){var e="";return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),e+=String.fromCharCode(t[2]),e+=String.fromCharCode(t[3])};var La=function(t){return pa(t,["moov","trak"]).reduce(function(t,e){var i,r,n,s,a;return(i=pa(e,["tkhd"])[0])?(r=i[0],s=Aa(i[n=0===r?12:20]<<24|i[n+1]<<16|i[n+2]<<8|i[n+3]),(a=pa(e,["mdia","mdhd"])[0])?(n=0===(r=a[0])?12:20,t[s]=Aa(a[n]<<24|a[n+1]<<16|a[n+2]<<8|a[n+3]),t):null):null},{})},Pa=function(n,t){var e,i,r;return e=pa(t,["moof","traf"]),i=[].concat.apply([],e.map(function(r){return pa(r,["tfhd"]).map(function(t){var e,i;return e=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),i=n[e]||9e4,(pa(r,["tfdt"]).map(function(t){var e,i;return e=t[0],i=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),1===e&&(i*=Math.pow(2,32),i+=Aa(t[8]<<24|t[9]<<16|t[10]<<8|t[11])),i})[0]||1/0)/i})})),r=Math.min.apply(null,i),isFinite(r)?r:0},Oa={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},xa=Oa.H264_STREAM_TYPE,Ia=Oa.ADTS_STREAM_TYPE,Da=Oa.METADATA_STREAM_TYPE,Ra=Object.freeze({default:Oa,__moduleExports:Oa,H264_STREAM_TYPE:xa,ADTS_STREAM_TYPE:Ia,METADATA_STREAM_TYPE:Da}),Ma=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};Ma.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},Ma.prototype.push=function(t){this.trigger("data",t)},Ma.prototype.flush=function(t){this.trigger("done",t)};var Ua=Ma,Na=Object.freeze({default:Ua,__moduleExports:Ua}),Ba=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},ja=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=Ba(t.dts,r),t.pts=Ba(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};ja.prototype=new(Na&&Ua||Na);var Fa={TimestampRolloverStream:ja,handleRollover:Ba},Ha=Fa.TimestampRolloverStream,Va=Fa.handleRollover,qa=Object.freeze({default:Fa,__moduleExports:Fa,TimestampRolloverStream:Ha,handleRollover:Va}),Wa=Ra&&Oa||Ra,za=function(t){var e=31&t[1];return e<<=8,e|=t[2]},Ga=function(t){return!!(64&t[1])},Xa=function(t){var e=0;return 1<(48&t[3])>>>4&&(e+=t[4]+1),e},Ya=function(t){switch(t){case 5:return"slice_layer_without_partitioning_rbsp_idr";case 6:return"sei_rbsp";case 7:return"seq_parameter_set_rbsp";case 8:return"pic_parameter_set_rbsp";case 9:return"access_unit_delimiter_rbsp";default:return null}},$a={parseType:function(t,e){var i=za(t);return 0===i?"pat":i===e?"pmt":e?"pes":null},parsePat:function(t){var e=Ga(t),i=4+Xa(t);return e&&(i+=t[i]+1),(31&t[i+10])<<8|t[i+11]},parsePmt:function(t){var e={},i=Ga(t),r=4+Xa(t);if(i&&(r+=t[r]+1),1&t[r+5]){var n;n=3+((15&t[r+1])<<8|t[r+2])-4;for(var s=12+((15&t[r+10])<<8|t[r+11]);s<n;){var a=r+s;e[(31&t[a+1])<<8|t[a+2]]=t[a],s+=5+((15&t[a+3])<<8|t[a+4])}return e}},parsePayloadUnitStartIndicator:Ga,parsePesType:function(t,e){switch(e[za(t)]){case Wa.H264_STREAM_TYPE:return"video";case Wa.ADTS_STREAM_TYPE:return"audio";case Wa.METADATA_STREAM_TYPE:return"timed-metadata";default:return null}},parsePesTime:function(t){if(!Ga(t))return null;var e=4+Xa(t);if(e>=t.byteLength)return null;var i,r=null;return 192&(i=t[e+7])&&((r={}).pts=(14&t[e+9])<<27|(255&t[e+10])<<20|(254&t[e+11])<<12|(255&t[e+12])<<5|(254&t[e+13])>>>3,r.pts*=4,r.pts+=(6&t[e+13])>>>1,r.dts=r.pts,64&i&&(r.dts=(14&t[e+14])<<27|(255&t[e+15])<<20|(254&t[e+16])<<12|(255&t[e+17])<<5|(254&t[e+18])>>>3,r.dts*=4,r.dts+=(6&t[e+18])>>>1)),r},videoPacketContainsKeyFrame:function(t){for(var e=4+Xa(t),i=t.subarray(e),r=0,n=0,s=!1;n<i.byteLength-3;n++)if(1===i[n+2]){r=n+5;break}for(;r<i.byteLength;)switch(i[r]){case 0:if(0!==i[r-1]){r+=2;break}if(0!==i[r-2]){r++;break}for(n+3!==r-2&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0);1!==i[++r]&&r<i.length;);n=r-2,r+=3;break;case 1:if(0!==i[r-1]||0!==i[r-2]){r+=3;break}"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),n=r-2,r+=3;break;default:r+=3}return i=i.subarray(n),r-=n,n=0,i&&3<i.byteLength&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),s}},Ka=$a.parseType,Qa=$a.parsePat,Ja=$a.parsePmt,Za=$a.parsePayloadUnitStartIndicator,to=$a.parsePesType,eo=$a.parsePesTime,io=$a.videoPacketContainsKeyFrame,ro=Object.freeze({default:$a,__moduleExports:$a,parseType:Ka,parsePat:Qa,parsePmt:Ja,parsePayloadUnitStartIndicator:Za,parsePesType:to,parsePesTime:eo,videoPacketContainsKeyFrame:io}),no=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],so=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ao={parseId3TagSize:function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},parseAdtsSize:function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},parseType:function(t,e){return t[e]==="I".charCodeAt(0)&&t[e+1]==="D".charCodeAt(0)&&t[e+2]==="3".charCodeAt(0)?"timed-metadata":!0&t[e]&&240==(240&t[e+1])?"audio":null},parseSampleRate:function(t){for(var e=0;e+5<t.length;){if(255===t[e]&&240==(246&t[e+1]))return no[(60&t[e+2])>>>2];e++}return null},parseAacTimestamp:function(t){var e,i,r;e=10,64&t[5]&&(e+=4,e+=so(t.subarray(10,14)));do{if((i=so(t.subarray(e+4,e+8)))<1)return null;if("PRIV"===String.fromCharCode(t[e],t[e+1],t[e+2],t[e+3])){r=t.subarray(e+10,e+i+10);for(var n=0;n<r.byteLength;n++)if(0===r[n]){if("com.apple.streaming.transportStreamTimestamp"===unescape(function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n}(r,0,n))){var s=r.subarray(n+1),a=(1&s[3])<<30|s[4]<<22|s[5]<<14|s[6]<<6|s[7]>>>2;return a*=4,a+=3&s[7]}break}}e+=10,e+=i}while(e<t.byteLength);return null}},oo=ao.parseId3TagSize,uo=ao.parseAdtsSize,lo=ao.parseType,co=ao.parseSampleRate,ho=ao.parseAacTimestamp,po=Object.freeze({default:ao,__moduleExports:ao,parseId3TagSize:oo,parseAdtsSize:uo,parseType:lo,parseSampleRate:co,parseAacTimestamp:ho}),fo=ro&&$a||ro,mo=po&&ao||po,go=(qa&&Fa||qa).handleRollover,yo={};yo.ts=fo,yo.aac=mo;var vo=188,_o=function(t,e,i){for(var r,n,s,a,o=0,u=vo,l=!1;u<t.byteLength;)if(71!==t[o]||71!==t[u])o++,u++;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o+=vo,u+=vo}for(o=(u=t.byteLength)-vo,l=!1;0<=o;)if(71!==t[o]||71!==t[u])o--,u--;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o-=vo,u-=vo}},bo=function(t,e,i){for(var r,n,s,a,o,u,l,c=0,h=vo,d=!1,p={data:[],size:0};h<t.byteLength;)if(71!==t[c]||71!==t[h])c++,h++;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":if(n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&(s&&!d&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0),!i.firstKeyFrame)){if(s&&0!==p.size){for(o=new Uint8Array(p.size),u=0;p.data.length;)l=p.data.shift(),o.set(l,u),u+=l.byteLength;yo.ts.videoPacketContainsKeyFrame(o)&&(i.firstKeyFrame=yo.ts.parsePesTime(o),i.firstKeyFrame.type="video"),p.size=0}p.data.push(r),p.size+=r.byteLength}}if(d&&i.firstKeyFrame)break;c+=vo,h+=vo}for(c=(h=t.byteLength)-vo,d=!1;0<=c;)if(71!==t[c]||71!==t[h])c--,h--;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0)}if(d)break;c-=vo,h-=vo}},To=function(t){var e={pid:null,table:null},i={};for(var r in function(t,e){for(var i,r=0,n=vo;n<t.byteLength;)if(71!==t[r]||71!==t[n])r++,n++;else{switch(i=t.subarray(r,n),yo.ts.parseType(i,e.pid)){case"pat":e.pid||(e.pid=yo.ts.parsePat(i));break;case"pmt":e.table||(e.table=yo.ts.parsePmt(i))}if(e.pid&&e.table)return;r+=vo,n+=vo}}(t,e),e.table){if(e.table.hasOwnProperty(r))switch(e.table[r]){case Wa.H264_STREAM_TYPE:i.video=[],bo(t,e,i),0===i.video.length&&delete i.video;break;case Wa.ADTS_STREAM_TYPE:i.audio=[],_o(t,e,i),0===i.audio.length&&delete i.audio}}return i},So=function(t,e){var i,r;return(r=(i=t)[0]==="I".charCodeAt(0)&&i[1]==="D".charCodeAt(0)&&i[2]==="3".charCodeAt(0)?function(t){for(var e,i=!1,r=0,n=null,s=null,a=0,o=0;3<=t.length-o;){switch(yo.aac.parseType(t,o)){case"timed-metadata":if(t.length-o<10){i=!0;break}if((a=yo.aac.parseId3TagSize(t,o))>t.length){i=!0;break}null===s&&(e=t.subarray(o,o+a),s=yo.aac.parseAacTimestamp(e)),o+=a;break;case"audio":if(t.length-o<7){i=!0;break}if((a=yo.aac.parseAdtsSize(t,o))>t.length){i=!0;break}null===n&&(e=t.subarray(o,o+a),n=yo.aac.parseSampleRate(e)),r++,o+=a;break;default:o++}if(i)return null}if(null===n||null===s)return null;var u=9e4/n;return{audio:[{type:"audio",dts:s,pts:s},{type:"audio",dts:s+1024*r*u,pts:s+1024*r*u}]}}(t):To(t))&&(r.audio||r.video)?(function(t,e){if(t.audio&&t.audio.length){var i=e;"undefined"==typeof i&&(i=t.audio[0].dts),t.audio.forEach(function(t){t.dts=go(t.dts,i),t.pts=go(t.pts,i),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4})}if(t.video&&t.video.length){var r=e;if("undefined"==typeof r&&(r=t.video[0].dts),t.video.forEach(function(t){t.dts=go(t.dts,r),t.pts=go(t.pts,r),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4}),t.firstKeyFrame){var n=t.firstKeyFrame;n.dts=go(n.dts,r),n.pts=go(n.pts,r),n.dtsTime=n.dts/9e4,n.ptsTime=n.dts/9e4}}}(r,e),r):null};var ko=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Co=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),Eo=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},wo=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},Ao=null,Lo=function(){function c(t){ko(this,c),Ao||(Ao=wo()),this._tables=[[Ao[0][0].slice(),Ao[0][1].slice(),Ao[0][2].slice(),Ao[0][3].slice(),Ao[0][4].slice()],[Ao[1][0].slice(),Ao[1][1].slice(),Ao[1][2].slice(),Ao[1][3].slice(),Ao[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),Po=function(){function t(){ko(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Oo=function(e){function i(){ko(this,i);var t=Eo(this,e.call(this,Po));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(Po),xo=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},Io=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new Lo(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=xo(r[m]),d=xo(r[m+1]),p=xo(r[m+2]),f=xo(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=xo(a[m]^o),a[m+1]=xo(a[m+1]^u),a[m+2]=xo(a[m+2]^l),a[m+3]=xo(a[m+3]^c),o=h,u=d,l=p,c=f;return s},Do=function(){function u(t,e,i,r){ko(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new Oo,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([xo(s[o-4]),xo(s[o-3]),xo(s[o-2]),xo(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=Io(e,i,r);n.set(t,e.byteOffset)}},Co(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),Ro=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Mo=As.mergeOptions,Uo=As.log,No=function(n,s){["AUDIO","SUBTITLES"].forEach(function(t){for(var e in n.mediaGroups[t])for(var i in n.mediaGroups[t][e]){var r=n.mediaGroups[t][e][i];s(r,t,e,i)}})},Bo=function(t,e){var i=Mo(t,{}),r=i.playlists[e.uri];if(!r)return null;if(r.segments&&e.segments&&r.segments.length===e.segments.length&&r.mediaSequence===e.mediaSequence)return null;var n=Mo(r,e);r.segments&&(n.segments=function(t,e,i){var r=e.slice();i=i||0;for(var n=Math.min(t.length,e.length+i),s=i;s<n;s++)r[s-i]=Mo(t[s],r[s-i]);return r}(r.segments,e.segments,e.mediaSequence-r.mediaSequence)),n.segments.forEach(function(t){var e,i;e=t,i=n.resolvedUri,e.resolvedUri||(e.resolvedUri=Ro(i,e.uri)),e.key&&!e.key.resolvedUri&&(e.key.resolvedUri=Ro(i,e.key.uri)),e.map&&!e.map.resolvedUri&&(e.map.resolvedUri=Ro(i,e.map.uri))});for(var s=0;s<i.playlists.length;s++)i.playlists[s].uri===e.uri&&(i.playlists[s]=n);return i.playlists[e.uri]=n,i},jo=function(t){for(var e=t.playlists.length;e--;){var i=t.playlists[e];(t.playlists[i.uri]=i).resolvedUri=Ro(t.uri,i.uri),i.id=e,i.attributes||(i.attributes={},Uo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))}},Fo=function(e){No(e,function(t){t.uri&&(t.resolvedUri=Ro(e.uri,t.uri))})},Ho=function(t,e){var i=t.segments[t.segments.length-1];return e&&i&&i.duration?1e3*i.duration:500*(t.targetDuration||10)},Vo=function(n){function s(t,e,i){y(this,s);var r=b(this,n.call(this));if(r.srcUrl=t,r.hls_=e,r.withCredentials=i,!r.srcUrl)throw new Error("A non-empty playlist URL is required");return r.state="HAVE_NOTHING",r.on("mediaupdatetimeout",function(){"HAVE_METADATA"===r.state&&(r.state="HAVE_CURRENT_METADATA",r.request=r.hls_.xhr({uri:Ro(r.master.uri,r.media().uri),withCredentials:r.withCredentials},function(t,e){if(r.request)return t?r.playlistRequestError(r.request,r.media().uri,"HAVE_METADATA"):void r.haveMetadata(r.request,r.media().uri)}))}),r}return _(s,n),s.prototype.playlistRequestError=function(t,e,i){this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[e],status:t.status,message:"HLS playlist request error at URL: "+e,responseText:t.responseText,code:500<=t.status?4:2},this.trigger("error")},s.prototype.haveMetadata=function(t,e){var i=this;this.request=null,this.state="HAVE_METADATA";var r=new js;r.push(t.responseText),r.end(),r.manifest.uri=e,r.manifest.attributes=r.manifest.attributes||{};var n=Bo(this.master,r.manifest);this.targetDuration=r.manifest.targetDuration,n?(this.master=n,this.media_=this.master.playlists[r.manifest.uri]):this.trigger("playlistunchanged"),this.media().endList||(g.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=g.setTimeout(function(){i.trigger("mediaupdatetimeout")},Ho(this.media(),!!n))),this.trigger("loadedplaylist")},s.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},s.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},s.prototype.media=function(i){var r=this;if(!i)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var n=this.state;if("string"==typeof i){if(!this.master.playlists[i])throw new Error("Unknown playlist URI: "+i);i=this.master.playlists[i]}var t=!this.media_||i.uri!==this.media_.uri;if(this.master.playlists[i.uri].endList)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=i,void(t&&(this.trigger("mediachanging"),this.trigger("mediachange")));if(t){if(this.state="SWITCHING_MEDIA",this.request){if(Ro(this.master.uri,i.uri)===this.request.url)return;this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.request=this.hls_.xhr({uri:Ro(this.master.uri,i.uri),withCredentials:this.withCredentials},function(t,e){if(r.request){if(t)return r.playlistRequestError(r.request,i.uri,n);r.haveMetadata(e,i.uri),"HAVE_MASTER"===n?r.trigger("loadedmetadata"):r.trigger("mediachange")}})}},s.prototype.pause=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")},s.prototype.load=function(t){var e=this;g.clearTimeout(this.mediaUpdateTimeout);var i=this.media();if(t){var r=i?i.targetDuration/2*1e3:5e3;this.mediaUpdateTimeout=g.setTimeout(function(){return e.load()},r)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()},s.prototype.start=function(){var r=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"HLS playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");var i=new js;return i.push(e.responseText),i.end(),r.state="HAVE_MASTER",i.manifest.uri=r.srcUrl,i.manifest.playlists?(r.master=i.manifest,jo(r.master),Fo(r.master),r.trigger("loadedplaylist"),void(r.request||r.media(i.manifest.playlists[0]))):(r.master={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:g.location.href,playlists:[{uri:r.srcUrl,id:0}]},r.master.playlists[r.srcUrl]=r.master.playlists[0],r.master.playlists[0].resolvedUri=r.srcUrl,r.master.playlists[0].attributes=r.master.playlists[0].attributes||{},r.haveMetadata(e,r.srcUrl),r.trigger("loadedmetadata"))}})},s}(As.EventTarget),qo=As.createTimeRange,Wo=function(t,e,i){var r,n;return"undefined"==typeof e&&(e=t.mediaSequence+t.segments.length),e<t.mediaSequence?0:(r=function(t,e){var i=0,r=e-t.mediaSequence,n=t.segments[r];if(n){if("undefined"!=typeof n.start)return{result:n.start,precise:!0};if("undefined"!=typeof n.end)return{result:n.end-n.duration,precise:!0}}for(;r--;){if("undefined"!=typeof(n=t.segments[r]).end)return{result:i+n.end,precise:!0};if(i+=n.duration,"undefined"!=typeof n.start)return{result:i+n.start,precise:!0}}return{result:i,precise:!1}}(t,e)).precise?r.result:(n=function(t,e){for(var i=0,r=void 0,n=e-t.mediaSequence;n<t.segments.length;n++){if("undefined"!=typeof(r=t.segments[n]).start)return{result:r.start-i,precise:!0};if(i+=r.duration,"undefined"!=typeof r.end)return{result:r.end-i,precise:!0}}return{result:-1,precise:!1}}(t,e)).precise?n.result:r.result+i},zo=function(t,e,i){if(!t)return 0;if("number"!=typeof i&&(i=0),"undefined"==typeof e){if(t.totalDuration)return t.totalDuration;if(!t.endList)return g.Infinity}return Wo(t,e,i)},Go=function(t,e,i){var r=0;if(i<e){var n=[i,e];e=n[0],i=n[1]}if(e<0){for(var s=e;s<Math.min(0,i);s++)r+=t.targetDuration;e=0}for(var a=e;a<i;a++)r+=t.segments[a].duration;return r},Xo=function(t){if(!t.segments.length)return 0;for(var e=t.segments.length-1,i=t.segments[e].duration||t.targetDuration,r=i+2*t.targetDuration;e--&&!(r<=(i+=t.segments[e].duration)););return Math.max(0,e)},Yo=function(t,e,i){if(!t||!t.segments)return null;if(t.endList)return zo(t);if(null===e)return null;e=e||0;var r=i?Xo(t):t.segments.length;return Wo(t,t.mediaSequence+r,e)},$o=function(t){return t-Math.floor(t)==0},Ko=function(t,e){if($o(e))return e+.1*t;for(var i=e.toString().split(".")[1].length,r=1;r<=i;r++){var n=Math.pow(10,r),s=e*n;if($o(s)||r===i)return(s+t)/n}},Qo=Ko.bind(null,1),Jo=Ko.bind(null,-1),Zo=function(t){return t.excludeUntil&&t.excludeUntil>Date.now()},tu=function(t){return t.excludeUntil&&t.excludeUntil===1/0},eu=function(t){var e=Zo(t);return!t.disabled&&!e},iu=function(t,e){return e.attributes&&e.attributes[t]},ru=function(t,e){if(1===t.playlists.length)return!0;var i=e.attributes.BANDWIDTH||Number.MAX_VALUE;return 0===t.playlists.filter(function(t){return!!eu(t)&&(t.attributes.BANDWIDTH||0)<i}).length},nu={duration:zo,seekable:function(t,e){var i=e||0,r=Yo(t,e,!0);return null===r?qo():qo(i,r)},safeLiveIndex:Xo,getMediaInfoForTime:function(t,e,i,r){var n=void 0,s=void 0,a=t.segments.length,o=e-r;if(o<0){if(0<i)for(n=i-1;0<=n;n--)if(s=t.segments[n],0<(o+=Jo(s.duration)))return{mediaIndex:n,startTime:r-Go(t,i,n)};return{mediaIndex:0,startTime:e}}if(i<0){for(n=i;n<0;n++)if((o-=t.targetDuration)<0)return{mediaIndex:0,startTime:e};i=0}for(n=i;n<a;n++)if(s=t.segments[n],(o-=Qo(s.duration))<0)return{mediaIndex:n,startTime:r+Go(t,i,n)};return{mediaIndex:a-1,startTime:e}},isEnabled:eu,isDisabled:function(t){return t.disabled},isBlacklisted:Zo,isIncompatible:tu,playlistEnd:Yo,isAes:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].key)return!0;return!1},isFmp4:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].map)return!0;return!1},hasAttribute:iu,estimateSegmentRequestTime:function(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;return iu("BANDWIDTH",i)?(t*i.attributes.BANDWIDTH-8*r)/e:NaN},isLowestEnabledRendition:ru},su=As.xhr,au=As.mergeOptions,ou=function(){return function t(e,r){e=au({timeout:45e3},e);var i=t.beforeRequest||As.Hls.xhr.beforeRequest;if(i&&"function"==typeof i){var n=i(e);n&&(e=n)}var s=su(e,function(t,e){var i=s.response;!t&&i&&(s.responseTime=Date.now(),s.roundTripTime=s.responseTime-s.requestTime,s.bytesReceived=i.byteLength||i.length,s.bandwidth||(s.bandwidth=Math.floor(s.bytesReceived/s.roundTripTime*8*1e3))),e.headers&&(s.responseHeaders=e.headers),t&&"ETIMEDOUT"===t.code&&(s.timedout=!0),t||s.aborted||200===e.statusCode||206===e.statusCode||0===e.statusCode||(t=new Error("XHR Failed with a response of: "+(s&&(i||s.responseText)))),r(t,s)}),a=s.abort;return s.abort=function(){return s.aborted=!0,a.apply(s,arguments)},s.uri=e.uri,s.requestTime=Date.now(),s}},uu=function(t,e){var i=t.toString(16);return"00".substring(0,2-i.length)+i+(e%2?" ":"")},lu=function(t){return 32<=t&&t<126?String.fromCharCode(t):"."},cu=function(i){var r={};return Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r},hu=function(t){var e=t.byterange||{length:1/0,offset:0};return[e.length,e.offset,t.resolvedUri].join(",")},du=function(t){for(var e=Array.prototype.slice.call(t),i="",r=0;r<e.length/16;r++)i+=e.slice(16*r,16*r+16).map(uu).join("")+" "+e.slice(16*r,16*r+16).map(lu).join("")+"\n";return i},pu=Object.freeze({createTransferableMessage:cu,initSegmentId:hu,hexDump:du,tagDump:function(t){var e=t.bytes;return du(e)},textRanges:function(t){var e,i,r="",n=void 0;for(n=0;n<t.length;n++)r+=(i=n,(e=t).start(i)+"-"+e.end(i)+" ");return r}}),fu=1/30,mu=function(t,e){var i=[],r=void 0;if(t&&t.length)for(r=0;r<t.length;r++)e(t.start(r),t.end(r))&&i.push([t.start(r),t.end(r)]);return As.createTimeRanges(i)},gu=function(t,i){return mu(t,function(t,e){return t-fu<=i&&i<=e+fu})},yu=function(t,e){return mu(t,function(t){return e<=t-fu})},vu=function(t){var e=[];if(!t||!t.length)return"";for(var i=0;i<t.length;i++)e.push(t.start(i)+" => "+t.end(i));return e.join(", ")},_u=function(t){for(var e=[],i=0;i<t.length;i++)e.push({start:t.start(i),end:t.end(i)});return e},bu=function(t,e,i){var r=void 0,n=void 0;if(i&&i.cues)for(r=i.cues.length;r--;)(n=i.cues[r]).startTime<=e&&n.endTime>=t&&i.removeCue(n)},Tu=function(t){return isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t},Su=function(t,e,i){var n=g.WebKitDataCue||g.VTTCue;if(e&&e.forEach(function(t){var e=t.stream;this.inbandTextTracks_[e].addCue(new n(t.startTime+this.timestampOffset,t.endTime+this.timestampOffset,t.text))},t),i){var s=Tu(t.mediaSource_.duration);if(i.forEach(function(t){var r=t.cueTime+this.timestampOffset;t.frames.forEach(function(t){var e,i=new n(r,r,t.value||t.url||t.data||"");i.frame=t,i.value=t,e=i,Object.defineProperties(e.frame,{id:{get:function(){return As.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),e.value.key}},value:{get:function(){return As.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),e.value.data}},privateData:{get:function(){return As.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),e.value.data}}}),this.metadataTrack_.addCue(i)},this)},t),t.metadataTrack_&&t.metadataTrack_.cues&&t.metadataTrack_.cues.length){for(var r=t.metadataTrack_.cues,a=[],o=0;o<r.length;o++)r[o]&&a.push(r[o]);var u=a.reduce(function(t,e){var i=t[e.startTime]||[];return i.push(e),t[e.startTime]=i,t},{}),l=Object.keys(u).sort(function(t,e){return Number(t)-Number(e)});l.forEach(function(t,e){var i=u[t],r=Number(l[e+1])||s;i.forEach(function(t){t.endTime=r})})}}},ku="undefined"!=typeof window?window:{},Cu="undefined"==typeof Symbol?"__target":Symbol(),Eu="application/javascript",wu=ku.BlobBuilder||ku.WebKitBlobBuilder||ku.MozBlobBuilder||ku.MSBlobBuilder,Au=ku.URL||ku.webkitURL||Au&&Au.msURL,Lu=ku.Worker;function Pu(n,s){return function(t){var e=this;if(!s)return new Lu(n);if(Lu&&!t){var i=Du(s.toString().replace(/^function.+?{/,"").slice(0,-1));return this[Cu]=new Lu(i),function(t,e){if(!t||!e)return;var i=t.terminate;t.objURL=e,t.terminate=function(){t.objURL&&Au.revokeObjectURL(t.objURL),i.call(t)}}(this[Cu],i),this[Cu]}var r={postMessage:function(t){e.onmessage&&setTimeout(function(){e.onmessage({data:t,target:r})})}};s.call(r),this.postMessage=function(t){setTimeout(function(){r.onmessage({data:t,target:e})})},this.isThisThread=!0}}if(Lu){var Ou,xu=Du("self.onmessage = function () {}"),Iu=new Uint8Array(1);try{(Ou=new Lu(xu)).postMessage(Iu,[Iu.buffer])}catch(t){Lu=null}finally{Au.revokeObjectURL(xu),Ou&&Ou.terminate()}}function Du(e){try{return Au.createObjectURL(new Blob([e],{type:Eu}))}catch(t){var i=new wu;return i.append(e),Au.createObjectURL(i.getBlob(type))}}var Ru=new Pu("./transmuxer-worker.worker.js",function(ie,t){var re=this;!function(){var o,e,i,n,s,r,t,a,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,C,E,w,A,L,P,O,x,I,D,R,M,U,N,B,j,F="undefined"!=typeof ie?ie:"undefined"!=typeof global?global:"undefined"!=typeof re?re:{},H="undefined"!=typeof ie?ie:"undefined"!=typeof F?F:"undefined"!=typeof re?re:{},V=Math.pow(2,32)-1;!function(){var t;if(T={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in T)T.hasOwnProperty(t)&&(T[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);S=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),C=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),k=new Uint8Array([0,0,0,1]),E=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),w=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),A={video:E,audio:w},O=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0]),x=new Uint8Array([0,0,0,0,0,0,0,0]),I=x,D=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),R=x,L=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),o=function(t){var e,i,r=[],n=0;for(e=1;e<arguments.length;e++)r.push(arguments[e]);for(e=r.length;e--;)n+=r[e].byteLength;for(i=new Uint8Array(n+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,n=8;e<r.length;e++)i.set(r[e],n),n+=r[e].byteLength;return i},e=function(){return o(T.dinf,o(T.dref,O))},i=function(t){return o(T.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},f=function(t){return o(T.hdlr,A[t])},p=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0]);return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),o(T.mdhd,e)},d=function(t){return o(T.mdia,p(t),f(t.type),r(t))},s=function(t){return o(T.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},r=function(t){return o(T.minf,"video"===t.type?o(T.vmhd,L):o(T.smhd,P),e(),g(t))},t=function(t,e){for(var i=[],r=e.length;r--;)i[r]=v(e[r]);return o.apply(null,[T.moof,s(t)].concat(i))},a=function(t){for(var e=t.length,i=[];e--;)i[e]=c(t[e]);return o.apply(null,[T.moov,l(4294967295)].concat(i).concat(u(t)))},u=function(t){for(var e=t.length,i=[];e--;)i[e]=_(t[e]);return o.apply(null,[T.mvex].concat(i))},l=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return o(T.mvhd,e)},m=function(t){var e,i,r=t.samples||[],n=new Uint8Array(4+r.length);for(i=0;i<r.length;i++)e=r[i].flags,n[i+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy;return o(T.sdtp,n)},g=function(t){return o(T.stbl,y(t),o(T.stts,R),o(T.stsc,I),o(T.stsz,D),o(T.stco,x))},y=function(t){return o(T.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===t.type?M(t):U(t))},M=function(t){var e,i=t.sps||[],r=t.pps||[],n=[],s=[];for(e=0;e<i.length;e++)n.push((65280&i[e].byteLength)>>>8),n.push(255&i[e].byteLength),n=n.concat(Array.prototype.slice.call(i[e]));for(e=0;e<r.length;e++)s.push((65280&r[e].byteLength)>>>8),s.push(255&r[e].byteLength),s=s.concat(Array.prototype.slice.call(r[e]));return o(T.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o(T.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([i.length]).concat(n).concat([r.length]).concat(s))),o(T.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},U=function(t){return o(T.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),i(t))},h=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0]);return o(T.tkhd,e)},v=function(t){var e,i,r,n,s,a;return e=o(T.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(t.baseMediaDecodeTime/(V+1)),a=Math.floor(t.baseMediaDecodeTime%(V+1)),i=o(T.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,a>>>24&255,a>>>16&255,a>>>8&255,255&a])),92,"audio"===t.type?(r=b(t,92),o(T.traf,e,i,r)):(n=m(t),r=b(t,n.length+92),o(T.traf,e,i,r,n))},c=function(t){return t.duration=t.duration||4294967295,o(T.trak,h(t),d(t))},_=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==t.type&&(e[e.length-1]=0),o(T.trex,e)},j=function(t,e){var i=0,r=0,n=0,s=0;return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(r=2),void 0!==t[0].flags&&(n=4),void 0!==t[0].compositionTimeOffset&&(s=8)),[0,0,i|r|n|s,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},B=function(t,e){var i,r,n,s;for(e+=20+16*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size,n.flags.isLeading<<2|n.flags.dependsOn,n.flags.isDependedOn<<6|n.flags.hasRedundancy<<4|n.flags.paddingValue<<1|n.flags.isNonSyncSample,61440&n.flags.degradationPriority,15&n.flags.degradationPriority,(4278190080&n.compositionTimeOffset)>>>24,(16711680&n.compositionTimeOffset)>>>16,(65280&n.compositionTimeOffset)>>>8,255&n.compositionTimeOffset]);return o(T.trun,new Uint8Array(i))},N=function(t,e){var i,r,n,s;for(e+=20+8*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size]);return o(T.trun,new Uint8Array(i))},b=function(t,e){return"audio"===t.type?N(t,e):B(t,e)};var q={ftyp:n=function(){return o(T.ftyp,S,k,S,C)},mdat:function(t){return o(T.mdat,t)},moof:t,moov:a,initSegment:function(t){var e,i=n(),r=a(t);return(e=new Uint8Array(i.byteLength+r.byteLength)).set(i),e.set(r,i.byteLength),e}},W=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};W.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},W.prototype.push=function(t){this.trigger("data",t)},W.prototype.flush=function(t){this.trigger("done",t)};var z=W,G=function t(){t.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new Q(0,0),new Q(0,1),new Q(1,0),new Q(1,1)],this.reset(),this.ccStreams_.forEach(function(t){t.on("data",this.trigger.bind(this,"data")),t.on("done",this.trigger.bind(this,"done"))},this)};(G.prototype=new z).push=function(t){var e,i,r;if("sei_rbsp"===t.nalUnitType&&(4===(e=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},r=0,n=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)r+=255,e++;for(r+=t[e++];255===t[e];)n+=255,e++;if(n+=t[e++],!i.payload&&4===r){i.payloadType=r,i.payloadSize=n,i.payload=t.subarray(e,e+n);break}e+=n,n=r=0}return i}(t.escapedRBSP)).payloadType&&(i=181!==(r=e).payload[0]?null:49!=(r.payload[1]<<8|r.payload[2])?null:"GA94"!==String.fromCharCode(r.payload[3],r.payload[4],r.payload[5],r.payload[6])?null:3!==r.payload[7]?null:r.payload.subarray(8,r.payload.length-1))))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));this.captionPackets_=this.captionPackets_.concat(function(t,e){var i,r,n,s,a=[];if(!(64&e[0]))return a;for(r=31&e[0],i=0;i<r;i++)s={type:3&e[2+(n=3*i)],pts:t},4&e[n+2]&&(s.ccData=e[n+3]<<8|e[n+4],a.push(s));return a}(t.pts,i)),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},G.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(t,e){t.presortIndex=e}),this.captionPackets_.sort(function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts}),this.captionPackets_.forEach(function(t){t.type<2&&this.dispatchCea608Packet(t)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(t){t.flush()},this)):this.ccStreams_.forEach(function(t){t.flush()},this)},G.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(t){t.reset()})},G.prototype.dispatchCea608Packet=function(t){this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},G.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},G.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)};var X={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Y=function(t){return null===t?"":(t=X[t]||t,String.fromCharCode(t))},$=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],K=function(){for(var t=[],e=15;e--;)t.push("");return t},Q=function t(e,i){t.prototype.init.call(this),this.field_=e||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,r,n,s;if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),r=e>>>8,n=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(e===this.END_OF_CAPTION_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts;else if(e===this.ROLL_UP_2_ROWS_)this.topRow_=13,this.mode_="rollUp";else if(e===this.ROLL_UP_3_ROWS_)this.topRow_=12,this.mode_="rollUp";else if(e===this.ROLL_UP_4_ROWS_)this.topRow_=11,this.mode_="rollUp";else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts;else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[14]=this.nonDisplayed_[14].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1);else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=K();else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=K();else if(e===this.RESUME_DIRECT_CAPTIONING_)this.mode_="paintOn";else if(this.isSpecialCharacter(r,n))s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isExtCharacter(r,n))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1),s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isMidRowCode(r,n))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&n)&&this.addFormatting(t.pts,["i"]),1==(1&n)&&this.addFormatting(t.pts,["u"]);else if(this.isOffsetControlCode(r,n))this.column_+=3&n;else if(this.isPAC(r,n)){var a=$.indexOf(7968&e);a!==this.row_&&(this.clearFormatting(t.pts),this.row_=a),1&n&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)&&(this.column_=4*((14&e)>>1)),this.isColorPAC(n)&&14==(14&n)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(r)&&(0===n&&(n=null),s=Y(r),s+=Y(n),this[this.mode_](t.pts,s),this.column_+=s.length)}else this.lastControlCode_=null}};Q.prototype=new z,Q.prototype.flushDisplayed=function(t){var e=this.displayed_.map(function(t){return t.trim()}).join("\n").replace(/^\n+|\n+$/g,"");e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e,stream:this.name_})},Q.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=K(),this.nonDisplayed_=K(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.formatting_=[]},Q.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Q.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&48<=e&&e<=63},Q.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&32<=e&&e<=63},Q.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&32<=e&&e<=47},Q.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&33<=e&&e<=35},Q.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&64<=e&&e<=127},Q.prototype.isColorPAC=function(t){return 64<=t&&t<=79||96<=t&&t<=127},Q.prototype.isNormalChar=function(t){return 32<=t&&t<=127},Q.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e);var i=e.reduce(function(t,e){return t+"<"+e+">"},"");this[this.mode_](t,i)},Q.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce(function(t,e){return t+"</"+e+">"},"");this.formatting_=[],this[this.mode_](t,e)}},Q.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_];i+=e,this.nonDisplayed_[this.row_]=i},Q.prototype.rollUp=function(t,e){var i=this.displayed_[14];i+=e,this.displayed_[14]=i},Q.prototype.shiftRowsUp_=function(){var t;for(t=0;t<this.topRow_;t++)this.displayed_[t]="";for(t=this.topRow_;t<14;t++)this.displayed_[t]=this.displayed_[t+1];this.displayed_[14]=""},Q.prototype.paintOn=function(){};var J={CaptionStream:G,Cea608Stream:Q},Z={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},tt=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},et=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=tt(t.dts,r),t.pts=tt(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};et.prototype=new z;var it,rt=et,nt=function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n},st=function(t,e,i){return decodeURIComponent(nt(t,e,i))},at=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ot={TXXX:function(t){var e;if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.value=st(t.data,e+1,t.data.length).replace(/\0*$/,"");break}t.data=t.value}},WXXX:function(t){var e;if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.url=st(t.data,e+1,t.data.length);break}},PRIV:function(t){var e,i;for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=(i=t.data,unescape(nt(i,0,e)));break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};(it=function(t){var e,u={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},l=0,c=[],h=0;if(it.prototype.init.call(this),this.dispatchType=Z.METADATA_STREAM_TYPE.toString(16),u.descriptor)for(e=0;e<u.descriptor.length;e++)this.dispatchType+=("00"+u.descriptor[e].toString(16)).slice(-2);this.push=function(t){var e,i,r,n,s;if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(h=0,c.length=0),0===c.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))u.debug;else if(c.push(t),h+=t.data.byteLength,1===c.length&&(l=at(t.data.subarray(6,10)),l+=10),!(h<l)){for(e={data:new Uint8Array(l),frames:[],pts:c[0].pts,dts:c[0].dts},s=0;s<l;)e.data.set(c[0].data.subarray(0,l-s),s),s+=c[0].data.byteLength,h-=c[0].data.byteLength,c.shift();i=10,64&e.data[5]&&(i+=4,i+=at(e.data.subarray(10,14)),l-=at(e.data.subarray(16,20)));do{if((r=at(e.data.subarray(i+4,i+8)))<1)return;if((n={id:String.fromCharCode(e.data[i],e.data[i+1],e.data[i+2],e.data[i+3]),data:e.data.subarray(i+10,i+r+10)}).key=n.id,ot[n.id]&&(ot[n.id](n),"com.apple.streaming.transportStreamTimestamp"===n.owner)){var a=n.data,o=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2;o*=4,o+=3&a[7],n.timeStamp=o,void 0===e.pts&&void 0===e.dts&&(e.pts=n.timeStamp,e.dts=n.timeStamp),this.trigger("timestamp",n)}e.frames.push(n),i+=10,i+=r}while(i<l);this.trigger("data",e)}}}).prototype=new z;var ut,lt,ct,ht=it,dt=rt;(ut=function(){var n=new Uint8Array(188),s=0;ut.prototype.init.call(this),this.push=function(t){var e,i=0,r=188;for(s?((e=new Uint8Array(t.byteLength+s)).set(n.subarray(0,s)),e.set(t,s),s=0):e=t;r<e.byteLength;)71!==e[i]||71!==e[r]?(i++,r++):(this.trigger("data",e.subarray(i,r)),i+=188,r+=188);i<e.byteLength&&(n.set(e.subarray(i),0),s=e.byteLength-i)},this.flush=function(){188===s&&71===n[0]&&(this.trigger("data",n),s=0),this.trigger("done")}}).prototype=new z,(lt=function(){var r,n,s,a;lt.prototype.init.call(this),(a=this).packetsWaitingForPmt=[],this.programMapTable=void 0,r=function(t,e){var i=0;e.payloadUnitStartIndicator&&(i+=t[i]+1),"pat"===e.type?n(t.subarray(i),e):s(t.subarray(i),e)},n=function(t,e){e.section_number=t[7],e.last_section_number=t[8],a.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=a.pmtPid},s=function(t,e){var i,r;if(1&t[5]){for(a.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,r=12+((15&t[10])<<8|t[11]);r<i;){var n=t[r],s=(31&t[r+1])<<8|t[r+2];n===Z.H264_STREAM_TYPE&&null===a.programMapTable.video?a.programMapTable.video=s:n===Z.ADTS_STREAM_TYPE&&null===a.programMapTable.audio?a.programMapTable.audio=s:n===Z.METADATA_STREAM_TYPE&&(a.programMapTable["timed-metadata"][s]=n),r+=5+((15&t[r+3])<<8|t[r+4])}e.programMapTable=a.programMapTable}},this.push=function(t){var e={},i=4;if(e.payloadUnitStartIndicator=!!(64&t[1]),e.pid=31&t[1],e.pid<<=8,e.pid|=t[2],1<(48&t[3])>>>4&&(i+=t[i]+1),0===e.pid)e.type="pat",r(t.subarray(i),e),this.trigger("data",e);else if(e.pid===this.pmtPid)for(e.type="pmt",r(t.subarray(i),e),this.trigger("data",e);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t,i,e]):this.processPes_(t,i,e)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=Z.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Z.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new z,lt.STREAM_TYPES={h264:27,adts:15},(ct=function(){var d=this,r={data:[],size:0},n={data:[],size:0},s={data:[],size:0},a=function(t,e,i){var r,n,s=new Uint8Array(t.size),a={type:e},o=0,u=0;if(t.data.length&&!(t.size<9)){for(a.trackId=t.data[0].pid,o=0;o<t.data.length;o++)n=t.data[o],s.set(n.data,u),u+=n.data.byteLength;var l,c,h;l=s,(c=a).packetLength=6+(l[4]<<8|l[5]),c.dataAlignmentIndicator=0!=(4&l[6]),192&(h=l[7])&&(c.pts=(14&l[9])<<27|(255&l[10])<<20|(254&l[11])<<12|(255&l[12])<<5|(254&l[13])>>>3,c.pts*=4,c.pts+=(6&l[13])>>>1,c.dts=c.pts,64&h&&(c.dts=(14&l[14])<<27|(255&l[15])<<20|(254&l[16])<<12|(255&l[17])<<5|(254&l[18])>>>3,c.dts*=4,c.dts+=(6&l[18])>>>1)),c.data=l.subarray(9+l[8]),r="video"===e||a.packetLength<=t.size,(i||r)&&(t.size=0,t.data.length=0),r&&d.trigger("data",a)}};ct.prototype.init.call(this),this.push=function(i){({pat:function(){},pes:function(){var t,e;switch(i.streamType){case Z.H264_STREAM_TYPE:case Z.H264_STREAM_TYPE:t=r,e="video";break;case Z.ADTS_STREAM_TYPE:t=n,e="audio";break;case Z.METADATA_STREAM_TYPE:t=s,e="timed-metadata";break;default:return}i.payloadUnitStartIndicator&&a(t,e,!0),t.data.push(i),t.size+=i.data.byteLength},pmt:function(){var t={type:"metadata",tracks:[]},e=i.programMapTable;null!==e.video&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"}),null!==e.audio&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"}),d.trigger("data",t)}})[i.type]()},this.flush=function(){a(r,"video"),a(n,"audio"),a(s,"timed-metadata"),this.trigger("done")}}).prototype=new z;var pt={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:ut,TransportParseStream:lt,ElementaryStream:ct,TimestampRolloverStream:dt,CaptionStream:J.CaptionStream,Cea608Stream:J.Cea608Stream,MetadataStream:ht};for(var ft in Z)Z.hasOwnProperty(ft)&&(pt[ft]=Z[ft]);var mt,gt=pt,yt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(mt=function(){var l;mt.prototype.init.call(this),this.push=function(t){var e,i,r,n,s,a,o=0,u=0;if("audio"===t.type)for(l?(n=l,(l=new Uint8Array(n.byteLength+t.data.byteLength)).set(n),l.set(t.data,n.byteLength)):l=t.data;o+5<l.length;)if(255===l[o]&&240==(246&l[o+1])){if(i=2*(1&~l[o+1]),e=(3&l[o+3])<<11|l[o+4]<<3|(224&l[o+5])>>5,a=9e4*(s=1024*(1+(3&l[o+6])))/yt[(60&l[o+2])>>>2],r=o+e,l.byteLength<r)return;if(this.trigger("data",{pts:t.pts+u*a,dts:t.dts+u*a,sampleCount:s,audioobjecttype:1+(l[o+2]>>>6&3),channelcount:(1&l[o+2])<<2|(192&l[o+3])>>>6,samplerate:yt[(60&l[o+2])>>>2],samplingfrequencyindex:(60&l[o+2])>>>2,samplesize:16,data:l.subarray(o+7+i,r)}),l.byteLength===r)return void(l=void 0);u++,l=l.subarray(r)}else o++},this.flush=function(){this.trigger("done")}}).prototype=new z;var vt,_t,bt,Tt=mt,St=function(r){var n=r.byteLength,s=0,a=0;this.length=function(){return 8*n},this.bitsAvailable=function(){return 8*n+a},this.loadWord=function(){var t=r.byteLength-n,e=new Uint8Array(4),i=Math.min(4,n);if(0===i)throw new Error("no bytes available");e.set(r.subarray(t,t+i)),s=new DataView(e.buffer).getUint32(0),a=8*i,n-=i},this.skipBits=function(t){var e;t<a||(t-=a,t-=8*(e=Math.floor(t/8)),n-=e,this.loadWord()),s<<=t,a-=t},this.readBits=function(t){var e=Math.min(a,t),i=s>>>32-e;return 0<(a-=e)?s<<=e:0<n&&this.loadWord(),0<(e=t-e)?i<<e|this.readBits(e):i},this.skipLeadingZeros=function(){var t;for(t=0;t<a;++t)if(0!=(s&2147483648>>>t))return s<<=t,a-=t,t;return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros();return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb();return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(_t=function(){var i,r,n=0;_t.prototype.init.call(this),this.push=function(t){var e;for(r?((e=new Uint8Array(r.byteLength+t.data.byteLength)).set(r),e.set(t.data,r.byteLength),r=e):r=t.data;n<r.byteLength-3;n++)if(1===r[n+2]){i=n+5;break}for(;i<r.byteLength;)switch(r[i]){case 0:if(0!==r[i-1]){i+=2;break}if(0!==r[i-2]){i++;break}for(n+3!==i-2&&this.trigger("data",r.subarray(n+3,i-2));1!==r[++i]&&i<r.length;);n=i-2,i+=3;break;case 1:if(0!==r[i-1]||0!==r[i-2]){i+=3;break}this.trigger("data",r.subarray(n+3,i-2)),n=i-2,i+=3;break;default:i+=3}r=r.subarray(n),i-=n,n=0},this.flush=function(){r&&3<r.byteLength&&this.trigger("data",r.subarray(n+3)),r=null,n=0,this.trigger("done")}}).prototype=new z,bt={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(vt=function(){var i,r,n,s,a,o,_,e=new _t;vt.prototype.init.call(this),(i=this).push=function(t){"video"===t.type&&(r=t.trackId,n=t.pts,s=t.dts,e.push(t))},e.on("data",function(t){var e={trackId:r,pts:n,dts:s,data:t};switch(31&t[0]){case 5:e.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:e.nalUnitType="sei_rbsp",e.escapedRBSP=a(t.subarray(1));break;case 7:e.nalUnitType="seq_parameter_set_rbsp",e.escapedRBSP=a(t.subarray(1)),e.config=o(e.escapedRBSP);break;case 8:e.nalUnitType="pic_parameter_set_rbsp";break;case 9:e.nalUnitType="access_unit_delimiter_rbsp"}i.trigger("data",e)}),e.on("done",function(){i.trigger("done")}),this.flush=function(){e.flush()},_=function(t,e){var i,r=8,n=8;for(i=0;i<t;i++)0!==n&&(n=(r+e.readExpGolomb()+256)%256),r=0===n?r:n},a=function(t){for(var e,i,r=t.byteLength,n=[],s=1;s<r-2;)0===t[s]&&0===t[s+1]&&3===t[s+2]?(n.push(s+2),s+=2):s++;if(0===n.length)return t;e=r-n.length,i=new Uint8Array(e);var a=0;for(s=0;s<e;a++,s++)a===n[0]&&(a++,n.shift()),i[s]=t[a];return i},o=function(t){var e,i,r,n,s,a,o,u,l,c,h,d,p,f=0,m=0,g=0,y=0,v=1;if(i=(e=new St(t)).readUnsignedByte(),n=e.readUnsignedByte(),r=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),bt[i]&&(3===(s=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(h=3!==s?8:12,p=0;p<h;p++)e.readBoolean()&&_(p<6?16:64,e);if(e.skipUnsignedExpGolomb(),0===(a=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb();else if(1===a)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),o=e.readUnsignedExpGolomb(),p=0;p<o;p++)e.skipExpGolomb();if(e.skipUnsignedExpGolomb(),e.skipBits(1),u=e.readUnsignedExpGolomb(),l=e.readUnsignedExpGolomb(),0===(c=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(f=e.readUnsignedExpGolomb(),m=e.readUnsignedExpGolomb(),g=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:d=[1,1];break;case 2:d=[12,11];break;case 3:d=[10,11];break;case 4:d=[16,11];break;case 5:d=[40,33];break;case 6:d=[24,11];break;case 7:d=[20,11];break;case 8:d=[32,11];break;case 9:d=[80,33];break;case 10:d=[18,11];break;case 11:d=[15,11];break;case 12:d=[64,33];break;case 13:d=[160,99];break;case 14:d=[4,3];break;case 15:d=[3,2];break;case 16:d=[2,1];break;case 255:d=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}d&&(v=d[0]/d[1])}return{profileIdc:i,levelIdc:r,profileCompatibility:n,width:Math.ceil((16*(u+1)-2*f-2*m)*v),height:(2-c)*(l+1)*16-2*g-2*y}}}).prototype=new z;var kt,Ct={H264Stream:vt,NalByteStream:_t};(kt=function(){var o=new Uint8Array,u=0;kt.prototype.init.call(this),this.setTimestamp=function(t){u=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},this.push=function(t){var e,i,r,n,s=0,a=0;for(o.length?(n=o.length,(o=new Uint8Array(t.byteLength+n)).set(o.subarray(0,n)),o.set(t,n)):o=t;3<=o.length-a;)if(o[a]!=="I".charCodeAt(0)||o[a+1]!=="D".charCodeAt(0)||o[a+2]!=="3".charCodeAt(0))if(!0&o[a]&&240==(240&o[a+1])){if(o.length-a<7)break;if((s=this.parseAdtsSize(o,a))>o.length)break;r={type:"audio",data:o.subarray(a,a+s),pts:u,dts:u},this.trigger("data",r),a+=s}else a++;else{if(o.length-a<10)break;if((s=this.parseId3TagSize(o,a))>o.length)break;i={type:"timed-metadata",data:o.subarray(a,a+s)},this.trigger("data",i),a+=s}e=o.length-a,o=0<e?o.subarray(a):new Uint8Array}}).prototype=new z;var Et,wt,At,Lt,Pt,Ot,xt,It,Dt,Rt,Mt,Ut,Nt,Bt,jt,Ft=kt,Ht=[33,16,5,32,164,27],Vt=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],qt=function(t){for(var e=[];t--;)e.push(0);return e},Wt={96000:[Ht,[227,64],qt(154),[56]],88200:[Ht,[231],qt(170),[56]],64000:[Ht,[248,192],qt(240),[56]],48000:[Ht,[255,192],qt(268),[55,148,128],qt(54),[112]],44100:[Ht,[255,192],qt(268),[55,163,128],qt(84),[112]],32000:[Ht,[255,192],qt(268),[55,234],qt(226),[112]],24000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,112],qt(126),[224]],16000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,255],qt(269),[223,108],qt(195),[1,192]],12000:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,253,128],qt(259),[56]],11025:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,255,192],qt(268),[55,175,128],qt(108),[112]],8000:[Vt,qt(268),[3,121,16],qt(47),[7]]},zt=(Et=Wt,Object.keys(Et).reduce(function(t,e){return t[e]=new Uint8Array(Et[e].reduce(function(t,e){return t.concat(e)},[])),t},{})),Gt=(wt=function(t){return 9e4*t},At=function(t,e){return t*e},Lt=function(t){return t/9e4},Pt=function(t,e){return t/e},function(t,e){return wt(Pt(t,e))}),Xt=function(t,e){return At(Lt(t),e)},Yt=Ct.H264Stream,$t=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],Kt=["width","height","profileIdc","levelIdc","profileCompatibility"];Rt=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)},Bt=function(t,e){var i;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},jt=function(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e].data.byteLength;return i},(xt=function(n,s){var a=[],o=0,e=0,l=0,c=1/0;s=s||{},xt.prototype.init.call(this),this.push=function(e){Mt(n,e),n&&$t.forEach(function(t){n[t]=e[t]}),a.push(e)},this.setEarliestDts=function(t){e=t-n.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(t){c=t},this.setAudioAppendStart=function(t){l=t},this.flush=function(){var t,e,i,r;0!==a.length&&(t=this.trimAdtsFramesByEarliestDts_(a),n.baseMediaDecodeTime=Nt(n,s.keepOriginalTimestamps),this.prefixWithSilence_(n,t),n.samples=this.generateSampleTable_(t),i=q.mdat(this.concatenateFrameData_(t)),a=[],e=q.moof(o,[n]),r=new Uint8Array(e.byteLength+i.byteLength),o++,r.set(e),r.set(i,e.byteLength),Ut(n),this.trigger("data",{track:n,boxes:r})),this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(t,e){var i,r,n,s,a=0,o=0,u=0;if(e.length&&(i=Gt(t.baseMediaDecodeTime,t.samplerate),r=Math.ceil(9e4/(t.samplerate/1024)),l&&c&&(a=i-Math.max(l,c),u=(o=Math.floor(a/r))*r),!(o<1||45e3<u))){for((n=zt[t.samplerate])||(n=e[0].data),s=0;s<o;s++)e.splice(s,0,{data:n});t.baseMediaDecodeTime-=Math.floor(Xt(u,t.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(t){return n.minSegmentDts>=e?t:(n.minSegmentDts=1/0,t.filter(function(t){return t.dts>=e&&(n.minSegmentDts=Math.min(n.minSegmentDts,t.dts),n.minSegmentPts=n.minSegmentDts,!0)}))},this.generateSampleTable_=function(t){var e,i,r=[];for(e=0;e<t.length;e++)i=t[e],r.push({size:i.data.byteLength,duration:1024});return r},this.concatenateFrameData_=function(t){var e,i,r=0,n=new Uint8Array(jt(t));for(e=0;e<t.length;e++)i=t[e],n.set(i.data,r),r+=i.data.byteLength;return n}}).prototype=new z,(Ot=function(o,u){var e,i,l=0,c=[],h=[];u=u||{},Ot.prototype.init.call(this),delete o.minPTS,this.gopCache_=[],this.push=function(t){Mt(o,t),"seq_parameter_set_rbsp"!==t.nalUnitType||e||(e=t.config,o.sps=[t.data],Kt.forEach(function(t){o[t]=e[t]},this)),"pic_parameter_set_rbsp"!==t.nalUnitType||i||(i=t.data,o.pps=[t.data]),c.push(t)},this.flush=function(){for(var t,e,i,r,n,s;c.length&&"access_unit_delimiter_rbsp"!==c[0].nalUnitType;)c.shift();if(0===c.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if(t=this.groupNalsIntoFrames_(c),(i=this.groupFramesIntoGops_(t))[0][0].keyFrame||((e=this.getGopForFusion_(c[0],o))?(i.unshift(e),i.byteLength+=e.byteLength,i.nalCount+=e.nalCount,i.pts=e.pts,i.dts=e.dts,i.duration+=e.duration):i=this.extendFirstKeyFrame_(i)),h.length){var a;if(!(a=u.alignGopsAtEnd?this.alignGopsAtEnd_(i):this.alignGopsAtStart_(i)))return this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");Ut(o),i=a}Mt(o,i),o.samples=this.generateSampleTable_(i),n=q.mdat(this.concatenateNalData_(i)),o.baseMediaDecodeTime=Nt(o,u.keepOriginalTimestamps),this.trigger("processedGopsInfo",i.map(function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}})),this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.trigger("baseMediaDecodeTime",o.baseMediaDecodeTime),this.trigger("timelineStartInfo",o.timelineStartInfo),r=q.moof(l,[o]),s=new Uint8Array(r.byteLength+n.byteLength),l++,s.set(r),s.set(n,r.byteLength),this.trigger("data",{track:o,boxes:s}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){Ut(o),i=e=void 0},this.getGopForFusion_=function(t){var e,i,r,n,s,a=1/0;for(s=0;s<this.gopCache_.length;s++)r=(n=this.gopCache_[s]).gop,o.pps&&Bt(o.pps[0],n.pps[0])&&o.sps&&Bt(o.sps[0],n.sps[0])&&(r.dts<o.timelineStartInfo.dts||-1e4<=(e=t.dts-r.dts-r.duration)&&e<=45e3&&(!i||e<a)&&(i=n,a=e));return i?i.gop:null},this.extendFirstKeyFrame_=function(t){var e;return!t[0][0].keyFrame&&1<t.length&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},this.groupNalsIntoFrames_=function(t){var e,i,r=[],n=[];for(e=r.byteLength=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(r.length&&(r.duration=i.dts-r.dts,n.push(r)),(r=[i]).byteLength=i.data.byteLength,r.pts=i.pts,r.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(r.keyFrame=!0),r.duration=i.dts-r.dts,r.byteLength+=i.data.byteLength,r.push(i));return n.length&&(!r.duration||r.duration<=0)&&(r.duration=n[n.length-1].duration),n.push(r),n},this.groupFramesIntoGops_=function(t){var e,i,r=[],n=[];for(r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(r.length&&(n.push(r),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration),(r=[i]).nalCount=i.length,r.byteLength=i.byteLength,r.pts=i.pts,r.dts=i.dts,r.duration=i.duration):(r.duration+=i.duration,r.nalCount+=i.length,r.byteLength+=i.byteLength,r.push(i));return n.length&&r.duration<=0&&(r.duration=n[n.length-1].duration),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration,n.push(r),n},this.generateSampleTable_=function(t,e){var i,r,n,s,a,o=e||0,u=[];for(i=0;i<t.length;i++)for(s=t[i],r=0;r<s.length;r++)a=s[r],(n={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0}}).dataOffset=o,n.compositionTimeOffset=a.pts-a.dts,n.duration=a.duration,n.size=4*a.length,n.size+=a.byteLength,a.keyFrame&&(n.flags.dependsOn=2),o+=n.size,u.push(n);return u},this.concatenateNalData_=function(t){var e,i,r,n,s,a,o=0,u=t.byteLength,l=t.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer);for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(s=n[i],r=0;r<s.length;r++)a=s[r],h.setUint32(o,a.data.byteLength),o+=4,c.set(a.data,o),o+=a.data.byteLength;return c},this.alignGopsAtStart_=function(t){var e,i,r,n,s,a,o,u;for(s=t.byteLength,a=t.nalCount,o=t.duration,e=i=0;e<h.length&&i<t.length&&(r=h[e],n=t[i],r.pts!==n.pts);)n.pts>r.pts?e++:(i++,s-=n.byteLength,a-=n.nalCount,o-=n.duration);return 0===i?t:i===t.length?null:((u=t.slice(i)).byteLength=s,u.duration=o,u.nalCount=a,u.pts=u[0].pts,u.dts=u[0].dts,u)},this.alignGopsAtEnd_=function(t){var e,i,r,n,s,a,o;for(e=h.length-1,i=t.length-1,s=null,a=!1;0<=e&&0<=i;){if(r=h[e],n=t[i],r.pts===n.pts){a=!0;break}r.pts>n.pts?e--:(e===h.length-1&&(s=i),i--)}if(!a&&null===s)return null;if(0===(o=a?i:s))return t;var u=t.slice(o),l=u.reduce(function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t},{byteLength:0,duration:0,nalCount:0});return u.byteLength=l.byteLength,u.duration=l.duration,u.nalCount=l.nalCount,u.pts=u[0].pts,u.dts=u[0].dts,u},this.alignGopsWith=function(t){h=t}}).prototype=new z,Mt=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},Ut=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},Nt=function(t,e){var i,r=t.minSegmentDts;return e||(r-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=r,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/9e4,i=Math.floor(i)),i},(Dt=function(t,e){this.numberOfTracks=0,this.metadataStream=e,"undefined"!=typeof t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,Dt.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}}).prototype=new z,Dt.prototype.flush=function(t){var e,i,r,n,s=0,a={captions:[],captionStreams:{},metadata:[],info:{}},o=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,Kt.forEach(function(t){a.info[t]=this.videoTrack[t]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,$t.forEach(function(t){a.info[t]=this.audioTrack[t]},this)),1===this.pendingTracks.length?a.type=this.pendingTracks[0].type:a.type="combined",this.emittedTracks+=this.pendingTracks.length,r=q.initSegment(this.pendingTracks),a.initSegment=new Uint8Array(r.byteLength),a.initSegment.set(r),a.data=new Uint8Array(this.pendingBytes),n=0;n<this.pendingBoxes.length;n++)a.data.set(this.pendingBoxes[n],s),s+=this.pendingBoxes[n].byteLength;for(n=0;n<this.pendingCaptions.length;n++)(e=this.pendingCaptions[n]).startTime=e.startPts-o,e.startTime/=9e4,e.endTime=e.endPts-o,e.endTime/=9e4,a.captionStreams[e.stream]=!0,a.captions.push(e);for(n=0;n<this.pendingMetadata.length;n++)(i=this.pendingMetadata[n]).cueTime=i.pts-o,i.cueTime/=9e4,a.metadata.push(i);a.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",a),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(It=function(r){var n,s,a=this,i=!0;It.prototype.init.call(this),r=r||{},this.baseMediaDecodeTime=r.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var e={};(this.transmuxPipeline_=e).type="aac",e.metadataStream=new gt.MetadataStream,e.aacStream=new Ft,e.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),e.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),e.adtsStream=new Tt,e.coalesceStream=new Dt(r,e.metadataStream),e.headOfPipeline=e.aacStream,e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),e.metadataStream.on("timestamp",function(t){e.aacStream.setTimestamp(t.timeStamp)}),e.aacStream.on("data",function(t){"timed-metadata"!==t.type||e.audioSegmentStream||(s=s||{timelineStartInfo:{baseMediaDecodeTime:a.baseMediaDecodeTime},codec:"adts",type:"audio"},e.coalesceStream.numberOfTracks++,e.audioSegmentStream=new xt(s,r),e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))}),e.coalesceStream.on("data",this.trigger.bind(this,"data")),e.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var i={};(this.transmuxPipeline_=i).type="ts",i.metadataStream=new gt.MetadataStream,i.packetStream=new gt.TransportPacketStream,i.parseStream=new gt.TransportParseStream,i.elementaryStream=new gt.ElementaryStream,i.videoTimestampRolloverStream=new gt.TimestampRolloverStream("video"),i.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),i.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),i.adtsStream=new Tt,i.h264Stream=new Yt,i.captionStream=new gt.CaptionStream,i.coalesceStream=new Dt(r,i.metadataStream),i.headOfPipeline=i.packetStream,i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream),i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream),i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream),i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream),i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),i.elementaryStream.on("data",function(t){var e;if("metadata"===t.type){for(e=t.tracks.length;e--;)n||"video"!==t.tracks[e].type?s||"audio"!==t.tracks[e].type||((s=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime):(n=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime;n&&!i.videoSegmentStream&&(i.coalesceStream.numberOfTracks++,i.videoSegmentStream=new Ot(n,r),i.videoSegmentStream.on("timelineStartInfo",function(t){s&&(s.timelineStartInfo=t,i.audioSegmentStream.setEarliestDts(t.dts))}),i.videoSegmentStream.on("processedGopsInfo",a.trigger.bind(a,"gopInfo")),i.videoSegmentStream.on("baseMediaDecodeTime",function(t){s&&i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)}),i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)),s&&!i.audioSegmentStream&&(i.coalesceStream.numberOfTracks++,i.audioSegmentStream=new xt(s,r),i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))}}),i.coalesceStream.on("data",this.trigger.bind(this,"data")),i.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(t){var e=this.transmuxPipeline_;this.baseMediaDecodeTime=t,s&&(s.timelineStartInfo.dts=void 0,s.timelineStartInfo.pts=void 0,Ut(s),s.timelineStartInfo.baseMediaDecodeTime=t,e.audioTimestampRolloverStream&&e.audioTimestampRolloverStream.discontinuity()),n&&(e.videoSegmentStream&&(e.videoSegmentStream.gopCache_=[],e.videoTimestampRolloverStream.discontinuity()),n.timelineStartInfo.dts=void 0,n.timelineStartInfo.pts=void 0,Ut(n),e.captionStream.reset(),n.timelineStartInfo.baseMediaDecodeTime=t),e.timedMetadataTimestampRolloverStream&&e.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){s&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.alignGopsWith=function(t){n&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.push=function(t){if(i){var e=Rt(t);e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),i=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){i=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new z;var Qt={Transmuxer:It,VideoSegmentStream:Ot,AudioSegmentStream:xt,AUDIO_PROPERTIES:$t,VIDEO_PROPERTIES:Kt},Jt={generator:q,Transmuxer:Qt.Transmuxer,AudioSegmentStream:Qt.AudioSegmentStream,VideoSegmentStream:Qt.VideoSegmentStream},Zt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},te=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),ee=function(){function e(t){Zt(this,e),this.options=t||{},this.init()}return te(e,[{key:"init",value:function(){var t;this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new Jt.Transmuxer(this.options),(t=this.transmuxer).on("data",function(t){var e=t.initSegment;t.initSegment={data:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength};var i=t.data;t.data=i.buffer,H.postMessage({action:"data",segment:t,byteOffset:i.byteOffset,byteLength:i.byteLength},[t.data])}),t.captionStream&&t.captionStream.on("data",function(t){H.postMessage({action:"caption",data:t})}),t.on("done",function(t){H.postMessage({action:"done"})}),t.on("gopInfo",function(t){H.postMessage({action:"gopInfo",gopInfo:t})})}},{key:"push",value:function(t){var e=new Uint8Array(t.data,t.byteOffset,t.byteLength);this.transmuxer.push(e)}},{key:"reset",value:function(){this.init()}},{key:"setTimestampOffset",value:function(t){var e=t.timestampOffset||0;this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4*e))}},{key:"setAudioAppendStart",value:function(t){this.transmuxer.setAudioAppendStart(Math.ceil(9e4*t.appendStart))}},{key:"flush",value:function(t){this.transmuxer.flush()}},{key:"resetCaptions",value:function(){this.transmuxer.resetCaptions()}},{key:"alignGopsWith",value:function(t){this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())}}]),e}();new function(t){t.onmessage=function(t){"init"===t.data.action&&t.data.options?this.messageHandlers=new ee(t.data.options):(this.messageHandlers||(this.messageHandlers=new ee),t.data&&t.data.action&&"init"!==t.data.action&&this.messageHandlers[t.data.action]&&this.messageHandlers[t.data.action](t.data))}}(re)}()}),Mu=function(t){return/mp4a\.\d+.\d+/i.test(t)},Uu=function(t){return/avc1\.[\da-f]+/i.test(t)},Nu=function(t){return t.map(function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t,e,i){return"avc1."+("00"+Number(e).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})})},Bu=function(n){function s(t,e){y(this,s);var i=b(this,n.call(this,As.EventTarget));i.timestampOffset_=0,i.pendingBuffers_=[],i.bufferUpdating_=!1,i.mediaSource_=t,i.codecs_=e,i.audioCodec_=null,i.videoCodec_=null,i.audioDisabled_=!1,i.appendAudioInitSegment_=!0,i.gopBuffer_=[],i.timeMapping_=0,i.safeAppend_=11<=As.browser.IE_VERSION;var r={remux:!1,alignGopsAtEnd:i.safeAppend_};return i.codecs_.forEach(function(t){Mu(t)?i.audioCodec_=t:Uu(t)&&(i.videoCodec_=t)}),i.transmuxer_=new Ru,i.transmuxer_.postMessage({action:"init",options:r}),i.transmuxer_.onmessage=function(t){return"data"===t.data.action?i.data_(t):"done"===t.data.action?i.done_(t):"gopInfo"===t.data.action?i.appendGopInfo_(t):void 0},Object.defineProperty(i,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&0<=t&&(this.timestampOffset_=t,this.appendAudioInitSegment_=!0,this.gopBuffer_.length=0,this.timeMapping_=0,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:t}))}}),Object.defineProperty(i,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(t){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=t),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=t)}}),Object.defineProperty(i,"updating",{get:function(){return!!(this.bufferUpdating_||!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating)}}),Object.defineProperty(i,"buffered",{get:function(){var t=null,e=null,i=0,r=[],n=[];if(!this.videoBuffer_&&!this.audioBuffer_)return As.createTimeRange();if(!this.videoBuffer_)return this.audioBuffer_.buffered;if(!this.audioBuffer_)return this.videoBuffer_.buffered;if(this.audioDisabled_)return this.videoBuffer_.buffered;if(0===this.videoBuffer_.buffered.length&&0===this.audioBuffer_.buffered.length)return As.createTimeRange();for(var s=this.videoBuffer_.buffered,a=this.audioBuffer_.buffered,o=s.length;o--;)r.push({time:s.start(o),type:"start"}),r.push({time:s.end(o),type:"end"});for(o=a.length;o--;)r.push({time:a.start(o),type:"start"}),r.push({time:a.end(o),type:"end"});for(r.sort(function(t,e){return t.time-e.time}),o=0;o<r.length;o++)"start"===r[o].type?2===++i&&(t=r[o].time):"end"===r[o].type&&1===--i&&(e=r[o].time),null!==t&&null!==e&&(n.push([t,e]),e=t=null);return As.createTimeRanges(n)}}),i}return _(s,n),s.prototype.data_=function(t){var e=t.data.segment;e.data=new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),e.initSegment=new Uint8Array(e.initSegment.data,e.initSegment.byteOffset,e.initSegment.byteLength),function(t,e,i){var r=e.player_;if(i.captions&&i.captions.length)for(var n in t.inbandTextTracks_||(t.inbandTextTracks_={}),i.captionStreams)if(!t.inbandTextTracks_[n]){r.tech_.trigger({type:"usage",name:"hls-608"});var s=r.textTracks().getTrackById(n);t.inbandTextTracks_[n]=s||r.addRemoteTextTrack({kind:"captions",id:n,label:n},!1).track}i.metadata&&i.metadata.length&&!t.metadataTrack_&&(t.metadataTrack_=r.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,t.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)}(this,this.mediaSource_,e),this.pendingBuffers_.push(e)},s.prototype.done_=function(t){"closed"!==this.mediaSource_.readyState?this.processPendingSegments_():this.pendingBuffers_.length=0},s.prototype.createRealSourceBuffers_=function(){var r=this,n=["audio","video"];n.forEach(function(e){if(r[e+"Codec_"]&&!r[e+"Buffer_"]){var i=null;if(r.mediaSource_[e+"Buffer_"])(i=r.mediaSource_[e+"Buffer_"]).updating=!1;else{var t=e+'/mp4;codecs="'+r[e+"Codec_"]+'"';i=function(t,e){var i=t.addSourceBuffer(e),r=Object.create(null);r.updating=!1,r.realBuffer_=i;var n=function(e){"function"==typeof i[e]?r[e]=function(){return i[e].apply(i,arguments)}:"undefined"==typeof r[e]&&Object.defineProperty(r,e,{get:function(){return i[e]},set:function(t){return i[e]=t}})};for(var s in i)n(s);return r}(r.mediaSource_.nativeMediaSource_,t),r.mediaSource_[e+"Buffer_"]=i}r[e+"Buffer_"]=i,["update","updatestart","updateend"].forEach(function(t){i.addEventListener(t,function(){if("audio"!==e||!r.audioDisabled_)return"updateend"===t&&(r[e+"Buffer_"].updating=!1),n.every(function(t){return!("audio"!==t||!r.audioDisabled_)||(e===t||!r[t+"Buffer_"]||!r[t+"Buffer_"].updating)})?r.trigger(t):void 0})})}})},s.prototype.appendBuffer=function(t){if(this.bufferUpdating_=!0,this.audioBuffer_&&this.audioBuffer_.buffered.length){var e=this.audioBuffer_.buffered;this.transmuxer_.postMessage({action:"setAudioAppendStart",appendStart:e.end(e.length-1)})}this.videoBuffer_&&this.transmuxer_.postMessage({action:"alignGopsWith",gopsToAlignWith:function(t,e,i){if(!e||!t.length)return[];var r=Math.ceil(9e4*(e.currentTime()-i+3)),n=void 0;for(n=0;n<t.length&&!(t[n].pts>r);n++);return t.slice(n)}(this.gopBuffer_,this.mediaSource_.player_,this.timeMapping_)}),this.transmuxer_.postMessage({action:"push",data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength},[t.buffer]),this.transmuxer_.postMessage({action:"flush"})},s.prototype.appendGopInfo_=function(t){this.gopBuffer_=function(t,e,i){if(!e.length)return t;if(i)return e.slice();for(var r=e[0].pts,n=0;n<t.length&&!(t[n].pts>=r);n++);return t.slice(0,n).concat(e)}(this.gopBuffer_,t.data.gopInfo,this.safeAppend_)},s.prototype.remove=function(t,e){if(this.videoBuffer_&&(this.videoBuffer_.updating=!0,this.videoBuffer_.remove(t,e),this.gopBuffer_=function(t,e,i,r){for(var n=Math.ceil(9e4*(e-r)),s=Math.ceil(9e4*(i-r)),a=t.slice(),o=t.length;o--&&!(t[o].pts<=s););if(-1===o)return a;for(var u=o+1;u--&&!(t[u].pts<=n););return u=Math.max(u,0),a.splice(u,o-u+1),a}(this.gopBuffer_,t,e,this.timeMapping_)),!this.audioDisabled_&&this.audioBuffer_&&(this.audioBuffer_.updating=!0,this.audioBuffer_.remove(t,e)),bu(t,e,this.metadataTrack_),this.inbandTextTracks_)for(var i in this.inbandTextTracks_)bu(t,e,this.inbandTextTracks_[i])},s.prototype.processPendingSegments_=function(){var t={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]};t=this.pendingBuffers_.reduce(function(t,e){var i=e.type,r=e.data,n=e.initSegment;return t[i].segments.push(r),t[i].bytes+=r.byteLength,t[i].initSegment=n,e.captions&&(t.captions=t.captions.concat(e.captions)),e.info&&(t[i].info=e.info),e.metadata&&(t.metadata=t.metadata.concat(e.metadata)),t},t),this.videoBuffer_||this.audioBuffer_||(0===t.video.bytes&&(this.videoCodec_=null),0===t.audio.bytes&&(this.audioCodec_=null),this.createRealSourceBuffers_()),t.audio.info&&this.mediaSource_.trigger({type:"audioinfo",info:t.audio.info}),t.video.info&&this.mediaSource_.trigger({type:"videoinfo",info:t.video.info}),this.appendAudioInitSegment_&&(!this.audioDisabled_&&this.audioBuffer_&&(t.audio.segments.unshift(t.audio.initSegment),t.audio.bytes+=t.audio.initSegment.byteLength),this.appendAudioInitSegment_=!1);var e=!1;this.videoBuffer_&&t.video.bytes?(t.video.segments.unshift(t.video.initSegment),t.video.bytes+=t.video.initSegment.byteLength,this.concatAndAppendSegments_(t.video,this.videoBuffer_),Su(this,t.captions,t.metadata)):!this.videoBuffer_||!this.audioDisabled_&&this.audioBuffer_||(e=!0),!this.audioDisabled_&&this.audioBuffer_&&this.concatAndAppendSegments_(t.audio,this.audioBuffer_),this.pendingBuffers_.length=0,e&&this.trigger("updateend"),this.bufferUpdating_=!1},s.prototype.concatAndAppendSegments_=function(t,e){var i=0,r=void 0;if(t.bytes){r=new Uint8Array(t.bytes),t.segments.forEach(function(t){r.set(t,i),i+=t.byteLength});try{e.updating=!0,e.appendBuffer(r)}catch(t){this.mediaSource_.player_&&this.mediaSource_.player_.error({code:-3,type:"APPEND_BUFFER_ERR",message:t.message,originalError:t})}}},s.prototype.abort=function(){this.videoBuffer_&&this.videoBuffer_.abort(),!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1},s}(As.EventTarget),ju=function(e){function i(){y(this,i);var s=b(this,e.call(this)),t=void 0;for(t in s.nativeMediaSource_=new g.MediaSource,s.nativeMediaSource_)t in i.prototype||"function"!=typeof s.nativeMediaSource_[t]||(s[t]=s.nativeMediaSource_[t].bind(s.nativeMediaSource_));return s.duration_=NaN,Object.defineProperty(s,"duration",{get:function(){return this.duration_===1/0?this.duration_:this.nativeMediaSource_.duration},set:function(t){(this.duration_=t)===1/0||(this.nativeMediaSource_.duration=t)}}),Object.defineProperty(s,"seekable",{get:function(){return this.duration_===1/0?As.createTimeRanges([[0,this.nativeMediaSource_.duration]]):this.nativeMediaSource_.seekable}}),Object.defineProperty(s,"readyState",{get:function(){return this.nativeMediaSource_.readyState}}),Object.defineProperty(s,"activeSourceBuffers",{get:function(){return this.activeSourceBuffers_}}),s.sourceBuffers=[],s.activeSourceBuffers_=[],s.updateActiveSourceBuffers_=function(){if(s.activeSourceBuffers_.length=0,1===s.sourceBuffers.length){var t=s.sourceBuffers[0];return t.appendAudioInitSegment_=!0,t.audioDisabled_=!t.audioCodec_,void s.activeSourceBuffers_.push(t)}for(var i=!1,r=!0,e=0;e<s.player_.audioTracks().length;e++){var n=s.player_.audioTracks()[e];if(n.enabled&&"main"!==n.kind){r=!(i=!0);break}}s.sourceBuffers.forEach(function(t,e){if(t.appendAudioInitSegment_=!0,t.videoCodec_&&t.audioCodec_)t.audioDisabled_=i;else if(t.videoCodec_&&!t.audioCodec_)t.audioDisabled_=!0,r=!1;else if(!t.videoCodec_&&t.audioCodec_&&(t.audioDisabled_=e?r:!r,t.audioDisabled_))return;s.activeSourceBuffers_.push(t)})},s.onPlayerMediachange_=function(){s.sourceBuffers.forEach(function(t){t.appendAudioInitSegment_=!0})},s.onHlsReset_=function(){s.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.postMessage({action:"resetCaptions"})})},s.onHlsSegmentTimeMapping_=function(e){s.sourceBuffers.forEach(function(t){return t.timeMapping_=e.mapping})},["sourceopen","sourceclose","sourceended"].forEach(function(t){this.nativeMediaSource_.addEventListener(t,this.trigger.bind(this))},s),s.on("sourceopen",function(t){var e=p.querySelector('[src="'+s.url_+'"]');e&&(s.player_=As(e.parentNode),s.player_.tech_.on("hls-reset",s.onHlsReset_),s.player_.tech_.on("hls-segment-time-mapping",s.onHlsSegmentTimeMapping_),s.player_.audioTracks&&s.player_.audioTracks()&&(s.player_.audioTracks().on("change",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("addtrack",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("removetrack",s.updateActiveSourceBuffers_)),s.player_.on("mediachange",s.onPlayerMediachange_))}),s.on("sourceended",function(t){for(var e=Tu(s.duration),i=0;i<s.sourceBuffers.length;i++){var r=s.sourceBuffers[i],n=r.metadataTrack_&&r.metadataTrack_.cues;n&&n.length&&(n[n.length-1].endTime=e)}}),s.on("sourceclose",function(t){this.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.terminate()}),this.sourceBuffers.length=0,this.player_&&(this.player_.audioTracks&&this.player_.audioTracks()&&(this.player_.audioTracks().off("change",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("addtrack",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("removetrack",this.updateActiveSourceBuffers_)),this.player_.el_&&(this.player_.off("mediachange",this.onPlayerMediachange_),this.player_.tech_.off("hls-reset",this.onHlsReset_),this.player_.tech_.off("hls-segment-time-mapping",this.onHlsSegmentTimeMapping_)))}),s}return _(i,e),i.prototype.addSeekableRange_=function(t,e){var i=void 0;if(this.duration!==1/0)throw(i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name="InvalidStateError",i.code=11,i;(e>this.nativeMediaSource_.duration||isNaN(this.nativeMediaSource_.duration))&&(this.nativeMediaSource_.duration=e)},i.prototype.addSourceBuffer=function(t){var n,e,i=void 0,r=(n={type:"",parameters:{}},e=t.trim().split(";"),n.type=e.shift().trim(),e.forEach(function(t){var e=t.trim().split("=");if(1<e.length){var i=e[0].replace(/"/g,"").trim(),r=e[1].replace(/"/g,"").trim();n.parameters[i]=r}}),n);if(/^(video|audio)\/mp2t$/i.test(r.type)){var s=[];r.parameters&&r.parameters.codecs&&(s=r.parameters.codecs.split(","),s=(s=Nu(s)).filter(function(t){return Mu(t)||Uu(t)})),0===s.length&&(s=["avc1.4d400d","mp4a.40.2"]),i=new Bu(this,s),0!==this.sourceBuffers.length&&(this.sourceBuffers[0].createRealSourceBuffers_(),i.createRealSourceBuffers_(),this.sourceBuffers[0].audioDisabled_=!0)}else i=this.nativeMediaSource_.addSourceBuffer(t);return this.sourceBuffers.push(i),i},i}(As.EventTarget),Fu=0;As.mediaSources={};var Hu=function(t,e){var i=As.mediaSources[t];if(!i)throw new Error("Media Source not found (Video.js)");i.trigger({type:"sourceopen",swfId:e})},Vu=function(){return!!g.MediaSource&&!!g.MediaSource.isTypeSupported&&g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},qu=function(){if(this.MediaSource={open:Hu,supportsNativeMediaSources:Vu},Vu())return new ju;throw new Error("Cannot use create a virtual MediaSource for this video")};qu.open=Hu,qu.supportsNativeMediaSources=Vu;var Wu={createObjectURL:function(t){var e=void 0;return t instanceof ju?(e=g.URL.createObjectURL(t.nativeMediaSource_),t.url_=e):t instanceof ju?(e="blob:vjs-media-source/"+Fu,Fu++,As.mediaSources[e]=t,e):(e=g.URL.createObjectURL(t),t.url_=e)}};As.MediaSource=qu,As.URL=Wu;var zu=As.mergeOptions,Gu=function(t,e){for(var a=zu(t,{duration:e.duration,minimumUpdatePeriod:e.minimumUpdatePeriod}),i=0;i<e.playlists.length;i++){var r=Bo(a,e.playlists[i]);r&&(a=r)}return No(e,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n=t.playlists[0].uri,s=Bo(a,t.playlists[0]);s&&((a=s).mediaGroups[e][i][r].playlists[0]=a.playlists[n])}}),a},Xu=function(s){function a(t,e,i,r){y(this,a);var n=b(this,s.call(this));if(n.hls_=e,n.withCredentials=i,!t)throw new Error("A non-empty playlist URL or playlist is required");return n.on("minimumUpdatePeriod",function(){n.refreshXml_()}),n.on("mediaupdatetimeout",function(){n.refreshMedia_()}),"string"==typeof t?(n.srcUrl=t,n.state="HAVE_NOTHING",b(n)):(n.masterPlaylistLoader_=r,n.state="HAVE_METADATA",n.started=!0,n.media(t),g.setTimeout(function(){n.trigger("loadedmetadata")},0),n)}return _(a,s),a.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},a.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},a.prototype.media=function(t){if(!t)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var e=this.state;if("string"==typeof t){if(!this.master.playlists[t])throw new Error("Unknown playlist URI: "+t);t=this.master.playlists[t]}var i=!this.media_||t.uri!==this.media_.uri;this.state="HAVE_METADATA",i&&(this.media_&&this.trigger("mediachanging"),this.media_=t,this.refreshMedia_(),"HAVE_MASTER"!==e&&this.trigger("mediachange"))},a.prototype.pause=function(){this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1)},a.prototype.load=function(){this.started?this.trigger("loadedplaylist"):this.start()},a.prototype.parseMasterXml=function(){var s=Sa(this.masterXml_,{manifestUri:this.srcUrl,clientOffset:this.clientOffset_});s.uri=this.srcUrl;for(var t=0;t<s.playlists.length;t++){var e="placeholder-uri-"+t;s.playlists[t].uri=e,s.playlists[e]=s.playlists[t]}return No(s,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n="placeholder-uri-"+e+"-"+i+"-"+r;t.playlists[0].uri=n,s.playlists[n]=t.playlists[0]}}),jo(s),Fo(s),s},a.prototype.start=function(){var i=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(i.request){if(i.request=null,t)return i.error={status:e.status,message:"DASH playlist request error at URL: "+i.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===i.state&&(i.started=!1),i.trigger("error");i.masterXml_=e.responseText,e.responseHeaders&&e.responseHeaders.date?i.masterLoaded_=Date.parse(e.responseHeaders.date):i.masterLoaded_=Date.now(),i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))}})},a.prototype.syncClientServerClock_=function(r){var n=this,s=ka(this.masterXml_);return null===s?(this.clientOffset_=this.masterLoaded_-Date.now(),r()):"DIRECT"===s.method?(this.clientOffset_=s.value-Date.now(),r()):void(this.request=this.hls_.xhr({uri:Ro(this.srcUrl,s.value),method:s.method,withCredentials:this.withCredentials},function(t,e){if(n.request){if(t)return n.clientOffset_=n.masterLoaded_-Date.now(),r();var i=void 0;i="HEAD"===s.method?e.responseHeaders&&e.responseHeaders.date?Date.parse(e.responseHeaders.date):n.masterLoaded_:Date.parse(e.responseText),n.clientOffset_=i-Date.now(),r()}}))},a.prototype.onClientServerClockSync_=function(){var t=this;this.master=this.parseMasterXml(),this.state="HAVE_MASTER",this.trigger("loadedplaylist"),this.media_||this.media(this.master.playlists[0]),g.setTimeout(function(){t.trigger("loadedmetadata")},0),this.master.minimumUpdatePeriod&&g.setTimeout(function(){t.trigger("minimumUpdatePeriod")},this.master.minimumUpdatePeriod)},a.prototype.refreshXml_=function(){var r=this;this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"DASH playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");r.masterXml_=e.responseText;var i=r.parseMasterXml();r.master=Gu(r.master,i),g.setTimeout(function(){r.trigger("minimumUpdatePeriod")},r.master.minimumUpdatePeriod)}})},a.prototype.refreshMedia_=function(){var t=this,e=void 0,i=void 0;this.masterPlaylistLoader_?(e=this.masterPlaylistLoader_.master,i=this.masterPlaylistLoader_.parseMasterXml()):(e=this.master,i=this.parseMasterXml());var r=Gu(e,i);r?(this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=r:this.master=r,this.media_=r.playlists[this.media_.uri]):this.trigger("playlistunchanged"),this.media().endList||(this.mediaUpdateTimeout=g.setTimeout(function(){t.trigger("mediaupdatetimeout")},Ho(this.media(),!!r))),this.trigger("loadedplaylist")},a}(As.EventTarget),Yu=function(t){return As.log.debug?As.log.debug.bind(As,"VHS:",t+" >"):function(){}};function $u(){}var Ku=function(){function n(t,e,i,r){y(this,n),this.callbacks_=[],this.pendingCallback_=null,this.timestampOffset_=0,this.mediaSource=t,this.processedAppend_=!1,this.type_=i,this.mimeType_=e,this.logger_=Yu("SourceUpdater["+i+"]["+e+"]"),"closed"===t.readyState?t.addEventListener("sourceopen",this.createSourceBuffer_.bind(this,e,r)):this.createSourceBuffer_(e,r)}return n.prototype.createSourceBuffer_=function(t,e){var i=this;this.sourceBuffer_=this.mediaSource.addSourceBuffer(t),this.logger_("created SourceBuffer"),e&&(e.trigger("sourcebufferadded"),this.mediaSource.sourceBuffers.length<2)?e.on("sourcebufferadded",function(){i.start_()}):this.start_()},n.prototype.start_=function(){var e=this;this.started_=!0,this.onUpdateendCallback_=function(){var t=e.pendingCallback_;e.pendingCallback_=null,e.logger_("buffered ["+vu(e.buffered())+"]"),t&&t(),e.runCallback_()},this.sourceBuffer_.addEventListener("updateend",this.onUpdateendCallback_),this.runCallback_()},n.prototype.abort=function(t){var e=this;this.processedAppend_&&this.queueCallback_(function(){e.sourceBuffer_.abort()},t)},n.prototype.appendBuffer=function(t,e){var i=this;this.processedAppend_=!0,this.queueCallback_(function(){i.sourceBuffer_.appendBuffer(t)},e)},n.prototype.buffered=function(){return this.sourceBuffer_?this.sourceBuffer_.buffered:As.createTimeRanges()},n.prototype.remove=function(t,e){var i=this;this.processedAppend_&&this.queueCallback_(function(){i.logger_("remove ["+t+" => "+e+"]"),i.sourceBuffer_.remove(t,e)},$u)},n.prototype.updating=function(){return!this.sourceBuffer_||this.sourceBuffer_.updating||this.pendingCallback_},n.prototype.timestampOffset=function(t){var e=this;return"undefined"!=typeof t&&(this.queueCallback_(function(){e.sourceBuffer_.timestampOffset=t}),this.timestampOffset_=t),this.timestampOffset_},n.prototype.queueCallback_=function(t,e){this.callbacks_.push([t.bind(this),e]),this.runCallback_()},n.prototype.runCallback_=function(){var t=void 0;!this.updating()&&this.callbacks_.length&&this.started_&&(t=this.callbacks_.shift(),this.pendingCallback_=t[1],t[0]())},n.prototype.dispose=function(){this.sourceBuffer_.removeEventListener("updateend",this.onUpdateendCallback_),this.sourceBuffer_&&"open"===this.mediaSource.readyState&&this.sourceBuffer_.abort()},n}(),Qu={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,GOAL_BUFFER_LENGTH_RATE:1,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,BUFFER_LOW_WATER_LINE_RATE:1},Ju=2,Zu=-101,tl=-102,el=function(t){var e,i,r={};return t.byterange&&(r.Range=(e=t.byterange,i=e.offset+e.length-1,"bytes="+e.offset+"-"+i)),r},il=function(t){t.forEach(function(t){t.abort()})},rl=function(t,e){return e.timedout?{status:e.status,message:"HLS request timed-out at URL: "+e.uri,code:Zu,xhr:e}:e.aborted?{status:e.status,message:"HLS request aborted at URL: "+e.uri,code:tl,xhr:e}:t?{status:e.status,message:"HLS request errored at URL: "+e.uri,code:Ju,xhr:e}:null},nl=function(a,o,u){var l=[],c=0;return function(t,e){if(t&&(il(a),l.push(t)),(c+=1)===a.length){if(e.endOfAllRequests=Date.now(),0<l.length){var i=l.reduce(function(t,e){return e.code>t.code?e:t});return u(i,e)}return e.encryptedBytes?(n=e,s=u,(r=o).addEventListener("message",function t(e){if(e.data.source===n.requestId){r.removeEventListener("message",t);var i=e.data.decrypted;return n.bytes=new Uint8Array(i.bytes,i.byteOffset,i.byteLength),s(null,n)}}),void r.postMessage(cu({source:n.requestId,encrypted:n.encryptedBytes,key:n.key.bytes,iv:n.key.iv}),[n.encryptedBytes.buffer,n.key.bytes.buffer])):u(null,e)}var r,n,s}},sl=function(n,s){return function(t){var e,i,r;return n.stats=As.mergeOptions(n.stats,(i=(e=t).target,(r={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-i.requestTime||0}).bytesReceived=e.loaded,r.bandwidth=Math.floor(r.bytesReceived/r.roundTripTime*8*1e3),r)),!n.stats.firstBytesReceivedAt&&n.stats.bytesReceived&&(n.stats.firstBytesReceivedAt=Date.now()),s(t,n)}},al=function(t,e,i,r,n,s){var a,o,u,l,c=[],h=nl(c,i,s);if(r.key){var d=t(As.mergeOptions(e,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),(a=r,o=h,function(t,e){var i=e.response,r=rl(t,e);if(r)return o(r,a);if(16!==i.byteLength)return o({status:e.status,message:"Invalid HLS key at URL: "+e.uri,code:Ju,xhr:e},a);var n=new DataView(i);return a.key.bytes=new Uint32Array([n.getUint32(0),n.getUint32(4),n.getUint32(8),n.getUint32(12)]),o(null,a)}));c.push(d)}if(r.map&&!r.map.bytes){var p=t(As.mergeOptions(e,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:el(r.map)}),(u=r,l=h,function(t,e){var i=e.response,r=rl(t,e);return r?l(r,u):0===i.byteLength?l({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},u):(u.map.bytes=new Uint8Array(e.response),l(null,u))}));c.push(p)}var f,m,g=t(As.mergeOptions(e,{uri:r.resolvedUri,responseType:"arraybuffer",headers:el(r)}),(f=r,m=h,function(t,e){var i,r=e.response,n=rl(t,e);return n?m(n,f):0===r.byteLength?m({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},f):(f.stats={bandwidth:(i=e).bandwidth,bytesReceived:i.bytesReceived||0,roundTripTime:i.roundTripTime||0},f.key?f.encryptedBytes=new Uint8Array(e.response):f.bytes=new Uint8Array(e.response),m(null,f))}));return g.addEventListener("progress",sl(r,n)),c.push(g),function(){return il(c)}},ol={videoCodec:"avc1",videoObjectTypeIndicator:".4d400d",audioProfile:"2"},ul=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i={codecCount:0};return i.codecCount=e.split(",").length,i.codecCount=i.codecCount||2,(t=/(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e))&&(i.videoCodec=t[2],i.videoObjectTypeIndicator=t[3]),i.audioProfile=/(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),i.audioProfile=i.audioProfile&&i.audioProfile[2],i},ll=function(t,e,i){return t+"/"+e+'; codecs="'+i.filter(function(t){return!!t}).join(", ")+'"'},cl=function(t,e){var i,r,n=(i=e).segments&&i.segments.length&&i.segments[0].map?"mp4":"mp2t",s=(r=e.attributes||{}).CODECS?ul(r.CODECS):ol,a=e.attributes||{},o=!0,u=!1;if(!e)return[];if(t.mediaGroups.AUDIO&&a.AUDIO){var l=t.mediaGroups.AUDIO[a.AUDIO];if(l)for(var c in o=!(u=!0),l)if(!l[c].uri&&!l[c].playlists){o=!0;break}}u&&!s.audioProfile&&(o||(s.audioProfile=function(t,e){if(!t.mediaGroups.AUDIO||!e)return null;var i=t.mediaGroups.AUDIO[e];if(!i)return null;for(var r in i){var n=i[r];if(n.default&&n.playlists)return ul(n.playlists[0].attributes.CODECS).audioProfile}return null}(t,a.AUDIO)),s.audioProfile||(As.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),s.audioProfile=ol.audioProfile));var h={};s.videoCodec&&(h.video=""+s.videoCodec+s.videoObjectTypeIndicator),s.audioProfile&&(h.audio="mp4a.40."+s.audioProfile);var d=ll("audio",n,[h.audio]),p=ll("video",n,[h.video]),f=ll("video",n,[h.video,h.audio]);return u?!o&&h.video?[p,d]:o||h.video?[f,d]:[d,d]:h.video?[f]:[d]},hl=function(t,e){var i;return t&&(i=g.getComputedStyle(t))?i[e]:""},dl=function(t,r){var n=t.slice();t.sort(function(t,e){var i=r(t,e);return 0===i?n.indexOf(t)-n.indexOf(e):i})},pl=function(t,e){var i=void 0,r=void 0;return t.attributes.BANDWIDTH&&(i=t.attributes.BANDWIDTH),i=i||g.Number.MAX_VALUE,e.attributes.BANDWIDTH&&(r=e.attributes.BANDWIDTH),i-(r=r||g.Number.MAX_VALUE)},fl=function(t,e,i){if(!t||!e)return!1;var r=i===t.segments.length;return t.endList&&"open"===e.readyState&&r},ml=function(t){return"number"==typeof t&&isFinite(t)},gl=function(i){function r(t){y(this,r);var e=b(this,i.call(this));if(!t)throw new TypeError("Initialization settings are required");if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified");if(!t.mediaSource)throw new TypeError("No MediaSource specified");return e.bandwidth=t.bandwidth,e.throughput={rate:0,count:0},e.roundTrip=NaN,e.resetStats_(),e.mediaIndex=null,e.hasPlayed_=t.hasPlayed,e.currentTime_=t.currentTime,e.seekable_=t.seekable,e.seeking_=t.seeking,e.duration_=t.duration,e.mediaSource_=t.mediaSource,e.hls_=t.hls,e.loaderType_=t.loaderType,e.startingMedia_=void 0,e.segmentMetadataTrack_=t.segmentMetadataTrack,e.goalBufferLength_=t.goalBufferLength,e.sourceType_=t.sourceType,e.state_="INIT",e.checkBufferTimeout_=null,e.error_=void 0,e.currentTimeline_=-1,e.pendingSegment_=null,e.mimeType_=null,e.sourceUpdater_=null,e.xhrOptions_=null,e.activeInitSegmentId_=null,e.initSegments_={},e.decrypter_=t.decrypter,e.syncController_=t.syncController,e.syncPoint_={segmentIndex:0,time:0},e.syncController_.on("syncinfoupdate",function(){return e.trigger("syncinfoupdate")}),e.mediaSource_.addEventListener("sourceopen",function(){return e.ended_=!1}),e.fetchAtBuffer_=!1,e.logger_=Yu("SegmentLoader["+e.loaderType_+"]"),Object.defineProperty(e,"state",{get:function(){return this.state_},set:function(t){t!==this.state_&&(this.logger_(this.state_+" -> "+t),this.state_=t)}}),e}return _(r,i),r.prototype.resetStats_=function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0},r.prototype.dispose=function(){this.state="DISPOSED",this.pause(),this.abort_(),this.sourceUpdater_&&this.sourceUpdater_.dispose(),this.resetStats_()},r.prototype.abort=function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)},r.prototype.abort_=function(){this.pendingSegment_&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null},r.prototype.error=function(t){return"undefined"!=typeof t&&(this.error_=t),this.pendingSegment_=null,this.error_},r.prototype.endOfStream=function(){this.ended_=!0,this.pause(),this.trigger("ended")},r.prototype.buffered_=function(){return this.sourceUpdater_?this.sourceUpdater_.buffered():As.createTimeRanges()},r.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];return e&&!r&&t.bytes&&(this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:t.bytes}),r||t},r.prototype.couldBeginLoading_=function(){return this.playlist_&&(this.sourceUpdater_||this.mimeType_&&"INIT"===this.state)&&!this.paused()},r.prototype.load=function(){if(this.monitorBuffer_(),this.playlist_){if(this.syncController_.setDateTimeMapping(this.playlist_),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}},r.prototype.init_=function(){return this.state="READY",this.sourceUpdater_=new Ku(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),this.resetEverything(),this.monitorBuffer_()},r.prototype.playlist=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t){var i=this.playlist_,r=this.pendingSegment_;this.playlist_=t,this.xhrOptions_=e,this.hasPlayed_()||(t.syncInfo={mediaSequence:t.mediaSequence,time:0});var n=i?i.id:null;if(this.logger_("playlist update ["+n+" => "+t.id+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();if(i&&i.uri===t.uri){var s=t.mediaSequence-i.mediaSequence;this.logger_("live window shift ["+s+"]"),null!==this.mediaIndex&&(this.mediaIndex-=s),r&&(r.mediaIndex-=s,0<=r.mediaIndex&&(r.segment=t.segments[r.mediaIndex])),this.syncController_.saveExpiredSegmentInfo(i,t)}else null!==this.mediaIndex&&this.resyncLoader()}},r.prototype.pause=function(){this.checkBufferTimeout_&&(g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)},r.prototype.paused=function(){return null===this.checkBufferTimeout_},r.prototype.mimeType=function(t,e){this.mimeType_||(this.mimeType_=t,this.sourceBufferEmitter_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_())},r.prototype.resetEverything=function(){this.ended_=!1,this.resetLoader(),this.remove(0,this.duration_()),this.trigger("reseteverything")},r.prototype.resetLoader=function(){this.fetchAtBuffer_=!1,this.resyncLoader()},r.prototype.resyncLoader=function(){this.mediaIndex=null,this.syncPoint_=null,this.abort()},r.prototype.remove=function(t,e){this.sourceUpdater_&&this.sourceUpdater_.remove(t,e),bu(t,e,this.segmentMetadataTrack_)},r.prototype.monitorBuffer_=function(){this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),1)},r.prototype.monitorBufferTick_=function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),500)},r.prototype.fillBuffer_=function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(t)fl(this.playlist_,this.mediaSource_,t.mediaIndex)?this.endOfStream():(t.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())&&((t.timeline!==this.currentTimeline_||null!==t.startOfSegment&&t.startOfSegment<this.sourceUpdater_.timestampOffset())&&(this.syncController_.reset(),t.timestampOffset=t.startOfSegment),this.loadSegment_(t))}},r.prototype.checkBuffer_=function(t,e,i,r,n,s){var a=0,o=void 0;t.length&&(a=t.end(t.length-1));var u=Math.max(0,a-n);if(!e.segments.length)return null;if(u>=this.goalBufferLength_())return null;if(!r&&1<=u)return null;if(null===s)return i=this.getSyncSegmentCandidate_(e),this.generateSegmentInfo_(e,i,null,!0);if(null!==i){var l=e.segments[i];return o=l&&l.end?l.end:a,this.generateSegmentInfo_(e,i+1,o,!1)}if(this.fetchAtBuffer_){var c=nu.getMediaInfoForTime(e,a,s.segmentIndex,s.time);i=c.mediaIndex,o=c.startTime}else{var h=nu.getMediaInfoForTime(e,n,s.segmentIndex,s.time);i=h.mediaIndex,o=h.startTime}return this.generateSegmentInfo_(e,i,o,!1)},r.prototype.getSyncSegmentCandidate_=function(t){var e=this;if(-1===this.currentTimeline_)return 0;var i=t.segments.map(function(t,e){return{timeline:t.timeline,segmentIndex:e}}).filter(function(t){return t.timeline===e.currentTimeline_});return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(t.segments.length-1,0)},r.prototype.generateSegmentInfo_=function(t,e,i,r){if(e<0||e>=t.segments.length)return null;var n=t.segments[e];return{requestId:"segment-loader-"+Math.random(),uri:n.resolvedUri,mediaIndex:e,isSyncRequest:r,startOfSegment:i,playlist:t,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:n.timeline,duration:n.duration,segment:n}},r.prototype.abortRequestEarly_=function(t){if(this.hls_.tech_.paused()||!this.xhrOptions_.timeout||!this.playlist_.attributes.BANDWIDTH)return!1;if(Date.now()-(t.firstBytesReceivedAt||Date.now())<1e3)return!1;var e=this.currentTime_(),i=t.bandwidth,r=this.pendingSegment_.duration,n=nu.estimateSegmentRequestTime(r,i,this.playlist_,t.bytesReceived),s=function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return((t.length?t.end(t.length-1):0)-e)/i}(this.buffered_(),e,this.hls_.tech_.playbackRate())-1;if(n<=s)return!1;var a=function(t){var e=t.master,i=t.currentTime,r=t.bandwidth,n=t.duration,s=t.segmentDuration,a=t.timeUntilRebuffer,o=t.currentTimeline,u=t.syncController,l=e.playlists.filter(function(t){return!nu.isIncompatible(t)}),c=l.filter(nu.isEnabled);c.length||(c=l.filter(function(t){return!nu.isDisabled(t)}));var h=c.filter(nu.hasAttribute.bind(null,"BANDWIDTH")).map(function(t){var e=u.getSyncPoint(t,n,o,i)?1:2;return{playlist:t,rebufferingImpact:nu.estimateSegmentRequestTime(s,r,t)*e-a}}),d=h.filter(function(t){return t.rebufferingImpact<=0});return dl(d,function(t,e){return pl(e.playlist,t.playlist)}),d.length?d[0]:(dl(h,function(t,e){return t.rebufferingImpact-e.rebufferingImpact}),h[0]||null)}({master:this.hls_.playlists.master,currentTime:e,bandwidth:i,duration:this.duration_(),segmentDuration:r,timeUntilRebuffer:s,currentTimeline:this.currentTimeline_,syncController:this.syncController_});if(a){var o=n-s-a.rebufferingImpact,u=.5;return s<=fu&&(u=1),!a.playlist||a.playlist.uri===this.playlist_.uri||o<u?!1:(this.bandwidth=a.playlist.attributes.BANDWIDTH*Qu.BANDWIDTH_VARIANCE+1,this.abort(),this.trigger("earlyabort"),!0)}},r.prototype.handleProgress_=function(t,e){this.pendingSegment_&&e.requestId===this.pendingSegment_.requestId&&!this.abortRequestEarly_(e.stats)&&this.trigger("progress")},r.prototype.loadSegment_=function(t){this.state="WAITING",this.pendingSegment_=t,this.trimBackBuffer_(t),t.abortRequests=al(this.hls_.xhr,this.xhrOptions_,this.decrypter_,this.createSimplifiedSegmentObj_(t),this.handleProgress_.bind(this),this.segmentRequestFinished_.bind(this))},r.prototype.trimBackBuffer_=function(t){var e,i,r,n,s=(e=this.seekable_(),i=this.currentTime_(),r=this.playlist_.targetDuration||10,n=void 0,n=e.length&&0<e.start(0)&&e.start(0)<i?e.start(0):i-30,Math.min(n,i-r));0<s&&this.remove(0,s)},r.prototype.createSimplifiedSegmentObj_=function(t){var e=t.segment,i={resolvedUri:e.resolvedUri,byterange:e.byterange,requestId:t.requestId};if(e.key){var r=e.key.iv||new Uint32Array([0,0,0,t.mediaIndex+t.playlist.mediaSequence]);i.key={resolvedUri:e.key.resolvedUri,iv:r}}return e.map&&(i.map=this.initSegment(e.map)),i},r.prototype.segmentRequestFinished_=function(t,e){if(this.mediaRequests+=1,e.stats&&(this.mediaBytesTransferred+=e.stats.bytesReceived,this.mediaTransferDuration+=e.stats.roundTripTime),this.pendingSegment_){if(e.requestId===this.pendingSegment_.requestId){if(t)return this.pendingSegment_=null,this.state="READY",t.code===tl?void(this.mediaRequestsAborted+=1):(this.pause(),t.code===Zu?(this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,void this.trigger("bandwidthupdate")):(this.mediaRequestsErrored+=1,this.error(t),void this.trigger("error")));this.bandwidth=e.stats.bandwidth,this.roundTrip=e.stats.roundTripTime,e.map&&(e.map=this.initSegment(e.map,!0)),this.processSegmentResponse_(e)}}else this.mediaRequestsAborted+=1},r.prototype.processSegmentResponse_=function(t){var e=this.pendingSegment_;e.bytes=t.bytes,t.map&&(e.segment.map.bytes=t.map.bytes),e.endOfAllRequests=t.endOfAllRequests,this.handleSegment_()},r.prototype.handleSegment_=function(){var t=this;if(this.pendingSegment_){var e=this.pendingSegment_,i=e.segment,r=this.syncController_.probeSegmentInfo(e);"undefined"==typeof this.startingMedia_&&r&&(r.containsAudio||r.containsVideo)&&(this.startingMedia_={containsAudio:r.containsAudio,containsVideo:r.containsVideo});var n,s,a,o=(n=this.loaderType_,s=this.startingMedia_,a=r,"main"===n&&s&&a?a.containsAudio||a.containsVideo?s.containsVideo&&!a.containsVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!s.containsVideo&&a.containsVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null);if(o)return this.error({message:o,blacklistDuration:1/0}),void this.trigger("error");if(e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");null!==e.timestampOffset&&e.timestampOffset!==this.sourceUpdater_.timestampOffset()&&(this.sourceUpdater_.timestampOffset(e.timestampOffset),this.trigger("timestampoffset"));var u,l,c,h,d,p,f,m,g,y,v,_=this.syncController_.mappingForTimeline(e.timeline);if(null!==_&&this.trigger({type:"segmenttimemapping",mapping:_}),this.state="APPENDING",i.map){var b=hu(i.map);if(!this.activeInitSegmentId_||this.activeInitSegmentId_!==b){var T=this.initSegment(i.map);this.sourceUpdater_.appendBuffer(T.bytes,function(){t.activeInitSegmentId_=b})}}e.byteLength=e.bytes.byteLength,"number"==typeof i.start&&"number"==typeof i.end?this.mediaSecondsLoaded+=i.end-i.start:this.mediaSecondsLoaded+=i.duration,this.logger_((l=(u=e).segment,c=l.start,h=l.end,d=u.playlist,p=d.mediaSequence,f=d.id,m=d.segments,g=void 0===m?[]:m,y=u.mediaIndex,v=u.timeline,["appending ["+y+"] of ["+p+", "+(p+g.length)+"] from playlist ["+f+"]","["+c+" => "+h+"] in timeline ["+v+"]"].join(" "))),this.sourceUpdater_.appendBuffer(e.bytes,this.handleUpdateEnd_.bind(this))}else this.state="READY"},r.prototype.handleUpdateEnd_=function(){if(!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_());var t=this.pendingSegment_,e=t.segment,i=null!==this.mediaIndex;(this.pendingSegment_=null,this.recordThroughput_(t),this.addSegmentMetadataCue_(t),this.state="READY",this.mediaIndex=t.mediaIndex,this.fetchAtBuffer_=!0,this.currentTimeline_=t.timeline,this.trigger("syncinfoupdate"),e.end&&this.currentTime_()-e.end>3*t.playlist.targetDuration)?this.resetEverything():(i&&this.trigger("bandwidthupdate"),this.trigger("progress"),fl(t.playlist,this.mediaSource_,t.mediaIndex+1)&&this.endOfStream(),this.paused()||this.monitorBuffer_())},r.prototype.recordThroughput_=function(t){var e=this.throughput.rate,i=Date.now()-t.endOfAllRequests+1,r=Math.floor(t.byteLength/i*8*1e3);this.throughput.rate+=(r-e)/++this.throughput.count},r.prototype.addSegmentMetadataCue_=function(t){if(this.segmentMetadataTrack_){var e=t.segment,i=e.start,r=e.end;if(ml(i)&&ml(r)){bu(i,r,this.segmentMetadataTrack_);var n=g.WebKitDataCue||g.VTTCue,s={bandwidth:t.playlist.attributes.BANDWIDTH,resolution:t.playlist.attributes.RESOLUTION,codecs:t.playlist.attributes.CODECS,byteLength:t.byteLength,uri:t.uri,timeline:t.timeline,playlist:t.playlist.uri,start:i,end:r},a=new n(i,r,JSON.stringify(s));a.value=s,this.segmentMetadataTrack_.addCue(a)}}},r}(As.EventTarget),yl=new Uint8Array("\n\n".split("").map(function(t){return t.charCodeAt(0)})),vl=function(t){return String.fromCharCode.apply(null,t)},_l=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.mediaSource_=null,i.subtitlesTrack_=null,i}return _(n,r),n.prototype.buffered_=function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return As.createTimeRanges();var t=this.subtitlesTrack_.cues,e=t[0].startTime,i=t[t.length-1].startTime;return As.createTimeRanges([[e,i]])},n.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];if(e&&!r&&t.bytes){var n=yl.byteLength+t.bytes.byteLength,s=new Uint8Array(n);s.set(t.bytes),s.set(yl,t.bytes.byteLength),this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:s}}return r||t},n.prototype.couldBeginLoading_=function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()},n.prototype.init_=function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()},n.prototype.track=function(t){return"undefined"==typeof t||(this.subtitlesTrack_=t,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),this.subtitlesTrack_},n.prototype.remove=function(t,e){bu(t,e,this.subtitlesTrack_)},n.prototype.fillBuffer_=function(){var t=this;this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var e=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(e=this.skipEmptySegments_(e)){if(null===this.syncController_.timestampOffsetForTimeline(e.timeline)){return this.syncController_.one("timestampoffset",function(){t.state="READY",t.paused()||t.monitorBuffer_()}),void(this.state="WAITING_ON_TIMELINE")}this.loadSegment_(e)}},n.prototype.skipEmptySegments_=function(t){for(;t&&t.segment.empty;)t=this.generateSegmentInfo_(t.playlist,t.mediaIndex+1,t.startOfSegment+t.duration,t.isSyncRequest);return t},n.prototype.handleSegment_=function(){var e=this;if(this.pendingSegment_&&this.subtitlesTrack_){this.state="APPENDING";var t=this.pendingSegment_,i=t.segment;if("function"!=typeof g.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var r=function(){e.handleSegment_()};return this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",r),void this.subtitlesTrack_.tech_.one("vttjserror",function(){e.subtitlesTrack_.tech_.off("vttjsloaded",r),e.error({message:"Error loading vtt.js"}),e.state="READY",e.pause(),e.trigger("error")})}i.requested=!0;try{this.parseVTTCues_(t)}catch(t){return this.error({message:t.message}),this.state="READY",this.pause(),this.trigger("error")}if(this.updateTimeMapping_(t,this.syncController_.timelines[t.timeline],this.playlist_),t.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");t.byteLength=t.bytes.byteLength,this.mediaSecondsLoaded+=i.duration,t.cues.length&&this.remove(t.cues[0].endTime,t.cues[t.cues.length-1].endTime),t.cues.forEach(function(t){e.subtitlesTrack_.addCue(t)}),this.handleUpdateEnd_()}else this.state="READY"},n.prototype.parseVTTCues_=function(e){var t=void 0,i=!1;"function"==typeof g.TextDecoder?t=new g.TextDecoder("utf8"):(t=g.WebVTT.StringDecoder(),i=!0);var r=new g.WebVTT.Parser(g,g.vttjs,t);if(e.cues=[],e.timestampmap={MPEGTS:0,LOCAL:0},r.oncue=e.cues.push.bind(e.cues),r.ontimestampmap=function(t){return e.timestampmap=t},r.onparsingerror=function(t){As.log.warn("Error encountered when parsing cues: "+t.message)},e.segment.map){var n=e.segment.map.bytes;i&&(n=vl(n)),r.parse(n)}var s=e.bytes;i&&(s=vl(s)),r.parse(s),r.flush()},n.prototype.updateTimeMapping_=function(t,e,i){var r=t.segment;if(e)if(t.cues.length){var n=t.timestampmap,s=n.MPEGTS/9e4-n.LOCAL+e.mapping;if(t.cues.forEach(function(t){t.startTime+=s,t.endTime+=s}),!i.syncInfo){var a=t.cues[0].startTime,o=t.cues[t.cues.length-1].startTime;i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:Math.min(a,o-r.duration)}}}else r.empty=!0},n}(gl),bl=function(t,e){for(var i=t.cues,r=0;r<i.length;r++){var n=i[r];if(e>=n.adStartTime&&e<=n.adEndTime)return n}return null},Tl=So,Sl=[{name:"VOD",run:function(t,e,i,r,n){if(i!==1/0){return{time:0,segmentIndex:0}}return null}},{name:"ProgramDateTime",run:function(t,e,i,r,n){if(!t.datetimeToDisplayTime)return null;var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.dateTimeObject){var c=l.dateTimeObject.getTime()/1e3+t.datetimeToDisplayTime,h=Math.abs(n-c);if(null!==o&&o<h)break;o=h,a={time:c,segmentIndex:u}}}return a}},{name:"Segment",run:function(t,e,i,r,n){var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.timeline===r&&"undefined"!=typeof l.start){var c=Math.abs(n-l.start);if(null!==o&&o<c)break;(!a||null===o||c<=o)&&(o=c,a={time:l.start,segmentIndex:u})}}return a}},{name:"Discontinuity",run:function(t,e,i,r,n){var s=null;if(n=n||0,e.discontinuityStarts&&e.discontinuityStarts.length)for(var a=null,o=0;o<e.discontinuityStarts.length;o++){var u=e.discontinuityStarts[o],l=e.discontinuitySequence+o+1,c=t.discontinuities[l];if(c){var h=Math.abs(n-c.time);if(null!==a&&a<h)break;(!s||null===a||h<=a)&&(a=h,s={time:c.time,segmentIndex:u})}}return s}},{name:"Playlist",run:function(t,e,i,r,n){return e.syncInfo?{time:e.syncInfo.time,segmentIndex:e.syncInfo.mediaSequence-e.mediaSequence}:null}}],kl=function(e){function i(){y(this,i);var t=b(this,e.call(this));return t.inspectCache_=void 0,t.timelines=[],t.discontinuities=[],t.datetimeToDisplayTime=null,t.logger_=Yu("SyncController"),t}return _(i,e),i.prototype.getSyncPoint=function(t,e,i,r){var n=this.runStrategies_(t,e,i,r);return n.length?this.selectSyncPoint_(n,{key:"time",value:r}):null},i.prototype.getExpiredTime=function(t,e){if(!t||!t.segments)return null;var i=this.runStrategies_(t,e,t.discontinuitySequence,0);if(!i.length)return null;var r=this.selectSyncPoint_(i,{key:"segmentIndex",value:0});return 0<r.segmentIndex&&(r.time*=-1),Math.abs(r.time+Go(t,r.segmentIndex,0))},i.prototype.runStrategies_=function(t,e,i,r){for(var n=[],s=0;s<Sl.length;s++){var a=Sl[s],o=a.run(this,t,e,i,r);o&&(o.strategy=a.name,n.push({strategy:a.name,syncPoint:o}))}return n},i.prototype.selectSyncPoint_=function(t,e){for(var i=t[0].syncPoint,r=Math.abs(t[0].syncPoint[e.key]-e.value),n=t[0].strategy,s=1;s<t.length;s++){var a=Math.abs(t[s].syncPoint[e.key]-e.value);a<r&&(r=a,i=t[s].syncPoint,n=t[s].strategy)}return this.logger_("syncPoint for ["+e.key+": "+e.value+"] chosen with strategy ["+n+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]"),i},i.prototype.saveExpiredSegmentInfo=function(t,e){for(var i=e.mediaSequence-t.mediaSequence-1;0<=i;i--){var r=t.segments[i];if(r&&"undefined"!=typeof r.start){e.syncInfo={mediaSequence:t.mediaSequence+i,time:r.start},this.logger_("playlist refresh sync: [time:"+e.syncInfo.time+", mediaSequence: "+e.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate");break}}},i.prototype.setDateTimeMapping=function(t){if(!this.datetimeToDisplayTime&&t.segments&&t.segments.length&&t.segments[0].dateTimeObject){var e=t.segments[0].dateTimeObject.getTime()/1e3;this.datetimeToDisplayTime=-e}},i.prototype.reset=function(){this.inspectCache_=void 0},i.prototype.probeSegmentInfo=function(t){var e=t.segment,i=t.playlist,r=void 0;return(r=e.map?this.probeMp4Segment_(t):this.probeTsSegment_(t))&&this.calculateSegmentTimeMapping_(t,r)&&(this.saveDiscontinuitySyncInfo_(t),i.syncInfo||(i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:e.start})),r},i.prototype.probeMp4Segment_=function(t){var e=t.segment,i=La(e.map.bytes),r=Pa(i,t.bytes);return null!==t.timestampOffset&&(t.timestampOffset-=r),{start:r,end:r+e.duration}},i.prototype.probeTsSegment_=function(t){var e=Tl(t.bytes,this.inspectCache_),i=void 0,r=void 0;return e?(e.video&&2===e.video.length?(this.inspectCache_=e.video[1].dts,i=e.video[0].dtsTime,r=e.video[1].dtsTime):e.audio&&2===e.audio.length&&(this.inspectCache_=e.audio[1].dts,i=e.audio[0].dtsTime,r=e.audio[1].dtsTime),{start:i,end:r,containsVideo:e.video&&2===e.video.length,containsAudio:e.audio&&2===e.audio.length}):null},i.prototype.timestampOffsetForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].time},i.prototype.mappingForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].mapping},i.prototype.calculateSegmentTimeMapping_=function(t,e){var i=t.segment,r=this.timelines[t.timeline];if(null!==t.timestampOffset)r={time:t.startOfSegment,mapping:t.startOfSegment-e.start},this.timelines[t.timeline]=r,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+t.timeline+": [time: "+r.time+"] [mapping: "+r.mapping+"]"),i.start=t.startOfSegment,i.end=e.end+r.mapping;else{if(!r)return!1;i.start=e.start+r.mapping,i.end=e.end+r.mapping}return!0},i.prototype.saveDiscontinuitySyncInfo_=function(t){var e=t.playlist,i=t.segment;if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0};else if(e.discontinuityStarts&&e.discontinuityStarts.length)for(var r=0;r<e.discontinuityStarts.length;r++){var n=e.discontinuityStarts[r],s=e.discontinuitySequence+r+1,a=n-t.mediaIndex,o=Math.abs(a);if(!this.discontinuities[s]||this.discontinuities[s].accuracy>o){var u=void 0;u=a<0?i.start-Go(e,t.mediaIndex,n):i.end+Go(e,t.mediaIndex+1,n),this.discontinuities[s]={time:u,accuracy:o}}}},i}(As.EventTarget),Cl=new Pu("./decrypter-worker.worker.js",function(t,e){var i,s,h,r,n,d,p,g,a,l,y,o,u=this;i="undefined"!=typeof t?t:"undefined"!=typeof global?global:"undefined"!=typeof u?u:{},s="undefined"!=typeof t?t:"undefined"!=typeof i?i:"undefined"!=typeof u?u:{},h=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},d=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},p=null,g=function(){function c(t){h(this,c),p||(p=d()),this._tables=[[p[0][0].slice(),p[0][1].slice(),p[0][2].slice(),p[0][3].slice(),p[0][4].slice()],[p[1][0].slice(),p[1][1].slice(),p[1][2].slice(),p[1][3].slice(),p[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),a=function(){function t(){h(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),l=function(e){function i(){h(this,i);var t=n(this,e.call(this,a));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(a),y=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},o=function(){function u(t,e,i,r){h(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new l,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([y(s[o-4]),y(s[o-3]),y(s[o-2]),y(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new g(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=y(r[m]),d=y(r[m+1]),p=y(r[m+2]),f=y(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=y(a[m]^o),a[m+1]=y(a[m+1]^u),a[m+2]=y(a[m+2]^l),a[m+3]=y(a[m+3]^c),o=h,u=d,l=p,c=f;return s}(e,i,r);n.set(t,e.byteOffset)}},r(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),new function(t){t.onmessage=function(t){var n=t.data,e=new Uint8Array(n.encrypted.bytes,n.encrypted.byteOffset,n.encrypted.byteLength),i=new Uint32Array(n.key.bytes,n.key.byteOffset,n.key.byteLength/4),r=new Uint32Array(n.iv.bytes,n.iv.byteOffset,n.iv.byteLength/4);new o(e,i,r,function(t,e){var i,r;s.postMessage((i={source:n.source,decrypted:e},r={},Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r),[e.buffer])})}}(u)}),El=function(t,e){t.abort(),t.pause(),e&&e.activePlaylistLoader&&(e.activePlaylistLoader.pause(),e.activePlaylistLoader=null)},wl=function(t,e){(e.activePlaylistLoader=t).load()},Al={AUDIO:function(u,l){return function(){var t=l.segmentLoaders[u],e=l.mediaTypes[u],i=l.blacklistCurrentPlaylist;El(t,e);var r=e.activeTrack(),n=e.activeGroup(),s=(n.filter(function(t){return t.default})[0]||n[0]).id,a=e.tracks[s];if(r!==a){for(var o in As.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),e.tracks)e.tracks[o].enabled=e.tracks[o]===a;e.onTrackChanged()}else i({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(r,n){return function(){var t=n.segmentLoaders[r],e=n.mediaTypes[r];As.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),El(t,e);var i=e.activeTrack();i&&(i.mode="disabled"),e.onTrackChanged()}}},Ll={AUDIO:function(t,e,i){if(e){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},SUBTITLES:function(t,e,i){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t],a=i.mediaTypes[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),s.track(a.activeTrack()),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},Pl=function(e,i){return function(t){return t.attributes[e]===i}},Ol=function(e){return function(t){return t.resolvedUri===e}},xl={AUDIO:function(t,e){var i,r,n=e.hls,s=e.sourceType,a=e.segmentLoaders[t],o=e.requestOptions.withCredentials,u=e.master,l=u.mediaGroups,c=u.playlists,h=e.mediaTypes[t],d=h.groups,p=h.tracks,f=e.masterPlaylistLoader;for(var m in l[t]&&0!==Object.keys(l[t]).length||(l[t]={main:{default:{default:!0}}}),l[t]){d[m]||(d[m]=[]);var g=c.filter(Pl(t,m));for(var y in l[t][m]){var v=l[t][m][y];g.filter(Ol(v.resolvedUri)).length&&delete v.resolvedUri;var _=void 0;if(_=v.resolvedUri?new Vo(v.resolvedUri,n,o):v.playlists&&"dash"===s?new Xu(v.playlists[0],n,o,f):null,v=As.mergeOptions({id:y,playlistLoader:_},v),Ll[t](t,v.playlistLoader,e),d[m].push(v),"undefined"==typeof p[y]){var b=new As.AudioTrack({id:y,kind:(i=v,r=void 0,r=i.default?"main":"alternative",i.characteristics&&0<=i.characteristics.indexOf("public.accessibility.describes-video")&&(r="main-desc"),r),enabled:!1,language:v.language,default:v.default,label:y});p[y]=b}}}a.on("error",Al[t](t,e))},SUBTITLES:function(t,e){var i=e.tech,r=e.hls,n=e.sourceType,s=e.segmentLoaders[t],a=e.requestOptions.withCredentials,o=e.master.mediaGroups,u=e.mediaTypes[t],l=u.groups,c=u.tracks,h=e.masterPlaylistLoader;for(var d in o[t])for(var p in l[d]||(l[d]=[]),o[t][d])if(!o[t][d][p].forced){var f=o[t][d][p],m=void 0;if("hls"===n?m=new Vo(f.resolvedUri,r,a):"dash"===n&&(m=new Xu(f.playlists[0],r,a,h)),f=As.mergeOptions({id:p,playlistLoader:m},f),Ll[t](t,f.playlistLoader,e),l[d].push(f),"undefined"==typeof c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",enabled:!1,language:f.language,label:p},!1).track;c[p]=g}}s.on("error",Al[t](t,e))},"CLOSED-CAPTIONS":function(t,e){var i=e.tech,r=e.master.mediaGroups,n=e.mediaTypes[t],s=n.groups,a=n.tracks;for(var o in r[t])for(var u in s[o]||(s[o]=[]),r[t][o]){var l=r[t][o][u];if(l.instreamId.match(/CC\d/)&&(s[o].push(As.mergeOptions({id:u},l)),"undefined"==typeof a[u])){var c=i.addRemoteTextTrack({id:l.instreamId,kind:"captions",enabled:!1,language:l.language,label:u},!1).track;a[u]=c}}}},Il={AUDIO:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if(t[e].enabled)return t[e];return null}},SUBTITLES:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if("showing"===t[e].mode)return t[e];return null}}},Dl=function(e){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){xl[t](t,e)});var i=e.mediaTypes,t=e.masterPlaylistLoader,r=e.tech,n=e.hls;["AUDIO","SUBTITLES"].forEach(function(t){var s,a,o,u,l,c;i[t].activeGroup=(s=t,a=e,function(e){var t=a.masterPlaylistLoader,i=a.mediaTypes[s].groups,r=t.media();if(!r)return null;var n=null;return r.attributes[s]&&(n=i[r.attributes[s]]),n=n||i.main,"undefined"==typeof e?n:null===e?null:n.filter(function(t){return t.id===e.id})[0]||null}),i[t].activeTrack=Il[t](t,e),i[t].onGroupChanged=(o=t,u=e,function(){var t=u.segmentLoaders,e=t[o],i=t.main,r=u.mediaTypes[o],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(e.resyncLoader(),wl(s.playlistLoader,r)):a&&i.resetEverything())}),i[t].onTrackChanged=(l=t,c=e,function(){var t=c.segmentLoaders,e=t[l],i=t.main,r=c.mediaTypes[l],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(a!==s.playlistLoader&&(e.track&&e.track(n),e.resetEverything()),wl(s.playlistLoader,r)):i.resetEverything())})});var s=i.AUDIO.activeGroup(),a=(s.filter(function(t){return t.default})[0]||s[0]).id;i.AUDIO.tracks[a].enabled=!0,i.AUDIO.onTrackChanged(),t.on("mediachange",function(){["AUDIO","SUBTITLES"].forEach(function(t){return i[t].onGroupChanged()})});var o=function(){i.AUDIO.onTrackChanged(),r.trigger({type:"usage",name:"hls-audio-change"})};for(var u in r.audioTracks().addEventListener("change",o),r.remoteTextTracks().addEventListener("change",i.SUBTITLES.onTrackChanged),n.on("dispose",function(){r.audioTracks().removeEventListener("change",o),r.remoteTextTracks().removeEventListener("change",i.SUBTITLES.onTrackChanged)}),r.clearTracks("audio"),i.AUDIO.tracks)r.audioTracks().addTrack(i.AUDIO.tracks[u])},Rl=function(){var e={};return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){e[t]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:$u,activeTrack:$u,onGroupChanged:$u,onTrackChanged:$u}}),e},Ml=void 0,Ul=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],Nl=function(t){return this.audioSegmentLoader_[t]+this.mainSegmentLoader_[t]},Bl=function(d){function p(t){y(this,p);var e=b(this,d.call(this)),i=t.url,r=t.withCredentials,n=t.tech,s=t.bandwidth,a=t.externHls,o=t.useCueTags,u=t.blacklistDuration,l=t.enableLowInitialPlaylist,c=t.sourceType;if(!i)throw new Error("A non-empty playlist URL is required");Ml=a,e.withCredentials=r,e.tech_=n,e.hls_=n.hls,e.sourceType_=c,e.useCueTags_=o,e.blacklistDuration=u,e.enableLowInitialPlaylist=l,e.useCueTags_&&(e.cueTagsTrack_=e.tech_.addTextTrack("metadata","ad-cues"),e.cueTagsTrack_.inBandMetadataTrackDispatchType=""),e.requestOptions_={withCredentials:e.withCredentials,timeout:null},e.mediaTypes_=Rl(),e.mediaSource=new As.MediaSource,e.mediaSource.addEventListener("sourceopen",e.handleSourceOpen_.bind(e)),e.seekable_=As.createTimeRanges(),e.hasPlayed_=function(){return!1},e.syncController_=new kl(t),e.segmentMetadataTrack_=n.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,e.decrypter_=new Cl;var h={hls:e.hls_,mediaSource:e.mediaSource,currentTime:e.tech_.currentTime.bind(e.tech_),seekable:function(){return e.seekable()},seeking:function(){return e.tech_.seeking()},duration:function(){return e.mediaSource.duration},hasPlayed:function(){return e.hasPlayed_()},goalBufferLength:function(){return e.goalBufferLength()},bandwidth:s,syncController:e.syncController_,decrypter:e.decrypter_,sourceType:e.sourceType_};return e.masterPlaylistLoader_="dash"===e.sourceType_?new Xu(i,e.hls_,e.withCredentials):new Vo(i,e.hls_,e.withCredentials),e.setupMasterPlaylistLoaderListeners_(),e.mainSegmentLoader_=new gl(As.mergeOptions(h,{segmentMetadataTrack:e.segmentMetadataTrack_,loaderType:"main"}),t),e.audioSegmentLoader_=new gl(As.mergeOptions(h,{loaderType:"audio"}),t),e.subtitleSegmentLoader_=new _l(As.mergeOptions(h,{loaderType:"vtt"}),t),e.setupSegmentLoaderListeners_(),Ul.forEach(function(t){e[t+"_"]=Nl.bind(e,t)}),e.logger_=Yu("MPC"),e.masterPlaylistLoader_.load(),e}return _(p,d),p.prototype.setupMasterPlaylistLoaderListeners_=function(){var r=this;this.masterPlaylistLoader_.on("loadedmetadata",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,t.endList&&"none"!==r.tech_.preload()&&(r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load()),Dl({sourceType:r.sourceType_,segmentLoaders:{AUDIO:r.audioSegmentLoader_,SUBTITLES:r.subtitleSegmentLoader_,main:r.mainSegmentLoader_},tech:r.tech_,requestOptions:r.requestOptions_,masterPlaylistLoader:r.masterPlaylistLoader_,hls:r.hls_,master:r.master(),mediaTypes:r.mediaTypes_,blacklistCurrentPlaylist:r.blacklistCurrentPlaylist.bind(r)}),r.triggerPresenceUsage_(r.master(),t);try{r.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create SourceBuffers",t),r.mediaSource.endOfStream("decode")}r.setupFirstPlay(),r.trigger("selectedinitialmedia")}),this.masterPlaylistLoader_.on("loadedplaylist",function(){var t=r.masterPlaylistLoader_.media();if(!t){r.excludeUnsupportedVariants_();var e=void 0;return r.enableLowInitialPlaylist&&(e=r.selectInitialPlaylist()),e||(e=r.selectPlaylist()),r.initialMedia_=e,void r.masterPlaylistLoader_.media(r.initialMedia_)}if(r.useCueTags_&&r.updateAdCues_(t),r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.updateDuration(),r.tech_.paused()||r.mainSegmentLoader_.load(),!t.endList){var i=function(){var t=r.seekable();0!==t.length&&r.mediaSource.addSeekableRange_(t.start(0),t.end(0))};if(r.duration()!==1/0){r.tech_.one("durationchange",function t(){r.duration()===1/0?i():r.tech_.one("durationchange",t)})}else i()}}),this.masterPlaylistLoader_.on("error",function(){r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)}),this.masterPlaylistLoader_.on("mediachanging",function(){r.mainSegmentLoader_.abort(),r.mainSegmentLoader_.pause()}),this.masterPlaylistLoader_.on("mediachange",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load(),r.tech_.trigger({type:"mediachange",bubbles:!0})}),this.masterPlaylistLoader_.on("playlistunchanged",function(){var t=r.masterPlaylistLoader_.media();r.stuckAtPlaylistEnd_(t)&&(r.blacklistCurrentPlaylist({message:"Playlist no longer updating."}),r.tech_.trigger("playliststuck"))}),this.masterPlaylistLoader_.on("renditiondisabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}),this.masterPlaylistLoader_.on("renditionenabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})})},p.prototype.triggerPresenceUsage_=function(t,e){var i=t.mediaGroups||{},r=!0,n=Object.keys(i.AUDIO);for(var s in i.AUDIO)for(var a in i.AUDIO[s]){i.AUDIO[s][a].uri||(r=!1)}r&&this.tech_.trigger({type:"usage",name:"hls-demuxed"}),Object.keys(i.SUBTITLES).length&&this.tech_.trigger({type:"usage",name:"hls-webvtt"}),Ml.Playlist.isAes(e)&&this.tech_.trigger({type:"usage",name:"hls-aes"}),Ml.Playlist.isFmp4(e)&&this.tech_.trigger({type:"usage",name:"hls-fmp4"}),n.length&&1<Object.keys(i.AUDIO[n[0]]).length&&this.tech_.trigger({type:"usage",name:"hls-alternate-audio"}),this.useCueTags_&&this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})},p.prototype.setupSegmentLoaderListeners_=function(){var s=this;this.mainSegmentLoader_.on("bandwidthupdate",function(){var t=s.selectPlaylist(),e=s.masterPlaylistLoader_.media(),i=s.tech_.buffered(),r=i.length?i.end(i.length-1)-s.tech_.currentTime():0,n=s.bufferLowWaterLine();(!e.endList||s.duration()<Qu.MAX_BUFFER_LOW_WATER_LINE||t.attributes.BANDWIDTH<e.attributes.BANDWIDTH||n<=r)&&s.masterPlaylistLoader_.media(t),s.tech_.trigger("bandwidthupdate")}),this.mainSegmentLoader_.on("progress",function(){s.trigger("progress")}),this.mainSegmentLoader_.on("error",function(){s.blacklistCurrentPlaylist(s.mainSegmentLoader_.error())}),this.mainSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("timestampoffset",function(){s.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}),this.audioSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("ended",function(){s.onEndOfStream()}),this.mainSegmentLoader_.on("earlyabort",function(){s.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}),this.mainSegmentLoader_.on("reseteverything",function(){s.tech_.trigger("hls-reset")}),this.mainSegmentLoader_.on("segmenttimemapping",function(t){s.tech_.trigger({type:"hls-segment-time-mapping",mapping:t.mapping})}),this.audioSegmentLoader_.on("ended",function(){s.onEndOfStream()})},p.prototype.mediaSecondsLoaded_=function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)},p.prototype.load=function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()},p.prototype.fastQualityChange_=function(){var t=this.selectPlaylist();t!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(t),this.mainSegmentLoader_.resetLoader())},p.prototype.play=function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0),this.hasPlayed_()&&this.load();var t=this.tech_.seekable();return this.tech_.duration()===1/0&&this.tech_.currentTime()<t.start(0)?this.tech_.setCurrentTime(t.end(t.length-1)):void 0}},p.prototype.setupFirstPlay=function(){var t=this,e=this.masterPlaylistLoader_.media();if(!e||this.tech_.paused()||this.hasPlayed_())return!1;if(!e.endList){var i=this.seekable();if(!i.length)return!1;if(As.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",function(){t.trigger("firstplay"),t.tech_.setCurrentTime(i.end(0)),t.hasPlayed_=function(){return!0}}),!1;this.trigger("firstplay"),this.tech_.setCurrentTime(i.end(0))}return this.hasPlayed_=function(){return!0},this.load(),!0},p.prototype.handleSourceOpen_=function(){try{this.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create Source Buffers",t),this.mediaSource.endOfStream("decode")}if(this.tech_.autoplay()){var t=this.tech_.play();"undefined"!=typeof t&&"function"==typeof t.then&&t.then(null,function(t){})}this.trigger("sourceopen")},p.prototype.onEndOfStream=function(){var t=this.mainSegmentLoader_.ended_;this.mediaTypes_.AUDIO.activePlaylistLoader&&(t=!this.mainSegmentLoader_.startingMedia_||this.mainSegmentLoader_.startingMedia_.containsVideo?t&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_),t&&this.mediaSource.endOfStream()},p.prototype.stuckAtPlaylistEnd_=function(t){if(!this.seekable().length)return!1;var e=this.syncController_.getExpiredTime(t,this.mediaSource.duration);if(null===e)return!1;var i=Ml.Playlist.playlistEnd(t,e),r=this.tech_.currentTime(),n=this.tech_.buffered();if(!n.length)return i-r<=.1;var s=n.end(n.length-1);return s-r<=.1&&i-s<=.1},p.prototype.blacklistCurrentPlaylist=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=void 0;if(r=e.playlist||this.masterPlaylistLoader_.media(),i=i||e.blacklistDuration||this.blacklistDuration,!r){this.error=e;try{return this.mediaSource.endOfStream("network")}catch(t){return this.trigger("error")}}var n=1===this.masterPlaylistLoader_.master.playlists.filter(eu).length;return n?(As.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(n)):(r.excludeUntil=Date.now()+1e3*i,this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"}),t=this.selectPlaylist(),As.log.warn("Problem encountered with the current HLS playlist."+(e.message?" "+e.message:"")+" Switching to another playlist."),this.masterPlaylistLoader_.media(t))},p.prototype.pauseLoading=function(){this.mainSegmentLoader_.pause(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.pause(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.pause()},p.prototype.setCurrentTime=function(t){var e=gu(this.tech_.buffered(),t);return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?e&&e.length?t:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0},p.prototype.duration=function(){return this.masterPlaylistLoader_?this.mediaSource?this.mediaSource.duration:Ml.Playlist.duration(this.masterPlaylistLoader_.media()):0},p.prototype.seekable=function(){return this.seekable_},p.prototype.onSyncInfoUpdate_=function(){var t=void 0,e=void 0;if(this.masterPlaylistLoader_){var i=this.masterPlaylistLoader_.media();if(i){var r=this.syncController_.getExpiredTime(i,this.mediaSource.duration);if(null!==r&&0!==(t=Ml.Playlist.seekable(i,r)).length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(i=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(r=this.syncController_.getExpiredTime(i,this.mediaSource.duration)))return;if(0===(e=Ml.Playlist.seekable(i,r)).length)return}e?e.start(0)>t.end(0)||t.start(0)>e.end(0)?this.seekable_=t:this.seekable_=As.createTimeRanges([[e.start(0)>t.start(0)?e.start(0):t.start(0),e.end(0)<t.end(0)?e.end(0):t.end(0)]]):this.seekable_=t,this.logger_("seekable updated ["+vu(this.seekable_)+"]"),this.tech_.trigger("seekablechanged")}}}},p.prototype.updateDuration=function(){var e=this,t=this.mediaSource.duration,i=Ml.Playlist.duration(this.masterPlaylistLoader_.media()),r=this.tech_.buffered(),n=function t(){e.mediaSource.duration=i,e.tech_.trigger("durationchange"),e.mediaSource.removeEventListener("sourceopen",t)};0<r.length&&(i=Math.max(i,r.end(r.length-1))),t!==i&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",n):n())},p.prototype.dispose=function(){var r=this;this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),["AUDIO","SUBTITLES"].forEach(function(t){var e=r.mediaTypes_[t].groups;for(var i in e)e[i].forEach(function(t){t.playlistLoader&&t.playlistLoader.dispose()})}),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose()},p.prototype.master=function(){return this.masterPlaylistLoader_.master},p.prototype.media=function(){return this.masterPlaylistLoader_.media()||this.initialMedia_},p.prototype.setupSourceBuffers_=function(){var t,e=this.masterPlaylistLoader_.media();if(e&&"open"===this.mediaSource.readyState){if((t=cl(this.masterPlaylistLoader_.master,e)).length<1)return this.error="No compatible SourceBuffer configuration for the variant stream:"+e.resolvedUri,this.mediaSource.endOfStream("decode");this.configureLoaderMimeTypes_(t),this.excludeIncompatibleVariants_(e)}},p.prototype.configureLoaderMimeTypes_=function(t){var e=1<t.length&&-1===t[0].indexOf(",")&&t[0]!==t[1]?new As.EventTarget:null;this.mainSegmentLoader_.mimeType(t[0],e),t[1]&&this.audioSegmentLoader_.mimeType(t[1],e)},p.prototype.excludeUnsupportedVariants_=function(){this.master().playlists.forEach(function(t){t.attributes.CODECS&&g.MediaSource&&g.MediaSource.isTypeSupported&&!g.MediaSource.isTypeSupported('video/mp4; codecs="'+t.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i,function(t){return Nu([t])[0]})+'"')&&(t.excludeUntil=1/0)})},p.prototype.excludeIncompatibleVariants_=function(t){var i=2,r=null,e=void 0;t.attributes.CODECS&&(e=ul(t.attributes.CODECS),r=e.videoCodec,i=e.codecCount),this.master().playlists.forEach(function(t){var e={codecCount:2,videoCodec:null};t.attributes.CODECS&&(e=ul(t.attributes.CODECS)),e.codecCount!==i&&(t.excludeUntil=1/0),e.videoCodec!==r&&(t.excludeUntil=1/0)})},p.prototype.updateAdCues_=function(t){var e=0,i=this.seekable();i.length&&(e=i.start(0)),function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;if(t.segments)for(var r=i,n=void 0,s=0;s<t.segments.length;s++){var a=t.segments[s];if(n||(n=bl(e,r+a.duration/2)),n){if("cueIn"in a){n.endTime=r,n.adEndTime=r,r+=a.duration,n=null;continue}if(r<n.endTime){r+=a.duration;continue}n.endTime+=a.duration}else if("cueOut"in a&&((n=new g.VTTCue(r,r+a.duration,a.cueOut)).adStartTime=r,n.adEndTime=r+parseFloat(a.cueOut),e.addCue(n)),"cueOutCont"in a){var o,u,l=a.cueOutCont.split("/").map(parseFloat);o=l[0],u=l[1],(n=new g.VTTCue(r,r+a.duration,"")).adStartTime=r-o,n.adEndTime=n.adStartTime+u,e.addCue(n)}r+=a.duration}}(t,this.cueTagsTrack_,e)},p.prototype.goalBufferLength=function(){var t=this.tech_.currentTime(),e=Qu.GOAL_BUFFER_LENGTH,i=Qu.GOAL_BUFFER_LENGTH_RATE,r=Math.max(e,Qu.MAX_GOAL_BUFFER_LENGTH);return Math.min(e+t*i,r)},p.prototype.bufferLowWaterLine=function(){var t=this.tech_.currentTime(),e=Qu.BUFFER_LOW_WATER_LINE,i=Qu.BUFFER_LOW_WATER_LINE_RATE,r=Math.max(e,Qu.MAX_BUFFER_LOW_WATER_LINE);return Math.min(e+t*i,r)},p}(As.EventTarget),jl=function t(e,i,r){y(this,t);var n,s,a,o=e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);if(i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION;this.width=u.width,this.height=u.height}this.bandwidth=i.attributes.BANDWIDTH,this.id=r,this.enabled=(n=e.playlists,s=i.uri,a=o,function(t){var e=n.master.playlists[s],i=tu(e),r=eu(e);return"undefined"==typeof t?r:(t?delete e.disabled:e.disabled=!0,t===r||i||(a(),t?n.trigger("renditionenabled"):n.trigger("renditiondisabled")),t)})},Fl=["seeking","seeked","pause","playing","error"],Hl=function(){function a(t){var e=this;y(this,a),this.tech_=t.tech,this.seekable=t.seekable,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=Yu("PlaybackWatcher"),this.logger_("initialize");var i=function(){return e.monitorCurrentTime_()},r=function(){return e.techWaiting_()},n=function(){return e.cancelTimer_()},s=function(){return e.fixesBadSeeks_()};this.tech_.on("seekablechanged",s),this.tech_.on("waiting",r),this.tech_.on(Fl,n),this.tech_.on("canplay",i),this.dispose=function(){e.logger_("dispose"),e.tech_.off("seekablechanged",s),e.tech_.off("waiting",r),e.tech_.off(Fl,n),e.tech_.off("canplay",i),e.checkCurrentTimeTimeout_&&g.clearTimeout(e.checkCurrentTimeTimeout_),e.cancelTimer_()}}return a.prototype.monitorCurrentTime_=function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&g.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=g.setTimeout(this.monitorCurrentTime_.bind(this),250)},a.prototype.checkCurrentTime_=function(){if(this.tech_.seeking()&&this.fixesBadSeeks_())return this.consecutiveUpdates=0,void(this.lastRecordedTime=this.tech_.currentTime());if(!this.tech_.paused()&&!this.tech_.seeking()){var t=this.tech_.currentTime(),e=this.tech_.buffered();if(this.lastRecordedTime===t&&(!e.length||t+.1>=e.end(e.length-1)))return this.techWaiting_();5<=this.consecutiveUpdates&&t===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):t===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=t)}},a.prototype.cancelTimer_=function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null},a.prototype.fixesBadSeeks_=function(){var t=this.tech_.seeking(),e=this.seekable(),i=this.tech_.currentTime(),r=void 0;t&&this.afterSeekableWindow_(e,i)&&(r=e.end(e.length-1));t&&this.beforeSeekableWindow_(e,i)&&(r=e.start(0)+.1);return"undefined"!=typeof r&&(this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+vu(e)+". Seeking to "+r+"."),this.tech_.setCurrentTime(r),!0)},a.prototype.waiting_=function(){if(!this.techWaiting_()){var t=this.tech_.currentTime(),e=this.tech_.buffered(),i=gu(e,t);return i.length&&t+3<=i.end(0)?(this.cancelTimer_(),this.tech_.setCurrentTime(t),this.logger_("Stopped at "+t+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}},a.prototype.techWaiting_=function(){var t=this.seekable(),e=this.tech_.currentTime();if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0;if(this.tech_.seeking()||null!==this.timer_)return!0;if(this.beforeSeekableWindow_(t,e)){var i=t.end(t.length-1);return this.logger_("Fell out of live window at time "+e+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.tech_.setCurrentTime(i),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var r=this.tech_.buffered(),n=yu(r,e);if(this.videoUnderflow_(n,r,e))return this.cancelTimer_(),this.tech_.setCurrentTime(e),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0;if(0<n.length){var s=n.start(0)-e;return this.logger_("Stopped at "+e+", setting timer for "+s+", seeking to "+n.start(0)),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*s,e),!0}return!1},a.prototype.afterSeekableWindow_=function(t,e){return!!t.length&&e>t.end(t.length-1)+.1},a.prototype.beforeSeekableWindow_=function(t,e){return!!(t.length&&0<t.start(0)&&e<t.start(0)-.1)},a.prototype.videoUnderflow_=function(t,e,i){if(0===t.length){var r=this.gapFromVideoUnderflow_(e,i);if(r)return this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+i),!0}return!1},a.prototype.skipTheGap_=function(t){var e=this.tech_.buffered(),i=this.tech_.currentTime(),r=yu(e,i);this.cancelTimer_(),0!==r.length&&i===t&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",t,"nextRange start:",r.start(0)),this.tech_.setCurrentTime(r.start(0)+fu),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))},a.prototype.gapFromVideoUnderflow_=function(t,e){for(var i=function(t){if(t.length<2)return As.createTimeRanges();for(var e=[],i=1;i<t.length;i++){var r=t.end(i-1),n=t.start(i);e.push([r,n])}return As.createTimeRanges(e)}(t),r=0;r<i.length;r++){var n=i.start(r),s=i.end(r);if(e-n<4&&2<e-n)return{start:n,end:s}}return null},a}(),Vl={errorInterval:30,getSource:function(t){return t(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_)}},ql=function(t){!function e(i,t){var r=0,n=0,s=As.mergeOptions(Vl,t);i.ready(function(){i.trigger({type:"usage",name:"hls-error-reload-initialized"})});var a=function(){n&&i.currentTime(n)},o=function(t){null!=t&&(n=i.duration()!==1/0&&i.currentTime()||0,i.one("loadedmetadata",a),i.src(t),i.trigger({type:"usage",name:"hls-error-reload"}),i.play())},u=function(){if(Date.now()-r<1e3*s.errorInterval)i.trigger({type:"usage",name:"hls-error-reload-canceled"});else{if(s.getSource&&"function"==typeof s.getSource)return r=Date.now(),s.getSource.call(i,o);As.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},l=function t(){i.off("loadedmetadata",a),i.off("error",u),i.off("dispose",t)};i.on("error",u),i.on("dispose",l),i.reloadSourceOnError=function(t){l(),e(i,t)}}(this,t)},Wl={PlaylistLoader:Vo,Playlist:nu,Decrypter:Do,AsyncStream:Oo,decrypt:Io,utils:pu,STANDARD_PLAYLIST_SELECTOR:function(){return function(t,e,i,r){var n=t.playlists.map(function(t){var e,i;return e=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width,i=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.height,{bandwidth:t.attributes.BANDWIDTH||g.Number.MAX_VALUE,width:e,height:i,playlist:t}});dl(n,function(t,e){return t.bandwidth-e.bandwidth});var s=(n=n.filter(function(t){return!nu.isIncompatible(t.playlist)})).filter(function(t){return nu.isEnabled(t.playlist)});s.length||(s=n.filter(function(t){return!nu.isDisabled(t.playlist)}));var a=s.filter(function(t){return t.bandwidth*Qu.BANDWIDTH_VARIANCE<e}),o=a[a.length-1],u=a.filter(function(t){return t.bandwidth===o.bandwidth})[0],l=a.filter(function(t){return t.width&&t.height});dl(l,function(t,e){return t.width-e.width});var c=l.filter(function(t){return t.width===i&&t.height===r});o=c[c.length-1];var h=c.filter(function(t){return t.bandwidth===o.bandwidth})[0],d=void 0,p=void 0,f=void 0;h||(p=(d=l.filter(function(t){return t.width>i||t.height>r})).filter(function(t){return t.width===d[0].width&&t.height===d[0].height}),o=p[p.length-1],f=p.filter(function(t){return t.bandwidth===o.bandwidth})[0]);var m=f||h||u||s[0]||n[0];return m?m.playlist:null}(this.playlists.master,this.systemBandwidth,parseInt(hl(this.tech_.el(),"width"),10),parseInt(hl(this.tech_.el(),"height"),10))},INITIAL_PLAYLIST_SELECTOR:function(){var t=this.playlists.master.playlists.filter(nu.isEnabled);return dl(t,function(t,e){return pl(t,e)}),t.filter(function(t){return ul(t.attributes.CODECS).videoCodec})[0]||null},comparePlaylistBandwidth:pl,comparePlaylistResolution:function(t,e){var i=void 0,r=void 0;return t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(i=t.attributes.RESOLUTION.width),i=i||g.Number.MAX_VALUE,e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(r=e.attributes.RESOLUTION.width),i===(r=r||g.Number.MAX_VALUE)&&t.attributes.BANDWIDTH&&e.attributes.BANDWIDTH?t.attributes.BANDWIDTH-e.attributes.BANDWIDTH:i-r},xhr:ou()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach(function(e){Object.defineProperty(Wl,e,{get:function(){return As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),Qu[e]},set:function(t){As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),"number"!=typeof t||t<0?As.log.warn("value of Hls."+e+" must be greater than or equal to 0"):Qu[e]=t}})});var zl=function(t){if(/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t))return"hls";return/^application\/dash\+xml/i.test(t)?"dash":null},Gl=function(t,e){for(var i=e.media(),r=-1,n=0;n<t.length;n++)if(t[n].id===i.uri){r=n;break}t.selectedIndex_=r,t.trigger({selectedIndex:r,type:"change"})};Wl.canPlaySource=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Xl=function(t){if("dash"===t.options_.sourceType){var e=As.players[t.tech_.options_.playerId];if(e.eme){var i=function(t,e,i){if(!t)return t;var r={};for(var n in t)r[n]={audioContentType:'audio/mp4; codecs="'+i.attributes.CODECS+'"',videoContentType:'video/mp4; codecs="'+e.attributes.CODECS+'"'},e.contentProtection&&e.contentProtection[n]&&e.contentProtection[n].pssh&&(r[n].pssh=e.contentProtection[n].pssh),"string"==typeof t[n]&&(r[n].url=t[n]);return As.mergeOptions(t,r)}(t.source_.keySystems,t.playlists.media(),t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());i&&(e.currentSource().keySystems=i)}}};Wl.supportsNativeHls=function(){var e=p.createElement("video");if(!As.getTech("Html5").isSupported())return!1;return["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(t){return/maybe|probably/i.test(e.canPlayType(t))})}(),Wl.supportsNativeDash=!!As.getTech("Html5").isSupported()&&/maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")),Wl.supportsTypeNatively=function(t){return"hls"===t?Wl.supportsNativeHls:"dash"===t&&Wl.supportsNativeDash},Wl.isSupported=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Yl=function(s){function a(t,e,i){y(this,a);var r=b(this,s.call(this,e,i.hls));if(e.options_&&e.options_.playerId){var n=As(e.options_.playerId);n.hasOwnProperty("hls")||Object.defineProperty(n,"hls",{get:function(){return As.log.warn("player.hls is deprecated. Use player.tech_.hls instead."),e.trigger({type:"usage",name:"hls-player-access"}),r}}),n.vhs=r,n.dash=r}if(r.tech_=e,r.source_=t,r.stats={},r.ignoreNextSeekingEvent_=!1,r.setOptions_(),r.options_.overrideNative&&(e.featuresNativeVideoTracks||e.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");return r.on(p,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(t){var e=p.fullscreenElement||p.webkitFullscreenElement||p.mozFullScreenElement||p.msFullscreenElement;e&&e.contains(r.tech_.el())&&r.masterPlaylistController_.fastQualityChange_()}),r.on(r.tech_,"seeking",function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())}),r.on(r.tech_,"error",function(){this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}),r.on(r.tech_,"play",r.play),r}return _(a,s),a.prototype.setOptions_=function(){var e=this;this.options_.withCredentials=this.options_.withCredentials||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=4194304),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&4194304===this.options_.bandwidth,["withCredentials","bandwidth"].forEach(function(t){"undefined"!=typeof e.source_[t]&&(e.options_[t]=e.source_[t])}),this.bandwidth=this.options_.bandwidth},a.prototype.src=function(t,e){var r=this;t&&(this.setOptions_(),this.options_.url=this.source_.src,this.options_.tech=this.tech_,this.options_.externHls=Wl,this.options_.sourceType=zl(e),this.masterPlaylistController_=new Bl(this.options_),this.playbackWatcher_=new Hl(As.mergeOptions(this.options_,{seekable:function(){return r.seekable()}})),this.masterPlaylistController_.on("error",function(){As.players[r.tech_.options_.playerId].error(r.masterPlaylistController_.error)}),this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):Wl.STANDARD_PLAYLIST_SELECTOR.bind(this),this.masterPlaylistController_.selectInitialPlaylist=Wl.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(t){this.masterPlaylistController_.selectPlaylist=t.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=t,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=t,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var t=1/(this.bandwidth||1),e=void 0;return e=0<this.throughput?1/this.throughput:0,Math.floor(1/(t+e))},set:function(){As.log.error('The "systemBandwidth" property is read-only')}}}),Object.defineProperties(this.stats,{bandwidth:{get:function(){return r.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return r.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return r.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return r.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return r.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return r.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return r.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return r.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return _u(r.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return r.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return r.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return r.tech_.name_},enumerable:!0},duration:{get:function(){return r.tech_.duration()},enumerable:!0},master:{get:function(){return r.playlists.master},enumerable:!0},playerDimensions:{get:function(){return r.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return _u(r.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return r.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.masterPlaylistController_.on("selectedinitialmedia",function(){var i,t;t=(i=r).playlists,i.representations=function(){return t.master.playlists.filter(function(t){return!tu(t)}).map(function(t,e){return new jl(i,t,t.uri)})},Xl(r)}),this.on(this.masterPlaylistController_,"progress",function(){this.tech_.trigger("progress")}),this.on(this.masterPlaylistController_,"firstplay",function(){this.ignoreNextSeekingEvent_=!0}),this.tech_.ready(function(){return r.setupQualityLevels_()}),this.tech_.el()&&this.tech_.src(As.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))},a.prototype.setupQualityLevels_=function(){var i=this,t=As.players[this.tech_.options_.playerId];t&&t.qualityLevels&&(this.qualityLevels_=t.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",function(){var e,t;e=i.qualityLevels_,(t=i).representations().forEach(function(t){e.addQualityLevel(t)}),Gl(e,t.playlists)}),this.playlists.on("mediachange",function(){Gl(i.qualityLevels_,i.playlists)}))},a.prototype.play=function(){this.masterPlaylistController_.play()},a.prototype.setCurrentTime=function(t){this.masterPlaylistController_.setCurrentTime(t)},a.prototype.duration=function(){return this.masterPlaylistController_.duration()},a.prototype.seekable=function(){return this.masterPlaylistController_.seekable()},a.prototype.dispose=function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),s.prototype.dispose.call(this)},a}(As.getComponent("Component")),$l={name:"videojs-http-streaming",VERSION:"1.0.0",canHandleSource:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e);return $l.canPlayType(t.type,i)},handleSource:function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=As.mergeOptions(As.options,i);return e.hls=new Yl(t,e,r),e.hls.xhr=ou(),e.hls.src(t.src,t.type),e.hls},canPlayType:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e).hls.overrideNative,r=zl(t);return r&&(!Wl.supportsTypeNatively(r)||i)?"maybe":""}};return"undefined"!=typeof As.MediaSource&&"undefined"!=typeof As.URL||(As.MediaSource=qu,As.URL=Wu),qu.supportsNativeMediaSources()&&As.getTech("Html5").registerSourceHandler($l,0),As.HlsHandler=Yl,As.HlsSourceHandler=$l,As.Hls=Wl,As.use||As.registerComponent("Hls",Wl),As.options.hls=As.options.hls||{},As.registerPlugin?As.registerPlugin("reloadSourceOnError",ql):As.plugin("reloadSourceOnError",ql),As});
uiCore.directive('adnotify', function() {
    return {
        restrict: 'E',
        replace: true,
        require: '^pid',
        scope: {},
        template: '<div><div class="ad-frame" ng-show="compData.JS.isShowAdPage"><div ng-show="compData.JS.isShowVideo" style="width:100%;height:100%;"><video id="et-player" class="video-js vjs-default-skin vjs-big-play-centered"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p></video><div ng-style="compData.JS.videocloseBtn" ng-click="closeClick();$event.preventDefault();$event.stopPropagation();"></div></div><div ng-show="compData.JS.isShowImage" style="width:100%;height:100%;"><div class="ad-frame-header" ng-style="compData.JS.adHeader"><tbbutton cid="adCloseBtn" param="compData.JS.adCloseBtn"></tbbutton></div><div class="ad-frame-body" ng-style="compData.JS.adBody"><a ng-click="picClick();$event.preventDefault();$event.stopPropagation();"><img id="adshowimage" ng-src="{{src}}" ng-style="compData.JS.adImageConfig"></img></a><img id="adloadimage" ng-src="{{loadsrc}}" ng-style="compData.JS.loadimage"></img></div><div class="ad-frame-footer" ng-style="compData.JS.adFooter"><div ng-style="compData.JS.adBtn" ng-click="adClick();$event.preventDefault();$event.stopPropagation();"><div ng-style="compData.JS.adBtnText" ng-bind="compData.JS.subBtnText"></div></div></div></div></div><div class="ad-frame" ng-show="compData.JS.isShowCategoryPage"><div class="ad-frame-header" ng-style="compData.JS.categoryHeader"><div ng-style="compData.JS.categoryTitle" ng-bind="categoryTitle"></div><tbbutton cid="categoryCloseBtn" param="compData.JS.categoryCloseBtn"></tbbutton><div ng-style="compData.JS.backBtn" ng-click="categoryBackClick();$event.preventDefault();$event.stopPropagation();"></div></div><div class="ad-frame-body flex-col" ng-style="compData.JS.categoryBody"><div style="margin: auto 0;"><div ng-repeat="data in categoryInfo"><div ng-style="compData.JS.categoryContainer"><div ng-style="compData.JS.categoryName"><div ng-style="compData.JS.categoryNameText">{{data.displayName}}</div></div><div ng-style="compData.JS.categoryBtn" ng-click="categoryClick(data);$event.preventDefault();$event.stopPropagation();"><div ng-style="compData.JS.categoryBtnText" ng-bind="compData.JS.selectBtnText"></div></div></div></div></div></div></div><div class="ad-frame" ng-show="compData.JS.isShowPackagePage"><div class="ad-frame-header" ng-style="compData.JS.pkgHeader"><div ng-style="compData.JS.pkgTitle" ng-bind="packageTitle"></div><tbbutton cid="pkgCloseBtn" param="compData.JS.pkgCloseBtn"></tbbutton><div ng-style="compData.JS.backBtn" ng-click="pkgBackClick();$event.preventDefault();$event.stopPropagation();"></div></div><div class="ad-frame-body pkgbody flex-col" ng-style="compData.JS.pkgBody"><div style="margin: auto 0;"><div ng-repeat="data in packageInfo"><div ng-style="compData.JS.pkgContainer"><div ng-style="compData.JS.pkgName"><div ng-style="compData.JS.pkgNameText">{{data.displayName}}</div></div><div ng-style="compData.JS.pkgBtn" ng-click="pkgClick(data);$event.preventDefault();$event.stopPropagation();"><div ng-style="compData.JS.pkgBtnText" ng-bind="compData.JS.buyBtnText"></div></div></div></div></div></div><div class="adscrollbar" ng-style="compData.JS.adscrollbar"><div class="adscrolltrack" ng-style="compData.JS.adscrolltrack"></div></div></div><div class="ad-frame" ng-show="compData.JS.isShowConfirmPage"><div class="ad-frame-header" ng-style="compData.JS.confirmHeader"><div ng-style="compData.JS.confirmTitle" ng-bind="confirmTitle"></div><div ng-style="compData.JS.closeBtn" ng-click="closeClick();$event.preventDefault();$event.stopPropagation();"></div><div ng-style="compData.JS.backBtn" ng-click="confirmBackClick();$event.preventDefault();$event.stopPropagation();"></div></div><div class="ad-frame-body" ng-style="compData.JS.confirmBody"><p class="rtlstyle" ng-style="compData.JS.confirmMsg" ng-bind="confirmMsg"></p></div><div class="ad-frame-footer" ng-style="compData.JS.confirmFooter"><div ng-style="compData.JS.confirmBtn" ng-click="confirmClick();$event.preventDefault();$event.stopPropagation();"><div ng-style="compData.JS.confirmBtnText" ng-bind="compData.JS.confirmText"></div></div></div><div class="loadingcover" ng-style="compData.JS.loading"></div></div><div class="ad-frame" ng-show="compData.JS.isShowResultPage"><div class="ad-frame-header" ng-style="compData.JS.resultHeader"><div ng-style="compData.JS.resultTitle" ng-bind="resultTitle"></div><div ng-style="compData.JS.backBtn" ng-click="resultBackClick();$event.preventDefault();$event.stopPropagation();"></div></div><div class="ad-frame-body" ng-style="compData.JS.resultBody"><p class="rtlstyle" ng-style="compData.JS.resultMsg" ng-bind="resultMsg"></p></div><div class="ad-frame-footer" ng-style="compData.JS.resultFooter"><div ng-style="compData.JS.okBtn" ng-click="okClick();$event.preventDefault();$event.stopPropagation();"><div ng-style="compData.JS.okBtnText" ng-bind="compData.JS.resultBtnText"></div></div></div></div></div>',
        controller: [
			'$scope',
			'$element',
			'$attrs',
			'coreService',
			'$timeout',
			'$http',
			'coreUtils',
			'Const',
			function($scope, $element, $attrs, coreService, $timeout, $http, coreUtils, Const) {
				$scope.cid = $attrs.cid;
				$scope.compData = {
					CSS: {
						'display': 'none',
						'z-index': '2147483647'
					},
					JS: {
						path: 'html/www/resources/config/',
						videoPath: 'html/www/resources/videos/',
						
						confirmContent: 'You have chosen the {0} for {1}. Please press confirm to proceed.',
						successMsg: 'Your request to purchase bundle {0} for {1} is under processing, you will receive SMS shortly.',
						failedMsg: 'Apologies, your request is currently not working. You may try later.',
						
						subBtnText: 'Subscribe',
						selectBtnText: 'Select',
						buyBtnText: 'Buy',
						confirmText: 'Confirm',
						resultBtnText: 'OK',
						timeout: '10',
						
						hasCountdown: true,
						videoCountdown: '20',
						
						isShowAdPage: false,
						isShowImage: false,
						isShowVideo: false,
						isShowCategoryPage: false,
						isShowPackagePage: false,
						isShowConfirmPage: false,
						isShowResultPage: false,
						
						loadimage: {
							'width': '1em',
							'height': '1em',
							"display": "block",
							"position": "absolute",
							"left": "50%",
							"top": "50%",
							"margin-left": "-0.5em",
							"margin-top": "-0.5em"
						},
						
						adHeader: {
							'height': '0',
							'border': '0'
						},
						adBody: {
							'width': '100%',
							'height': '100%',
							'margin': '0'
						},
						adFooter: {
                                                        'display': 'none',
							'position': 'absolute',
							'bottom': '0',
							'height': '1.4em'
						},
						adImageConfig: {
							'width': '100%',
							'height': '100%',
							"display": "none"
						},
						adBtn: {
							'display': 'none',
							'width': '2.8em',
							'height': '1em',
							'line-height': '1.05em',
							'color': '#fff',
							'text-align': 'center',
							'background-color': '#9dc35c',
							'border-radius': '0.5em',
							'box-shadow': '0px 2px 4px #767676',
							'margin': '0 auto',
							'cursor': 'pointer'
						},
						adBtnText: {
							'font-size': '0.5em',
							'line-height': 'inherit',
							'text-align': 'center',
							'overflow': 'hidden'
						},
						
						categoryHeader: {},
						categoryTitle: {
							'font-size': '0.7em',
							'line-height': 'inherit',
							'text-align': 'center'
						},
						categoryBody: {},
						categoryContainer: {
							'height': '3.35em',
							'border-bottom': '1px solid #fff',
						},
						categoryName: {
							'color': '#2b2b2b',
							'width': '65%',
							'height': '3.35em',
							'line-height': '3.35em',
							'float': 'left',
							'text-align': 'center',
							'text-indent': '0.5em'
						},
						categoryNameText: {
							'font-size': '0.55em',
							'font-weight': 'bold',
							'line-height': 'inherit',
							'overflow': 'hidden',
							'text-align': 'center',
							'text-overflow': 'ellipsis',
							'white-space': 'nowarp'
						},
						categoryBtn: {
							'width': '2.2em',
						    'height': '3.35em',
						    'text-align': 'center',
						    'line-height': '3.35em',
						    'color': '#fff',
						    'float': 'left',
						    'cursor': 'pointer',
						    'background-image': "url('" + top.tlbs.templatePath + "/images/adbuy_dark.png?V=1')",
						    'background-repeat': 'no-repeat',
						    'background-size': 'contain',
						    'background-position': 'center'
						},
						categoryBtnText: {
							'font-size': '0.5em',
							'line-height': 'inherit',
							'overflow': 'hidden',
							'text-align': 'center',
							'text-overflow': 'ellipsis',
							'white-space': 'nowrap'
						},
						
						pkgHeader: {},
						pkgTitle: {
							'font-size': '0.7em',
							'line-height': 'inherit',
							'text-align': 'center'
						},
						pkgBody: {
							'width': '10.7em',
							'height': '6.1em',
							'padding': '0.3em 0.3em 0.3em 0'
						},
						pkgContainer: {
							'height': '1.5em'
						},
						pkgName: {
							'color': '#2b2b2b',
							'width': '73%',
							'min-height': '1.3em',
							'border-bottom': '1px solid #fff',
							'float': 'left',
							'padding-left': '0.5em',
							'display' : '-webkit-box',
							'display' : '-moz-box',
							'display' : '-ms-flexbox',
							'display' : '-webkit-flex',
							'display' : 'flex',
							'align-items': 'center'
						},
						pkgNameText: {
							'font-size': '0.5em',
							'font-weight': 'bold',
							'line-height': 'inherit',
							'overflow': 'hidden',
							'text-align': 'left'
						},
						pkgBtn: {
							'width': '20%',
						    'height': '1.2em',
						    'text-align': 'center',
						    'line-height': '1.2em',
						    'color': '#fff',
						    'float': 'left',
						    'cursor': 'pointer',
						    'background-image': "url('" + top.tlbs.templatePath + "/images/adbuy_dark.png?V=1')",
						    'background-repeat': 'no-repeat',
						    'background-size': 'contain',
						    'background-position': 'center'
						},
						pkgBtnText: {
						    'font-size': '0.5em',
						    'line-height': 'inherit',
						    'text-align': 'center',
						    'overflow': 'hidden'
						},
						loading: {
							'display': 'none',
							'width': '11em',
							'height': '6.7em',
							'position': 'relative',
							'top': '-6.7em',
							'background-color': 'rgba(0, 0, 0, 0.2)',
							'background-image': "url('" + top.tlbs.templatePath + "/images/loading.gif?V=1')",
							'background-size': 'initial',
							'background-repeat': 'no-repeat',
							'background-position': 'center',
							'overflow': 'hidden',
							'z-index': '100'
						},
						adscrollbar: {
							'position': 'absolute',
					    	'top': '2.5em',
					    	'right': '0',
					    	'z-index': '10',
					    	'height': '5em',
					    	'width': '0.2em',
					    	'border-left': '2px solid #fff',
						},
						adscrolltrack: {
							'width': '8px',
					    	'height': '1em',
					    	'background-color': '#fff',
					    	'left': '-5px',
					    	'position': 'absolute',
					    	'top': '0',
						},
						confirmHeader: {},
						confirmTitle: {
							'font-size': '0.7em',
							'line-height': 'inherit',
							'text-align': 'center'
						},
						confirmBody: {
							'width': '10em',
							'height': '4.1em',
							'padding': '0.5em'
						},
						confirmMsg: {
							'color': '#2b2b2b',
							'font-size': '0.7em',
							'font-weight': 'bold',
							'text-align': 'center'
						},
						confirmFooter: {
							'height': '1.6em',
							'background-color': '#d7eabc',
							'text-align': 'center'
						},
						confirmBtn: {
							'width': '2.5em',
							'height': '1.2em',
							'line-height': '1.2em',
							'color': '#fff',
							'border-radius': '0.5em',
							'display': 'inline-block',
							'cursor': 'pointer',
							'background-image': "url('" + top.tlbs.templatePath + "/images/adbuy_dark.png?V=1')",
						    'background-repeat': 'no-repeat',
						    'background-size': 'contain',
						    'background-position': 'center'
						},
						confirmBtnText: {
							'font-size': '0.4em',
							'line-height': 'inherit',
							'text-align': 'center',
							'overflow': 'hidden'
						},
						resultTitleText: 'Confirmation',
						resultHeader: {},
						resultTitle: {
							'font-size': '0.7em',
							'line-height': 'inherit',
							'text-align': 'center'
						},
						resultBody: {
							'width': '10em',
							'height': '4.1em',
							'padding': '0.5em'
						},
						resultMsg: {
							'color': '#2b2b2b',
							'font-size': '0.7em',
							'font-weight': 'bold',
							'text-align': 'center'
						},
						resultFooter: {
							'height': '1.6em',
							'background-color': '#d7eabc',
							'text-align': 'center'
						},
						okBtn: {
							'width': '2.5em',
							'height': '1.2em',
							'line-height': '1.2em',
							'color': '#fff',
							'border-radius': '0.5em',
							'display': 'inline-block',
							'cursor': 'pointer',
							'background-image': "url('" + top.tlbs.templatePath + "/images/adbuy_dark.png?V=1')",
						    'background-repeat': 'no-repeat',
						    'background-size': 'contain',
						    'background-position': 'center'
						},
						okBtnText: {
							'font-size': '0.55em',
							'line-height': 'inherit',
							'text-align': 'center',
							'overflow': 'hidden'
						},
						
						adCloseBtn: {
							CSS: {
								'width': '1em',
								'height': '1em',
								
								'position': 'absolute',
								'top': '0',
								'right': '0',
								'margin': '0.2em',
								'border-radius': '0',
								'background-color': 'transparent',
								"background-image" : "url('" + top.tlbs.templatePath + "/images/close_ad.png')",
								"background-position" : "center",
								"background-repeat" : "no-repeat",
								"background-size" : "cover"
							},
							JS: {}
						},
						categoryCloseBtn: {
							CSS: {
								'width': '0.7em',
								'height': '0.7em',
								
								'position': 'absolute',
								'top': '0',
								'right': '0',
								'margin': '0.25em',
								'border-radius': '0',
								'background-color': 'transparent',
								"background-image" : "url('" + top.tlbs.templatePath + "/images/adclose.png')",
								"background-position" : "center",
								"background-repeat" : "no-repeat",
								"background-size" : "cover"
							},
							JS: {}
						},
						pkgCloseBtn: {
							CSS: {
								'width': '0.7em',
								'height': '0.7em',
								
								'position': 'absolute',
								'top': '0',
								'right': '0',
								'margin': '0.25em',
								'border-radius': '0',
								'background-color': 'transparent',
								"background-image" : "url('" + top.tlbs.templatePath + "/images/adclose.png')",
								"background-position" : "center",
								"background-repeat" : "no-repeat",
								"background-size" : "cover"
							},
							JS: {}
						},
						closeBtn: {
							'width': '0.7em',
							'height': '0.7em',
							
							'position': 'absolute',
							'top': '0',
							'right': '0',
							'margin': '0.25em',
							'border-radius': '0',
							'cursor': 'pointer',
							'background-color': 'transparent',
							"background-image" : "url('" + top.tlbs.templatePath + "/images/adclose.png')",
							"background-position" : "center",
							"background-repeat" : "no-repeat",
							"background-size" : "cover"
						},
						backBtn: {
							'width': '1.2em',
							'height': '1.2em',
							
							'position': 'absolute',
							'top': '0',
							'left': '0',
							'border-radius': '0',
							'cursor': 'pointer',
							'background-color': 'transparent',
							"background-image" : "url('" + top.tlbs.templatePath + "/images/adbackbtn.png')",
							"background-position" : "center",
							"background-repeat" : "no-repeat",
							"background-size" : "cover"
						},
						videocloseBtn: {
							'width': '0.7em',
							'height': '0.7em',
							
							'position': 'absolute',
							'top': '0',
							'right': '0',
							'margin': '0.15em',
							'border-radius': '1px',
							'cursor': 'pointer',
//							'background-color': '#729c23',
							"background-image" : "url('" + top.tlbs.templatePath + "/images/adclose.png')",
							"background-position" : "center",
							"background-repeat" : "no-repeat",
							"background-size" : "cover",
							"z-index": "1"
						}
					}
				};
				
				/*
				 * 全局值
				 */
				var jsonurl = '';
				var hasOffer = false;
				var jsonData = null;
				
				$scope.src = '';
				$scope.loadsrc = "" + top.tlbs.templatePath + "/images/loading.gif";
				
				/*
				 * 一些参数取值
				 */
				var jsProp = $scope.compData.JS;
				var lang = top.tlbs.languageID;
				
				var pkgbody = $element[0].querySelector('.pkgbody');
				var scroll = $element[0].querySelector('.adscrollbar');
				var track = $element[0].querySelector('.adscrolltrack');
				
				var apkgbody = angular.element($element[0].querySelector('.pkgbody'));
				var adscroll = angular.element($element[0].querySelector('.adscrollbar'));
				var adtrack = angular.element($element[0].querySelector('.adscrolltrack'));
				
				/*
				 * 公用逻辑和方法
				 */
				function getStyleObj(obj) {
					return obj.currentStyle != null ? obj.currentStyle : getComputedStyle(obj, false);
				};

				function show() {
					$element.css('display', 'block');
				};
				
				function hide() {
					$element.css('display', 'none');
				};
				
				// click cdr
				function clickTracing(cid, name, flag){
					var cdrConfig = {
                        'cdrType': 'uitracingcdr',
                        'enable': true,
                        'storeData': true
                    };
                    $scope.compData.JS.cdrData = {
                        'pageId': $scope.pageID,
                        'componentId': cid || '',
                        'sername': name || '',
                        'serflag': '4',
                        'iseComp': '1'
                    };
                    coreUtils.cdrService(cdrConfig, $scope.compData.JS.cdrData);
				};
				// auto hide
				function startAutoHide(){
					if ($scope.timeout) {
                		$timeout.cancel($scope.timeout);
                	}
					if (jsProp.timeout) {
						$scope.timeout = $timeout(function() {
							$element.css('display', 'none');
						}, jsProp.timeout * 1000);
					}
				};
				function stopAutoHide() {
					if ($scope.timeout) {
                		$timeout.cancel($scope.timeout);
                	}
				};
				
				//滚动条初始化
				function initScroll() {
					$timeout(function() {
						pkgbody.scrollTop = 0;
						adtrack.css('top', 0);
						var scrollHeight = pkgbody.scrollHeight;
						var clientHeight = pkgbody.clientHeight;
						
						if (clientHeight === scrollHeight) {
							adscroll.css('display', 'none');
						}else {
							adscroll.css('display', 'block');
						}
					}, 0);
				};
				
				//请求json和加载视频
				var scriptEle = null;
				function jsonRequest(jsonName) {
					scriptEle = document.createElement('script');
					scriptEle.type = 'text/javascript';
					scriptEle.charset = 'utf-8';
					scriptEle.src = top.tlbs.toolbarURL + jsProp.path + jsonName + '?' + (new Date()).getTime();
					top.document.getElementsByTagName("head")[0].appendChild(scriptEle);
				};
				top.tlbs.__adcallback = function(data){
					jsProp.adBtn.display = 'block';
					hasOffer = true;
					
					jsonData = data;
					top.document.getElementsByTagName("head")[0].removeChild(scriptEle);
				};
				
				function loadVideo(videoName) {
					var etplayer = angular.element($element[0].querySelector('#et-player'));
					etplayer.ready(function(){
						var player = videojs(top.document.getElementById('et-player'), {
							"preload": "auto",
							"controls": "true",
							"autoplay": "true",
							"muted": "true",
							"control": {
								"captionsButton": false,
						        "chaptersButton": false,
						        "liveDisplay": false,
						        "playbackRateMenuButton": false,
						        "subtitlesButton": false
							},
							"sources": [{
								"src": top.tlbs.toolbarURL + jsProp.videoPath + videoName + '.mp4',
								"type": "video/mp4"
							},{
								"src": top.tlbs.toolbarURL + jsProp.videoPath + videoName + '.ogg',
								"type": "video/ogg"
							}]
						}, 
						function(){
				            var subBtn = document.createElement('button');
				            subBtn.className = 'subBtn';
				            subBtn.innerText = jsProp.subBtnText || 'Subscribe';
				            subBtn.onclick = function() {
				            	$scope.adClick();
				            	player.pause();
				            };
				            hasOffer && (subBtn.style.display = 'block');
			            
				            var videoContainer = $element[0].querySelector('#et-player');
				            videoContainer.appendChild(subBtn);

				            var interval = null;
				            var playBtn = $element[0].querySelector('.vjs-big-play-button');
				            playBtn.onclick = function() {
				            	player.play();
				            };
				            
				            this.on('play',function() {
				            	stopAutoHide();
//				            	hasOffer && (subBtn.style.display = 'none');
				            	subBtn.className = 'subBtn';
				            	var currentPlaybtn = $element[0].querySelector('.vjs-big-play-button');
				            	clearInterval($scope.adinterval);
				            	var clone = playBtn.cloneNode(true);
				            	clone.onclick = playBtn.onclick;
				            	currentPlaybtn.parentNode.replaceChild(clone, currentPlaybtn);

				            });
							//暂停--播放完毕后也会暂停
							this.on('pause',function(){
								subBtn.className = 'subBtn';
//								hasOffer && (subBtn.style.display = 'block');
							});

							// 结束
							this.on('ended', function() {
								subBtn.className = 'subBtn1';
//								hasOffer && (subBtn.style.display = 'block');
								var currentPlaybtn = $element[0].querySelector('.vjs-big-play-button');
								var start = jsProp.videoCountdown || '20';
								currentPlaybtn.innerHTML = '';
								var span = document.createElement('span');
								span.setAttribute('id', 'ad-replay');
								span.style.backgroundImage = "url('" + top.tlbs.templatePath + "/images/adcycle.png?V=1')";
								currentPlaybtn.appendChild(span);
								if (jsProp.hasCountdown) {
									span.innerText = start;
									$scope.adinterval = setInterval(function() {
										start--;
									    if (start == 0) {
									    	player.isFullscreen() && player.exitFullscreen();
									    	hide();
									        clearInterval($scope.adinterval);
									        start = jsProp.videoCountdown || '20';
									        span.innerText = start;
									        return;
									    }
									        span.innerText = start;
									    }, 1000)
								}
								}
							);
						}
					);
					})
					
					
				};
				
				/*
				 * 页面逻辑
				 */
				// 判断广告提醒的类型（文字还是图片）
				var checkAdtype = function(resp) {
					if(resp.campaign && resp.campaign.contentType) {
						var contentType = resp.campaign.contentType;
						if (contentType === '0') {
							coreService.fireEvent($element.attr('cid'), 'adtext', resp);
						}
						if (contentType === '1' || contentType === '2') {
							coreService.fireEvent($element.attr('cid'), 'adimage', resp);
						}
					}
				};
				//页面初始化
				var initPage = function(resp) {
					if (resp.campaign) {
						$scope.src = resp.campaign.image || '';
						jsonurl = resp.campaign.clickUrl || '';
						
						var index = jsonurl.lastIndexOf('/');
						var param = jsonurl.substring(index + 1, jsonurl.length);
						var params = param.split('|');
						var out = {};
						for (var i = 0, len = params.length; i < len; i++) {
							var arr = params[i].split('=');
							out[arr[0]] = arr[1];
						}
						
						if (out.json && out.json.slice(-5) == '.json') {
							jsonRequest(out.json);
						}
						
						if (out.video) {
							loadVideo(out.video);
							
							jsProp.isShowAdPage = true;
							jsProp.isShowImage = false;
							jsProp.isShowVideo = true;
							jsProp.isShowCategoryPage = false;
							jsProp.isShowPackagePage = false;
							jsProp.isShowConfirmPage = false;
							jsProp.isShowResultPage = false;
						}else {
							$scope.adshowimage.css({
								'display': 'none'
							});
							$scope.adloadimage.css({
								'display': 'display'
							});
							
							jsProp.isShowAdPage = true;
							jsProp.isShowImage = true;
							jsProp.isShowVideo = false;
							jsProp.isShowCategoryPage = false;
							jsProp.isShowPackagePage = false;
							jsProp.isShowConfirmPage = false;
							jsProp.isShowResultPage = false;
						}
					}
				};
				
				//confirm页面的关闭按钮点击
				$scope.closeClick = function() {
					clickTracing('confirmCloseBtn');
					$element.css('display', 'none');
				};
				//结果页面的ok按钮点击
				$scope.okClick = function() {
					clickTracing('adOkBtn');
					$element.css('display', 'none');
				};
				
				//图片的点击方法
				$scope.picClick = function() {
					if (jsonurl === '') {
						return;
					}
					if (hasOffer) {
						$scope.adClick();
						return;
					}
					clickTracing('externalLink');
					window.open(jsonurl);
				};
				//图片上的按钮点击方法
				$scope.adClick = function() {
					stopAutoHide();
					clickTracing('adSubscribeBtn');
					if ($scope.adinterval) {
						clearInterval($scope.adinterval);
					}
					
					if (jsonData) {
						var info = jsonData.offer_list || [];
						for (var i = 0, ilen = info.length; i < ilen; i++) {
							if (info[i]) {
								info[i].displayName = info[i].offer_name[lang];
							}
						}
						
						if (jsonData.isPackage) {
							$scope.packageTitle = jsonData.title && jsonData.title[lang] || '';
							$scope.packageInfo = info;
							if (Array.isArray(info) && info.length > 0) {
								$scope.pagestate = '1';
								jsProp.isShowAdPage = false;
								jsProp.isShowPackagePage = true;
								
								initScroll();
							}
						}else {
							$scope.categoryTitle = jsonData.title && jsonData.title[lang] || '';
							$scope.categoryInfo = info;
							if (Array.isArray(info) && info.length > 0) {
								$scope.pagestate = '0';
								jsProp.isShowAdPage = false;
								jsProp.isShowCategoryPage = true;
							}
						}
					}
				};
				//类别页面的按钮点击
				$scope.categoryClick = function(data) {
					clickTracing('adSelectBtn', data.displayName);
					
					var nextList = data.next_window;
					if (nextList) {
						$scope.packageTitle = nextList.title && nextList.title[lang] || '';
						
						var info = nextList.offer_list || [];
						for (var i = 0, ilen = info.length; i < ilen; i++) {
							if (info[i]) {
								info[i].displayName = info[i].offer_name[lang];
							}
						}
						$scope.packageInfo = info;
						if (Array.isArray(info) && info.length > 0) {
							jsProp.isShowCategoryPage = false;
							jsProp.isShowPackagePage = true;
							
							initScroll();
						}
					}
				};
				//套餐页面的按钮点击
				var pkgInfo = null;
				var pkgTemp = [];
				$scope.pkgClick = function(data) {
					clickTracing('adBuyBtn', data.displayName);
					
					if(data.offer_list && data.offer_list.length > 0) {
						var info = data.offer_list;
						for (var i = 0, ilen = info.length; i < ilen; i++) {
							if (info[i]) {
								info[i].displayName = info[i].offer_name[lang];
							}
						}
						pkgTemp.push($scope.packageInfo);
						$scope.packageInfo = info;
						initScroll();
						return;
					}
					
					pkgInfo = {
						id: data.offer_id || '',
						name: data.name && data.name[lang] || '',
						price: data.price || '',
						size: data.size || '',
						parentName: data.parentName && data.parentName[lang] || ''
					};
					
                    var template = data.confirmMsg && data.confirmMsg[lang] || jsProp.confirmContent;
                    var msgParam = [pkgInfo.name, pkgInfo.price, pkgInfo.size, pkgInfo.parentName];
                    if (template) {
                    	$scope.confirmMsg = template.replace(/\{[0-9]\}/g, function(s, i, str) {
                            var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
                            return '"' + msgParam[index] + '"';
                        });
                        $scope.confirmTitle = jsProp.resultTitleText;
                        jsProp.isShowPackagePage = false;
    					jsProp.isShowConfirmPage = true;
                    }
				};
				//confirm页面的按钮点击
				$scope.confirmClick = function() {
					clickTracing('adConfirmBtn', pkgInfo.name);
					var loadingdiv = angular.element($element[0].querySelector('.loadingcover'));
					loadingdiv.css('display', 'block');
					coreUtils.sendRequest('adpkgsubcdr',{
						'pageId': $scope.pageID,
						'CategoryId': '',
						'packageId': pkgInfo.id
					}, successAction, failedAction);
					
					function failedAction() {
						$scope.resultMsg = jsProp.failedMsg;
						$scope.resultTitle = jsProp.resultTitleText;
						loadingdiv.css('display', 'none');
						jsProp.isShowConfirmPage = false;
						jsProp.isShowResultPage = true;
					};
					function successAction(d, s, h) {
						if(d.respparam && d.respparam.AdPkgSubResult && d.respparam.AdPkgSubResult == 'ERR-00-00') {
	                        var template = jsProp.successMsg;
	                        var msgParam = [pkgInfo.name, pkgInfo.price, pkgInfo.size, pkgInfo.parentName];
	                        $scope.resultMsg = template.replace(/\{[0-9]\}/g, function(s, i, str) {
	                            var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
	                            return '"' + msgParam[index] + '"';
	                        });
	                        $scope.resultTitle = jsProp.resultTitleText;
	                        loadingdiv.css('display', 'none');
							jsProp.isShowConfirmPage = false;
							jsProp.isShowResultPage = true;
							
							//5s后发送提醒请求
							$timeout(function() {
								var notificationsChain = {
	                                on: 'notifications'
	                            };
	                            coreService.commonServiceRef.remoteService(notificationsChain, {});
							}, 5000);
						}else {
							failedAction();
						}
					};
				};
				
				/*
				 * 各个页面的返回点击
				 */
				$scope.categoryBackClick = function() {
					clickTracing('categoryBackBtn');
					jsProp.isShowCategoryPage = false;
					jsProp.isShowAdPage = true;
				};
				$scope.pkgBackClick = function() {
					clickTracing('packageBackBtn');
					adscroll.css('display', 'none');
					
					if (pkgTemp.length > 0) {
						var info = pkgTemp.pop();
						$scope.packageInfo = info;
						initScroll();
						return;
					}
					
					if ($scope.pagestate === '0') {
						jsProp.isShowPackagePage = false;
						jsProp.isShowCategoryPage = true;
					}
					if ($scope.pagestate === '1') {
						jsProp.isShowPackagePage = false;
						jsProp.isShowAdPage = true;
					}
				};
				$scope.confirmBackClick = function() {
					clickTracing('confirmBackBtn');
					jsProp.isShowConfirmPage = false;
					jsProp.isShowPackagePage = true;
				};
				$scope.resultBackClick = function() {
					clickTracing('resultBackBtn');
					jsProp.isShowResultPage = false;
					jsProp.isShowConfirmPage = true;
				};
				
				$scope.eventMap = {};
				$scope.eventMap['initPage'] = initPage;
				$scope.eventMap['show'] = show;
				$scope.eventMap['hide'] = hide;
				$scope.eventMap['startAutoHide'] = startAutoHide;
				$scope.eventMap['stopAutoHide'] = stopAutoHide;
				$scope.eventMap['checkAdtype'] = checkAdtype;
				$scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                    $scope.eventMap[cevent](args);
                    if (null != deferred) {
                        deferred.resolve();
                    }
                });
				
				$scope.init = function() {
					coreService.registerComponentInstance($element.attr('cid'), $scope);
					$scope.compData = coreUtils.extendDeep($scope.compData, coreService.getInitProperties($scope.cid));
					$element.css($scope.compData.CSS);
					
					$scope.adshowimage = angular.element($element[0].querySelector('#adshowimage'));
					$scope.adloadimage = angular.element($element[0].querySelector('#adloadimage'));
					$scope.adshowimage.on('load', function() {
						$scope.adshowimage.css({
							'display': 'block'
						});
						$scope.adloadimage.css({
							'display': 'none'
						});
					});

					var _touchstart = Const.touchEvent.start;
					var _touchmove = Const.touchEvent.move;
					var _touchend = Const.touchEvent.end;
					var bind = function () {
						var totalDistance = 0;
						
						pkgbody.addEventListener(_touchstart, function (e) {
							var pkgrange = pkgbody.scrollHeight - pkgbody.clientHeight;
							var totalDistance = pkgbody.scrollTop;
							
							var _lastYPos = e.touches ? e.touches[0].pageY : e.pageY;
							var touch = function (e) {
								var _currentYPos = e.touches ? e.touches[0].pageY : e.pageY;
								var ydistance = _currentYPos - _lastYPos;
								if (Math.abs(ydistance) > 3) {
									e.stopPropagation();
								}
								_lastYPos = _currentYPos;
								totalDistance -= ydistance;
								pkgbody.scrollTop = totalDistance;
								if (totalDistance < 0) {
									totalDistance = 0;
								}
								if (totalDistance > pkgrange) {
									totalDistance = pkgrange;
								}
								adtrack.css('top', 4 * totalDistance / pkgrange + 'em');
							};
							var endTouch = function (e) {
								e.stopPropagation();
								e.preventDefault();
								top.document.removeEventListener(_touchmove, touch, false);
								top.document.removeEventListener(_touchend, endTouch, false);
							};
							top.document.addEventListener(_touchmove, touch, false);
							top.document.addEventListener(_touchend, endTouch, false);
						},false);
					};
					var trackbind = function () {
						var totalDistance = 0;
						
						var scrollStyle = getStyleObj(scroll);
						var trackStyle = getStyleObj(track);
						
						track.addEventListener(_touchstart, function (e) {
							var trackFontsize = parseFloat(trackStyle.fontSize);
							var range = parseFloat(scrollStyle.height) - parseFloat(trackStyle.height);
							var pkgrange = pkgbody.scrollHeight - pkgbody.clientHeight;
							
							totalDistance = parseFloat(trackStyle.top);
							var _lastYPos = e.touches ? e.touches[0].pageY : e.pageY;
							var touch = function (e) {
								var _currentYPos = e.touches ? e.touches[0].pageY : e.pageY;
								var ydistance = _currentYPos - _lastYPos;
								if (Math.abs(ydistance) > 3) {
									e.stopPropagation();
								}
								_lastYPos = _currentYPos;
								totalDistance = totalDistance + ydistance;
								if (totalDistance < 0) {
									totalDistance = 0;
								}
								if (totalDistance > range) {
									totalDistance = range;
								}
								adtrack.css('top', totalDistance / trackFontsize + 'em');
								pkgbody.scrollTop = totalDistance / range * pkgrange;
								
							};
							var endTouch = function (e) {
								e.stopPropagation();
								e.preventDefault();
								top.document.removeEventListener(_touchmove, touch, false);
								top.document.removeEventListener(_touchend, endTouch, false);
							};
							top.document.addEventListener(_touchmove, touch, false);
							top.document.addEventListener(_touchend, endTouch, false);
						},false);
					};
					$timeout(bind, 0);
					$timeout(trackbind, 0);
				};
			}
        ],
        link: function($scope, $element, $attr, ctl) {
            $scope.pageID = ctl.pageID;
            $scope.componentType = 'adnotify';
            $scope.init();
        }
    };
});
uiCore.directive('ring', function() {
    return {
        restrict: 'EA',
        replace: true,
        require: '^pid',
        template: '<div class=\'ring\'>' + '<div class=\'ring-back\'></div>' + '</div>',
        scope: {
            param: '=param'
        },
        controller: [
            '$scope',
            '$element',
            '$attrs',
            '$timeout',
            'coreService',
            'coreUtils',
            function($scope, $element, $attrs, $timeout, coreService, coreUtils) {
                $scope.cid = $element.attr('cid');
                $scope.eventMap = {};
                $scope.compData = {
                    'CSS': {},
                    'JS': {}
                };
                $scope.extendComponentData = function(componetData) {
                    $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    $timeout(function() {
                        $scope.$apply();
                    });
                };
                $scope.init = function() {
                    coreService.registerComponentInstance($scope.cid, $scope);
                    $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                    coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'ringInit', $attrs['eventdata']);
                    
                    $scope.refresh();
                    
//                    $scope.$watch($scope.param, function(newValue) {
//                        if ($scope.param) {
//                            $scope.update();
//                        }
//                    });
                };
                
                $scope.refresh = function(){
                	var ringSize = $scope.compData.JS.ringSize || $scope.compData.JS.defaultSize;
                	var ring = angular.element($element[0]);
                    var ringBack = angular.element($element[0].querySelector('.ring-back'));
					ringBack.css({
						"width" : ringSize + "em",
						"height" : ringSize + "em",
					});
 					ring.css({
						"width" : ringSize + "em",
						"height" : ringSize + "em",
					});
 					var width = 2 * parseInt(top.window.getComputedStyle($element.children()[0], null)['width']);
 					circleConfig.radius = width/2 - 16;
                 	circleConfig.width = width;
                 	circleConfig.arc = width / 10;
                 	
                 	if($element.children()[0] && $element.children()[0].children[0]){
                 		$element.children()[0].children[0].remove();
                 	}
                 	drawRing(circleConfig);
                };
                
                $scope.used = function(){
                	var used = $scope.param.data.used;
                	var unit = $scope.param.data.unit;
                	return used + ' ' + unit;
                };
                
                $scope.remain = function(){
                	var remain = $scope.param.data.remain;
                	var unit = $scope.param.data.unit;
                	return remain + ' ' + unit;
                };
                /**
            	 * opts.parent 插入到哪里 一个JS元素对象
				 * opts.width 宽度 = 2* (半径+弧宽)  
				 * opts.radius 半径
				 * opts.arc 弧宽
				 * opts.perent 百分比 
				 * opts.used 使用量 
				 * opts.remain 剩余量 
				 * opts.color 弧渲染颜色 [底色圆圈色,进度色,底色填充色]
				 * opts.textColor 文字渲染颜色
				 * opts.textSize 文字渲染大小
				 * opts.animated 是否以动画的方式绘制 默认false
				 * opts.after 绘制完成时执行函数
            	 * */
                var circleConfig = {
            		parent: $element.children()[0],
            		width: 138,
            		radius: 53,
            		arc: 13.8,
            		used: $scope.used(),
            		remain: $scope.remain(),
            		perent: $scope.param.data.percent || 0,
            		color: ['#fff', '#2CA0AB', '#3C4154'],
            		textColor: ['#2CA0AB', '#fff'],
            		textSize: '1em',
            		animated: true,
            		after: function() {}
                 }
                
                $scope.update = function() {
                	console.log('$scope.param = ', $scope.param);
                    if (typeof $scope.param == 'string') {
                        $scope.param = coreUtils.String2JSON($scope.param);
                    }

                    $scope.compData.JS.length = $scope.param.length;
                    //获取遍历之后的各个圈的index,根据不同的index设置不同的大小
                    if(!$scope.param.showText && !$scope.param.isVoice ){
                    	$scope.compData.JS.ringSize = $scope.compData.JS.maxSize;
                    	$scope.refresh();
                    }
                };
                
                $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                    if ($scope.eventMap[cevent]) {
                        $scope.eventMap[cevent](args);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    }
                });
                //used canvas draw circle
                
                function drawRing(opts) {
                    var _opts = {
                        parent: document.body,
                        width: 100,
                        radius: 45,
                        arc: 3,
                        perent: 100,
                        color: ['#ccc', '#042b61'],
                        textColor: '#000',
                        textSize: '　28px',
                        animated: false,
                        after: function() {}
                    }, k;
                    for (k in opts) {
                    	_opts[k] = opts[k];
                    }
                    
                    var parent = _opts.parent,
                        width = _opts.width,
                        radius = _opts.radius,
                        arc = _opts.arc,
                        perent = parseFloat(_opts.perent),
                        color = _opts.color,
                        textSize = _opts.textSize,
                        textColor = _opts.textColor,
                		used =  _opts.used,
                		remain = _opts.remain,
                        c = document.createElement('canvas'),
                        ctx = null,
                        x = 0,
                        animated = _opts.animated,
                        after = _opts.after;
	                    c.style.width=width/2;
						c.style.height=width/2;
                		parent.appendChild(c);
                		ctx = c.getContext("2d");
                		ctx.canvas.width = width;
                		ctx.canvas.height = width;

                    function clearFill() {
                        ctx.clearRect(0, 0, width, width);
                    }

                    //绘制背景圆圈
                    function fillBG() {
                        ctx.beginPath();
                        ctx.lineWidth = width/15;
                        ctx.strokeStyle = color[0];
                        ctx.fillStyle=color[2];
                        ctx.shadowColor = 'rgb(45, 46, 46)';
                		ctx.shadowOffsetX = 4;
                		ctx.shadowOffsetY = 4;
                		ctx.shadowBlur = 8;
                        ctx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
                        ctx.lineCap = 'round';
                        ctx.fill();
                		ctx.stroke();
                		//console.log(width);
                		//console.log($scope.compData.JS.ringSize);
                    }
                	//绘制进度圆圈
                    function fillArc(x) {
                    	if(x == 100){
                    		x = 0;
                    	}else if(x == 0){
                    		x = 100;
                    	}
                        ctx.beginPath();
                        ctx.lineWidth = width/15 + 2;
                        ctx.strokeStyle = color[1];
                        ctx.arc(width / 2, width / 2, radius, 0, (100-x) * 3.6 * Math.PI / 180,true);
                        ctx.lineCap = 'round';
                		ctx.stroke();
                    }

                    //填写使用量和剩余量文本
                    function fillUsed(used) {
                        ctx.font = $scope.compData.JS.usedSize + ' Arial';
                        ctx.fillStyle = textColor[0];
                        ctx.textBaseline = "bottom";
                        ctx.textAlign = 'center';
                        ctx.fillText(used, width / 2, width / 2);
                    }
                	
                	function fillremain(remain) {
                        ctx.font = $scope.compData.JS.remainSize + ' Arial';
                        ctx.fillStyle = textColor[1];
                        ctx.textBaseline = "top";
                        ctx.textAlign = 'center';
                        ctx.fillText(remain, width / 2, width / 2);
                    }

                    function fill(x,used, remain) {
                        fillBG();
                        fillArc(x);
                        fillUsed(used);
                		fillremain(remain);
                    }

                    if (!animated) return fill(perent);

                    fill(x,used, remain);
                    !function animate() {
                        if (++x > perent) return after && after();
                        setTimeout(animate, 10);
                        clearFill();
                        fill(x,used, remain);
                    }();
                }
                    
            }
        ],
        link: function($scope, $element, $attrs, ctl) {
            $scope.pageID = ctl.pageID;
            $scope.componentType = 'ring';
            $scope.init();
        }
    };
});
uiCore.directive('imageContainer', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {},
        require: '^pid',
        template: '<div class="ui-com-image-container"><div class="ui_com_imageContainer_innerDiv"></div></div>',
        controller: [
            '$scope',
            '$element',
            '$attrs',
            'coreService',
            function($scope, $element, $attrs, coreService) {
                $scope.cid = $attrs.cid;
                $scope.eventMap = {};
                $scope.compData = {};
                $scope.compData.isActive = false;
                var _touchstart = 'ontouchstart' in document ? 'touchstart' : 'mousedown',
                    _touchmove = 'ontouchmove' in document ? 'touchmove' : 'mousemove',
                    _touchend = 'ontouchend' in document ? 'touchend' : 'mouseup';
                $element.bind(_touchstart, function(e) {
                    $scope.compData.isActive = !$scope.compData.isActive;
                    if ($scope.compData.isActive) {
                        $scope.applyActiveStyles();
                        coreService.fireEvent($scope.cid, 'expand');
                    } else {
                        $scope.applyDefaultStyles();
                        coreService.fireEvent($scope.cid, 'collapse');
                    }
                    e.stopPropagation();
                    e.preventDefault();
                });
                $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, args, deferred) {
                    $scope.eventMap[event](args);
                    if (null != deferred) {
                        deferred.resolve();
                    }
                });
                $scope.extendDeep = function extendDeep(dst) {
                    angular.forEach(arguments, function(obj) {
                        if (obj !== dst) {
                            angular.forEach(obj, function(value, key) {
                                if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                    extendDeep(dst[key], value);
                                } else {
                                    dst[key] = value;
                                }
                            });
                        }
                    });
                    return dst;
                };
                $scope.init = function() {
                    coreService.registerComponentInstance($element.attr('cid'), $scope);
                    var properties = coreService.getInitProperties($attrs['cid']) || {},
                        jsProp = properties.JS || {},
                        cssProp = properties.CSS || {},
                        jsData = $attrs['jsdata'] || {},
                        cssData = $attrs['cssdata'] || {};
                    $scope.jsProp = $scope.extendDeep(jsData, jsProp);
                    $scope.cssProp = $scope.extendDeep(cssData, cssProp);
                };
                $scope.applyElementCss = function() {
                	if($scope.jsProp.imageurl){
                		$scope.image_url = $scope.jsProp.imageurl;
                		$scope.activeImageurl = $scope.jsProp.activeImageurl;
                		var nameEle = $element[0].querySelector('.ui_com_imageContainer_innerDiv');
                		angular.element(nameEle).css($scope.image_url);
                		$element.css($scope.cssProp);
                	}
                };
                $scope.applyActiveStyles = function() {
                    var nameEle = $element[0].querySelector('.ui_com_imageContainer_innerDiv');
                    angular.element(nameEle).css($scope.activeImageurl);
                };
                $scope.applyDefaultStyles = function() {
                    var nameEle = $element[0].querySelector('.ui_com_imageContainer_innerDiv');
                    angular.element(nameEle).css($scope.image_url);
                };
            }
        ],
        link: function($scope, $element, $attributes, $controller, $transcludeFn) {
            $scope.pageID = $controller.pageID;
            $scope.componentType = 'imageContainer';
            $scope.init();
            $scope.applyElementCss();
        }
    };
});
uiCore.directive('notifydlg', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        require: '^pid',
        scope: {},
        template: '<div style="display:none;" ng-style="jsProp.show" ng-show="jsProp.isShowDlg">' + '<div ng-style="jsProp.header.CSS"><div ng-style="jsProp.header.JS.titleStyle" class="rtlstyle">{{jsProp.title}}</div></div>' + '<div ng-style="jsProp.holder.CSS"><div ng-style="jsProp.body.CSS" vscroll><p id="mes" ng-show="jsProp.messageconfig" ng-style="jsProp.body.JS.messageStyle">{{jsProp.msgcontent}}</p><a ng-href="{{jsProp.body.JS.imghref}}" ng-show="jsProp.imageconfig" target="_blank"><img ng-style="jsProp.body.JS.imgStyle" ng-src="{{jsProp.body.JS.imgsrc}}"></a></div>' + '<div ng-style="jsProp.footer.CSS">' + '<div ng-style="jsProp.footer.JS.btnholder">' + '<tbbutton ng-style="jsProp.footer.JS.btnStyle" ng-show="jsProp.isShowRenew" param="jsProp.footer.JS.renewBtn" cid="renewBtn"></tbbutton>' + '<tbbutton ng-style="jsProp.footer.JS.btnStyle" ng-show="jsProp.isShowBuy" param="jsProp.footer.JS.buyBtn" cid="buyBtn"></tbbutton>' + '<tbbutton ng-style="jsProp.footer.JS.btnStyle" ng-show="jsProp.isShowRecharge" param="jsProp.footer.JS.rechargeBtn" cid="rechargeBtn"></tbbutton>' + '<tbbutton ng-style="jsProp.footer.JS.btnStyle" param="jsProp.footer.JS.okBtn" cid="okBtn"></tbbutton>' + '</div></div></div></div>',
        controller: [
            '$scope',
            '$element',
            '$attrs',
            'coreService',
            '$timeout',
            'coreUtils',
            'Const',
            function($scope, $element, $attrs, coreService, $timeout, coreUtils, Const) {
                $scope.jsProp = {};
                $scope.cssProp = {};
                $scope.showDlg = function(opt) {
                    if (opt) {
                        $scope.jsProp = coreUtils.extendDeep($scope.jsProp, opt);

                        $scope.jsProp.title = $scope.jsProp.headContent[top.tlbs.languageID][$scope.jsProp.notifType];
                        var campaign = $scope.jsProp.campaign;
                        var mes = angular.element($element[0].querySelector('[id="mes"]'));
                        if(campaign && campaign.contentType == '0' && campaign.message){
                            $scope.jsProp.msgcontent = campaign.message;
                        	$scope.jsProp.messageconfig = true;
                        	$scope.jsProp.imageconfig = false;
                        	if(campaign.lang && campaign.lang == 'en'){
                        		mes.css('cssText', 'direction: ltr !important; color: #000; font-size: 0.6em; padding: 1em 3em 0; word-wrap: break-word');
                        	}
                        	if(campaign.lang && campaign.lang == 'ar'){
                        		mes.css('cssText', 'direction: rtl !important; color: #000; font-size: 0.6em; padding: 1em 3em 0; word-wrap: break-word');
                        	}
                        }
                        if(campaign && campaign.contentType == '1' && campaign.image){
                        	$scope.jsProp.body.JS.imgsrc = campaign.image;
                        	$scope.jsProp.body.JS.imghref = campaign.clickUrl;
                        	$scope.jsProp.messageconfig = false;
                        	$scope.jsProp.imageconfig = true;
                        }
                        $scope.jsProp.footer.JS.btnStyle.width = $scope.jsProp.btnWidth;
                        $scope.jsProp.isShowDlg = true;
                        $scope.jsProp.show = {
                            "display": "block"
                        };
                        $scope.jsProp.timeout = $scope.jsProp.timeoutConfig[$scope.jsProp.notifType] || $scope.jsProp.timeout;
                        if ($scope.jsProp.timeout) {
                            $scope.autoHide($scope.jsProp.timeout);
                        }
                    }
                };
                $scope.fillTextTemplate = function (args) {
					$scope.jsProp.dataMapping = $scope.jsProp.dataMapping.split(",");
					var param = [];
					param=coreUtils.transfer(args,$scope.jsProp.dataMapping);
					var template = $scope.jsProp.msgcontent;
					var text="";
					text = template.replace(/\{[0-9]\}/g, function (s, i, str) {
							var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
							return param[index];
						});
					$scope.jsProp.msgcontent = text;
				};
                $scope.showConfirm = function(opt) {
                    $scope.jsProp.title = $scope.jsProp.headContent[top.tlbs.languageID]["0X509000"];
                    $scope.jsProp.footer.JS.btnStyle.width = $scope.jsProp.btnWidth;
                    $scope.fillTextTemplate(opt);
                    $scope.jsProp.messageconfig = true;
                    $scope.jsProp.isShowRenew=false;
                    $scope.jsProp.isShowBuy=false;
                    $scope.jsProp.isShowDlg = true;
                    $scope.jsProp.show = {
                        "display": "block"
                    };
                };
                $scope.updateStateConfig = function() {
                	top.tlbs.showClose=true;
                };
                $scope.checkSubResult = function(args){
                	var substate="0";
                	if(args && args.respparam.subscribtionstatus == '0'){
                		substate="1";
                		coreService.fireEvent($element.attr('cid'), 'sendauto');
                	}else if(args && args.respparam.subscribtionstatus == 'RP-00001'){
                		substate="2";
                	}else{
                		substate="3";
                	}
                	coreService.fireEvent($element.attr('cid'), 'substate',substate);
                };
                //automatically hide
                $scope.autoHide = function(timeout) {
                	if ($scope.timeout) {
                		$timeout.cancel($scope.timeout);
                	}
                    $scope.timeout = $timeout(function() {
                        if ($scope.jsProp.isShowDlg) {
                            $scope.jsProp.isShowDlg = false;
                            coreService.fireEvent($element.attr('cid'), 'autohide', null);
                            top.tlbs.notificationCdrData = null;
                        }
                    }, timeout * 1000);
                };
                
                //handly hide  such as click close tbbutton;
                $scope.hide = function() {
                    $scope.jsProp.isShowDlg = false;
                };
                
                $scope.init = function() {
                    coreService.registerComponentInstance($element.attr('cid'), $scope);
                    var defaultOpt = {
                            JS: {
                                isShowDlg: false,
                                isShowRenew: false,
                                isShowRecharge: false,
                                isShowBuy: false,
                                messageconfig: false,
                                imageconfig: false,
                                headContent: {}
                            },
                            CSS: {}
                        },
                        properties = coreService.getInitProperties($attrs['cid']) || {},
                        jsProp = properties.JS || {},
                        cssProp = properties.CSS || {},
                        jsData = coreUtils.String2JSON($attrs['jsdata']),
                        cssData = coreUtils.String2JSON($attrs['cssdata']);
                    $scope.jsProp = coreUtils.extendDeep(defaultOpt.JS, jsProp, jsData);
                    $scope.cssProp = coreUtils.extendDeep(defaultOpt.CSS, cssProp, cssData);
                    $element.css($scope.cssProp || {});
                };
                $scope.eventMap = {};
                $scope.compData = {};
                $scope.compData.JS = {};
                $scope.compData.JS['cdrData'] = {};
                $scope.eventMap['updateStateConfig'] = $scope.updateStateConfig;
                $scope.eventMap['checkSubResult'] = $scope.checkSubResult;
                $scope.eventMap['showConfirm'] = $scope.showConfirm;
                $scope.eventMap['show'] = $scope.showDlg;
                $scope.eventMap['hide'] = $scope.hide;
                $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                    $scope.eventMap[cevent](args);
                    if (null != deferred) {
                        deferred.resolve();
                    }
                });
            }
        ],
        link: function($scope, $element, $attr, ctl) {
            $scope.pageID = ctl.pageID;
            $scope.componentType = 'notifydlg';
            $scope.init();
        }
    };
});
uiCore.directive('ilogo', [
		'coreService',
		'coreUtils',
		'$timeout',
		function (coreService, coreUtils, $timeout) {
			return {
				restrict : 'E',
				replace : true,
				template : '<div ng-click="compData.JS.clickable && manualClick();"><div ng-style="compData.JS.redDot" class="logo-red-notice">&nbsp;</div></div>',
				scope : {
					param : '=param'
				},
				require : '^pid',
				controller : [
					'$scope',
					'$element',
					'$attrs',
					'$interval',
					'Const',
					function ($scope, $element, $attrs, $interval,Const) {
						$scope.currenetState = 'collapse';
						$scope.cid = $attrs.cid;
						$scope.timerInterval = null;
						$scope.lockState = false;
						
						if (top.tlbs.logoRedDotCount) {
							$scope.redCount = top.tlbs.logoRedDotCount;
						} else {
							$scope.redCount = 0;
						}
						$scope.eventMap = {};
						$scope.compData = {
							'CSS' : {
								'width' : '3.55em',
								'height' : '5em',
								'position' : 'absolute',
								/*'bottom': '0',*/
								'right' : '0',
								'background-repeat' : 'no-repeat',
								/*'display': 'block',*/
								'background-size' : 'cover',
								'z-index' : '5000'
							},
							'JS' : {
								'clickable' : false,
								'redDotImg' : "url('" + top.tlbs.templatePath + "/images/reddot.png?V=1')",
								'animation' : false,
								'timerstate' : false,
								'autostatechangetimeout' : 5,
								'firstInterval': '10',
								'secondInterval': '20',
								'pageStack' : [],
								'redDot':{},
								'stateconfig' : {
									'state' : 0,
									'state0' : {},
									'state1' : {}
								},
								'cdrConfig' : {
									'uitracingcdr' : {
										'cdrType' : 'uitracingcdr',
										'enable' : true,
										'storeData' : false
									},
									'uidisplaycdr' : {
										'cdrType' : 'uidisplaycdr',
										'enable' : true,
										'storeData' : false
									}
								}
							}
						};
						/*$scope.getLogoStyleObject = function() {
						var stateData = $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state] || {};
						return coreUtils.extendDeep($scope.compData.CSS, stateData);
						};*/
						$scope.changeState = function (stateObject, deferred) {
							if (null != stateObject && null != stateObject.cstate) {
								$scope.compData.JS.timerstate = false;
								$interval.cancel($scope.timerInterval);
//								if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
									$scope.compData.JS.stateconfig.state = stateObject.cstate;
									$scope.applyStyle();
									$scope.$evalAsync(
										function () {
										if (null != deferred) {
											if ($scope.compData.JS.animation) {
												//var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
												if (top.tlbs.isTransitionSupported) {
													$element.on(top.tlbs.transitionendEvent, function (e) {
														deferred.resolve();
													});
												} else {
													deferred.resolve();
												}
											} else {
												deferred.resolve();
											}
										}
									});
									if (null != deferred) {
										deferred.resolve();
									}
//								} else if (null != deferred) {
//									deferred.resolve();
//								}
							}
						};
						$scope.changeExtraState = function (stateObject, deferred) {
							if (null != stateObject && null != stateObject.cstate) {
								if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
									$scope.compData.JS.stateconfig.state = stateObject.cstate;
									$scope.applyStyle();
								} else if (null != deferred) {
									deferred.resolve();
								}
							}
						};
						$scope.handleClick = function () {
							if(!top.retlbs.langStatus && top.tlbs.firstflag == 1){
								coreService.fireEvent($scope.cid, 'setLanguage', null);
								$scope.lockState = true;
								top.retlbs.langStatus = true;
								top.retlbs.langProcess = true;
								
							}
							else if (!$scope.lockState) {
								if ($scope.compData.JS.timerstate) {
									coreService.fireEvent($scope.cid, 'click0', null);
									$scope.lockState = true;
									$scope.handleDisplayCDR(2,0);
								} else {
									coreService.fireEvent($scope.cid, 'click' + $scope.compData.JS.stateconfig.state, null);
									$scope.handleDisplayCDR(3,0);
								}

								if ($scope.compData.JS.stateconfig.state == 0) {
									$scope.lockState = true;
								}

								if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
									$scope.compData.JS['cdrData'] = {};
									$scope.compData.JS.cdrData = {
										'pageId' : $scope.pageID,
										'componentId' : $scope.cid,
										'iseComp' : '1'
									};
									coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
								}
							}
						};
						$scope.manualClick = function () {
							if ($scope.bindtouch) return;
							if ($scope.dragflag) {
								$scope.dragflag = false;
								$element.css({
									'bottom': '3px',
									'right': '3px'
								});
								$scope.compData.JS.timerstate = false;
								$scope.compData.JS.stateconfig.state = '0';
								$scope.handleClick();
							}else {
								$scope.handleClick();
							}
						}
						
						$scope.checkstatus = function () {
							if(top.retlbs.status){
								$scope.handleClick();
							}else if(top.tlbs.firstflag != '1'){
								coreService.fireEvent($scope.cid, 'notify');
								$scope.firsttimeout = $timeout(function() {
									coreService.fireEvent($scope.cid, 'notify');
								},$scope.compData.JS.firstInterval * 1000);
								$scope.secondtimeout = $timeout(function() {
									coreService.fireEvent($scope.cid, 'notify');
								},$scope.compData.JS.secondInterval * 1000);
							}
						};
						$scope.extendComponentData = function (componetData) {
							$scope.compData = coreUtils.extendDeep($scope.compData, componetData);
							/*$timeout(function() {
							$scope.$apply();
							});*/
						};
						$scope.handleDisplayCDR = function(displayType,displayResult){
							if (coreUtils.cdrUtils.canWriteUIDisplayCDR($scope.compData.JS.cdrConfig)) {
								$scope.compData.JS['cdrData'] = {};
								$scope.compData.JS.cdrData = {
									'pageId' : $scope.pageID,
									'displayType' : displayType,
									'displayResult' : displayResult
								};
								coreUtils.cdrService($scope.compData.JS.cdrConfig.uidisplaycdr, $scope.compData.JS.cdrData);
							}
						};
						$scope.stopNotification = function() {
							if ($scope.firsttimeout) {
								$timeout.cancel($scope.firsttimeout);
							}
							if ($scope.secondtimeout) {
								$timeout.cancel($scope.secondtimeout);
							}
						};
						$scope.eventMap['stopNotification'] = $scope.stopNotification;
						$scope.eventMap['handleClick'] = $scope.handleClick;
						$scope.eventMap['checkstatus'] = $scope.checkstatus;
						$scope.eventMap['changeState'] = $scope.changeState;
						$scope.eventMap['changeExtraState'] = $scope.changeExtraState;
						$scope.$on($scope.cid + '_handleEvent', function (eventObj, event, inputData, deferred) {
							$scope.eventMap[event](inputData, deferred);
						});

						$scope.init = function () {
							coreService.registerComponentInstance($scope.cid, $scope);
							$scope.extendComponentData(coreService.getInitProperties($scope.cid));
							//BEGIN Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature
							//$scope.compData.JS.reddotStyle = {'background-image':'url('+$scope.compData.JS.redDotImg+')'};
							var redDotDiv = $element.children()[0];

							redDotDiv.style.setProperty('background-image', 'url(' + $scope.compData.JS.redDotImg + ')');
							if (top.tlbs.logoRedDotSet) {
								redDotDiv.style.setProperty('display', 'block');
							} else {
								redDotDiv.style.setProperty('display', 'none');
							}
							//END Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature
							var pickposition = function () {
								var dockPosition = top.tlbs.dockPosition || false;
								if (dockPosition) {
									coreService.fireEvent($scope.cid, 'moveTop');
								} else {
									coreService.fireEvent($scope.cid, 'moveBottom');
								}
							}
							$timeout(pickposition, 0);
							$timeout(function () {
								coreService.fireEvent($scope.cid, 'init', null);
							}, 800);
							if (top.tlbs.watermark != '0' && $scope.compData.JS.timerstate) {
								$scope.compData.JS.timerstate = false;
								$scope.startAutoStateChangeTimer(null, null);
							}
							if(top.tlbs.buoystate==-1 || !top.tlbs.buoystate){
								$scope.compData.JS.stateconfig.state=1;
							}
							$scope.applyStyle();

							if(top.tlbs.buoystate== undefined || top.tlbs.buoystate == -1){
								$scope.drag();
							}
							
							//添加logo显示的开关，当watermark为0时，隐藏logo；为1时显示----start
							if(top.tlbs.watermark == '0'){
								$element.css('display','none');
							}
							//添加logo显示的开关，当watermark为0时，隐藏logo；为1时显示----end
							
							if (coreUtils.cdrUtils.canWriteUIDisplayCDR($scope.compData.JS.cdrConfig)) {
								$scope.compData.JS['cdrData'] = {};
								$scope.compData.JS.cdrData = {
									'pageId' : $scope.pageID,
									'displayType' : 3,
									'displayResult' : 0
								};
								coreUtils.cdrService($scope.compData.JS.cdrConfig.uidisplaycdr, $scope.compData.JS.cdrData);
							}
						};

						$scope.startAutoStateChangeTimer = function (stateObject, deferred) {
							if (!$scope.compData.JS.timerstate) {
								$scope.compData.JS.timerstate = true;
								if(top.tlbs.buoystate==-1 || !top.tlbs.buoystate){
									$scope.timerInterval = $interval(function () {
										coreService.fireEvent($scope.cid, 'autostatechange', null);
									}, $scope.compData.JS.autostatechangetimeout * 1000);
								}
							}
							if (null != deferred) {
								deferred.resolve();
							}
						};
						$scope.eventMap['startAutoStateChangeTimer'] = $scope.startAutoStateChangeTimer;

						//BEGIN Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature
						$scope.setRedDot = function (stateObject, deferred) {

							var redDotDiv = $element.children()[0];
							var styleDisp = redDotDiv.style.getPropertyValue('display');

							$scope.redCount = $scope.redCount + 1;

							if (null == styleDisp || styleDisp == 'none') {
								redDotDiv.style.setProperty('display', 'block');
								coreService.fireEvent($scope.cid, 'redDotSet');
							}

							if (null != deferred) {
								deferred.resolve();
							}
						};
						$scope.eventMap['setRedDot'] = $scope.setRedDot;

						$scope.clearRedDot = function (stateObject, deferred) {

							var redDotDiv = $element.children()[0];
							var styleDisp = redDotDiv.style.getPropertyValue('display');

							if (styleDisp == 'block') {
								$scope.redCount = $scope.redCount - 1;

								if ($scope.redCount < 1) {
									redDotDiv.style.setProperty('display', 'none');
									coreService.fireEvent($scope.cid, 'redDotCleared');
								}
							}

							if (null != deferred) {
								deferred.resolve();
							}
						};
						$scope.eventMap['clearRedDot'] = $scope.clearRedDot;
						//END Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature

						//add by s00900236 at 2015-03-19 begin
						//reason:DTS2015021400583 To prevent logo multiple click.
						$scope.unlockLogoClick = function (stateObject, deferred) {
							$scope.lockState = false;
							if (null != deferred) {
								deferred.resolve();
							}
						};
						//added for PCBAR logo drag on 21-09-2015 by nwx240611
						$scope.lockLogoClick = function (stateObject, deferred) {
							$scope.lockState = true;
							if (null != deferred) {
								deferred.resolve();
							}
						};
						
						$scope.drag = function () {
							var _touchstart = Const.touchEvent.start;
							var _touchmove = Const.touchEvent.move;
							var _touchend = Const.touchEvent.end;
							var xdistance;
							var ydistance;
							var moveflag = false;
							$scope.dragflag = false;
							$scope.canDrag = true;
							
							$element.bind(_touchstart, function (e) {
								$scope.bindtouch = true;
								e.stopPropagation();
								e.preventDefault();
								var _lastYPos = e.touches ? e.touches[0].clientY : e.clientY;
								var _lastXPos = e.touches ? e.touches[0].clientX : e.clientX;
								var touch = function (e) {
									e.stopPropagation();
									var _currentYPos = e.touches ? e.touches[0].clientY : e.clientY;
									var _currentXPos = e.touches ? e.touches[0].clientX : e.clientX;
									ydistance = _currentYPos - _lastYPos;
									xdistance = _currentXPos - _lastXPos;
									if (Math.abs(ydistance) > 3 || Math.abs(xdistance) > 3) {
										moveflag = true;
									}
								};
								var endTouch = function (e) {
									try {
										e.stopPropagation();
										
										if ($scope.canDrag && !$scope.dragflag && moveflag && xdistance > 0 && ydistance > 0) {
											$scope.dragflag = true;
											$element.css({
												'bottom': '-1.7em',
												'right': '-1.7em',
												"opacity" : "1",
											});
											$interval.cancel($scope.timerInterval);
										}else if ($scope.canDrag && $scope.dragflag && moveflag && (xdistance < 0 || ydistance < 0)) {
											$scope.dragflag = false;
											$element.css({
												'bottom': '3px',
												'right': '3px'
											});
											$scope.compData.JS.timerstate = false;
											$scope.compData.JS.stateconfig.state = '0';
											$scope.startAutoStateChangeTimer(null, null);
										}else if (!moveflag && $scope.dragflag) {
											$scope.dragflag = false;
											$element.css({
												'bottom': '3px',
												'right': '3px'
											});
											$scope.compData.JS.timerstate = false;
											$scope.compData.JS.stateconfig.state = '0';
											$scope.handleClick();
										}else if (!moveflag && !$scope.dragflag) {
											$scope.handleClick();
										}
									}
									finally {
										moveflag = false;
										top.document.removeEventListener(_touchmove, touch, false);
										top.document.removeEventListener(_touchend, endTouch, false);
									}
								};
								top.document.addEventListener(_touchmove, touch, false);
								top.document.addEventListener(_touchend, endTouch, false);
							});
						};
						
						var setDrag = function(data) {
							if (data && data.canDrag == '1') {
								$scope.canDrag = false;
							}else {
								$scope.canDrag = true;
							}
						};
						$scope.eventMap['setDrag'] = setDrag;
						
						$scope.eventMap['lockLogoClick'] = $scope.lockLogoClick;
						//added for PCBAR logo drag on 21-09-2015 by nwx240611
						$scope.eventMap['unlockLogoClick'] = $scope.unlockLogoClick;
						//add by s00900236 2015-03-19 end
						$scope.applyStyle = function () {
							if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
								coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
							}
							$element.css($scope.compData.CSS);
						};
					}
				],
				link : function (scope, element, attrs, ctrl) {
					scope.pageID = ctrl.pageID;
					scope.componentType = 'ilogo';
					scope.init();
				}
			};
		}
	]);
uiCore.directive('lbarholder', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'AE',
            replace: false,
            templateUrl: function(elem, attrs) {
                return attrs.templateurl;
            },
            scope: {
                param: '=param'
            },
            require: '^pid',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                function($scope, $element, $attrs) {
                    $scope.currenetState = 'collapse';
                    $scope.cid = $attrs.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {
                            'width': '100%',
                            'height': '3.25em',
                            'position': 'fixed',
                            'bottom': '0',
                            'right': '0',
                            'display': 'block'
                        },
                        'JS': {
                            'clickable': false,
                            'animation': false,
                            'pageStack': [],
                            'stateconfig': {
                                'state': 2,
                                'state0': {
                                    'display': 'none'
                                },
                                'state1': {
                                    'width': '0%'
                                },
                                'state2': {
                                    'width': '100%'
                                }
                            }
                        }
                    };
                    $scope.changeStyle = function(param) {
                    	if(param.moveFlag){
                    		$element.css('top','10.5em');
                    	}else{
                    		$element.css('top','initial');
                    	}
                    };
                    $scope.testStyle = function() {
                        if (0 == $scope.compData.JS.stateconfig.state) {
                            return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state0);
                        } else if (1 == $scope.compData.JS.stateconfig.state) {
                            return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state1);
                        } else {
                            return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state2);
                        }
                    };
                    $scope.refreshStyle = function() {
                        $element.css(coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]));
                    };
                    $scope.changeState = function(stateObject, deferred) {
                        if (null != stateObject && null != stateObject.cstate) {
                            if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
                                $scope.compData.JS.stateconfig.state = stateObject.cstate;
                                $timeout(function() {
                                    $scope.refreshStyle();
                                    if (null != deferred) {
                                        if ($scope.compData.JS.animation) {
                                            //var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
                                            $element.one(top.tlbs.transitionendEvent, function(e) {
                                                deferred.resolve();
                                            });
                                        } else {
                                            deferred.resolve();
                                        }
                                    }
                                });
                            } else if (null != deferred) {
                                deferred.resolve();
                            }
                        }
                    };
                    $scope.changeExtraState = function(stateObject, deferred) {
                        if (null != stateObject && null != stateObject.cstate) {
                            $scope.compData.CSS = coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + stateObject.cstate]);
                            $scope.refreshStyle();
                        }
                    };
                    $scope.handleClick = function() {
                        coreService.fireEvent($scope.cid, 'click' + $scope.compData.JS.stateconfig.state);
                    };
                    $scope.clickDisable = function() {};
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.eventMap['changeStyle'] = $scope.changeStyle;
                    $scope.eventMap['changeState'] = $scope.changeState;
                    $scope.eventMap['changeExtraState'] = $scope.changeExtraState;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        var dockPosition = top.tlbs.dockPosition || false;
                        if (dockPosition) {
                            coreUtils.extendDeep($scope.compData.CSS, {
                                'bottom': 'initial',
                                'display': 'block',
                                'top': '0'
                            });
                        } else {
                            coreUtils.extendDeep($scope.compData.CSS, {
                                'bottom': '0',
                                'display': 'block',
                                'top': 'initial'
                            });
                        }
                        $scope.refreshStyle();
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.init();
            }
        };
    }
]);
uiCore.directive('horizontalContainer', [
		'$timeout',
		function ($timeout) {
			return {
				restrict : 'EA',
				transclude : true,
				replace : true,
				template : '<div class="ui-com-horizontalContainer" ng-transclude></div>',
				require : '^pid',
				scope : {
					param : '=param',
					eventdata: '=eventdata',
					changestyle : '=changestyle',
					currentlangid : '=currentlangid'
				},
				controller : [
					'$scope',
					'$element',
					'$attrs',
					'coreService',
					'coreUtils',
					function ($scope, $element, $attrs, coreService, coreUtils) {
						$scope.cid = $attrs.cid;
						$scope.eventMap = {};
						$scope.compData = {};
						var IEadjust = function () {
							var docM = document.documentMode;
							var ua = navigator.userAgent;
							return docM < 10 ? true : false;
						};
						$element.bind('click', function (e) {
							//$scope.expand();
							e.stopPropagation();
							e.preventDefault();
						});
						$scope.extendDeep = function extendDeep(dst) {
							angular.forEach(arguments, function (obj) {
								if (obj !== dst) {
									angular.forEach(obj, function (value, key) {
										if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
											extendDeep(dst[key], value);
										} else {
											dst[key] = value;
										}
									});
								}
							});
							return dst;
						};
						$scope.init = function () {
							coreService.registerComponentInstance($element.attr('cid'), $scope);
							if (typeof $scope.param == 'string') {
								$scope.param = coreUtils.String2JSON($scope.param);
							}
							var properties = coreService.getInitProperties($attrs['cid']) || {},
							jsProp = properties.JS || {},
							cssProp = properties.CSS || {},
							jsData = coreUtils.String2JSON($attrs['jsdata']),
							cssData = coreUtils.String2JSON($attrs['cssdata']);
							$scope.jsProp = coreUtils.extendDeep(jsProp, jsData);
							$scope.cssProp = coreUtils.extendDeep(cssProp, cssData);
							if($attrs['ieadjust']==1&&IEadjust()){
								$element.css("display","inline");							
							}
							if ($scope.param) {
								$scope.update();
							}
							if ($scope.jsProp.type) {
								$scope.type = $scope.jsProp.type;
								$scope.currentStyle = $scope.jsProp[$scope.jsProp.type];
							}
							
							if($scope.changestyle && $scope.changestyle.length == 2){
								$scope.currentStyle = $scope.jsProp.changeStyle;
							}
							
							if($scope.changestyle && $scope.changestyle.length == 1){
								$scope.currentStyle = $scope.jsProp.changeStyleOne;
							}
							
							checkIsCurrentLang();
							
							if (!$scope.currentStyle){
								$scope.type = 'fixed';
								$scope.currentStyle = {
									'extendable' : 'false',
									'modifyChild' : 'true',
									'position' : 'relative',
									'width' : '130px',
									'height' : '100px'
								};
							}
							
							$scope.$watch($scope.eventdata, function() {
								if($scope.eventdata && $scope.eventdata.isHide){
									$scope.visibleHide();
								}
							});
						};
						
						var checkIsCurrentLang = function(){
							var currentLang = top.tlbs.languageID || "en";
							$scope.currentLangNum = currentLang == "en" ? 1 : 4;
							
							if($scope.currentlangid && $scope.currentlangid.langid == $scope.currentLangNum){
								$scope.currentStyle = $scope.jsProp[$scope.jsProp.type];
								$element.css({"display":"flex","display":"-webkit-box"});
							}
							
							if($scope.currentlangid && $scope.currentlangid.langid != $scope.currentLangNum){
								$scope.currentStyle = {"display" : "none"};
							}
						};
						
						$scope.visibleHide = function(){
							$element.empty();
							$element.css("color","transparent");
							$element[0].innerHTML = "no Data";
							
						}
						
						$scope.update = function () {
							if (typeof $scope.param == 'string') {
								$scope.param = coreUtils.String2JSON($scope.param);
							}
							$scope.jsProp = coreUtils.extendDeep($scope.jsProp, $scope.param.JS || {});
							$scope.cssProp = coreUtils.extendDeep($scope.cssProp, $scope.param.CSS || {});
							// $element.css($scope.cssProp);
						};
						/*$scope.loadChildrens = function($transcludeFn) {
						$transcludeFn(function(clone, scope) {
						$element.append(clone);
						});
						};*/
						$scope.applyElementCss = function () {
							$element.css($scope.cssProp);
							$element.css($scope.currentStyle);
						};
						$scope.expand = function (event, args, deferred) {
							//  $element.css('width',$scope.mainDivWidth+"px");
							if ($scope.jsProp.expand && $scope.jsProp.expand.width) {
								$element.css($scope.jsProp.expand);
							} else {
								$element.css('width', $scope.mainDivWidth);
							}
							if (null != deferred) {
								//var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								if (top.tlbs.isTransitionSupported) {
									$element.one(top.tlbs.transitionendEvent, function (e) {
										e.stopPropagation();
										deferred.resolve();
									});
								} else {
									e.stopPropagation();
									deferred.resolve();
								}
							}
						};
						$scope.collapse = function (event, args, deferred) {
							$element.css('width', 0);
							if (null != deferred) {
								//var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								if (top.tlbs.isTransitionSupported) {
									$element.one(top.tlbs.transitionendEvent, function (e) {
										e.stopPropagation();
										deferred.resolve();
									});
								} else {
									e.stopPropagation();
									deferred.resolve();
								}
							}
						};
						
						$scope.hide = function (event, args, deferred) {
							$element.css('display', "none");
							if (null != deferred) {
								deferred.resolve();

							}
						};
						
						$scope.show = function (event, args, deferred) {
							checkIsCurrentLang();
							if (null != deferred) {
								deferred.resolve();

							}
						};
						
						$scope.display = function (event, args, deferred) {
							$element.css('display', "block");
							if ($scope.jsProp.expand && $scope.jsProp.expand.height) {
								$element.css($scope.jsProp.expand);
							} else {
								$element.css('height', $scope.mainDivHeight);
							}
							if (null != deferred) {
								deferred.resolve();

							}
						};
						
						$scope.eventMap['show'] = $scope.show;
						$scope.eventMap['hide'] = $scope.hide;
						$scope.eventMap['display'] = $scope.display;
						$scope.eventMap['expand'] = $scope.expand;
						$scope.eventMap['collapse'] = $scope.collapse; 
						$scope.eventMap['isCurrentLang'] = $scope.isCurrentLang; 
						$scope.$on($scope.cid + '_handleEvent', function (eventObj, event, args, deferred) {
							$scope.eventMap[event](eventObj, args, deferred);
							if (null != deferred && $scope.currentStyle.isAnimation == 'false') {
								deferred.resolve();
							}
						});
						$scope.verifyChildren = function () {
							var childrens = $element[0].children;
							var element = null;
							var position = null;
							angular.forEach(childrens, function (value, key) {
								element = angular.element(value);
								position = element.css('position');
								if (position == 'fixed' || position == 'absolute')
									element.css('position', 'relative');
							});
						};
						$scope.extendableComponent = function () {
							var childrens = $element[0].children;
							$scope.mainDivWidth = 0;
							$scope.mainDivHeight = 0;
							var childElementHeight = 0;
							var style = null;
							angular.forEach(childrens, function (value, key) {
								childElementHeight = 0;
								style = top.window.getComputedStyle(childrens[key], null);
								$scope.mainDivWidth += parseInt(childrens[key].offsetWidth) + parseInt(style['marginLeft']) + parseInt(style['marginRight']);
								childElementHeight += parseInt(childrens[key].offsetHeight) + parseInt(style['marginTop']) + parseInt(style['marginBottom']);
								if ($scope.mainDivHeight <= childElementHeight)
									$scope.mainDivHeight = childElementHeight;
							});
							$scope.mainDivWidth += 'px';
							$scope.mainDivHeight += 'px';
							$element.css({
								'width' : $scope.mainDivWidth + 'px',
								'height' : $scope.mainDivHeight + 'px'
							});
						};
					}
				],
				link : function ($scope, $element, $attributes, $controller) {
					$scope.pageID = $controller.pageID;
					$scope.componentType = 'horizontalContainer';
					$scope.init();
					//$scope.loadChildrens($transcludeFn);
					$scope.applyElementCss();
					$scope.mainDivWidth = $element.css('width');
					if ($scope.currentStyle.modifyChild == 'true') {
						$scope.verifyChildren();
					}
					if ($scope.currentStyle.extendable == 'true') {
						$scope.extendableComponent();
					}
				}
			};
		}
	]);
uiCore.directive('ipageholder', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            template: '<div ng-click="compData.JS.clickable && handleClick();$event.stopPropagation();" {{param}}"></div>',
            scope: {
                param: '=param'
            },
            require: '^pid',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$compile',
                '$templateCache',
                function($scope, $element, $attrs, $compile, $templateCache) {
                    $scope.cid = $attrs.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {},
                        'JS': {
                            'clickable': false,
                            'animation': false,
                            'clickevent': '',
                            'stateconfig': {
                                'state': 0,
                                'state0': {},
                                'state1': {}
                            }
                        }
                    };
                    $scope.getTemplate = function() {
                        var elementTemplateCache = $templateCache.get($attrs.templateurl);
                        $element.html(elementTemplateCache);
                        $compile($element.contents())($scope);
                    };
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        $scope.getTemplate();
                        $scope.applyStyle();
                    };
                    /*$scope.getHolderStyle = function () {
                            if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
                                return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
                            }
                        };*/
                    $scope.handleClick = function() {
                        coreService.fireEvent($scope.cid, ($scope.compData.JS.clickevent || '') + 'click' + $scope.compData.JS.stateconfig.state);
                    };
                    //fix huawei phone background page scroll
                    var resolveScroll = (function() {
                        var scrollTop = 0,
                            doc = top.document.body,
                            win = top.window,
                            flag = 1,
                            //��Ϊ G716 ���������⴦��
                            agent = navigator.userAgent,
                            //honor is also huawei phone
                            isHuaweiPhone = (/huawei/ig.test(agent) || /HONOR/ig.test(agent)) && !(/G716-L070/ig.test(agent)),
                            isBingcom = /.bing.com\/$/.test(top.window.location.href) || /.bing.com$/.test(top.window.location.href),
                            lastMarginTop = 0,
                            lastPosition = '',
                            lastOverflow = 'auto',
                            lastTop = '',
                            lastLeft = '',
                            lastWidth = '100%',
                            setBodyFix = function() {
                                if (isHuaweiPhone && !isBingcom) { //bing.com has issue when click app,i don't know why,now just avoid it
                                    flag = 0
                                    scrollTop = doc.scrollTop;
                                    lastMarginTop = win.getComputedStyle(doc, null)['marginTop'];
                                    lastPosition = win.getComputedStyle(doc, null)['position'];
                                    lastOverflow = win.getComputedStyle(doc, null)['overFlow'] || 'auto';
                                    lastTop = win.getComputedStyle(doc, null)['top'];
                                    lastLeft = win.getComputedStyle(doc, null)['left'];
                                    lastWidth = win.getComputedStyle(doc, null)['width'] || 'auto';
                                    doc.style.position = 'fixed';
                                    doc.style.top = '0px';
                                    doc.style.left = '0px';
                                    doc.style.overflow = 'hidden';
                                    doc.style.width = '100%';
                                    doc.style.marginTop = "-" + top.window.pageYOffset + "px";
                                }
                            },

                            setMarginTop = function(v) {
                                lastMarginTop = v;
                            },

                            clearFix = function() {
                                if (isHuaweiPhone && !isBingcom) {
                                    if (flag == 0) {
                                        doc.style.position = lastPosition;
                                        doc.style.marginTop = lastMarginTop;
                                        doc.style.overflow = lastOverflow;
                                        doc.style.top = lastTop;
                                        doc.style.left = lastLeft;
                                        doc.style.width = lastWidth;
                                        //˳�������ţ�������ڽ����ʱ��
                                        top.window.scrollTo(0, scrollTop);
                                        flag = 1;
                                    }
                                }
                            };
                        return {
                            set: setBodyFix,
                            clear: clearFix,
                            setMarginTop: setMarginTop
                        }

                    })();

                    $scope.changeState = function(stateObject, deferred) {
//                        var showflag = false;
//                        if (stateObject.cstate == 0 && $scope.compData.JS.stateconfig.state == 1) {
//                            resolveScroll.clear();
//                        } else if (stateObject.cstate == 1 && $scope.compData.JS.stateconfig.state == 0) {
//                            showflag = true;
//                            
//                        }
                        if (null != stateObject && null != stateObject.cstate) {
                            if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
                                $scope.compData.JS.stateconfig.state = stateObject.cstate;
                                $scope.applyStyle();
                                $scope.$evalAsync(
                                    function() {
                                        if (null != deferred) {
                                            if ($scope.compData.JS.animation) {
                                                //var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
                                                $element.on(top.tlbs.transitionendEvent, function(e) {
                                                    deferred.resolve();
                                                });
                                            } else {
                                                deferred.resolve();
                                            }
//                                            if (showflag) {
//                                                resolveScroll.set();
//                                            }
                                        }
                                    });
                            } else if (null != deferred) {
                                deferred.resolve();
                            }
                        }
                    };
                    $scope.changeExtraState = function(stateObject, deferred) {
                        if (null != stateObject && null != stateObject.cstate) {
                            $scope.compData.CSS = coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + stateObject.cstate]);
                            $scope.applyStyle();
                        }
                    };
                    $scope.eventMap['changeState'] = $scope.changeState;
                    $scope.eventMap['changeExtraState'] = $scope.changeExtraState;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                    $scope.$watch($scope.param, function(newValue) {
                        if ($scope.param) {
                            $scope.compData = $scope.param;
                            $scope.applyStyle();
                        }
                    });
                    $scope.applyStyle = function() {
                        if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
                            coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
                        }
                        $element.css($scope.compData.CSS);
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'ipageholder';
                scope.init();
            }
        };
    }
]);
uiCore.directive("msgdlg",function(){return{restrict:"E",replace:true,transclude:true,require:"^pid",scope:{},template:'<div class="ui-com-msgdlg" style="display:none;" ng-style="jsProp.show" event="msgdlg.click" ng-show="jsProp.isShowDlg"><div class="lheader" ng-style="jsProp.headerStyle" ng-show="jsProp.isShowHeader"><div class="msgdlg-header">{{jsProp.headerInfo}}</div><div class="lclose" ng-show="jsProp.isShowClosBtn" ng-style="jsProp.closeStyle"><tbbutton event="msgdlg.close" param="jsProp.closeBtn" cdr="1" storedata="false" isecomp="0" ccid="msgdlg.close"></tbbutton></div></div><div class="lbody" ng-style="jsProp.bodyStyle"><p class="msgdlg-title"  ng-style="jsProp.titleStyle" ng-show="jsProp.isShowTitle">{{jsProp.title}}</p><p  ng-hide="jsProp.welcomeimageblockconfig" ng-style="jsProp.messageStyle" class="msgdlg-message"></p><div id="welcomeimg" ng-show="jsProp.welcomeimageblockconfig" ng-style="jsProp.imgStyle"></div></div><div class="lfooter"  ng-style="jsProp.footerStyle"><div class="lbtns" ng-style="jsProp.btnsLayoutStyle"  ng-repeat="item in jsProp.items"><div class="lleft" ng-style="jsProp.lleftStyle" event="{{item.leftBtnEvent}}" eventData="{{item.leftBtnEventData}}"><tbbutton id="btn" param="item.leftBtn" cdr="0"></tbbutton></div><div class="lright" ng-style="jsProp.lrightStyle" event="{{item.rightBtnEvent}}" eventData="{{item.rightBtnEventData}}"><tbbutton  param="item.rightBtn" cdr="1" storedata="true" isecomp="1" ccid="msgdlg.packagesubscribe"></tbbutton></div><div style="clear:both"></div></div><div class="lbtn" ng-style="jsProp.btnLayoutStyle" ng-show="jsProp.isShowBtns"><div class="lleft" ng-style="jsProp.lleftStyle" event="{{jsProp.leftBtnEvent}}" eventData="{{jsProp.leftBtnEventData}}"><tbbutton id="btn" param="jsProp.leftBtn" cdr="1" storedata="true" isecomp="1" ccid="msgdlg.detail"></tbbutton></div><div class="lright" ng-style="jsProp.lrightStyle" event="{{jsProp.rightBtnEvent}}" eventData="{{jsProp.rightBtnEventData}}"><tbbutton  param="jsProp.rightBtn" cdr="1" storedata="false" isecomp="0" ccid="msgdlg.cancel"></tbbutton></div><div style="clear:both"></div></div><div class="ldetail" ng-show="jsProp.isShowLinkBtn" event="{{jsProp.linkBtnEvent}}" eventData="{{jsProp.linkBtnEventData}}"><tbbutton param="jsProp.linkBtn" cdr="1" storedata="false" isecomp="1" ccid="msgdlg.link"></tbbutton></div></div></div>',controller:["$scope","$element","$attrs","coreService","$timeout","coreUtils","Const",function(d,c,b,f,e,a,g){d.jsProp={};d.cssProp={};d.showDlg=function(j){if(j&&d.jsProp.dataMapping){var n=a.transfer(j||{},d.jsProp.dataMapping);d.jsProp=a.extendDeep(d.jsProp,n);if(d.jsProp.messages instanceof Array){var q=d.jsProp.messageTemplate;var k=d.jsProp.messages;d.jsProp.messages=q.replace(/\{[0-9]\}/g,function(w,v,x){var u=parseInt(w.substring(w.indexOf("{")+1,w.indexOf("}")));return k[u]})}c[0].querySelector(".msgdlg-message").innerHTML=d.jsProp.messages;d.compData.JS.tempTableData=[];if(null!=d.jsProp.btnsData){for(var m=0;m<d.jsProp.btnsData.length;m++){d.compData.JS.tempTableData=d.compData.JS.tempTableData.concat(d.jsProp.btnsData[m].list)}if(d.compData.JS.tempTableData.length>0){d.jsProp.btnsData=d.compData.JS.tempTableData}}var p=d.jsProp.btnsData;if(p){d.jsProp.items=[];var t=a.JSON2String(d.jsProp.btnItem);var l=parseInt(d.jsProp.btnItem.maxShowRecords||3);var r=undefined;for(var m=0,o=p.length;m<o&&m<l;m++){r=a.transfer(p[m],d.jsProp.btnItemDataMapping);d.jsProp.items[m]=(a.extendDeep(a.String2JSON(t),r))}}d.jsProp.isShowDlg=true;d.jsProp.show={display:"block"};if(d.jsProp.timeout){d.autoHide(d.jsProp.timeout)}}};d.autoHide=function(i){e(function(){if(d.jsProp.isShowDlg){d.jsProp.isShowDlg=false;f.fireEvent(c.attr("cid"),"msgdlg.auto.hide",null);top.tlbs.notificationCdrData=null}},i*1000)};d.hide=function(){d.jsProp.isShowDlg=false};d.init=function(){f.registerComponentInstance(c.attr("cid"),d);var l={JS:{isShowDlg:false,isShowHeader:true,isShowTitle:true,isShowClosBtn:true,isShowBtns:true,isShowLinkBtn:false,headerInfo:"",messages:"",title:""},CSS:{}},j=f.getInitProperties(b.cid)||{},p=j.JS||{},m=j.CSS||{},n=a.String2JSON(b.jsdata),i=a.String2JSON(b.cssdata);d.jsProp=a.extendDeep(l.JS,p,n);d.cssProp=a.extendDeep(l.CSS,m,i);c.css(d.cssProp||{});if(d.jsProp.messages instanceof Array){var k=d.jsProp.messageTemplate;var o=d.jsProp.messages;d.jsProp.messages=k.replace(/\{[0-9]\}/g,function(t,r,u){var q=parseInt(t.substring(t.indexOf("{")+1,t.indexOf("}")));return o[q]})}c[0].querySelector(".msgdlg-message").innerHTML=d.jsProp.messages};d.eventMap={};d.compData={};d.compData.JS={};d.compData.JS.cdrData={};d.eventMap.show=d.showDlg;d.eventMap.hide=d.hide;var h=function(){c.bind(g.touchEvent.start,function(m){var l=m.target;if(l.tagName!="A"){m.stopPropagation();m.preventDefault()}var l=angular.element(m.target);while(l&&!l.attr("event")){l=l.parent()}f.fireEvent(c.attr("cid"),l.attr("event"),l.attr("eventdata"));var j=angular.element(angular.element(l));if(null==j.attr("cdr")){j=angular.element(angular.element(l).children()[0])}if(null!=j&&null!=j.attr("cdr")&&"1"==j.attr("cdr")){var k={cdrType:"uitracingcdr",enable:true,storeData:j.attr("storedata")=="true"};d.compData.JS.cdrData={pageId:d.pageID,componentId:j.attr("ccid")||"",iseComp:j.attr("isecomp")||"0",};a.cdrService(k,d.compData.JS.cdrData);var i=j.attr("ccid")||"";if("msgdlg.close"==i||"msgdlg.cancel"==i){top.tlbs.notificationCdrData=null}}})};d.$on(b.cid+"_handleEvent",function(k,l,j,i){d.eventMap[l](j);if(null!=i){i.resolve()}});h()}],link:function(c,a,d,b){c.pageID=b.pageID;c.componentType="msgdlg";c.init()}}});
uiCore.directive('itab', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            require: '^pid',
            template: '<div ng-style="compData.CSS"><div ng-repeat="tab in compData.JS.tabs" id="{{tab.name}}" ng-style="compData.JS.tabStyle.defaultStyle"><div ng-style="compData.JS.tabStyle.tabholder" ng-class="{tabclick: compData.JS.currentSelected.name == tab.name}" ng-click="onClickTab(tab,true);$event.stopPropagation();"><div ng-style="compData.JS.tabStyle.textholder" class="rtlstyle">{{tab.name}}</div></div><div ng-show="showA(tab)" ng-style="compData.JS.tabStyle.arrowholder"><div ng-style="compData.JS.tabStyle.arrow"></div></div></div></div>',
            scope: {},
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$window',
                function($scope, $element, $attrs, $window) {
                    $scope.cid = $attrs.cid;
                    $scope.compData = {
                        'CSS': {},
                        'JS': {
                            'tabDataRespPath': '',
                            'tabStyle': {},
                            'tabs': [],
                            'currentSelected': '',
                            'textConfig': {},
                            'cdrConfig': {
                                'uitracingcdr': {
                                    'cdrType': 'uitracingcdr',
                                    'enable': true,
                                    'storeData': false
                                }
                            }
                        }
                    };
                    $scope.eventMap = {};
                    
                    //点击tab执行的方法
                    $scope.onClickTab = function(tab, isUserClick) {
                    	$scope.tabname = tab.name;
                    	$scope.cateName = tab.cateName;
                    	if(isUserClick && tab==$scope.compData.JS.currentSelected){
    						return;
    					}
                        $scope.compData.JS.currentSelected = tab;
                        coreService.fireEvent($scope.cid, 'tabClick', tab);
                        
                        if (isUserClick) {
                            if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
                                $scope.compData.JS['cdrData'] = {};
                                $scope.compData.JS.cdrData = {
                                    'pageId': $scope.pageID,
                                    'componentId': $scope.cid
                                };
                                coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
                            }
                        }
                    };
                    $scope.showA = function(tab){
                    	return tab.name == $scope.compData.JS.currentSelected.name;
                    };
                    
                    $scope.addTabname = function(data){
                    	if($scope.tabname && data.name && data.price){
                        	data.tabname = '"' + $scope.tabname + '"';
                        	data.name = '"' + data.name + '"';
                        	data.cdrPrice = data.price;
                        	data.price = '"' + data.price + ' EGP"';
                        	data.CategoryId = $scope.cateName || '';
                    	}
                    };
                    $scope.eventMap['addTabname'] = $scope.addTabname;
                    
                    function setDefaultHeight() {
                    	if($scope.compData.JS.tabs != 'undefined' && $scope.compData.JS.tabs != null && $scope.compData.JS.tabs.length >= 3) {
                    		$scope.compData.JS.tabStyle.defaultStyle['height'] = 9.55/$scope.compData.JS.tabs.length - 0.3 + "em";
                    	}else{
                    		$scope.compData.JS.tabStyle.defaultStyle['height'] = '3.4em';
                    	}
                    };
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.selectTabByIndex = function(tabIndex) {
                        if (null != $scope.compData.JS.tabs && null != $scope.compData.JS.tabs[tabIndex]) {
                            $scope.compData.JS.currentSelected = $scope.compData.JS.tabs[tabIndex];
                        }
                    };

                    $scope.selectTabById = function(tabId) {
                        if (null != $scope.compData.JS.tabs && null != tabId.data) {
                            var selectTabId = tabId.data;
                            for (var i = 0; i < $scope.compData.JS.tabs.length; i++) {
                                var singleTab = $scope.compData.JS.tabs[i];
                                if (singleTab.id === selectTabId) {
                                    $scope.compData.JS.currentSelected = singleTab;
                                    break;
                                }
                            }
                        }
                    };

                    $scope.tabByIndex = function(tabIndex) {
                        if (null != $scope.compData.JS.tabs && null != $scope.compData.JS.tabs[tabIndex.data - 1]) {
                            $scope.compData.JS.currentSelected = $scope.compData.JS.tabs[tabIndex.data - 1];
                        }
                    };
                    $scope.changeTabDisplayByIndex = function(tabIndex, display) {
                        if (null != $scope.compData.JS.tabs && null != $scope.compData.JS.tabs[tabIndex]) {
                            $scope.compData.JS.tabs[tabIndex].display = display;
                        }
                    };
					
                    //对pkgdetail报文做处理：将价格和流量拼接生成fprice
                    $scope.formatResp = function(data) {
                    	//判断查询返回的状态
                    	if(data.respparam.successcode && data.respparam.successcode == 'RP-00001') {
                    		coreService.fireEvent($scope.cid, 'updatetosfail');
                    		return;
                        }else if(data.respparam.successcode && data.respparam.successcode != 0){
                        	coreService.fireEvent($scope.cid, 'updatetorefail');
                         	return;
                        }
                    	
                    	var cresp = data.respparam.subCategory;
                    	var langFlag = top.tlbs.languageID == 'ar';
                    	function format(sub){
                    		if(sub && sub.length > 0){
                    			for (var i = 0, l = sub.length; i < l; i++){
                    				var pkg = sub[i];
                					pkg.cateName = pkg.name;
                    				if(langFlag){
                    					pkg.name = pkg.name_ar;
                    					pkg.parentName = pkg.parentNameAr;
                    				}
                    				pkg.name = pkg.name ? pkg.name.toUpperCase().replace(/\//g,'\/\n') : '';
                    				pkg.parentName = pkg.parentName ? pkg.parentName.toUpperCase() : '';
                    				
                    				if (pkg.price != null && pkg.price != '0.0') {
                    					if (pkg.total) {
                        					pkg.fprice = parseFloat((pkg.total / 1024).toFixed(2)) + 'MB' + ' / ' + pkg.price + ' EGP';
                    					}else if (pkg.quota != null) {
                    						pkg.fprice = pkg.quota + ' / ' + pkg.price + ' EGP';
                    					}else {
                    						pkg.fprice = pkg.price + ' EGP';
                    					}
                    					pkg.showPrice = true;
                    				}else {
                    					if (pkg.total) {
                    						pkg.fprice = parseFloat((pkg.total / 1024).toFixed(2)) + 'MB';
                    						pkg.showPrice = true;
                    					}else if (pkg.quota != null) {
                    						pkg.fprice = pkg.quota;
                    						pkg.showPrice = true;
                    					}
                    				}
                    				
                    				if(pkg.subCategory){
                    					format(pkg.subCategory);
                    				}
                    			}
                    		}
                    	};
                    	format(cresp);
                    	coreService.fireEvent($scope.cid, 'showholder');
                    	return data;
                    };
                    
					//用于收到pkg报文后更新tab数据
                    $scope.updateTabsData = function(tabsData) {
                    	//处理报文
                    	$scope.formatResp(tabsData);
                    	
                        //取出报文中数据
                        if ($scope.compData.JS.tabDataRespPath) {
                        	$scope.compData.JS.tabs = coreUtils.transfer(tabsData, $scope.compData.JS.tabDataRespPath);
                        } else {
                        	$scope.compData.JS.tabs = tabsData;
                        }
                        $scope.initTab();
						setDefaultHeight();
                        $scope.$evalAsync(
                            function() {
                                if (null != $scope.compData.JS.currentSelected && '' != $scope.compData.JS.currentSelected) {
                                    $scope.onClickTab($scope.compData.JS.currentSelected, false);
                                }
                           });
                    };
                    //初始化tab
                    $scope.initTab = function(){
                    	if($scope.compData.JS.tabs != 'undefined' && $scope.compData.JS.tabs != null && $scope.compData.JS.tabs.length > 0){
							$scope.compData.JS.currentSelected = $scope.compData.JS.tabs[0];
							$scope.onClickTab($scope.compData.JS.currentSelected, false);
                    	}
                    };

//                    $scope.eventMap['formatResp'] = $scope.formatResp;
                    $scope.eventMap['tabByIndex'] = $scope.tabByIndex;
                    $scope.eventMap['isActiveTab'] = $scope.isActiveTab;
                    $scope.eventMap['selectTabByIndex'] = $scope.selectTabByIndex;
                    $scope.eventMap['selectTabById'] = $scope.selectTabById;
                    $scope.eventMap['changeTabDisplayByIndex'] = $scope.changeTabDisplayByIndex;
                    $scope.eventMap['changeTabDisplayById'] = $scope.changeTabDisplayById;
                    $scope.eventMap['updateTabsData'] = $scope.updateTabsData;
                    $scope.eventMap['initTab'] = $scope.initTab;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    });
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'itab';
                scope.init();
            }
        };
    }
]);
uiCore.directive("iappbuttonholder",["coreService","coreUtils","$timeout","Const","$window",function(j,g,f,i,h){return{restrict:"AE",replace:true,template:'<div ng-style="compData.CSS" ><div ng-style="compData.JS.appbuttoncontainer.CSS"><div  ng-style="compData.JS.appbutton.CSS" ng-repeat="apps in compData.JS.dataset | limitTo:compData.JS.maxcount" id="news_app_{{$index}}" ng-click="compData.JS.clickable?handleClick({{$index}}):clickDisable();$event.stopPropagation();"><imageholder cid="appimage" dynamicproperties="{\'CSS\':{\'background-image\':apps.imageurl}}" param="compData.JS.appbutton.JS.imageconfig"></imageholder><irichtext cid="apptext" param="settextdata(compData.JS.appbutton.JS.textconfig,apps.title)"></irichtext></div></div></div>',scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs",function(a,b,c){a.cid=c.cid;a.index=0;a.maxindex=0;a.eventMap={};a.imageset={};a.compData={};a.handleClick=function(d){d=a.compData.JS.dataset[d].weblink;if(null!=d&&d.length!=0){j.commonServiceRef.dynamicService(null,{serviceType:"urlservice",openurl:d})}};a.clickDisable=function(){};a.settextdata=function(d,e){d.JS.textdata=e;return d};a.extendComponentData=function(d){a.compData=g.extendDeep(a.compData,d);f(function(){a.$apply()})};a.init=function(){j.registerComponentInstance(a.cid,a);a.extendComponentData(j.getInitProperties(a.cid));a.maxindex=a.compData.JS.maxcount;this.setNewsappData(window.newsparam)};a.setNewsappData=function(d){if(a.compData.JS.newsappsConfigRespPath){a.compData.JS.dataset=g.transfer(d,a.compData.JS.newsappsConfigRespPath)}if(null!=a.compData.JS.dataset&&a.compData.JS.dataset.length<a.compData.JS.maxcount){a.maxindex=a.compData.JS.dataset.length}};a.eventMap.setNewsappData=a.setNewsappData;a.$on(a.cid+"_handleEvent",function(d,m,e,n){a.eventMap[m](e,n)})}],link:function(b,c,d,a){b.pageID=d.ppageid||a.pageID;b.componentType="iappbuttonholder";b.init()}}}]);
uiCore.directive("idropdownlist",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div><horizontal-container param="compData.JS.sgH1" class="idropdownhorizantalline" ><horizontal-container  param="compData.JS.sgH1r1" class="idropdownhorizantalline" ><richtext param="compData.JS.sgpackeffectiveetime" ></richtext></horizontal-container><horizontal-container  param="compData.JS.sgH1r2" ><div class="idropdownlistmain" ><select ng-click="handleClick1($event);" ng-change="handleClick();" ng-style="compData.CSS"   ng-model="compData.JS.selectedValue" ng-options="key.name  for key in compData.JS.Dataset" ></select></div></horizontal-container></horizontal-container><horizontal-container param="compData.JS.sgH2" class="idropdownhorizantalline" ng-show="isShowSecondList"><horizontal-container param="compData.JS.sgH2r1" class="idropdownhorizantalline"  ><richtext param="compData.JS.sgpackeffectiveetime1"  ></richtext></horizontal-container><horizontal-container param="compData.JS.sgH2r2"  ><div class="idropdownlistmain" ><select ng-click="handleClick2($event);" class="ui_com_second_dropdown"  ng-disabled="disablelist" ng-style="compData.CSS"   ng-model="compData.JS.selectedValue2" ng-options="key as key.name for key in compData.JS.Dataset2" ></select></div></horizontal-container></horizontal-container></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{textdata:"",clickable:false,setflag:"1",key1:"time",key2:"period",selectedValue:"",selectedValue2:"",opacity:"0.2",stateconfig:{state:0,state0:{},state1:{}},sgpackeffectiveetime:{CSS:{color:"#999999","font-size":"0.55em","font-family":"Microsoft Yahei",width:"100%","text-align":"center",display:"table-cell","vertical-align":"middle"},JS:{text:"生效时间:"}},sgpackeffectiveetime1:{CSS:{color:"#999999","font-size":"0.55em","font-family":"Microsoft Yahei",width:"100%","text-align":"center",display:"table-cell","vertical-align":"middle"},JS:{text:"生效时长:"}},sgH1:{CSS:{},JS:{sgH1:{border:"none","box-shadow":"none",display:"flex",extendable:false,height:"2em",position:"relative",width:"100%"},type:"sgH1"}},sgH1r1:{CSS:{},JS:{sgH1r1:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative",width:"22%","background-color":"#F6F6F6"},type:"sgH1r1"}},sgH1r2:{CSS:{},JS:{sgH1r2:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative"},type:"sgH1r2"}},sgH2:{CSS:{},JS:{sgH2:{border:"none","box-shadow":"none",display:"flex",extendable:false,height:"2em",position:"relative",width:"100%"},type:"sgH2"}},sgH2r1:{CSS:{},JS:{sgH2r1:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative",width:"22%","background-color":"#F6F6F6"},type:"sgH2r1"}},sgH2r2:{CSS:{},JS:{sgH2r2:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative"},type:"sgH2r2"}},},};g.handleClick1=function(i){i.stopPropagation()};g.handleClick2=function(i){i.stopPropagation()};g.handleClick=function(){if(g.isMonthPack){return}if(g.compData.JS.selectedValue.value==g.compData.JS.setflag){g.disablelist=true;g.secondDropdown.css({opacity:g.compData.JS.opacity});g.compData.JS.selectedValue2=g.compData.JS.Dataset2[0]}else{g.disablelist=false;g.compData.JS.selectedValue2=g.compData.JS.Dataset2[1];g.secondDropdown.css({opacity:"1.0"})}b(function(){g.$apply()})};g.disablelist=false;g.isShowSecondList=true;g.clickDisable=function(){};g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i);b(function(){g.$apply()})};g.getData=function(i){g.edata=d.extendDeep({},i);if(g.edata.isMonthPack){g.isMonthPack=parseInt(g.edata.isMonthPack)}if(g.isMonthPack){g.isShowSecondList=false;g.compData.JS.selectedValue2=g.compData.JS.Dataset2[0]}else{g.isShowSecondList=true}};g.refresh=function(i){g.compData.JS.selectedValue=g.compData.JS.Dataset[0];g.compData.JS.selectedValue2=g.compData.JS.Dataset2[1];g.disablelist=false;g.secondDropdown.css({opacity:"1.0"})};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));var j=g.compData.JS.Dataset;var k=g.compData.JS.Dataset2;g.compData.JS.Dataset=[];g.compData.JS.Dataset2=[];for(var l in j){g.compData.JS.Dataset.push(j[l])}for(var l in k){g.compData.JS.Dataset2.push(k[l])}g.compData.JS.selectedValue=g.compData.JS.Dataset[0];g.compData.JS.selectedValue2=g.compData.JS.Dataset2[1]};g.eventMap["data.update"]=g.getData;g.eventMap.refresh=g.refresh;g.$on(g.cid+"_handleEvent",function(l,j,k,i){g.eventMap[j](k,i)})}],compile:function(e,d){return{pre:function(h,i,g,f,j){h.pageID=f.pageID;h.componentType="idropdownlist";h.init()},post:function(i,g,h,f,j){var k=g[0].querySelector(".ui_com_second_dropdown");i.secondDropdown=angular.element(k)}}},}}]);
uiCore.directive("idropdown",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div><horizontal-container param="compData.JS.outerContainer"><horizontal-container  param="compData.JS.innerContainer" ng-show="compData.JS.supportMap"><div><select ng-click="handleSelectClick($event);" ng-change="handleOptionClick();" ng-style="compData.CSS" ng-model="compData.JS.selectedValue" ng-options="key.{{compData.JS.dataValue}} for key in compData.JS.Dataset" ></select></div></horizontal-container><horizontal-container  param="compData.JS.innerContainer" ng-show="compData.JS.supportListArray"><div><select ng-click="handleSelectClick($event);" ng-change="handleOptionClick();" ng-style="compData.CSS" ng-model="compData.JS.selectedValue" ng-options="key as key for key in compData.JS.Dataset" ></select></div></horizontal-container></horizontal-container></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{supportMap:true,supportListArray:false,dataValue:"langname",dataKey:"langid",clickable:false,Dataset:{},selectedValue:"0",getSelectedValue:"",stateconfig:{state:0,state0:{},state1:{}},outerContainer:{CSS:{display:"table-cell","vertical-align":"middle"},JS:{outerContainer:{border:"none","box-shadow":"none",display:"flex",extendable:false,height:"1em",position:"relative",width:"100%"},type:"outerContainer"}},innerContainer:{CSS:{"background-size":"auto auto","background-origin":"padding-box","background-attachment":"scroll",overflow:"hidden","background-color":"transparent",margin:"0",padding:"0","background-repeat":"repeat-x","background-position":"0px bottom","background-clip":"border-box"},JS:{innerContainer:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"1em",position:"relative",margin:"0 auto"},type:"innerContainer"}},dataMapping:"respparam.usrPref.templateLangList",},};g.handleSelectClick=function(i){g.compData.JS.getSelectedValue=g.compData.JS.selectedValue[g.compData.JS.dataKey];i.stopPropagation()};g.handleOptionClick=function(){b(function(){g.$apply()})};g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i);b(function(){g.$apply()})};g.getData=function(i){g.edata=d.extendDeep({},i);g.compData.JS.Dataset=g.edata;if(g.compData.JS.dataMapping){g.compData.JS.Dataset=d.transfer(i,g.compData.JS.dataMapping);g.compData.JS.selectedValue=g.compData.JS.Dataset[0];g.compData.JS.getSelectedValue=g.compData.JS.selectedValue[g.compData.JS.dataKey]}};g.refresh=function(i){g.compData.JS.selectedValue=g.compData.JS.Dataset[0]};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));var j=g.compData.JS.Dataset;g.compData.JS.Dataset=[];for(var k in j){g.compData.JS.Dataset.push(j[k])}g.compData.JS.selectedValue=g.compData.JS.Dataset[0]};g.eventMap["data.update"]=g.getData;g.eventMap.refresh=g.refresh;g.$on(g.cid+"_handleEvent",function(l,j,k,i){g.eventMap[j](k,i)})}],link:function(f,g,e,d,h){f.pageID=d.pageID;f.componentType="idropdown";f.init()}}}]);
uiCore.directive("pid",function(){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs",function(c,b,a){this.pageID=a.pid}]}});
uiCore.directive("irichtext",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div ng-click="compData.JS.clickable?handleClick():clickDisable();" {{param}}>{{compData.JS.textdata}}</div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{textdata:"",clickable:false,stateconfig:{state:0,state0:{},state1:{}}}};g.handleClick=function(){h.fireEvent(g.cid,"click"+g.compData.JS.stateconfig.state)};g.clickDisable=function(){};g.$on(e.cid+"_handleEvent",function(k,l,j,i){if(g.eventMap[l]){g.eventMap[l](j);if(null!=i){i.resolve()}}});g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i)};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));g.applyStyle()};g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="irichtext";g.init()}}}]);
uiCore.directive("simplescroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(j,k,h,d,a){var c,e,i=0,g=0;var b=/preto/i.test(navigator.userAgent)||/opera/i.test(navigator.userAgent);var f=function(){var t=a.touchEvent.start;var o=a.touchEvent.move;var x=a.touchEvent.end;var v=0;var l=0;var y=0;var p=0;var w=false;var s=0;var u=0;var n=false;var r=function(A){top.tlbs.popupTxtMove=false;var z=k[0].style.webkitTransform||k[0].style.mozTransform||k[0].style.msTransform||k[0].style.msTransform||k[0].style.oTransform;if(z){v=z.split(",")[1]&&parseInt(z.split(",")[1])}else{v=0}n=true;s=parseInt(h.totalheight||top.window.getComputedStyle(k[0],null)["height"])+20;u=parseInt(h.parentheight||top.window.getComputedStyle(k[0].parentNode,null)["height"]);l=A.touches?A.touches[0].pageY:A.pageY;if(s>u){top.document.addEventListener(o,q,false);top.document.addEventListener(x,m,false)}};var q=function(z){if(n){y=z.touches?z.touches[0].pageY:z.pageY;p=y-l;if(Math.abs(p)>3||w){top.tlbs.popupTxtMove=true;w=true;z.stopPropagation();z.preventDefault()}l=y;v+=p;if(v>0){v=0}else{if(v+s<=u){v=u-s}}if(b){k.css("-o-transform","translate(0,"+v+"px)");k.css("transform","translate(0,"+v+"px)")}else{k.css("-webkit-transform","translate3d(0,"+v+"px,0)");k.css("-moz-transform","translate3d(0,"+v+"px,0)");k.css("-o-transform","translate3d(0,"+v+"px,0)");k.css("-ms-transform","translate3d(0,"+v+"px,0)");k.css("transform","translate3d(0,"+v+"px,0)")}}};var m=function(z){if(w){z.stopPropagation();z.preventDefault();w=false}n=false;top.document.removeEventListener(o,q,false);top.document.removeEventListener(x,m,false)};k.bind(t,r)};d(f,0)}],link:function(c,b,a){}}});
uiCore.directive("tbparentisolator",[function(){return{restrict:"AE",controller:["$scope","$element","$attrs",function(l,j,e){var c=300;var h=angular.element,m=angular.copy,o=angular.forEach,i=angular.isString,p=angular.extend;var d,a,g=0;var b={stopPropagation:false,shouldBlurOnDrag:true},k=function(s){return s&&(s.tagName==="INPUT"||s.tagName==="SELECT"||s.tagName==="TEXTAREA")},f=function(s){return{origin:{x:s.x,y:s.y},pos:{x:s.x,y:s.y},distance:{x:0,y:0,magnitude:0},delta:{x:0,y:0,magnitude:0},startedAt:Date.now(),updatedAt:Date.now(),stopped:false,active:true}},q=function(u){u=u.originalEvent||u;var t=h(u.target||u.srcElement);b.stopPropagation&&u.stopPropagation();var s=u.touches?u.touches[0]:u;if(b.shouldBlurOnDrag&&k(t)){document.activeElement&&document.activeElement.blur()}self.state=f({x:s.pageX,y:s.pageY})},r=function(t){t=t.originalEvent||t;var s=t.target;if(null!=self.state&&self.state.active&&!k(s)){t.preventDefault()}},n=function(s){if(null!=self.state&&self.state.active){s=s.originalEvent||s;b.stopPropagation&&s.stopPropagation();self.state={}}};j.bind("touchstart",q);j.bind("touchmove",r);j.bind("touchend touchcancel",n)}]}}]);
uiCore.directive("idivholder",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"AE",replace:true,transclude:true,template:"<div {{param}} ng-transclude></div>",scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs",function(f,e,d){f.cid=d.cid;f.eventMap={};f.compData={CSS:{},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{}}}};f.extendComponentData=function(g){f.compData=a.extendDeep(f.compData,g)};f.init=function(){c.registerComponentInstance(f.cid,f);f.extendComponentData(c.getInitProperties(f.cid))};f.getHolderStyle=function(){if(null!=f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state]){return a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state])}};f.handleClick=function(){c.fireEvent(f.cid,(f.compData.JS.clickevent||"")+"click"+f.compData.JS.stateconfig.state)};f.clickDisable=function(){};f.changeState=function(h,g){if(null!=h&&null!=h.cstate){if(f.compData.JS.stateconfig.state!=h.cstate){f.compData.JS.stateconfig.state=h.cstate;f.applyStyle();f.$evalAsync(function(){if(null!=g){if(f.compData.JS.animation){if(top.tlbs.isTransitionSupported){e.on(top.tlbs.transitionendEvent,function(i){g.resolve()})}else{g.resolve()}}else{g.resolve()}}})}else{if(null!=g){g.resolve()}}}};f.applyStyle=function(){if(null!=f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state]){a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state])}e.css(f.compData.CSS)};f.changeExtraState=function(h,g){if(null!=h&&null!=h.cstate){f.compData.CSS=a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+h.cstate]);f.applyStyle()}};f.eventMap.changeState=f.changeState;f.eventMap.changeExtraState=f.changeExtraState;f.$on(f.cid+"_handleEvent",function(j,h,i,g){f.eventMap[h](i,g)});f.$on("stateChange",function(g){f.applyStyle()});f.$watch(f.param,function(g){if(f.param){f.compData=f.param;f.applyStyle()}})}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="idivholder";f.init()}}}]);
uiCore.directive("logodock",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","$window","coreService","coreUtils",function(r,p,h,B,n,w,d){var f=300;var A=function(){return{width:(top.window.innerWidth||top.window.document.documentElement.clientWidth||top.window.document.body.clientWidth),height:(top.window.innerHeight||top.window.document.documentElement.clientHeight||top.window.document.body.clientHeight)}};r.moved=false;var b=A().height,o=0;var l=angular.element,s=angular.copy,v=angular.forEach,m=angular.isString,x=angular.extend;var g,c,j=0;var e={stopPropagation:false,shouldBlurOnDrag:false},u=function(D,C){D.delta=k(C,D.pos);D.distance=k(C,D.origin);D.pos={x:C.x,y:C.y};D.updatedAt=Date.now()},k=function(C,E){var D={x:C.x-E.x,y:C.y-E.y};D.magnitude=Math.sqrt(D.x*D.x+D.y*D.y);return D},q=function(C){return C&&(C.tagName==="INPUT"||C.tagName==="SELECT"||C.tagName==="TEXTAREA")},i=function(C){return{origin:{x:C.x,y:C.y},pos:{x:C.x,y:C.y},distance:{x:0,y:0,magnitude:0},delta:{x:0,y:0,magnitude:0},startedAt:Date.now(),updatedAt:Date.now(),stopped:false,active:true}},z=function(E){b=A().height;o=parseFloat(top.window.getComputedStyle(p[0]).height);E=E.originalEvent||E;var D=l(E.target||E.srcElement);e.stopPropagation&&E.stopPropagation();var C=E.touches?E.touches[0]:E;if(e.shouldBlurOnDrag&&q(D)){document.activeElement&&document.activeElement.blur()}self.state=i({x:C.clientX,y:C.clientY})},y=function(E){E=E.originalEvent||E;if(null!=self.state&&self.state.active){r.moved=true;E.preventDefault();e.stopPropagation&&E.stopPropagation();var C=E.touches?E.touches[0]:E;C={x:C.clientX,y:C.clientY};var D=Date.now()-self.state.updatedAt;if(D>f){self.state=i(C)}u(self.state,C);if(self.state.pos.y<=0){p.parent().parent().css({top:"0px"})}else{if(self.state.pos.y<=(b-o)&&self.state.pos.y>o){p.parent().parent().css({top:self.state.pos.y+"px"})}}w.commonServiceRef.schedulerService({on:"autoclose"},{cycle:"1",interval:"5000",start:"2"})}},t=function(C){if(null!=self.state&&self.state.active&&null!=self.state.distance&&r.moved==true){r.moved=false;C=C.originalEvent||C;e.stopPropagation&&C.stopPropagation();var D=top.tlbs.dockPosition||false;if(self.state.pos.y>=(b/2)){if(D){w.fireEvent(p.attr("cid"),"moveBottom",{});top.tlbs.dockPosition=false;var E={on:"toolbardockupdate"};w.commonServiceRef.remoteService(E,{dockposition:false})}p.parent().parent().css({bottom:"0px",top:"initial"})}else{if(!D){w.fireEvent(p.attr("cid"),"moveTop",{});top.tlbs.dockPosition=true;var E={on:"toolbardockupdate"};w.commonServiceRef.remoteService(E,{dockposition:true})}p.parent().parent().css({top:"0px",bottom:"initial"})}self.state.updatedAt=Date.now();self.state.stopped=(self.state.updatedAt-self.state.startedAt)>f;self.state={}}},a=function(){p.bind("touchstart",z);p.bind("touchmove",y);p.bind("touchend touchcancel",t);p.bind("mousedown",z);p.bind("mousemove",y);p.bind("mouseup mouseout",t)};B(a,0)}],link:function(c,b,a){}}});
uiCore.directive("iresize",["$window","$interval",function(b,a){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs",function(f,e,c){var d=angular.element(top.window);d.bind("resize",function(){f.$apply()});f.getWindowDimensions=function(){return{h:top.window.innerHeight,w:top.window.innerWidth}};f.$watch(f.getWindowDimensions,function(h,g){f.rresize()},true);f.prevWidth=0;f.prevHeight=0;f.currWidth=top.window.innerWidth;f.currHeight=top.window.innerHeight;f.rresize=function(){var h=360,j=320;f.currWidth=top.window.innerWidth;f.currHeight=top.window.innerHeight;var k=0,g=0;if(f.prevWidth==f.currWidth&&f.currHeight!=f.prevHeight&&Math.min(f.prevHeight,f.currHeight)/Math.max(f.prevHeight,f.currHeight)>=0.8){f.prevWidth=f.currWidth;f.prevHeight=f.currHeight;return}if(f.prevWidth==f.currWidth&&f.prevHeight==f.currHeight){return}if(f.currWidth<=f.currHeight){k=f.currWidth/j}else{k=f.currHeight/h}if(j*k>f.currWidth){k=f.currWidth/j}var i=k*18;i=i>27?27:i;e.css("font-size",i+"px");f.prevWidth=f.currWidth;f.prevHeight=f.currHeight}}]}}]);uiCore.directive("lresize",["$window","$interval",function(b,a){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs",function(h,f,c){var e=angular.element(top.window);e.bind("resize",function(){h.$apply()});h.getWindowDimensions=function(){return{h:top.window.innerHeight,w:top.window.innerWidth,fs:parseFloat(top.window.getComputedStyle(f[0],null)["fontSize"]),width:(top.window.innerWidth||top.window.document.documentElement.clientWidth||top.window.document.body.clientWidth),height:(top.window.innerHeight||top.window.document.documentElement.clientHeight||top.window.document.body.clientHeight),ph:top.window.getComputedStyle(f.parent()[0]).height,pw:parseFloat(top.window.getComputedStyle(f.parent()[0]).width),cw:f.css("width")}};e.bind("scroll",function(){h.rresize()});h.$watch(h.getWindowDimensions,function(j,i){h.rresize()},true);var d=360,g=320;h.prevWidth=0;h.prevHeight=0;h.rresize=function(){if((top.window.innerWidth/top.document.documentElement.clientWidth)!=1){f.css("bottom",top.document.documentElement.clientHeight-(top.window.pageYOffset+top.window.innerHeight)+"px");f.css("position","absolute");if(f.css("width")!="0%"){f.css("right","-"+top.window.pageXOffset+"px")}else{if(top.window.pageXOffset==0){f.css("right",top.document.documentElement.clientWidth-top.window.innerWidth+"px")}else{if(top.window.pageXOffset>0){f.css("right","-"+top.window.pageXOffset+"px")}}}}else{h.setFontSize();f.css("position","fixed");f.css("bottom","0px");f.css("right","0px")}f.css("-webkit-transform","scale("+top.window.innerWidth/top.document.documentElement.clientWidth+")");f.css("-webkit-box-sizing","border-box");f.css("box-sizing","border-box");f.css("-webkit-transition","all 0.2s ease-in-out");f.css("-webkit-transform-origin","0 100%")};h.setFontSize=function(){h.currWidth=top.window.innerWidth;h.currHeight=top.window.innerHeight;var k=0,i=0;if(h.prevWidth==h.currWidth&&h.currHeight!=h.prevHeight&&Math.min(h.prevHeight,h.currHeight)/Math.max(h.prevHeight,h.currHeight)>=0.8){h.prevWidth=h.currWidth;h.prevHeight=h.currHeight;return}if(h.prevWidth==h.currWidth&&h.prevHeight==h.currHeight){return}if(h.currWidth<=h.currHeight){k=h.currWidth/g}else{k=h.currHeight/d}if(g*k>h.currWidth){k=h.currWidth/g}var j=k*18;f.css("font-size",j+"px");h.prevWidth=h.currWidth;h.prevHeight=h.currHeight;h.prevWidth=h.currWidth;h.prevHeight=h.currHeight}}]}}]);
uiCore.directive("logodrag",["coreService",function(a){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const","coreService",function(h,i,g,d,b,c){h.cid=g.cid;var j=function(){var m=0,k=0,n=i[0];var o=top.window.innerHeight,l=top.window.innerWidth;if(o==undefined){o=top.document.documentElement.offsetHeight;l=top.document.documentElement.offsetWidth}while(n!=null){m+=n.offsetLeft;k+=n.offsetTop;n=n.offsetParent;bottomPos=o-k-i[0].offsetHeight;rightPos=l-m-i[0].offsetWidth}return{x:rightPos,y:bottomPos}};var f=function(){var p="ontouchstart" in document?"touchstart":"mousedown",n="ontouchmove" in document?"touchmove":"mousemove",u="ontouchend" in document?"touchend":"mouseup",q=false,s=false,m=true,r=0,v=0,l=false;i.parent().css({position:"fixed"});i.bind(p,function(y){y.preventDefault();y.stopPropagation();var x=j();var z=y.touches?y.touches[0].pageY:y.pageY;var B=y.touches?y.touches[0]:y,A={x:B.pageX,y:B.pageY};if(o()){return}if(!(/Windows NT/g.test(navigator.userAgent))){c.fireEvent(h.cid,"unlockLogoClick",null);t()}l=true;var C=function(E){E.preventDefault();E.stopPropagation();if(o()){return}k();if(!q){q=true}var F=E.touches?E.touches[0].pageY:E.pageY;var D=E.touches?E.touches[0]:E;if(Math.abs(F-z)<5){return}i.parent().css({right:x.x+A.x-D.pageX+"px",bottom:x.y+A.y-D.pageY+"px"});l=false;c.fireEvent(h.cid,"lockLogoClick",null)},w=function(D){r=i.parent().css("bottom"),v=i.parent().css("right");if((r==""&&v=="")||(r=="18px"&&v=="30px")){top.document.removeEventListener(n,C,false);top.document.removeEventListener(u,w,false);return}if(l){c.fireEvent(h.cid,"unlockLogoClick",null);t()}if(q){D.stopPropagation();D.preventDefault();q=false}top.document.removeEventListener(n,C,false);top.document.removeEventListener(u,w,false)};top.document.addEventListener(n,C,false);top.document.addEventListener(u,w,false)});var o=function(){s=i.parent().hasClass("state1");return s},t=function(){l=false;i.parent().css({bottom:"18px",right:"30px"})},k=function(){i.css({opacity:"1"})}},e=function(){f()};d(e,0)}],link:function(d,c,b){}}}]);
uiCore.directive('pvctrl', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'A',
            replace: false,
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$interval',
                function($scope, $element, $attrs, $interval) {
                    $scope.cid = 'pvctrl';
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.ctrlPageGroup = {};
                        var alllLoad = angular.element($element[0].querySelectorAll('[lload="0"]'));
                        for (var i = 0; i < alllLoad.length; i++) {
                            var localElement = angular.element(alllLoad[i]);
                            $scope.ctrlPageGroup[localElement.attr('pid')] = localElement;
                        }
                    };
                    //0:chinese word  1:english word or num 2:标点符号
                    function checkword(str){
                    	var regCh = new RegExp("[\\u4E00-\\u9FA5\uFE30-\uFFA0]+","g");
                    	var regNumEng = new RegExp("[0-9a-zA-z]+","g");
                    	if(regCh.test(str)==true){
                    		return 15;
                    	}else if(regNumEng.test(str)==true){
                    		return 1;
                    	}else{
                    		return 15;
                    	}
                    }
                    function getEncodeMsg(message){
                    	var newStr = "";
                    	var count = 0,temp = 0,i;
                    	for(i=0;i<message.length;i++){
                    		temp = count + checkword(message[i]);
                    		if(temp>1000){
                    			break;
                    		}else{
                    			count = temp;
                    		}
                    	}
                    	if(i==message.length){
                    		return message;
                    	}else{
                    		return message.substring(0,i);
                    	}
                    }
                    $scope.lloadApps = function(loadObject, deferred) {
                        if (null != loadObject.applist && loadObject.applist.length > 0) {
                            var pageidSplit = loadObject.applist.split(',');
                            var appArrayObj = new loadAppArray().eexecute(pageidSplit, deferred);
                            var serverRespTime = loadObject.sresptime || '';
                            var cdrConfig = {
                                'cdrType': 'uinotiftracingcdr',
                                'enable': true,
                                'storeData': false
                            };
                            var cdrData = {
                                'taskId': loadObject.taskId,
                                'componentId': pageidSplit[0],
                                'pageId': pageidSplit[0],
                                'message': encodeURIComponent(encodeURIComponent(getEncodeMsg(loadObject.message || ''))),
                                'sresptime': serverRespTime,
                                'functionid': loadObject.functionid,
                                'policyName': loadObject.policyName,
                            };
                            coreUtils.cdrService(cdrConfig, cdrData);
                            top.tlbs.notificationCdrData = cdrData;
                        } else if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    var loadAppArray = function() {

                    };

                    loadAppArray.prototype.eexecute = function(pageArray, deferred) {
                        var i = 0,
                            j = pageArray.length,
                            count = 0,
                            pageArrayIds = pageArray,
                            deferred = deferred;
                        var executeFunction = function(lKey) {
                            var loadingPageId = pageArrayIds[count];
                            var pageObject = $scope.ctrlPageGroup[loadingPageId];
                            if (null != pageObject && pageObject.attr('lload') == 0) {
                                pageObject.attr('lload', '1');
                                var cdrConfig = {
                                    'cdrType': 'uidisplaycdr',
                                    'enable': true,
                                    'storeData': false
                                };
                                var cdrData = {
                                    'pageId': loadingPageId,
                                    'displayType': 1,
                                    'displayResult': 0
                                };
                                coreUtils.cdrService(cdrConfig, cdrData);
                            }
                            count = count + 1;
                            if (count == j && null != deferred) {
                                $timeout(function() {
                                    deferred.resolve();
                                });
                            }
                        };
                        $interval(executeFunction, 10, j, this.loadKey);
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'pvctrl';
                scope.init();
            }
        };
    }
]);
uiCore.directive('repeatFinish', function() {
	return {
		link: function(scope, element, attr) {
			if (scope.$last == true) {
				scope[attr.repeatFinish]();
			}
		}
	}
})
uiCore.directive('iholder', [
		'coreService',
		'coreUtils',
		'$timeout',
		'$rootScope',
		function (coreService, coreUtils, $timeout, $rootScope) {
			return {
				restrict : 'E',
				replace : true,
				transclude : true,
				template : '<div ng-click="compData.JS.clickable && handleClick();$event.preventDefault();$event.stopPropagation();" {{param}} ng-transclude></div>',
				scope : {
					param : '=param'
				},
				require : '^pid',
				controller : [
					'$scope',
					'$element',
					'$attrs',
					'$compile',
					'$templateCache',
					'$timeout',
					'$document',
					function ($scope, $element, $attrs, $compile, $templateCache, $timeout, $document) {
						$scope.cid = $attrs.cid;
						$scope.classid = '.' + $scope.cid;
						$scope.eventMap = {};
						$scope.compData = {
							'CSS' : {},
							'JS' : {
								'clickable' : false,
								'animation' : false,
								'clickevent' : '',
								'stateconfig' : {
									'stylestates' : '',
									'extrastates' : '',
									'cstylestate' : '',
									'cextrastate' : '',
									'state' : 0,
									'estate' : 0,
									'state0' : {},
									'state1' : {}
								}
							}
						};
						$scope.extendComponentData = function (componetData) {
							$scope.compData = coreUtils.extendDeep($scope.compData, componetData);
						};
						$scope.init = function () {
							coreService.registerComponentInstance($scope.cid, $scope);
							$scope.extendComponentData(coreService.getInitProperties($scope.cid));
							$scope.processStyle();
							$scope.updateStyle();
							if (null != $attrs.templateurl) {
								$scope.getTemplate();
							}
						};
						$scope.getHolderStyle = function () {
							if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
								return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
							}
						};
						$scope.handleClick = function () {
							coreService.fireEvent($scope.cid, ($scope.compData.JS.clickevent || '') + 'click' + $scope.compData.JS.stateconfig.state);
						};
						$scope.changeState = function (stateObject, deferred) {
							if (null != stateObject && null != stateObject.cstate) {
								if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
									$scope.compData.JS.stateconfig.state = stateObject.cstate;
									$scope.updateStyle();
									$scope.$evalAsync(
										function () {
										if (null != deferred) {
											if ($scope.compData.JS.animation) {
												//var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
												if (top.tlbs.isTransitionSupported) {
													$element.on(top.tlbs.transitionendEvent, function (e) {
														deferred.resolve();
													});
												} else {
													deferred.resolve();
												}
											} else {
												deferred.resolve();
											}
										}
									});
								} else if (null != deferred) {
									deferred.resolve();
								}
							}
						};
						$scope.changeExtraState = function (stateObject, deferred) {
							if ($scope.compData.JS.stateconfig.estate != stateObject.cstate) {
								$scope.compData.JS.stateconfig.estate = stateObject.cstate;
								$scope.updateStyle();
							}
							if (null != deferred) {
								deferred.resolve();
							}
						};

						$scope.changeStateAfterDisplay = function (stateObject, deferred) {
							$element.css('display', 'block');
							$scope.forceReflow();
							$scope.changeState(stateObject, deferred);
						};

						$scope.changeStateThenHide = function (stateObject, deferred) {
							$scope.changeState(stateObject, deferred);
							if (null != deferred) {
								deferred.promise.then(function () {
									$element.css('display', 'none');
								});
							}
						};

						$scope.forceReflow = function () {
							var domNode = ($element instanceof angular.element) ? $element[0] : $element;
							return domNode.offsetWidth + 1;
						};

						$scope.hide = function (input) {
							$element.css({
								'display' : 'none'
							});
						};

						$scope.show = function (data) {
							$element.css({
								'display' : 'block'
							});
							var time = $scope.compData.JS.closetime;
							//add by h00278783 消息盒子点击查看详细，不设置定时器-------start------
							if (data && (data.messageid == undefined)) {
								return false;
							}
							//add by h00278783 消息盒子点击查看详细，不设置定时器-------end------
							if (time) {
								//记录到当前弹框消息messageid
								top.tlbs.messageid = data.messageid;
								$timeout(function () {
									if ($element.css('display') != 'none') {
										top.tlbs.notificationCdrData = null;
									}
									$scope.hide();
								}, time);
							}

						};
						
						//针对切换语言接口不好区分的情况，加个过程状态标识，并加个配套的show和hide---start
						$scope.sshow = function(){
							if(top.retlbs.langProcess){
								$element.css({
									'display' : 'block'
								});
							}
						};
						$scope.shide = function(){
							$element.css({
								'display' : 'none'
							});
							top.retlbs.langProcess = false;
						};
						//针对切换语言接口不好区分的情况，加个过程状态标识，并加个配套的sshow和shide---end
						
						$scope.eventMap['sshow'] = $scope.sshow;
						$scope.eventMap['shide'] = $scope.shide;
						$scope.eventMap['changeState'] = $scope.changeState;
						$scope.eventMap['hide'] = $scope.hide;
						$scope.eventMap['show'] = $scope.show;
						$scope.eventMap['changeExtraState'] = $scope.changeExtraState;
						$scope.eventMap['changeStateAfterDisplay'] = $scope.changeStateAfterDisplay;
						$scope.eventMap['changeStateThenHide'] = $scope.changeStateThenHide;
						$scope.$on($scope.cid + '_handleEvent', function (eventObj, event, inputData, deferred) {
							$scope.eventMap[event](inputData, deferred);
						});
						$scope.$watch($scope.param, function (newValue) {
							if ($scope.param) {
								$scope.compData = $scope.param;
							}
						});
						$scope.processStyle = function () {
							var cssData = JSON.stringify($scope.compData.CSS);
							cssData = $scope.formatStyleData(cssData);
							coreService.commonServiceRef.appendStyle($scope.classid, '', cssData);
							var styleStateArray = $scope.compData.JS.stateconfig.stylestates.split('|');
							var styleStateArrayLength = styleStateArray.length;
							var extraStateArray = $scope.compData.JS.stateconfig.extrastates.split('|');
							var extraStateArrayLength = extraStateArray.length;
							for (var i = 0; i < styleStateArrayLength; i++) {
								var styleState = styleStateArray[i];
								if (styleState.length > 0) {
									cssData = JSON.stringify($scope.compData.JS.stateconfig[styleState]);
									cssData = $scope.formatStyleData(cssData);
									coreService.commonServiceRef.appendStyle($scope.classid, '.' + styleState, cssData);
									for (var j = 0; j < extraStateArrayLength; j++) {
										var extraState = extraStateArray[j];
										if (extraState.length > 0) {
											cssData = JSON.stringify($scope.compData.JS.stateconfig[extraState]);
											cssData = $scope.formatStyleData(cssData);
											coreService.commonServiceRef.appendStyle($scope.classid, '.' + styleState + '.' + extraState, cssData);
										}
									}
								}
							}
							$element.addClass($scope.cid);
							if (null != $scope.compData.JS.stateconfig.state) {
								var currentState = 'state' + $scope.compData.JS.stateconfig.state;
								$scope.compData.JS.stateconfig.stylestates = currentState;
							}
						};
						$scope.formatStyleData = function (styleData) {
							styleData = styleData.replace(/","/g, ';').replace(/":"/g, ':').replace(/\\/g, '').replace(/{"/, '{').replace(/"}/, '}');
							return styleData;
						};
						$scope.updateStyle = function () {
							$element.removeClass($scope.compData.JS.stateconfig.cstylestate);
							$element.removeClass($scope.compData.JS.stateconfig.cextrastate);
							$scope.compData.JS.stateconfig.cstylestate = 'state' + $scope.compData.JS.stateconfig.state;
							$element.addClass($scope.compData.JS.stateconfig.cstylestate);
							if ($scope.compData.JS.stateconfig.state != $scope.compData.JS.stateconfig.estate) {
								$scope.compData.JS.stateconfig.cextrastate = 'state' + $scope.compData.JS.stateconfig.estate;
								$element.addClass($scope.compData.JS.stateconfig.cextrastate);
							}
						};
						$scope.getTemplate = function () {
							var elementTemplateCache = $templateCache.get($attrs.templateurl);
							$element.html(elementTemplateCache);
							$compile($element.contents())($scope);
						};
					}
				],
				link : function (scope, element, attrs, ctrl) {
					scope.pageID = ctrl.pageID;
					scope.componentType = 'iholder';
					scope.init();
				}
			};
		}
	]);
uiCore.directive("percentage",function(){return{restrict:"EA",replace:true,scope:{percent:"=",},require:"^pid",template:"<div class='ui-com-percentage'><div class='ui-com-percentage-value'></div><div class='ui-com-percentage-image'></div></div>",controller:["$scope","$element","$attrs","coreService","$timeout","coreUtils",function(d,c,b,f,e,a){d.setPercent=function(g){d.percent=g};d.showPercentage=function(){d.jsProp.styleSet=a.String2JSON(b.styleset);angular.element(c[0].querySelector(".ui-com-percentage-value")).css({"background-color":d.getPercentageColor().activecolor,width:d.percent+"%"});if((b.showpercentageimage=="true")&&(d.getPercentageColor().activeimage)){angular.element(c[0].querySelector(".ui-com-percentage-image")).css({"background-image":d.getPercentageColor().activeimage,left:(d.percent-1)+"%"})}};d.getPercentageColor=function(){var g=undefined;for(p in d.jsProp.styleSet){var h=p.split("_");if(h.length>0){if(parseInt(h[0])<=d.percent&&d.percent<=parseInt(h[1])){return d.jsProp.styleSet[p]}}}return d.jsProp.styleSet.defaultset.activecolor};d.init=function(){var k={},h=f.getInitProperties(b.cid)||{},l=h.JS||{},i=h.CSS||{},j=a.String2JSON(b.jsdata),g=a.String2JSON(b.cssdata);d.jsProp=a.extendDeep(k,l,j);d.cssProp=a.extendDeep(i,g);c.css(d.cssProp);e(d.showPercentage,0)}}],link:function(d,b,a,c){d.pageID=c.pageID;d.componentType="percentage";d.init()}}});
uiCore.directive("iradioselectiondiv",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:false,require:"^pid",scope:{param:"=param"},template:'<div ng-style="compData.CSS"><div ng-click="handleClick({{$index}});$event.stopPropagation();"  ng-style="compData.JS.radiobutton.CSS"  ng-repeat="key in compData.JS.dataset" id="radio_options_{{$index}}" >{{key.name}}</div></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.index=0;g.eventMap={};g.compData={};g.handleClick=function(j){g.changeState(j)};g.changeState=function(j){g.index=j;var k=f[0].querySelector("#radio_options_"+j);for(i=0;i<=f.children().children().length-1;i++){angular.element(f[0].querySelector("#radio_options_"+i)).css(g.compData.JS.radiobutton.JS.inactiveCSS)}angular.element(k).css(g.compData.JS.radiobutton.JS.activeCSS);g.compData.JS.selectedValue=g.compData.JS.dataset[g.index]};g.clickDisable=function(){};g.extendComponentData=function(j){g.compData=d.extendDeep(g.compData,j);b(function(){g.$apply()})};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid))};g.setSelectionValue=function(j){if(g.compData.JS.selectionConfigRespPath){g.compData.JS.dataset=d.transfer(j,g.compData.JS.selectionConfigRespPath)}b(function(){g.$apply();g.changeState(0)})};g.eventMap.setSelectionValue=g.setSelectionValue;g.$on(g.cid+"_handleEvent",function(m,k,l,j){g.eventMap[k](l,j)})}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="iradioselectiondiv";g.init()}}}]);
uiCore.directive('svscroll', function () {
	return {
		restrict : 'A',
		controller : [
			'$scope',
			'$element',
			'$attrs',
			'$timeout',
			'Const',
			function ($scope, $element, $attrs, $timeout, Const) {
				bind = function () {
					var tableElement = $element[0].firstChild;
					var scrollElement = $element[0].lastChild;
					var scrollbar = scrollElement.lastChild.lastChild;
					
					var _touchstart = Const.touchEvent.start;
					var _touchmove = Const.touchEvent.move;
					var _touchend = Const.touchEvent.end;
					var totalDistance = 0;

					var flag = false;
					
					tableElement.addEventListener(_touchstart, function (e) {
						var totalDistance = tableElement.scrollTop;
						var tableHeight = tableElement.firstChild.offsetHeight;
						var holderHeight = tableElement.offsetHeight;
						var hideHeight = tableHeight - holderHeight;
						var scrollHeight = scrollbar.offsetHeight;
						var shideHeight = holderHeight - scrollHeight;
						
						var _lastYPos = e.touches ? e.touches[0].pageY : e.pageY,
						target = e.target,
						touch = function (e) {
							//e.stopPropagation();
							//e.preventDefault();
							var _currentYPos = e.touches ? e.touches[0].pageY : e.pageY;
							var ydistance = _currentYPos - _lastYPos;
							if (Math.abs(ydistance) > 3) {
								if (!flag) {
									flag = true;
								}
								e.stopPropagation();
								e.preventDefault();
							}
							_lastYPos = _currentYPos;
							totalDistance -= ydistance;
							if(totalDistance >= hideHeight){
								totalDistance = hideHeight;
							}else if(totalDistance < 0){
								totalDistance = 0;
							}
							tableElement.scrollTop = totalDistance;
							scrollbar.style.top = shideHeight * (totalDistance/hideHeight) + 'px';
							
						},
						endTouch = function (e) {
							if (flag) {
								e.stopPropagation();
								e.preventDefault();
								flag = false;
							}
							top.document.removeEventListener(_touchmove, touch, false);
							top.document.removeEventListener(_touchend, endTouch, false);
						};
						top.document.addEventListener(_touchmove, touch, false);
						top.document.addEventListener(_touchend, endTouch, false);
					},false);
				},
				scroll = function () {
					bind();
				};
				$timeout(scroll, 0);
			}
		],
		link : function ($scope, $element, $attrs) {}
	};
});
uiCore.directive("wscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(t,q,i,x,m){t.$watch(function(){if(v){return angular.element(v)[0].offsetHeight}},function(C,B){if(e){if(A()){angular.element(e).css("display","block");angular.element(v).css("margin-top","0px");d.css("top","0px");d.css("height",u()+"px")}else{angular.element(e).css("display","none")}}});var h,c,k=0,w=0,s=false,g,v,d,e;var y=/preto/i.test(navigator.userAgent)||/opera/i.test(navigator.userAgent);var j=function(){h=q.children();c=angular.element('<div class="ui-com-wscroll-wrapper"></div>');c.append(h);q.append(c)},l=function(){h=q.children();scrollbarDiv=angular.element('<div class="ngscrollbar-container-y"><div class="ngscrollbar-y"></div></div>');angular.element(h[0]).append(scrollbarDiv)},p=function(){g=angular.element(h[0]);var B=g.children();v=B[0];e=B[1];d=angular.element(e.querySelector(".ngscrollbar-y"))},r=function(){return angular.element(v)[0].offsetHeight},n=function(){return angular.element(g)[0].offsetHeight},o=function(B){if(Math.abs(parseInt(B))<r()-n()){return true}else{return false}},A=function(){return r()>n()},u=function(){return Math.pow(n(),2)/r()},f=function(){if(A()){angular.element(e).css("display","block");d.css("height",u()+"px")}else{angular.element(e).css("display","none")}},b=function(B){angular.element(v).css("margin-top",B+"px");d.css("top",-B/r()*n()+"px")},z=function(){q.on("wheel",function(C){C.preventDefault();C.stopPropagation();var B=parseInt(angular.element(v).css("margin-top"),10);if(C.deltaY>0){B=B-10}else{B=B+10}if(B>0){return}if(!o(B)){return}b(B)})},a=function(){z();j();l();p();u()};x(a,0)}],link:function(c,b,a){}}});
uiCore.directive("sscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","$window","coreService",function(k,d,D,u,G,C){var A=angular.element(top.window);var h=D.sscroll;var y=("h"==h);var g=("v"==h);var a=("hi"==h);var s=300;var I=angular.element,K=angular.copy,b=angular.forEach,i=angular.isString,j=angular.extend;var m,J,x,q=0;var r={stopPropagation:false,shouldBlurOnDrag:true},p=function(){m=d.children();if(a){J=angular.element(m[0]).children()}else{J=m}x=angular.element('<div id="sscrolldiv" style="height:100%;width:100%;overflow:hidden;" hwidth="0"></div>');if(D.reverse){x.css("float","right")}x.append(m);d.append(x);if(a){angular.element(d.parent()[0]).append('<div class="ui-com-hscroll-left-arrow"></div><div  class="ui-com-hscroll-right-arrow"></div>')}},n=function(V){var M=top.window.getComputedStyle(V);var S=parseInt(M.getPropertyValue("margin-top"),10)+parseInt(M.getPropertyValue("padding-top"),10);var Q=parseInt(M.getPropertyValue("margin-left"),10)+parseInt(M.getPropertyValue("padding-left"),10);var R=parseInt(M.getPropertyValue("margin-right"),10)+parseInt(M.getPropertyValue("padding-right"),10);var O=parseInt(M.getPropertyValue("margin-bottom"),10)+parseInt(M.getPropertyValue("padding-bottom"),10);var T=parseInt(M.getPropertyValue("top"),10);var L=parseInt(M.getPropertyValue("bottom"),10);var P=parseInt(M.getPropertyValue("left"),10);var U=parseInt(M.getPropertyValue("right"),10);var w=parseInt(M.getPropertyValue("border-right-width"),10);var X=parseInt(M.getPropertyValue("border-left-width"),10);var W=parseFloat(M.getPropertyValue("height"),10);var N=parseFloat(M.getPropertyValue("width"),10);return{top:S+(isNaN(T)?0:T),bottom:O+(isNaN(L)?0:L),height:W,width:N,left:Q+(isNaN(P)?0:P)-(isNaN(X)?0:X),right:R+(isNaN(U)?0:U)-(isNaN(w)?0:w)}},z=function(){if(null!=m){var M=0;var N=parseFloat(top.window.getComputedStyle(d[0],null)["fontSize"]);for(var L=0;L<J.length;L++){var w=n(J[L]);M+=(w.height+w.top+w.bottom)}x.css("height",M/N+"em")}},H=function(){if(null!=m){var L=0;var P=parseFloat(top.window.getComputedStyle(d[0],null)["fontSize"]);for(var N=0;N<J.length;N++){var w=n(J[N]);L+=(w.width+w.left+w.right)}if(L==0&&a){var M=d.children().children().children();for(var N=0;N<M.length;N++){var w=n(M[N]);L+=(w.width+w.left+w.right)}L+=0.3}if(L>0){var O=x.attr("hwidth");x.attr("hwidth",L);x.css("width",(L/P)+"em")}}},B=function(L,w){L.delta=v(w,L.pos);L.distance=v(w,L.origin);L.pos={x:w.x,y:w.y};L.updatedAt=Date.now()},v=function(w,M){var L={x:w.x-M.x,y:w.y-M.y};L.magnitude=Math.sqrt(L.x*L.x+L.y*L.y);return L},o=function(w){return w&&(w.tagName==="INPUT"||w.tagName==="SELECT"||w.tagName==="TEXTAREA")},l=function(w){return{origin:{x:w.x,y:w.y},pos:{x:w.x,y:w.y},distance:{x:0,y:0,magnitude:0},delta:{x:0,y:0,magnitude:0},startedAt:Date.now(),updatedAt:Date.now(),stopped:false,active:true}},e=function(M){M=M.originalEvent||M;var L=I(M.target||M.srcElement);r.stopPropagation&&M.stopPropagation();var w=M.touches?M.touches[0]:M;if(r.shouldBlurOnDrag&&o(L)){document.activeElement&&document.activeElement.blur()}self.state=l({x:w.pageX,y:w.pageY});if(a){c()}},f=function(M){M=M.originalEvent||M;if(null!=self.state&&self.state.active){M.preventDefault();r.stopPropagation&&M.stopPropagation();var w=M.touches?M.touches[0]:M;w={x:w.pageX,y:w.pageY};var L=Date.now()-self.state.updatedAt;if(L>s){self.state=l(w)}B(self.state,w);if(y||a){d[0].scrollLeft-=self.state.delta.x}if(g){d[0].scrollTop-=self.state.delta.y}if(a){c();C.commonServiceRef.schedulerService({on:"autoclose"},{cycle:"1",interval:"5000",start:"2"})}}},F=function(w){if(null!=self.state&&self.state.active){w=w.originalEvent||w;r.stopPropagation&&w.stopPropagation();self.state.updatedAt=Date.now();self.state.stopped=(self.state.updatedAt-self.state.startedAt)>s;self.state={};if(a){t()}}},E=function(){p();if(y||a){H()}if(g){z()}d.bind("touchstart",e);d.bind("touchmove",f);d.bind("touchend touchcancel",F);d.bind("mousedown",e);d.bind("mousemove",f);d.bind("mouseup mouseout",F)},c=function(){var M=top.window.getComputedStyle(d[0]);var N=parseInt(M.getPropertyValue("border-right-width"),10);var w=parseInt(M.getPropertyValue("border-left-width"),10);if((d[0].offsetWidth-N-w)<x[0].offsetWidth){var L=n(d[0]);if(parseFloat(d[0].scrollLeft)<=0){angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"1.15",display:"block"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"0",display:"none"})}else{if(parseFloat(L.width+L.left+L.right+d[0].scrollLeft+2)>=x[0].offsetWidth){angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"1.15",display:"block"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"0",display:"none"})}else{angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"1.15",display:"block"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"1.15",display:"block"})}}}},t=function(){angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"0",display:"none"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"0",display:"none"})};k.getParentDimentions=function(){if(null!=m){return{h:top.window.getComputedStyle(d[0]).height,w:top.window.getComputedStyle(d[0]).width}}return{}};k.$watch(k.getParentDimentions,function(L,w){if(y||a){H()}if(g){z()}},true);u(E,0)}],link:function(c,b,a){}}});
uiCore.directive("hscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(m,n,k,d,b){var c,e,l=0,f=angular.element('<div style="height:100%;overflow:hidden;"></div>'),a=function(){c=n.children();minWidth=parseInt(top.window.getComputedStyle(n[0],null)["width"]);e=angular.element('<div class="ui-com-hscroll-wrapper" style="height:100%;"></div>');g();e.append(c);f.append(e);n.append(f);if(m.hscrollType=="1"){n.append('<div class="ui-com-hscroll-left-arrow"></div><div  class="ui-com-hscroll-right-arrow"></div>')}},g=function(){var o=0;style=null;for(var p=0;p<c.length;p++){style=top.window.getComputedStyle(c[p],null);o+=c[p].offsetWidth+parseInt(style.marginLeft)+parseInt(style.marginRight)}if(o<minWidth){o=minWidth}var q=parseInt(top.window.getComputedStyle(n[0],null)["fontSize"]);e.css("width",(o/q)+"em")},i=function(){},h=function(){var p=b.touchEvent.start,o=b.touchEvent.move,q=b.touchEvent.end;f.bind(p,function(u){g();var s=parseInt(top.window.getComputedStyle(n[0],null)["fontSize"]);var x=u.touches?u.touches[0].pageX:u.pageX,t=u.target,w=function(A){var y=A.touches?A.touches[0].pageX:A.pageX;var z=y-x;x=y;f[0].scrollLeft-=z;if(m.hscrollType=="1"){if(parseInt(f[0].scrollLeft)<=0){angular.element(n[0].querySelector(".ui-com-hscroll-right-arrow")).css("opacity","1.15")}else{if(parseInt(f[0].offsetWidth+f[0].scrollLeft)+2>=e[0].offsetWidth){angular.element(n[0].querySelector(".ui-com-hscroll-left-arrow")).css("opacity","1.15")}else{angular.element(n[0].querySelector(".ui-com-hscroll-left-arrow")).css("opacity","1.15");angular.element(n[0].querySelector(".ui-com-hscroll-right-arrow")).css("opacity","1.15")}}}},v=function(y){},r=function(y){angular.element(n[0].querySelector(".ui-com-hscroll-left-arrow")).css("opacity","0");angular.element(n[0].querySelector(".ui-com-hscroll-right-arrow")).css("opacity","0");top.document.removeEventListener(o,w,false);top.document.removeEventListener(q,r,false)};top.document.addEventListener(o,w,false);top.document.addEventListener(q,r,false)})},j=function(){h();a()};d(j,0)}],link:function(d,e,b){d.hscrollType=b.hscrolltype;var g=e[0].offsetLeft;var c=e[0].offsetTop;var a=e[0].offsetWidth;var f=e[0].offsetHeight}}});
uiCore.directive("vscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(m,n,k,e,b){var d,f,l=0,h=0;var c=/preto/i.test(navigator.userAgent)||/opera/i.test(navigator.userAgent);var a=function(){d=n.children();f=angular.element('<div class="ui-com-vscroll-wrapper"></div>');f.append(d);n.append(f)},i=function(){l=parseInt(top.window.getComputedStyle(n[0],null)["height"]);h=0;style=null;for(var o=0;o<d.length;o++){style=top.window.getComputedStyle(d[o],null);h+=d[o].offsetHeight+parseInt(style.marginTop)+parseInt(style.marginBottom)}h=h+12;if(h<l){h=l}var p=parseInt(top.window.getComputedStyle(n[0],null)["fontSize"]);f.css("height",h/p+"em")},g=function(){var r=b.touchEvent.start;var q=b.touchEvent.move;var s=b.touchEvent.end;var p=0;var o=false;n.bind(r,function(x){i();var u=f[0].style.webkitTransform||f[0].style.mozTransform||f[0].style.msTransform||f[0].style.msTransform||f[0].style.oTransform;if(u){p=u.split(",")[1]&&parseInt(u.split(",")[1])}else{p=0}var v=x.touches?x.touches[0].pageY:x.pageY,w=x.target,y=function(A){var B=A.touches?A.touches[0].pageY:A.pageY;var z=B-v;if(Math.abs(z)>3){if(!o){o=true}A.stopPropagation();A.preventDefault()}v=B;p+=z;if(p>0){p=0}else{if(h+p<l){p=l-h}}if(c){f.css("-o-transform","translate(0,"+p+"px)");f.css("transform","translate(0,"+p+"px)")}else{f.css("-webkit-transform","translate3d(0,"+p+"px,0)");f.css("-moz-transform","translate3d(0,"+p+"px,0)");f.css("-o-transform","translate3d(0,"+p+"px,0)");f.css("-ms-transform","translate3d(0,"+p+"px,0)");f.css("transform","translate3d(0,"+p+"px,0)")}},t=function(z){if(o){z.stopPropagation();z.preventDefault();o=false}top.document.removeEventListener(q,y,false);top.document.removeEventListener(s,t,false)};top.document.addEventListener(q,y,false);top.document.addEventListener(s,t,false)})},j=function(){g();a()};e(j,0)}],link:function(c,b,a){}}});
uiCore.directive("ipage",function(){return{restrict:"AE",replace:false,scope:{},templateUrl:function(b,a){if(null!=a.lload&&a.lload==0){return"empty"}else{return a.templateurl||""}},controller:["$scope","$element","$attrs","$compile","$templateCache",function(d,c,b,e,a){d.loadState=c.attr("lload")|0;if(null!=c.attr("lload")){var f=d.$watch(function(){return c.attr("lload")},function(){var g=c.attr("lload");if(null!=g&&1==g&&0==d.loadState){var h=a.get(b.templateurl);c.html(h);e(c.contents())(d);d.loadState=1;f()}},true)}}],link:function(c,b,a){}}});
uiCore.directive("ihtmltext",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:"<div {{param}}></div>",controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{textdata:"",clickable:false,dataMapping:"",stateconfig:{state:0,state0:{},state1:{}}}};g.handleClick=function(){h.fireEvent(g.cid,"click"+g.compData.JS.stateconfig.state)};g.clickDisable=function(){};g.$on(e.cid+"_handleEvent",function(k,l,j,i){if(g.eventMap[l]){g.eventMap[l](j);if(null!=i){i.resolve()}}});g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i)};g.init=function(){if(g.cid){h.registerComponentInstance(g.cid,g);g.extendComponentData(h.getInitProperties(g.cid))}d.extendDeep(g.compData,g.param||{});g.updateHTML(g.compData.JS.textdata);g.applyStyle()};g.$watch(function(){return f.attr("itext")},function(i){if(null!=i){g.updateHTML(i)}});g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.$watch(g.compData,function(){if(null!=g.compData.JS.textdata){g.updateHTML(g.compData.JS.textdata)}});g.updateHTML=function(i){f[0].innerHTML=i};g.updateHTMLText=function(i){if(g.compData.JS.dataMapping){g.updateHTML(d.transfer(i,g.compData.JS.dataMapping))}};g.eventMap["text.update"]=g.updateHTMLText;g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="ihtmltext";g.init()}}}]);
uiCore.directive('tbresize', [
		'$window',
		'$interval',
		function ($window, $interval) {
			return {
				restrict : 'A',
				replace : false,
				controller : [
					'$scope',
					'$element',
					'$attrs',
					function ($scope, $element, $attrs) {
						var isPhonePage = function () {
							var viewport = top.document.getElementsByName('viewport');

							if (!viewport || viewport.length == 0) {

								return false;
							} else {
								return true;
							}
						};
						//fullscreenbar cancel resize function
						if (top.barresizetype == '1') {
							var scale = function () {
								
								if (/window/ig.test(navigator.userAgent)) {
									$element.css({
										'font-size' : '27px'
									});
								} else {
									var width = parseInt(top.window.innerWidth);
									var height = parseInt(top.window.innerHeight);
									
									if (width < 319) {
										$element.css({
											'font-size' : '12px'
										});
									} else if (width >= 320 && width < 359) {
										$element.css({
											'font-size' : '14px'
										});
									} else if (width >= 360 && width < 399) {
										if (height <= 485) {
											$element.css({
												'font-size' : '14px'
											});
										} else if (height < 530) {
											$element.css({
												'font-size' : '15px'
											});
										} else {
											$element.css({
												'font-size' : '16px'
											});
										}

									} else if (width >= 400 && width < 479) {
										if (height < 740) {
											$element.css({
												'font-size' : '19px'
											});
										} else {
											$element.css({
												'font-size' : '20px'
											});
										}
									} else if (width >= 480 && width < 539) {
										$element.css({
											'font-size' : '20px'
										});
									} else if (width >= 540 && width < 639) {
										$element.css({
											'font-size' : '22px'
										});
									} else if (width >= 640 && width < 719) {
										$element.css({
											'font-size' : '28px'
										});
									} else if (width >= 720 && width < 879) {
										$element.css({
											'font-size' : '32px'
										});
									} else if (width >= 880 && width < 959) {
										$element.css({
											'font-size' : '36px'
										});
									} else if (width >= 960 && width < 1079) {
										$element.css({
											'font-size' : '44px'
										});
									} else if (width >= 1080 && width < 1280) {
										$element.css({
											'font-size' : '48px'
										});
									} else if (width >= 1280) {
										$element.css({
											'font-size' : '56px'
										});
									}
								}
							};
							
							scale();
							top.window.addEventListener('load',scale);
							$interval(function () {scale();
								}, 3000);
							return;
						}
						$scope.pWidth = 0;
						$scope.pHeight = 0;

						$scope.resize = function () {
							var baseHeight = 360,
							baseWidth = 320;

							$scope.cWidth = top.window.innerWidth;
							$scope.cHeight = top.window.innerHeight;
							var cFontSize = 0,
							newFontSize = 0;
							if ($scope.pWidth == $scope.cWidth) {
								return;
							}
							if ($scope.pWidth == $scope.cWidth && $scope.cHeight != $scope.pHeight && Math.min($scope.pHeight, $scope.cHeight) / Math.max($scope.pHeight, $scope.cHeight) >= 0.8) {
								$scope.pWidth = $scope.cWidth;
								$scope.pHeight = $scope.cHeight;
								return;
							}
							if ($scope.pWidth == $scope.cWidth && $scope.pHeight == $scope.cHeight) {
								return;
							}
							if ($scope.cWidth <= $scope.cHeight) {
								cFontSize = $scope.cWidth / baseWidth;
							} else {
								cFontSize = $scope.cHeight / baseHeight * 1.3;
							}
							if (baseWidth * cFontSize > $scope.cWidth) {
								cFontSize = $scope.cWidth / baseWidth;
							}
							var newSize = cFontSize * 18;
							//newSize = newSize < 10 ? 10 : newSize;
							//newSize = newSize > 27 ? 27 : newSize;
							//used lastindexof not working properly need to change in generic way
							if(!(top.tlbs.templateID.indexOf('pcbar')=== -1)){
							$element.css('font-size', 27 + 'px');
							}
							else{
							$element.css('font-size', newSize + 'px');
							}
							$scope.pWidth = $scope.cWidth;
							$scope.pHeight = $scope.cHeight;
						};
						$scope.resizeForPreview = function (w, h) {
							var baseheight = 360,
							baseWidth = 320;
							if (w <= h) {
								cFontSize = w / baseWidth;
							} else {
								cFontSize = h / baseHeight;
							}
							var newSize = cFontSize * 18;
							if(!(top.tlbs.templateID.indexOf('pcbar')=== -1)){
							$element.css('font-size', 27 + 'px');
							}
							else{
							$element.css('font-size', newSize + 'px');
							}
						};
						//tlbm preview no need set resize interval
						if (top.tlbs.w && top.tlbs.h) {
							$scope.resizeForPreview(parseInt(top.tlbs.w), parseInt(top.tlbs.h));
						} else {
							$scope.cWidth = top.window.innerWidth;
							$scope.cHeight = top.window.innerHeight;

							var w = angular.element(top.window);
							w.bind('resize', function () {
								$scope.resize();
							});
							$scope.resize();
							$scope.intervalObject = $interval(function () {
									$scope.resize();
								}, 10);
						}
					}
				]
			};
		}
	]);
uiCore.directive("slider",["coreService","coreUtils","$timeout","Const","$window",function(c,a,b,d,e){return{restrict:"AE",replace:true,template:'<div  ng-click="compData.JS.clickable?handleClick():clickDisable();$event.stopPropagation();" ><div style="position:relative;"><div ng-swipe-right="swiperight();" ng-swipe-left="swipeleft();"  ng-style="compData.CSS" ></div><div ng-show="compData.JS.enabletitle" ng-style="compData.JS.titleconfig.CSS"></div></div> <div ng-show="compData.JS.enablebullets" ng-style="compData.JS.bulletcontainerconfig.CSS"> <div ng-style="compData.JS.bulletconfig.CSS" ng-click="changeStatebyIndex($index);$event.stopPropagation();" ng-repeat="app in compData.JS.dataset | limitTo:compData.JS.maxcount" id="slider_bullet_{{$index}}"></div></div></div>',scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs",function(h,g,f){h.cid=f.cid;h.index=0;h.maxindex=0;h.eventMap={};h.imageset={};h.compData={};h.handleClick=function(){if(h.compData.JS.dataset[h.index].weblink&&h.compData.JS.dataset[h.index].weblink.split("http").length>1){e.open(h.compData.JS.dataset[h.index].weblink)}else{e.open("http://"+h.compData.JS.dataset[h.index].weblink)}};h.clickDisable=function(){};h.extendComponentData=function(j){h.compData=a.extendDeep(h.compData,j)};h.swipeleft=function(){h.index=h.index+1;if(h.index>parseInt(h.maxindex-1)){h.index=parseInt(h.maxindex-1)}h.changeState(h.index)};h.swiperight=function(){h.index=h.index-1;if(h.index<0){h.index=0}h.changeState(h.index)};h.init=function(){c.registerComponentInstance(h.cid,h);h.extendComponentData(c.getInitProperties(h.cid));h.maxindex=h.compData.JS.maxcount};h.setAdvertiseData=function(k,j){h.index=0;if(null!=j){j.resolve()}if(h.compData.JS.sliderConfigRespPath){h.compData.JS.dataset=a.transfer(k,h.compData.JS.sliderConfigRespPath)}b(function(){if(h.maxindex>0){angular.element(g[0].children[0].children[0]).css({height:h.compData.JS.sliderheight});h.changeState(0)}});if(null!=h.compData.JS.dataset&&h.compData.JS.dataset.length<h.compData.JS.maxcount){h.maxindex=h.compData.JS.dataset.length}if(null!=h.compData.JS.dataset&&h.compData.JS.dataset.length==0){angular.element(g[0].children[0].children[0]).css({height:"0%"})}else{angular.element(g[0].children[0].children[0]).css({height:h.compData.JS.sliderheight,margin:h.compData.JS.slidermargin})}};h.changeStatebyIndex=function(j){h.changeState(j);h.index=j};h.changeState=function(j){var k=g[0].querySelector("#slider_bullet_"+j);if(h.compData.JS.dataset){for(i=0;i<=h.maxindex-1;i++){angular.element(g[0].querySelector("#slider_bullet_"+i)).css({"background-color":h.compData.JS.bulletconfig.JS.stateconfig.state0.background_color})}}angular.element(k).css({"background-color":h.compData.JS.bulletconfig.JS.stateconfig.state1.background_color});if(h.compData.JS.dataset){if(h.compData.JS.dataset[j].imageurl){angular.element(g[0].children[0].children[0]).css({"background-image":'url("'+h.compData.JS.dataset[j].imageurl+'")',})}if(h.compData.JS.dataset[j].title){angular.element(g[0].children[0].children[1]).html(h.compData.JS.dataset[j].title)}}};h.eventMap.setAdvertiseData=h.setAdvertiseData;h.$on(h.cid+"_handleEvent",function(m,k,l,j){h.eventMap[k](l,j)});h.$watch(h.param,function(j){if(h.param){h.compData=h.param}})}],link:function(h,g,f,j){h.pageID=f.ppageid||j.pageID;h.componentType="slider";h.init()}}}]);
uiCore.directive("ibutton",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div ng-click="compData.JS.clickable?handleClick():clickDisable();$event.stopPropagation();" {{param}}><div id="buttontextdiv">{{compData.JS.buttontext}}<div></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{buttontext:"",clickable:false,stateconfig:{state:0,state0:{},state1:{}},buttontextstyle:{CSS:{"font-size":"0.8em"},JS:{}}}};g.handleClick=function(){h.fireEvent(g.cid,"click"+g.compData.JS.stateconfig.state)};g.clickDisable=function(){};g.$on(e.cid+"_handleEvent",function(k,l,j,i){if(g.eventMap[l]){g.eventMap[l](j);if(null!=i){i.resolve()}}});g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i);b(function(){g.$apply()})};g.init=function(){g.compData=g.param;g.applyStyle()};g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS);angular.element(f[0].querySelector('[id="buttontextdiv"]')).css(g.compData.JS.buttontextstyle.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="ibutton";g.init()}}}]);
uiCore.directive('imageholder', [
		'coreService',
		'coreUtils',
		'$timeout',
		function (coreService, coreUtils, $timeout) {
			return {
				restrict : 'AE',
				replace : true,
				template : '<div ng-click="compData.JS.clickable && handleClick();$event.preventDefault();compData.JS.stopp && $event.stopPropagation()" {{param}}><div ng-show="compData.JS.isShow" ng-style="compData.JS.tineStyle" class="image-tine{{tinelang}}"></div></div>',
				scope : {
					param : '=param',
					dynamicproperties : '=dynamicproperties'
				},
				require : '^pid',
				controller : [
					'$scope',
					'$element',
					'$attrs',
					function ($scope, $element, $attrs) {
						$scope.cid = $attrs.cid;
						$scope.eventMap = {};
						$scope.compData = {
							'CSS' : {},
							'JS' : {
								'clickable' : false,
								'stopp' : false,
								'stateconfig' : {
									'state' : 0,
									'state0' : {},
									'state1' : {}
								},
								'cdrConfig' : {
									'uitracingcdr' : {
										'cdrType' : 'uitracingcdr',
										'enable' : true,
										'storeData' : false
									},
									'uidisplaycdr' : {
										'cdrType' : 'uidisplaycdr',
										'enable' : true,
										'storeData' : false
									}
								}
							}
						};
						
						//Listen the click event of imageHolder
						//key:cid, value:listenerList
						var clickListeners = [];
						
						var addClickListener = function (listener){
							if (!listener.pid || !listener.cid || !listener.event){
								return;
							}
							
							clickListeners.push(listener);
						};
						
						$scope.changeState = function (stateObject, deferred) {
							if (null != stateObject && null != stateObject.cstate) {
								if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
									$scope.compData.JS.stateconfig.state = stateObject.cstate;
									$scope.applyStyle();
									$scope.$evalAsync(
										function () {
										if (null != deferred) {
											if ($scope.compData.JS.animation) {
												//var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
												if (top.tlbs.isTransitionSupported) {
													$element.on(top.tlbs.transitionendEvent, function (e) {
														deferred.resolve();
													});
												} else {
													deferred.resolve();
												}
											} else {
												deferred.resolve();
											}
										}
									});
								}
							} else if (null != deferred) {
								deferred.resolve();
							}
						};
						$scope.handleClick = function () {
							if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
								var pageID = top.tlbs.currentpageid || $scope.pageID;
								$scope.compData.JS['cdrData'] = {};
								$scope.compData.JS.cdrData = {
									'pageId' : pageID,
									'componentId' : $scope.cid
								};
								coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
							}
							
							coreService.fireEvent($scope.cid, 'click' + $scope.compData.JS.stateconfig.state);
							
							var listener; 
							for (var i in clickListeners){
								listener = clickListeners[i];
								coreService.fireEvent(listener.pid + "_" + listener.cid, listener.event);
							}
							
							clickListeners.length = 0;
						};
						$scope.extendComponentData = function (componetData) {
							$scope.compData = coreUtils.extendDeep($scope.compData, componetData);
						};
						//是否显示图片左边的尖角
						$scope.showTine = function(){
							if($scope.compData.JS.isShowTine){
								$scope.compData.JS.isShow = true;
							}
						};
						
						$scope.hideTine = function(){
							$scope.compData.JS.isShow = false;
						};
						
						$scope.eventMap['hideTine'] = $scope.hideTine;
						$scope.eventMap['showTine'] = $scope.showTine;
						$scope.eventMap['changeState'] = $scope.changeState;
						$scope.eventMap['addClickListener'] = addClickListener;
						
						$scope.$on($scope.cid + '_handleEvent', function (eventObj, event, inputData, deferred) {
							$scope.eventMap[event](inputData);
							if (null != deferred) {
								deferred.resolve();
							}
						});
						$scope.init = function () {
							coreService.registerComponentInstance($scope.cid, $scope);
							$scope.extendComponentData(coreService.getInitProperties($scope.cid));

							$scope.$watch($scope.dynamicproperties, function (newValue) {
								if ($scope.dynamicproperties) {
									$scope.update();
								}
							});
							$scope.tinelang = top.tlbs.languageID || "en";
							$scope.applyStyle();
						};

						$scope.update = function () {
							if (typeof $scope.dynamicproperties == 'string') {
								$scope.dynamicproperties = coreUtils.String2JSON($scope.dynamicproperties);
							}
							if ($scope.dynamicproperties.CSS['background-image'] != "") {
								$element.css({
									"background-image" : 'url("' + $scope.dynamicproperties.CSS['background-image'] + '")'
								});
							}
						};

						/*$scope.getImageStyle = function() {
						if (0 == $scope.compData.JS.stateconfig.state) {
						return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state0);
						} else {
						return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state1);
						}
						};*/
						$scope.applyStyle = function () {
							if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
								coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
							}
							$element.css($scope.compData.CSS);
						};
						$scope.$on('stateChange', function (eventObj) {
							$scope.applyStyle();
						});
						$attrs.$observe("statechange", function (g) {
							if ($scope.param) {
								$scope.compData = $scope.param;
								$scope.applyStyle();
							}
						});
						$scope.$watch($scope.param, function (newValue) {
							if ($scope.param) {
								$scope.compData = $scope.param;
								$scope.applyStyle();
							}
						});
					}
				],
				link : function (scope, element, attrs, ctrl) {
					scope.pageID = ctrl.pageID;
					scope.componentType = 'imageholder';
					scope.init();
				}
			};
		}
	]);
uiCore.directive("ifit",["$window","coreService",function(a){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs","$window",function(e,d,b,g,f){var c=angular.element(top.window);e.getDimentions=function(){return{width:(top.window.innerWidth||top.window.document.documentElement.clientWidth||top.window.document.body.clientWidth),height:(top.window.innerHeight||top.window.document.documentElement.clientHeight||top.window.document.body.clientHeight),h:top.window.innerHeight,w:top.window.innerWidth,ph:top.window.getComputedStyle(d.parent()[0]).height,pw:parseFloat(top.window.getComputedStyle(d.parent()[0]).width),fs:parseFloat(top.window.getComputedStyle(d[0],null)["fontSize"])}};e.$watch(e.getDimentions,function(j,h){e.rresize()},true);e.rresize=function(){var j=e.getDimentions();var m=d.attr("ifit");var q=!isNaN(parseFloat(m))&&isFinite(m);var r=j.fs;var l=j.pw;if(!q){if(l>0){var o=0;var n=d.parent().children();for(i=0;i<n.length;i++){var h=n[i];if(null==h.attributes.ifit){o+=parseFloat(top.window.getComputedStyle(h).width)}}var p=o/r;if(m=="bnBar"){d.css("width",(((l/r)-p)-1)+"em")}else{d.css("width",((l/r)-p)+"em")}}}else{var k=j.width;if(m==0){d.css("width",(k/r)+"em")}else{if(l>0){d.css("width",((l/r)-m)+"em")}}}};e.$watch(function(){return d.attr("ifit")},function(h){e.rresize()});c.bind("resize",function(){e.$apply()})}]}}]);
