import SearchIcon from "@mui/icons-material/Search";
import { Card, Input, Pagination, Spacer } from "@nextui-org/react";
import Button from "components/common/button/Button";
import { SearchSendingIcon } from "components/common/icon/Icon";
import Modal from "components/common/modal/Modal";
import Select from "components/common/select/Select";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useCreateQuery, useRoute } from "hooks/useRoute";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUserRequest } from "store/actions/user.action";
import { color } from "themes/colors";
import { titlePage } from "utils/titlePage.util";
import TableType from "./component/TableType";
import {
  AdvancedSearchModalStyle,
  UserManagementContainer,
} from "./User.style";
import { RECORD_SIZE } from "constants/common";

function User() {
  titlePage("Multirt | Manage user");

  //* Redux hooks --------------------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const { pageInfo, users } = useSelector((state) => state.user);

  //* Declare global variables -------------------------------------------------------------------------------

  //* Local state --------------------------------------------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    size: 10,
    search: "",
  });
  const [commonSearch, setCommonSearch] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState({
    name: '',
    email: '',
    isAdmin: false,
  })
  const [advancedSearchModal, setAdvancedSearchModal] = useState(false);

  //* Hooks --------------------------------------------------------------------------------------------------
  const navigate = useNavigate();
  const searchQueryUrl = useCreateQuery(searchQuery);
  const { pathname, query } = useRoute();

  //* Effects --------------------------------------------------------------------------------------------------
  //? Effect to get user list
  useEffect(() => {
    dispatch(getUserRequest(query));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  //@ (navigateQuery): Change query -----------------------------------
  const navigateQuery = () => {
    navigate(`${pathname}${searchQueryUrl}`);
  };

  //? Effect to navigate query when change pagination
  useEffect(() => {
    navigateQuery();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <UserManagementContainer>
        {/* //* -------------------------------------- Search and info section ---------------------------------------------- */}
        <div className="search-section">
          <h3 className="user-title">User management</h3>
          <Input
            className="search-input mb-20"
            clearable
            bordered
            color="primary"
            value={commonSearch}
            onChange={(e) => setCommonSearch(e.target.value)}
            contentRightStyling={false}
            placeholder="Search..."
            contentLeft={<SearchIcon className="search-icon" />}
            contentRight={
              <div
                style={{ padding: "0 5px" }}
                onClick={() =>
                  setSearchQuery({
                    ...searchQuery,
                    page: 1,
                    search: commonSearch,
                  })
                }
              >
                <SearchSendingIcon size="20" color={color.blue} />
              </div>
            }
          />
          <Select
            label="Record size"
            options={RECORD_SIZE}
            clearable={false}
            onChange={(_, selected) => {
              setSearchQuery({
                ...searchQuery,
                size: selected.value ? selected.value : 10,
              });
            }}
          />
          <div className="btn-search">
            <Button width="100%" onClick={() => setAdvancedSearchModal(true)}>
              Advanced search
            </Button>
          </div>
          {pageInfo?.totalData > 0 ? (
            <Pagination
              className="mb-20"
              color="primary"
              size="sm"
              total={pageInfo?.totalPage}
              onChange={(e) => {
                setSearchQuery({
                  ...searchQuery,
                  page: e,
                });
              }}
            />
          ) : (
            ""
          )}

          <div className="user-information">
            <Card variant="bordered">
              <Card.Body>
                <div className="flex">
                  <span className="key">Total user:</span>
                  <span className="value">{pageInfo?.totalData}</span>
                </div>
                <div className="flex">
                  <span className="key">User in page:</span>
                  <span className="value">{users?.length}</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* //* -------------------------------------- Table component ---------------------------------------------- */}
        <TableType />

        {/* //! -------------------------------------- Modal section ---------------------------------------------- */}
        {/* //* Modal: Advanced search ---------------------------------------------- */}
        <Modal
          open={advancedSearchModal}
          header="Advanced search"
          width="550px"
          close={() => setAdvancedSearchModal(false)}
        >
          <AdvancedSearchModalStyle>
            <div className="row-modal">
              <Input bordered color="primary" label="Name" />
              <Input bordered color="primary" label="Email" />
            </div>
            <Spacer y={1} />
            <div className="row-modal">
              <Input bordered color="primary" label="Account type" />
            </div>
          </AdvancedSearchModalStyle>
          <div className="modal-footer-long">
            <Button color="danger" width="120px">
              Close
            </Button>
            <Spacer x={0.5} />
            <Button color="warning" width="120px">
              Clear
            </Button>
            <Spacer x={0.5} />
            <Button color="success" width="120px">
              Search
            </Button>
          </div>
        </Modal>
      </UserManagementContainer>
    </AnimatedLayout>
  );
}

export default User;
