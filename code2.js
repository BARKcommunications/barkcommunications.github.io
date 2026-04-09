gdjs.basketball_95gameCode = {};
gdjs.basketball_95gameCode.localVariables = [];
gdjs.basketball_95gameCode.idToCallbackMap = new Map();
gdjs.basketball_95gameCode.GDbasketballObjects1= [];
gdjs.basketball_95gameCode.GDbasketballObjects2= [];
gdjs.basketball_95gameCode.GDbasketballObjects3= [];
gdjs.basketball_95gameCode.GDfloorObjects1= [];
gdjs.basketball_95gameCode.GDfloorObjects2= [];
gdjs.basketball_95gameCode.GDfloorObjects3= [];
gdjs.basketball_95gameCode.GDwallObjects1= [];
gdjs.basketball_95gameCode.GDwallObjects2= [];
gdjs.basketball_95gameCode.GDwallObjects3= [];
gdjs.basketball_95gameCode.GDhoopObjects1= [];
gdjs.basketball_95gameCode.GDhoopObjects2= [];
gdjs.basketball_95gameCode.GDhoopObjects3= [];
gdjs.basketball_95gameCode.GDswipeObjects1= [];
gdjs.basketball_95gameCode.GDswipeObjects2= [];
gdjs.basketball_95gameCode.GDswipeObjects3= [];
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects1= [];
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects2= [];
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects3= [];
gdjs.basketball_95gameCode.GDRedExplosionObjects1= [];
gdjs.basketball_95gameCode.GDRedExplosionObjects2= [];
gdjs.basketball_95gameCode.GDRedExplosionObjects3= [];
gdjs.basketball_95gameCode.GDbackgroundObjects1= [];
gdjs.basketball_95gameCode.GDbackgroundObjects2= [];
gdjs.basketball_95gameCode.GDbackgroundObjects3= [];
gdjs.basketball_95gameCode.GDRedFlameObjects1= [];
gdjs.basketball_95gameCode.GDRedFlameObjects2= [];
gdjs.basketball_95gameCode.GDRedFlameObjects3= [];
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects1= [];
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects2= [];
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects3= [];
gdjs.basketball_95gameCode.GDLightningTextureObjects1= [];
gdjs.basketball_95gameCode.GDLightningTextureObjects2= [];
gdjs.basketball_95gameCode.GDLightningTextureObjects3= [];
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects3= [];
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects1= [];
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects2= [];
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects3= [];


gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects = Hashtable.newFrom({"basketball": []});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects2});
gdjs.basketball_95gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22961492);
}
if (isConditionTrue_0) {
gdjs.basketball_95gameCode.GDbasketballObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects, 800, 500, "Interactive");
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Scale").setScale(0.25);
}
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").setStatic();
}
}
}

}


};gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects2});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedFlameObjects2Objects = Hashtable.newFrom({"RedFlame": gdjs.basketball_95gameCode.GDRedFlameObjects2});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects2});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects2});
gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects = Hashtable.newFrom({"basketball": []});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects2});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDhoopObjects2Objects = Hashtable.newFrom({"hoop": gdjs.basketball_95gameCode.GDhoopObjects2});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDBasicExplosionEnergyObjects2Objects = Hashtable.newFrom({"BasicExplosionEnergy": gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects2});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDLightningTextureObjects2Objects = Hashtable.newFrom({"LightningTexture": gdjs.basketball_95gameCode.GDLightningTextureObjects2});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects3Objects = Hashtable.newFrom({"RedExplosion": gdjs.basketball_95gameCode.GDRedExplosionObjects3});
gdjs.basketball_95gameCode.asyncCallback22969004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.basketball_95gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects3);

gdjs.basketball_95gameCode.GDRedExplosionObjects3.length = 0;

{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects3.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects3[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects3Objects, (( gdjs.basketball_95gameCode.GDbasketballObjects3.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects3[0].getPointX("")), (( gdjs.basketball_95gameCode.GDbasketballObjects3.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects3[0].getPointY("")), "Interactive");
}
gdjs.basketball_95gameCode.localVariables.length = 0;
}
gdjs.basketball_95gameCode.idToCallbackMap.set(22969004, gdjs.basketball_95gameCode.asyncCallback22969004);
gdjs.basketball_95gameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.basketball_95gameCode.localVariables);
for (const obj of gdjs.basketball_95gameCode.GDbasketballObjects2) asyncObjectsList.addObject("basketball", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.basketball_95gameCode.asyncCallback22969004(runtimeScene, asyncObjectsList)), 22969004, asyncObjectsList);
}
}

}


};gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects2Objects = Hashtable.newFrom({"RedExplosion": gdjs.basketball_95gameCode.GDRedExplosionObjects2});
gdjs.basketball_95gameCode.asyncCallback22971060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.basketball_95gameCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
gdjs.basketball_95gameCode.localVariables.length = 0;
}
gdjs.basketball_95gameCode.idToCallbackMap.set(22971060, gdjs.basketball_95gameCode.asyncCallback22971060);
gdjs.basketball_95gameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.basketball_95gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.basketball_95gameCode.asyncCallback22971060(runtimeScene, asyncObjectsList)), 22971060, asyncObjectsList);
}
}

}


};gdjs.basketball_95gameCode.eventsList3 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects) < 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}

