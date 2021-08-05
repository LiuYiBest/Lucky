type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?: Date  // 类 / 构造函数
}
type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' //联合类型 success表示成功 duplicated表示标签重复
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean;
    save: () => void
}

interface Window {
    tagList: Tag[];
    findTag:(id:string)=>Tag | undefined;
    createTag: (name: string) => void;
    removeTag:(id:string)=>boolean;
    updateTag:(id:string,name:string)=>'success' | 'not found' | 'duplicated';
}