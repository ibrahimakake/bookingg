import express from "express";
import { updateRoom,createRoom, deleteRoom,getRoom,getRooms } from "../controllers/room.js";
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()



//CREATE
router.post("/:hotelid", verifyAdmin,createRoom);


//UPDATE

router.put("/:id", verifyAdmin,updateRoom);

//DELETE 
router.delete("/:id/:hotelid", verifyAdmin,deleteRoom);

//GET

router.get("/:id", getRoom);

//GET ALL

router.get("/", getRooms);

/*router.get("/", (req,res)=>{
    res.send("Hello, this is auth endpoint")
})*/

export default router