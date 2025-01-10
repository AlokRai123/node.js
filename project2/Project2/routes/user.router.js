const express = require("express")
const {handleGetAllUsers,
     handleGetUserById,handleUpdateUserById,
     handleDeleteUserById,CreateUserById} = require("../controllers/user.controller")

const router = express.Router();


router.get('/')
  .get(handleGetAllUsers)
  .post(CreateUserById);


router.route("/:id")
   .get(handleGetUserById)
   .patch(handleUpdateUserById)
   .delete(handleDeleteUserById);



router.get("/:id" , handleGetUserById)




module.exports = router;