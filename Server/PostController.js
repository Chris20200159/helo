module.exports = {
  getPosts: async (req,res) => {
    const db = req.app.get("db");
    const posts = await db.posts.get_posts();
    res.status(200).send(posts);
  },
  addPost: async (req, res) => {
    const { body, img } = req.body;
    const db = req.app.get("db");
    const posts = await db.posts.add_post([
      body,
      img,
    ]);
    res.status(200).send(posts);
  },
  editPost: async (req,res) => {
    const { body, img } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");

    const posts = await db.posts.edit_post({
      body,
      img,
      post_id: id,
    });

    res.status(200).send(posts);
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    const posts = await db.posts.delete_post([id]);

    res.status(200).send(posts);
  },
};