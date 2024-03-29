import React from 'react';

const ChangePassword = () => {
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
                                                    <h3>Change Password</h3>
                                                </div>
                                                <div class="user-thumb text-center mb-4">
                                                    <img src="assets/images/users/avatar-1.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                                    <h5 class="font-size-15 mt-3">Kathryn Swarey</h5>
                                                </div>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="oldpassword-input" class="form-label">Old Password</label>
                                                        <input type="password" class="form-control" id="oldpassword-input" placeholder="Enter Old Password" />
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="newpassword-input" class="form-label">New Password</label>
                                                        <div class="position-relative auth-pass-inputgroup mb-3">
                                                            <input type="password" class="form-control pe-5" placeholder="Enter New Password" id="password-input" />
                                                            <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="confirmpassword-input" class="form-label">Confirm New Password</label>
                                                        <input type="password" class="form-control" id="confirmpassword-input" placeholder="Enter Confirm Password" />
                                                    </div>

                                                    <div class="text-center mt-4">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button class="btn btn-primary w-100" type="submit">Save</button>
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-light w-100" type="button">Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/*    <!-- end form --> */}
                                            </div>
                                        </div>
                                        {/* <!-- end col --> */}
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
                                        {/*  <!-- end col --> */}
                                    </div>
                                    {/*  <!-- end row --> */}

                                </div>
                            </div>
                        </div>
                        {/*   <!-- end col --> */}
                    </div>
                    {/*   <!-- end row --> */}
                </div>
                {/*  <!-- end container-fluid --> */}
            </div>
            {/*  <!-- end auth bg --> */}
        </>
    );
};

export default ChangePassword;