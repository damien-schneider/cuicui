import type React from "react";
import {} from "lucide-react"; // Use actual icons you need

interface NavLinkProps {
  href: string;
  label: string;
  isHighlighted?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isHighlighted }) => (
  <li>
    <a
      href={href}
      className={`relative block h-10 w-24 text-center font-medium transition-all duration-200 ease-in-out rounded-lg ${
        isHighlighted
          ? "text-white bg-gradient-to-r from-purple-600 to-purple-400 shadow-md"
          : "text-gray-800 hover:bg-gray-100"
      }`}
    >
      <span
        className={`absolute inset-0 rounded-lg ${
          isHighlighted ? "" : "bg-transparent"
        }`}
      />
      {label}
    </a>
  </li>
);

export const Navbar = () => {
  return (
    <div
      className="sticky-nav js-sticky-banner sticky-nav--is-visible"
      data-visible-className="sticky-nav--is-visible"
      data-offset-in="150"
      data-target-out=".main-footer"
      data-offset-out="150"
    >
      <div className="container max-width-2xs">
        <div className="sticky-nav__content">
          <nav className="flex-grow hide@sm">
            <ul className="flex items-center justify-between">
              <li className="flex-grow">
                <a className="sticky-nav__link" href="premium-icons">
                  Icons
                </a>
              </li>

              <li className="flex-grow">
                <a className="sticky-nav__link" href="application">
                  App
                </a>
              </li>

              <li className="flex-grow">
                <a className="sticky-nav__link" href="pricing">
                  Pricing
                </a>
              </li>

              <li className="flex-grow">
                <a className="sticky-nav__link" href="log-in">
                  Login
                </a>
              </li>
            </ul>
          </nav>

          <nav className="flex-grow display@sm">
            <ul className="sticky-nav__list flex items-center justify-between">
              <li className="flex-grow">
                <a className="sticky-nav__link" href="premium-icons">
                  Icons
                </a>
              </li>

              <li className="flex-grow">
                <a className="sticky-nav__link" href="application">
                  App
                </a>
              </li>

              <li className="flex-grow">
                <a className="sticky-nav__link" href="pricing">
                  Pricing
                </a>
              </li>

              <li className="flex-grow">
                <a
                  className="sticky-nav__link sticky-nav__link--primary"
                  href="pricing"
                >
                  Buy Icons
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
