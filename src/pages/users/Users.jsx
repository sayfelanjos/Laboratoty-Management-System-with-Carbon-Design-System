import React from "react";
import styles from "./Users.module.css";
import {
  DataTable,
  TableContainer,
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@carbon/react";
import { headerData, rowData } from "./sampleData";

function Users() {
  return (
    <div className={styles["container"]}>
      <DataTable rows={rowData} headers={headerData}>
        {({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title="DataTable">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
}

export default Users;
