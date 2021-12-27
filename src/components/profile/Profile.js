import {
  StyledProfile,
  StyledFormats,
  StyledUserInfo,
  StyledAvatar,
} from "./styles";
import avatarImage from "../../images/image-jeremy.png";

const Profile = ({ format, setFormat }) => {
  const onClickHandler = (format) => {
    setFormat(format);
  };

  return (
    <StyledProfile>
      <StyledUserInfo>
        <div>
          <StyledAvatar>
            <img src={avatarImage} alt="avatar" />
          </StyledAvatar>
        </div>
        <div>
          <small>Report for</small>
          <h1>Jeremy Robson</h1>
        </div>
      </StyledUserInfo>
      <StyledFormats format={format}>
        <span onClick={(e) => onClickHandler("daily")}>Daily</span>
        <span onClick={(e) => onClickHandler("weekly")}>Weekly</span>
        <span onClick={(e) => onClickHandler("monthly")}>Monthly</span>
      </StyledFormats>
    </StyledProfile>
  );
};

export default Profile;
