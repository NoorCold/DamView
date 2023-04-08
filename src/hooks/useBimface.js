export default function useBimface(viewToken, mountId, store) {
  let viewer3D;
  let app;
  //创建BimfaceSDKLoaderConfig
  let loaderConfig = new BimfaceSDKLoaderConfig();

  let cameraState = { /* 设置默认相机视角 */
    "name": "persp",
    "position": {
      "x": -380.01697371361814,
      "y": -277.1137947611523,
      "z": 108.94633243782934
    },
    "target": {
      "x": 27.321153588783712,
      "y": 130.22473225117918,
      "z": 0.12932676720203545
    },
    "up": {
      "x": 0.13125147472991225,
      "y": 0.13124786535674093,
      "z": 0.9826225359824198
    },
    "fov": 45
  };

  //设置BimfaceSDKLoaderConfig的viewToken
  loaderConfig.viewToken = viewToken;
  //调用BimfaceSDKLoader的load方法加载模型
  BimfaceSDKLoader.load(loaderConfig, successCallback, failureCallback);

  //加载成功回调函数
  function successCallback(viewMetaData) {
    //获取DOM元素
    let domShow = document.getElementById(mountId);
    //创建WebApplication3DConfig
    let webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig();
    //设置创建WebApplication3DConfig的dom元素值
    webAppConfig.domElement = domShow;
    //创建WebApplication3D
    app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig);
    //添加待显示的模型
    app.addView(viewToken);
    //获取viewer3D对象
    viewer3D = app.getViewer();
    store.state.viewer3D = viewer3D


    viewer3D.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, function () {
      let monochrome = new Glodon.Web.Graphics.Color("#222222", 1); /* 设置背景色 */
      viewer3D.setBackgroundColor(monochrome);
      viewer3D.recordCustomHomeview(cameraState); /* 设置默认相机位置 */
      viewer3D.setCameraStatus(cameraState); /* 设置相机位置 */
      viewer3D.render();
    });
    //添加界面开始加载时事件
  };

  //加载失败回调函数
  function failureCallback(error) {
    console.log(error);
  };
}