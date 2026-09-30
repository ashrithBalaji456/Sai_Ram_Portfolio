import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            const skinMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#c68b59"),
              roughness: 0.58,
              metalness: 0.04,
            });

            const suitMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#152238"),
              roughness: 0.65,
              metalness: 0.08,
            });

            const shirtMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color("#e2e8f0"),
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

                if (name.includes("hair") || parentName.includes("hair")) {
                  child.material = hairMaterial;
                } else if (name.includes("eyebrow") || parentName.includes("eyebrow")) {
                  child.material = hairMaterial;
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
                  name.includes("plane.007") ||
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
