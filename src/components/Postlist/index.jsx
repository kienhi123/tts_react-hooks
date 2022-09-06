import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array

};
PostList.defaultProps = {
    posts: [],
};
function PostList(props) {
    const { posts } = props;
    return (
        <ui className='post-list'>
            {posts.map(post => (
                <li key={post.id}>
                    {post.name}
                </li>
            ))}
        </ui>

    );
}

export default PostList;