{ //Subevents
gdjs.basketball_95gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.basketball_95gameCode.GDbasketballObjects2.length;i<l;++i) {
    if ( gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getLinearVelocityLength() < 100 ) {
        isConditionTrue_0 = true;
        gdjs.basketball_95gameCode.GDbasketballObjects2[k] = gdjs.basketball_95gameCode.GDbasketballObjects2[i];
        ++k;
    }
}
gdjs.basketball_95gameCode.GDbasketballObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22962956);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.basketball_95gameCode.GDbasketballObjects2 */
gdjs.basketball_95gameCode.GDRedFlameObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedFlameObjects2Objects, (( gdjs.basketball_95gameCode.GDbasketballObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects2[0].getPointX("")), (( gdjs.basketball_95gameCode.GDbasketballObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects2[0].getPointY("")), "Interactive");
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDRedFlameObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDRedFlameObjects2[i].getBehavior("Sticker").Stick(gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.basketball_95gameCode.GDbasketballObjects2.length;i<l;++i) {
    if ( gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getLinearVelocityLength() < 100 ) {
        isConditionTrue_0 = true;
        gdjs.basketball_95gameCode.GDbasketballObjects2[k] = gdjs.basketball_95gameCode.GDbasketballObjects2[i];
        ++k;
    }
}
gdjs.basketball_95gameCode.GDbasketballObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects) == 1;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(0.1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.basketball_95gameCode.GDbasketballObjects2.length;i<l;++i) {
    if ( gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getLinearVelocityLength() < 100 ) {
        isConditionTrue_0 = true;
        gdjs.basketball_95gameCode.GDbasketballObjects2[k] = gdjs.basketball_95gameCode.GDbasketballObjects2[i];
        ++k;
    }
}
gdjs.basketball_95gameCode.GDbasketballObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22966260);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.basketball_95gameCode.GDbasketballObjects2 */
gdjs.copyArray(runtimeScene.getObjects("swipe"), gdjs.basketball_95gameCode.GDswipeObjects2);
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.evtTools.common.angleBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), gdjs.evtTools.common.clamp((gdjs.evtTools.common.distanceBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))) * 0.0025, 0, 0.65), (gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getMassCenterX()), (gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getMassCenterY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDswipeObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDswipeObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22967348);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("swipe"), gdjs.basketball_95gameCode.GDswipeObjects2);
{for(var i = 0, len = gdjs.basketball_95gameCode.GDswipeObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDswipeObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);
gdjs.copyArray(runtimeScene.getObjects("hoop"), gdjs.basketball_95gameCode.GDhoopObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDhoopObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22968108);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.basketball_95gameCode.GDhoopObjects2 */
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects2.length = 0;

gdjs.basketball_95gameCode.GDLightningTextureObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDBasicExplosionEnergyObjects2Objects, (( gdjs.basketball_95gameCode.GDhoopObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDhoopObjects2[0].getPointX("")), (( gdjs.basketball_95gameCode.GDhoopObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDhoopObjects2[0].getPointY("")), "Interactive");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDLightningTextureObjects2Objects, (( gdjs.basketball_95gameCode.GDhoopObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDhoopObjects2[0].getPointX("")), (( gdjs.basketball_95gameCode.GDhoopObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDhoopObjects2[0].getPointY("")), "Interactive");
}

{ //Subevents
gdjs.basketball_95gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.basketball_95gameCode.GDbasketballObjects2.length;i<l;++i) {
    if ( !(gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("InOnScreen").IsOnScreen(300, null)) ) {
        isConditionTrue_0 = true;
        gdjs.basketball_95gameCode.GDbasketballObjects2[k] = gdjs.basketball_95gameCode.GDbasketballObjects2[i];
        ++k;
    }
}
gdjs.basketball_95gameCode.GDbasketballObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.basketball_95gameCode.GDbasketballObjects2 */
gdjs.basketball_95gameCode.GDRedExplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects2Objects, (( gdjs.basketball_95gameCode.GDbasketballObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects2[0].getPointX("")), (( gdjs.basketball_95gameCode.GDbasketballObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects2[0].getPointY("")), "Interactive");
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22971164);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.basketball_95gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects1Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects1});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.basketball_95gameCode.GDfloorObjects1});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects2Objects = Hashtable.newFrom({"RedExplosion": gdjs.basketball_95gameCode.GDRedExplosionObjects2});
gdjs.basketball_95gameCode.asyncCallback22971868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.basketball_95gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);

