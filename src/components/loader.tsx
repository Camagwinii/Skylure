import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-background">
        <div className="container">
          <div className="cloud front">
            <span className="left-front" />
            <span className="right-front" />
          </div>

          <span className="sun sunshine" />
          <span className="sun" />

          <div className="cloud back">
            <span className="left-back" />
            <span className="right-back" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /*
   * Default = DARK MODE
   */
  --loader-background: #212121;
  --cloud-color: #4c9beb;
  --sun-start: #fcbb04;
  --sun-end: #fffc00;

  /*
   * LIGHT MODE
   *
   * The :global selector allows styled-components
   * to detect the class placed on <html> by the
   * ThemeProvider.
   */
  :global(.light) & {
    --loader-background: #e8e8e8;
    --cloud-color: #4c9beb;
    --sun-start: #fcbb04;
    --sun-end: #fffc00;
  }

  width: 100%;
  height: 100%;

  .loader-background {
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--loader-background);

    transition:
      background-color 300ms ease,
      opacity 500ms ease;
  }

  .container {
    position: relative;

    width: 250px;
    height: 250px;

    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cloud {
    width: 250px;
  }

  .front {
    padding-top: 45px;
    margin-left: 25px;

    display: inline;

    position: absolute;

    z-index: 11;

    animation: clouds 8s infinite ease-in-out;
  }

  .back {
    margin-top: -30px;
    margin-left: 150px;

    z-index: 12;

    animation: clouds 12s infinite ease-in-out;
  }

  .right-front {
    width: 45px;
    height: 45px;

    border-radius: 50% 50% 50% 0%;

    background-color: var(--cloud-color);

    display: inline-block;

    margin-left: -25px;

    z-index: 5;
  }

  .left-front {
    width: 65px;
    height: 65px;

    border-radius: 50% 50% 0% 50%;

    background-color: var(--cloud-color);

    display: inline-block;

    z-index: 5;
  }

  .right-back {
    width: 50px;
    height: 50px;

    border-radius: 50% 50% 50% 0%;

    background-color: var(--cloud-color);

    display: inline-block;

    margin-left: -20px;

    z-index: 5;
  }

  .left-back {
    width: 30px;
    height: 30px;

    border-radius: 50% 50% 0% 50%;

    background-color: var(--cloud-color);

    display: inline-block;

    z-index: 5;
  }

  .sun {
    width: 120px;
    height: 120px;

    background: linear-gradient(
      to right,
      var(--sun-start),
      var(--sun-end)
    );

    border-radius: 60px;

    display: inline;

    position: absolute;
  }

  .sunshine {
    animation: sunshines 2s infinite;
  }

  @keyframes sunshines {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }

    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

  @keyframes clouds {
    0% {
      transform: translateX(15px);
    }

    50% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(15px);
    }
  }

  /*
   * Respect users who prefer reduced motion.
   */
  @media (prefers-reduced-motion: reduce) {
    .front,
    .back,
    .sunshine {
      animation: none;
    }
  }
`;

export default Loader