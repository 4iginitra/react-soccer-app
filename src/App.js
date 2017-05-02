import React from 'react';

var headerStyle = {
  	width: "750px",
  	height: "150px",
    border: "1px solid black",
    background: "#F5F5F5",
    float: "top",
    textAlign: "center",
    borderRadius: "10px",
    position: "absolute",
    left: "30%"
};

var topLeftStyle = {
   width: "300px",
   height: "200px",
   border: "1px solid grey",
   borderRadius: "5px",
   position: "absolute",
   left: "30%",
   top: "18%"
};

var footerLeftStyle = {
   width: "300px",
   height: "200px",
   border: "1px solid grey",
   borderRadius: "5px",
   position: "absolute",
   left: "30%",
   top: "18%"
};



class App extends React.Component {
  render() {
    return (
    	<div> 
    	     <Title />
           <Topleft />
           <div id="right"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png" width="300" height="200" alt="Germany"/></div>
           <div id="footer"><img src="http://pride-service.com.ua/wp-content/uploads/2015/08/%D0%9F%D0%BE%D0%BB%D0%BE%D1%81%D0%B0.png" alt="Yellow chain"/></div>
        </div>
    )
  }
}


var Title = React.createClass ({
    render: function () {
        return (
          <div id="header" style={headerStyle }><h1>Which of these teams won more in official matches between themselves</h1></div>
        );  
      }    
});


var Topleft = React.createClass ({
    render: function () {
        return (
          <div id="topLeft" style={topLeftStyle}><img style={{width: "100%", height: "100%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png" alt="Italy"/></div>
        );
    }
});







export default App