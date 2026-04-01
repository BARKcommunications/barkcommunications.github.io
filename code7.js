gdjs.PacmanCode = {};
gdjs.PacmanCode.localVariables = [];
gdjs.PacmanCode.idToCallbackMap = new Map();
gdjs.PacmanCode.GDgerm_9595strongObjects1_1final = [];

gdjs.PacmanCode.GDplayerObjects1= [];
gdjs.PacmanCode.GDplayerObjects2= [];
gdjs.PacmanCode.GDgerm_9595weakObjects1= [];
gdjs.PacmanCode.GDgerm_9595weakObjects2= [];
gdjs.PacmanCode.GDwallObjects1= [];
gdjs.PacmanCode.GDwallObjects2= [];
gdjs.PacmanCode.GDgerm_9595strongObjects1= [];
gdjs.PacmanCode.GDgerm_9595strongObjects2= [];
gdjs.PacmanCode.GDsplatObjects1= [];
gdjs.PacmanCode.GDsplatObjects2= [];
gdjs.PacmanCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.PacmanCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.PacmanCode.GDGerms_9595VideoObjects1= [];
gdjs.PacmanCode.GDGerms_9595VideoObjects2= [];


gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.PacmanCode.GDplayerObjects1});
gdjs.PacmanCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.PacmanCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDplayerObjects1Objects);
if (isConditionTrue_0) {
}

}


};gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.PacmanCode.GDwallObjects1});
gdjs.PacmanCode.mapOfEmptyGDgerm_9595weakObjects = Hashtable.newFrom({"germ_weak": []});
gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.PacmanCode.GDplayerObjects1});
gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDgerm_95959595weakObjects1Objects = Hashtable.newFrom({"germ_weak": gdjs.PacmanCode.GDgerm_9595weakObjects1});
gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDsplatObjects1Objects = Hashtable.newFrom({"splat": gdjs.PacmanCode.GDsplatObjects1});
gdjs.PacmanCode.mapOfEmptyGDgerm_9595weakObjects = Hashtable.newFrom({"germ_weak": []});
gdjs.PacmanCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("germ_strong"), gdjs.PacmanCode.GDgerm_9595strongObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.PacmanCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.PacmanCode.GDgerm_9595strongObjects1.length ;i < len;++i) {
    gdjs.PacmanCode.GDgerm_9595strongObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.PacmanCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.PacmanCode.GDplayerObjects1[0].getPointX("")), (( gdjs.PacmanCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.PacmanCode.GDplayerObjects1[0].getPointY("")));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hunt");
}

{ //Subevents
gdjs.PacmanCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.PacmanCode.GDwallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDwallObjects1Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.PacmanCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.PacmanCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.PacmanCode.GDplayerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.PacmanCode.GDgerm_9595strongObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.PacmanCode.GDgerm_9595strongObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("germ_strong"), gdjs.PacmanCode.GDgerm_9595strongObjects2);
for (var i = 0, k = 0, l = gdjs.PacmanCode.GDgerm_9595strongObjects2.length;i<l;++i) {
    if ( gdjs.PacmanCode.GDgerm_9595strongObjects2[i].getBehavior("Pathfinding").destinationReached() ) {
        isConditionTrue_1 = true;
        gdjs.PacmanCode.GDgerm_9595strongObjects2[k] = gdjs.PacmanCode.GDgerm_9595strongObjects2[i];
        ++k;
    }
}
gdjs.PacmanCode.GDgerm_9595strongObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PacmanCode.GDgerm_9595strongObjects2.length; j < jLen ; ++j) {
        if ( gdjs.PacmanCode.GDgerm_9595strongObjects1_1final.indexOf(gdjs.PacmanCode.GDgerm_9595strongObjects2[j]) === -1 )
            gdjs.PacmanCode.GDgerm_9595strongObjects1_1final.push(gdjs.PacmanCode.GDgerm_9595strongObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hunt") >= 4;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.PacmanCode.mapOfEmptyGDgerm_9595weakObjects) > 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.PacmanCode.GDgerm_9595strongObjects1_1final, gdjs.PacmanCode.GDgerm_9595strongObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PacmanCode.GDgerm_9595strongObjects1 */
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.PacmanCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.PacmanCode.GDgerm_9595strongObjects1.length ;i < len;++i) {
    gdjs.PacmanCode.GDgerm_9595strongObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.PacmanCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.PacmanCode.GDplayerObjects1[0].getPointX("")), (( gdjs.PacmanCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.PacmanCode.GDplayerObjects1[0].getPointY("")));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hunt");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ_weak"), gdjs.PacmanCode.GDgerm_9595weakObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.PacmanCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDplayerObjects1Objects, gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDgerm_95959595weakObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11110132);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PacmanCode.GDgerm_9595weakObjects1 */
