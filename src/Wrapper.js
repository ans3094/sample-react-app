import React from "react";

function Wrapper({children}) {
    const style = {
        border : '1px solid #f00',
        padding: '12px',
    };

    return <div style={style}>{children}</div>
}

export default Wrapper