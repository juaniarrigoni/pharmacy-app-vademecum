import { FC, useState } from "react";

import ContactModal from "components/general/ContactModal";

import style from "./style.module.css";

import logo from "assets/media/Logo.jpg";
import scroll from "assets/media/Scroll-down.gif";
import vademecum from "assets/media/Vademecum.png";
import activos from "assets/media/Activos.png";
import contacto from "assets/media/Contacto.png";

const Landing: FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <div id="Landing" className={style.Landing}>
      <div className={style.Landing__Box}>
        <h1 className={style.Landing__Box__Green}>Farmacéuticos Asociados</h1>
        <h2 className={style.Landing__Box__Green}>Laboratorio de Formulas</h2>
        <img
          src={logo}
          alt="Farmacéuticos Asociados"
          className={style.Landing__Box__Logo}
        />
        <div id="buttons" className={style.Landing__Box__Buttons}>
          <a
            href="#Vademecum"
            data-scroll="smooth"
            className={style.Landing__Box__Buttons__Button}
          >
            <img src={vademecum} alt="Vademecum" />
            <p>
              VADEMÉCUM<span>Nuestras fórmulas</span>
            </p>
          </a>
          <a
            href="#Activos"
            data-scroll="smooth"
            className={style.Landing__Box__Buttons__Button}
          >
            <img src={activos} alt="Activos" />
            <p>
              ACTIVOS<span>Calidad asegurada</span>
            </p>
          </a>
          <div
            onClick={() => setModal(true)}
            className={style.Landing__Box__Buttons__Button}
          >
            <img src={contacto} alt="Contacto" />
            <p>
              CONTACTO<span>Dónde encontrarnos</span>
            </p>
          </div>
        </div>
      </div>
      <a
        href="#Vademecum"
        data-scroll="smooth"
        className={style.Landing__Scroll}
      >
        <img src={scroll} alt="Scroll down" />
      </a>
      <ContactModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default Landing;
