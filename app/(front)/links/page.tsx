import { Avatar } from 'actify'

const links = [
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
