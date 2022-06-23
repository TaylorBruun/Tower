import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const CommentSchema = new Schema(
    {
        
        creatorId: {type: ObjectId, ref: 'Account'},
        eventId: {type: ObjectId, ref: 'TowerEvent'},
        description: {type: String, required: true},
        body: {type: String, required: true},
        
    },
    {timestamps: true, toJSON: {virtuals: true}}

)

CommentSchema.virtual('creator',{
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})