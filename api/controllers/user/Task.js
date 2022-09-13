import Task from "../../models/Task.js";


//create task
export const addTask = async (req, res, next) => {
    try {
        const body = req.body.body
        body.user_id = req.user.id
        const task = new Task(body)
        await task.save()

        res.status(201).json(task)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}

//get all tasks
export const allTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user_id: req.user.id })
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json(error.message)
    }

}

