import recordListModel from '@/models/recordListModel';

export default {
    //record仓库
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => {
        recordListModel.creat(record);
    },
}