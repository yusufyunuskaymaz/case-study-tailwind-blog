import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../features/blogSlice";


export default function CreateNewPost() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { blog } = useSelector((state) => state.blog);
  console.log("blog", blog);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const postData = async () => {
    console.log("first")
    const data = {
      title: title,
      body: body,
      userId: 1,
    };
    const URL = "https://jsonplaceholder.typicode.com/posts";

    const res2 = await axios.post(URL, data).then((res) => {
      if(res.status === 201){
        dispatch(addPost(data));
        navigate("/")
      }
    });
     
  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-4 mt-10 md:gap-6">
          <div className="md:col-span-1"></div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form method="GET" onSubmit={(e) => handleSubmit(e)}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      value={title}
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Body
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        value={body}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setBody(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex mr-5 justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                  <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={()=>postData()}
                  >
                    Create
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
    </>
  );
}