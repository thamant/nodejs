const generateMessage = text => {
  return {
    text,
    createdAt: new Date().getTime()
  };
};

const generateLocation = url => {
  return {
    url: `https://google.com/maps?q=${url}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {
  generateMessage,
  generateLocation
};
