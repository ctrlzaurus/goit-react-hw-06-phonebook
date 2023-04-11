import { useDispatch, useSelector } from 'react-redux';
import { performFilter } from 'redux/slice/filterSlise';

import d from './filterContacts.module.css';

const FilterContacts = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const hendleFilter = e => {
        dispatch(performFilter(e.currentTarget.value));
    };

    return (
        <div className={d.conteinerFilter}>
            <p className={d.titleDesc}>Find contacts by name</p>
            <input 
                type='text' 
                name='search'
                onChange={hendleFilter}
                value={filter}
                className={d.input}
            />
        </div>
    )
}

export default FilterContacts;