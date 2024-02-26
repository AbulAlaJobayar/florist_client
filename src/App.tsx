import MainLayout from "./component/layout/MainLayout";
import ProtectedRoute from "./component/protectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
