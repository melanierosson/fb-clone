import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <iframe src="https://www.facebook.com/
        plugins/page.php?href=
        https%34%2f%2fwww.facebook.com%2FCleverProgrammerr%2F&
        tabs=timeline&width=340&height=1500&
        small_header=false&
        adapt_container_width=true&
        hide_cover=false&show_facepile=true&
        appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;