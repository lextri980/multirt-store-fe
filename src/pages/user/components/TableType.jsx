import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import UpdateIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DetailIcon from "@mui/icons-material/DocumentScannerOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, Badge, Spacer, Switch, Table } from "@nextui-org/react";
import { Button, Loading, Modal } from "components/common";
import { AnimatedLayout } from "components/layouts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUserRequest } from "store/actions/user.action";
import { color } from "themes/colors";
import { formatDate } from "utils/function.util";
import {
  TableTypeContainer,
  UpdateUserModalContainer,
  UserDetailModalContainer,
} from "./TableType.style";

function TableType() {
  //* Redux hooks --------------------------------------------------------------------------------------------
  const { users, user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //* Declare global variables -------------------------------------------------------------------------------
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const userForm = { isAdmin: false };
  const columns = [
    {
      key: "info",
      label: "Infomation",
      width: "500px",
    },
    {
      key: "account",
      label: "Account",
      width: "100px",
    },
    {
      key: "createdAt",
      label: "Created at",
      width: "200px",
    },
    {
      key: "updatedAt",
      label: "Updated at",
      width: "200px",
    },
    {
      key: "action",
      label: "Action",
      width: "300px",
    },
  ];

  //* Local state --------------------------------------------------------------------------------------------
  const [userDetailModal, setUserDetailModal] = useState(false);
  const [userUpdatelModal, setUserUpdatelModal] = useState(false);
  const [userDeleteModal, setUserDeleteModal] = useState(false);
  const [switchLayout, setSwitchLayout] = useState(false);

  //* Form and validate --------------------------------------------------------------------------------------
  //* Hooks --------------------------------------------------------------------------------------------------
  //* Effects ------------------------------------------------------------------------------------------------
  useEffect(() => {
    setSwitchLayout(user?.isAdmin);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.isAdmin]);

  //@ (openUserModal): Open detail, update & delete user modal -------------------------------------------------------
  const openUserModal = (type, data) => {
    dispatch(getDetailUserRequest(data._id));
    if (type === "detail") {
      setUserDetailModal(true);
    } else if (type === "update") {
      setUserUpdatelModal(true);
    } else {
      setUserDeleteModal(true);
    }
  };

  //@ (onUpdateUser): Dispatch update user -------------------------------------------------------
  const onUpdateUser = () => {
    userForm.isAdmin = switchLayout;
  };

  //! Condition rendering --------------------------------------------------------------------------------------------------
  const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey];
    switch (columnKey) {
      case "info":
        return (
          <div className="flex align-center">
            <Avatar
              text={data?.name.charAt(0).toUpperCase()}
              size="lg"
              src={data?.avatar?.path}
            />
            <Spacer x={0.7} />
            <div className="flex-column align-start">
              <b>{data.name}</b>
              <p>{data.email}</p>
            </div>
          </div>
        );

      case "account":
        return (
          <div className="flex">
            <Badge
              color={data.isAdmin === true ? "warning" : "success"}
              css={{ minWidth: "60px" }}
            >
              {data.isAdmin === true ? "Admin" : "User"}
            </Badge>
          </div>
        );

      case "createdAt":
        return (
          <div className="flex">{formatDate(data.createdAt, "DD/MM/YYYY")}</div>
        );

      case "updatedAt":
        return (
          <div className="flex">{formatDate(data.updatedAt, "DD/MM/YYYY")}</div>
        );

      case "action":
        if (userLocal._id === data._id) {
          return (
            <Badge color="success" css={{ minWidth: "60px" }}>
              Current User
            </Badge>
          );
        } else {
          return (
            <div className="horizontal-center">
              <DetailIcon
                className="pointer"
                style={{ color: color.blue }}
                onClick={() => openUserModal("detail", data)}
              />
              <Spacer x={0.8} />
              <UpdateIcon
                className="pointer"
                style={{ color: color.orangeP }}
                onClick={() => openUserModal("update", data)}
              />
              <Spacer x={0.8} />
              <DeleteIcon
                className="pointer"
                style={{ color: color.redP }}
                onClick={() => openUserModal("delete", data)}
              />
            </div>
          );
        }

      default:
        return cellValue;
    }
  };

  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <TableTypeContainer>
        {/* //* -------------------------------------- Table: User list ---------------------------------------------- */}
        <Table
          aria-label="Table render"
          className="table-container"
          bordered
          color="primary"
        >
          <Table.Header columns={columns} className="table-header">
            {(column) => (
              <Table.Column
                key={column?.key}
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
          <Table.Body items={users}>
            {(item) =>
              loading === true ? (
                <Table.Row>
                  <Loading />
                </Table.Row>
              ) : (
                <Table.Row key={item?._id}>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )
            }
          </Table.Body>
        </Table>

        {/* //! -------------------------------------- Modal section ---------------------------------------------- */}
        {/* //* Modal: User detail ---------------------------------------------- */}
        <Modal
          open={userDetailModal}
          header="User Detail"
          close={() => setUserDetailModal(false)}
        >
          <UserDetailModalContainer>
            <div className="header">
              <Avatar
                size={"xl"}
                text={user?.name?.charAt(0).toUpperCase()}
                css={{ size: "$40" }}
                src={user?.avatar?.path}
              />
              <Spacer y={0.5} />
              <h4>{user?.name}</h4>
              <p>
                <b>Email:</b> {user?.email}
              </p>
              <p>
                <b>Account:</b> {user?.isAdmin ? "Admin" : "User"}
              </p>
            </div>
            <div className="body"></div>
          </UserDetailModalContainer>
        </Modal>

        {/* //* Modal: User update ---------------------------------------------- */}
        <Modal
          open={userUpdatelModal}
          header="Update Account"
          close={() => setUserUpdatelModal(false)}
        >
          <UpdateUserModalContainer>
            <p>
              Do you want change this account to
              <b>{user?.isAdmin ? " user" : " admin"}?</b>
            </p>
            <Spacer y={0.5} />
            <Switch
              checked={switchLayout}
              size="xl"
              shadow
              iconOn={<AdminPanelSettingsIcon />}
              iconOff={<SupervisedUserCircleIcon />}
              className={
                switchLayout ? "switch-theme-user" : "switch-theme-admin"
              }
              aria-label="switch"
              onChange={() => setSwitchLayout(!switchLayout)}
            />
          </UpdateUserModalContainer>
          <div className="modal-footer">
            <Button color="danger" onClick={() => setUserUpdatelModal(false)}>
              Close
            </Button>
            <Spacer x={0.5} />
            <Button
              color="warning"
              disabled={user?.isAdmin === switchLayout}
              onClick={onUpdateUser}
            >
              Update
            </Button>
          </div>
        </Modal>

        {/* //* Modal: User delete ---------------------------------------------- */}
        <Modal
          open={userDeleteModal}
          header="Delete User"
          close={() => setUserDeleteModal(false)}
        ></Modal>
      </TableTypeContainer>
    </AnimatedLayout>
  );
}

export default TableType;
