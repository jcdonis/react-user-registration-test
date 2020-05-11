import React from "react";

const EmptyUserList = ({ msg }) => (
  <div className="valign-wrapper">
    <div className="empty-msg">      
      <img src="https://pixabay.com/get/54e5d4444e57a514f1dc8460da2932761c3ed9e5515272_640.png"
        className="center-align responsive-img circle" />
      <h5 className="center-align">{msg}</h5>
    </div>
  </div>
);

export default EmptyUserList;
