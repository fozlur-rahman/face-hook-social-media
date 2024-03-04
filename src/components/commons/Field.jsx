import React from "react";

const Field = ({ children, htmlFor, error, type, label }) => {
    const id = htmlFor || getChildId(children);
    return (
        <div className="form-control">
            {label && (
                <label className="auth-label" htmlFor={id}>
                    {label}
                </label>
            )}
            {children}
            {!!error && (
                <div role="alert" className="text-red-600 text-sm italic">
                    {error.message}
                </div>
            )}
        </div>
    );
};

const getChildId = (children) => {
    if (!children) return;
    const child = React.Children.only(children);
    if ("id" in child?.props) {
        return child.props.id;
    }
};

export default Field;
