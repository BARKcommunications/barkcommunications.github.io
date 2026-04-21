gdjs.bookCode = {};
gdjs.bookCode.localVariables = [];
gdjs.bookCode.idToCallbackMap = new Map();
gdjs.bookCode.GDbook_9595frontObjects1= [];
gdjs.bookCode.GDbook_9595frontObjects2= [];
gdjs.bookCode.GDbook_9595frontObjects3= [];
gdjs.bookCode.GDbook_9595backObjects1= [];
gdjs.bookCode.GDbook_9595backObjects2= [];
gdjs.bookCode.GDbook_9595backObjects3= [];
gdjs.bookCode.GDbook_9595behindObjects1= [];
gdjs.bookCode.GDbook_9595behindObjects2= [];
gdjs.bookCode.GDbook_9595behindObjects3= [];
gdjs.bookCode.GDbook_9595behind2Objects1= [];
gdjs.bookCode.GDbook_9595behind2Objects2= [];
gdjs.bookCode.GDbook_9595behind2Objects3= [];
gdjs.bookCode.GDbackObjects1= [];
gdjs.bookCode.GDbackObjects2= [];
gdjs.bookCode.GDbackObjects3= [];
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects3= [];
gdjs.bookCode.GDGerms_9595VideoObjects1= [];
gdjs.bookCode.GDGerms_9595VideoObjects2= [];
gdjs.bookCode.GDGerms_9595VideoObjects3= [];
gdjs.bookCode.GDRiver_9595StoryObjects1= [];
gdjs.bookCode.GDRiver_9595StoryObjects2= [];
gdjs.bookCode.GDRiver_9595StoryObjects3= [];
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1= [];
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2= [];
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects3= [];
gdjs.bookCode.GDcar_9595game_9595introObjects1= [];
gdjs.bookCode.GDcar_9595game_9595introObjects2= [];
gdjs.bookCode.GDcar_9595game_9595introObjects3= [];
gdjs.bookCode.GDQuest_9595TextObjects1= [];
gdjs.bookCode.GDQuest_9595TextObjects2= [];
gdjs.bookCode.GDQuest_9595TextObjects3= [];
gdjs.bookCode.GDSmallGreenButtonObjects1= [];
gdjs.bookCode.GDSmallGreenButtonObjects2= [];
gdjs.bookCode.GDSmallGreenButtonObjects3= [];


gdjs.bookCode.mapOfGDgdjs_9546bookCode_9546GDbook_95959595backObjects2Objects = Hashtable.newFrom({"book_back": gdjs.bookCode.GDbook_9595backObjects2});
gdjs.bookCode.mapOfGDgdjs_9546bookCode_9546GDbook_95959595behind2Objects1Objects = Hashtable.newFrom({"book_behind2": gdjs.bookCode.GDbook_9595behind2Objects1});
gdjs.bookCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("book_front"), gdjs.bookCode.GDbook_9595frontObjects2);
{for(var i = 0, len = gdjs.bookCode.GDbook_9595frontObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595frontObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595frontObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595frontObjects2[i].setZOrder(28);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595frontObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595frontObjects2[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 2);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595frontObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595frontObjects2[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "strength", 0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.bookCode.GDbook_9595backObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bookCode.mapOfGDgdjs_9546bookCode_9546GDbook_95959595backObjects2Objects, 510, 0, "");
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595backObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595backObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595backObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595backObjects2[i].getBehavior("Resizable").setWidth(510);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595backObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595backObjects2[i].getBehavior("Resizable").setHeight(720);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595backObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595backObjects2[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 4);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595backObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595backObjects2[i].setZOrder(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("book_behind"), gdjs.bookCode.GDbook_9595behindObjects2);
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behindObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behindObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behindObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behindObjects2[i].getBehavior("Resizable").setWidth(0);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behindObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behindObjects2[i].setZOrder(27);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behindObjects2.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behindObjects2[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 2);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.bookCode.GDbook_9595behind2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bookCode.mapOfGDgdjs_9546bookCode_9546GDbook_95959595behind2Objects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].getBehavior("Resizable").setWidth(510);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].getBehavior("Resizable").setHeight(720);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].setZOrder(1);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].hide();
}
}
}

}


};gdjs.bookCode.mapOfGDgdjs_9546bookCode_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.bookCode.GDbackObjects1});
gdjs.bookCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(2));
}

