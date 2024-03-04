
import React, { useState } from "react";
import Input from "../Components/Input";
import tripsiLog from '../img/tripsi.webp'
import { Link } from 'react-router-dom'
import Button from "../Components/button";

function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setphone] = useState('')
    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')


    function addUser(event) {
        event.preventDefault()
        let usersData = JSON.parse(localStorage.getItem("users")) || []
        let data = {
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            "email": Email,
            "password": password
        }
        usersData.push(data)
        localStorage.setItem("users", JSON.stringify(usersData))
        setFirstName("")
        setlastName('')
        setEmail('')
        setphone('')
        setpassword('')
    }



    return (
        <>
            <main className="bg-third-light min-vh-100 position-relative">
                <main className="backbox d-flex  justify-content-center p-4 min-vh-100 rtl">
                    <div className="backendBox  d-flex p-0 col-12 col-xl-9 col-lg-12 justify-content-center default-border-radius rounded-5 overflow-hidden shadow">
                        <section className="d-none d-md-flex w-100 box-container bg-white">
                            <div className="innerBox d-flex w-100 p-5 text-white rounded-bottom-5 rtl">
                                <div className="w-100 glass d-flex flex-column align-items-center justify-content-center rounded-5 default-border-radius">
                                    <div className=" d-flex logo   pt-2 px-0 justify-content-center  flex-column align-items-center">
                                        <img src={tripsiLog} className='app-logo' alt="logo" />
                                    </div>
                                    <div className="d-flex  flex-column align-items-center justify-centent-center text-center  text-white">
                                        <h2 class="pb-2"></h2>
                                        <h6>معتبرترین عرضه‌کننده خدمات گردشگری در ایران </h6>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="d-flex w-100 bg-primary-light  radius">
                            <div className="d-flex w-100 justify-content-center bg-white bend">
                                <div className="d-flex justify-content-center align-items-center col-10">
                                    <div className="flex-column  align-items-start w-100"><div>
                                        <h3 className="text-primary-dark d-flex justify-content-center py-5">
                                            <span>ثبت نام </span>
                                        </h3>

                                        <div className="px-2 py-3 ">
                                            <form>
                                                <fieldset>
                                                    <Input type="text" label='نام' value={firstName} onChange={(event) => setFirstName(event.target.value)} icon={<i className="bi bi-person-fill"></i>} />

                                                </fieldset>

                                                <fieldset>
                                                    <Input type="text" label='نام خانوادگی' value={lastName} onChange={(event) => setlastName(event.target.value)} icon={<i className="bi bi-person-fill"></i>} />

                                                </fieldset>

                                                <fieldset>
                                                    <Input type="number" label='شماره موبایل ' value={phone} onChange={(event) => setphone(event.target.value)} />

                                                </fieldset>

                                                <fieldset>
                                                    <Input type="email" label='ایمیل' value={Email} onChange={(event) => setEmail(event.target.value)} icon={<i className="bi bi-person-fill"></i>} />

                                                </fieldset>

                                                <fieldset>
                                                    <Input type="password" label='رمز عبور' value={password} onChange={(event) => setpassword(event.target.value)} icon={<i className="bi bi-key"></i>} />

                                                </fieldset>
                                                <Button type='submit' id='signup-btn' backgroundColor='btn-secondary' label='ثبت نام' onClick={(event) => {
                                                    addUser(event)
                                                }} />

                                                <fieldset class="d-flex flex-column font-small font-weight-bold pt-3">
                                                    <div class="d-flex justify-content-center justify-content-md-start align-items-center">
                                                        <div className=" exp input-checkBox-light-mode">
                                                            <input className="checkBoxLabel cursor-pointer d-none" type="checkbox" id="agree" name="agree" />

                                                            <label className="checkBoxLabel cursor-pointer d-flex align-items-center  text-info m-0 " for="agree" tabindex="0">
                                                                <div tabindex="0" id="spanagree" class="mx-1 d-inline-block checkBoxSpan text-muted"></div>

                                                                <div className="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="myChickbox" onClick={(event) =>
                                                                        addUser(event)} />
                                                                    <label class="form-check-label" for="flexCheckDefault"></label>
                                                                </div>
                                                            </label>

                                                        </div><a class="m-0 mx-1 text-primary text-decoration-none" href="#"><span>قوانین تریپسی را می پذیرم</span></a></div>
                                                    <div className=" text-danger validation-container w-100 d-flex justify-content-start px-3 pt-1 overflow-auto font-small"></div>
                                                </fieldset>
                                                <fieldset class="d-flex flex-column flex-md-row justify-content-between align-items-center font-small font-weight-bold pt-1 px-1">
                                                    <div class="text-dark pb-0 pb-sm-1"><span>قبلا عضو تریپسی بوده ام</span>
                                                    </div><div class="text-secondary cursor-pointer px-1 "><Link to="/Login" className='text-decoration-none'><span>ورود</span></Link>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </main>
        </>
    );
};
export default Signup;
