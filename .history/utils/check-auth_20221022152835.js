module.exports = (context) => {
  const headers = context.req.headers.authorization;
  if (headers) {
    const token = headers.split('Bearer: ')[0];
  }
};
