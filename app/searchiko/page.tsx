const Header = () => {
  const navs = ['About Us', 'Contact Us', 'Privacy Policy', 'Category', 'Blog']
  return (
    <header className="bg-[#0c173a]">
      {/* navigation */}
      <div className="max-w-7xl mx-auto">
        <nav className="flex h-[52px]">
          <img
            alt=""
            className="w-[200px]"
            src="https://d3a9idtyc0vr09.cloudfront.net/getsmartinsights.com/wp-content/themes/getsmartinsights/assets/img/logo.svg"
          />
          <div className="grow"></div>
          <ul className="text-white flex items-center gap-6">
            {navs.map((nav) => (
              <li key={nav} className="text-white">
                {nav}
              </li>
            ))}
            <li>
              <img
                alt="search"
                className="w-[26px] h-[26px]"
                src="https://d3a9idtyc0vr09.cloudfront.net/getsmartinsights.com/wp-content/themes/getsmartinsights/assets/img/search.svg"
              />
            </li>
          </ul>
        </nav>
      </div>
      {/* hero */}
      <div className="py-10 max-w-7xl mx-auto grid grid-rows-2 grid-cols-[2fr,1fr] gap-x-24 text-white text-5xl">
        <div className="row-start-1 row-end-3 place-items-center space-y-4">
          <p>Here’s What One Should Know About the Volvo XC60</p>
          <img
            alt=""
            src="https://d2hg8ctx8thzji.cloudfront.net/getsmartinsights.com/wp-content/uploads/2023/11/HeresWhatOneShouldKnowAbouttheVolvoXC60-768x511.jpg"
          />
          <p className="text-3xl">
            <span className="text-6xl font-bold pr-6">01</span>
            Featured Story
          </p>
        </div>
        <div className="">
          <p className="text-3xl">
            <span className="text-6xl font-bold pr-6">02</span>
            Most Popular
          </p>
          <img
            alt=""
            className="w-full"
            src="https://d2hg8ctx8thzji.cloudfront.net/getsmartinsights.com/wp-content/uploads/2023/10/9FoodsThatHelpManageLupus-768x511.jpg"
          />
          <div className="text-xl">
            <p>9 Foods That Help Manage Lupus</p>
            <p className="text-[#0000ee]">Read More</p>
          </div>
        </div>
        <div>
          <img
            alt=""
            className="w-full"
            src="https://d2hg8ctx8thzji.cloudfront.net/getsmartinsights.com/wp-content/uploads/2023/10/Top4AICoursesinMexicoandTipstoChoosetheRightOne-768x512.jpg"
          />
          <div className="text-xl">
            <p>Top 4 AI Courses in Mexico and Tips to Choose the Right One</p>
            <p className="text-[#0000ee]">Read More</p>
          </div>
        </div>
      </div>
    </header>
  )
}

const Trending = () => {
  const list = [
    {
      title: 'Key Things to Know About Hospital Bed Prices',
      img: 'https://d2hg8ctx8thzji.cloudfront.net/getsmartinsights.com/wp-content/uploads/2023/10/KeyThingstoKnowAboutHospitalBedPrices-768x512.jpg',
      link: ''
    },
    {
      title: '8 Coveted Project Management Degrees and Courses in Mexico',
      img: 'https://d2hg8ctx8thzji.cloudfront.net/getsmartinsights.com/wp-content/uploads/2023/10/8CovetedProjectManagementDegreesandCoursesinMexico-768x512.jpg',
      link: ''
    },
    {
      title: 'Best Treatment Options for Atopic Dermatitis',
      img: 'https://d2hg8ctx8thzji.cloudfront.net/getsmartinsights.com/wp-content/uploads/2023/10/BestTreatmentOptionsforAtopicDermatitis-768x512.jpg',
      link: ''
    }
  ]

  return (
    <div className="pl-[calc((100vw-(1280px+30px))/2)]">
      <div className="shadow-[0_0_14px_0_rgba(211,209,209,0.5)] mt-[60px] flex py-8 pl-[130px] relative">
        <p className="absolute left-0 top-[calc(50%-18px)] -rotate-90 font-black text-3xl text-[#0b1d66]">
          TRENDING
        </p>
        <ul className="flex gap-4">
          {list.map(({ title, img, link }) => (
            <li key={title} className="flex gap-4 items-center">
              <img src={img} alt={title} className="h-40" />
              <div>
                <p>{title}</p>
                <a href={link}>Read More</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Categories = () => {
  const list = [
    {
      title: 'HOME DECOR',
      img: 'https://d3a9idtyc0vr09.cloudfront.net/getsmartinsights.com/wp-content/themes/getsmartinsights/assets/img/home.jpg',
      link: ''
    },
    {
      title: 'PET SUPPLIES',
      img: 'https://d3a9idtyc0vr09.cloudfront.net/getsmartinsights.com/wp-content/themes/getsmartinsights/assets/img/pet.jpg',
      link: ''
    },
    {
      title: 'Cell Phones',
      img: 'https://d3a9idtyc0vr09.cloudfront.net/getsmartinsights.com/wp-content/themes/getsmartinsights/assets/img/cellphone.jpg',
      link: ''
    },
    {
      title: 'Finance',
      img: 'https://d3a9idtyc0vr09.cloudfront.net/getsmartinsights.com/wp-content/themes/getsmartinsights/assets/img/finance.jpg',
      link: ''
    },
    {
      title: 'TECHNOLOGY',
      img: 'https://d3a9idtyc0vr09.cloudfront.net/getsmartinsights.com/wp-content/themes/getsmartinsights/assets/img/technology.jpg',
      link: ''
    }
  ]

  return (
    <div className="flex h-[320px] max-w-7xl mt-[60px] mx-auto">
      <ul className="flex gap-[19px] w-full">
        {list.map(({ title, img }) => (
          <li
            key={title}
            className="cursor-pointer basis-1/5 h-full flex justify-center items-center hover:h-[350px] hover:-translate-y-[30px] transition-all duration-200 ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-white text-[10px] py-[11px] px-[15px] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.42),rgba(0,0,0,0))] backdrop-blur-sm">
              <p>{title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Header />
      <Trending />
      <Categories />
      <div className="h-[50vh]"></div>
    </>
  )
}
