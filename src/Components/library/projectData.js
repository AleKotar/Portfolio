import HitaMole from '../Assets/kret.png'
import Pomeranian from '../Assets/pomeranian.png'
import WydawnictwoNaukowe from '../Assets/wydawnictwonaukowe.png'
import Memo from '../Assets/memo.png'

const projectData = [
  {
    id: 1,
    title: 'Pomeranian project',
    img: Pomeranian,
    techWords: ['React', 'JavaScript', 'CSS', '...'],
    externalLink: 'https://github.com/AleKotar/pomeranian-bolierplate-public',
    description:
      'Extensive project with ton of simple to advanced level coding exercises.',
  },
  {
    id: 2,
    title: 'Hit a mole',
    img: HitaMole,
    techWords: ['React', 'JavaScript', 'CSS'],
    externalLink: 'https://github.com/AleKotar/pomeranian-bolierplate-public',
    description:
      'Simple game app based on popular HIT THE MOLE GAME, with counter, start, stop and timer.',
  },
  {
    id: 3,
    title: 'Memo game',
    img: Memo,
    techWords: ['React', 'JavaScript', 'CSS'],
    externalLink: 'https://github.com/AleKotar/pomeranian-bolierplate-public',
    description:
      'Game app based on popular MEMO GAME, it shuffles letters, that need to be remembered',
  },
  {
    id: 4,
    title: 'Wydawnictwo naukowe',
    img: WydawnictwoNaukowe,
    techWords: ['UX/UI', 'CSS', 'Wordpress'],
    externalLink: 'Not available for outside viewers',
    description:
      'Site built on wordpress with integrated WooCommerce, for selling books.',
  },
]

export default projectData
