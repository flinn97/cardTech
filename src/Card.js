import React, {Component} from "react";

/**
 * card component for adding good UI
 */
export default class Card extends Component {

  type;
  theme;
  // set up fucntions
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef;
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.isPopup=this.isPopup.bind(this);
  }

  //mount for popups
  componentDidMount() {
    if(this.props.popup){
      document.addEventListener('mousedown', this.handleClickOutside);

    }
}

//unmount the mousedown event listener
componentWillUnmount() {
  if(this.props.popup){
    document.removeEventListener('mousedown', this.handleClickOutside);

  }
}

//handle close if clicked outside.
handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      if(this.props.handleClose){this.props.handleClose();}}    
}

/**
 * create a wrapper popup for the html if this.props.popup is true
 * @param {*} html 
 * @returns 
 */
  isPopup(html){
    if(this.props.popup){
      html = <div  className={this.props.backDropClass?this.props.backDropClass:"backDropPopup"} style = {this.props.popupBackdropStyle}>
        <div ref={this.wrapperRef} style={this.props.popupContentStyle} className={this.props.popupContentClass? this.props.popupContentClass:"popupContent"}>
        <div onClick={()=>{if(this.props.handleClose){this.props.handleClose();}}} style={this.props.closeStyle} class={this.props.closePopupClass?this.props.closePopupClass:"closePopup"}>{this.props.closeUI?this.props.closeUI:<>X</>}</div>
        {html}
        </div>
      </div>
    }
    return html

  }
 


  /**
   *  create card by theme and type. Theme is default if no theme added.
   * @returns rendered card
   */
  render(){
    this.theme = this.props.theme? this.props.theme: "Default";
    this.type = this.props.type? this.props.type: "fit";
    
    let str =this.type+this.theme + " scroller"
    str = this.props.popup? str+ " cardPopup":str
    let html = <div className = {this.props.cardClass? this.props.cardClass:str} style={this.props.cardStyle}>
    {this.props.content}
  </div>
  html = this.isPopup(html, );
  return (
   <> {html}</>
  );
}
}

//TODO:
//figure out how to provide the mod file to change the color theme from the root to nodemodules;
//more themes
//incorporate tech like bootstrap to get pro look
