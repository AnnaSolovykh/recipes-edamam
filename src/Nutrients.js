

import ShowMoreText from "react-show-more-text";

function Nutrients({nutrients}) {

    function executeOnClick(isExpanded) {
    }

    return(
        
        <ShowMoreText 
        lines={1}
        more="Show more"
        less="Hide"
        className="text-show"
        anchorClass="show-more-less-clickable"
        onClick={executeOnClick}
        expanded={false}
        width={90}
        truncatedEndingComponent={"... "} >
        <div>
            <span>Nutrients</span>
            {" "}
            <ul className="nutrients">
                <li>{nutrients.CHOCDF.label} - {nutrients.CHOCDF.quantity.toFixed()} {nutrients.CHOCDF.unit}</li>
                <li>{nutrients.FAT.label} - {nutrients.FAT.quantity.toFixed()} {nutrients.FAT.unit}</li>
                <li>{nutrients.FIBTG.label} - {nutrients.FIBTG.quantity.toFixed()} {nutrients.FIBTG.unit}</li>
                <li>{nutrients.PROCNT.label} - {nutrients.PROCNT.quantity.toFixed()} {nutrients.PROCNT.unit}</li>
                <li>{nutrients.SUGAR.label} - {nutrients.SUGAR.quantity.toFixed()} {nutrients.SUGAR.unit}</li>
            </ul>
        
        </div>
        </ShowMoreText>
    )

}

export default Nutrients;