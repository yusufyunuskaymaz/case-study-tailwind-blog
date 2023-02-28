import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function PostDetail() {
  const { state } = useLocation();
  const navigate = useNavigate()
  const [title, setTitle] = useState(state.title)
  const [body, setBody] = useState(state.body)

  const updatePost = async ()=>{
    const data = {
        id:state.id,
        title:title,
        body:body,
        userId:state.userId,
    }
    const URL = "https://jsonplaceholder.typicode.com/posts/1"
        const res = await axios.put(URL, data).then((res)=>{
            console.log(res,"cevap2")

        })
  }

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-4 mt-10 md:gap-6">
          <div className="md:col-span-1"></div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
            //   method="GET"
              //    onSubmit={(e)=>handleSubmit(e)}
            >
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <button className="mr-2 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={()=>navigate(-1)}
                      >
                        Back
                      </button>
                      <h1>Post Detail</h1>
                    </div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={()=>navigate("/post-create")}
                    >
                      New Post
                    </button>
                  </div>

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
                    //   value={state.title}
                      id="first-name"
                      defaultValue={state.title}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e)=>setTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                          onChange={(e)=>setBody(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex mr-4 justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    // onClick={()=>postData()}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={()=>updatePost()}
                  >
                    Update
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
