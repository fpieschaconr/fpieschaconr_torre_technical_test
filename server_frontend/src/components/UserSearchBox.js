import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

function UserSearchBox(props) {
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
}

export default UserSearchBox;
