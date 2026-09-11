// Import dependencies
import styled from "styled-components";

// Import assets
import { COLORS, BORDER_RADIUS, MEDIA_QUERIES } from "assets/constants/styles";

/* Abajo a la derecha: el lugar donde se espera un botón de WhatsApp. Hoy está
   libre porque el ChatBot está desactivado en App.tsx — si vuelve, los dos
   pelean por esta esquina y hay que separarlos. */
export const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 0;
  padding: 15px;
  background: linear-gradient(180deg, ${COLORS.PRIMARY_LIGHTER} 0, ${COLORS.PRIMARY} 100%);
  color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(${COLORS.BLACK_RGB}, 0.3);
  cursor: pointer;
  /* Justo debajo del Overlay del Modal (z-index 8), que cubre 100vw x 100vh:
     así cualquier modal abierto lo tapa solo, sin que este botón tenga que
     enterarse de qué modal hay abierto. Con un z-index alto quedaba flotando
     por encima del overlay oscurecido. */
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

export const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ChannelCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  text-align: left;
  text-decoration: none;
  padding: 1.15rem 1.35rem;
  background: ${COLORS.WHITE};
  border-radius: ${BORDER_RADIUS.SQUARE};
  box-shadow: 0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15);
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3);
    transform: translateY(-2px);
  }
`;

/* El ícono es lo primero que se mira al elegir, así que va del tamaño del
   texto de las dos líneas juntas y no de un renglón.
   Las ilustraciones son siluetas con fondo transparente usadas como máscara,
   igual que ContactIcon: el color sale del token de la marca y no del sage
   aproximado con el que las dibujó el generador, y no hay fondo que desentone
   con el de la tarjeta. */
export const ChannelIcon = styled.span<{ $src: string }>`
  flex-shrink: 0;
  /* 46px y no menos: las ilustraciones son de trazo fino, y más chicas el
     trazo cae por debajo del píxel y se lavan. El asset es de 138px (3x). */
  width: 46px;
  height: 46px;
  background-color: ${COLORS.SAGE};
  mask-image: url(${(props) => props.$src});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url(${(props) => props.$src});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

/* El Box del Modal en modo fitContent centra todo su contenido; acá la
   alineación se declara de nuevo porque estas dos líneas se leen como bloque
   y centradas quedan escalonadas contra el ícono. */
export const ChannelText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  text-align: left;
`;

export const ChannelTitle = styled.span`
  color: ${COLORS.DARK_BROWN};
  font-weight: 700;
  font-size: 1rem;
`;

export const ChannelDescription = styled.span`
  color: ${COLORS.BROWN};
  font-size: 0.85rem;
  line-height: 1.4;
`;
