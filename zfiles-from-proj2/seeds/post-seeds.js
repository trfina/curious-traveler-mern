const { Post } = require('../models');

const postdata = [
  {
    title: 'Beechcreek Botanical Gardens and Butterfly House',
    post_url: 'https://www.beechcreekgardens.org/',
    user_id: 5
  },
  {
    title: 'Cooperrider Kent Bog State Nature Preserve',
    post_url: 'https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/cooperrider-kent-bog-state-nature-preserve',
    user_id: 5
  },
  {
    title: 'Leetonia Beehive Coke Ovens Park',
    post_url: 'https://ohio.org/things-to-do/destinations/leetonia-beehive-coke-ovens-park',
    user_id: 5
  },
  {
    title: 'Mushroom House, Cleveland, OH',
    post_url: 'https://thevalemagazine.com/20',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
