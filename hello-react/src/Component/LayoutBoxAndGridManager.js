import LayoutBox from "./LayoutBox";
import LayoutGrid from "./LayoutGrid";
function UiBoxAndGrid(props) {
  const { inputColumnsGrid } = props;
  let defaultGridValue = 1;

  if (!!inputColumnsGrid) {
    defaultGridValue = inputColumnsGrid;
    console.log(defaultGridValue);
  }

  return (
    <div>
      <h2>Hello Layout components</h2>
      <LayoutGrid columnsGrid={defaultGridValue}>
        <LayoutBox>
          <h3>Hello Box Group A</h3>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ul>
        </LayoutBox>
        <LayoutBox>
          <h3>Hello Box Group B</h3>
          <ol>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ol>
        </LayoutBox>
        <LayoutBox>
          <h3>Hello Box Group C</h3>
          <p>List 1</p>
          <p>List 2</p>
        </LayoutBox>
      </LayoutGrid>
    </div>
  );
}
export default UiBoxAndGrid;
