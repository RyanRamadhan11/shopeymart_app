import { useEffect, useState } from "react";
import ImgDefault from "../../assets/images/default-img.png";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Moment from "moment";
// import { updateFilmById } from "../../services/Film";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

export const ModalUpdateFilm = ({
  openModal,
  setOpenModal,
  setTrigger,
  prevUpdateFilm,
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.id) {
      errors.id = "id cannot empety";
    }
    if (!values.title) {
      errors.title = "title is required!";
    }
    if (values.genre.trim() === "") {
      errors.genre = "genre is required!";
    }
    if (!values.release_date) {
      errors.release_date = "realese date is required!";
    }
    if (!values.director) {
      errors.director = "director is required!";
    }
    if (!values.imagePath) {
      errors.imagePath = "image path is required!";
    }
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      title: "",
      genre: "",
      release_date: "",
      director: "",
      imagePath: "",
      admin_id: 0,
    },
    validate,
    onSubmit: async (values) => {
    //   const responseStatus = await updateFilmById(values);
    //   if (responseStatus == 200) {
    //     toast.success("Update film success");
    //   } else {
    //     toast.error("Failed update film");
    //   }
    //   setTrigger(Math.random());
    //   setOpenModal(false);
    },
  });
  useEffect(() => {
    if (openModal && prevUpdateFilm) {
      formik.setValues(prevUpdateFilm);
    }
  }, [openModal, prevUpdateFilm]);

  return (
    <>
      <ToastContainer />
      {openModal ? (
        <div
          className="position-fixed d-flex align-items-center justify-content-center"
          style={{
            zIndex: "20",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="bg-white p-4 rounded">
            <div className="d-flex justify-content-center">
              <h5>Update Film</h5>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="p-4" style={{ gap: "4px" }}>
                <h6>Title: </h6>
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="title"
                  className="px-5 py-1 rounded"
                  onChange={formik.handleChange}
                  value={formik?.values?.title}
                />
                {formik.errors.title ? <div>{formik.errors.title}</div> : ""}
              </div>
              <div className="p-4">
                <h6>Genre: </h6>
                <input
                  required
                  type="text"
                  name="genre"
                  placeholder="genre"
                  className="px-5 py-1 rounded"
                  onChange={formik.handleChange}
                  value={formik?.values?.genre}
                />
                {formik.errors.genre ? <div>{formik.errors.genre}</div> : ""}
              </div>
              <div className="p-4">
                <h6>Realese date: </h6>
                <DatePicker
                  required
                  onChange={formik.handleChange}
                  value={formik?.values?.release_date}
                  name="release_date"
                />
                {formik.errors.release_date ? (
                  <div>{formik.errors.release_date}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="p-4">
                <h6>Title: </h6>
                <input
                  required
                  type="text"
                  name="director"
                  placeholder="director"
                  className="px-5 py-1 rounded"
                  onChange={formik.handleChange}
                  value={formik?.values.director}
                />
                {formik.errors.director ? (
                  <div>{formik.errors.director}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="p-4">
                <h6>Image: </h6>
                <input
                  required
                  type="text"
                  name="imagePath"
                  placeholder="image"
                  className="px-5 py-1 rounded"
                  onChange={formik.handleChange}
                  value={formik.values?.imagePath}
                />
                {formik.errors.imagePath ? (
                  <div>{formik.errors.imagePath}</div>
                ) : (
                  ""
                )}
                <div className="d-flex justify-content-center mt-3 rounded">
                  <img
                    src={
                      formik.values.imagePath
                        ? formik.values.imagePath
                        : ImgDefault
                    }
                    alt=""
                    style={{ width: "250px", height: "200px" }}
                  />
                </div>
              </div>
              <div className="px-4" style={{ gap: "20px" }}>
                <button
                  className="btn btn-primary"
                  onClick={() => setOpenModal(false)}
                >
                  Close
                </button>
                <button
                  className="btn btn-success "
                  style={{ marginLeft: "20px" }}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
