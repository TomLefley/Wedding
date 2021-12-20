module.exports = {
  async redirects() {
    return [
      {
        source: '/photos',
        destination: 'https://photos.app.goo.gl/7gasDVU8G6DtM6Ho7',
        permanent: true
      },
    ]
  },
};