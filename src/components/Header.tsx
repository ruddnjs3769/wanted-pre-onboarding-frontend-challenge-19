import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full h-6 flex justify-start items-center mb-3">
      <span className="text-xl font-black">EASY CHECK LIST</span>
      <img src={logo} alt="logo" className="w-11 h-5 ml-2" />
    </header>
  );
};

export default Header;
