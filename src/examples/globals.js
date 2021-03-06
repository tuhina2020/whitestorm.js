export const $world = {
  stats: "fps", // fps, ms, mb or false if not need.
  autoresize: "window",

  gravity: { // Physic gravity.
    x: 0,
    y: -100,
    z: 0
  },

  camera: {
    z: 50, // Move camera.
    y: 10
  },

  rendering: {
    background: {
      color: 0x162129
    },

    renderer: {
      antialias: true
    }
  },

  shadowmap: {
    type: THREE.PCFSoftShadowMap
  }
};

export const $colors = {
  bg: 0x162129,
  plane: 0x447F8B,
  mesh: 0xF2F2F2,
  softbody: 0x434B7F
};

export function addAmbient(world, intensity) {
  new WHS.AmbientLight({
    light: {
      intensity: intensity
    }
  }).addTo(world);
}

export function addBasicLights(world, intensity = 0.5, position = [0, 10, 10], distance = 100) {
  new WHS.PointLight({
    light: {
      intensity,
      distance
    },

    shadowmap: {
      fov: 90
    },

    position
  }).addTo(world);

  addAmbient(world, 1 - intensity);
}

export function addPlane(world, size = 100) {
  return new WHS.Plane({
    geometry: {
      width: size,
      height: size
    },

    mass: 0,

    material: {
      color: 0x447F8B,
      kind: 'phong'
    },

    rotation: {
      x: - Math.PI / 2
    }
  }).addTo(world)
}

export function addBoxPlane(world, size = 100) {
  return new WHS.Box({
    geometry: {
      width: size,
      height: 1,
      depth: size
    },

    mass: 0,

    material: {
      color: 0x447F8B,
      kind: 'phong'
    }
  }).addTo(world)
}
