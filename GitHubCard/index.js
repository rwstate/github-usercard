/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const newCard = userInfo => {
  // create html elements
  let card = document.createElement('div');
  let avatar = document.createElement('img');
  let cardContent = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  let github = document.createElement('a');

  // create HTML structure
  card.appendChild(avatar);
  card.appendChild(cardContent);
  cardContent.appendChild(name);
  cardContent.appendChild(username);
  cardContent.appendChild(location);
  cardContent.appendChild(profile);
  cardContent.appendChild(followers);
  cardContent.appendChild(following);
  cardContent.appendChild(bio);
  profile.appendChild(github);

  //assign classes
  card.classList.add('card');
  cardContent.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  
  //assign content
  avatar.src = userInfo.avatar_url;
  name.textContent = userInfo.name;
  username.textContent = userInfo.login;
  location.textContent = `Location: ${userInfo.location}`;
  github.href = userInfo.html_url;
  github.textContent = `${userInfo.html_url}`;
  profile.textContent = `Profile: `
  profile.append(github)
  followers.textContent = `Followers: ${userInfo.followers}`;
  following.textContent = `Following: ${userInfo.following}`;
  bio.textContent = userInfo.bio;

  return card;
};

let cardContainer = document.querySelector('.cards')

axios.get('https://api.github.com/users/rwstate')
  .then(response => {
    console.log(newCard(response.data))
    cardContainer.appendChild(newCard(response.data))
  })
  .catch(err => {
    console.log(err)
  })

followersArray.forEach(el => {
  axios.get(`https://api.github.com/users/${el}`)
  .then(response => {
    cardContainer.appendChild(newCard(response.data))
  })
  .catch(err => {
    console.log(err)
  })
})

// let testCard = newCard(myData);

// console.log(testCard);



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// avatar_url: "https://avatars1.githubusercontent.com/u/53626059?v=4"
// bio: "Aspiring full-stack developer"
// blog: ""
// company: null
// created_at: "2019-08-02T20:03:22Z"
// email: null
// events_url: "https://api.github.com/users/rwstate/events{/privacy}"
// followers: 0
// followers_url: "https://api.github.com/users/rwstate/followers"
// following: 0
// following_url: "https://api.github.com/users/rwstate/following{/other_user}"
// gists_url: "https://api.github.com/users/rwstate/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/rwstate"
// id: 53626059
// location: null
// login: "rwstate"
// name: "Ryan State"
// node_id: "MDQ6VXNlcjUzNjI2MDU5"
// organizations_url: "https://api.github.com/users/rwstate/orgs"
// public_gists: 0
// public_repos: 19
// received_events_url: "https://api.github.com/users/rwstate/received_events"
// repos_url: "https://api.github.com/users/rwstate/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/rwstate/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/rwstate/subscriptions"
// type: "User"
// updated_at: "2019-10-02T15:20:16Z"
// url: "https://api.github.com/users/rwstate"