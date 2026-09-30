import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import "./styles/TechStack.css";

// Helper to generate dynamic branded texture for core skills
function createSkillTexture(name: string, color1: string, color2: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    // Dark metallic background
    const grad = ctx.createRadialGradient(256, 256, 50, 256, 256, 250);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(256, 256, 240, 0, Math.PI * 2);
    ctx.fill();

    // Inner glowing ring
    ctx.lineWidth = 14;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.stroke();

    // Text Label
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 56px Geist, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 10;
    ctx.fillText(name, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);

const spheres = [...Array(22)].map(() => ({
  scale: [0.75, 0.9, 1, 0.85][Math.floor(Math.random() * 4)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!api.current || !isActive) return;
    delta = Math.min(0.04, delta);
    const pos = api.current.translation();
    const impulse = vec
      .copy(pos)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -20 * delta * scale,
          -32 * delta * scale,
          -20 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.85}
      angularDamping={0.25}
      friction={0.2}
      position={[r(10), r(6), r(4)]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!ref.current || !isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.15
    );
    ref.current.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const materials = useMemo(() => {
    // Custom branded textures for Sairam's exact technical skills
    const customSkills = [
      { name: "JAVA", c1: "#e76f51", c2: "#264653" },
      { name: "PYTHON", c1: "#3a86ff", c2: "#03045e" },
      { name: "SPRING BOOT", c1: "#52b788", c2: "#1b4332" },
      { name: "REST APIs", c1: "#00b4d8", c2: "#0077b6" },
      { name: "MYSQL", c1: "#0077b6", c2: "#023e8a" },
      { name: "POSTGRESQL", c1: "#4361ee", c2: "#1e1b4b" },
      { name: "GIT", c1: "#f72585", c2: "#7209b7" },
      { name: "POSTMAN", c1: "#f77f00", c2: "#d62828" },
      { name: "INTELLIJ", c1: "#7209b7", c2: "#3a0ca3" },
      { name: "ECLIPSE", c1: "#480ca8", c2: "#240046" },
      { name: "SWAGGER", c1: "#8ac926", c2: "#38b000" },
    ];

    return customSkills.map((s) => {
      const tex = createSkillTexture(s.name, s.c1, s.c2);
      return new THREE.MeshPhysicalMaterial({
        map: tex,
        emissive: s.c1,
        emissiveIntensity: 0.18,
        metalness: 0.5,
        roughness: 0.4,
        clearcoat: 0.4,
      });
    });
  }, []);

  const techCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python"],
    },
    {
      category: "Backend Development",
      skills: ["Spring Boot", "REST APIs"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      category: "Tools & IDEs",
      skills: ["Git", "Postman", "IntelliJ IDEA", "Eclipse", "Swagger"],
    },
  ];

  return (
    <div className="techstack" id="techstack" ref={containerRef}>
      <div className="techstack-header">
        <h2>
          My <span>Techstack</span>
        </h2>
        <p className="techstack-subtitle">
          Interactive physics playground &amp; core competencies
        </p>
      </div>

      <div className="techstack-canvas-wrap">
        <Canvas
          shadows={false}
          frameloop={isActive ? "always" : "never"}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 18], fov: 32, near: 1, far: 50 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.2)}
          className="tech-canvas"
        >
          <ambientLight intensity={1.4} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <directionalLight position={[-10, -5, -5]} intensity={0.8} />
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {spheres.map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={materials[i % materials.length]}
                isActive={isActive}
              />
            ))}
          </Physics>
          <Environment
            files={`${import.meta.env.BASE_URL}models/char_enviorment.hdr`}
            environmentIntensity={0.35}
          />
        </Canvas>
      </div>

      <div className="techstack-badges-container">
        {techCategories.map((group, idx) => (
          <div className="tech-badge-group" key={idx}>
            <h4>{group.category}</h4>
            <div className="tech-badge-list">
              {group.skills.map((skill, sIdx) => (
                <span className="tech-badge-chip" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
