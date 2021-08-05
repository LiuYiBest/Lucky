import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    //record仓库
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => {
        recordListModel.creat(record);
    },

    //tag仓库
    tagList: tagListModel.fetch(),
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag: (name: string) => {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
            window.alert('标签名已存在，请重新输入');
        } else if (message === 'success') {
            window.alert('成功保存');
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    },
};

export default store;