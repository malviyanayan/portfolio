import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../css/contact.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://formspree.io/f/mwpkqjoy", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      reset();
    } catch (error) {
      console.error(error);
      alert(" Something went wrong. Try again later.");
    }
  };

return (
    <section
        id="contact-me"
        className="contact-section d-flex align-items-center justify-content-center"
    >
        <div className="container">
            {/* Section Heading */}
            <FadeInOnScroll>
                <h2 className="section-title" data-aos="fade-down">
                Get in Touch
            </h2>
            </FadeInOnScroll>

            {/* Contact Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact-form"
                data-aos="fade-up"
            >
                {/* Name */}
                <FadeInOnScroll>
                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                        <p className="error-text">{errors.name.message}</p>
                    )}
                </div>
                </FadeInOnScroll>

                {/* Email */}
                <FadeInOnScroll>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="error-text">{errors.email.message}</p>
                    )}
                </div>
                </FadeInOnScroll>

                {/* Message */}
                <FadeInOnScroll>
                    <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && (
                        <p className="error-text">{errors.message.message}</p>
                    )}
                </div>
                </FadeInOnScroll>

                {/* Submit */}
                <FadeInOnScroll>
                    <div className="form-submit">
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? (
                            "Sending..."
                        ) : (
                            <>
                                <i className="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: "8px" }}></i>
                                Send Message
                            </>
                        )}
                    </button>
                </div>
                </FadeInOnScroll>

                {/* Success Text */}
                {isSubmitSuccessful && (
                    <p className="success-text">
                        <i className="fa fa-check-circle" aria-hidden="true" style={{ color: "#28a745", marginRight: "6px" }}></i>
                        Your message has been sent!
                    </p>
                )}
            </form>
        </div>
    </section>
);
};

export default Contact;
