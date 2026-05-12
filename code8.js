gdjs.fishing_95gameCode = {};
gdjs.fishing_95gameCode.localVariables = [];
gdjs.fishing_95gameCode.idToCallbackMap = new Map();
gdjs.fishing_95gameCode.GDspearObjects1= [];
gdjs.fishing_95gameCode.GDspearObjects2= [];
gdjs.fishing_95gameCode.GDfishObjects1= [];
gdjs.fishing_95gameCode.GDfishObjects2= [];
gdjs.fishing_95gameCode.GDsandObjects1= [];
gdjs.fishing_95gameCode.GDsandObjects2= [];
gdjs.fishing_95gameCode.GDsand_9595explodeObjects1= [];
gdjs.fishing_95gameCode.GDsand_9595explodeObjects2= [];
gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects1= [];
gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects2= [];
gdjs.fishing_95gameCode.GDfish_9595explodeObjects1= [];
gdjs.fishing_95gameCode.GDfish_9595explodeObjects2= [];
gdjs.fishing_95gameCode.GDVerticalBubblesObjects1= [];
gdjs.fishing_95gameCode.GDVerticalBubblesObjects2= [];
gdjs.fishing_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.fishing_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.fishing_95gameCode.GDintroduction_9595to_9595germsObjects1= [];
gdjs.fishing_95gameCode.GDintroduction_9595to_9595germsObjects2= [];
gdjs.fishing_95gameCode.GDRiver_9595StoryObjects1= [];
gdjs.fishing_95gameCode.GDRiver_9595StoryObjects2= [];
gdjs.fishing_95gameCode.GDhow_9595do_9595germs_9595spread_9595in_9595the_9595bodyObjects1= [];
gdjs.fishing_95gameCode.GDhow_9595do_9595germs_9595spread_9595in_9595the_9595bodyObjects2= [];
gdjs.fishing_95gameCode.GDcar_9595game_9595introObjects1= [];
gdjs.fishing_95gameCode.GDcar_9595game_9595introObjects2= [];
gdjs.fishing_95gameCode.GDQuest_9595TextObjects1= [];
gdjs.fishing_95gameCode.GDQuest_9595TextObjects2= [];
gdjs.fishing_95gameCode.GDSmallGreenButtonObjects1= [];
gdjs.fishing_95gameCode.GDSmallGreenButtonObjects2= [];
gdjs.fishing_95gameCode.GDyour_9595body_9595your_9595choiceObjects1= [];
gdjs.fishing_95gameCode.GDyour_9595body_9595your_9595choiceObjects2= [];
gdjs.fishing_95gameCode.GDintroduction_9595to_9595immunityObjects1= [];
gdjs.fishing_95gameCode.GDintroduction_9595to_9595immunityObjects2= [];
gdjs.fishing_95gameCode.GDhow_9595do_9595immunisations_9595workObjects1= [];
gdjs.fishing_95gameCode.GDhow_9595do_9595immunisations_9595workObjects2= [];
gdjs.fishing_95gameCode.GDherd_9595immunityObjects1= [];
gdjs.fishing_95gameCode.GDherd_9595immunityObjects2= [];
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Boys_9595VideoObjects1= [];
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Boys_9595VideoObjects2= [];
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Girls_9595VideoObjects1= [];
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Girls_9595VideoObjects2= [];
gdjs.fishing_95gameCode.GDRed_9595Cliffs_9595VideoObjects1= [];
gdjs.fishing_95gameCode.GDRed_9595Cliffs_9595VideoObjects2= [];
gdjs.fishing_95gameCode.GDBannana_9595VideoObjects1= [];
gdjs.fishing_95gameCode.GDBannana_9595VideoObjects2= [];
gdjs.fishing_95gameCode.GDGoku_9595Flower_9595VideoObjects1= [];
gdjs.fishing_95gameCode.GDGoku_9595Flower_9595VideoObjects2= [];


gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects = Hashtable.newFrom({"fish": gdjs.fishing_95gameCode.GDfishObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects2Objects = Hashtable.newFrom({"fish": gdjs.fishing_95gameCode.GDfishObjects2});
gdjs.fishing_95gameCode.asyncCallback29714380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fishing_95gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects2);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects2Objects, 1500, gdjs.randomInRange(200, 550), "");
}
gdjs.fishing_95gameCode.localVariables.length = 0;
}
gdjs.fishing_95gameCode.idToCallbackMap.set(29714380, gdjs.fishing_95gameCode.asyncCallback29714380);
gdjs.fishing_95gameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.fishing_95gameCode.localVariables);
for (const obj of gdjs.fishing_95gameCode.GDfishObjects1) asyncObjectsList.addObject("fish", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.fishing_95gameCode.asyncCallback29714380(runtimeScene, asyncObjectsList)), 29714380, asyncObjectsList);
}
}

}


};gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects = Hashtable.newFrom({"fish": gdjs.fishing_95gameCode.GDfishObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects = Hashtable.newFrom({"fish": gdjs.fishing_95gameCode.GDfishObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects = Hashtable.newFrom({"fish": gdjs.fishing_95gameCode.GDfishObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29722356);
}
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDspearObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, 30, 140, "");
}
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").setStatic();
}
}
}

}


};gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects = Hashtable.newFrom({"fish": gdjs.fishing_95gameCode.GDfishObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDGOOD_95959595_959595330ATHA_95959595Objects1Objects = Hashtable.newFrom({"GOOD_ŊATHA_": gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfish_95959595explodeObjects1Objects = Hashtable.newFrom({"fish_explode": gdjs.fishing_95gameCode.GDfish_9595explodeObjects1});
gdjs.fishing_95gameCode.asyncCallback29726108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fishing_95gameCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
gdjs.fishing_95gameCode.localVariables.length = 0;
}
gdjs.fishing_95gameCode.idToCallbackMap.set(29726108, gdjs.fishing_95gameCode.asyncCallback29726108);
gdjs.fishing_95gameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.fishing_95gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.fishing_95gameCode.asyncCallback29726108(runtimeScene, asyncObjectsList)), 29726108, asyncObjectsList);
}
}

}


};gdjs.fishing_95gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.fishing_95gameCode.GDfishObjects1 */
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.fishing_95gameCode.GDfishObjects1.length !== 0 ? gdjs.fishing_95gameCode.GDfishObjects1[0] : null), false, "", 0);
}

{ //Subevents
gdjs.fishing_95gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDsandObjects1Objects = Hashtable.newFrom({"sand": gdjs.fishing_95gameCode.GDsandObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDsand_95959595explodeObjects1Objects = Hashtable.newFrom({"sand_explode": gdjs.fishing_95gameCode.GDsand_9595explodeObjects1});
gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects = Hashtable.newFrom({"spear": gdjs.fishing_95gameCode.GDspearObjects1});
gdjs.fishing_95gameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29727748);
}
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDspearObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, 30, 140, "");
}
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").setStatic();
}
}
}

}


};gdjs.fishing_95gameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").setStatic();
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/soundfx/fish_game/bubbles_2.mp3", 9, true, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fish");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "speed");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects1);
gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fish") > gdjs.randomInRange(5, 15);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, "Physics2", gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29714068);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fish");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/soundfx/fish_game/bubbles.mp3", false, 55, 1);
}

{ //Subevents
gdjs.fishing_95gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fishing_95gameCode.GDfishObjects1.length;i<l;++i) {
    if ( gdjs.fishing_95gameCode.GDfishObjects1[i].getBehavior("Physics2").isKinematic() ) {
        isConditionTrue_0 = true;
        gdjs.fishing_95gameCode.GDfishObjects1[k] = gdjs.fishing_95gameCode.GDfishObjects1[i];
        ++k;
    }
}
gdjs.fishing_95gameCode.GDfishObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDfishObjects1 */
{for(var i = 0, len = gdjs.fishing_95gameCode.GDfishObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDfishObjects1[i].setX(gdjs.fishing_95gameCode.GDfishObjects1[i].getX() - (gdjs.evtTools.common.clamp(85 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "speed"), 25, 85)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fishing_95gameCode.GDfishObjects1.length;i<l;++i) {
    if ( gdjs.fishing_95gameCode.GDfishObjects1[i].getX() < -(100) ) {
        isConditionTrue_0 = true;
        gdjs.fishing_95gameCode.GDfishObjects1[k] = gdjs.fishing_95gameCode.GDfishObjects1[i];
        ++k;
    }
}
gdjs.fishing_95gameCode.GDfishObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDfishObjects1 */
{for(var i = 0, len = gdjs.fishing_95gameCode.GDfishObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDfishObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects1);
gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, "Physics2", gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fishing_95gameCode.GDspearObjects1.length;i<l;++i) {
    if ( !(gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").isDynamic()) ) {
        isConditionTrue_0 = true;
        gdjs.fishing_95gameCode.GDspearObjects1[k] = gdjs.fishing_95gameCode.GDspearObjects1[i];
        ++k;
    }
}
gdjs.fishing_95gameCode.GDspearObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29716580);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects1);
gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, "Physics2", gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fishing_95gameCode.GDspearObjects1.length;i<l;++i) {
    if ( !(gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").isDynamic()) ) {
        isConditionTrue_0 = true;
        gdjs.fishing_95gameCode.GDspearObjects1[k] = gdjs.fishing_95gameCode.GDspearObjects1[i];
        ++k;
    }
}
gdjs.fishing_95gameCode.GDspearObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDspearObjects1 */
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects1);
gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, "Physics2", gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fishing_95gameCode.GDspearObjects1.length;i<l;++i) {
    if ( !(gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").isDynamic()) ) {
        isConditionTrue_0 = true;
        gdjs.fishing_95gameCode.GDspearObjects1[k] = gdjs.fishing_95gameCode.GDspearObjects1[i];
        ++k;
    }
}
gdjs.fishing_95gameCode.GDspearObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29720276);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDspearObjects1 */
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").applyPolarImpulse(gdjs.evtTools.common.angleBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), (gdjs.evtTools.common.distanceBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))) * 0.05, (gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").getMassCenterY()));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/soundfx/fish_game/spear_throw.mp3", false, 100, gdjs.randomFloatInRange(0.7, 1.3));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fishing_95gameCode.GDspearObjects1.length;i<l;++i) {
    if ( !(gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("InOnScreen").IsOnScreen(50, null)) ) {
        isConditionTrue_0 = true;
        gdjs.fishing_95gameCode.GDspearObjects1[k] = gdjs.fishing_95gameCode.GDspearObjects1[i];
        ++k;
    }
}
gdjs.fishing_95gameCode.GDspearObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDspearObjects1 */
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.fishing_95gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.fishing_95gameCode.GDfishObjects1);
gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, "Physics2", gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfishObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29723292);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDfishObjects1 */
/* Reuse gdjs.fishing_95gameCode.GDspearObjects1 */
gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects1.length = 0;

