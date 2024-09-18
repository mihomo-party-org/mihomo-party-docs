import { useTheme } from "nextra-theme-docs";

function Logo(props: any): React.ReactNode {
  const { resolvedTheme } = useTheme();

  return (
    <img
      {...props}
      src={resolvedTheme === "dark" ? "/logo-white.png" : "/logo-black.png"}
      alt="Logo"
    />
  );
}

export default Logo;
