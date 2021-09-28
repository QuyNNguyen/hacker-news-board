const api = `https://hacker-news.firebaseio.com/v0`;
const json = ".json?print=pretty";

//remove dead posts from array of posts
function removeDead(posts) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true);
}

//remove deleted posts from array of posts
function removeDeleted(posts) {
  return posts.filter(({ deleted }) => deleted !== true);
}

//remove non-comment posts from array of posts
function onlyComments(posts) {
  return posts.filter(({ type }) => type === "comment");
}

//remove non-story posts from array of posts
function onlyPosts(posts) {
  return posts.filter(({ type }) => type === "story");
}


// fetch a post story or comment
// @param:  id -  a number
// @returns:  a promise with the post information
export function fetchItem(id) {
  return fetch(`${api}/item/${id}${json}`).then((res) => res.json());
}


// takes ids of post and spits out comment posts
// @param:  ids -  array of numbers 
// @returns:  a promise with array of only COMMENTS posts in json 
export function fetchComments(ids) {
  return Promise.all(ids.map(fetchItem)).then((comments) =>
    removeDeleted(onlyComments(removeDead(comments)))
  );
}


//fetch 50 stories from hackernews
//@param: type - "top" or "new"
//@returns: a promise of 50 hot or new story only posts
export function fetchMainPosts(type) {
  return fetch(`${api}/${type}stories${json}`)
    .then((res) => res.json())
    .then((ids) => {
      if (!ids) {
        throw new Error(`There was an error fetching the ${type} posts.`);
      }

      return ids.slice(0, 50);
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
    .then((posts) => removeDeleted(onlyPosts(removeDead(posts))));
}


//fetchs a user information 
//@param: id - a number
//@returns: a user information (meta data + list of posts)
export function fetchUser(id) {
  return fetch(`${api}/user/${id}${json}`).then((res) => res.json());
}


//fetch an array of posts 
//@param: ids - an array of numbers
//@returns: return a promise with an array of STORY posts 
export function fetchPosts(ids) {
  return Promise.all(ids.map(fetchItem)).then((posts) =>
    removeDeleted(onlyPosts(removeDead(posts)))
  );
}
