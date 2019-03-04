import React, { Component } from "react";
import { MDBFileInput } from "mdbreact";

class Cv extends Component {

render() {
  return (<div>
      <MDBFileInput multiple btnColor="info" btn-size="sm" />
      </div>
    )
  }
}

export default Cv