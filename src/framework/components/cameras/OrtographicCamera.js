import {OrtographicCamera as OrtographicCameraNative} from 'three';
import {Component} from '../../core/Component';
import {CameraComponent} from '../../core/CameraComponent';

@CameraComponent
class OrtographicCamera extends Component {
  constructor(params = {}) {
    super(params, OrtographicCamera.defaults, OrtographicCamera.instructions);

    this.build(params);
    super.wrap();
  }

  build(params = {}) {
    return new Promise((resolve) => {
      this.native = new OrtographicCameraNative(
        params.camera.left,
        params.camera.right,
        params.camera.top,
        params.camera.bottom,
        params.camera.near,
        params.camera.far
      );

      resolve();
    });
  }
}

export {
  OrtographicCamera
};
