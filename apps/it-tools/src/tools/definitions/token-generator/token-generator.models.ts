export function generateToken({
  withUppercase = true,
  withLowercase = true,
  withNumbers = true,
  withSymbols = true,
  length = 64,
  sample = (corpus) => corpus[Math.floor(Math.random() * corpus.length)],
}: {
  withUppercase?: boolean;
  withLowercase?: boolean;
  withNumbers?: boolean;
  withSymbols?: boolean;
  length?: number;
  sample?: (corpus: string[]) => string;
}) {
  const corpus = [
    ...(withUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : []),
    ...(withLowercase ? "abcdefghijklmnopqrstuvwxyz" : []),
    ...(withNumbers ? "0123456789" : []),
    ...(withSymbols ? '.,;:!?./-"\'#{([-|\\@)]=}*+' : []),
  ];

  if(corpus.length === 0) {
    return "";
  }

  let token = "";
  // imperative for loop for performance
  for (let i = 0; i < length; i++) {
    token += sample(corpus);
  }
  return token;
}