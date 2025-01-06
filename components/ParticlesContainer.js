import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  // Initialize the particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Handle particles loaded
  const particlesLoaded = useCallback(async (container) => {
    console.log(container); // You can log or handle loaded particles
  }, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "", // Keep empty if you don't need a background color
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false, // Set to true if you want to interact on click
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e", // Particle color
          },
          links: {
            color: "#f5d393", // Link color between particles
            distance: 150, // Distance for linking
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true, // Enable particle collision
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // Particles bounce on the canvas edges
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5, // Particle transparency
          },
          shape: {
            type: "circle", // Particle shape
          },
          size: {
            value: { min: 1, max: 5 }, // Particle size range
          },
        },
        detectRetina: true, // Adjust for retina displays
      }}
    />
  );
};

export default ParticlesContainer;
