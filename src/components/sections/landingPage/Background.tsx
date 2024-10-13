// components/sections/frontPageBackground.tsx
"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import { set } from "zod";

// Custom hook to handle scroll
const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
};

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();
  const [videoReady, setVideoReady] = useState(false);
  const { camera } = useThree();

  // Load video texture using useVideoTexture
  const texture = useVideoTexture("/frontPageBackground.mp4", {
    start: false,
    muted: true,
    loop: true,
    crossOrigin: "anonymous",
  });

  // Ensure the video is playing
  useEffect(() => {
    const video = texture.image as HTMLVideoElement;
    if (video) {
      const handleLoadedData = () => {
        setVideoReady(true);
        video.play();
      };
      video.addEventListener("loadeddata", handleLoadedData);
      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [texture.image]);

  useFrame(() => {
    if (meshRef.current && videoReady) {
      // Adjust the camera's z position based on scroll
      // Initial position is close to the Earth (e.g., z = 1)
      // Final position is further away (e.g., z = 5)
      const minZ = 1;
      const maxZ = 5;
      camera.position.z = minZ + (maxZ - minZ) * scroll;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Stars() {
  const starRef = useRef<THREE.Points>(null);

  // Generate a circular texture using a canvas
  const texture = useMemo(() => {
    const size = 16;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    if (context) {
      // Clear the canvas
      context.clearRect(0, 0, size, size);
      // Create a radial gradient for smooth edges
      const gradient = context.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      // Draw the circle
      context.fillStyle = gradient;
      context.fillRect(0, 0, size, size);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Generate random positions for stars
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 500; i++) {
      positions.push(
        (Math.random() - 0.5) * 20, // x
        (Math.random() - 0.5) * 20, // y
        -Math.random() * 10, // z (behind the Earth)
      );
    }
    return new Float32Array(positions);
  }, []);

  // Animate the stars to create a twinkling effect
  useFrame(({ clock }) => {
    if (starRef.current) {
      const elapsed = clock.getElapsedTime();
      const material = starRef.current.material as THREE.PointsMaterial;
      material.size = 0.125 + 0.05 * Math.sin(elapsed * 2 + starRef.current.id);
    }
  });

  return (
    <points ref={starRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starPositions.length / 3}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        color="white"
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.7}
        alphaTest={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function FrontPageBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Earth />
      </Canvas>
    </div>
  );
}
