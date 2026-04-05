gdjs.germ_95gameCode = {};
gdjs.germ_95gameCode.localVariables = [];
gdjs.germ_95gameCode.idToCallbackMap = new Map();
gdjs.germ_95gameCode.GDgermObjects1= [];
gdjs.germ_95gameCode.GDgermObjects2= [];
gdjs.germ_95gameCode.GDgermObjects3= [];
gdjs.germ_95gameCode.GDsquishObjects1= [];
gdjs.germ_95gameCode.GDsquishObjects2= [];
gdjs.germ_95gameCode.GDsquishObjects3= [];
gdjs.germ_95gameCode.GDbackgroundObjects1= [];
gdjs.germ_95gameCode.GDbackgroundObjects2= [];
gdjs.germ_95gameCode.GDbackgroundObjects3= [];
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects3= [];
gdjs.germ_95gameCode.GDGerms_9595VideoObjects1= [];
gdjs.germ_95gameCode.GDGerms_9595VideoObjects2= [];
gdjs.germ_95gameCode.GDGerms_9595VideoObjects3= [];


gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects = Hashtable.newFrom({"germ": gdjs.germ_95gameCode.GDgermObjects1});
gdjs.germ_95gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.germ_95gameCode.GDgermObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDgermObjects1 */
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Tween").addObjectPositionTween2("evade", (gdjs.germ_95gameCode.GDgermObjects1[i].getPointX("")) + gdjs.randomFloatInRange(-(50), 50), (gdjs.germ_95gameCode.GDgermObjects1[i].getPointY("")) + gdjs.randomFloatInRange(-(50), 50), "easeInOutQuad", 1, false);
}
}
}

}


};gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects2Objects = Hashtable.newFrom({"germ": gdjs.germ_95gameCode.GDgermObjects2});
gdjs.germ_95gameCode.eventsList1 = function(runtimeScene) {

};gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects2Objects = Hashtable.newFrom({"germ": gdjs.germ_95gameCode.GDgermObjects2});
gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects = Hashtable.newFrom({"germ": gdjs.germ_95gameCode.GDgermObjects1});
gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDsquishObjects1Objects = Hashtable.newFrom({"squish": gdjs.germ_95gameCode.GDsquishObjects1});
gdjs.germ_95gameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.germ_95gameCode.GDgermObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDgermObjects2 */
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects2.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects2[i].getBehavior("Tween").addObjectPositionTween2("evade", (gdjs.germ_95gameCode.GDgermObjects2[i].getPointX("")) + gdjs.randomFloatInRange(-(250), 250), (gdjs.germ_95gameCode.GDgermObjects2[i].getPointY("")) + gdjs.randomFloatInRange(-(250), 250), "easeInOutQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.germ_95gameCode.GDgermObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDgermObjects1 */
gdjs.germ_95gameCode.GDsquishObjects1.length = 0;

{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDsquishObjects1Objects, (( gdjs.germ_95gameCode.GDgermObjects1.length === 0 ) ? 0 :gdjs.germ_95gameCode.GDgermObjects1[0].getPointX("")), (( gdjs.germ_95gameCode.GDgermObjects1.length === 0 ) ? 0 :gdjs.germ_95gameCode.GDgermObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.germ_95gameCode.GDsquishObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDsquishObjects1[i].getBehavior("Scale").setScale(3);
}
}
}

}


};gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects = Hashtable.newFrom({"germ": gdjs.germ_95gameCode.GDgermObjects1});
gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects = Hashtable.newFrom({"germ": gdjs.germ_95gameCode.GDgermObjects1});
gdjs.germ_95gameCode.mapOfEmptyGDgermObjects = Hashtable.newFrom({"germ": []});
gdjs.germ_95gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.germ_95gameCode.GDbackgroundObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "random");
}
{for(var i = 0, len = gdjs.germ_95gameCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDbackgroundObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 2));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "random") >= gdjs.randomInRange(0.1, 2);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "random");
}

