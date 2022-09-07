import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func
};
PostFilterForm.defaultProps = {
    onSubmit: null
}


function PostFilterForm(props) {
    const { onSubmit } = props
    const [search, setSearch] = useState('');
    const typingTimeoutRef = useRef(null)


    function handleSearchChange(e) {
        const value = e.target.value
        setSearch(value);
        if (!onSubmit) return;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                search: value
            }
            onSubmit(formValues)
        }, 300);


    }
    return (
        <form >
            <input type="text" value={search} onChange={handleSearchChange} />
        </form>
    );
}

export default PostFilterForm;