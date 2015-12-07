import React, { Component, PropTypes } from 'react';
import './HSplitPanel.scss'


class HSplitPanel extends Component {

  constructor(props) {
    super(props);
    this.state = { left: [] , right:[]};
  }
  /**
   * 注册一个层
   * @param 组件对象
   * @param where 安装的位置， left|right
   */
  registerPanel(component , where){

  }

  render() {
    var scrollbarv = {
                      'width': '21px', 
                      'top':0, 
                      'bottom': 0 , 
                      'position':"absolute" , 
                      'right':0 ,  
                      'overflowX': 'hidden',
                      'overflowY': 'scroll'
                     }
    var scrollbarv_inner ={width: '21px', height: '1112px'}
    var scrollbarh = {display: 'none', height: '21px', left: 0, right: '16px'}
    var scrollbarh_inner = {height: '21px', width: 0}

    return (
      <div className="HSplitPanel">
         <div className="left">
            <div className="scrollbar scrollbar-v" style={scrollbarv}>
              <div className="scrollbar-inner" style={scrollbarv_inner}></div>
            </div>
            <div className="scrollbar scrollbar-h" style={scrollbarh}>
              <div className="scrollbar-inner" style={scrollbarh_inner}></div>
            </div>
         </div>
         <div className="splitter">
              <div> </div>
         </div>
         <div className="right">
            <div className="scrollbar scrollbar-v" style={scrollbarv}>
              <div className="scrollbar-inner" style={scrollbarv_inner}></div>
            </div>
            <div className="scrollbar scrollbar-h" style={scrollbarh}>
              <div className="scrollbar-inner" style={scrollbarh_inner}></div>
            </div>
         </div>
      </div>
    );
  }
}

export default HSplitPanel;