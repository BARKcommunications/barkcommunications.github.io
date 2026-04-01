gdjs.dishes_95gameCode = {};
gdjs.dishes_95gameCode.localVariables = [];
gdjs.dishes_95gameCode.idToCallbackMap = new Map();
gdjs.dishes_95gameCode.GDdishObjects1= [];
gdjs.dishes_95gameCode.GDdishObjects2= [];
gdjs.dishes_95gameCode.GDdishObjects3= [];
gdjs.dishes_95gameCode.GDgermObjects1= [];
gdjs.dishes_95gameCode.GDgermObjects2= [];
gdjs.dishes_95gameCode.GDgermObjects3= [];
gdjs.dishes_95gameCode.GDPixiDustObjects1= [];
gdjs.dishes_95gameCode.GDPixiDustObjects2= [];
gdjs.dishes_95gameCode.GDPixiDustObjects3= [];
gdjs.dishes_95gameCode.GDsinkObjects1= [];
gdjs.dishes_95gameCode.GDsinkObjects2= [];
gdjs.dishes_95gameCode.GDsinkObjects3= [];
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects3= [];
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects1= [];
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects2= [];
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects3= [];


gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDdishObjects1Objects = Hashtable.newFrom({"dish": gdjs.dishes_95gameCode.GDdishObjects1});
gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDgermObjects2Objects = Hashtable.newFrom({"germ": gdjs.dishes_95gameCode.GDgermObjects2});
gdjs.dishes_95gameCode.eventsList0 = function(runtimeScene) {

};gdjs.dishes_95gameCode.mapOfEmptyGDgermObjects = Hashtable.newFrom({"germ": []});
gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDdishObjects1Objects = Hashtable.newFrom({"dish": gdjs.dishes_95gameCode.GDdishObjects1});
gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDgermObjects2Objects = Hashtable.newFrom({"germ": gdjs.dishes_95gameCode.GDgermObjects2});
gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDgermObjects1Objects = Hashtable.newFrom({"germ": gdjs.dishes_95gameCode.GDgermObjects1});
gdjs.dishes_95gameCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.dishes_95gameCode.GDgermObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dishes_95gameCode.GDgermObjects1.length;i<l;++i) {
    if ( gdjs.dishes_95gameCode.GDgermObjects1[i].getVariableBoolean(gdjs.dishes_95gameCode.GDgermObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.dishes_95gameCode.GDgermObjects1[k] = gdjs.dishes_95gameCode.GDgermObjects1[i];
        ++k;
    }
}
gdjs.dishes_95gameCode.GDgermObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.dishes_95gameCode.GDgermObjects1 */
{for(var i = 0, len = gdjs.dishes_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDgermObjects1[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.dishes_95gameCode.GDgermObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDgermObjects1[i].getBehavior("Physics2").applyPolarImpulse(gdjs.evtTools.common.angleBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() * 2, (gdjs.dishes_95gameCode.GDgermObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.dishes_95gameCode.GDgermObjects1[i].getBehavior("Physics2").getMassCenterY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
}

}


};gdjs.dishes_95gameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.dishes_95gameCode.GDgermObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDgermObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.dishes_95gameCode.GDgermObjects2 */
{for(var i = 0, len = gdjs.dishes_95gameCode.GDgermObjects2.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDgermObjects2[i].returnVariable(gdjs.dishes_95gameCode.GDgermObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ"), gdjs.dishes_95gameCode.GDgermObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDgermObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.dishes_95gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDPixiDustObjects2Objects = Hashtable.newFrom({"PixiDust": gdjs.dishes_95gameCode.GDPixiDustObjects2});
gdjs.dishes_95gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23019444);
}
if (isConditionTrue_0) {
gdjs.dishes_95gameCode.GDPixiDustObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDPixiDustObjects2Objects, 0, 0, "");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PixiDust"), gdjs.dishes_95gameCode.GDPixiDustObjects1);
{for(var i = 0, len = gdjs.dishes_95gameCode.GDPixiDustObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDPixiDustObjects1[i].setCenterPositionInScene(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.dishes_95gameCode.GDPixiDustObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDPixiDustObjects1[i].setFlow(1000);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(0.1);
}
}

}


};gdjs.dishes_95gameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.dishes_95gameCode.GDdishObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDdishObjects1Objects, -(1000), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "");
}
{for(var i = 0, len = gdjs.dishes_95gameCode.GDdishObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDdishObjects1[i].getBehavior("Scale").setScale(3);
}
}
{for(var i = 0, len = gdjs.dishes_95gameCode.GDdishObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDdishObjects1[i].getBehavior("Tween").addObjectPositionTween2("dish", gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "easeInCubic", 3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(2, 5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


const repeatCount2 = gdjs.randomFloatInRange(8, 20);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("dish"), gdjs.dishes_95gameCode.GDdishObjects2);
gdjs.dishes_95gameCode.GDgermObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dishes_95gameCode.GDdishObjects2.length;i<l;++i) {
    if ( gdjs.dishes_95gameCode.GDdishObjects2[i].getBehavior("Tween").hasFinished("dish") ) {
        isConditionTrue_0 = true;
        gdjs.dishes_95gameCode.GDdishObjects2[k] = gdjs.dishes_95gameCode.GDdishObjects2[i];
        ++k;
    }
}
gdjs.dishes_95gameCode.GDdishObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23010988);
}
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDgermObjects2Objects, (( gdjs.dishes_95gameCode.GDdishObjects2.length === 0 ) ? 0 :gdjs.dishes_95gameCode.GDdishObjects2[0].getCenterXInScene()) + gdjs.randomInRange(-(150), 150), (( gdjs.dishes_95gameCode.GDdishObjects2.length === 0 ) ? 0 :gdjs.dishes_95gameCode.GDdishObjects2[0].getCenterYInScene()) + gdjs.randomInRange(-(150), 150), "");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dish"), gdjs.dishes_95gameCode.GDdishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.dishes_95gameCode.mapOfEmptyGDgermObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dishes_95gameCode.GDdishObjects1.length;i<l;++i) {
    if ( gdjs.dishes_95gameCode.GDdishObjects1[i].getBehavior("Tween").hasFinished("dish") ) {
        isConditionTrue_0 = true;
        gdjs.dishes_95gameCode.GDdishObjects1[k] = gdjs.dishes_95gameCode.GDdishObjects1[i];
        ++k;
    }
}
gdjs.dishes_95gameCode.GDdishObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23012420);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.dishes_95gameCode.GDdishObjects1 */
{for(var i = 0, len = gdjs.dishes_95gameCode.GDdishObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDdishObjects1[i].getBehavior("Tween").addObjectPositionTween2("dish2", 1920, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "easeInCubic", 1, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dish"), gdjs.dishes_95gameCode.GDdishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dishes_95gameCode.GDdishObjects1.length;i<l;++i) {
    if ( gdjs.dishes_95gameCode.GDdishObjects1[i].getBehavior("Tween").hasFinished("dish2") ) {
        isConditionTrue_0 = true;
        gdjs.dishes_95gameCode.GDdishObjects1[k] = gdjs.dishes_95gameCode.GDdishObjects1[i];
        ++k;
    }
}
gdjs.dishes_95gameCode.GDdishObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23013452);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.dishes_95gameCode.GDdishObjects1 */
{for(var i = 0, len = gdjs.dishes_95gameCode.GDdishObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDdishObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.dishes_95gameCode.mapOfGDgdjs_9546dishes_959595gameCode_9546GDdishObjects1Objects, -(1000), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "");
}
{for(var i = 0, len = gdjs.dishes_95gameCode.GDdishObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDdishObjects1[i].getBehavior("Scale").setScale(3);
}
}
{for(var i = 0, len = gdjs.dishes_95gameCode.GDdishObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDdishObjects1[i].getBehavior("Tween").addObjectPositionTween2("dish", gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "easeInCubic", 1, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}

{ //Subevents
gdjs.dishes_95gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.dishes_95gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PixiDust"), gdjs.dishes_95gameCode.GDPixiDustObjects1);
{for(var i = 0, len = gdjs.dishes_95gameCode.GDPixiDustObjects1.length ;i < len;++i) {
    gdjs.dishes_95gameCode.GDPixiDustObjects1[i].setFlow(0);
}
}
}

}


};

gdjs.dishes_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dishes_95gameCode.GDdishObjects1.length = 0;
gdjs.dishes_95gameCode.GDdishObjects2.length = 0;
gdjs.dishes_95gameCode.GDdishObjects3.length = 0;
gdjs.dishes_95gameCode.GDgermObjects1.length = 0;
gdjs.dishes_95gameCode.GDgermObjects2.length = 0;
gdjs.dishes_95gameCode.GDgermObjects3.length = 0;
gdjs.dishes_95gameCode.GDPixiDustObjects1.length = 0;
gdjs.dishes_95gameCode.GDPixiDustObjects2.length = 0;
gdjs.dishes_95gameCode.GDPixiDustObjects3.length = 0;
gdjs.dishes_95gameCode.GDsinkObjects1.length = 0;
gdjs.dishes_95gameCode.GDsinkObjects2.length = 0;
gdjs.dishes_95gameCode.GDsinkObjects3.length = 0;
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects3.length = 0;

gdjs.dishes_95gameCode.eventsList4(runtimeScene);
gdjs.dishes_95gameCode.GDdishObjects1.length = 0;
gdjs.dishes_95gameCode.GDdishObjects2.length = 0;
gdjs.dishes_95gameCode.GDdishObjects3.length = 0;
gdjs.dishes_95gameCode.GDgermObjects1.length = 0;
gdjs.dishes_95gameCode.GDgermObjects2.length = 0;
gdjs.dishes_95gameCode.GDgermObjects3.length = 0;
gdjs.dishes_95gameCode.GDPixiDustObjects1.length = 0;
gdjs.dishes_95gameCode.GDPixiDustObjects2.length = 0;
gdjs.dishes_95gameCode.GDPixiDustObjects3.length = 0;
gdjs.dishes_95gameCode.GDsinkObjects1.length = 0;
gdjs.dishes_95gameCode.GDsinkObjects2.length = 0;
gdjs.dishes_95gameCode.GDsinkObjects3.length = 0;
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.dishes_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.dishes_95gameCode.GDGerms_9595VideoObjects3.length = 0;


return;

}

gdjs['dishes_95gameCode'] = gdjs.dishes_95gameCode;
