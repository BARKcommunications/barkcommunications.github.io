gdjs.mop_95gameCode = {};
gdjs.mop_95gameCode.localVariables = [];
gdjs.mop_95gameCode.idToCallbackMap = new Map();
gdjs.mop_95gameCode.GDpuddleObjects1= [];
gdjs.mop_95gameCode.GDpuddleObjects2= [];
gdjs.mop_95gameCode.GDpuddleObjects3= [];
gdjs.mop_95gameCode.GDPixiDustObjects1= [];
gdjs.mop_95gameCode.GDPixiDustObjects2= [];
gdjs.mop_95gameCode.GDPixiDustObjects3= [];
gdjs.mop_95gameCode.GDNewTiledSpriteObjects1= [];
gdjs.mop_95gameCode.GDNewTiledSpriteObjects2= [];
gdjs.mop_95gameCode.GDNewTiledSpriteObjects3= [];
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects3= [];
gdjs.mop_95gameCode.GDGerms_9595VideoObjects1= [];
gdjs.mop_95gameCode.GDGerms_9595VideoObjects2= [];
gdjs.mop_95gameCode.GDGerms_9595VideoObjects3= [];
gdjs.mop_95gameCode.GDRiver_9595StoryObjects1= [];
gdjs.mop_95gameCode.GDRiver_9595StoryObjects2= [];
gdjs.mop_95gameCode.GDRiver_9595StoryObjects3= [];
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1= [];
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2= [];
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects3= [];
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects1= [];
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects2= [];
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects3= [];
gdjs.mop_95gameCode.GDQuest_9595TextObjects1= [];
gdjs.mop_95gameCode.GDQuest_9595TextObjects2= [];
gdjs.mop_95gameCode.GDQuest_9595TextObjects3= [];
gdjs.mop_95gameCode.GDSmallGreenButtonObjects1= [];
gdjs.mop_95gameCode.GDSmallGreenButtonObjects2= [];
gdjs.mop_95gameCode.GDSmallGreenButtonObjects3= [];


gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDpuddleObjects2Objects = Hashtable.newFrom({"puddle": gdjs.mop_95gameCode.GDpuddleObjects2});
gdjs.mop_95gameCode.eventsList0 = function(runtimeScene) {

};gdjs.mop_95gameCode.eventsList1 = function(runtimeScene) {

{


const repeatCount2 = gdjs.randomInRange(5, 15);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.mop_95gameCode.GDpuddleObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDpuddleObjects2Objects, gdjs.randomFloatInRange(20, 1260), gdjs.randomFloatInRange(20, 700), "");
}
{for(var i = 0, len = gdjs.mop_95gameCode.GDpuddleObjects2.length ;i < len;++i) {
    gdjs.mop_95gameCode.GDpuddleObjects2[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(2, 5));
}
}
}
}

}


};gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDPixiDustObjects2Objects = Hashtable.newFrom({"PixiDust": gdjs.mop_95gameCode.GDPixiDustObjects2});
gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDPixiDustObjects1Objects = Hashtable.newFrom({"PixiDust": gdjs.mop_95gameCode.GDPixiDustObjects1});
gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDpuddleObjects1Objects = Hashtable.newFrom({"puddle": gdjs.mop_95gameCode.GDpuddleObjects1});
gdjs.mop_95gameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25052868);
}
if (isConditionTrue_0) {
gdjs.mop_95gameCode.GDPixiDustObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDPixiDustObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PixiDust"), gdjs.mop_95gameCode.GDPixiDustObjects2);
{for(var i = 0, len = gdjs.mop_95gameCode.GDPixiDustObjects2.length ;i < len;++i) {
    gdjs.mop_95gameCode.GDPixiDustObjects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.mop_95gameCode.GDPixiDustObjects2.length ;i < len;++i) {
    gdjs.mop_95gameCode.GDPixiDustObjects2[i].setFlow(2000);
}
}
{for(var i = 0, len = gdjs.mop_95gameCode.GDPixiDustObjects2.length ;i < len;++i) {
    gdjs.mop_95gameCode.GDPixiDustObjects2[i].setZoneRadius(25);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PixiDust"), gdjs.mop_95gameCode.GDPixiDustObjects1);
gdjs.copyArray(runtimeScene.getObjects("puddle"), gdjs.mop_95gameCode.GDpuddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDPixiDustObjects1Objects, gdjs.mop_95gameCode.mapOfGDgdjs_9546mop_959595gameCode_9546GDpuddleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mop_95gameCode.GDpuddleObjects1 */
{for(var i = 0, len = gdjs.mop_95gameCode.GDpuddleObjects1.length ;i < len;++i) {
    gdjs.mop_95gameCode.GDpuddleObjects1[i].getBehavior("Scale").setScale(gdjs.mop_95gameCode.GDpuddleObjects1[i].getBehavior("Scale").getScale() - (0.35));
}
}
}

}


};gdjs.mop_95gameCode.mapOfEmptyGDpuddleObjects = Hashtable.newFrom({"puddle": []});
gdjs.mop_95gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.mop_95gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.mop_95gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PixiDust"), gdjs.mop_95gameCode.GDPixiDustObjects1);
{for(var i = 0, len = gdjs.mop_95gameCode.GDPixiDustObjects1.length ;i < len;++i) {
    gdjs.mop_95gameCode.GDPixiDustObjects1[i].setFlow(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("puddle"), gdjs.mop_95gameCode.GDpuddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mop_95gameCode.GDpuddleObjects1.length;i<l;++i) {
    if ( gdjs.mop_95gameCode.GDpuddleObjects1[i].getBehavior("Scale").getScale() <= 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.mop_95gameCode.GDpuddleObjects1[k] = gdjs.mop_95gameCode.GDpuddleObjects1[i];
        ++k;
    }
}
gdjs.mop_95gameCode.GDpuddleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mop_95gameCode.GDpuddleObjects1 */
{for(var i = 0, len = gdjs.mop_95gameCode.GDpuddleObjects1.length ;i < len;++i) {
    gdjs.mop_95gameCode.GDpuddleObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.mop_95gameCode.mapOfEmptyGDpuddleObjects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.mop_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mop_95gameCode.GDpuddleObjects1.length = 0;
gdjs.mop_95gameCode.GDpuddleObjects2.length = 0;
gdjs.mop_95gameCode.GDpuddleObjects3.length = 0;
gdjs.mop_95gameCode.GDPixiDustObjects1.length = 0;
gdjs.mop_95gameCode.GDPixiDustObjects2.length = 0;
gdjs.mop_95gameCode.GDPixiDustObjects3.length = 0;
gdjs.mop_95gameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.mop_95gameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.mop_95gameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.mop_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.mop_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.mop_95gameCode.GDGerms_9595VideoObjects3.length = 0;
gdjs.mop_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.mop_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.mop_95gameCode.GDRiver_9595StoryObjects3.length = 0;
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects3.length = 0;
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects3.length = 0;
gdjs.mop_95gameCode.GDQuest_9595TextObjects1.length = 0;
gdjs.mop_95gameCode.GDQuest_9595TextObjects2.length = 0;
gdjs.mop_95gameCode.GDQuest_9595TextObjects3.length = 0;
gdjs.mop_95gameCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.mop_95gameCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.mop_95gameCode.GDSmallGreenButtonObjects3.length = 0;

gdjs.mop_95gameCode.eventsList3(runtimeScene);
gdjs.mop_95gameCode.GDpuddleObjects1.length = 0;
gdjs.mop_95gameCode.GDpuddleObjects2.length = 0;
gdjs.mop_95gameCode.GDpuddleObjects3.length = 0;
gdjs.mop_95gameCode.GDPixiDustObjects1.length = 0;
gdjs.mop_95gameCode.GDPixiDustObjects2.length = 0;
gdjs.mop_95gameCode.GDPixiDustObjects3.length = 0;
gdjs.mop_95gameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.mop_95gameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.mop_95gameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.mop_95gameCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.mop_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.mop_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.mop_95gameCode.GDGerms_9595VideoObjects3.length = 0;
gdjs.mop_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.mop_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.mop_95gameCode.GDRiver_9595StoryObjects3.length = 0;
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;
gdjs.mop_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects3.length = 0;
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.mop_95gameCode.GDcar_9595game_9595introObjects3.length = 0;
gdjs.mop_95gameCode.GDQuest_9595TextObjects1.length = 0;
gdjs.mop_95gameCode.GDQuest_9595TextObjects2.length = 0;
gdjs.mop_95gameCode.GDQuest_9595TextObjects3.length = 0;
gdjs.mop_95gameCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.mop_95gameCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.mop_95gameCode.GDSmallGreenButtonObjects3.length = 0;


return;

}

gdjs['mop_95gameCode'] = gdjs.mop_95gameCode;
