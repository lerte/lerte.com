export default () => {
  const leftImg = 'https://i0.hdslb.com/bfs/banner/d944eca06e3d6a391ea91a163cfab2669e6124c4.png@976w_550h_1c_!web-home-carousel-cover.avif'
  const rightItem = [
    {
      img: 'https://i2.hdslb.com/bfs/archive/01766ec15b717ce3803c001a4d84a1c07dbf0b30.jpg@672w_378h_1c_!web-home-common-cover.avif',
      title: '宇宙是虚拟的',
      up: '牧场机神',
      time: '14小时前'
    },
    {
      img: 'https://i2.hdslb.com/bfs/archive/9250c2e24d90cce052a65cbba5599bee15488add.jpg@672w_378h_1c_!web-home-common-cover.avif',
      title: '科技树点错的后果会有多严重？经典科幻小说《异星歧途》',
      up: '幻海航行',
      time: '14小时前'
    },
    {
      img: 'https://i1.hdslb.com/bfs/archive/eddd733baca875f5648b534c5ce561254f137efe.jpg@672w_378h_1c_!web-home-common-cover.avif',
      title: '连续2个版本冲上T1？冷门大杀器！吸血鬼没你想像得难！猩红收割者弗拉基米尔大型攻略教学【女友会学院-19】',
      up: '寒瞳不是喊痛',
      time: '6-1'
    },
    {
      img: 'https://i2.hdslb.com/bfs/archive/d60e266fe7f72e2590145e3412b1f7f3245527fb.jpg@672w_378h_1c_!web-home-common-cover.avif',
      title: '没有人的讲述是可靠的，隐瞒、欺骗、误解、遗忘、疏忽、错判、误认、异想…',
      up: '神遁局',
      time: '5-15'
    },
    {
      img: 'https://i1.hdslb.com/bfs/archive/270bd27828aea8c53b20ab2a20df0c02d9409c82.jpg@672w_378h_1c_!web-home-common-cover.avif',
      title: '也许，它真的存在！',
      up: '空间一号X',
      time: '5-19'
    },
    {
      img: 'https://i2.hdslb.com/bfs/archive/c5d58e8db443519da94e87289b5738d261f3b299.jpg@672w_378h_1c_!web-home-common-cover.avif',
      title: '【云顶S9】神超红莲新赛季全面解读，一个视频上手S9！',
      up: 'GoDlike_神超',
      time: '5-31'
    }
  ]
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2 bg-white">
        <div className="lg:basis-1/2 xl:basis-2/5">
          <img src={leftImg} className="h-full rounded-lg" />
        </div>
        <div className="lg:basis-1/2 xl:basis-3/5 flex gap-2 flex-wrap max-xl:[&>*:nth-child(5)]:hidden max-xl:[&>*:nth-child(6)]:hidden">
          {rightItem.map((item, index) => (
            <div key={index} className="lg:basis-[calc(50%-0.5rem)] xl:basis-[calc(33.33%-0.5rem)]">
              <img src={item.img} className="rounded-lg" />
              <div className="flex flex-col flex-1 justify-between">
                <p className="line-clamp-2 text-black">{item.title}</p>
                <p className="text-gray-500 text-sm">
                  <span>{item.up}</span>.<time>{item.time}</time>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
