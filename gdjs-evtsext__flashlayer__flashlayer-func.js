
if (typeof gdjs.evtsExt__FlashLayer__FlashLayer !== "undefined") {
  gdjs.evtsExt__FlashLayer__FlashLayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FlashLayer__FlashLayer = {};
gdjs.evtsExt__FlashLayer__FlashLayer.idToCallbackMap = new Map();


gdjs.evtsExt__FlashLayer__FlashLayer.asyncCallback26542980 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, eventsFunctionContext.getArgument("Layer"));
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__FlashLayer__FlashLayer.idToCallbackMap.set(26542980, gdjs.evtsExt__FlashLayer__FlashLayer.asyncCallback26542980);
gdjs.evtsExt__FlashLayer__FlashLayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.getArgument("Duration")), (runtimeScene) => (gdjs.evtsExt__FlashLayer__FlashLayer.asyncCallback26542980(runtimeScene, eventsFunctionContext, asyncObjectsList)), 26542980, asyncObjectsList);
}
}

}


};gdjs.evtsExt__FlashLayer__FlashLayer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, eventsFunctionContext.getArgument("Layer")));
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, eventsFunctionContext.getArgument("Layer"));
}

{ //Subevents
gdjs.evtsExt__FlashLayer__FlashLayer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__FlashLayer__FlashLayer.func = function(runtimeScene, Layer, Duration, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FlashLayer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FlashLayer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FlashLayer__FlashLayer.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FlashLayer__FlashLayer.registeredGdjsCallbacks = [];