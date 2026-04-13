gdjs.car_95driving_95gameCode = {};
gdjs.car_95driving_95gameCode.localVariables = [];
gdjs.car_95driving_95gameCode.idToCallbackMap = new Map();
gdjs.car_95driving_95gameCode.GDcarObjects1= [];
gdjs.car_95driving_95gameCode.GDcarObjects2= [];
gdjs.car_95driving_95gameCode.GDroadObjects1= [];
gdjs.car_95driving_95gameCode.GDroadObjects2= [];
gdjs.car_95driving_95gameCode.GDcameraObjects1= [];
gdjs.car_95driving_95gameCode.GDcameraObjects2= [];
gdjs.car_95driving_95gameCode.GDlookatObjects1= [];
gdjs.car_95driving_95gameCode.GDlookatObjects2= [];
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects1= [];
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects2= [];
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects1= [];
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects2= [];
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1= [];
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2= [];


gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcameraObjects1Objects = Hashtable.newFrom({"camera": gdjs.car_95driving_95gameCode.GDcameraObjects1});
gdjs.car_95driving_95gameCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("camera"), gdjs.car_95driving_95gameCode.GDcameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcameraObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcameraObjects1[i].rotateTowardObject((gdjs.car_95driving_95gameCode.GDcarObjects1.length !== 0 ? gdjs.car_95driving_95gameCode.GDcarObjects1[0] : null), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcameraObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcameraObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].setAngle(-(90));
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectPositionXTween2("car", gdjs.evtTools.common.clamp(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), 280, 1000), "linear", 0.25, false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectPositionXTween2("car", (gdjs.car_95driving_95gameCode.GDcarObjects1[i].getX()), "linear", 0.25, false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectAngleTween2("angle", gdjs.evtTools.common.angleBetweenPositions((gdjs.car_95driving_95gameCode.GDcarObjects1[i].getX()), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), (gdjs.car_95driving_95gameCode.GDcarObjects1[i].getAABBTop())), "linear", 0.01, false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectAngleTween2("angle_1", -(90), "bounce", 0.1, false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.car_95driving_95gameCode.GDroadObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDroadObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDroadObjects1[i].getBehavior("Object3D").setRotationX(gdjs.car_95driving_95gameCode.GDroadObjects1[i].getBehavior("Object3D").getRotationX() - (1));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("camera"), gdjs.car_95driving_95gameCode.GDcameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcameraObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcameraObjects1[i].rotateTowardObject((gdjs.car_95driving_95gameCode.GDcarObjects1.length !== 0 ? gdjs.car_95driving_95gameCode.GDcarObjects1[0] : null), 15, runtimeScene);
}
}
{gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.func(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcameraObjects1Objects, "Object3D", "Car", null);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("lookat"), gdjs.car_95driving_95gameCode.GDlookatObjects1);
{gdjs.scene3d.camera.turnCameraTowardObject(runtimeScene, (gdjs.car_95driving_95gameCode.GDlookatObjects1.length !== 0 ? gdjs.car_95driving_95gameCode.GDlookatObjects1[0] : null), "Car", 0, false);
}
}

}

}

};

gdjs.car_95driving_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.car_95driving_95gameCode.GDcarObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcarObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;

gdjs.car_95driving_95gameCode.eventsList0(runtimeScene);
gdjs.car_95driving_95gameCode.GDcarObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcarObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;


return;

}

gdjs['car_95driving_95gameCode'] = gdjs.car_95driving_95gameCode;
