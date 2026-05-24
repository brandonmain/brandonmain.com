import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  return (
    <div className="flex justify-end text-2xl mb-3">
      <ThemeSwitcher />
    </div>
  );
};
