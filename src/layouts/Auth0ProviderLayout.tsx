import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

const Auth0ProviderLayout = () => {
  const navigate = useNavigate();

  const domain: string = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId: string = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri: string = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log(user);
    console.log(appState);
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Outlet />
    </Auth0Provider>
  );
};

export default Auth0ProviderLayout;