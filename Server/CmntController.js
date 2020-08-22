module.exports = {
  addComment: async (req, res) => {
    const { body } = req.body;
    const db = req.app.get("db");
    const posts = await db.comments.add_comment([
      body,
    ]);
    res.status(200).send(comments);
  },
  editComment: async (req,res) => {
    const { body } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");

    const comments = await db.comments.edit_comment({
      body,
      comment_id: id,
    });

    res.status(200).send(comments);
  },
  deleteComment: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    const comments = await db.comments.delete_comment([id]);

    res.status(200).send(comments);
  },
};