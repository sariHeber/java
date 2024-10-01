import { Button, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DARK_PINK, DIRTY_RED, TURQUOISE, WHITE_COLOR } from '../../../helpers/colorsConstant';
import { IScannerUnifiedFormat } from '../../../types/types';
import { useStyles } from './ScannersTable.styles';

const SingleScanner: React.FC<{ scanner: IScannerUnifiedFormat }> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [scanner, setScanner] = useState(props.scanner);
    return (
        <TableRow
            className={classes.tableRow}
            key={scanner.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell sx={{
                align: "left",
                color: WHITE_COLOR
            }}>{scanner.id}</TableCell>
            <TableCell component="th" scope="row" sx={{
                align: 'center',
                color: TURQUOISE
            }}>
                {scanner.testName}
            </TableCell>
            <TableCell sx={{
                align: "left",
                color: DIRTY_RED
            }}>{scanner.productName}</TableCell>
            <TableCell sx={{
                align: "left",
                color: WHITE_COLOR
            }}>{scanner.version}</TableCell>
            <TableCell sx={{
                align: "left",
                color: TURQUOISE
            }}>{scanner.scannerName}</TableCell>
            <TableCell sx={{
                align: "left",
                color: DARK_PINK
            }}>{scanner.numberOfSuccessfulScans}</TableCell>
            <TableCell>
                <Button className={classes.button} onClick={() => {
                    navigate("/more-details/" + scanner.id);
                }}>More Details</Button></TableCell>
        </TableRow>
    )
}
export default SingleScanner;