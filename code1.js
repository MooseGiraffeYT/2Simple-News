gdjs.Tab_321Code = {};
gdjs.Tab_321Code.GDwObjects1= [];
gdjs.Tab_321Code.GDwObjects2= [];

gdjs.Tab_321Code.conditionTrue_0 = {val:false};
gdjs.Tab_321Code.condition0IsTrue_0 = {val:false};
gdjs.Tab_321Code.condition1IsTrue_0 = {val:false};


gdjs.Tab_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Tab_321Code.condition0IsTrue_0.val = false;
{
gdjs.Tab_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Tab_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "News", true);
}}

}


};

gdjs.Tab_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tab_321Code.GDwObjects1.length = 0;
gdjs.Tab_321Code.GDwObjects2.length = 0;

gdjs.Tab_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Tab_321Code'] = gdjs.Tab_321Code;
