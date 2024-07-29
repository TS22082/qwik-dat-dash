import { component$ } from "@builder.io/qwik";
import useSsoRedirect from "./useSsoRedirect";

export default component$(() => {
  useSsoRedirect();

  return <h1>Processing login data</h1>;
});
