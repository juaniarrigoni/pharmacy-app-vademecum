// Import styled components
import { Notes, User, UserName, Icon } from "./styled";

// Import assets
import edit from "assets/media/Edit.png";

const Referral: React.FC<{
  username: string;
  setOpenRequestDataModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ username, setOpenRequestDataModal }) => {
  return username === null ? null : (
    <Notes>
      <p>Recomendado por:</p>
      <User onClick={() => setOpenRequestDataModal(true)}>
        <UserName id="product-modal-username">{username}</UserName>
        <Icon id="product-modal-username-icon">
          <img src={edit} alt="edit" />
        </Icon>
      </User>
    </Notes>
  );
};

export default Referral;
