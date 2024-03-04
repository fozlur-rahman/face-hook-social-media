import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../commons/Field";

const LoginFrom = () => {
    const navigate = useNavigate();

    const { auth, setAuth } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    // login data  post with jwt token
    const submitForm = async (formData) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
                formData
            );

            const { user, token } = response.data;
            if (response.status === 200) {
                if (token) {
                    const authToken = token.token;
                    const refreshToken = token.refreshToken;
                    setAuth({ user, authToken, refreshToken });
                    navigate("/");
                }
            }
        } catch (error) {
            console.log(error);
            setError("root.random", {
                type: "random",
                message: `user with email ${formData.email} is not found`,
            });
        }
    };

    return (
        <form
            className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
            onSubmit={handleSubmit(submitForm)}
        >
            <Field label="Email" error={errors.email}>
                <input
                    {...register("email", { required: "Email must be required" })}
                    className={`auth-input ${
                        !!errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                />
            </Field>
            <Field label="Password" error={errors.password}>
                <input
                    {...register("password", {
                        required: "Password must be required",
                        minLength: {
                            value: 8,
                            message: "Your password must be 8 chractor",
                        },
                    })}
                    className={`auth-input ${
                        !!errors.password ? "border-red-500" : "border-gray-200"
                    }`}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                />
                {}
            </Field>
            <p>{errors?.root?.random?.message}</p>
            <p>
                saadh392@mail.com <br /> bestPassw0rd
            </p>
            <Field>
                <button
                    className="auth-input bg-frGreen font-bold text-deepDark transition-all hover:opacity-90"
                    type="submit"
                >
                    Login
                </button>
            </Field>
        </form>
    );
};

export default LoginFrom;
