import React from "react";
import cx from "classnames";
import { connect } from "react-redux"
import { setFilter } from "../redux/actions"
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setFilter}) => {
    return (
        <div className="visibility=filsters">
            {Object.keys(VISIBILITY_FILTERS).map( filterKey=> {
                // filterKeys function body
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return(
                    <span
                        key = {`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter", 
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {  
                            setFilter(currentFilter)  
                        }}
                    >
                        {console.log("current filter =  !!!" + currentFilter)}
                        {currentFilter}
                    </span>
                );
            })} 
        </div>
    );
}

const mapStateProps = state => {
    //console.log("current state" + JSON.stringify(state.visibilityFilter));
    return {activeFilter : state.visibilityFilter};
}
// Visibility functuon takes in activeFilter and setFilter as a parameter 
// mapStateProps will set the active filter 
// setFilter is imported from action directory
export default connect(
    mapStateProps,
    { setFilter }
)(VisibilityFilters);