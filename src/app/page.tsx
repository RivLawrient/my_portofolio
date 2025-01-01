import { CardIntro } from "./component/CardIntro";
import { Welcome } from "./component/Welcome";

export default function Page() {
  return (
    <div className="fixed w-screen h-screen">
      <div className="relative w-screen h-screen overflow-y-scroll">
        <Welcome text="hello, welcome" />
        <Header />
        <section className="w-screen h-screen  items-center justify-center flex flex-col bg-gray-900/90">
          <img
            src="./fll.jpg"
            alt=""
            className="absolute md:w-screen w-auto h-screen md:h-auto -z-10 blur-md overflow-hidden "
          />
          <CardIntro />
        </section>
        <section className="w-screen h-screen bg-gray-900"></section>
        <section className="w-screen h-screen bg-gray-900"></section>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="min-h-20 bg fixed top-0 flex justify-end w-full bg-transparent items-center px-8">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          className="fill-gray-500"
        >
          <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" />
        </svg>
      </div>
    </header>
  );
}
