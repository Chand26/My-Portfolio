import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Master of Computer Applications" where="Surana College" from="Feb 2024" to="Present"/>
<Widecard title="Bachelor of Computer Applications" where="KLE College" from="2020" to="2023"/>
<Widecard title="PUC" where="RNS College" from="2018" to="2020"/>
<Widecard title="SSLC" where="VVIS School" from="2015" to="2018"/>
</div>
)
}
}
export default Education