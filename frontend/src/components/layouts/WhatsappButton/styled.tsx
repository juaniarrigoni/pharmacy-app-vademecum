// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, MEDIA_QUERIES } from "assets/constants/styles";

/* Abajo a la derecha: el lugar donde se espera un botón de WhatsApp. Hoy está
   libre porque el ChatBot está desactivado en App.tsx — si vuelve, los dos
   pelean por esta esquina y hay que separarlos. */
export const FloatingButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  /* Un <a> no trae border-box por defecto como un <button>: sin esto el
     padding se suma y el círculo pasa de 56px a 86px. */
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  padding: 15px;
  background: linear-gradient(180deg, ${COLORS.PRIMARY_LIGHTER} 0, ${COLORS.PRIMARY} 100%);
  color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(${COLORS.BLACK_RGB}, 0.3);
  /* Justo debajo del Overlay del Modal (z-index 8), que cubre 100vw x 100vh:
     así cualquier modal abierto lo tapa solo, sin que este botón tenga que
     enterarse de qué modal hay abierto. */
  z-index: 7;
  transition: transform 0.2s, box-shadow 0.2s;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(${COLORS.BLACK_RGB}, 0.4);
  }

  ${MEDIA_QUERIES.MOBILE} {
    bottom: 1.25rem;
    right: 1.25rem;
  }
`;
