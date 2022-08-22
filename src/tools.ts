

interface ITool {
  imgUrl?: string;
  name: string;
  url?: string;
}

export const tools: ITool[] = [
  {
    name: 'BLS Keygen',
    url: 'https://www.bls-keygen.com/',
    imgUrl: 'tooling/1.png',
  },
  {
    name: 'Simple Serialize',
    url: 'https://www.simpleserialize.com/',
    imgUrl: 'tooling/2.png',
  },
  {
    name: 'ENR App',
    url: 'https://enr-viewer.com/',
    imgUrl: 'tooling/3.png',
  },
  {
    name: 'Flare CLI',
    url: 'https://github.com/ChainSafe/lodestar/tree/unstable/packages/flare',
    imgUrl: 'tooling/4.png',
  },
];
