import recordStore from '@/lib/recordStore';
import tagStore from '@/lib/tagStore';


const store = {
    ...recordStore,
    ...tagStore,
};

export default store;