gdjs.fishing_95gameCode.GDfish_9595explodeObjects1.length = 0;

{for(var i = 0, len = gdjs.fishing_95gameCode.GDfishObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDfishObjects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].getBehavior("Physics2").setStatic();
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDGOOD_95959595_959595330ATHA_95959595Objects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "UI");
}
{for(var i = 0, len = gdjs.fishing_95gameCode.GDfishObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDfishObjects1[i].setPosition((( gdjs.fishing_95gameCode.GDspearObjects1.length === 0 ) ? 0 :gdjs.fishing_95gameCode.GDspearObjects1[0].getAABBLeft()),(( gdjs.fishing_95gameCode.GDspearObjects1.length === 0 ) ? 0 :gdjs.fishing_95gameCode.GDspearObjects1[0].getAABBCenterY()));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDfish_95959595explodeObjects1Objects, (( gdjs.fishing_95gameCode.GDfishObjects1.length === 0 ) ? 0 :gdjs.fishing_95gameCode.GDfishObjects1[0].getPointX("")), (( gdjs.fishing_95gameCode.GDfishObjects1.length === 0 ) ? 0 :gdjs.fishing_95gameCode.GDfishObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/soundfx/fish_game/celebrate.mp3", false, 55, 1);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 9);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}

{ //Subevents
gdjs.fishing_95gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sand"), gdjs.fishing_95gameCode.GDsandObjects1);
gdjs.copyArray(runtimeScene.getObjects("spear"), gdjs.fishing_95gameCode.GDspearObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDspearObjects1Objects, "Physics2", gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDsandObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.fishing_95gameCode.GDspearObjects1 */
gdjs.fishing_95gameCode.GDsand_9595explodeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.fishing_95gameCode.mapOfGDgdjs_9546fishing_959595gameCode_9546GDsand_95959595explodeObjects1Objects, (( gdjs.fishing_95gameCode.GDspearObjects1.length === 0 ) ? 0 :gdjs.fishing_95gameCode.GDspearObjects1[0].getPointX("origin")), (( gdjs.fishing_95gameCode.GDspearObjects1.length === 0 ) ? 0 :gdjs.fishing_95gameCode.GDspearObjects1[0].getPointY("origin")), "");
}
{for(var i = 0, len = gdjs.fishing_95gameCode.GDspearObjects1.length ;i < len;++i) {
    gdjs.fishing_95gameCode.GDspearObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.fishing_95gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.fishing_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fishing_95gameCode.GDspearObjects1.length = 0;
gdjs.fishing_95gameCode.GDspearObjects2.length = 0;
gdjs.fishing_95gameCode.GDfishObjects1.length = 0;
gdjs.fishing_95gameCode.GDfishObjects2.length = 0;
gdjs.fishing_95gameCode.GDsandObjects1.length = 0;
gdjs.fishing_95gameCode.GDsandObjects2.length = 0;
gdjs.fishing_95gameCode.GDsand_9595explodeObjects1.length = 0;
gdjs.fishing_95gameCode.GDsand_9595explodeObjects2.length = 0;
gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects1.length = 0;
gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects2.length = 0;
gdjs.fishing_95gameCode.GDfish_9595explodeObjects1.length = 0;
gdjs.fishing_95gameCode.GDfish_9595explodeObjects2.length = 0;
gdjs.fishing_95gameCode.GDVerticalBubblesObjects1.length = 0;
gdjs.fishing_95gameCode.GDVerticalBubblesObjects2.length = 0;
gdjs.fishing_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595germsObjects1.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595germsObjects2.length = 0;
gdjs.fishing_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.fishing_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595germs_9595spread_9595in_9595the_9595bodyObjects1.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595germs_9595spread_9595in_9595the_9595bodyObjects2.length = 0;
gdjs.fishing_95gameCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.fishing_95gameCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.fishing_95gameCode.GDQuest_9595TextObjects1.length = 0;
gdjs.fishing_95gameCode.GDQuest_9595TextObjects2.length = 0;
gdjs.fishing_95gameCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.fishing_95gameCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.fishing_95gameCode.GDyour_9595body_9595your_9595choiceObjects1.length = 0;
gdjs.fishing_95gameCode.GDyour_9595body_9595your_9595choiceObjects2.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595immunityObjects1.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595immunityObjects2.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595immunisations_9595workObjects1.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595immunisations_9595workObjects2.length = 0;
gdjs.fishing_95gameCode.GDherd_9595immunityObjects1.length = 0;
gdjs.fishing_95gameCode.GDherd_9595immunityObjects2.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Boys_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Boys_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Girls_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Girls_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDRed_9595Cliffs_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDRed_9595Cliffs_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDBannana_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDBannana_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDGoku_9595Flower_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDGoku_9595Flower_9595VideoObjects2.length = 0;

gdjs.fishing_95gameCode.eventsList5(runtimeScene);
gdjs.fishing_95gameCode.GDspearObjects1.length = 0;
gdjs.fishing_95gameCode.GDspearObjects2.length = 0;
gdjs.fishing_95gameCode.GDfishObjects1.length = 0;
gdjs.fishing_95gameCode.GDfishObjects2.length = 0;
gdjs.fishing_95gameCode.GDsandObjects1.length = 0;
gdjs.fishing_95gameCode.GDsandObjects2.length = 0;
gdjs.fishing_95gameCode.GDsand_9595explodeObjects1.length = 0;
gdjs.fishing_95gameCode.GDsand_9595explodeObjects2.length = 0;
gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects1.length = 0;
gdjs.fishing_95gameCode.GDGOOD_9595_95330ATHA_9595Objects2.length = 0;
gdjs.fishing_95gameCode.GDfish_9595explodeObjects1.length = 0;
gdjs.fishing_95gameCode.GDfish_9595explodeObjects2.length = 0;
gdjs.fishing_95gameCode.GDVerticalBubblesObjects1.length = 0;
gdjs.fishing_95gameCode.GDVerticalBubblesObjects2.length = 0;
gdjs.fishing_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595germsObjects1.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595germsObjects2.length = 0;
gdjs.fishing_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.fishing_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595germs_9595spread_9595in_9595the_9595bodyObjects1.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595germs_9595spread_9595in_9595the_9595bodyObjects2.length = 0;
gdjs.fishing_95gameCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.fishing_95gameCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.fishing_95gameCode.GDQuest_9595TextObjects1.length = 0;
gdjs.fishing_95gameCode.GDQuest_9595TextObjects2.length = 0;
gdjs.fishing_95gameCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.fishing_95gameCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.fishing_95gameCode.GDyour_9595body_9595your_9595choiceObjects1.length = 0;
gdjs.fishing_95gameCode.GDyour_9595body_9595your_9595choiceObjects2.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595immunityObjects1.length = 0;
gdjs.fishing_95gameCode.GDintroduction_9595to_9595immunityObjects2.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595immunisations_9595workObjects1.length = 0;
gdjs.fishing_95gameCode.GDhow_9595do_9595immunisations_9595workObjects2.length = 0;
gdjs.fishing_95gameCode.GDherd_9595immunityObjects1.length = 0;
gdjs.fishing_95gameCode.GDherd_9595immunityObjects2.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Boys_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Boys_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Girls_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDGawa_9595Ngatha_9595Girls_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDRed_9595Cliffs_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDRed_9595Cliffs_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDBannana_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDBannana_9595VideoObjects2.length = 0;
gdjs.fishing_95gameCode.GDGoku_9595Flower_9595VideoObjects1.length = 0;
gdjs.fishing_95gameCode.GDGoku_9595Flower_9595VideoObjects2.length = 0;


return;

}

gdjs['fishing_95gameCode'] = gdjs.fishing_95gameCode;
