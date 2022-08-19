

interface ITool {
  imgUrl?: string;
  name: string;
  url?: string;
}

export const tools: ITool[] = [
  {
    name: 'BLS Keygen',
    url: 'https://www.bls-keygen.com/',
    imgUrl: '1.png',
  },
  {
    name: 'Simple Serialize',
    url: 'https://www.simpleserialize.com/',
    imgUrl: '2.png',
  },
  {
    name: 'ENR App',
    url: 'https://enr-viewer.com/',
    imgUrl: '3.png',
  },
  {
    name: 'Flare CLI',
    url: 'https://github.com/ChainSafe/lodestar/tree/unstable/packages/flare',
    imgUrl: '4.png',
  },
];
