const Header = () => {
  return (
    <header className="bg-sky-800 py-2">
      <div className="container container-xl mx-auto">
        <div className="flex">
          <div className="w-1/12">
            <a href="/">
              <img src="/images/logo-2023n.svg" alt="" />
            </a>
          </div>
          <div className="w-7/12">
            <ul className="menu menu-vertical lg:menu-horizontal">
              <li>
                <a
                  href="#"
                  className="text-white text-base font-medium hover:bg-transparent hover:text-sky-40"
                >
                  Khách sạn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-base font-medium hover:bg-transparent hover:text-sky-400"
                >
                  Tour
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-base font-medium hover:bg-transparent hover:text-sky-400"
                >
                  Vé máy bay
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-base font-medium hover:bg-transparent hover:text-sky-400"
                >
                  Vé vui chơi
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="text-white text-base font-medium hover:bg-transparent hover:text-sky-400"
                >
                  ...
                </a>
                <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-sky-800">
                  <li>
                    <a href="#" className="text-white">
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Item 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-2/12">Account</div>
          <div className="w-2/12">Hotline</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
