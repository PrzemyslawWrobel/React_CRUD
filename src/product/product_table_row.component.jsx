// component that renders a single product
window.ProductRow = React.createClass({
    render: function() {
    return (
        <tr>
            <td>{this.props.data.id}</td>

            <td>{this.props.data.name}</td>
            <td>
                <a href='#'
                    onClick={() => this.props.changeAppMode('readOne', this.props.data.id)}
                    className='btn btn-info m-r-1em'> Read One
                </a>
                <a href='#'
                    onClick={() => this.props.changeAppMode('update', this.props.data.id)}
                    className='btn btn-primary m-r-1em'> Edit
                </a>
                <a
                    onClick={() => this.props.changeAppMode('delete', this.props.data.id)}
                    className='btn btn-danger'> Delete
                </a>
            </td>
        </tr>
        );
    }
});

//             <td>{this.props.product.description}</td>
//<td>${parseFloat(this.props.product.price).toFixed(2)}</td>
//<td>{this.props.product.category_name}</td>
