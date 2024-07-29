import { component$ } from "@builder.io/qwik";
import { SiGithub } from "@qwikest/icons/simpleicons";
import styles from "./login.module.css";
import useAuthPageData from "./useAuthRedirect";

export default component$(() => {
  const { redirectToGithub } = useAuthPageData();

  return (
    <div class={styles.login_container}>
      <SiGithub class={styles.githubIcon} onClick$={redirectToGithub} />
    </div>
  );
});
