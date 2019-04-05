// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    message: "Title",
    name: 'title',
    type: 'input',
  },
  {
    message: "Publication Date (YYYY-MM-DD)",
    name: 'pubDate',
    type: 'input',
  },
  {
    message: "Last Updated Date (YYYY-MM-DD)",
    name: 'updateDate',
    type: 'input',
  },
];
