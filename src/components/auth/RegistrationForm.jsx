import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../commons/Field";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const submitForm = async (formData) => {
        console.log(formData);
        try {
            let response = await axios.post(
                `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
                formData
            );
            if (response.status === 201) {
                navigate("/login");
            }
        } catch (error) {
            setError("root.random", {
                type: "random",
                message: `You have an error ${error?.root?.random?.message}`,
            });
        }
    };
    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
        >
            <Field label="First Name" error={errors.firstName}>
                <input
                    {...register("firstName", {
                        required: "First Name must be required",
                    })}
                    className={`auth-input ${
                        !!errors.firstName ? "border-red-500" : "border-gray-200"
                    }`}
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter First Name"
                />
            </Field>

            <Field label="Last Name" error={errors.lastName}>
                <input
                    {...register("lastName", {
                        required: "First Name must be required",
                    })}
                    className={`auth-input ${
                        !!errors.lastName ? "border-red-500" : "border-gray-200"
                    }`}
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Last Name"
                />
            </Field>

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
                    placeholder="Enter Password"
                />
            </Field>
            <p>{errors?.root?.random?.message}</p>
            <Field>
                <button
                    className="auth-input bg-frGreen font-bold text-deepDark transition-all hover:opacity-90"
                    type="submit"
                >
                    Registration Now
                </button>
            </Field>
        </form>
    );
};

export default RegistrationForm;
