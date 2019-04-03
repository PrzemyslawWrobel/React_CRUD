import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import * as ReadProductsComponent from './produkt/read_products.component';
import * as ReadOneProductComponent from './produkt/read_one_product.component';
import * as CreateProductComponent from './produkt/create_product.component';
import * as UpdateProductComponent from './produkt/update_product.component';
import * as DeleteProductComponent from './produkt/delete_product.component';
var App = React.createClass({
 
    // initial mode is 'read' mode
    getInitialState: function(){
        return {
            currentMode: 'read',
            productId: null
        };
    },
 
    // used when use clicks something that changes the current mode
    changeAppMode: function(newMode, productId){
        this.setState({currentMode: newMode});
            if(productId !== undefined){
            this.setState({productId: productId});
        }
    },
 
    // render the component based on current or selected mode
    render: function(){
 
        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} />;
 
        switch(this.state.currentMode){
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
 
        return modeComponent;
    }
});

ReactDOM.render(
    <App />, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
