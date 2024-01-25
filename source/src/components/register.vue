<template>
    <div class="login-wrapper-flex">
        <div class="login-wrapper-contents">
            <a href=""><img src="assets/img/logo.png" alt="" /></a><img src="assets/img/single-page/login2.png" alt="img" />
        </div>
        <div class="login-wrapper-contents login-padding">
            <h2 class="single-title">Sign up!</h2>
            <form novalidate="" class="login-wrapper-form custom-form padding-top-20 ng-pristine ng-invalid ng-touched"
                ng-reflect-form="[object Object]">
                <div class="single-input mt-3">
                    <label class="label-title mb-3"> User Name </label><input type="text" formcontrolname="userName"
                        placeholder="Type User Name" class="form-control ng-pristine ng-invalid is-invalid ng-touched"
                        ng-reflect-name="userName" ng-reflect-ng-class="[object Object]" />
                    <div class="invalid-feedback ng-star-inserted">
                        <div class="ng-star-inserted">First Name is required</div>
                    </div>
                </div>
                <div class="single-input mt-3">
                    <label class="label-title mb-3"> Email </label><input id="email" formcontrolname="email" type="text"
                        placeholder=" Email " class="form--control ng-untouched ng-pristine ng-invalid"
                        ng-reflect-name="email" ng-reflect-ng-class="[object Object]" />
                </div>
                <div class="row">
                    <div class="col">
                        <div class="single-input mt-3">
                            <label class="label-title mb-3"> Full Name </label><input type="name" id="name"
                                formcontrolname="name" placeholder="Type Full Name"
                                class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-name="name"
                                ng-reflect-ng-class="[object Object]" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="single-input mt-3">
                            <label class="label-title mb-3"> Phone Number </label><input type="text"
                                formcontrolname="phoneNumber" id="phone" placeholder="Enter 10 digit phone Number"
                                class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-name="phoneNumber"
                                ng-reflect-ng-class="[object Object]" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="single-input mt-3">
                            <label class="label-title mb-3"> Create Password </label><input type="undefined"
                                formcontrolname="password" placeholder="Type Password"
                                class="form--control ng-untouched ng-pristine ng-invalid" ng-reflect-name="password"
                                ng-reflect-ng-class="[object Object]" />
                            <div class="icon toggle-password">
                                <i style="margin-left: -30px; cursor: pointer"><i aria-hidden="true"
                                        class="fa fa-eye-slash ng-star-inserted"></i></i>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="single-input mt-3">
                            <label class="label-title mb-3"> Confirm Password </label><input type="undefined"
                                formcontrolname="confirmPassword" placeholder="Confirm Password" required=""
                                class="form--control ng-untouched ng-pristine ng-invalid" ng-reflect-required=""
                                ng-reflect-name="confirmPassword" ng-reflect-ng-class="[object Object]" />
                        </div>
                    </div>
                </div>
                <div class="checkbox-inline mt-3">
                    <input type="checkbox" id="check15" class="check-input" /><label for="check15" class="checkbox-label">
                        By creating an account, you agree to the
                        <a href="javascript:void(0)" class="color-one">
                            terms of service
                        </a>
                        and <a href="javascript:void(0)" class="color-one"> Conditions </a>,
                        and
                        <a href="javascript:void(0)" class="color-one">
                            privacy policy
                        </a></label>
                </div>
                <button type="submit" id="signup" class="submit-btn w-100 mt-3 disabled" disabled="">
                    Sign Up Now</button><span class="account color-light mt-3">
                    Already have an account?
                    <a routerlink="/login" class="color-one" ng-reflect-router-link="/login" href="/login">
                        Login
                    </a></span>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
