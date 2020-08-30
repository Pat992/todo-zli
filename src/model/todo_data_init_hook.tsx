import { useEffect } from 'react'
import { useStoreActions } from '../store/StoreModel'

// Call once to get the todo-data
const useTodoInitDataHook = () => {
    const initData = useStoreActions(actions => actions.todoModel.initData)

    useEffect(() => {
        initData()
        console.log("InitModelDataHook called")
    }, [])
}

export default useTodoInitDataHook