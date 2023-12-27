import { Avatar } from 'actify'

type TLink = {
  name: string
  link: string
  avatar: string
}[]

const links: TLink = [
  {
    name: 'Josh Comeau',
    link: 'https://www.joshwcomeau.com/',
    avatar: 'https://www.joshwcomeau.com/assets/favicon.png?v=4'
  },
  {
    name: '微6g',
    link: 'https://www.v6g.cn',
    avatar: 'https://www.v6g.cn/content/uploadfile/202303/ad7b1677767872.jpg'
  },
  {
    name: 'liam',
    link: 'https://aiyang.vercel.app/',
    avatar: 'https://aiyang.vercel.app/favicon/favicon.ico'
  },
  {
    name: 'Yellowwei',
    link: 'https://hw.yellowwei.cn/',
    avatar:
      'https://hw.yellowwei.cn/_next/image?url=https%3A%2F%2Fwww.yellowwei.cn%2Fimg%2F0cf11687-8451-4f34-b06d-3306b527dc8a.jpg&w=256&q=95'
  },
  {
    name: 'Innei',
    link: 'https://innei.in/',
    avatar: 'https://innei.ren/api/v2/objects/avatar/d5obusvl8ihmamw5qu.png'
  },
  {
    name: 'Choi Yang',
    link: 'https://chodocs.cn/',
    avatar:
      'https://i2.hdslb.com/bfs/face/f7f7017c3c3e9d5341a1275e71e8530a269d273d.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif'
  },
  {
    name: 'Anthony Fu',
    link: 'https://antfu.me/',
    avatar: 'https://antfu.me/favicon.svg'
  },
  {
    name: 'Dimples',
    link: 'https://www.dimples.top/',
    avatar:
      'https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/img/QQ%E5%9B%BE%E7%89%8720200613022516.jpg'
  },
  {
    name: '归宿网',
    link: 'https://www.guisu.xyz/',
    avatar: 'https://avatars.githubusercontent.com/u/62182035?s=200&v=4'
  },
  {
    name: 'cosarty',
    link: 'http://cosarty.cn/',
    avatar: 'http://cosarty.cn/cxn.png'
  },
  {
    name: 'Xiaojun Zhou',
    link: 'https://www.xiaojun.im/posts',
    avatar: 'https://www.xiaojun.im/avatar.jpg'
  },
  {
    name: 'ChenNan',
    link: 'https://heycn.cn/',
    avatar: 'https://heycn.cn/images/avatar.png'
  },
  {
    name: 'nano71',
    link: 'https://nano71.com/',
    avatar: 'https://avatars.githubusercontent.com/u/80870408?s=96&v=4'
  },
  {
    name: 'guangzan',
    link: 'https://www.cnblogs.com/guangzan',
    avatar: 'https://avatars.githubusercontent.com/u/43458667?s=96&v=4'
  },
  {
    name: 'dy-xiaodong2022',
    link: 'https://fastjs.dev',
    avatar: 'https://avatars.githubusercontent.com/u/84657208?v=4'
  }
]

export default function Links() {
  return (
    <div className="max-w-7xl mx-auto">
      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
        {links.map((link) => (
          <li
            key={link.name}
            className="bg-inverse-surface/10 dark:bg-surface/10 hover:bg-inverse-surface/40 dark:hover:bg-surface/40 p-2 rounded text-center"
          >
            <a href={link.link} target="_blank">
              <Avatar alt={link.name} src={link.avatar} />
              <p className="text-lg font-black truncate" title={link.name}>
                {link.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
