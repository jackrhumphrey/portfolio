import "./Weave.css";
import React, { Component } from "react";
import weave4 from "./Weave4.png";
import weave2 from "./Weave2.png";
import weave3 from "./Weave3.png";
import { withRouter } from "react-router-dom";

class Weave extends Component {
    render() {
        return (
            <>
                <img src={weave4} style={{ maxWidth: "100%", marginBottom: "25px" }} />
                <div class="weave">
                    <div><div>
                        <img src={weave2} style={{ maxWidth: "100%", marginBottom: "25px" }} />
                    </div></div>
                    <div><div>
                        <img src={weave3} />
                    </div></div>
                </div>
                <p>
                    Screenshots of Weave Talent web app from Startup Weekend Wellington 2020.
                </p>
                <p>
                    Result: third place team.
                </p>
            </>
        );
    }
}

export default withRouter(Weave);
