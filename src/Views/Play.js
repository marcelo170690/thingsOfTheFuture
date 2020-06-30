import React from "react";

import GroupCards from "../Components/GroupCards";
import FormPlay from "../Components/FormPlay";

class Play extends React.Component{
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <GroupCards/>
          </div>
          <div className="col-md-6">
            <FormPlay/>
          </div>
        </div>
      </div>
    );
  }
}
export default Play;