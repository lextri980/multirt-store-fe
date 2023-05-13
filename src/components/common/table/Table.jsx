import React from "react";
import { TableContainer } from "./Table.style";
import Table from "@nextui-org/react/table";

function Table(props) {
  const { columns, data, renderCell } = props;

  return (
    <TableContainer>
      <Table
        aria-label="Table render"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        className="table-container"
        bordered
        color="primary"
        hoverable
        sticked
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.key}
              align={column.key === "action" ? "center" : "start"}
              css={{
                fontSize: "15px",
                height: "50px",
                width: column.width || "",
              }}
            >
              {column.label}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={data}>
          {(item) => (
            <Table.Row key={item._id}>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </TableContainer>
  );
}

export default Table;
