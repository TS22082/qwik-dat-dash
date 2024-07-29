import { useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";


const useSsoRedirect = () => {
  const loc = useLocation();

  useTask$(async () => {
    if (!loc.prevUrl?.searchParams) return;
    const code = loc.url.searchParams.get("code");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URL}/api/github/gh_login?code=${code}`
      );

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
  });
}

export default useSsoRedirect