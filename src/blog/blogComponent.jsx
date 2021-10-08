import React, { useState, useEffect } from 'react';
import blogService from './blogService';



const BlogComponent = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs()
    }, []);

    const getBlogs = () => {
        blogService.getBlogs().then((response) => {
            setBlogs(response.data)
        });
    };

    return (
        <div className="container">

            <h1 className="text-center">Blogs</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map(
                            blog =>
                                <tr key={blog.id}>
                                    <td>{blog.author}</td>
                                    <td>{blog.title}</td>
                                    <td>{blog.blogPost}</td>
                                </tr>
                        )
                    }
                </tbody>

            </table>

        </div>
    );
}

export default BlogComponent;