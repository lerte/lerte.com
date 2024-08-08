import Experience from './Experience'

export default function Page() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="gap-5 sm:grid lg:grid-cols-3">
        <div className="space-y-5">
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <img
                  src="https://media.licdn.com/dms/image/C5103AQH_eE5f59GiTg/profile-displayphoto-shrink_100_100/0/1560160860390?e=1727308800&v=beta&t=5TnYfY-Q8NiJS7mPw0e8zRuxmCbhyPOfFawgk_-F8hk"
                  alt="Avatar"
                  className="h-14 w-14 cursor-pointer rounded-xl border-2 border-white shadow-sm dark:border-slate-800"
                />
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">
                    石明
                  </div>
                  <div className="text-xs text-gray-400 dark:text-slate-200">
                    Web全栈开发工程师
                  </div>
                  <div className="mt-2 inline-flex flex-wrap gap-1">
                    <ul className="text-xs space-y-2">
                      <li>
                        <span className="mr-2">个人网站:</span>
                        <a href="https://lerte.com">lerte.com</a>
                      </li>
                      <li>
                        <span className="mr-2">Github:</span>
                        <a href="https://github.com/lerte">github.com/lerte</a>
                      </li>
                      <li>
                        <span className="mr-2">Codepen:</span>
                        <a href="https://codepen.io/lerte">codepen.io/lerte</a>
                      </li>
                      <li>
                        <span className="mr-2">Stackblitz:</span>
                        <a href="https://stackblitz.com/@lerte">
                          stackblitz.com/@lerte
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold dark:text-slate-50">
              教育
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-slate-700 dark:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 stroke-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    ></path>
                  </svg>
                </div>
                <div className="font-medium">
                  <div className="text-sm text-gray-900 dark:text-slate-100">
                    华中师范大学 计算机科学与技术
                  </div>
                  <div className="text-xs text-gray-400 dark:text-slate-400">
                    2006-2010
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold dark:text-slate-50">
              信息
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-slate-700 dark:text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 stroke-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-medium">
                    <div className="text-sm text-gray-900 dark:text-slate-100">
                      lerte@qq.com
                    </div>
                    <div className="text-xs text-gray-400 dark:text-slate-400">
                      Email
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-slate-700 dark:text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 stroke-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-medium">
                    <div className="text-sm text-gray-900 dark:text-slate-100">
                      37
                    </div>
                    <div className="text-xs text-gray-400 dark:text-slate-400">
                      年龄
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-slate-700 dark:text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 stroke-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-medium">
                    <div className="text-sm text-gray-900 dark:text-slate-100">
                      186 8882 7174
                    </div>
                    <div className="text-xs text-gray-400 dark:text-slate-400">
                      电话
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-slate-700 dark:text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 stroke-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-medium">
                    <div className="text-sm text-gray-900 dark:text-slate-100">
                      Windows or macOS
                    </div>
                    <div className="text-xs text-gray-400 dark:text-slate-400">
                      电脑
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold dark:text-slate-50">
              技能
            </h2>
            <div className="-m-2 flex flex-wrap">
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                JavaScript
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Vue
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                CSS
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                TailwindCSS
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                React
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Next.js
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                TypeScript
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Vuetify
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Bootstrap
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                NodeJS
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                HTML
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                jQuery
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                VS Code
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Photoshop
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Git
              </span>
              <span className="rounded-lg px-2 py-1 text-xs m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Windows
              </span>
            </div>
          </div>
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold dark:text-slate-50">
              证书
            </h2>
            <div className="flex flex-wrap gap-2">
              <div className="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-700">
                <div className="font-medium">
                  <div className="text-xs text-gray-600 dark:text-slate-200">
                    ● 全国信息化计算机应用技术资格证书（CCAT）
                  </div>
                  <div className="text-xs text-gray-400 dark:text-slate-400">
                    2010
                  </div>
                </div>
              </div>
              <div className="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-700">
                <a
                  className="font-medium"
                  target="_blank"
                  href="http://study.163.com/cert/Authority.htm?certNo=M2015100000038"
                >
                  <div className="text-xs text-gray-600 dark:text-slate-200">
                    ● 网易云课堂微专业-前端开发工程师（优秀）
                  </div>
                  <div className="text-xs text-gray-400 dark:text-slate-400">
                    2015-10
                  </div>
                </a>
              </div>
              <div className="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-700">
                <a
                  className="font-medium"
                  target="_blank"
                  href="http://mooc.study.163.com/verify/M2017030000114"
                >
                  <div className="text-xs text-gray-600 dark:text-slate-200">
                    ● 网易云课堂微专业-iOS开发工程师（合格）
                  </div>
                  <div className="text-xs text-gray-400 dark:text-slate-400">
                    2017-03
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-5 sm:mt-0 lg:col-span-2">
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold dark:text-slate-50">
              关于
            </h2>
            <p className="mb-5 text-sm text-gray-600 dark:text-slate-200">
              拥有多年的开发经验, 综合能力强, 学习能力快, 精通Vue.js, Vuetify,
              React, Next.js, TailwindCSS 喜欢追求前沿技术,
              熟练操作Linux/macOS和使用各种工具软件,
              一直以创造利益价值和解决问题为导向,
              为致力于专业的全栈工程师而不懈奋斗。
            </p>
            <p className="mb-5 text-sm text-gray-600 dark:text-slate-200">
              生活方面比较喜欢追求完美，进可单兵作战，退可抱团合作。文艺青年，爱好美剧音乐，会弹奏吉他，钢琴。
            </p>
          </div>
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold dark:text-slate-50">
              经验
            </h2>
            <Experience
              company="杭州造物云技术有限公司"
              jobType="远程"
              title="高级前端开发工程师"
              location="深圳"
              period="2020/02 - 2023/03"
              content="负责后台管理系统开发、3D资源爬取、公众文章爬取。"
            />
            <Experience
              company="荔枝微课"
              jobType="全职"
              title="前端开发工程师"
              location="深圳"
              period="2019/08 - 2020/02"
              content="微信小程序原生开发，对接websocket，配合后端生成封面图等功能。"
            />
            <Experience
              company="丰唐物联（深圳）技术有限公司"
              jobType="全职"
              title="前端开发工程师"
              location="深圳"
              period="2017/03 - 2019/03"
              content="使用Vue, Axios, Express, Webpack, Stylus, Node.js, Yarn等前端技术编写网页或应用。配合市场部和设计制作一些对外页面和小程序。"
            />
            <Experience
              company="造作工房（深圳）咨询有限公司"
              jobType="全职"
              title="互联网工程师"
              location="深圳"
              period="2015/10 - 2016/11"
              content="根据UI设计出来的图片，还原成网页或者app，配合后台完成前端方面的工作，还有一些网站内容的维护以及手机端的开发。"
            />
            <Experience
              company="深圳市维融环球科技开发有限公司"
              jobType="全职"
              title="软件工程师"
              location="深圳"
              period="2013/06 - 2015/06"
              content="一开始主要是对公司产品手机app客户端图标的制定，界面UI的美化，app下载页面、分享页面的制作。后期参与Android客户端功能的开发和维护。 "
            />
          </div>
          <div className="rounded-xl p-7 bg-slate-200 dark:bg-slate-800">
            <h2 className="mb-5 text-lg font-semibold dark:text-slate-50">
              其他
            </h2>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row items-start justify-between">
              <ul>
                <li>budwoo.com</li>
                <li>oomi.lerte.com</li>
                <li>www.actifyjs.com</li>
                <li>www.taildoor.com</li>
                <li>www.ngroker.com</li>
                <li>www.linkgull.com</li>
              </ul>
              <ul>
                <li>客户端 Excalidraw (Tauri + React)</li>
                <li>Sketch插件 sketch-qr-code (javascript)</li>
                <li>客户端 Ngroker (Tauri + Vue3 + Vuetify)</li>
                <li>客户端 Zroker (Wails + React + Radix-UI)</li>
                <li>组件库 Actify (React 19 Material Design 3)</li>
                <li>客户端 HugoCreator (Electron + Vue2 + Vuetify)</li>
                <li>Chrome浏览器插件 Taildoor (React + HeadlessUI)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
