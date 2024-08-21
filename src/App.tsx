import Home from "./components/Home";
// import Layout from "./components/Layout";
// import ProjectDetail from "./components/ProjectDetail";
// import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Home />
    // <HashRouter basename="/">
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/:id" Component={ProjectDetail} />
    //       {/* <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </HashRouter>
  );
}

export default App;
