import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

function createSairamFaceTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Base healthy caramel skin tone matching turnaround photos
  ctx.fillStyle = "#c68b59";
  ctx.fillRect(0, 0, 1024, 1024);

  // Subtle ambient facial skin gradient
  const grad = ctx.createRadialGradient(512, 512, 80, 512, 512, 500);
  grad.addColorStop(0, "#d49a6a");
  grad.addColorStop(0.6, "#c68b59");
  grad.addColorStop(1, "#b57948");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Mustache shadow (upper lip area)
  const stacheGrad = ctx.createRadialGradient(420, 600, 10, 420, 600, 140);
  stacheGrad.addColorStop(0, "rgba(30, 20, 15, 0.55)");
  stacheGrad.addColorStop(0.7, "rgba(30, 20, 15, 0.22)");
  stacheGrad.addColorStop(1, "rgba(30, 20, 15, 0)");
  ctx.fillStyle = stacheGrad;
  ctx.beginPath();
  ctx.ellipse(420, 600, 130, 45, 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Goatee / chin stubble shadow
  const chinGrad = ctx.createRadialGradient(330, 710, 10, 330, 710, 120);
  chinGrad.addColorStop(0, "rgba(30, 20, 15, 0.5)");
  chinGrad.addColorStop(0.6, "rgba(30, 20, 15, 0.2)");
  chinGrad.addColorStop(1, "rgba(30, 20, 15, 0)");
  ctx.fillStyle = chinGrad;
  ctx.beginPath();
  ctx.ellipse(330, 710, 110, 60, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Natural warm lip tint
  const lipGrad = ctx.createRadialGradient(380, 640, 5, 380, 640, 80);
  lipGrad.addColorStop(0, "rgba(175, 90, 75, 0.55)");
  lipGrad.addColorStop(0.8, "rgba(175, 90, 75, 0.15)");
  lipGrad.addColorStop(1, "transparent");
  ctx.fillStyle = lipGrad;
  ctx.beginPath();
  ctx.ellipse(380, 640, 70, 25, 0.1, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  const baseUrl = import.meta.env.BASE_URL;
  dracoLoader.setDecoderPath(`${baseUrl}draco/`);
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          `${baseUrl}models/character.enc`,
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            const faceTexture = createSairamFaceTexture();
            const faceMaterial = new THREE.MeshStandardMaterial({
              map: faceTexture,
              color: new THREE.Color("#ffffff"),
              roughness: 0.55,
              metalness: 0.04,
            });

            const skinMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#c68b59"),
              roughness: 0.58,
              metalness: 0.04,
            });

            const eyeMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#18110b"),
              roughness: 0.15,
              metalness: 0.3,
            });

            const suitMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#152238"),
              roughness: 0.65,
              metalness: 0.08,
            });

            const shirtMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#dbeafe"),
              roughness: 0.5,
              metalness: 0.04,
            });

            const pantMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#152238"),
              roughness: 0.65,
              metalness: 0.08,
            });

            const shoesMaterial = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color("#3d2012"),
              roughness: 0.35,
              metalness: 0.1,
              clearcoat: 0.6,
              clearcoatRoughness: 0.15,
            });

            const soleMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#161616"),
              roughness: 0.85,
            });

            const hairMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#141214"),
              roughness: 0.75,
              metalness: 0.05,
            });

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                const name = (child.name || "").toLowerCase();
                const parentName = (child.parent?.name || "").toLowerCase();

                const isFace =
                  name.includes("plane007") ||
                  name.includes("plane.007") ||
                  Boolean(child.morphTargetInfluences) ||
                  name.includes("face");

                if (isFace) {
                  if (mesh.geometry?.attributes?.color) {
                    mesh.geometry.deleteAttribute("color");
                  }
                  child.material = faceMaterial;
                } else if (name.includes("hair") || parentName.includes("hair")) {
                  child.material = hairMaterial;
                } else if (name.includes("eyebrow") || parentName.includes("eyebrow")) {
                  child.material = hairMaterial;
                } else if (name.includes("eye") && !name.includes("eyebrow")) {
                  child.material = eyeMaterial;
                } else if (name.includes("pant") || parentName.includes("pant")) {
                  child.material = pantMaterial;
                } else if (name.includes("shoe") || parentName.includes("shoe")) {
                  child.material = shoesMaterial;
                } else if (name.includes("sole") || parentName.includes("sole")) {
                  child.material = soleMaterial;
                } else if (name === "cube.002" || parentName === "cube.002") {
                  child.material = shirtMaterial;
                } else if (
                  name.includes("body") ||
                  name.includes("shirt") ||
                  parentName.includes("body")
                ) {
                  child.material = suitMaterial;
                } else if (
                  name.includes("neck") ||
                  name.includes("ear") ||
                  name.includes("hand") ||
                  parentName.includes("neck") ||
                  parentName.includes("hand")
                ) {
                  child.material = skinMaterial;
                }
              }
            });

            await renderer.compileAsync(character, camera, scene);
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
