import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
 
  providers: [
    GithubProvider({
      clientId: "87f9ba9db0505ff6803c",
      clientSecret: "2dd8c097bb94810d1298ed69d7ca3c088a755d05",
    }),
  ],
});
