import './LayoutGrid.css';

function LayoutGrid(props){
    const {children, columnsGrid} = props;
    let gridClass = `grid columnsGridCss-${columnsGrid}`;
    
    return(
        <div className={gridClass}>
            {children}
        </div>
    )
}

export default LayoutGrid;