import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuthAction } from "../Context/AuthProvider";
import { loginUser } from "../Services/loginService";
import { showError } from "../utils/showError";
const LoginForm = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("وارد کردن نام الزامی است")
      .min(6, "حداقل 6 کاراکتر"),
    password: Yup.string().required("وارد کردن رمز عبور الزامی است"),
  });

  const onSubmit = async (values) => {
    const { name, phoneNumber } = values;
    const loginData = {
      name,
      phoneNumber,
    };
    try {
      const { data } = await loginUser(loginData);
      console.log(data);
      setError(null);
      navigate("/");
    } catch (error) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
    },
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="bg-white w-full h-fit container min-w-[20rem] md:min-w-[32rem] max-w-md p-4 mt-4 rounded-lg border border-gray-300 mx-2">
      <form onSubmit={formik.onSubmit}>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label className=" w-full" htmlFor="name">
            نام کاربری
          </label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-gray-500 rounded-lg w-full   p-[2px] px-[5px]"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-red-700 w-full">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label className=" w-full" htmlFor="password">
            رمزعبور
          </label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-gray-500 rounded-lg w-full   p-[2px] px-[5px]"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-700 w-full">{formik.errors.password}</div>
          )}
        </div>
        <button
          disabled={!formik.isValid}
          type="submit"
          className="flex mt-4 items-center rounded-lg  disabled:bg-gray-300 disabled:text-gray-400 justify-center w-full bg-black  py-1 text-white"
        >
          ورود
        </button>
        {error && <div>{showError(error)}</div>}
      </form>
      <div className="w-full mt-2 text-gray-500 hover:text-gray-700">
        <Link to="/signup">هنوز ثبت نام کرده اید ؟</Link>
      </div>
    </div>
  );
};

export default LoginForm;