gdjs.basketball_95gameCode.GDRedExplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects2Objects, (( gdjs.basketball_95gameCode.GDbasketballObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects2[0].getPointX("")), (( gdjs.basketball_95gameCode.GDbasketballObjects2.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects2[0].getPointY("")), "Interactive");
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.basketball_95gameCode.localVariables.length = 0;
}
gdjs.basketball_95gameCode.idToCallbackMap.set(22971868, gdjs.basketball_95gameCode.asyncCallback22971868);
gdjs.basketball_95gameCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.basketball_95gameCode.localVariables);
for (const obj of gdjs.basketball_95gameCode.GDbasketballObjects1) asyncObjectsList.addObject("basketball", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.basketball_95gameCode.asyncCallback22971868(runtimeScene, asyncObjectsList)), 22971868, asyncObjectsList);
}
}

}


};gdjs.basketball_95gameCode.eventsList5 = function(runtimeScene) {

{


gdjs.basketball_95gameCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects1);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.basketball_95gameCode.GDfloorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects1Objects, "Physics2", gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDfloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22972052);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.basketball_95gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.basketball_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.basketball_95gameCode.GDbasketballObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects3.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects1.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects2.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects3.length = 0;
gdjs.basketball_95gameCode.GDwallObjects1.length = 0;
gdjs.basketball_95gameCode.GDwallObjects2.length = 0;
gdjs.basketball_95gameCode.GDwallObjects3.length = 0;
gdjs.basketball_95gameCode.GDhoopObjects1.length = 0;
gdjs.basketball_95gameCode.GDhoopObjects2.length = 0;
gdjs.basketball_95gameCode.GDhoopObjects3.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects1.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects2.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects3.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects3.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects1.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects2.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects3.length = 0;
gdjs.basketball_95gameCode.GDbackgroundObjects1.length = 0;
gdjs.basketball_95gameCode.GDbackgroundObjects2.length = 0;
gdjs.basketball_95gameCode.GDbackgroundObjects3.length = 0;
gdjs.basketball_95gameCode.GDRedFlameObjects1.length = 0;
gdjs.basketball_95gameCode.GDRedFlameObjects2.length = 0;
gdjs.basketball_95gameCode.GDRedFlameObjects3.length = 0;
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects3.length = 0;
gdjs.basketball_95gameCode.GDLightningTextureObjects1.length = 0;
gdjs.basketball_95gameCode.GDLightningTextureObjects2.length = 0;
gdjs.basketball_95gameCode.GDLightningTextureObjects3.length = 0;
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects3.length = 0;

gdjs.basketball_95gameCode.eventsList5(runtimeScene);
gdjs.basketball_95gameCode.GDbasketballObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects3.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects1.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects2.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects3.length = 0;
gdjs.basketball_95gameCode.GDwallObjects1.length = 0;
gdjs.basketball_95gameCode.GDwallObjects2.length = 0;
gdjs.basketball_95gameCode.GDwallObjects3.length = 0;
gdjs.basketball_95gameCode.GDhoopObjects1.length = 0;
gdjs.basketball_95gameCode.GDhoopObjects2.length = 0;
gdjs.basketball_95gameCode.GDhoopObjects3.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects1.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects2.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects3.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects3.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects1.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects2.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects3.length = 0;
gdjs.basketball_95gameCode.GDbackgroundObjects1.length = 0;
gdjs.basketball_95gameCode.GDbackgroundObjects2.length = 0;
gdjs.basketball_95gameCode.GDbackgroundObjects3.length = 0;
gdjs.basketball_95gameCode.GDRedFlameObjects1.length = 0;
gdjs.basketball_95gameCode.GDRedFlameObjects2.length = 0;
gdjs.basketball_95gameCode.GDRedFlameObjects3.length = 0;
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.basketball_95gameCode.GDBasicExplosionEnergyObjects3.length = 0;
gdjs.basketball_95gameCode.GDLightningTextureObjects1.length = 0;
gdjs.basketball_95gameCode.GDLightningTextureObjects2.length = 0;
gdjs.basketball_95gameCode.GDLightningTextureObjects3.length = 0;
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.basketball_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.basketball_95gameCode.GDGerms_9595VideoObjects3.length = 0;


return;

}

gdjs['basketball_95gameCode'] = gdjs.basketball_95gameCode;
