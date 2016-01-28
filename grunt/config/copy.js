module.exports = {
  html: {
    expand: true,
    cwd: 'src/templates/',
    src: '*',
    dest: 'public/templates/',
    filter: 'isFile',
    flatten: true,
  },
};
