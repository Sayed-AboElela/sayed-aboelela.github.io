/**
 * Huawei Technologies http://www.huawei.com
 *(c) 2014-2015
 *@author Kunal 70924
 *@modified 02.01.2015
 *@usage The JS file to insert Toolbar template in target service page
 */

/**
 * This function dynamically installs angular app of Toolbar and adds specified template ID
 *
 * @param Template ID
 * @return None
 */
var insertToolbar = function(templateID) {
    angular.element(document).ready(function() {
        var toolbarDiv = window.parent.document.createElement('div');
        toolbarDiv.setAttribute('id', 'tlbstoolbar');
        toolbarDiv.setAttribute('ng-app', 'toolbarCore');

        //Create Toolbar Angular App & associate its controller to the controller of core module.
        toolbarDiv.setAttribute('ng-controller', 'coreController');

        //Set template ID dynamically referred as an attribute for Angular to resolve automatically
        toolbarDiv.setAttribute(templateID, '');
        toolbarDiv.setAttribute('tbparentisolator', '');
        toolbarDiv.setAttribute('tbresize', templateID);
        toolbarDiv.setAttribute('class', 'tbholder');
        toolbarDiv.setAttribute('langid', top.tlbs.languageID);
        toolbarDiv.setAttribute('pvctrl', '');
        toolbarDiv.style.display = 'block';
        avoidQQClear(toolbarDiv);
        //get resize type for fullscreenbar
        var templateproperty = window['template_PropertyMap'][templateID + "_propertyTable"];
        templateproperty = templateproperty || {common : {CSS : {}}};
        top.barresizetype = templateproperty.common.CSS.resizetype;

        //Add the div and bootstrap the new app to be added dynamicaly by Angular
        window.parent.document.body.appendChild(toolbarDiv);
        //add by y00131156 at 2015-01-27 begin
        //reason:DTS2015011605270 Entire Web page is getting scrolled on scrolling any of the apps like Traffic Query, Package Store.
        /*var stopBubble = function(e){
              e.stopPropagation();
              e.preventDefault();
        }
        toolbarDiv.addEventListener('touchstart',stopBubble);
        toolbarDiv.addEventListener('touchmove',stopBubble);
        toolbarDiv.addEventListener('touchend',stopBubble);*/
        //add by y00131156 2015-01-27 end
        angular.bootstrap(window.parent.document.getElementById('tlbstoolbar'), ['toolbarCore']);

        //get the Scope
        var appScope = angular.element(toolbarDiv);

        //get the injector and then the core service
        var injector = appScope.injector();
        //var coreService = injector.get('coreService');
        var commonService = injector.get('commonService');

        //var notificationActionChain = {
        //    on: 'notifications'
        //};

        // Call notifications service
        //commonService.remoteService(notificationActionChain, {});
        commonService.imagePreloadService();

        for (key in top.tlbs.toolbarInitData) {
            coreService.fireEvent(undefined, key, top.tlbs.toolbarInitData[key]);
        }

    });
    top.tlbs.toolbarclose="show";
};

var avoidQQClear = function(dom) {
    if (top.window.location.href.indexOf("qq.com") > 0 ) {
        var f = dom.getAttribute;
        dom.getAttribute = function(name) {
            if (name === 'id') {
                return 'wrapper';
            } else {
                return f.apply(this, [name])
            }
        }
    }
};

/**
 * This anonymous function inserts Toolbar by calling function insertToolbar
 *
 * @param None
 * @return None
 */
(function() {
    try {
        var timerWaitForInit = undefined, //Limit waiting to max 5 minutes
            loopCount = 0;

        var waitForInit = function() {
            if (!top.tlbs && loopCount < 3000) {
                if (timerWaitForInit) {
                    window.clearTimeout(timerWaitForInit);
                }

                loopCount = loopCount + 1;
                timerWaitForInit = window.setTimeout(waitForInit, 100);
            }
        }

        waitForInit();

        insertToolbar(top.tlbs.templateID);
        //for dts DTS2015072304354 start 2015-08-11----------
        var sohuInter = window.setInterval(function(){
        	if(top.tlbs.toolbarclose=="show"){
        		var tool = top.window.document.getElementById('tlbstoolbar');
        		if(!tool){
        			return
        		}
        		var stylevalue = tool.style.display;
        		if(stylevalue == "none" || stylevalue == ""){
        			tool.style.display="block";
        		}
        	}else if(top.tlbs.toolbarclose=="close"){
        		var tool = top.window.document.getElementById('tlbstoolbar');
        		tool.style.display = "none";
        	}
        },200);
        setTimeout(function(){
        	if(sohuInter){
        		window.clearInterval(sohuInter);
        	}
        	if(top.tlbs.toolbarclose=="close"){
        		var tool = top.window.document.getElementById('tlbstoolbar');
        		tool.style.display = "none";
        	}
        },10000);
        //for dts DTS2015072304354 end 2015-08-11----------
    } catch (e) {
        //alert('insert failed');
        //write CDR as needed
    }
})(window)
