import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { userLogin, userRegister } from "../services/allAPI";
function UserAuth({ register }) {
  const navigate = useNavigate();
  const isRegisterForm = register ? true : false;
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    phnnum: "",
    email: "",
    password: "",
  });

  const [repassword, setRepassword] = useState("");

  //handleregister
  const handleRegister = async (e) => {
    e.preventDefault();
    const { firstname, lastname, phnnum, email, password } = userData;

    if (
      !firstname ||
      !lastname ||
      !phnnum ||
      !email ||
      !password ||
      !repassword
    ) {
      toast.warn("Please fill the empty details");
    } else if (userData.password !== repassword) {
      toast.error("Password doesn't match");
    } else {
      //api calling

      try {
        const result = await userRegister(userData);
        // console.log(result);
        if (result.status === 200) {
          toast.success(`${result.data.firstname} has been registered`);
          navigate("/userlogin");
          setUserData({
            firstname: "",
            lastname: "",
            phnnum: "",
            email: "",
            password: "",
          });
          setRepassword("");
        } else {
          toast.warning(result.response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  // console.log(userData);
  // console.log(repassword);


  //handleLogin

  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userData

    if(!email||!password){
      toast.warn("Please fill the empty details");
    }else{
      try {
        const result = await userLogin({email,password})
        console.log(result);
        
        if(result.status === 200){
          
          sessionStorage.setItem("user details",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("username",result.data.existingUser.firstname)
          sessionStorage.setItem("token",result.data.token)
          navigate("/userdashboard")
           setUserData({email:"",password:""})
          
        }else{
          console.log(result.response.data);
        }
      } catch (error) {
        toast.error(error)
      }
    }
  }

  return (
    <div className=" p-5" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="container w-75">
          <div className="row align-items-center">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  width={"30%"}
                  alt=""
                />
              </div>
              <h5 className="text-dark text-center my-4">
                {isRegisterForm
                  ? "Sign Up to your Account "
                  : "Sign In to your Account"}
              </h5>
              <Form className="w-100 ">
                {isRegisterForm && (
                  <div>
                    <div className="d-flex gap-2">
                      <Form.Group
                        className="mb-3 "
                        controlId="exampleForm.ControlFirstname"
                      >
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              firstname: e.target.value,
                            })
                          }
                          value={userData.firstname}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 d-flex gap-2"
                        controlId="exampleForm.ControlLastname"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) =>
                            setUserData({ ...userData, lastname: e.target.value })
                          }
                          value={userData.lastname}
                        />
                      </Form.Group>
  
                    </div>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlNumber"
                    >
                      <Form.Control
                        type="number"
                        placeholder="Phone Number"
                        onChange={(e) =>
                          setUserData({ ...userData, phnnum: e.target.value })
                        }
                        value={userData.phnnum}
                      />
                    </Form.Group>
                    
                  </div>
                )}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlEmail"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlPswd"
                >
                  <Form.Control
                    type="Password"
                    placeholder="Enter Your Password"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    value={userData.password}
                  />
                </Form.Group>
                {isRegisterForm && (
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlRePswd"
                  >
                    <Form.Control
                      type="Password"
                      placeholder="Re-enter Your Password"
                      onChange={(e) => setRepassword(e.target.value)}
                      value={repassword}
                    />
                  </Form.Group>
                )}
              </Form>
              {isRegisterForm ? (
                <div className="text-center">
                  <button
                    className="btn btn-success text-light my-2"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  <p>
                    Already have a Account?Click here..
                    <Link
                      to={"/userlogin"}
                      style={{ textDecoration: "none", color: "darkblue" }}
                    >
                      Login
                    </Link>
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <button className="btn btn-success text-light my-2" onClick={handleLogin}>
                    Login
                  </button>
                  <p className="text-dark">
                    Don't have a Account?Click here..
                    <Link to={"/userreg"} style={{ textDecoration: "none" }}>
                      Register
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
