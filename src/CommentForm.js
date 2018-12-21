import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = props => (
    <form onSubmit={props.submitComment}>
        <input
            type="text"
            name="author"
            placeholder="Your name..."
            value={props.author}
            onChange={props.handleChange}
        />
        <input 
            type="text"
            name="text"
            placeholder="Your comment..."
            value={props.text}
            onChange={props.handleChange}
        />
    </form>
);

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    text: PropTypes.string,
    author: PropTypes.string,
};

CommentForm.defaultProps = {
    text: '',
    author: '',
};

export default CommentForm;