//基础
type RootState = {
    recordList: RecordItem[],      //Money四个组件的值 为数组类型
    createTagError:Error|null,      //创建标签失败
    tagList: Tag[],                //标签列表
    currentTag?: Tag                //当前的标签
}

//为Money四个组件值的类型
type RecordItem = {
    tags: Tag[]          //标签数组
    notes: string         //备注
    type: string           //支出与收入 ‘+’&‘-’
    amount: number         //计算器的值
    createdAt?: string  // 类
}


type Tag = {
    id: string;
    name: string;
}


// type TagListModel = {
//     data: Tag[]
//     fetch: () => Tag[]
//     create: (name: string) => 'success' | 'duplicated' // 联合类型
//     update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
//     remove: (id: string) => boolean
//     save: () => void
// }

interface Window {}