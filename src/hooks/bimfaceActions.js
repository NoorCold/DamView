function ChoseStruction(modelID, viewer3D) {
  // 选中id为"modelID"的构件
  viewer3D.getModel().addSelectedComponentsById([String(modelID)]);
  // 定位到选中的构件
  viewer3D.zoomToSelectedComponents();
  // 清除构件选中状态
  viewer3D.getModel().clearSelectedComponents();

  let color = new Glodon.Web.Graphics.Color("#5ca79a", 0.9);
  // 对关注构件进行着色
  viewer3D.getModel().clearOverrideColorComponents();
  viewer3D.overrideComponentsColorById([String(modelID)], color);
  viewer3D.render();
}

function Chosefamily(f, viewer3D) {
  // 选中fid为"fID"的构件
  viewer3D.getModel().addSelectedComponentsByObjectData([{"family": f}]);
  // 定位到选中的构件
  viewer3D.zoomToSelectedComponents();
  // 清除构件选中状态
  viewer3D.getModel().clearSelectedComponents();

  let color = new Glodon.Web.Graphics.Color("#5ca79a", 0.9);
  // 对关注构件进行着色
  viewer3D.getModel().clearOverrideColorComponents();
  viewer3D.overrideComponentsColorByObjectData([{"family": f}], color);
  viewer3D.render();
}

function Activefamily(family, viewer3D) {
  if (!family.isTransparent) {
    viewer3D.getModel().transparentComponentsByObjectData([{"family": family.f}]);
    viewer3D.render();
  } else {
    viewer3D.getModel().opaqueComponentsByObjectData([{"family": family.f}]);
    viewer3D.render();
  }
  for (let struction of family.structions) {
    struction.isTransparent = !family.isTransparent
  }
}

function Activestruction(struction, viewer3D) {
  if (!struction.isTransparent) {
    viewer3D.getModel().transparentComponentsById([String(struction.sid)]);
    viewer3D.render();
  } else {
    viewer3D.getModel().opaqueComponentsById([String(struction.sid)]);
    viewer3D.render();
  }
}

export { ChoseStruction, Chosefamily, Activefamily, Activestruction }