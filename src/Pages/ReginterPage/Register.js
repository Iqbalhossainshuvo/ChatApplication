import React from 'react';

const Register = () => {
    return (
        <>
           <div class="auth-bg">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xl-3 col-lg-4">
                    <div class="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                        <div class="text-white-50">
                            <h3><a href="index.html" class="text-white"><i class="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"></i> Doot</a></h3>
                                <p class="font-size-16">Responsive Bootstrap 5 Chat App</p>
                        </div>
                        <div class="mt-auto">
                            <img src="assets/images/auth-img.png" alt="" class="auth-img" />
                        </div>
                    </div>
                </div>
               {/*  <!-- end col --> */}
                <div class="col-xl-9 col-lg-8">
                    <div class="authentication-page-content">
                        <div class="d-flex flex-column h-100 px-4 pt-4">
                            <div class="row justify-content-center my-auto">
                                <div class="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">

                                    <div class="py-md-5 py-4">

                                        <div class="text-center mb-5">
                                            <h3>Register Account</h3>
                                            <p class="text-muted">Get your free Doot account now.</p>
                                        </div>
                                        <form class="needs-validation" novalidate action="index.html">
                                            <div class="mb-3">
                                                <label for="useremail" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="useremail" placeholder="Enter email" required />
                                                <div class="invalid-feedback">
                                                    Please Enter Email
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="username" class="form-label">Username</label>
                                                <input type="text" class="form-control" id="username" placeholder="Enter username" required />
                                                <div class="invalid-feedback">
                                                    Please Enter Username
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="userpassword" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="userpassword" placeholder="Enter password" required />
                                                <div class="invalid-feedback">
                                                    Please Enter Password
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <p class="mb-0">By registering you agree to the Doot <a href="#" class="text-primary">Terms of Use</a></p>
                                            </div>

                                            <div class="mb-3">
                                                <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">Register</button>
                                            </div>
                                            <div class="mt-4 text-center">
                                                <div class="signin-other-title">
                                                    <h5 class="font-size-14 mb-4 title">Sign up using</h5>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div>
                                                            <button type="button" class="btn btn-light w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Facebook"><i class="mdi mdi-facebook text-indigo"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div>
                                                            <button type="button" class="btn btn-light w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Google"><i class="mdi mdi-google text-danger"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                     {/*    <!-- end form --> */}

                                        <div class="mt-5 text-center text-muted">
                                            <p>Already have an account ? <a href="auth-login.html" class="fw-medium text-decoration-underline">Login</a></p>
                                        </div>
                                    </div>
                                </div>
                               {/*  <!-- end col --> */}
                            </div>
                           {/*  <!-- end row --> */}

                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="text-center text-muted p-4">
                                        <p class="mb-0">&copy;
                                            <script>
                                                document.write(new Date().getFullYear())
                                            </script> Doot. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                    </div>
                                </div>
                             {/*    <!-- end col --> */}
                            </div>
                          {/*   <!-- end row --> */}

                        </div>
                    </div>
                </div>
              {/*   <!-- end col --> */}
            </div>
           {/*  <!-- end row --> */}
        </div>
       {/*  <!-- end container-fluid --> */}
    </div>
   {/*  <!-- end auth bg --> */}
        </>
    );
};

export default Register;