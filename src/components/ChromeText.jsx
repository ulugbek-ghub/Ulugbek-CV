import { Canvas } from '@react-three/fiber';
import { Text3D, Center, Environment, Float } from '@react-three/drei';

function ChromeTextMesh({ text }) {
  return (
    <Float 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={0.3}
    >
      <Center>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={1.2}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.05}
            envMapIntensity={2}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

function ChromeText({ text = "HELLO", className = "" }) {
  return (
    <div className={`w-full h-[200px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1}
          color="#ffffff"
        />
        <spotLight 
          position={[-10, -10, -10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={0.5}
          color="#8888ff"
        />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
        
        <Environment preset="city" />
        
        <ChromeTextMesh text={text} />
      </Canvas>
    </div>
  );
}

export default ChromeText;