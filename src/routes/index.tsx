import { BottomBar } from 'components/BottomBar';
import { AuthGoogleContext } from 'contexts/authGoogle';
import { useContext } from 'react';
import { NativeRouter, Route, Routes as NativeRoutes } from 'react-router-native';
import { Login } from 'screens/Login';
import { Overview } from 'screens/Overview';
import { Paths } from 'utils/paths';

export function Routes() {
  const { isSigned } = useContext(AuthGoogleContext);

  const ProtectedRoute = ({ children }: any) => {
    if (!isSigned) {
      return <Login />;
    }
    return (
      <>
        {children}
        <BottomBar />
      </>
    );
  };

  return (
    <NativeRouter>
      <NativeRoutes>
        <Route
          path={Paths.HOME}
          index
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />
      </NativeRoutes>
    </NativeRouter>
  );
}
