import React, { Component, PropTypes } from 'react';
import './VSplitPanel.scss'


class VSplitPanel extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="VSplitPanel">
         <div className="top">
            <div className="scrollbar scrollbar-v" style="width: 21px; top: 0px; bottom: 0px;">
              <div className="scrollbar-inner" style="width: 21px; height: 1112px;"></div>
            </div>
            <div className="scrollbar scrollbar-h" style="display: none; height: 21px; left: 0px; right: 16px;">
              <div className="ace_scrollbar-inner" style="height: 21px; width: 0px;"></div>
            </div>
         </div>
         <div className="splitter">
              <div> </div>
         </div>
         <div className="bottom">
            <div className="scrollbar scrollbar-v" style="width: 21px; top: 0px; bottom: 0px;">
              <div className="scrollbar-inner" style="width: 21px; height: 1112px;"></div>
            </div>
            <div className="scrollbar scrollbar-h" style="display: none; height: 21px; left: 0px; right: 16px;">
              <div className="ace_scrollbar-inner" style="height: 21px; width: 0px;"></div>
            </div>
         </div>
      </div>
    );
  }

}

export default VSplitPanel;