{ //Subevents
gdjs.bookCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("book_front"), gdjs.bookCode.GDbook_9595frontObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 24);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bookCode.GDbook_9595frontObjects1.length;i<l;++i) {
    if ( gdjs.bookCode.GDbook_9595frontObjects1[i].getBehavior("Tween").hasFinished("flip") ) {
        isConditionTrue_0 = true;
        gdjs.bookCode.GDbook_9595frontObjects1[k] = gdjs.bookCode.GDbook_9595frontObjects1[i];
        ++k;
    }
}
gdjs.bookCode.GDbook_9595frontObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25104644);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("book_behind"), gdjs.bookCode.GDbook_9595behindObjects1);
gdjs.copyArray(runtimeScene.getObjects("book_front"), gdjs.bookCode.GDbook_9595frontObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bookCode.GDbook_9595frontObjects1.length;i<l;++i) {
    if ( !(gdjs.bookCode.GDbook_9595frontObjects1[i].getBehavior("Tween").isPlaying("flip")) ) {
        isConditionTrue_0 = true;
        gdjs.bookCode.GDbook_9595frontObjects1[k] = gdjs.bookCode.GDbook_9595frontObjects1[i];
        ++k;
    }
}
gdjs.bookCode.GDbook_9595frontObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bookCode.GDbook_9595behindObjects1.length;i<l;++i) {
    if ( !(gdjs.bookCode.GDbook_9595behindObjects1[i].getBehavior("Tween").isPlaying("flip_behind")) ) {
        isConditionTrue_0 = true;
        gdjs.bookCode.GDbook_9595behindObjects1[k] = gdjs.bookCode.GDbook_9595behindObjects1[i];
        ++k;
    }
}
gdjs.bookCode.GDbook_9595behindObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25105668);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("book_back"), gdjs.bookCode.GDbook_9595backObjects1);
/* Reuse gdjs.bookCode.GDbook_9595frontObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(2);
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595backObjects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595backObjects1[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 2);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595frontObjects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595frontObjects1[i].getBehavior("Tween").addObjectWidthTween2("flip", 0, "easeInCubic", 0.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("book_behind"), gdjs.bookCode.GDbook_9595behindObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bookCode.GDbook_9595behindObjects1.length;i<l;++i) {
    if ( gdjs.bookCode.GDbook_9595behindObjects1[i].getBehavior("Tween").hasFinished("flip_behind") ) {
        isConditionTrue_0 = true;
        gdjs.bookCode.GDbook_9595behindObjects1[k] = gdjs.bookCode.GDbook_9595behindObjects1[i];
        ++k;
    }
}
gdjs.bookCode.GDbook_9595behindObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25107060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bookCode.GDbook_9595behindObjects1 */
gdjs.copyArray(runtimeScene.getObjects("book_behind2"), gdjs.bookCode.GDbook_9595behind2Objects1);
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behindObjects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behindObjects1[i].getBehavior("Resizable").setWidth(0);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behind2Objects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behind2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("book_front"), gdjs.bookCode.GDbook_9595frontObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bookCode.GDbook_9595frontObjects1.length;i<l;++i) {
    if ( gdjs.bookCode.GDbook_9595frontObjects1[i].getBehavior("Tween").hasFinished("flip") ) {
        isConditionTrue_0 = true;
        gdjs.bookCode.GDbook_9595frontObjects1[k] = gdjs.bookCode.GDbook_9595frontObjects1[i];
        ++k;
    }
}
gdjs.bookCode.GDbook_9595frontObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25108396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("book_behind"), gdjs.bookCode.GDbook_9595behindObjects1);
/* Reuse gdjs.bookCode.GDbook_9595frontObjects1 */
{for(var i = 0, len = gdjs.bookCode.GDbook_9595frontObjects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595frontObjects1[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 2);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behindObjects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behindObjects1[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595frontObjects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595frontObjects1[i].getBehavior("Resizable").setWidth(510);
}
}
{for(var i = 0, len = gdjs.bookCode.GDbook_9595behindObjects1.length ;i < len;++i) {
    gdjs.bookCode.GDbook_9595behindObjects1[i].getBehavior("Tween").addObjectWidthTween2("flip_behind", 510, "easeOutCubic", 0.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.bookCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.bookCode.mapOfGDgdjs_9546bookCode_9546GDbackObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.bookCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bookCode.GDbook_9595frontObjects1.length = 0;
gdjs.bookCode.GDbook_9595frontObjects2.length = 0;
gdjs.bookCode.GDbook_9595frontObjects3.length = 0;
gdjs.bookCode.GDbook_9595backObjects1.length = 0;
gdjs.bookCode.GDbook_9595backObjects2.length = 0;
gdjs.bookCode.GDbook_9595backObjects3.length = 0;
gdjs.bookCode.GDbook_9595behindObjects1.length = 0;
gdjs.bookCode.GDbook_9595behindObjects2.length = 0;
gdjs.bookCode.GDbook_9595behindObjects3.length = 0;
gdjs.bookCode.GDbook_9595behind2Objects1.length = 0;
gdjs.bookCode.GDbook_9595behind2Objects2.length = 0;
gdjs.bookCode.GDbook_9595behind2Objects3.length = 0;
gdjs.bookCode.GDbackObjects1.length = 0;
gdjs.bookCode.GDbackObjects2.length = 0;
gdjs.bookCode.GDbackObjects3.length = 0;
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.bookCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.bookCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.bookCode.GDGerms_9595VideoObjects3.length = 0;
gdjs.bookCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.bookCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.bookCode.GDRiver_9595StoryObjects3.length = 0;
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects3.length = 0;
gdjs.bookCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.bookCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.bookCode.GDcar_9595game_9595introObjects3.length = 0;
gdjs.bookCode.GDQuest_9595TextObjects1.length = 0;
gdjs.bookCode.GDQuest_9595TextObjects2.length = 0;
gdjs.bookCode.GDQuest_9595TextObjects3.length = 0;
gdjs.bookCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.bookCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.bookCode.GDSmallGreenButtonObjects3.length = 0;

gdjs.bookCode.eventsList1(runtimeScene);
gdjs.bookCode.GDbook_9595frontObjects1.length = 0;
gdjs.bookCode.GDbook_9595frontObjects2.length = 0;
gdjs.bookCode.GDbook_9595frontObjects3.length = 0;
gdjs.bookCode.GDbook_9595backObjects1.length = 0;
gdjs.bookCode.GDbook_9595backObjects2.length = 0;
gdjs.bookCode.GDbook_9595backObjects3.length = 0;
gdjs.bookCode.GDbook_9595behindObjects1.length = 0;
gdjs.bookCode.GDbook_9595behindObjects2.length = 0;
gdjs.bookCode.GDbook_9595behindObjects3.length = 0;
gdjs.bookCode.GDbook_9595behind2Objects1.length = 0;
gdjs.bookCode.GDbook_9595behind2Objects2.length = 0;
gdjs.bookCode.GDbook_9595behind2Objects3.length = 0;
gdjs.bookCode.GDbackObjects1.length = 0;
gdjs.bookCode.GDbackObjects2.length = 0;
gdjs.bookCode.GDbackObjects3.length = 0;
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.bookCode.GDPaper_9595Bark_9595VideoObjects3.length = 0;
gdjs.bookCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.bookCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.bookCode.GDGerms_9595VideoObjects3.length = 0;
gdjs.bookCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.bookCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.bookCode.GDRiver_9595StoryObjects3.length = 0;
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;
gdjs.bookCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects3.length = 0;
gdjs.bookCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.bookCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.bookCode.GDcar_9595game_9595introObjects3.length = 0;
gdjs.bookCode.GDQuest_9595TextObjects1.length = 0;
gdjs.bookCode.GDQuest_9595TextObjects2.length = 0;
gdjs.bookCode.GDQuest_9595TextObjects3.length = 0;
gdjs.bookCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.bookCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.bookCode.GDSmallGreenButtonObjects3.length = 0;


return;

}

gdjs['bookCode'] = gdjs.bookCode;
