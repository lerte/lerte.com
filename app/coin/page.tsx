import Logo from './logo'
import hero from './hero.png'
import Icon1 from './icon1'
import Icon2 from './icon2'
import Icon3 from './icon3'
import Icon4 from './icon4'
import about from './about.png'
import Accordion from './Accordion'
import footlogo from './footlogo.png'

const Header = () => {
  const navs = ['about us', 'faq', 'contact us']
  return (
    <header className="pt-[50px] flex justify-between">
      <Logo />
      <nav className="grow flex justify-end">
        <ul className="flex gap-[50px] items-center">
          {navs.map((nav, i) => (
            <li
              key={i}
              className="text-[--color-primary] text-xl font-extrabold"
            >
              {nav}
            </li>
          ))}
          <li>
            <button className="rounded-full w-[170px] h-[48px] bg-[--color-primary] text-white text-xl font-black">
              buy crypto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const Hero = () => {
  return (
    <div className="flex pt-[145px]">
      <div className="basis-1/2">
        <p className="text-[100px] font-black text-[--color-primary] [letter-spacing:-5px]">
          The <span className="text-[#FA0091]">smoothest way </span>
          to convert fiat to crypto
        </p>
        <p className="pt-5 text-[28px] text-[#4D4158] [letter-spacing:0]">
          Explore the game-changing solution significantly accelerating crypto
          purchases and providing access to crypto for everyone.
        </p>
        <button className="mt-[50px] w-[254px] h-20 bg-[--color-primary] text-white rounded-full text-[28px] font-black">
          buy crypto
        </button>
      </div>
      <div className="basis-1/2">
        <img
          alt="hero"
          src={hero.src}
          className="w-full object-cover object-center"
        />
      </div>
    </div>
  )
}

const Tesers = () => {
  const list = [
    {
      icon: <Icon1 />,
      title: 'Seamless verification',
      content:
        'Explore the game-changing solution significantly accelerating crypto purchases and providing access to crypto for everyone.'
    },
    {
      icon: <Icon2 />,
      title: 'Competitive rates',
      content:
        'Purchase crypto at an outstanding exchange rate, the most competitive in the market.'
    },
    {
      icon: <Icon3 />,
      title: 'Easy & convenient',
      content:
        "No matter if you're a regular or occasional buyer, purchasing crypto is finally easy and fast. Have your purchased Bitcoin within mere seconds."
    },
    {
      icon: <Icon4 />,
      title: 'Security & compliance',
      content:
        'Choose an EU-regulated on-ramp tool for purchasing cryptocurrencies. Rest assured that your personal and financial data is completely safe with us.'
    }
  ]

  return (
    <ul className="pt-[300px] grid grid-cols-4">
      {list.map((item, index) => (
        <li key={index}>
          <div className="w-20 h-20">{item.icon}</div>
          <div className="flex flex-col justify-between p-[30px]">
            <h3 className="text-[28px] font-bold text-[--color-primary]">
              {item.title}
            </h3>
            <p className="text-[22px] text-[#4D4158]">{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

const About = () => {
  return (
    <div className="flex mt-48 items-center">
      <div className="relative">
        <p className="absolute left-[60px] top-[38px] text-6xl font-black text-[--color-primary]">
          About us
        </p>
        <img src={about.src} alt="about" />
      </div>
      <div className="basis-2/3">
        <p className="text-[28px] font-bold text-[--color-primary]">
          For Native and Non-native Crypto Users
        </p>
        <p className="text-[22px] text-[#4D4158]">
          At XXX, we aspire to drive the widespread adoption of
          cryptocurrencies. We strongly contribute to the industry revolution by
          delivering solutions that enable straightforward and user-friendly
          payments. Our goal is to unlock crypto payments for both individuals
          and businesses and make the world of digital assets accessible and
          secure.
        </p>
      </div>
    </div>
  )
}

const Faq = () => {
  return (
    <div className="mt-[115px] space-y-[30px] max-w-[945px]">
      <p className="text-6xl font-black text-[--color-primary] pb-[20px]">
        FAQ
      </p>
      <Accordion title="Can I trust XXX to exchange my fiat to cryptocurrencies?">
        Absolutely. XXX is a secure, EU-regulated on-ramp tool for purchasing
        cryptocurrencies.
      </Accordion>
      <Accordion title="How can I easily buy cryptocurrency through XXX?">
        Absolutely. XXX is a secure, EU-regulated on-ramp tool for purchasing
        cryptocurrencies.
      </Accordion>
      <Accordion title="I’m new to cryptocurrencies. Is XXX suitable for beginners?">
        Absolutely. XXX is a secure, EU-regulated on-ramp tool for purchasing
        cryptocurrencies.
      </Accordion>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="mt-[385px] bg-[--color-primary] pt-[71px] pb-[30px]">
      <div className="max-w-[1400px] mx-auto grid grid-rows-[68px_1fr] grid-cols-[111px_1fr]">
        <img src={footlogo.src} alt="foot logo" />
        <div className="row-start-2 row-end-3 col-start-2 col-end-3">
          <div className="flex gap-8 pl-14 pt-14">
            <ul className="flex">
              <li className="text-white">
                <p>address line</p>
                <p>
                  address line address line address line address line address
                  line address address line address line
                </p>
                <p>address line line address line address line</p>
                <p>address line line address line address line</p>
              </li>
            </ul>
            <ul className="flex">
              <li className="text-white">
                <p>address line</p>
                <p>
                  address line address line address line address line address
                  line address address line address line
                </p>
                <p>address line line address line address line</p>
                <p>address line line address line address line</p>
              </li>
            </ul>
            <ul className="flex">
              <li className="text-white">
                <p>address line</p>
                <p>
                  address line address line address line address line address
                  line address address line address line
                </p>
                <p>address line line address line address line</p>
                <p>address line line address line address line</p>
              </li>
            </ul>
            <ul className="flex">
              <li className="text-white">
                <p>address line</p>
                <p>
                  address line address line address line address line address
                  line address address line address line
                </p>
                <p>address line line address line address line</p>
                <p>address line line address line address line</p>
              </li>
            </ul>
          </div>
          <ul className="flex gap-[50px] justify-center mt-[90px] text-[14px] text-[#CBA5D5]">
            <li>terms of service</li>
            <li>privacy policy</li>
            <li>AML & KYC</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="[--color-primary:#391173]">
      <main className="max-w-[1400px] mx-auto">
        <Header />
        <Hero />
        <Tesers />
        <About />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
