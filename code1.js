gdjs.bin_95gameCode = {};
gdjs.bin_95gameCode.localVariables = [];
gdjs.bin_95gameCode.idToCallbackMap = new Map();
gdjs.bin_95gameCode.GDbinObjects1= [];
gdjs.bin_95gameCode.GDbinObjects2= [];
gdjs.bin_95gameCode.GDbinObjects3= [];
gdjs.bin_95gameCode.GDbottleObjects1= [];
gdjs.bin_95gameCode.GDbottleObjects2= [];
gdjs.bin_95gameCode.GDbottleObjects3= [];
gdjs.bin_95gameCode.GDfloorObjects1= [];
gdjs.bin_95gameCode.GDfloorObjects2= [];
gdjs.bin_95gameCode.GDfloorObjects3= [];
gdjs.bin_95gameCode.GDbin_9595topObjects1= [];
gdjs.bin_95gameCode.GDbin_9595topObjects2= [];
gdjs.bin_95gameCode.GDbin_9595topObjects3= [];
gdjs.bin_95gameCode.GDswipeObjects1= [];
gdjs.bin_95gameCode.GDswipeObjects2= [];
gdjs.bin_95gameCode.GDswipeObjects3= [];
gdjs.bin_95gameCode.GDCartoonSmokeObjects1= [];
gdjs.bin_95gameCode.GDCartoonSmokeObjects2= [];
gdjs.bin_95gameCode.GDCartoonSmokeObjects3= [];
gdjs.bin_95gameCode.GDwallObjects1= [];
gdjs.bin_95gameCode.GDwallObjects2= [];
gdjs.bin_95gameCode.GDwallObjects3= [];
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects3= [];
gdjs.bin_95gameCode.GDGerms_9595VideoObjects1= [];
gdjs.bin_95gameCode.GDGerms_9595VideoObjects2= [];
gdjs.bin_95gameCode.GDGerms_9595VideoObjects3= [];


gdjs.bin_95gameCode.mapOfEmptyGDbottleObjects = Hashtable.newFrom({"bottle": []});
gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbottleObjects2Objects = Hashtable.newFrom({"bottle": gdjs.bin_95gameCode.GDbottleObjects2});
gdjs.bin_95gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22901844);
}
if (isConditionTrue_0) {
gdjs.bin_95gameCode.GDbottleObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbottleObjects2Objects, 1000, 360, "");
}
{for(var i = 0, len = gdjs.bin_95gameCode.GDbottleObjects2.length ;i < len;++i) {
    gdjs.bin_95gameCode.GDbottleObjects2[i].getBehavior("Physics2").setStatic();
}
}
}

}


};gdjs.bin_95gameCode.mapOfEmptyGDbottleObjects = Hashtable.newFrom({"bottle": []});
gdjs.bin_95gameCode.mapOfEmptyGDbottleObjects = Hashtable.newFrom({"bottle": []});
gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbottleObjects1Objects = Hashtable.newFrom({"bottle": gdjs.bin_95gameCode.GDbottleObjects1});
gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbin_95959595topObjects1Objects = Hashtable.newFrom({"bin_top": gdjs.bin_95gameCode.GDbin_9595topObjects1});
gdjs.bin_95gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.bin_95gameCode.mapOfEmptyGDbottleObjects) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}

{ //Subevents
gdjs.bin_95gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.bin_95gameCode.mapOfEmptyGDbottleObjects) > 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(0.1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.bin_95gameCode.mapOfEmptyGDbottleObjects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22903940);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bottle"), gdjs.bin_95gameCode.GDbottleObjects2);
gdjs.copyArray(runtimeScene.getObjects("swipe"), gdjs.bin_95gameCode.GDswipeObjects2);
{for(var i = 0, len = gdjs.bin_95gameCode.GDbottleObjects2.length ;i < len;++i) {
    gdjs.bin_95gameCode.GDbottleObjects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.bin_95gameCode.GDbottleObjects2.length ;i < len;++i) {
    gdjs.bin_95gameCode.GDbottleObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.evtTools.common.angleBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() * 1, (gdjs.bin_95gameCode.GDbottleObjects2[i].getBehavior("Physics2").getMassCenterX()), (gdjs.bin_95gameCode.GDbottleObjects2[i].getBehavior("Physics2").getMassCenterY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.bin_95gameCode.GDswipeObjects2.length ;i < len;++i) {
    gdjs.bin_95gameCode.GDswipeObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bottle"), gdjs.bin_95gameCode.GDbottleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bin_95gameCode.GDbottleObjects2.length;i<l;++i) {
    if ( gdjs.bin_95gameCode.GDbottleObjects2[i].getBehavior("Physics2").getLinearVelocityLength() < 100 ) {
        isConditionTrue_0 = true;
        gdjs.bin_95gameCode.GDbottleObjects2[k] = gdjs.bin_95gameCode.GDbottleObjects2[i];
        ++k;
    }
}
gdjs.bin_95gameCode.GDbottleObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22905740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("swipe"), gdjs.bin_95gameCode.GDswipeObjects2);
{for(var i = 0, len = gdjs.bin_95gameCode.GDswipeObjects2.length ;i < len;++i) {
    gdjs.bin_95gameCode.GDswipeObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bin_top"), gdjs.bin_95gameCode.GDbin_9595topObjects1);
gdjs.copyArray(runtimeScene.getObjects("bottle"), gdjs.bin_95gameCode.GDbottleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbottleObjects1Objects, gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbin_95959595topObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.bin_95gameCode.GDbottleObjects1 */
{for(var i = 0, len = gdjs.bin_95gameCode.GDbottleObjects1.length ;i < len;++i) {
    gdjs.bin_95gameCode.GDbottleObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbottleObjects1Objects = Hashtable.newFrom({"bottle": gdjs.bin_95gameCode.GDbottleObjects1});
gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.bin_95gameCode.GDfloorObjects1});
gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDCartoonSmokeObjects1Objects = Hashtable.newFrom({"CartoonSmoke": gdjs.bin_95gameCode.GDCartoonSmokeObjects1});
gdjs.bin_95gameCode.eventsList2 = function(runtimeScene) {

{


gdjs.bin_95gameCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("bottle"), gdjs.bin_95gameCode.GDbottleObjects1);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.bin_95gameCode.GDfloorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDbottleObjects1Objects, "Physics2", gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDfloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22907372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bin_95gameCode.GDbottleObjects1 */
gdjs.bin_95gameCode.GDCartoonSmokeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bin_95gameCode.mapOfGDgdjs_9546bin_959595gameCode_9546GDCartoonSmokeObjects1Objects, (( gdjs.bin_95gameCode.GDbottleObjects1.length === 0 ) ? 0 :gdjs.bin_95gameCode.GDbottleObjects1[0].getPointX("")), (( gdjs.bin_95gameCode.GDbottleObjects1.length === 0 ) ? 0 :gdjs.bin_95gameCode.GDbottleObjects1[0].getPointY("")), "");
}
}

}


};