gdjs.PacmanCode.GDsplatObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PacmanCode.mapOfGDgdjs_9546PacmanCode_9546GDsplatObjects1Objects, (( gdjs.PacmanCode.GDgerm_9595weakObjects1.length === 0 ) ? 0 :gdjs.PacmanCode.GDgerm_9595weakObjects1[0].getPointX("")), (( gdjs.PacmanCode.GDgerm_9595weakObjects1.length === 0 ) ? 0 :gdjs.PacmanCode.GDgerm_9595weakObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.PacmanCode.GDgerm_9595weakObjects1.length ;i < len;++i) {
    gdjs.PacmanCode.GDgerm_9595weakObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.PacmanCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.PacmanCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.PacmanCode.GDplayerObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "bloomScale", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 0.25);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("germ_strong"), gdjs.PacmanCode.GDgerm_9595strongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.PacmanCode.mapOfEmptyGDgerm_9595weakObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PacmanCode.GDgerm_9595strongObjects1.length;i<l;++i) {
    if ( gdjs.PacmanCode.GDgerm_9595strongObjects1[i].getBehavior("Pathfinding").destinationReached() ) {
        isConditionTrue_0 = true;
        gdjs.PacmanCode.GDgerm_9595strongObjects1[k] = gdjs.PacmanCode.GDgerm_9595strongObjects1[i];
        ++k;
    }
}
gdjs.PacmanCode.GDgerm_9595strongObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PacmanCode.GDgerm_9595strongObjects1 */
{for(var i = 0, len = gdjs.PacmanCode.GDgerm_9595strongObjects1.length ;i < len;++i) {
    gdjs.PacmanCode.GDgerm_9595strongObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange(0, 1280), gdjs.randomInRange(0, 720));
}
}
}

}


};

gdjs.PacmanCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PacmanCode.GDplayerObjects1.length = 0;
gdjs.PacmanCode.GDplayerObjects2.length = 0;
gdjs.PacmanCode.GDgerm_9595weakObjects1.length = 0;
gdjs.PacmanCode.GDgerm_9595weakObjects2.length = 0;
gdjs.PacmanCode.GDwallObjects1.length = 0;
gdjs.PacmanCode.GDwallObjects2.length = 0;
gdjs.PacmanCode.GDgerm_9595strongObjects1.length = 0;
gdjs.PacmanCode.GDgerm_9595strongObjects2.length = 0;
gdjs.PacmanCode.GDsplatObjects1.length = 0;
gdjs.PacmanCode.GDsplatObjects2.length = 0;
gdjs.PacmanCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.PacmanCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.PacmanCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.PacmanCode.GDGerms_9595VideoObjects2.length = 0;

gdjs.PacmanCode.eventsList1(runtimeScene);
gdjs.PacmanCode.GDplayerObjects1.length = 0;
gdjs.PacmanCode.GDplayerObjects2.length = 0;
gdjs.PacmanCode.GDgerm_9595weakObjects1.length = 0;
gdjs.PacmanCode.GDgerm_9595weakObjects2.length = 0;
gdjs.PacmanCode.GDwallObjects1.length = 0;
gdjs.PacmanCode.GDwallObjects2.length = 0;
gdjs.PacmanCode.GDgerm_9595strongObjects1.length = 0;
gdjs.PacmanCode.GDgerm_9595strongObjects2.length = 0;
gdjs.PacmanCode.GDsplatObjects1.length = 0;
gdjs.PacmanCode.GDsplatObjects2.length = 0;
gdjs.PacmanCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.PacmanCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.PacmanCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.PacmanCode.GDGerms_9595VideoObjects2.length = 0;


return;

}

gdjs['PacmanCode'] = gdjs.PacmanCode;
