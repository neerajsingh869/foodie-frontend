import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { useCreateMyUser } from "@/api/MyUserApi";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  /* useRef hook to make sure that useEffect
  hook is called just one time */
  const hasUserCreated = useRef(false);
  const { user } = useAuth0();

  const { createUser } = useCreateMyUser();

  useEffect(() => {
    if (user?.sub && user?.email && !hasUserCreated.current) {
      createUser({ auth0Id: user.sub, email: user.email });

      hasUserCreated.current = true;
    }

    navigate("/");
  }, [createUser, navigate, user]);

  return <>AuthCallbackPage Loading...</>;
};

export default AuthCallbackPage;
