var React = require("react"); 
/*var log=require("file!../../images/ReactJs.png");*/


var ImgComponent=React.createClass({
    
        getInitialState() {
        return {
        data: {
                'imgPath':'../../../img/ReactJS.png',
                'desc':'React is an open-source JavaScript library for creating user interfaces that aims to address challenges encountered in developing single-page applications. It is maintained by Facebook, Instagram and a community of individual developers and corporations.',
                'title':'REACT JS'
            }
        };
  },
        render(){
            
            return(
                <div className="component-style">
                 <h3>{this.state.data.title}</h3>
                <img src={this.state.data.imgPath}/>
                 <p>{this.state.data.desc}</p>
                </div>
            );
        }
    });



module.exports = ImgComponent;