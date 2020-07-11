import { Typography, Paper } from "@material-ui/core";
import styled from "styled-components";
import ParticleBg from "../components/ParticleBg";

export default () => {
  return (
    <Container>
      <section className="intro">
        <ParticleBg />
        <div className="content">
          <div className="hi">Hi my name is</div>
          <h2 className="name">MOHSIN MEMON</h2>
          <h3 className="work">I build things for the web</h3>
          <p className="description">
            I am a software developer based in india . specialised in building
            and designing exceptional websites and apps
          </p>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 48px;
  position: relative;

  .intro {
    background-color: #fff;
    .tsparticles {
      &-canvas-el {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: -30px;
      }

      z-index: 0;
    }

    .content {
      padding: 50px;
      z-index: 4;
    }
  }
`;
