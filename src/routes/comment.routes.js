const {Router} = require('express');

module.exports= function({CommentController}){
 const router = Router();

 router.get("/:commentId",CommentController.get);
 router.get("/:ideaId",CommentController.getIdeaComments);
 router.patch("/:commentId",CommentController.update);
 router.delete("/:userId",CommentController.delete);
 router.post("",CommentController.createComment);


 return router;
 
};