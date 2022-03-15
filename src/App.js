import { Route, Routes } from "react-router-dom";

import { Button } from "./ui/buttons";
import { HiDotsVertical } from "react-icons/hi";
import { LoginPage, DashBoardPage, PageNotFound } from "./pages";
import { AddProductPanel, AllProductsPanel, EditProductPanel } from "./components/panel/panels";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<DashBoardPage />}>
          <Route index element={<AllProductsPanel />} />
          <Route path="add" element={<AddProductPanel />} />
          <Route path="edit" element={<EditProductPanel />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
