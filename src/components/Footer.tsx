import { useContext } from "react";

function Footer() {

  return (
    <div className={`p-8 dark:text-white/50 text-black/50 text-sm`}>
      <p>Recreate by let_woon in {new Date().getFullYear()}</p>
    </div>
  );
}
export default Footer