import axios from "axios";

const EMPLOYEES_REST_API_URL = 'http://localhost:8080/api/v1/blog';
// const EMPLOYEES_REST_API_URL = 'http://localhost:8080/api/v1/blog';

class BlogService {

    getBlogs() {
        return axios.get(EMPLOYEES_REST_API_URL);
    }
}

export default new BlogService();