import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: 1,
      username: "nileshlagdhir",
      profileImg: "https://avatars.githubusercontent.com/u/17096384?v=4.",
      postImage:
        "https://plus.unsplash.com/premium_photo-1661962783840-dd0f37e90809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      captions: "Nice Image",
    },
    {
      id: 2,
      username: "lagdhirnilesh",
      profileImg: "https://avatars.githubusercontent.com/u/17096384?v=4.",
      postImage:
        "https://images.unsplash.com/photo-1669178170800-965077d2871e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
      captions: "First image of my city",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post 
        key={post.id}
        username={post.username}
        profileImg={post.profileImg}
        postImage={post.postImage}
        caption={post.captions}
        />
      ))}
    </div>
  );
}

export default Posts;
