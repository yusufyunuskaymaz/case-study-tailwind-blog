import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePost, deletePost } from "../features/blogSlice";
import Comments from "./Comments";
import { BsTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

export default function PostDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deleteSinglePost = async () => {
    if (window.confirm("Are you sure to delete this post")) {
      const id = state.id;
      const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const res = await axios.delete(URL).then((res) => {
        console.log(res, "silindi");
        dispatch(deletePost(id));
        navigate("/");
      });
    }
  };
  const updateSinglePost = async () => {
    const data = {
      id: state.id,
      title: title,
      body: body,
      userId: state.userId,
    };
    const URL = "https://jsonplaceholder.typicode.com/posts/1";
    const res2 = await axios.put(URL, data).then((res) => {
      if (res.status === 200) {
        dispatch(updatePost(data));
        navigate("/");
      }
    });
  };
  const { blog } = useSelector((state) => state.blog);
  console.log(blog, "blog");

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-4 mt-10 md:gap-6">
          <div className="md:col-span-1"></div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form method="GET" onSubmit={(e) => handleSubmit(e)}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                    <div className="p-2 rounded-full mr-4" style={{backgroundColor:"#f4f5f4"}} onClick={()=>navigate(-1)}>
                      <BsArrowLeft size={"1.5em"}  />
                    </div>
                      <h1 className="text-2xl font-bold">Posts</h1>
                    </div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={() => navigate("/post-create")}
                    >
                      <div className="flex items-center">
                        <AiOutlinePlus />
                        <span className="ml-2"> New Post</span>
                      </div>
                    </button>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Title
                    </label>
                    {/* <input
                      type="text"
                      name="first-name"
                      //   value={state.title}
                      id="first-name"
                      defaultValue={state.title}
                      autoComplete="given-name"
                      className="mt-1 block text-2xl w-full font-bold rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                      onChange={(e) => setTitle(e.target.value)}
                    /> */}
                    <textarea
                        id="text"
                        name="first-name"
                        // value={state.body}
                        rows={3}
                        defaultValue={state.title}
                        className="mt-1 resize-none block w-full text-3xl font-bold rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        style={{backgroundColor:"#f4f5f4"}}
                      />
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Detail
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        // value={state.body}
                        rows={7}
                        defaultValue={state.body}
                        className="mt-1 resize-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                        onChange={(e) => setBody(e.target.value)}
                        style={{backgroundColor:"#f4f5f4"}}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex items-center justify-end">
                  <button
                    type="button"
                    className="inline-flex mr-4 justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => deleteSinglePost()}
                  >
                    <div className="flex items-center">
                      <BsTrashFill />
                      <span className="ml-2">Delete</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => updateSinglePost()}
                  >
                    <div className="flex items-center">
                      <MdEdit />
                      <span className="ml-2">Update</span>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <Comments postId={state.id} />
    </>
  );
}
