import styled from "styled-components";

function getLevelBorder(level){
    if (level === "danger"){
        return 'red';
    }else if (level === "warning"){
        return "orange";
    }else{
        return '#333333'
    }
}

const BoxBorderCustom = styled.div`
  background-color: rgb(225, 225, 255);
  border: 2px solid ${props=> getLevelBorder(props.level)};
  padding: 8px 16px;
  margin-bottom: 24px;
`;

const TitleH3 = styled.h3`
  color: ${props=> getLevelBorder(props.level)};
`;

function NotificationListUseStyled(props) {
    const {levelBorderCustom, levelTitleCustom} = props
  return (
    <BoxBorderCustom level={levelBorderCustom}>
      <TitleH3 level={levelTitleCustom}>{props.title}</TitleH3>
      <p>{props.description}</p>
      <p>
        <a>Clsoe Alert Notificatino</a>
      </p>
    </BoxBorderCustom>
  );
}
export default NotificationListUseStyled;
