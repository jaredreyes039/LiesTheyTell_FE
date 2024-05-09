import SubscribeForm from "../_components/forms/subscribe.form.component";
import NavBar from "../_components/ui/nav/NavBar.component";

export default function SignUp(props) {
  return (
    <main className="py-6 px-6 flex max-h-screen overflow-x-hidden overflow-y-scroll min-h-screen ">
      <NavBar />
      <SubscribeForm />
    </main>
  );
}
