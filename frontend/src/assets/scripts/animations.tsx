export const fadeInTop = `
@keyframes fadeInTop {
    0% {
        opacity: 0;
        top: -10%;
    }
    50% {
        opacity: 1;
        top: 0;
    }
    100% {
        opacity: 1;
        top: 0;
    }
}`;

export const fadeIn = `
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
`;

export const zoom = `
@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const loader = `
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const heartBeat = `
@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.08);
  }
  50% {
    transform: scale(0.98);
  }
  55% {
    transform: scale(1.02);
  }
  60% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`;
