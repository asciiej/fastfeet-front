import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

import dotIcon from '../../assets/dot.svg';

export default function Progress() {
  return (
    <ProgressBar
      percent={75}
      height={3}
      filledBackground="#00DA6D"
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
              width="15"
              src={dotIcon}
            />
            <span style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, marginLeft: '25px' }}>Aguardando</span>
          </>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
              width="15"
              src={dotIcon}
            />
            <span style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, marginRight: '15px' }}>Retirado</span>
          </>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
              width="15"
              src={dotIcon}
            />
            <span style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, marginRight: '45px' }}>Entregue</span>
          </>
        )}
      </Step>
    </ProgressBar>
  );
}
