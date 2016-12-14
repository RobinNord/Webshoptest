import React, {PropTypes} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const ProductListRow = ({product}) => {
    return (
        <TableRow selectable>
            <TableRowColumn>{product.name}</TableRowColumn>
            <TableRowColumn>{product.currentcost}</TableRowColumn>
        </TableRow>
    );
};

ProductListRow.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductListRow;