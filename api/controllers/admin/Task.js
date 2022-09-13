import Task from '../../models/Task.js'


// all Tasks 
export const allTask = async (req, res) => {
    try {
        const res = await Task.find()
        res.status(200).json(res)
    } catch (error) {
        res.status(500).json(error.message)
    }

}