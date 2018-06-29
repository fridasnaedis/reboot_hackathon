const is = {
  code: "is",
  flag: "images/is.svg",
};
const en = {
  code: "en",
  flag: "images/gb.svg",
};

is.nextLanguage = en;
en.nextLanguage = is;

module.exports = {
  is,
  en,
};
