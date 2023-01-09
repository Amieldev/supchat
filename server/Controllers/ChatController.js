import ChatModel from '../Models/ChatModel';

export const createChat=async(req,res)=>{
    const newChat=new ChatModel({
        members:[req.body.senderId,req.body.receiverId]
    });

    try{
        const result=await newChat.save();
        res.status(200).json(result);
    } catch(error){
        res.status(500).json(error);
    }

};

export const userChats=async (req,res)=>{
    try{
        const chat=await ChatModel({
            members:{$in:[req.params.userId]}
        });
        res.send(200).json(chat);
    } catch(error){
        res.status(500).json(error)
    }
};

export const findChat=async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json(error);
    }
}