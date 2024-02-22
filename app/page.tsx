import Image from 'next/image'

export default function Page() {
  return (
    <>
    <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Abdullah Tahir
            </h1>
            <h2 className="mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
            an aspiring software and aerospace engineer in love with learning.
            </h2>
          </div>
          <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
          <Image
            src='/images/memoji.jpg' // Assuming the image is in public/
            alt='avatar'
            width={200}
            height={200}
            className="rounded-full"
          />
          </div>
        </div>
        <p className="space-y-4 text-zinc-500 dark:text-slate-300">
          <p className="my-4 leading-loose text-justify">

            I'm currently an undergraduate student at {' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
              href="https://www.adelaide.edu.au/"
              rel="noreferrer"
              target="_blank"
            >
              The University of Adelaide
            </a>
            - studying a double degree in Mechanical Engineering (Aerospace) with Computer Science. During my time as
            a student, always believed in a simply yet powerful philosophy;&nbsp;
            
            <span className="focusable rounded-sm font-medium text-zinc-800 underline decoration-rose-700 decoration-2 underline-offset-2 transition duration-100 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-amber-400  dark:hover:decoration-amber-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40">
             the best way to grow as an individual is to throw yourself into new experiences.
            </span>
            
            &nbsp;Whether it be through taking upon new and foreign hobbies, such as bouldering or 
            competitive programming, or even trying to figure out how a crater detection algorithm works with zero prior machine learning experience
            - 
            <span className="focusable rounded-sm font-medium text-zinc-800 underline decoration-rose-700 decoration-2 underline-offset-2 transition duration-100 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-rose-400  dark:hover:decoration-rose-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40">
            I wholeheartedly embrace the challenge of pushing past my comfort zone. 
            </span >
            &nbsp;Each new adventure not only manages to humble me every single time, but also teach me invaluable lessons about perseverance, 
            and the boundless potential of the human spirit!
            <br></br><br></br>
          </p>
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/abdullah-tahir1/"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-indigo-500/80 hover:shadow-indigo-500/5 focus:ring-indigo-500/40 dark:bg-indigo-400 dark:text-zinc-900 dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-indigo-400/80 dark:hover:shadow-indigo-400/5 dark:focus:ring-indigo-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://github.com/abda-1"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="mailto:m.abbytahir@gmail.com"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="/AbdullahTahir_Resume_Feb2024.pdf"
            rel="noreferrer"
            target="_blank"
          >
            {/* <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg> */}
            <svg fill="currentColor" height="24" viewBox="-274.15 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_iconCarrier">
                <path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9v596.8H60V221h359.6z"></path>
                <path d="M123.8 768.6h394.8v50H123.8zm0-124.6h394.8v50H123.8zm0-124.5h394.8v50H123.8z"></path>
                <circle cx="194" cy="382.3" r="60"></circle>
              </g>
            </svg>
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-2 justify-center"></div>
        </div>
      </div>


      

      <div className="content mb-2">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Projects</h2>
        <p className="max-w-[40ch] leading-relaxed text-zinc-500 dark:text-slate-300">
          Here are some of the projects I've worked on in the past. Click on the photos to see the code!
        </p>
        <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://github.com/abda-1/bitboard-chess"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src='/images/chessgame.png'
                alt='chess project photo'
                width={300}
                height={300}
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Bitboard Chess Game
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  Sept 2023
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  Jan 2024
                </span>
              </p>
              <p className="flex items-center">
                <span className="flex-1 text-zinc-500 dark:text-zinc-400">
                  Developed a two player chess game using unsigned 64-bit integers to represent the state of the board.
                  Inspired by the StockFish chess engine from&nbsp;
                  <a href='https://lichess.org/' className="focusable rounded-sm font-medium text-zinc-400 underline decoration-slate-700 decoration-2 underline-offset-2 transition duration-100 focus:text-gray-500 focus:ring-slate-500/40 dark:text-zinc-300  dark:hover:decoration-slate-400/30"> 
                  lichess.org 
                  </a>
                  - I am planning to extend this project to have a fully working AI opponent.
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://github.com/abda-1/bitboard-chess"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src='/images/typingtest.png'
                alt='typing test photo'
                width={300}
                height={300}
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Typing Test Application
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  Dec 2023
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  Jan 2024
                </span>
              </p>
              <p className="flex items-center">
                <span className="flex-1 text-zinc-500 dark:text-zinc-400">
                  Created a typing test application inspired by monkeytype.com. The web application (which is currently live- see
                  my github) is aimed towards programmers looking to increase their fluency in languages such as C++, Java, and Python. 
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://github.com/abda-1/bitboard-chess"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src='/images/terminal.png'
                alt='terminal photo'
                width={300}
                height={300}
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Terminal Based Home Appliance System
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  Apr 2022
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  May 2022
                </span>
              </p>
              <p className="flex items-center">
                <span className="flex-1 text-zinc-500 dark:text-zinc-400">
                  Worked alongside other programmers in my first year of computer science to create a terminal based home appliance system to manage 
                  appliances within a house. The application uses ncurses to display the information to the user!
                </span>
              </p>
            </div>
          </li>
          
      </div>

      <div className="content mt-12sm:mt-24">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Experiences</h2>
        <ul className="mt-8 mb-10">
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="#home"
              rel="noreferrer"
              target="_blank"
            >
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Academic Tutor
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  Jan 2022
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  Today
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Mathematics tutor for senior high school students.
                </span>
              </p>
            </div>
          </li>
          
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="#home"
              rel="noreferrer"
              target="_blank"
            >
              <img></img>
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Crater Detection Algorithm Research
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  Aug 2023
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  Aug 2023
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Underwent three weeks of intensive research help explore existing CDAs.
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <footer >
        <div className='mt-12 flex flex-col items-center'>
          <div className="mb-3 flex space-x-4">
            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:hi@raphaelchelly.com">
              <span className="sr-only">mail</span>
              <svg className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path>
                <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
              </svg>
            </a>
            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/abda-1">
              <span className="sr-only">github</span>
              <svg className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abdullah-tahir1/">
              <span className="sr-only">linkedin</span>
              <svg className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
         <div className='flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <div>2024</div>
            <div>•</div>
            <div>Abdullah Tahir</div>
         </div>
        </div>
      </footer>
    </>
  );
}