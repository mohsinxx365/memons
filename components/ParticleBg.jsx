import Particles from "react-particles-js";

export default () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#e6e3e3",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5997522076405273,
            random: false,
            anim: {
              enable: false,
              speed: 0.9589336657636699,
              opacity_min: 0.1038844804577309,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 110.48066982851817,
            color: "#dddddd",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "remove",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 131.8533790425046,
              line_linked: {
                opacity: 0.8821696517453187,
              },
            },
            bubble: {
              distance: 167.8133915086422,
              size: 71.92002493227524,
              duration: 0.6392891105091132,
              opacity: 0.22375118867818963,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
