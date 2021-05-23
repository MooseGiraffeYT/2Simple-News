gdjs.Tab_323Code = {};
gdjs.Tab_323Code.GDwObjects1= [];
gdjs.Tab_323Code.GDwObjects2= [];
gdjs.Tab_323Code.GDNewObjectObjects1= [];
gdjs.Tab_323Code.GDNewObjectObjects2= [];
gdjs.Tab_323Code.GDNewObject2Objects1= [];
gdjs.Tab_323Code.GDNewObject2Objects2= [];

gdjs.Tab_323Code.conditionTrue_0 = {val:false};
gdjs.Tab_323Code.condition0IsTrue_0 = {val:false};
gdjs.Tab_323Code.condition1IsTrue_0 = {val:false};


gdjs.Tab_323Code.eventsList0 = function(runtimeScene) {

{


gdjs.Tab_323Code.condition0IsTrue_0.val = false;
{
gdjs.Tab_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Tab_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "News", true);
}}

}


};

gdjs.Tab_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tab_323Code.GDwObjects1.length = 0;
gdjs.Tab_323Code.GDwObjects2.length = 0;
gdjs.Tab_323Code.GDNewObjectObjects1.length = 0;
gdjs.Tab_323Code.GDNewObjectObjects2.length = 0;
gdjs.Tab_323Code.GDNewObject2Objects1.length = 0;
gdjs.Tab_323Code.GDNewObject2Objects2.length = 0;

gdjs.Tab_323Code.eventsList0(runtimeScene);
return;

}

gdjs['Tab_323Code'] = gdjs.Tab_323Code;
