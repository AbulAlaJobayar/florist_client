import { ConfigProvider, Layout } from "antd";
import SideBar from "./SideBar";
import DashboardNavbar from "./DashboardNavbar";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: "#8edla3",
            // colorLink: "blue",
            // colorTextBase: "#8edla3",
            motion: false,

            //content area
            // colorBgBase:'#fff9f4',
            borderRadius: 5,
            // Alias Token
          },
        }}
      >
        <Layout>
          <SideBar />
          <Layout>
            <DashboardNavbar />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
              >
              <Outlet/>
              </div>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default MainLayout;
