import * as THREE from "three";
import gsap from "gsap";

export const InitScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.classList.add("three");
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: "white",
    // wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 10;

  const bottomBorder = -2;
  const topBorder = 2;
  // const speedOfFalling = 0.05;

  // const g = 9.8;

  cube.position.y = topBorder;

  const timeline = gsap.timeline();

  setInterval(async () => {
    gsap.to(cube.position, {
      y: bottomBorder / 2,
      duration: 4,
      ease: "elastic",
    }); //falling

    await gsap.to(cube.scale, { y: 2, duration: 0.3, ease: "elastic" }); //transforming y

    gsap.to(cube.position, {
      y: bottomBorder / 2,
      duration: 2,
      ease: "elastic",
    }); //falling

    await gsap.to(cube.scale, {
      x: 2,
      y: 0.5,
      duration: 0.15,
      ease: "elastic",
    }); // transforming x

    gsap.to(cube.scale, { x: 1, y: 2, duration: 0.5, ease: "elastic" }); //transforming y
    gsap.to(cube.position, { y: topBorder, duration: 4, ease: "elastic" }); // upping x

    gsap.to(cube.scale, { x: 1, y: 1, duration: 2, ease: "elastic" }); //transforming y
  }, 1500);

  const animate = function () {
    requestAnimationFrame(animate);

    // if (cube.position.y - speedOfFalling < bottomBorder) {
    //   cube.position.y = topBorder;
    //   gsap.to(cube.scale, { y: 3, duration: 3, ease: "elastic" });
    // } else {
    //   cube.position.y -= speedOfFalling;
    //   //   cube.scale.y = 2.5;
    //   gsap.set(cube.scale, { x: 3, y: 1 });
    // }

    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
  };

  animate();
};
