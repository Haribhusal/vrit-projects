import { Field, Form, Formik } from "formik";
import Posts from "./components/Posts";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [addedPosts, setAddedPosts] = useState(null);
  console.log(addedPosts);
  const postSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Title is Required"),
    body: Yup.string()
      .min(2, "Too Short!")
      .max(500, "Too Long!")
      .required("Body is Required"),
    userId: Yup.number().required("User Id is Required"),
  });

  // useEffect(() => {
  //   async function getData() {
  //     let res = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts/101"
  //     );
  //     console.log(res.data);
  //     setAddedPosts(res.data);
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <section>
        <div className="container p-10">
          <div className="heading">
            <h1 className="text-3xl">Posts</h1>
          </div>
          <div className="addPosts bg-purple-200 p-10 rounded-md my-5">
            <h3 className="text-3xl">Add Post</h3>
            <Formik
              initialValues={{
                title: "",
                body: "",
                userId: "",
              }}
              validationSchema={postSchema}
              onSubmit={(values) => {
                axios
                  .post("https://jsonplaceholder.typicode.com/posts", {
                    title: values.title,
                    body: values.body,
                    userId: values.userId,
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                // console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    name="title"
                    className="input"
                    placeholder="Post Title"
                  />
                  {errors.title && touched.title ? (
                    <div className="error">{errors.title}</div>
                  ) : null}
                  <Field
                    name="body"
                    className="input"
                    type="textarea"
                    placeholder="Post Description"
                  />
                  {errors.body && touched.body ? (
                    <div className="error">{errors.body}</div>
                  ) : null}
                  <Field
                    name="userId"
                    type="number"
                    className="input"
                    placeholder="User Id"
                  />
                  {errors.userId && touched.userId ? (
                    <div className="error">{errors.userId}</div>
                  ) : null}
                  <button className="btn mt-5" type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
            <div className="addedData bg-yellow-300">{}</div>
          </div>
          <Posts />
        </div>
      </section>
    </>
  );
}

export default App;
