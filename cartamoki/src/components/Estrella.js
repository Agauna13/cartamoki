// Estrella.js — marca los platos que llevan el nombre de la casa.
import React from 'react';

const Estrella = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 1.7l2.9 6.4 7 .7-5.2 4.7 1.5 6.8L12 16.8l-6.2 3.5 1.5-6.8L2.1 8.8l7-.7z" />
    </svg>
);

export default Estrella;
