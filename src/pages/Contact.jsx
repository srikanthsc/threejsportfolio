import React, { Suspense, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hook/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
    const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isLoading,setIsLoading] = useState(false);
const [currentAnimation,setCurrentAnimation]= useState('idle')
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
      };
    const {alert, showAlert,hideAlert} =useAlert();

const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Srikanth",
          from_email: form.email,
          to_email: "srikanthcollaty92@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100hv]'>
        {alert.show && <Alert {...alert}/>}
        
      <div className="relative flex lg:flex-row flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14">
            {/* onSubmit={handleSubmit} */}
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Srikanth"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Srikanth@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how i can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
                {isLoading ? 'Sending ...' : 'Send Message'}

          </button>
          {/* Add similar code for email and message inputs */}
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
      <Canvas
      camera={{
        position:[0,0,5], fov: 75,
        near: 0.1,
        far: 1000,
      }}>

<directionalLight position={[0, 0, 1]} intensity={2.5} />
<ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
        <Suspense fallback={<Loader/>}>
<Fox
currentAnimation={currentAnimation}
 position={[0.5, 0.35, 0]}
 rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}/>
        </Suspense>
        

       
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
