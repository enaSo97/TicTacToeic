import React from 'react'
import store from '../../redux/store'

export function pageFrame(jsxElement){
    
    return (
        <div>
            <div style={{ float: "left", width: "50%", height: '100%' }}>
                <img className="center" style={{ alignSelf: "center" }} width="300" height="300" src={require("../../objects/office.png")}  />
            </div>
            <div style={{ float: "right", width: "50%", height: '100%' }}>
                {jsxElement}
            </div>
        </div>
    );
}