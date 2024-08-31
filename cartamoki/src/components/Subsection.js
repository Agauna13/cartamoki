//Subsection.js
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Subsection.module.css';

const Subsection = ({ title, items }) => {
    return (
        <div className={styles.subseccion}>
            <h3>{title}</h3>
            <table className={styles.menuTable}>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.itemName}>{item.name}</td>
                            <td className={styles.itemPrice}>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Subsection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Subsection;


