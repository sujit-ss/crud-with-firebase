import Header from "./components/header";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 70px)",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "250px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SideBar
            menuList={["Add User", "Update User", "Delete User", "View Users"]}
          />
        </div>
        <div
          style={{
            width: "calc(100% - 250px)",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
