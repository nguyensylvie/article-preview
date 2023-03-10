import Head from "next/head";
import Image from "next/legacy/image";
import type { NextPage } from "next";
import { MouseEventHandler, useState } from "react";

const social_media = [
  {
    name: "facebook",
    link: "#",
    alt: "Icon facebook",
    src: "/icon-facebook.svg",
  },
  {
    name: "twitter",
    link: "#",
    alt: "Icon twitter",
    src: "/icon-twitter.svg",
  },
  {
    name: "pinterest",
    link: "#",
    alt: "Icon pinterest",
    src: "/icon-pinterest.svg",
  },
];

function SocialMedia() {
  return (
    <>
      {social_media.map((sm) => (
        <a key={sm.name} href={sm.link} className="px-2">
          <div className="w-5">
            <Image
              alt={sm.alt}
              src={sm.src}
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
        </a>
      ))}
    </>
  );
}

interface Props {
  isClicked?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const MobileButtons: NextPage<Props> = ({ isClicked, handleClick }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 px-9 py-4 w-full bg-darkgrayishblue rounded-b-lg ${
        !isClicked ? "hidden" : "block sm:hidden"
      }`}
    >
      <div className="flex">
        <div className="flex-auto flex items-center">
          <div className="text-sm text-grayishblue pr-3">
            S&nbsp;H&nbsp;A&nbsp;R&nbsp;E
          </div>
          <SocialMedia />
        </div>
        <div className="flex-none flex items-center">
          <div className="group">
            <button
              type="button"
              className="bg-darkblue rounded-full p-2"
              onClick={handleClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  className="fill-white"
                  fill="#6E8098"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
              <span className="sr-only">Icon share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage<Props> = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // update the status value with the inverse value
  };

  return (
    <>
      <Head>
        <title>Frontend Mentor | Article preview component</title>
        <meta name="description" content="Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="flex justify-center items-center min-h-screen p-6 bg-lightgrayishblue">
        <div className="shadow-lg rounded-lg bg-white max-w-2xl">
          <div className="sm:grid sm:grid-rows-2 sm:grid-flow-col relative">
            <div className="sm:row-span-3 h-52 sm:h-auto">
              <img
                alt="Drawers"
                src="/drawers.jpg"
                className="w-full h-full rounded-t-lg sm:rounded-l-lg sm:rounded-r-none object-cover"
              />
            </div>
            <div className="sm:row-span-2 px-9 pt-9 sm:pt-8 pb-5 sm:pb-7">
              <h1 className="text-darkgrayishblue text-base sm:text-lg font-medium">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h1>
              <p className="text-darkblue text-sm pt-3 pb-8 sm:pb-4">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
              <div className="flex">
                <div className="flex-none flex items-center pr-4">
                  <div className="w-10">
                    <Image
                      alt="Avatar"
                      src="/avatar-michelle.jpg"
                      className="rounded-full"
                      layout="responsive"
                      width={1}
                      height={1}
                    />
                  </div>
                </div>
                <div className="flex-auto">
                  <p className="text-darkgrayishblue text-sm font-medium">
                    Michelle Appleton
                  </p>
                  <p className="text-grayishblue text-sm">28 Jun 2020</p>
                </div>
                <div className="flex-none flex items-center">
                  <div className="group">
                    <button
                      type="button"
                      className={`group-hover:bg-darkblue rounded-full p-2 ${
                        !isClicked ? "bg-lightgrayishblue" : "bg-darkblue"
                      }`}
                      onClick={handleClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="13"
                      >
                        <path
                          className={`group-hover:bg-darkblue ${
                            !isClicked ? "group-hover:fill-white" : "fill-white"
                          }`}
                          fill="#6E8098"
                          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                        />
                      </svg>
                      <span className="sr-only">Icon share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`absolute bottom-20 -right-14 bg-darkgrayishblue rounded-lg px-8 py-4 ${
                !isClicked ? "hidden" : "sm:block hidden"
              }`}
            >
              <div className="relative">
                <div className="flex-auto flex items-center">
                  <div className="text-xs text-grayishblue pr-3">
                    S&nbsp;H&nbsp;A&nbsp;R&nbsp;E
                  </div>
                  <SocialMedia />
                </div>
                <div className="absolute -bottom-5 left-1/2 bg-darkgrayishblue transform rotate-45 h-4 w-4"></div>
              </div>
            </div>

            <MobileButtons isClicked={isClicked} handleClick={handleClick} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
