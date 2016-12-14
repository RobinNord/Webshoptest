import React, {PropTypes} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const ProductsList = ({products}) => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Aktuell kostnad ($)</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                 {products.map(product => 
                     <TableRow className="onhover-pointer" key={product.productid}>
                        <TableRowColumn>{product.name}</TableRowColumn>
                        <TableRowColumn>{product.currentcost}</TableRowColumn>
                    </TableRow> 
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductsList;