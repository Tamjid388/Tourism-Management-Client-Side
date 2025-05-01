import { FaGithub } from "react-icons/fa";
import logo from "../../assets/Link.png"

export const Footer = () => {
  return (
    <div>
        <footer className="footer container mx-auto  bg-base-100 p-10 flex flex-col md:flex-row justify-between">
  <aside>
   <img className="w-50" src={logo} alt="" />
    <p>
      Tripnest Tourist Agency
      <br />
     
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
   
      <a target="_blank" href="https://github.com/Tamjid388">
      <span className="text-2xl"><FaGithub /></span>
      </a>
      <a target="_blank" href="https://www.facebook.com/tamjid.razin/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
    </div>
  )
}
