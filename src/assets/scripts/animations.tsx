// Used in components/general/ContactModal
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

// Used in components/general/ContactModal
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

// Used in components/general/Loader
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
