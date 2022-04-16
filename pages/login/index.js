import Signin from "@/components/LogIn/SignIn";
import React from "react";
export default function Login() {
  return (
    <div>
      <Signin />
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
