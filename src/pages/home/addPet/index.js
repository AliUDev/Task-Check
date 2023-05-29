import React, { useState } from "react";
import "./styles.css";
import { petIcon } from "assets/index";
import { Formik } from "formik";
import { AddPetVS } from "shared/utils/validation";
import { AddPetHelper, addPetMutation } from "./mutation";
import { useMutation } from "@apollo/react-hooks";

function AddPet(props) {
  const { open, handleClose, addPetToState, user } = props;
  const [photoURL, setPhotoUrl] = useState(null);
  const [addPet] = useMutation(addPetMutation);

  const onAddPetSuccessful = (pet) => {
    addPetToState(pet);
    setPhotoUrl(null);
    handleClose();
  };
  const initialValues = {
    name: "",
    type: "",
    picture: null,
  };

  const handleAddPet = async (values, action) => {
    const data2 = {
      name: values.name,
      type: values.type,
      picture: values.picture,
      user: user,
    };
    AddPetHelper(addPet, action, onAddPetSuccessful, data2);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-420">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Pet</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleClose}
              >
                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 home-add-pet-main-container">
              <Formik
                initialValues={initialValues}
                onSubmit={(values, action) => {
                  action.setSubmitting(true);
                  handleAddPet(values, action);
                }}
                validationSchema={AddPetVS}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <>
                    <div className="home-add-pet-details">
                      <div className="home-add-pet-details-img">
                        <img
                          src={photoURL ? photoURL : petIcon}
                          className="home-add-pet-picture"
                        />
                        <div className="home-add-pet-error text-left">
                          {touched.picture && errors.picture
                            ? errors.picture
                            : ""}
                        </div>
                        <input
                          id="pet-picture"
                          name="pet-picture"
                          type={"file"}
                          className="home-add-pet-file-input"
                          onChange={(e) => {
                            setFieldValue("picture", e.target.files[0]);
                            setPhotoUrl(URL.createObjectURL(e.target.files[0]));
                          }}
                        />
                      </div>
                      <div className="home-add-pet-details-inputs">
                        <div className="home-add-pet-details-single-input-container">
                          <input
                            id="name"
                            name="name"
                            type={"text"}
                            placeholder="Enter name of the pet..."
                            onChange={handleChange("name")}
                            value={values.name}
                            className="home-add-pet-details-single-input"
                          />
                          <div className="home-add-pet-error text-left">
                            {touched.name && errors.name ? errors.name : ""}
                          </div>
                        </div>
                        <div className="home-add-pet-details-single-input-container">
                          <input
                            id="type"
                            name="type"
                            type={"text"}
                            placeholder="Enter type of the pet..."
                            onChange={handleChange("type")}
                            value={values.type}
                            className="home-add-pet-details-single-input"
                          />
                          <div className="home-add-pet-error text-left">
                            {touched.type && errors.type ? errors.type : ""}
                          </div>
                        </div>
                        {!isSubmitting ? (
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className="home-add-pet-popup-button"
                          >
                            Submit
                          </button>
                        ) : (
                          <div className="home-add-pet-popup-button">
                            <svg class="animate-spin h-5 w-5 spinner"></svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default AddPet;
