interface ITool {
  imgUrl?: string;
  name: string;
  url?: string;
}

export const tools:ITool[] = [
  {
    name: "BLS Keygen",
    url: "https://www.bls-keygen.com/",
  },
  {
    name: "Simple Serialize",
    url: "https://www.simpleserialize.com/",
  },
  {
    name: "ENR App",
    url: "https://enr-viewer.com/",
  },
  {
    name: "Flare CLI",
    url: "https://github.com/ChainSafe/lodestar/tree/unstable/packages/flare",
  },
]