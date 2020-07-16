import app from './app'
// import { post as createPost, put as updatePost, remove as deletePost, getOne as getPost, getAll as getPosts } from "./controllers/post";
import { get as getStudent,getAll as getStudentlist, insert as addStudent} from "./controllers/StudentController";

app.get('/', (req, res) => {
    res.send({
        "liu": "Laureate International Universities"
    })
});

app.get('/stu', getStudent);
app.post('/stu/add', addStudent);
app.get('/stu/all', getStudentlist);
// app.put('/category/:id', updateCategory);
// app.delete('/category/:id', deleteCategory);
//
// app.post('/post', createPost);
// app.get('/post', getPosts);
// app.get('/post/:id', getPost);
// app.put('/post/:id', updatePost);
// app.delete('/post/:id', deletePost);

