import {
  Pagination,
  PaginationItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getScannersByPagination } from "../../../redux/thunks/scannersThunks";
import { IFilter, IScannerUnifiedFormat } from "../../../types/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SingleScanner from "./SingleScanner";
import { useStyles } from "./ScannersTable.styles";
import { DARK_PINK, PURPLE, TURQUOISE, WHITE_COLOR } from "../../../helpers/colorsConstant";

export interface IHeader {
  value: string;
  color: string;
}

const ScannersTable: React.FC<{ filters: IFilter }> = (props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(
      getScannersByPagination(page, props.filters.scannerName, props.filters.productName)
    );
  }, [page]);

  useEffect(() => {
    setPage(0);
    dispatch(
      getScannersByPagination(page, props.filters.scannerName, props.filters.productName)
    );
  }, [props.filters]);
  const scanners: IScannerUnifiedFormat[] = useAppSelector(
    (state):IScannerUnifiedFormat[] => state.scannersReducer.scanners
  );

  const headers: Array<IHeader> = [
    {
      value: "NUM",
      color: WHITE_COLOR,
    },
    {
      value: "TEST NAME",
      color: WHITE_COLOR,
    },
    {
      value: "SEVERITY",
      color: WHITE_COLOR,
    },
    {
      value: "CURRENT STATUS",
      color: WHITE_COLOR,
    },
    {
      value: "DURATION",
      color: WHITE_COLOR,
    },
    {
      value: "PASSED HISTORY",
      color: TURQUOISE,
    },
    {
      value: "FAILED HISTORY",
      color: DARK_PINK,
    },

    {
      value: "TOTAL HISTORY",
      color: PURPLE,
    },
    {
      value: "DISPLAY REPORT",
      color: WHITE_COLOR,
    },
  ];

  return (
    <>
      <TableContainer className={classes.table}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {headers.map((header: IHeader, index: number) => (
                <TableCell
                  key={index}
                  sx={{
                    color: `${header.color}`,
                  }}
                >
                  {header.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {scanners &&
              scanners.map((scanner: IScannerUnifiedFormat, index: number) => (
                <SingleScanner scanner={scanner} key={index}></SingleScanner>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2}>
        <Pagination
          count={10}
          page={page}
          onChange={(event: React.ChangeEvent<unknown>, value: number) => {
            setPage(value);
          }}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                backgroundColor: '#074876b3',
                color: TURQUOISE
              }}
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default ScannersTable;
