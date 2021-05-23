gdjs.Tab_322Code = {};
gdjs.Tab_322Code.GDwObjects1= [];
gdjs.Tab_322Code.GDwObjects2= [];
gdjs.Tab_322Code.GDNewObjectObjects1= [];
gdjs.Tab_322Code.GDNewObjectObjects2= [];
gdjs.Tab_322Code.GDNewObject2Objects1= [];
gdjs.Tab_322Code.GDNewObject2Objects2= [];

gdjs.Tab_322Code.conditionTrue_0 = {val:false};
gdjs.Tab_322Code.condition0IsTrue_0 = {val:false};
gdjs.Tab_322Code.condition1IsTrue_0 = {val:false};


gdjs.Tab_322Code.eventsList0 = function(runtimeScene) {

{


gdjs.Tab_322Code.condition0IsTrue_0.val = false;
{
gdjs.Tab_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Tab_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "News", true);
}}

}


};

gdjs.Tab_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tab_322Code.GDwObjects1.length = 0;
gdjs.Tab_322Code.GDwObjects2.length = 0;
gdjs.Tab_322Code.GDNewObjectObjects1.length = 0;
gdjs.Tab_322Code.GDNewObjectObjects2.length = 0;
gdjs.Tab_322Code.GDNewObject2Objects1.length = 0;
gdjs.Tab_322Code.GDNewObject2Objects2.length = 0;

gdjs.Tab_322Code.eventsList0(runtimeScene);
return;

}

gdjs['Tab_322Code'] = gdjs.Tab_322Code;
