import { component$, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();

  useTask$(async () => {
    if (!loc.prevUrl?.searchParams) return;
    const code = loc.url.searchParams.get("code");

    try {
      const response = await fetch(`http://127.0.0.1:8080/api/github/gh_login?code=${code}`);

      if (response.status === 200) {
        const data = await response.json();

        if (!data?.token) {
          return;
        }

        const { token } = data;
        localStorage.setItem("accessToken", token);
      }
    } catch (err) {
      console.log("this is the error ==>", err);
    }
  })

  

  const handleRequest = async () => {
    
  };

  handleRequest();

  return <h1>Processing login data</h1>;
});
