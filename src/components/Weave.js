import "./Weave.css";
import React, { Component } from "react";
import weave1 from "./Weave1.png";
import weave2 from "./Weave2.png";
import weave3 from "./Weave3.png";
import { withRouter } from "react-router-dom";

class Weave extends Component {
    render() {
        return (
            <div class="weave">
                <div><div>
                    <img src={weave1} />
                </div></div>
                <div><div>
                    <img src={weave2} />
                </div></div>
                <div><div>
                    <img src={weave3} />
                </div></div>
                <div>                <p>
                    Screenshots of Weave Talent web app from Startup Weekend Wellington 2020.
                </p>
                    <p>
                        Result: third place team.
                </p></div>
            </div>

        );
    }
}

export default withRouter(Weave);
