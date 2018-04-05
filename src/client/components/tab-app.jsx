/****************************************************************************************
 

 
****************************************************************************************/

import React from 'react';

import TabStyle from '../styles/tab.scss';
/****************************************************************************************/

class TabApp extends React.Component {
    constructor(props) {
        super(props);
    }

    prueba(city) {
        //console.log("entra a funcion",city);
        
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(city).style.display = "block";
        //evt.currentTarget.className += " active";
        this.refs.city += " active";
    }
    render() {
        //console.log(this.props.items);
        let items = this.props.items;
        return(
            <div>
                <div className="tab">
                    {
                        items.map(item=>{
                            console.log("tab",item);
                            return(
                                <button ref = {item}  className="tablinks" onClick={this.prueba.bind(this,item)}>{item}</button>
                            )
                        })
                    }
                </div>

                {
                    items.map(item=>{
                            console.log("item",item);
                            return(
                                <Item id={this.props.id}/>
                                
                            )
                        }) 
                }
                
            
            </div>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id={this.props.id}  className="tabcontent">
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}

export { TabApp, Item };