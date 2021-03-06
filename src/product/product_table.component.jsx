// component for the whole products table
window.ProductsTable = React.createClass({
    render: function() {
 
    var rows = this.props.products
        .map(function(data, i) {
            return (
                <ProductRow
                    key={i}
                    data={data}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
 
        return(
            !rows.length
                ? <div className='alert alert-danger'>No products found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});