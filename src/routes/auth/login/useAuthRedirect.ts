import { $ } from "@builder.io/qwik";


const useAuthPageData = () => {
  const redirectToGithub = $(() => {
    const redirectUri = "http://localhost:5173/auth/sso-redirect";
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`;

    window.location.href = url;
  })

  return { redirectToGithub };
};

export default useAuthPageData;
