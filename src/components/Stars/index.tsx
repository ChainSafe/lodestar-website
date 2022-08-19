import "./index.scss";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const color = "#5135FF";

const Star = ({ p }: { p: number }) => {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 4, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.1, 0]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, .1],
    [1, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, .25], [8, 2]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.00004
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.6));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return <>{stars}</>;
}

export const StarScene:React.FC = () => {
  return (
    <div className="container">
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
}
