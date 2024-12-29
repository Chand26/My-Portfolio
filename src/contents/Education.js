import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Master of Computer Applications" where="Surana College (Autonomous)" from="Feb 2023" to="Pursuing"/>
<Widecard title="Bachelor of Computer Applications" where="KLE Society's Degree College" from="2020" to="2023"/>
<Widecard title="PUC" where="RNS pre-university College" from="2018" to="2020"/>
<Widecard title="SSLC" where="VVIS School" from="2017" to="2018"/>
</div>
)
}
}
export default Education