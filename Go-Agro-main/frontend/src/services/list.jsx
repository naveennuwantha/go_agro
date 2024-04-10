import { sample_lists } from '../data';

export const getAll = async () => sample_lists;

export const search = async searchTerm =>
    sample_lists.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
