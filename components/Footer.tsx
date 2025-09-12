export default function Footer() {
  return (
    <footer className="bg-gray-100 px-4 py-3 text-center text-sm text-gray-600 shadow-inner dark:bg-gray-800 dark:text-gray-400">
      © {new Date().getFullYear()} Condomínio Manager. Todos os direitos reservados.
    </footer>
  );
}
