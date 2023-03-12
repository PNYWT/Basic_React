import LayoutGrid from "./LayoutGrid";
import LayoutBoxModule from "./LayoutBoxModule";
import NotificationListUseStyled from "./NotificationListUseStyled";

function NotificationListUseStyledUI() {
  return (
    <div>
      <h2>Css Modules</h2>
      <NotificationListUseStyled
        title="Hello Error"
        description="Error"
        levelBorderCustom={"danger"}
        levelTitleCustom={"warning"}
      ></NotificationListUseStyled>
      <LayoutGrid columnsGrid={3}>
        <LayoutBoxModule title="Hello Box Group A">
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ul>
        </LayoutBoxModule>
        <LayoutBoxModule title="Hello Box Group B">
          <ol>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ol>
        </LayoutBoxModule>
        <LayoutBoxModule title="Hello Box Group C">
          <p>List 1</p>
          <p>List 2</p>
        </LayoutBoxModule>
      </LayoutGrid>
    </div>
  );
}
export default NotificationListUseStyledUI;
