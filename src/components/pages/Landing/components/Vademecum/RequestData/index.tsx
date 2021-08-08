import { FC, useState } from "react";

import style from "./styles/RequestData.module.css";

const RequestData: FC<{
  state: boolean;
  setOpenRequestDataModal: Function;
  username: string | null;
  setUsername: Function;
}> = ({ state, setOpenRequestDataModal, username, setUsername }) => {
  if (username === null) username = "";
  const [user, setUser] = useState(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenRequestDataModal(false);
    setUsername(user);
    localStorage.setItem("username", user);
  };

  if (state) {
    return (
      <div id="RequestData" data-state={state} className={style.RequestData}>
        <div className={style.RequestData__Content}>
          <span
            onClick={() => setOpenRequestDataModal(false)}
            className={style.RequestData__Content__Close}
          >
            x
          </span>
          <div className={style.RequestData__Content__Box}>
            <h2>Preséntate para recomendar este producto</h2>
            <form
              className={style.RequestData__Content__Box__InputBox}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className={style.RequestData__Content__Box__InputBox__Input}
                placeholder="Nombre y apellido"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <p>
                Lo almacenaremos en tu dispositivo para agilizar tu próxima
                recomendación
              </p>
              <input
                type="submit"
                value="Listo"
                className={style.RequestData__Content__Box__InputBox__Button}
              />
            </form>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default RequestData;
