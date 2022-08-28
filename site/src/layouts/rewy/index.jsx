import React from 'react';

import "../../../content/assets/css/config/config.scss"
import "../../../content/assets/css/bootstrap.min.css"
import "../../../content/assets/css/animate.min.css"
import "../../../content/assets/css/boxicons.min.css"
import "../../../content/assets/css/flaticon.css"
import "../../../content/assets/css/style.css"
import "../../../content/assets/css/responsive.css"

const RewyLayout = ({children}) => {
  return (
    <div style={{color: '#000000'}}>
      {children}
    </div>
  );
};

export default RewyLayout;