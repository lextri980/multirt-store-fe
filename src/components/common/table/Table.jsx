import TableCustom from "@nextui-org/react/table";
import PropTypes from "prop-types";
import { TableContainer } from "./Table.style";

Table.propTypes = {
  column: PropTypes.array,
  data: PropTypes.array,
  renderCell: PropTypes.func,
};

function Table(props) {
  const { columns, data, renderCell } = props;

  return (
    <TableContainer>
      <TableCustom
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
        <TableCustom.Header columns={columns}>
          {(column) => (
            <TableCustom.Column
              key={column.key}
              align={column.key === "action" ? "center" : "start"}
              css={{
                fontSize: "15px",
                height: "50px",
                width: column.width || "",
              }}
            >
              {column.label}
            </TableCustom.Column>
          )}
        </TableCustom.Header>
        <TableCustom.Body items={data}>
          {(item) => (
            <TableCustom.Row key={item._id}>
              {(columnKey) => (
                <TableCustom.Cell>
                  {renderCell(item, columnKey)}
                </TableCustom.Cell>
              )}
            </TableCustom.Row>
          )}
        </TableCustom.Body>
      </TableCustom>
    </TableContainer>
  );
}

export default Table;
