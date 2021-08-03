import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import StatsDisplay from "./pages/StatsDisplay";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>
          <StatsDisplay />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
