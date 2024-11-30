import styles from './styles.module.scss';
import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiBoxList } from 'react-icons/ci';
import classNames from 'classnames';
import { OurShopContext } from '@contexts/OurShopProvider';
import { useContext } from 'react';

function Filter() {
    const { filterContainer, iconBox, filterBox, selectBox, sort, show } = styles;
    const { sortOptions, showOptions, setSortId, setShowId, setIsShowGrid } = useContext(OurShopContext);

    const handleGetValueSeclect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else if (type === 'show') {
            setShowId(value);
        }
    };

    const handleShowGrid = (type) => {
        if (type === 'grid') {
            setIsShowGrid(true);
        } else if (type === 'list') {
            setIsShowGrid(false);
        }
    };

    return (
        <div className={filterContainer}>
            <div className={filterBox}>
                <select
                    className={classNames(selectBox, sort)}
                    onChange={(e) => handleGetValueSeclect(e.target.value, 'sort')}
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className={iconBox}>
                    <TfiLayoutGrid4
                        fontSize={20}
                        color={'#222'}
                        cursor={'pointer'}
                        onClick={() => handleShowGrid('grid')}
                    />
                    <div style={{ width: '1px', height: '20px', backgroundColor: '#e1e1e1' }}></div>
                    <CiBoxList fontSize={24} color={'#222'} cursor={'pointer'} onClick={() => handleShowGrid('list')} />
                </div>
            </div>
            <div className={filterBox}>
                <span>Show</span>
                <select
                    className={classNames(selectBox, show)}
                    onChange={(e) => handleGetValueSeclect(e.target.value, 'show')}
                >
                    {showOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Filter;