gdjs.bin_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bin_95gameCode.GDbinObjects1.length = 0;
gdjs.bin_95gameCode.GDbinObjects2.length = 0;
gdjs.bin_95gameCode.GDbinObjects3.length = 0;
gdjs.bin_95gameCode.GDbottleObjects1.length = 0;
gdjs.bin_95gameCode.GDbottleObjects2.length = 0;
gdjs.bin_95gameCode.GDbottleObjects3.length = 0;
gdjs.bin_95gameCode.GDfloorObjects1.length = 0;
gdjs.bin_95gameCode.GDfloorObjects2.length = 0;
gdjs.bin_95gameCode.GDfloorObjects3.length = 0;
gdjs.bin_95gameCode.GDbin_9595topObjects1.length = 0;
gdjs.bin_95gameCode.GDbin_9595topObjects2.length = 0;
gdjs.bin_95gameCode.GDbin_9595topObjects3.length = 0;
gdjs.bin_95gameCode.GDswipeObjects1.length = 0;
gdjs.bin_95gameCode.GDswipeObjects2.length = 0;
gdjs.bin_95gameCode.GDswipeObjects3.length = 0;
gdjs.bin_95gameCode.GDCartoonSmokeObjects1.length = 0;
gdjs.bin_95gameCode.GDCartoonSmokeObjects2.length = 0;
gdjs.bin_95gameCode.GDCartoonSmokeObjects3.length = 0;
gdjs.bin_95gameCode.GDwallObjects1.length = 0;
gdjs.bin_95gameCode.GDwallObjects2.length = 0;
gdjs.bin_95gameCode.GDwallObjects3.length = 0;
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.bin_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.bin_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.bin_95gameCode.GDGerms_9595VideoObjects3.length = 0;

gdjs.bin_95gameCode.eventsList2(runtimeScene);
gdjs.bin_95gameCode.GDbinObjects1.length = 0;
gdjs.bin_95gameCode.GDbinObjects2.length = 0;
gdjs.bin_95gameCode.GDbinObjects3.length = 0;
gdjs.bin_95gameCode.GDbottleObjects1.length = 0;
gdjs.bin_95gameCode.GDbottleObjects2.length = 0;
gdjs.bin_95gameCode.GDbottleObjects3.length = 0;
gdjs.bin_95gameCode.GDfloorObjects1.length = 0;
gdjs.bin_95gameCode.GDfloorObjects2.length = 0;
gdjs.bin_95gameCode.GDfloorObjects3.length = 0;
gdjs.bin_95gameCode.GDbin_9595topObjects1.length = 0;
gdjs.bin_95gameCode.GDbin_9595topObjects2.length = 0;
gdjs.bin_95gameCode.GDbin_9595topObjects3.length = 0;
gdjs.bin_95gameCode.GDswipeObjects1.length = 0;
gdjs.bin_95gameCode.GDswipeObjects2.length = 0;
gdjs.bin_95gameCode.GDswipeObjects3.length = 0;
gdjs.bin_95gameCode.GDCartoonSmokeObjects1.length = 0;
gdjs.bin_95gameCode.GDCartoonSmokeObjects2.length = 0;
gdjs.bin_95gameCode.GDCartoonSmokeObjects3.length = 0;
gdjs.bin_95gameCode.GDwallObjects1.length = 0;
gdjs.bin_95gameCode.GDwallObjects2.length = 0;
gdjs.bin_95gameCode.GDwallObjects3.length = 0;
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.bin_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.bin_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.bin_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.bin_95gameCode.GDGerms_9595VideoObjects3.length = 0;


return;

}

gdjs['bin_95gameCode'] = gdjs.bin_95gameCode;
