export default function Grid(){
  const items = [
    {
      link: 'https://yige.baidu.com/creation',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/9def0f218c570de27ccfd696b4418149.png',
      name: '文心一格\n\n轻松驾驭多种风格，人人皆可“一语成画”',
      desc: '轻松驾驭多种风格，人人皆可“一语成画”'
    },
    {
      link: 'https://k986.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/0a1c79f186a474d7e8617dc3f6d9f351.png',
      name: 'Arti World\n\n免费AI作图，风格多样画质高清，简单易上手',
      desc: '免费AI作图，风格多样画质高清，简单易上手'
    },
    {
      link: 'https://tinywow.com/tools/pdf',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230511/367a1a70981cea72feef4257eb32e616.jpg',
      name: 'TinyWow\n\n免费在线文件转换编辑处理工具',
      desc: '免费在线文件转换编辑处理工具'
    },
    {
      link: 'https://lingjingai.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/a2ecae367f73c844ebe556b2b4014b8a.png',
      name: '灵境AI\n\n在线与AI对话，用AI激发灵感',
      desc: '在线与AI对话，用AI激发灵感'
    },
    {
      link: 'https://js.design/home',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230516/31b38b75827bca44b9de989d65374294.jpg',
      name: '即时设计\n\n可云端编辑的专业级UI设计工具',
      desc: '可云端编辑的专业级UI设计工具'
    },
    {
      link: 'https://www.feishu.cn/product/minutes',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230511/ad0a5fcead5a43ba748271795e158ec4.jpg',
      name: '飞书秒记\n\n智能会议纪要，将会议交流沉淀为知识',
      desc: '智能会议纪要，将会议交流沉淀为知识'
    },
    {
      link: 'https://www.capcut.cn/web',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/70be349f5bd65c9979321d44ba2b874d.png',
      name: '剪映\n\n一站式AI视频编辑器，五分钟极速出片',
      desc: '一站式AI视频编辑器，五分钟极速出片'
    },
    {
      link: 'https://aimwriting.mtutor.engkoo.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/db5669c136e264d624355db7a12c8c0f.png',
      name: '微软爱写作\n\nAI智能作文批改，让人工智能帮你写作',
      desc: 'AI智能作文批改，让人工智能帮你写作'
    },
    {
      link: 'https://aigc.wondershare.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/5c1a5513f68db1b843fe788133618c99.png',
      name: '万兴爱画\n\n生成图片可商用的AI创作平台',
      desc: '生成图片可商用的AI创作平台'
    },
    {
      link: 'http://portal.yjai.art/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/17104ad5239903cc942ae7ec73511615.png',
      name: '意间AI绘画\n\n注册即用的AI绘画，支持网页端和小程序',
      desc: '注册即用的AI绘画，支持网页端和小程序'
    },
    {
      link: 'https://www.wujieai.com/ai',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/bde7ef4dd6de766489e30b774410dc72.png',
      name: '无界\n\n无门槛上手AI艺术创作，多种风格主题',
      desc: '无门槛上手AI艺术创作，多种风格主题'
    },
    {
      link: 'https://www.gaoding.com/ai',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/f1770c06ae924b9390fdb9b4b0fe3aaf.png',
      name: '稿定AI绘画\n\nAI设计辅助工具，支持图片照片转AI、线稿上色',
      desc: 'AI设计辅助工具，支持图片照片转AI、线稿上色'
    },
    {
      link: 'https://draft.art/drawing',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/b518dcef0a95fafd8f6b8cf98eeb85c6.png',
      name: 'Draft\n\n一键AI绘图，人人都能成为艺术家',
      desc: '一键AI绘图，人人都能成为艺术家'
    },
    {
      link: 'https://printidea.art/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/2191f142c2501828371ffe99845b4361.png',
      name: '造梦日记\n\n支持AI绘图、模型定制和AI鉴图',
      desc: '支持AI绘图、模型定制和AI鉴图'
    },
    {
      link: 'https://www.logosc.cn/?coupon=ainavpro',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/42edb5c6cc871324251ed806c329f9a2.png',
      name: '标小智\n\nLogo一键生成器，设计Logo不求人',
      desc: 'Logo一键生成器，设计Logo不求人'
    },
    {
      link: 'https://stablediffusionweb.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/16a277cd92f451cef66a51265e4d5cde.png',
      name: 'Stable Diffusion\n\n免费开源的多功能AI绘图模型',
      desc: '免费开源的多功能AI绘图模型'
    },
    {
      link: 'https://luban.aliyun.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/4ca05dcdc851a58031e526cae0189e04.png',
      name: '鹿班\n\n给淘宝商家的智能设计平台，可快速批量出图',
      desc: '给淘宝商家的智能设计平台，可快速批量出图'
    },
    {
      link: 'https://halfwork.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/c749d62b2a24f78fab9d8e4c91c8e692.png',
      name: 'HALFWORK事半\n\nAI绘画、AI游戏、视频合成、智能写作',
      desc: 'AI绘画、AI游戏、视频合成、智能写作'
    },
    {
      link: 'https://yiyan.baidu.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230511/e9ae9d4873a5083323a7b64a6983c5fd.jpg',
      name: '文心一言\n\n与人对话互动，协助创作，高效获取信息、知识和灵感',
      desc: '与人对话互动，协助创作，高效获取信息、知识和灵感'
    },
    {
      link: 'https://www.heyfriday.cn/home?ref=plbJW&',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230516/95765badac6bcad93404bfe3c324bd58.jpg',
      name: 'FridayAI写作助手\n\n用喝一口咖啡的时间完成写作',
      desc: '用喝一口咖啡的时间完成写作'
    },
    {
      link: 'https://web.mypitaya.com/discovery',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/bdc2ee4f7da9e7f694e1c7d535e06532.png',
      name: '火龙果写作\n\nAI写作、学术改写、风格润色、校对纠错、论文查重',
      desc: 'AI写作、学术改写、风格润色、校对纠错、论文查重'
    },
    {
      link: 'https://www.writingo.net/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/6d25312f76f413efacf0265ff15e99df.png',
      name: '火山写作\n\n免费AI中英文写作助手',
      desc: '免费AI中英文写作助手'
    },
    {
      link: 'https://www.giiso.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/bfb7db86e7b0d430b73789ef8d719e81.png',
      name: 'Giiso写作\n\nAI智能写作、推荐素材、查重&纠错、敏感词检测',
      desc: 'AI智能写作、推荐素材、查重&纠错、敏感词检测'
    },
    {
      link: 'https://www.langboat.com/portal/ai-content',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/468373982db9cc6409313856d8e7b79b.png',
      name: '澜舟智能创作\n\n智能写小说、营销文案写作、论文助写、配图',
      desc: '智能写小说、营销文案写作、论文助写、配图'
    },
    {
      link: 'https://effidit.qq.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/130d83f824f53f8f2d36d22a6141360c.png',
      name: '腾讯Effidit\n\n腾讯AI写作助手，轻松纠错、文本润色、改写续写',
      desc: '腾讯AI写作助手，轻松纠错、文本润色、改写续写'
    },
    {
      link: 'http://work.xiaobote.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/73de4b73e9801085d199b1b72a36405c.png',
      name: '销博特AI协创\n\n营销助手、智能策划、品宣文案、一键海报',
      desc: '营销助手、智能策划、品宣文案、一键海报'
    },
    {
      link: 'https://tongyi.aliyun.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/6d27086af0ee7dad6a0d211dd4025ae3.png',
      name: '阿里·通义千问\n\n阿里版ChatGPT，能够对话、文字创作、写代码',
      desc: '阿里版ChatGPT，能够对话、文字创作、写代码'
    },
    {
      link: 'https://www.foodwake.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230511/ab062a25b2d85fb132b908e5210ab61b.jpg',
      name: '唤醒食物\n\n可视化为您提供1781种食物的营养成分',
      desc: '可视化为您提供1781种食物的营养成分'
    },
    {
      link: 'https://wenxin.baidu.com/younger/creativeSpace',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/03202a6eb9765c32b6f7e1ae5531b246.png',
      name: '百度创意应用空间\n\n多款AI创意小工具集合，即点即用',
      desc: '多款AI创意小工具集合，即点即用'
    },
    {
      link: 'https://designstripe.com/ai-cards/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/ab5720af1d4b1226289aff05caf0b369.png',
      name: 'AI Cards\n\n只需10秒钟，AI免费帮你画出独一无二的贺卡',
      desc: '只需10秒钟，AI免费帮你画出独一无二的贺卡'
    },
    {
      link: 'https://tinywow.com/tools/pdf',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230511/367a1a70981cea72feef4257eb32e616.jpg',
      name: 'TinyWow\n\n免费在线文件转换编辑处理工具',
      desc: '免费在线文件转换编辑处理工具'
    },
    {
      link: 'https://js.design/home',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230516/31b38b75827bca44b9de989d65374294.jpg',
      name: '即时设计\n\n可云端编辑的专业级UI设计工具',
      desc: '可云端编辑的专业级UI设计工具'
    },
    {
      link: 'https://ai.baidu.com/creativity/main/workbench',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/4c9b40f41b1932b0f11ff5547643ec02.png',
      name: '百度大脑智能创作\n\n几十款智能工具，让创作变得更简单',
      desc: '几十款智能工具，让创作变得更简单'
    },
    {
      link: 'https://chat2doc.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230530/e2a3ee37153c245719fdc63efb1451b3.jpg',
      name: 'Chat2Doc\n\n阅读文档的好帮手',
      desc: '阅读文档的好帮手'
    },
    {
      link: 'https://www.chatpdf.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/6f53c6342c270dcb7498def7c8d6bddc.png',
      name: 'ChatPDF\n\nAI自动解读PDF，再也不用自己读文献了',
      desc: 'AI自动解读PDF，再也不用自己读文献了'
    },
    {
      link: 'https://www.feishu.cn/product/minutes',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230511/ad0a5fcead5a43ba748271795e158ec4.jpg',
      name: '飞书秒记\n\n智能会议纪要，将会议交流沉淀为知识',
      desc: '智能会议纪要，将会议交流沉淀为知识'
    },
    {
      link: 'https://boardmix.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/c8b61c9a249de21c1a15b3370da78199.png',
      name: 'boardmix\n\n面向团队的可视化协作白板',
      desc: '面向团队的可视化协作白板'
    },
    {
      link: 'https://www.notion.so/product',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/519c88d92b0b3ad4e5c1e5a4375ba2ae.png',
      name: 'Notion AI\n\n笔记、任务、维基和数据库的一体式AI协作平台',
      desc: '笔记、任务、维基和数据库的一体式AI协作平台'
    },
    {
      link: 'https://zenvideo.qq.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/8b9598b43f58603f568822fcf69c65a6.png',
      name: '腾讯智影\n\n在线智能视频创作平台，短视频运营必备',
      desc: '在线智能视频创作平台，短视频运营必备'
    },
    {
      link: 'https://onvideo.kuaishou.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/9382440121c4a2fd3d772f6111de823a.png',
      name: '快手云剪\n\n字幕&语音互转、智能封面、直播剪辑',
      desc: '字幕&语音互转、智能封面、直播剪辑'
    },
    {
      link: 'https://miao.wondershare.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/24756c0ef73dcb17e9fe61fc708001b9.png',
      name: '万兴喵影\n\n海量素材，0门槛制作专业视频',
      desc: '海量素材，0门槛制作专业视频'
    },
    {
      link: 'https://virbo.wondershare.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/398ae4c9daf01708f60258b59b86d4ba.png',
      name: '万兴播爆\n\n覆盖不同场景的数字人营销神器',
      desc: '覆盖不同场景的数字人营销神器'
    },
    {
      link: 'https://peiyin.xunfei.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/2ef3d2002cec313e03d8eb6beb7e814a.png',
      name: '讯飞智作\n\n包含多个应用场景，人人都可用的大模型',
      desc: '包含多个应用场景，人人都可用的大模型'
    },
    {
      link: 'https://b.jimmylv.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/3e904131fd3d4212dd3e5cce74afcd0d.png',
      name: 'BiliGPT\n\n一键总结B站音视频内容，让AI替你概括总结',
      desc: '一键总结B站音视频内容，让AI替你概括总结'
    },
    {
      link: 'https://tianyin.163.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/25b50bbbfa36ba27a69c20df9971ede7.png',
      name: '网易天音\n\n网易AI音乐创作工具，编曲、作词、DEMO一站式解决',
      desc: '网易AI音乐创作工具，编曲、作词、DEMO一站式解决'
    },
    {
      link: 'https://podcast.adobe.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/1a9bcac1504ab94b51f97c17763c232c.png',
      name: 'Adobe Podcast\n\n做视频必备！媲美专业录音棚音效',
      desc: '做视频必备！媲美专业录音棚音效'
    },
    {
      link: 'https://www.synthesia.io/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/10c21e65386304efb82c66b6397ba830.png',
      name: 'Synthesia\n\n文本生成虚拟人视频，拍视频终于不用露脸了',
      desc: '文本生成虚拟人视频，拍视频终于不用露脸了'
    },
    {
      link: 'https://motionsound.yoo-ai.com/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/6c601dd0e5aa3ba6f312ace2cc00a383.png',
      name: 'MotionSound\n\n轻量级的AI智能文本转语音工具',
      desc: '轻量级的AI智能文本转语音工具'
    },
    {
      link: 'https://xinghuo.xfyun.cn/',
      icon: 'https://yingshi-stream.2345cdn.net/upload/website/20230511/5eadad07be3f2eaf73c68c16f7d60404.jpg',
      name: '讯飞星火大模型\n\n只需一个指令，懂你所言，答你所问，创你所需，解你所难',
      desc: '只需一个指令，懂你所言，答你所问，创你所需，解你所难'
    },
    {
      link: 'https://techday.sensetime.com/list',
      icon: 'https://yingshi-stream.2345cdn.net/upload/ai/20230510/57e86c5377f426b72a5690fd255c478b.png',
      name: '商汤AI·日日新\n\n生成式AI模型及应用：文生图、数字人、场景/物体…',
      desc: '生成式AI模型及应用：文生图、数字人、场景/物体…'
    }
  ]
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {items.map((item, index) => (
          <a href={item.link} className="group flex items-center gap-4 rounded-md p-4 bg-slate-100 hover:bg-slate-300">
            <img src={item.icon} className="w-10 h-10 rounded-lg" />
            <div className="overflow-hidden">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">{item.name}</p>
              <p className="line-clamp-2 text-xs">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