{ //Subevents
gdjs.germ_95gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


const repeatCount2 = gdjs.randomFloatInRange(4, 8);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.germ_95gameCode.GDgermObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22991044);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects2Objects, gdjs.randomFloatInRange(20, 1260), gdjs.randomFloatInRange(20, 700), "");
}
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects2.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects2[i].getBehavior("Animation").setAnimationName("germ_static");
}
}
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects2.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects2[i].getBehavior("Scale").setScale(gdjs.randomInRange(1, 2.5));
}
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.germ_95gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.germ_95gameCode.GDgermObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects, gdjs.germ_95gameCode.mapOfGDgdjs_9546germ_959595gameCode_9546GDgermObjects1Objects, 25, false);
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDgermObjects1 */
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Tween").addObjectPositionTween2("evade", (gdjs.germ_95gameCode.GDgermObjects1[i].getPointX("")) + gdjs.randomFloatInRange(-(250), 250), (gdjs.germ_95gameCode.GDgermObjects1[i].getPointY("")) + gdjs.randomFloatInRange(-(250), 250), "easeInOutQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.germ_95gameCode.GDgermObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.germ_95gameCode.GDgermObjects1.length;i<l;++i) {
    if ( gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Tween").isPlaying("evade") ) {
        isConditionTrue_0 = true;
        gdjs.germ_95gameCode.GDgermObjects1[k] = gdjs.germ_95gameCode.GDgermObjects1[i];
        ++k;
    }
}
gdjs.germ_95gameCode.GDgermObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDgermObjects1 */
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Animation").setAnimationName("germ_moving");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.germ_95gameCode.GDgermObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.germ_95gameCode.GDgermObjects1.length;i<l;++i) {
    if ( gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Tween").hasFinished("evade") ) {
        isConditionTrue_0 = true;
        gdjs.germ_95gameCode.GDgermObjects1[k] = gdjs.germ_95gameCode.GDgermObjects1[i];
        ++k;
    }
}
gdjs.germ_95gameCode.GDgermObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDgermObjects1 */
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Animation").setAnimationName("germ_static");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.germ_95gameCode.mapOfEmptyGDgermObjects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.germ_95gameCode.GDgermObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.germ_95gameCode.GDgermObjects1.length;i<l;++i) {
    if ( !(gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("InOnScreen").IsOnScreen(-(100), null)) ) {
        isConditionTrue_0 = true;
        gdjs.germ_95gameCode.GDgermObjects1[k] = gdjs.germ_95gameCode.GDgermObjects1[i];
        ++k;
    }
}
gdjs.germ_95gameCode.GDgermObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDgermObjects1 */
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Tween").stopTween("evade", false);
}
}
{for(var i = 0, len = gdjs.germ_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDgermObjects1[i].getBehavior("Tween").addObjectPositionTween2("evade", gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.evtTools.window.getWindowInnerHeight() / 2, "easeInOutQuad", 3, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("squish"), gdjs.germ_95gameCode.GDsquishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.germ_95gameCode.GDsquishObjects1.length;i<l;++i) {
    if ( gdjs.germ_95gameCode.GDsquishObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.germ_95gameCode.GDsquishObjects1[k] = gdjs.germ_95gameCode.GDsquishObjects1[i];
        ++k;
    }
}
gdjs.germ_95gameCode.GDsquishObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.germ_95gameCode.GDsquishObjects1 */
{for(var i = 0, len = gdjs.germ_95gameCode.GDsquishObjects1.length ;i < len;++i) {
    gdjs.germ_95gameCode.GDsquishObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.germ_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.germ_95gameCode.GDgermObjects1.length = 0;
gdjs.germ_95gameCode.GDgermObjects2.length = 0;
gdjs.germ_95gameCode.GDgermObjects3.length = 0;
gdjs.germ_95gameCode.GDsquishObjects1.length = 0;
gdjs.germ_95gameCode.GDsquishObjects2.length = 0;
gdjs.germ_95gameCode.GDsquishObjects3.length = 0;
gdjs.germ_95gameCode.GDbackgroundObjects1.length = 0;
gdjs.germ_95gameCode.GDbackgroundObjects2.length = 0;
gdjs.germ_95gameCode.GDbackgroundObjects3.length = 0;
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.germ_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.germ_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.germ_95gameCode.GDGerms_9595VideoObjects3.length = 0;

gdjs.germ_95gameCode.eventsList3(runtimeScene);
gdjs.germ_95gameCode.GDgermObjects1.length = 0;
gdjs.germ_95gameCode.GDgermObjects2.length = 0;
gdjs.germ_95gameCode.GDgermObjects3.length = 0;
gdjs.germ_95gameCode.GDsquishObjects1.length = 0;
gdjs.germ_95gameCode.GDsquishObjects2.length = 0;
gdjs.germ_95gameCode.GDsquishObjects3.length = 0;
gdjs.germ_95gameCode.GDbackgroundObjects1.length = 0;
gdjs.germ_95gameCode.GDbackgroundObjects2.length = 0;
gdjs.germ_95gameCode.GDbackgroundObjects3.length = 0;
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.germ_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.germ_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.germ_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.germ_95gameCode.GDGerms_9595VideoObjects3.length = 0;


return;

}

gdjs['germ_95gameCode'] = gdjs.germ_95gameCode;
