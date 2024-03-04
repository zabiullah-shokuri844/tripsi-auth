import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import tripsiLogo from '../img/tripsi.webp';
import Input from "../Components/Input";
import Button from '../Components/button';




function Login() {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('');

    function handleLogin(e) {
        e.preventDefault()

        let usersData = JSON.parse(localStorage.getItem("users"))

        let check = usersData.filter((item, index) => {
            return item.email === email && item.password === password
        })
        if (check.length > 0) {
            setError('success login')
        }
        else {
            setError('Invalid email or password')
        }
    }

    return (<>
        <div className="bg-third-light min-vh-100">
            <main className="bg-third-light min-vh-100 position-relative">
                <main className="backbox d-flex  justify-content-center p-4 min-vh-100 rtl">
                    <div className="backendBox  d-flex p-0 col-12 col-xl-9 col-lg-12 justify-content-center default-border-radius rounded-5 overflow-hidden shadow">
                        <section className="d-none d-md-flex w-100 box-container bg-white">
                            <div className="innerBox d-flex w-100 p-5 text-white rounded-bottom-5 rtl">
                                <div className="w-100 glass d-flex flex-column align-items-center justify-content-center rounded-5 default-border-radius">
                                    <div className=" d-flex logo   pt-2 px-0 justify-content-center  flex-column align-items-center">

                                        <img src={tripsiLogo} className='app-logo' alt="logo" />
                                    </div>

                                    <div className="d-flex  flex-column align-items-center justify-centent-center text-center  text-white">
                                        <h2 className="pb-2"></h2>
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
                                            <span>ورود</span>
                                        </h3>

                                        <div className="px-2 py-3 ">
                                            <form >
                                                <fieldset>
                                                    <Input type='email' label='ایمیل' value={email} onChange={(event) => setEmail(event.target.value)} icon={<i className="bi bi-person-fill"></i>} />
                                                </fieldset>

                                                <fieldset>
                                                    <Input type='password' id='pass' label='رمز عبور' value={password} onChange={(event) => setpassword(event.target.value)} icon={<i className="bi bi-key"></i>} />
                                                </fieldset>

                                                <Button type='submit' id='btn' backgroundColor='btn-secondary' label='ورود' onClick={(e) => {
                                                    handleLogin(e)
                                                }} />
                                            </form>
                                            <div className="d-flex font-small justify-content-between align-items-center pb-3 pt-4 font-weight-bold flex-column flex-md-row">
                                                <div className="text-dark text-start font-weight-bold pb-1 pb-md-0">
                                                    <span>با ارسال کد از طریق پیامک وارد شوید</span>
                                                </div>
                                                <div className="text-secondary cursor-pointer text-end px-1">
                                                    <span >رمز یکبار مصرف</span>
                                                </div>
                                            </div>
                                            <div className="d-flex font-small justify-content-between align-items-center pb-3 font-weight-bold flex-column flex-md-row cursor-pointer">
                                                <div className="text-dark text-start font-weight-bold pb-1 pb-md-0">
                                                    <span>رمز عبور خود را فراموش کرده اید؟</span>
                                                </div>
                                                <div className="text-secondary cursor-pointer font-weight-bold text-end px-1">
                                                    <span>بازیابی رمز عبور</span>
                                                </div>
                                            </div>
                                            <div class="d-flex font-small justify-content-between align-items-center pb-4 font-weight-bold flex-column flex-md-row">
                                                <div className="text-dark pb-1 pb-md-0 text-decoration-none"><span>قبلا ثبت نام نکرده اید؟</span></div>
                                                <div className="cursor-pointer px-1 do"><a href="/signup" className="text-secondary text-decoration-none">ثبت نام رایگان</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main >
            </main >
        </div >
    </>
    );
}

export default Login;