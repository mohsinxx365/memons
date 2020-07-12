import styled from "styled-components";
import ParticleBg from "../components/ParticleBg";
import { respondTo } from "../utils/styledUtils";
import { IconButton } from "@material-ui/core";
import MyIcon from "../components/MyIcon";

export default () => {
  return (
    <Section className="intro">
      <ParticleBg />
      <div className="content">
        <div className="hi">Hi, my name is</div>
        <h1 className="name">MOHSIN MEMON</h1>
        <h2 className="work">I Build Things For The Web</h2>
        <p className="description">
          I am a software developer based in india . Specialised in building and
          designing exceptional websites and apps .
        </p>
        <div className="socialBtns">
          <IconButton>
            <MyIcon icon="github" />
          </IconButton>
          <IconButton>
            <MyIcon icon="facebook" />
          </IconButton>
          <IconButton>
            <MyIcon icon="twitter" />
          </IconButton>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #fff;
  position: relative;
  border-bottom: 1px dashed #ddd;
  z-index: 0;

    .tsparticles-canvas-el {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: -30px;
    }
  }

  .hi {
    font-size: 1rem;
    color: var(--primary);
    font-weight: 300;
    letter-spacing: 0.1rem;
    transition: font-size 0.25s, letter-spacing 0.25s;
  }

  .work {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 10px;
    color: var(--text-light);
    transition: font-size 0.25s, margin-bottom 0.25s;
  }

  .description {
    font-size: 0.9rem;
    max-width: 400px;
    line-height: 1.5rem;
    transition: font-size 0.25s, max-width 0.25s;
  }

  .name {
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
    transition: font-size 0.25s;
  }

  .content {
    padding: 50px;
    position: relative;
    z-index: 1;
    transition: padding 0.25s;
  }
  .socialBtns {
    margin-top: 2rem;
    width: 200px;
    display: flex;
    border: 1px dashed #ddd;
    justify-content: space-between;
    padding: 5px 15px;
  }

  ${respondTo("mdUp")} {
    .name {
      font-size: 2rem;
    }
    .work {
      font-size: 2.5rem;
      margin-bottom: 25px;
    }
    .content {
      padding: 70px;
    }
    .description {
      max-width: 500px;
      font-size: 1rem;
      line-height: 1.7rem;
    }
    .hi {
      font-size: 1.1rem;
      letter-spacing: 0.125rem;
    }
  }

  ${respondTo("lgUp")} {
    .name {
      font-size: 2.4rem;
    }
    .work {
      font-size: 2.7rem;
      margin-bottom: 30px;
    }
    .content {
      padding: 100px;
    }
    .description {
      font-size: 1.2rem;
      line-height: 1.9rem;
    }
    .hi {
      font-size: 1.2rem;
      letter-spacing: 0.15rem;
    }
  }
`;
