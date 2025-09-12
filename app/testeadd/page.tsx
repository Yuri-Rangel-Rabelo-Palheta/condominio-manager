import LayoutApp from "@/components/LayoutApp";
import FormAdd from "@/components/FormAdd";

export default function AddMoradorPage() {

  // papel do usuário logado (isso virá do Firebase Auth)
  const role = "admin"; 

  return (
    <LayoutApp role={role}>
      <FormAdd />
    </LayoutApp>
  );
}
